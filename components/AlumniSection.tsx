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
      <style jsx global>{`
        .alumni-section { position: relative; }
        .alumni-map-stage {
          position: relative;
          width: 100%;
          max-width: 100%;
          padding: 20px 24px 0;
          aspect-ratio: 16 / 9;
        }
        .world-map {
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
        .alumni-map-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(5, 5, 5, 0.18) 1.1px, transparent 1.1px);
          background-size: 18px 18px;
          background-position: 0 0;
          mix-blend-mode: multiply;
          opacity: 0.45;
          pointer-events: none;
        }
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
          box-shadow: none;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .alumni-pin-active .alumni-pin-dot {
          background: #00FE4E;
          box-shadow: 0 0 0 3px rgba(0, 254, 78, 0.25), 0 0 16px rgba(0, 254, 78, 0.8);
        }
        .alumni-pin-pulse {
          display: none;
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
        .alumni-bubble {
          position: absolute;
          left: 0;
          bottom: 2px;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 8px 11px 8px 8px;
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
            padding 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            gap 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.35s ease;
          will-change: transform, box-shadow;
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
        .alumni-pin:hover .alumni-bubble {
          box-shadow: 0 14px 36px rgba(5, 5, 5, 0.18), 0 4px 10px rgba(5, 5, 5, 0.08), 0 0 0 2px rgba(0, 254, 78, 0.15);
          border-color: rgba(0, 254, 78, 0.45);
          transform: translate(-50%, -100%) translateY(-6px) scale(1.06);
        }
        .alumni-pin:hover .alumni-bubble-tail {
          border-right-color: rgba(0, 254, 78, 0.45);
          border-bottom-color: rgba(0, 254, 78, 0.45);
        }
        .alumni-pin:hover .alumni-bubble-watch-arrow { transform: translateX(2px); }
        .alumni-pin-active .alumni-bubble {
          border-color: #00FE4E;
          padding: 12px 0 12px 6px;
          gap: 10px;
          min-width: 200px;
          box-shadow: 0 22px 50px rgba(0, 254, 78, 0.32), 0 0 0 3px rgba(0, 254, 78, 0.2), 0 8px 18px rgba(5, 5, 5, 0.12);
          z-index: 6;
          transform: translate(-50%, -100%) translateY(-4px) scale(1.35);
        }
        .alumni-pin-active .alumni-bubble-tail {
          border-right-color: #00FE4E;
          border-bottom-color: #00FE4E;
        }
        .alumni-pin-active .alumni-bubble-city { color: #000572; font-size: 15px; }
        .alumni-pin-active .alumni-bubble-watch { font-size: 11px; }
        .alumni-pin-active .alumni-bubble-img-wrap { width: 56px; height: 40px; border-radius: 8px; }
        .alumni-bubble-img-wrap {
          width: 50px;
          align-self: stretch;
          border-radius: 11px 0 0 11px;
          overflow: hidden;
          flex-shrink: 0;
          background: #eeeeee;
          padding: 0 !important;
          margin: 0 !important;
          display: block;
          position: relative;
        }
        .alumni-bubble-img-wrap img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          display: block !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
        }
        .alumni-bubble-text {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }
        .alumni-bubble-city {
          font-family: var(--font-poppins), sans-serif;
          font-size: 23px;
          font-weight: 700;
          color: #050505;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .alumni-bubble-watch {
          margin-top: 3px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #000572;
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .alumni-bubble-watch-arrow {
          display: inline-block;
          font-size: 8px;
          color: #00b347;
          transition: transform 0.3s ease;
        }
        @keyframes alumniPanelIn {
          0% { opacity: 0; transform: translateY(24px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .alumni-panel {
          animation: alumniPanelIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
        }
        @media (max-width: 1024px) {
          .alumni-map-stage { padding: 40px 16px 40px; aspect-ratio: 16 / 10; }
          .world-map { inset: 20px 16px 20px; width: calc(100% - 32px); height: calc(100% - 40px); }
          .alumni-bubble { padding: 7px 12px 7px 7px; gap: 4px; }
          .alumni-bubble-img-wrap { width: 28px; height: 28px; }
          .alumni-bubble-city { font-size: 12px; }
          .alumni-bubble-watch { font-size: 9.5px; }
          .alumni-pin-active .alumni-bubble {
            transform: translate(-50%, -100%) translateY(-8px) scale(1.25);
            padding: 10px 14px 10px 10px;
          }
          .alumni-pin-active .alumni-bubble-img-wrap { width: 38px; height: 38px; }
          .alumni-pin-active .alumni-bubble-city { font-size: 13px; }
        }
        @media (max-width: 768px) {
          .alumni-bubble {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            width: 155px !important;
            min-width: 155px !important;
            max-width: 155px !important;
            height: 42px !important;
            padding: 4px 10px 4px 4px !important;
            overflow: visible !important;
            white-space: nowrap !important;
          }
          .alumni-pin-active .alumni-bubble {
            width: 165px !important;
            min-width: 165px !important;
            max-width: 165px !important;
            height: 46px !important;
            padding: 5px 12px 5px 4px !important;
            transform: translate(-50%, -100%) translateY(-4px) scale(1) !important;
          }
          .alumni-bubble-img-wrap {
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
            border-radius: 5px !important;
          }
          .alumni-pin-active .alumni-bubble-img-wrap {
            width: 30px !important;
            height: 30px !important;
            min-width: 30px !important;
          }
          .alumni-bubble-text { flex: 1 !important; min-width: 0 !important; overflow: visible !important; }
          .alumni-bubble-city {
            font-size: 10px !important;
            line-height: 1.05 !important;
            font-weight: 800 !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }
          .alumni-pin-active .alumni-bubble-city { font-size: 10.5px !important; }
          .alumni-bubble-watch {
            font-size: 7.5px !important;
            line-height: 1 !important;
            font-weight: 800 !important;
            letter-spacing: 0.03em !important;
            white-space: nowrap !important;
          }
          .alumni-pin-active .alumni-bubble-watch { font-size: 7.5px !important; }
          .alumni-bubble-watch-arrow { display: none !important; }
          .alumni-pin-active .alumni-bubble-watch-arrow {
            display: inline-block !important;
            font-size: 10px !important;
            margin-right: -10px !important;
            color: #00b347 !important;
          }
          .alumni-panel {
            margin-top: -180px !important;
            width: 100%;
            border-radius: 20px !important;
            padding: 20px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .alumni-panel > div:first-child {
            width: 100% !important;
            height: 165px !important;
            border-radius: 14px !important;
          }
          .alumni-panel > div:first-child img { object-fit: cover !important; }
          .alumni-panel > div:nth-child(2) { width: 100% !important; }
          .alumni-panel h3 { font-size: 20px !important; line-height: 1.35 !important; }
          .alumni-panel p { font-size: 13px !important; line-height: 1.5 !important; }
        }
        @media (max-width: 480px) {
          .alumni-section { padding: 36px 14px 44px !important; }
          .alumni-bubble {
            width: 100px !important;
            min-width: 100px !important;
            max-width: 100px !important;
            height: 36px !important;
            padding: 4px 6px !important;
          }
          .alumni-bubble-img-wrap { width: 20px !important; height: 20px !important; }
          .alumni-bubble-city { font-size: 8.5px !important; }
          .alumni-bubble-watch { font-size: 6.5px !important; }
          .alumni-panel { padding: 16px !important; }
          .alumni-panel h3 { font-size: 18px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .alumni-pin-pulse { animation: none; opacity: 0; }
          .alumni-panel { animation: none; }
          .alumni-bubble { transition: none; }
        }
      `}</style>

      <section className="alumni-section py-20 bg-white">
        {/* HEADER */}
        <div className="text-center mb-10 px-4">
          <p className="text-xs tracking-widest text-gray-500">SUCCESS STORIES</p>

          <h2
            className="mt-3"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "0px",
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(90deg, #00FE4E 0%, #000572 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              margin: 0,
            }}
          >
            HEAR FROM OUR ALUMNI
          </h2>
          <p className="gsap-words text-gray-500 mt-2">
            Watch stories of success from across Pakistan
          </p>
        </div>

        {/* MAP */}
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
                {/* Location dot on map (with pulse when active) */}
                <span className="alumni-pin-dot" aria-hidden="true">
                  {isActive && (
                    <>
                      <span className="alumni-pin-pulse alumni-pin-pulse-1" />
                      <span className="alumni-pin-pulse alumni-pin-pulse-2" />
                    </>
                  )}
                </span>

                {/* Speech-bubble card sitting above the dot */}
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
                  {/* Speech-bubble tail */}
                  <span className="alumni-bubble-tail" aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>

        {/* TESTIMONIAL */}
        <div ref={testimonialRef} className="-mt-10 md:-mt-23 max-w-[1100px] mx-auto px-4 relative z-10">
          <div
            key={`alumni-panel-${panelAnimKey}`}
            className="alumni-panel bg-black rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* LEFT VIDEO */}
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

            {/* RIGHT CONTENT */}
            <div className="text-white w-full md:w-1/2">
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                FEATURED STORY
              </span>

              <p className="text-green-400 mt-3 text-sm tracking-widest">
                DIGITAL LEARNING
              </p>

              <h3 className="text-lg md:text-2xl font-semibold mt-4 leading-relaxed">
                "{successStories[active].text}"
              </h3>

              <div className="mt-6">
                <p className="font-semibold">{successStories[active].name}</p>
                <p className="text-sm text-gray-400">{successStories[active].role}</p>
              </div>

              {/* DOTS */}
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