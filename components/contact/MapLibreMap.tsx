"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map as MapLibreMapType, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { offices } from "@/data/offices";

export default function MapLibreMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMapType | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const userMarkerRef = useRef<Marker | null>(null);

  const [activeId, setActiveId] = useState<string>(offices[0].id);
  const [locating, setLocating] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const activeOffice = offices.find((o) => o.id === activeId) || offices[0];

  // INITIALIZE MAP (once)
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [offices[0].lng, offices[0].lat],
      zoom: 15,
      attributionControl: false,
    });

    map.on("load", () => {
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
      map.addControl(
        new maplibregl.AttributionControl({ compact: true }),
        "bottom-right"
      );

      map.addSource("accuracy-source", {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] },
      });
      map.addLayer({
        id: "accuracy-circle-fill",
        type: "fill",
        source: "accuracy-source",
        paint: { "fill-color": "#2196f3", "fill-opacity": 0.15 },
      });
      map.addLayer({
        id: "accuracy-circle-stroke",
        type: "line",
        source: "accuracy-source",
        paint: { "line-color": "#2196f3", "line-width": 2, "line-opacity": 0.5 },
      });

      offices.forEach((office) => {
        const el = document.createElement("div");
        el.className = "parwaaz-pin";
        el.dataset.officeId = office.id;
        el.innerHTML = `
          <div class="parwaaz-pin-pulse"></div>
          <div class="parwaaz-pin-pulse parwaaz-pin-pulse-2"></div>
          <div class="parwaaz-pin-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `;
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          setActiveId(office.id);
        });

        const popup = new maplibregl.Popup({
          offset: 30,
          closeButton: false,
          className: "parwaaz-popup",
          focusAfterOpen: false,
        }).setHTML(`
          <div class="parwaaz-popup-inner">
            <div class="parwaaz-popup-city">${office.city}</div>
            <div class="parwaaz-popup-title">${office.address}</div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}"
               target="_blank" rel="noopener noreferrer" class="parwaaz-popup-link">
              Get Directions →
            </a>
          </div>
        `);

        const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
          .setLngLat([office.lng, office.lat])
          .setPopup(popup)
          .addTo(map);

        markersRef.current.push(marker);
      });
    });

    mapRef.current = map;

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // FLY TO ACTIVE OFFICE
  useEffect(() => {
    if (!mapRef.current) return;
    const office = offices.find((o) => o.id === activeId);
    if (!office) return;

    const lockedScrollY = window.scrollY;
    const restoreScroll = () => {
      if (window.scrollY !== lockedScrollY) {
        window.scrollTo({ top: lockedScrollY, behavior: "instant" as ScrollBehavior });
      }
    };
    const t1 = setTimeout(restoreScroll, 0);
    const t2 = setTimeout(restoreScroll, 100);
    const t3 = setTimeout(restoreScroll, 500);
    const t4 = setTimeout(restoreScroll, 1500);

    mapRef.current.flyTo({
      center: [office.lng, office.lat],
      zoom: 16,
      duration: 1400,
      essential: true,
    });

    markersRef.current.forEach((m) => {
      const el = m.getElement();
      const isActive = el.dataset.officeId === activeId;
      el.classList.toggle("parwaaz-pin-active", isActive);
    });

    const activeMarker = markersRef.current.find(
      (m) => m.getElement().dataset.officeId === activeId
    );
    if (activeMarker && !activeMarker.getPopup().isOpen()) {
      activeMarker.togglePopup();
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [activeId]);

  const createCircleGeoJSON = (lng: number, lat: number, radiusMeters: number) => {
    const points = 64;
    const coords: [number, number][] = [];
    const distanceX = radiusMeters / (111320 * Math.cos((lat * Math.PI) / 180));
    const distanceY = radiusMeters / 110540;
    for (let i = 0; i < points; i++) {
      const theta = (i / points) * (2 * Math.PI);
      coords.push([lng + distanceX * Math.cos(theta), lat + distanceY * Math.sin(theta)]);
    }
    coords.push(coords[0]);
    return {
      type: "FeatureCollection" as const,
      features: [{
        type: "Feature" as const,
        properties: {},
        geometry: { type: "Polygon" as const, coordinates: [coords] },
      }],
    };
  };

  const handleLocate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!navigator.geolocation) {
      alert("Geolocation isn't supported by your browser.");
      return;
    }
    if (!mapRef.current) return;

    const lockedScrollY = window.scrollY;
    const restoreScroll = () => {
      if (window.scrollY !== lockedScrollY) {
        window.scrollTo({ top: lockedScrollY, behavior: "instant" as ScrollBehavior });
      }
    };

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy: accuracyMeters } = pos.coords;
        setLocating(false);
        setAccuracy(Math.round(accuracyMeters));
        if (!mapRef.current) return;

        if (userMarkerRef.current) userMarkerRef.current.remove();

        const el = document.createElement("div");
        el.className = "parwaaz-user-pin";
        el.innerHTML = `<div class="parwaaz-user-pin-pulse"></div><div class="parwaaz-user-pin-dot"></div>`;

        userMarkerRef.current = new maplibregl.Marker({ element: el, anchor: "center" })
          .setLngLat([longitude, latitude])
          .setPopup(
            new maplibregl.Popup({ offset: 15, closeButton: false, focusAfterOpen: false }).setHTML(
              `<div class="parwaaz-popup-inner">
                <div class="parwaaz-popup-title">Your Location</div>
                <div class="parwaaz-popup-sub">Accuracy: ±${Math.round(accuracyMeters)} m</div>
              </div>`
            )
          )
          .addTo(mapRef.current);

        const source = mapRef.current.getSource("accuracy-source") as maplibregl.GeoJSONSource | undefined;
        if (source) source.setData(createCircleGeoJSON(longitude, latitude, accuracyMeters));

        let targetZoom = 15;
        if (accuracyMeters > 1000) targetZoom = 11;
        else if (accuracyMeters > 500) targetZoom = 13;
        else if (accuracyMeters > 100) targetZoom = 14;
        else if (accuracyMeters > 50) targetZoom = 15;
        else targetZoom = 16;

        setTimeout(restoreScroll, 0);
        setTimeout(restoreScroll, 100);
        setTimeout(restoreScroll, 500);
        setTimeout(restoreScroll, 1500);

        mapRef.current.flyTo({
          center: [longitude, latitude],
          zoom: targetZoom,
          duration: 1400,
          essential: true,
        });
      },
      (err) => {
        setLocating(false);
        alert("Could not get your location: " + err.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleTabClick = (e: React.MouseEvent, officeId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveId(officeId);
  };

  const accuracyText = accuracy === null
    ? null
    : accuracy < 1000 ? `±${accuracy} m` : `±${(accuracy / 1000).toFixed(1)} km`;

  const accuracyQuality = accuracy === null
    ? null
    : accuracy < 30 ? { label: "High", color: "#00b347" }
    : accuracy < 200 ? { label: "Good", color: "#0ca53b" }
    : accuracy < 1000 ? { label: "Approx.", color: "#f59e0b" }
    : { label: "Low", color: "#ef4444" };

  return (
    <>
      <style jsx global>{`
        .contact-map-orbit-dot,
        .contact-map-glow { display: none !important; }

        /* ============ TAB BAR ============ */
        .parwaaz-map-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 12px;
          align-items: stretch;
        }
        @media (max-width: 480px) {
          .parwaaz-map-tabs { gap: 6px; }
        }

        .parwaaz-map-tab {
          width: 100%;
          padding: 11px 12px;
          font-size: 12.5px;
          font-weight: 600;
          color: #5a5a5a;
          background: rgba(255, 255, 255, 0.9);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: var(--font-poppins), sans-serif;
          white-space: nowrap;
          text-align: center;
        }
        .parwaaz-map-tab:hover {
          border-color: rgba(0, 254, 78, 0.4);
          color: #00b347;
        }
        .parwaaz-map-tab.active {
          background: linear-gradient(90deg, #00FE4E 0%, #00D043 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 6px 18px rgba(0, 254, 78, 0.45), 0 0 0 2px rgba(0, 254, 78, 0.15);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
        }

        /* ============ ACTION ROW ============ */
        .parwaaz-map-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .parwaaz-map-locate {
          padding: 10px 16px;
          font-size: 12.5px;
          font-weight: 600;
          color: #00b347;
          background: rgba(0, 254, 78, 0.1);
          border: 1.5px solid rgba(0, 254, 78, 0.3);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-poppins), sans-serif;
          white-space: nowrap;
        }
        .parwaaz-map-locate:hover {
          background: #00fe4e;
          color: #050505;
          border-color: #00fe4e;
        }
        .parwaaz-map-locate:disabled { opacity: 0.6; cursor: not-allowed; }

        .parwaaz-accuracy-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          font-size: 11.5px;
          font-weight: 600;
          color: #050505;
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(33, 150, 243, 0.3);
          border-radius: 10px;
          font-family: var(--font-poppins), sans-serif;
          backdrop-filter: blur(6px);
          white-space: nowrap;
        }
        .parwaaz-accuracy-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .parwaaz-accuracy-quality {
          font-size: 10.5px;
          color: #6a6a6a;
          font-weight: 500;
        }

        /* ============ MAP ============ */
        .parwaaz-map {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        @media (max-width: 768px) {
          .parwaaz-map {
            border-radius: 16px;
            aspect-ratio: 4 / 3.2;
          }
        }
        .parwaaz-map .maplibregl-canvas {
          filter: saturate(0.85) brightness(1.02);
        }

        /* ============ OFFICE PIN — FIXED ============ */
        .parwaaz-pin {
          position: relative;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        .parwaaz-pin-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 40px;
          background: #00fe4e;
          color: #050505;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 3px rgba(0, 254, 78, 0.25), 0 6px 16px rgba(0, 254, 78, 0.45);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 2;
        }
        .parwaaz-pin-icon svg {
          width: 18px;
          height: 18px;
          transform: rotate(45deg);
          display: block;
        }
        .parwaaz-pin:hover .parwaaz-pin-icon {
          transform: rotate(-45deg) scale(1.1);
          box-shadow: 0 0 0 4px rgba(0, 254, 78, 0.35), 0 10px 22px rgba(0, 254, 78, 0.6);
        }
        .parwaaz-pin-active .parwaaz-pin-icon {
          transform: rotate(-45deg) scale(1.2);
          box-shadow: 0 0 0 5px rgba(0, 254, 78, 0.4), 0 12px 28px rgba(0, 254, 78, 0.7);
        }
        .parwaaz-pin-pulse {
          position: absolute;
          left: 4px;
          top: 4px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.5);
          animation: parwaazPinPulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          z-index: 1;
        }
        .parwaaz-pin-pulse-2 { animation-delay: 1.2s; }
        @keyframes parwaazPinPulse {
          0% { transform: scale(0.6); opacity: 0.85; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        /* USER LOCATION PIN */
        .parwaaz-user-pin {
          position: relative;
          width: 24px;
          height: 24px;
        }
        .parwaaz-user-pin-dot {
          position: absolute;
          inset: 0;
          background: #2196f3;
          border: 3px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.4), 0 4px 12px rgba(33, 150, 243, 0.5);
        }
        .parwaaz-user-pin-pulse {
          position: absolute;
          inset: -4px;
          background: rgba(33, 150, 243, 0.3);
          border-radius: 50%;
          animation: userPinPulse 2.2s ease-in-out infinite;
        }
        @keyframes userPinPulse {
          0% { transform: scale(0.8); opacity: 0.9; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        /* POPUP */
        .maplibregl-popup-content {
          padding: 0 !important;
          border-radius: 12px !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14) !important;
          overflow: hidden;
          max-width: 280px;
        }
        .maplibregl-popup-tip { border-top-color: #ffffff !important; }
        .parwaaz-popup-inner {
          padding: 14px 16px;
          font-family: var(--font-poppins), sans-serif;
        }
        .parwaaz-popup-city {
          font-size: 11px;
          font-weight: 700;
          color: #00b347;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }
        .parwaaz-popup-title {
          font-size: 13px;
          font-weight: 600;
          color: #050505;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .parwaaz-popup-sub {
          font-size: 12px;
          color: #6a6a6a;
          margin-bottom: 8px;
        }
        .parwaaz-popup-link {
          font-size: 11px;
          font-weight: 600;
          color: #00b347;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.25s ease;
        }
        .parwaaz-popup-link:hover { gap: 8px; }

        /* MAPLIBRE CONTROLS */
        .maplibregl-ctrl-group {
          border: none !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
          border-radius: 10px !important;
          overflow: hidden;
        }
        .maplibregl-ctrl-group button {
          background: #ffffff !important;
          color: #050505 !important;
          transition: background 0.2s ease;
        }
        .maplibregl-ctrl-group button:hover {
          background: #00fe4e !important;
        }
        .maplibregl-ctrl-attrib {
          font-size: 10px !important;
          background: rgba(255, 255, 255, 0.85) !important;
        }

        /* ============ ADDRESS INFO CARD (below map) ============ */
        .parwaaz-office-info {
          margin-top: 16px;
          padding: 20px 22px;
          background: linear-gradient(135deg, #ffffff 0%, #f7fdf9 100%);
          border: 1.5px solid rgba(0, 254, 78, 0.18);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
          font-family: var(--font-poppins), sans-serif;
          animation: officeInfoIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes officeInfoIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .parwaaz-office-city {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #00b347;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .parwaaz-office-city::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #00fe4e;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 254, 78, 0.6);
        }

        .parwaaz-office-name {
          font-size: 17px;
          font-weight: 700;
          color: #050505;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .parwaaz-office-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .parwaaz-office-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #2a2a2a;
          line-height: 1.5;
        }
        .parwaaz-office-row svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #00b347;
        }
        .parwaaz-office-row a {
          color: #2a2a2a;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .parwaaz-office-row a:hover {
          color: #00b347;
        }

        .parwaaz-office-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 10px 18px;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #050505;
          background: linear-gradient(90deg, #00FE4E 0%, #0CA53B 100%);
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 6px 16px rgba(0, 254, 78, 0.35);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.25s ease;
        }
        .parwaaz-office-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 254, 78, 0.5);
        }
        .parwaaz-office-cta svg { transition: transform 0.25s ease; }
        .parwaaz-office-cta:hover svg { transform: translateX(3px); }

        @media (max-width: 480px) {
          .parwaaz-office-info { padding: 16px 18px; }
          .parwaaz-office-name { font-size: 15px; }
          .parwaaz-office-row { font-size: 12.5px; }
        }
      `}</style>

      {/* CITY TABS */}
      <div className="parwaaz-map-tabs">
        {offices.map((office) => (
          <button
            key={office.id}
            type="button"
            onClick={(e) => handleTabClick(e, office.id)}
            className={`parwaaz-map-tab ${activeId === office.id ? "active" : ""}`}
          >
            {office.city}
          </button>
        ))}
      </div>

      {/* ACTION ROW */}
      <div className="parwaaz-map-actions">
        <button
          type="button"
          onClick={handleLocate}
          disabled={locating}
          className="parwaaz-map-locate"
          title="Use my current location"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M22 12h-3M5 12H2" />
          </svg>
          {locating ? "Locating..." : "My Location"}
        </button>

        {accuracyText && accuracyQuality && (
          <div className="parwaaz-accuracy-badge">
            <span className="parwaaz-accuracy-dot" style={{ background: accuracyQuality.color }} />
            <span>{accuracyText}</span>
            <span className="parwaaz-accuracy-quality" style={{ color: accuracyQuality.color }}>
              ({accuracyQuality.label})
            </span>
          </div>
        )}
      </div>

      <div ref={mapContainer} className="parwaaz-map" />

      {/* OFFICE INFO CARD — shows full address for the active office */}
      <div key={activeOffice.id} className="parwaaz-office-info">
        <div className="parwaaz-office-city">{activeOffice.city} Office</div>

        <div className="parwaaz-office-name">Parwaaz — {activeOffice.city}, {activeOffice.country}</div>

        <div className="parwaaz-office-rows">
          {/* Address */}
          <div className="parwaaz-office-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{activeOffice.address}</span>
          </div>

          {/* Phone */}
          <div className="parwaaz-office-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href={`tel:${activeOffice.phone.replace(/\s/g, "")}`}>{activeOffice.phone}</a>
          </div>

          {/* Email */}
          <div className="parwaaz-office-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href={`mailto:${activeOffice.email}`}>{activeOffice.email}</a>
          </div>
        </div>

        {/* Get Directions CTA */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${activeOffice.lat},${activeOffice.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="parwaaz-office-cta"
        >
          Get Directions
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </>
  );
}