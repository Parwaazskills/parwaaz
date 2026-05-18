"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export default function PartnerLogosSection() {
  // We render the logos 5 times. Start index = 0, which renders in the MIDDLE
  // (3rd) copy by adding 2*total offset. We can drift ±2*total in either
  // direction before needing to snap — plenty of buffer for fast clicks.
  const [logoIndex, setLogoIndex] = useState(0);
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isTransitioningRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const partnerLogos = [
    { src: "/wef.png", name: "World Economic Forum" },
    { src: "/coursera.png", name: "Coursera" },
    { src: "/educative.png", name: "Educative" },
    { src: "/pearson.png", name: "Pearson" },
    { src: "/tuv-rheinland.png", name: "TÜV Rheinland" },
    { src: "/dost-cargo.png", name: "Dost Cargo" },
    { src: "/practice-hub.png", name: "Practice Hub" },
  ];

  const total = partnerLogos.length;
  const COPIES = 5;                  // render this many copies of the logo array
  const CENTER_OFFSET = 2 * total;   // we start visually in the middle copy (3rd of 5)
  const TRANSITION_MS = 420;         // CSS transition duration
  const SAFE_RANGE = 2 * total;      // drift allowed before snap-back
  const AUTOPLAY_INTERVAL = 2500;    // ms between auto-slides

  // 5 copies side-by-side
  const renderedLogos = Array.from({ length: COPIES }, () => partnerLogos).flat();

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
      // Stop the timer when paused
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
      return;
    }

    // Start the timer
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

  // After every transition ends, check if we've drifted near the edge of
  // our 5-copy buffer. If so, instantly snap back to equivalent middle position.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      isTransitioningRef.current = false;

      // Check if we've drifted past the safe range
      if (Math.abs(logoIndex) >= SAFE_RANGE) {
        // Calculate equivalent position in the middle copy
        const wrapped = ((logoIndex % total) + total) % total;

        if (!trackRef.current) return;

        // 1. Disable transition
        trackRef.current.style.transition = "none";
        // 2. Snap to wrapped index
        setLogoIndex(wrapped);
        // 3. Force reflow + re-enable transition on next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "";
            }
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
        /* ============ SECTION ============ */
        .collab-section {
          width: 100%;
          padding: 90px 0 40px;
        }
.collab-title {
  margin: 0 0 40px 0;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  background: linear-gradient(90deg, #00fe4e 0%, #000572 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

        /* ============ MARQUEE TRACK ============ */
        .collab-shell {
          position: relative;
          overflow: hidden;
          padding: 16px 0 24px;
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
        .collab-track {
          display: flex;
          width: max-content;
          gap: 32px;
          padding-left: 16px;
          transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        @media (min-width: 640px) {
          .collab-track { padding-left: 24px; }
        }
        @media (min-width: 1024px) {
          .collab-track { padding-left: 32px; }
        }

        /* ============ LOGO CARDS ============ */
        .collab-card {
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
        .collab-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08),
            0 2px 6px rgba(0, 254, 78, 0.12);
        }
        .collab-card img {
          max-height: 55%;
          max-width: 70%;
          width: auto;
          object-fit: contain;
          filter: grayscale(0.15);
          transition: filter 0.3s ease;
        }
        .collab-card:hover img {
          filter: grayscale(0);
        }

        /* ============ NAV BUTTONS — SMALLER ============ */
        .collab-nav-wrap {
          display: flex;
          justify-content: center;
          margin-top: 12px;
          padding: 24px 0;
        }
        .collab-nav-box {
          position: relative;
          display: inline-block;
          width: 56px;
          height: 50px;
          line-height: 0;
        }
        .collab-nav-svg {
          display: block;
          width: 56px;
          height: 50px;
          pointer-events: none;
          position: relative;
          z-index: 2;
        }

        /* GLOW */
        .collab-glow {
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
        .collab-glow-prev { left: -8px; }
        .collab-glow-next { right: -8px; }

        /* HOVER state */
        .collab-nav-hit-prev:hover ~ .collab-glow-prev,
        .collab-glow-prev:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .collab-nav-hit-next:hover ~ .collab-glow-next,
        .collab-glow-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* CLICK pulse */
        .collab-glow.is-active {
          animation: sideGlowAnim 0.75s ease-out forwards;
        }
        @keyframes sideGlowAnim {
          0% { opacity: 0; transform: translateY(-50%) scale(0.3); }
          25% { opacity: 1; transform: translateY(-50%) scale(1.15); }
          100% { opacity: 0; transform: translateY(-50%) scale(1.5); }
        }

        .collab-nav-hit {
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
        .collab-nav-hit-prev { left: 0; }
        .collab-nav-hit-next { right: 0; }

        /* ============ MOBILE ============ */
        @media (max-width: 768px) {
          .collab-section { padding: 60px 0 28px; }
          .collab-title {
            font-size: 20px;
            letter-spacing: 0.02em;
            margin-bottom: 24px;
          }
          .collab-shell { padding-bottom: 12px !important; }
          .collab-nav-box,
          .collab-nav-svg { width: 48px; height: 44px; }
          .collab-glow { width: 38px; height: 38px; }
        }
        @media (max-width: 480px) {
          .collab-section { padding: 48px 0 24px; }
          .collab-title { font-size: 17px; margin-bottom: 18px; }
          .collab-nav-box,
          .collab-nav-svg { width: 42px; height: 38px; }
          .collab-glow { width: 32px; height: 32px; }
        }
      `}</style>

      <section className="collab-section">
        <h2 className="collab-title" data-reveal="up-sm">
          INTERNATIONAL COLLABORATERS
        </h2>

        <div
          data-reveal="fade"
          data-reveal-delay="100"
          className="collab-shell"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="collab-track"
            style={{
              transform: `translateX(calc(${
                -(logoIndex + CENTER_OFFSET)
              } * (clamp(150px, 16vw, 200px) + 32px)))`,
            }}
          >
            {renderedLogos.map((logo, i) => (
              <div key={logo.name + "-" + i} className="collab-card">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="zoom" data-reveal-delay="200" className="collab-nav-wrap">
          <div
            className="collab-nav-box"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              type="button"
              onClick={handlePrev}
              className="collab-nav-hit collab-nav-hit-prev"
              aria-label="Previous"
            />
            <button
              type="button"
              onClick={handleNext}
              className="collab-nav-hit collab-nav-hit-next"
              aria-label="Next"
            />
            <span
              className={`collab-glow collab-glow-prev ${
                glowingSide === "prev" ? "is-active" : ""
              }`}
            />
            <span
              className={`collab-glow collab-glow-next ${
                glowingSide === "next" ? "is-active" : ""
              }`}
            />
            <img src="/button.svg" alt="" className="collab-nav-svg" />
          </div>
        </div>
      </section>
    </>
  );
}