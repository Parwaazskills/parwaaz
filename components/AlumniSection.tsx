
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
              “{successStories[active].text}”
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
  );
}