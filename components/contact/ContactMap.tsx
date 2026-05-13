"use client";

import dynamic from "next/dynamic";

const MapLibreMap = dynamic(() => import("./MapLibreMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        aspectRatio: "4/3",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #f0fff5 0%, #e8fff0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#00b347",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      Loading map...
    </div>
  ),
});

export default function ContactMap() {
  return (
    <>
      <style jsx global>{`
        /* KILL any stray orbit dots that may exist from earlier versions */
        .contact-map-orbit-dot,
        .contact-map-glow {
          display: none !important;
        }
      `}</style>
      <div style={{ position: "relative", width: "100%" }}>
        <MapLibreMap />
      </div>
    </>
  );
}