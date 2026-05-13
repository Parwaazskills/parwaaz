"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { clientLogos } from "@/data/clientLogos";

// Shared card+gap step (used in both transform calculation and consistency)
const CARD_STEP = "calc(clamp(150px, 16vw, 200px) + 32px)";

export default function ClientsSection() {
  // Same 5-copy seamless loop as PartnerLogosSection
  const [logoIndex, setLogoIndex] = useState(0);
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isTransitioningRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = clientLogos.length;
  const COPIES = 5;
  const CENTER_OFFSET = 2 * total;
  const SAFE_RANGE = 2 * total;
  const AUTOPLAY_INTERVAL = 2500; // ms between auto-slides

  const renderedLogos = Array.from({ length: COPIES }, () => clientLogos).flat();

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setLogoIndex((prev) => prev - 1);
    setGlowingSide("prev");
    setTimeout(() => setGlowingSide(null), 500);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setLogoIndex((prev) => prev + 1);
    setGlowingSide("next");
    setTimeout(() => setGlowingSide(null), 500);
  }, []);

  // ============ AUTOPLAY ============
  useEffect(() => {
    if (isPaused) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      if (!isTransitioningRef.current) {
        isTransitioningRef.current = true;
        setLogoIndex((prev) => prev + 1);
      }
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      isTransitioningRef.current = false;

      if (Math.abs(logoIndex) >= SAFE_RANGE) {
        const wrapped = ((logoIndex % total) + total) % total;

        if (!trackRef.current) return;

        trackRef.current.style.transition = "none";
        setLogoIndex(wrapped);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "";
            }
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 50);
          });
        });
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [logoIndex, total, SAFE_RANGE]);

  return (
    <>
      <style jsx global>{`
        /* ============ MARQUEE TRACK ============ */
        .clients-shell {
          position: relative;
          overflow: hidden;
          padding: 24px 0 32px;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
        .clients-track {
          display: flex;
          width: max-content;
          gap: 32px;
          padding-left: 16px;
          transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        @media (min-width: 640px) {
          .clients-track { padding-left: 24px; }
        }
        @media (min-width: 1024px) {
          .clients-track { padding-left: 32px; }
        }

        /* ============ LOGO CARDS ============ */
        .clients-card {
          width: clamp(150px, 16vw, 200px);
          height: clamp(80px, 9vw, 110px);
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: none;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06),
            0 1px 3px rgba(0, 0, 0, 0.04);
          transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1),
            box-shadow 0.35s ease;
        }
        .clients-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08),
            0 2px 6px rgba(0, 254, 78, 0.12);
        }
        .clients-card img {
          max-height: 55%;
          max-width: 70%;
          width: auto;
          object-fit: contain;
          filter: grayscale(0.15);
          transition: filter 0.3s ease;
        }
        .clients-card:hover img {
          filter: grayscale(0);
        }

        /* ============ NAV BUTTONS — SMALLER ============ */
        .clients-nav-wrap {
          display: flex;
          justify-content: center;
          margin-top: 12px;
          padding: 24px 0;
        }
        .clients-nav-box {
          position: relative;
          display: inline-block;
          width: 56px;
          height: 50px;
          line-height: 0;
        }
        .clients-nav-svg {
          display: block;
          width: 56px;
          height: 50px;
          pointer-events: none;
          position: relative;
          z-index: 2;
        }

        /* GLOW */
        .clients-glow {
          position: absolute;
          top: 50%;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(117, 251, 105, 0.85) 0%,
            rgba(117, 251, 105, 0.55) 25%,
            rgba(117, 251, 105, 0.25) 50%,
            rgba(117, 251, 105, 0) 75%
          );
          transform: translateY(-50%) scale(0.3);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .clients-glow-prev { left: -8px; }
        .clients-glow-next { right: -8px; }

        /* HOVER state */
        .clients-nav-hit-prev:hover ~ .clients-glow-prev,
        .clients-glow-prev:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .clients-nav-hit-next:hover ~ .clients-glow-next,
        .clients-glow-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* CLICK pulse */
        .clients-glow.is-active {
          animation: clientsGlowAnim 0.75s ease-out forwards;
        }
        @keyframes clientsGlowAnim {
          0% { opacity: 0; transform: translateY(-50%) scale(0.3); }
          25% { opacity: 1; transform: translateY(-50%) scale(1.15); }
          100% { opacity: 0; transform: translateY(-50%) scale(1.5); }
        }

        .clients-nav-hit {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          z-index: 3;
        }
        .clients-nav-hit-prev { left: 0; }
        .clients-nav-hit-next { right: 0; }

        /* ============ MOBILE ============ */
        @media (max-width: 768px) {
          .clients-shell { padding-bottom: 12px !important; }
          .clients-nav-box,
          .clients-nav-svg { width: 48px; height: 44px; }
          .clients-glow { width: 38px; height: 38px; }
        }
        @media (max-width: 480px) {
          .clients-nav-box,
          .clients-nav-svg { width: 42px; height: 38px; }
          .clients-glow { width: 32px; height: 32px; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white pb-12 lg:pb-20 pt-16 lg:pt-24">
          <div data-reveal="up-sm" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black">
            Clients
          </div>
          <div data-reveal="fade" data-reveal-delay="100" className="gsap-marquee marquee-shell mt-3">
            <div className="marquee-track">
              <span className="gsap-clip marquee-text">Powering Growth</span>
              <span className="marquee-text">Powering Growth</span>
              <span className="marquee-text">Powering Growth</span>
            </div>
          </div>
          <p
            data-reveal="up-sm"
            data-reveal-delay="200"
            className="gsap-words mt-3 lg:mt-4 text-[14px] lg:text-[15px] text-black"
          >
            Supporting public and private sector organizations through integrated workforce and digital transformation solutions.
          </p>

          <div
            data-reveal="fade"
            data-reveal-delay="300"
            className="clients-shell mt-5 lg:mt-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="clients-track"
              style={{
                transform: `translateX(calc(${-(logoIndex + CENTER_OFFSET)} * ${CARD_STEP}))`,
              }}
            >
              {renderedLogos.map((logo, i) => (
                <div key={logo.name + "-" + i} className="clients-card">
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="zoom" data-reveal-delay="400" className="clients-nav-wrap">
            <div
              className="clients-nav-box"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                type="button"
                onClick={handlePrev}
                className="clients-nav-hit clients-nav-hit-prev"
                aria-label="Previous"
              />
              <button
                type="button"
                onClick={handleNext}
                className="clients-nav-hit clients-nav-hit-next"
                aria-label="Next"
              />
              <span
                className={`clients-glow clients-glow-prev ${
                  glowingSide === "prev" ? "is-active" : ""
                }`}
              />
              <span
                className={`clients-glow clients-glow-next ${
                  glowingSide === "next" ? "is-active" : ""
                }`}
              />
              <img src="/button.svg" alt="" className="clients-nav-svg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}