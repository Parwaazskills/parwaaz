"use client";

import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { successStories } from "@/data/successStories";

export default function AlumniSection() {
  const [active, setActive] = useState(0);
  const [panelAnimKey, setPanelAnimKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleStoryClick = (index: number) => {
    setActive(index);
    setPanelAnimKey((k) => k + 1);
    setTimeout(() => {
      testimonialRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* ============================================================
          Scoped <style jsx> for things Tailwind can't do cleanly:
          - Pin pulse keyframes
          - Bubble tail rotation
          - Panel-in animation
          - Map image with calc() positioning
          - Dynamic transform states on hover/active pins
          ============================================================ */}
      <style jsx>{`
        .alumni-section {
          position: relative;
        }

        /* ============ MAP STAGE ============ */
        .alumni-map-stage {
          position: relative;
          width: 100%;
          max-width: 100%;
          padding: 20px 24px 0;
          height: 1080px;
        }
        @media (max-width: 1024px) {
          .alumni-map-stage {
            padding: 40px 16px 40px;
            height: auto;
            aspect-ratio: 16 / 10;
          }
        }

        /* ============ WORLD MAP ============ */
        .world-map.png {
          position: absolute;
          inset: 24px 0 24px;
          width: 100%;
          height: calc(100% - 98px);
          object-fit: contain;
          opacity: 0.48;
          filter: grayscale(1) brightness(1.1);
          display: block;
          z-index: 1;
          pointer-events: none;
          border-radius: 12px;
        }
        @media (max-width: 1024px) {
          .world-map {
            inset: 20px 16px 20px;
            width: calc(100% - 32px);
            height: calc(100% - 40px);
          }
        }
    @media (max-width: 768px) {
  .alumni-map-stage {
    height: auto;
    aspect-ratio: 16 / 10;
  }
  
  /* ⬇ ADD THIS RULE BELOW */
  .world-map {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width:100%;
    max-width: 100%;
    opacity: 0.35;
    height: auto;
    inset: auto;
    z-index: 1;
  }
        }

        /* ============ MAP DOT PATTERN ============ */
        .alumni-map-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(5, 5, 5, 0.18) 1.1px, transparent 1.1px);
          background-size: 18px 18px;
          mix-blend-mode: multiply;
          opacity: 0.45;
          pointer-events: none;
        }

        /* ============ PIN (button positioned on map) ============ */
        .alumni-pin {
          position: absolute;
          z-index: 5;
          width: 0;
          height: 0;
          padding: 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        .alumni-pin-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: transparent;
          transform: translate(-50%, -50%);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .alumni-pin-active .alumni-pin-dot {
          background: #00FE4E;
          box-shadow: 0 0 0 3px rgba(0, 254, 78, 0.25), 0 0 16px rgba(0, 254, 78, 0.8);
        }
        .alumni-pin-pulse {
          position: absolute;
          inset: -6px;
          border: 2px solid #00FE4E;
          border-radius: 50%;
          opacity: 0;
          animation: alumniPinPulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          pointer-events: none;
        }
        .alumni-pin-pulse-2 { animation-delay: 1.1s; }
        @keyframes alumniPinPulse {
          0% { transform: scale(0.6); opacity: 0.85; }
          100% { transform: scale(3.2); opacity: 0; }
        }

        /* ============ BUBBLE (label above pin) — DESKTOP FIXED SIZE ============ */
        .alumni-bubble {
          position: absolute;
          left: 0;
          bottom: 2px;
          display: inline-flex;
          align-items: center;
          width: 235px;
          min-width: 235px;
          max-width: 235px;
          height: 72px;
          gap: 12px;
          padding: 8px 14px 8px 10px;
          background: #ffffff;
          border: 1.5px solid #eeeeee;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(5, 5, 5, 0.08), 0 1px 3px rgba(5, 5, 5, 0.04);
          white-space: nowrap;
          transform: translate(-50%, -100%);
          transform-origin: bottom center;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background 0.35s ease;
          will-change: transform, box-shadow;
          overflow: visible;
        }
        .alumni-bubble-tail {
          position: absolute;
          left: 50%;
          bottom: -7px;
          width: 14px;
          height: 14px;
          background: #ffffff;
          border-right: 1.5px solid #eeeeee;
          border-bottom: 1.5px solid #eeeeee;
          transform: translateX(-50%) rotate(45deg);
          transition: border-color 0.35s ease, background 0.35s ease;
        }

        /* HOVER state */
        .alumni-pin:hover .alumni-bubble {
          box-shadow: 0 14px 36px rgba(5, 5, 5, 0.18), 0 4px 10px rgba(5, 5, 5, 0.08), 0 0 0 2px rgba(0, 254, 78, 0.15);
          border-color: rgba(0, 254, 78, 0.45);
          transform: translate(-50%, -100%) translateY(-6px) scale(1.06);
        }
        .alumni-pin:hover .alumni-bubble-tail {
          border-right-color: rgba(0, 254, 78, 0.45);
          border-bottom-color: rgba(0, 254, 78, 0.45);
        }
        .alumni-pin:hover .alumni-bubble-watch-arrow {
          transform: translateX(2px);
        }

        /* ACTIVE state — SAME SIZE as inactive on desktop, only color/glow differs */
        .alumni-pin-active .alumni-bubble {
          width: 235px;
          min-width: 235px;
          max-width: 235px;
          height: 72px;
          padding: 8px 14px 8px 10px;
          gap: 12px;
          border-color: #00FE4E;
          box-shadow: 0 22px 50px rgba(0, 254, 78, 0.32), 0 0 0 3px rgba(0, 254, 78, 0.2), 0 8px 18px rgba(5, 5, 5, 0.12);
          z-index: 6;
          transform: translate(-50%, -100%) translateY(-4px) scale(1.5);
        }
        .alumni-pin-active .alumni-bubble-tail {
          border-right-color: #00FE4E;
          border-bottom-color: #00FE4E;
        }

       /* ============ BUBBLE IMAGE (consolidated from globals.css) ============ */
        .alumni-bubble-img-wrap {
          position: relative;
          flex: 0 0 46px;
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 8px;
          overflow: hidden;
          background: transparent;
        }
        .alumni-bubble-img-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        /* ============ BUBBLE TEXT ============ */
        .alumni-bubble-text {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }
        .alumni-bubble-city {
          font-family: var(--font-poppins), sans-serif;
          font-size: 23px;
          line-height: 1;
          font-weight: 700;
          color: #050505;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .alumni-pin-active .alumni-bubble-city {
          color: #000572;
          font-size: 23px;
        }
        .alumni-bubble-watch {
          margin-top: 3px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 12px;
          line-height: 1;
          font-weight: 600;
          color: #000572;
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .alumni-pin-active .alumni-bubble-watch { font-size: 12px; }
        .alumni-bubble-watch-arrow {
          display: inline-block;
          font-size: 8px;
          color: #00b347;
          transition: transform 0.3s ease;
        }

        /* ============ TABLET (≤1024px) ============ */
        @media (max-width: 1024px) {
          .alumni-bubble { padding: 7px 12px 7px 7px; gap: 4px; }
          .alumni-bubble-img-wrap {
            flex: 0 0 28px;
            width: 38px;
            height: 38px;
            min-width: 28px;
          }
          .alumni-bubble-city { font-size: 12px; }
          .alumni-bubble-watch { font-size: 9.5px; }
          .alumni-pin-active .alumni-bubble {
            transform: translate(-50%, -100%) translateY(-8px) scale(1.25);
            padding: 10px 14px 10px 10px;
          }
          .alumni-pin-active .alumni-bubble-img-wrap {
            flex: 0 0 38px;
            width: 38px;
            height: 38px;
            min-width: 38px;
          }
          .alumni-pin-active .alumni-bubble-city { font-size: 13px; }
        }

        /* ============ MOBILE (≤768px) ============ */
        @media (max-width: 768px) {
          .alumni-bubble {
            display: flex;
            align-items: center;
            gap: 6px;
            width: 155px;
            min-width: 155px;
            max-width: 155px;
            height: 42px;
            padding: 4px 10px 4px 4px;
            overflow: visible;
            white-space: nowrap;
          }
          .alumni-pin-active .alumni-bubble {
  width: 145px;          /* was 165px */
  min-width: 145px;      /* was 165px */
  max-width: 145px;      /* was 165px */
  height: 48px;          /* was 56px */
  padding: 4px 10px 4px 4px;
  transform: translate(-50%, -100%) translateY(-4px) scale(1);
  overflow: hidden;
  align-items: center;
}
          .alumni-bubble-img-wrap {
            flex: 0 0 38px;
            width: 38px;
            height: 38px;
            min-width: 38px;
            border-radius: 8px;
          }
          .alumni-pin-active .alumni-bubble-img-wrap {
            flex: 0 0 46px;
            width: 46px;
            height: 46px;
            min-width: 46px;
            border-radius: 8px;
          }
          .alumni-bubble-text {
            flex: 1;
            min-width: 0;
            overflow: visible;
          }
          .alumni-bubble-city {
            font-size: 10px;
            line-height: 1.05;
            font-weight: 800;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .alumni-pin-active .alumni-bubble-city { font-size: 10.5px; }
          .alumni-bubble-watch {
            font-size: 7.5px;
            line-height: 1;
            font-weight: 800;
            letter-spacing: 0.03em;
            white-space: nowrap;
          }
          .alumni-pin-active .alumni-bubble-watch { font-size: 7.5px; }
          .alumni-bubble-watch-arrow { display: none; }
          .alumni-pin-active .alumni-bubble-watch-arrow {
            display: inline-block;
            font-size: 10px;
            margin-right: -10px;
            color: #00b347;
          }
        }

        /* ============ SMALL MOBILE (≤480px) ============ */
        @media (max-width: 480px) {
          .alumni-section { padding: 20px 14px 44px; }
          .alumni-bubble {
            width: 100px;
            min-width: 100px;
            max-width: 100px;
            height: 36px;
            padding: 4px 6px;
          }
          .alumni-bubble-img-wrap {
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            min-width: 20px;
          }
          .alumni-bubble-city { font-size: 8.5px; }
          .alumni-bubble-watch { font-size: 6.5px; }
        }

        /* ============ TESTIMONIAL PANEL (animation only — layout in Tailwind) ============ */
        @keyframes alumniPanelIn {
          0% { opacity: 0; transform: translateY(24px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .alumni-panel {
          animation: alumniPanelIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
        }
        @media (max-width: 768px) {
          .alumni-panel {
            margin-top: 530px;
            width: 100%;
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .alumni-panel > div:first-child {
            width: 100%;
            height: 165px;
            border-radius: 14px;
          }
          .alumni-panel > div:first-child img { object-fit: cover; }
          .alumni-panel > div:nth-child(2) { width: 100%; }
          .alumni-panel h3 { font-size: 20px; line-height: 1.35; }
          .alumni-panel p { font-size: 13px; line-height: 1.5; }
        }
        @media (max-width: 480px) {
          .alumni-panel { padding: 16px; }
          .alumni-panel h3 { font-size: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .alumni-pin-pulse { animation: none; opacity: 0; }
          .alumni-panel { animation: none; }
          .alumni-bubble { transition: none; }
        }
      `}</style>

   <section className="alumni-section pt-24 md:pt-24 pb-20 bg-white">
        {/* HEADER — pure Tailwind */}
        <div className="text-center mb-4 px-4">
          <p className="text-xs tracking-widest text-gray-500">SUCCESS STORIES</p>

          <h2
            className="mt-3 text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "0px",
              fontFamily: "Inter, sans-serif",
              backgroundImage: "linear-gradient(90deg, #00FE4E 0%, #000572 100%)",
              WebkitBackgroundClip: "text",
              margin: 0,
            }}
          >
            PARTNERS ACROSS GLOBAL MARKETS
          </h2>
          <p className="gsap-words text-gray-500 mt-2">
            Delivering integrated solutions across international markets.
          </p>
        </div>

        {/* MAP — needs scoped CSS for absolute positioning of pins */}
        <div className="alumni-map-stage">
          <img src="/world-map.png" alt="" className="world-map.png" />
          <div className="alumni-map-dots" aria-hidden="true" />

          {successStories.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.city}
                type="button"
                onClick={() => handleStoryClick(i)}
                style={{
                  top: isMobile && item.yMobile ? item.yMobile : item.y,
                  left: isMobile && item.xMobile ? item.xMobile : item.x,
                }}
                className={`alumni-pin ${isActive ? "alumni-pin-active" : ""}`}
                aria-label={`Watch ${item.city} story`}
                aria-pressed={isActive}
              >
                <span className="alumni-pin-dot" aria-hidden="true">
                  {isActive && (
                    <>
                      <span className="alumni-pin-pulse alumni-pin-pulse-1" />
                      <span className="alumni-pin-pulse alumni-pin-pulse-2" />
                    </>
                  )}
                </span>

                <span className="alumni-bubble">
                  <span className="alumni-bubble-img-wrap">
                    <img src={item.img} alt={item.city} />
                  </span>
                  <span className="alumni-bubble-text">
                    <span className="alumni-bubble-city">{item.city}</span>
                    <span className="alumni-bubble-watch">
                      WATCH NOW <span className="alumni-bubble-watch-arrow">▶</span>
                    </span>
                  </span>
                  <span className="alumni-bubble-tail" aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>

        {/* TESTIMONIAL — Tailwind for layout, scoped CSS for entry animation */}
        <div ref={testimonialRef} className="-mt-[500px] md:-mt-23 max-w-[1100px] mx-auto px-4 relative z-10">
          <div
            key={`alumni-panel-${panelAnimKey}`}
            className="alumni-panel bg-black rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* LEFT — Video thumbnail */}
            <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-neutral-900">
              <img
                src={successStories[active].video}
                alt={successStories[active].city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00FE4E] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                  <Play className="text-black" />
                </div>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="text-white w-full md:w-1/2">
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                FEATURED STORY
              </span>
              <p className="text-green-400 mt-3 text-sm tracking-widest">
                DIGITAL LEARNING
              </p>
              <h3 className="text-lg md:text-2xl font-semibold mt-4 leading-relaxed">
                &ldquo;{successStories[active].text}&rdquo;
              </h3>
              <div className="mt-6">
                <p className="font-semibold">{successStories[active].name}</p>
                <p className="text-sm text-gray-400">{successStories[active].role}</p>
              </div>

              {/* PROGRESS DOTS */}
              <div className="flex gap-2 mt-6">
                {successStories.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i === active ? "w-6 bg-[#00FE4E]" : "w-3 bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}