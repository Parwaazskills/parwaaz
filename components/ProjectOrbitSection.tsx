"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectOrbitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pillRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    {
      title: "Map Demand",
      text: "Identifying talent needs, industry gaps, and emerging opportunities through research, surveys, and market intelligence.",
    },
    {
      title: "Build Pathways",
      text: "Designing tailored learning, recruitment, and operational frameworks aligned with organizational and sector priorities.",
    },
    {
      title: "Deploy Solutions",
      text: "Activating delivery through strategic partnerships, digital systems, regional networks, and operational infrastructure.",
    },
    {
      title: "Drive Outcomes",
      text: "Creating measurable impact through placement, productivity, market expansion, and long-term economic value.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    const section = sectionRef.current;
    const orbit = orbitRef.current;
    const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !orbit || slideEls.length === 0) return;

    let ctx: gsap.Context | null = null;

    const updateProgressPill = (progress: number) => {
      if (!pillRef.current) return;

      const fill = pillRef.current.querySelector(
        ".po-progress-fill"
      ) as HTMLElement | null;

      if (fill) {
        fill.style.width = `${Math.max(0, Math.min(progress * 100, 100))}%`;
      }
    };

    const setup = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const isMobile = window.innerWidth <= 768;

        gsap.set(orbit, {
          xPercent: -50,
          yPercent: -50,
          rotation: 0,
          transformOrigin: "50% 50%",
          force3D: true,
        });

        if (isMobile) {
          const totalSteps = slideEls.length - 1;

          const fullAnimationDistance = totalSteps * 950;
          const overlapDistance = fullAnimationDistance * 0.2;

          document.documentElement.style.setProperty(
            "--po-mobile-overlap",
            `${overlapDistance}px`
          );

          const positionSlidesOnArc = (progress: number) => {
            const safeProgress = Math.max(0, Math.min(progress, 1));
            const travel = safeProgress * totalSteps;

            slideEls.forEach((slide, index) => {
              const distance = index - travel;

              const x = distance * 390;
              const y = -92 + Math.pow(distance, 2) * 72;
              const rotation = distance * -8;
              const scale = 1 - Math.min(Math.abs(distance) * 0.035, 0.12);

              gsap.set(slide, {
                x,
                y,
                yPercent: -50,
                rotation,
                scale,
                opacity: 1,
                filter: "blur(0px)",
                zIndex: 50 - Math.round(Math.abs(distance) * 10),
                transformOrigin: "50% 190%",
                force3D: true,
              });
            });
          };

          gsap.set(slideEls, {
            opacity: 1,
            filter: "blur(0px)",
            force3D: true,
            backfaceVisibility: "hidden",
            transformPerspective: 1000,
          });

          slideEls.forEach((slide) => {
            const ball = slide.querySelector(".po-ball") as HTMLElement | null;

            if (ball) {
              gsap.set(ball, {
                x: 0,
                y: 0,
                force3D: true,
              });
            }
          });

          positionSlidesOnArc(0);
          updateProgressPill(0);

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${fullAnimationDistance}`,
            scrub: 0.22,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: false,

            onUpdate: (self) => {
              positionSlidesOnArc(self.progress);
              updateProgressPill(self.progress);

              gsap.set(orbit, {
                rotation: self.progress * 360,
                force3D: true,
              });
            },

            onLeave: () => {
              positionSlidesOnArc(1);
              updateProgressPill(1);

              gsap.set(orbit, {
                rotation: 360,
                force3D: true,
              });
            },

            onEnterBack: () => {
              positionSlidesOnArc(1);
              updateProgressPill(1);

              gsap.set(orbit, {
                rotation: 360,
                force3D: true,
              });
            },

            onLeaveBack: () => {
              positionSlidesOnArc(0);
              updateProgressPill(0);

              gsap.set(orbit, {
                rotation: 0,
                force3D: true,
              });
            },
          });

          return;
        }

        document.documentElement.style.removeProperty("--po-mobile-overlap");

        gsap.to(orbit, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        const swingOrigin = "-380px 50%";
        const swingX = -100;
        const swingY = 280;
        const exitX = 80;
        const exitY = -260;
        const slideDuration = 1100;

        slideEls.forEach((slide, index) => {
          gsap.set(slide, {
            opacity: index === 0 ? 1 : 0,
            x: index === 0 ? 0 : swingX,
            y: index === 0 ? 0 : swingY,
            rotation: index === 0 ? 0 : 26,
            scale: index === 0 ? 1 : 0.9,
            filter: index === 0 ? "blur(0px)" : "blur(5px)",
            transformOrigin: swingOrigin,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(slideEls.length - 1) * slideDuration}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < slideEls.length; i++) {
          const prev = slideEls[i - 1];
          const next = slideEls[i];

          if (!prev || !next) continue;

          tl.to(
            prev,
            {
              opacity: 0,
              x: exitX,
              y: exitY,
              rotation: -26,
              scale: 0.9,
              filter: "blur(5px)",
              duration: 1.2,
              ease: "power3.inOut",
            },
            i
          );

          tl.fromTo(
            next,
            {
              opacity: 0,
              x: swingX,
              y: swingY,
              rotation: 26,
              scale: 0.9,
              filter: "blur(5px)",
              transformOrigin: swingOrigin,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.inOut",
            },
            i + 0.02
          );
        }
      }, section);
    };

    setup();

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 350);

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let lastWidth = window.innerWidth;

    const onResize = () => {
      const w = window.innerWidth;
      const wasMobile = lastWidth <= 768;
      const isMobile = w <= 768;

      if (wasMobile !== isMobile) {
        if (resizeTimer) clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          setup();
          ScrollTrigger.refresh(true);
        }, 240);
      }

      lastWidth = w;
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(refreshTimer);

      if (resizeTimer) clearTimeout(resizeTimer);
      if (ctx) ctx.revert();

      document.documentElement.style.removeProperty("--po-mobile-overlap");
    };
  }, []);

  return (
    <section ref={sectionRef} className="po-section">
      <div className="po-title">
        <h2>
          <span className="po-title-a">HOW PARWAAZ</span>
          <span className="po-title-b">OPERATES</span>
        </h2>
      </div>

      <div className="po-content">
        <div className="po-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className="po-slide"
            >
              <div className="po-slide-row">
                <div className="po-ball">
                  <div className="po-ball-core" />
                  <div className="po-ball-pulse" />
                </div>

                <div className="po-slide-content">
                  <h3 className="po-slide-title">{slide.title}</h3>
                  <p className="po-slide-text">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="po-canvas">
        <div ref={orbitRef} className="po-rings">
          <img src="/orbit.svg" alt="" />
        </div>

        <img src="/orbit1.svg" alt="" className="po-solid" />
        <div className="po-glow" />
        <div className="po-sphere-gradient" />
      </div>

      <img src="/vector.svg" alt="" className="po-vector" />

      <div ref={pillRef} className="po-control-pill">
        <span className="po-progress-track">
          <span className="po-progress-fill"></span>
        </span>
      </div>

      <style jsx global>{`
        .po-section {
          position: relative;
          width: 100%;
          min-height: 90vh;
          background: #ffffff;
          padding: 40px 0 80px;
          overflow: visible;
        }

        .po-title {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 20px;
          padding: 0 24px;
        }

        .po-title h2 {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 1;
          display: inline-flex;
          align-items: baseline;
          gap: 16px;
        }

        .po-title-a {
          background: linear-gradient(135deg, #0adf54 0%, #0a7a5f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .po-title-b {
          background: linear-gradient(135deg, #0a7a5f 0%, #050889 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .po-canvas {
          position: absolute;
          top: 40%;
          left: -250px;
          width: 800px;
          height: 800px;
          transform: translateY(-30%);
          pointer-events: none;
          z-index: 1;
        }

        .po-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 130%;
          height: 130%;
          will-change: transform;
        }

        .po-rings img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.3) brightness(0.9) opacity(0.85);
        }

        .po-solid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.4) brightness(0.75) opacity(0.7);
        }

        .po-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(0, 254, 78, 0.08) 0%,
            transparent 70%
          );
          filter: blur(40px);
          z-index: -1;
        }

        .po-sphere-gradient {
          display: none;
        }

        .po-vector {
          position: absolute;
          right: -100px;
          bottom: -330px;
          width: 750px;
          max-width: 40vw;
          max-height: 1200px;
          height: auto;
          object-fit: fill;
          z-index: 5;
          pointer-events: none;
          opacity: 0.85;
          transform: rotate(180deg);
        }

        .po-content {
          position: relative;
          z-index: 5;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px 0 0;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .po-slides {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin-right: 40px;
          height: 320px;
          perspective: 1400px;
        }

        .po-slide {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          will-change: transform, opacity, filter;
        }

        .po-slide-row {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .po-ball {
          position: relative;
          width: 22px;
          height: 22px;
          min-width: 22px;
          margin-top: 14px;
          flex-shrink: 0;
          will-change: transform;
        }

        .po-ball-core {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #d8d8d8 0%,
            #c0c0c0 50%,
            #9a9a9a 100%
          );
          box-shadow:
            0 0 0 3px rgba(180, 180, 180, 0.18),
            0 2px 8px rgba(0, 0, 0, 0.12),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          animation: poBallPulse 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .po-ball-pulse {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(160, 160, 160, 0.5);
          opacity: 0;
          animation: poBallRipple 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes poBallPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow:
              0 0 0 3px rgba(180, 180, 180, 0.18),
              0 2px 8px rgba(0, 0, 0, 0.12),
              inset 0 1px 2px rgba(255, 255, 255, 0.5);
          }

          50% {
            transform: scale(1.1);
            box-shadow:
              0 0 0 5px rgba(180, 180, 180, 0.28),
              0 2px 12px rgba(0, 0, 0, 0.16),
              inset 0 1px 2px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes poBallRipple {
          0% {
            opacity: 0.7;
            transform: scale(0.8);
          }

          100% {
            opacity: 0;
            transform: scale(1.8);
          }
        }

        .po-slide-content {
          flex: 1;
          min-width: 0;
        }

        .po-slide-title {
          margin: 0 0 14px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(40px, 4vw, 53px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          background: linear-gradient(
            135deg,
            #0adf54 0%,
            #0a7a5f 50%,
            #050889 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .po-slide-text {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(14px, 1.5vw, 20px);
          line-height: 1.65;
          color: rgba(0, 0, 0, 0.62);
          font-weight: 400;
          max-width: 700px;
        }

        .po-control-pill {
          display: none;
        }

        @media (max-width: 1280px) {
          .po-canvas {
            top: 50%;
            left: -300px;
            width: 700px;
            height: 700px;
            transform: translateY(-30%);
          }

          .po-vector {
            right: -100px;
            bottom: -230px;
            width: 450px;
            max-width: 30vw;
            max-height: 900px;
            opacity: 0.85;
          }
        }

        @media (max-width: 1024px) {
          .po-section {
            padding: 40px 0 80px;
            min-height: 90vh;
          }

          .po-canvas {
            top: 50%;
            left: -300px;
            width: 700px;
            height: 700px;
            transform: translateY(-30%);
          }

          .po-vector {
            right: -100px;
            bottom: -230px;
            width: 450px;
            max-width: 30vw;
            max-height: 900px;
            opacity: 0.85;
          }

          .po-content {
            padding: 0 24px 0 0;
            min-height: 55vh;
          }

          .po-slides {
            margin-right: 24px;
            max-width: 480px;
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .po-section {
            height: 100svh !important;
            min-height: 100svh !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #ffffff !important;
            contain: paint !important;
          }

          .po-title {
            position: absolute !important;
            top: 56px !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            padding: 0 18px !important;
            z-index: 40 !important;
            text-align: center !important;
          }

          .po-title h2 {
            margin: 0 !important;
            font-family: var(--font-montserrat), sans-serif !important;
            font-size: 36px !important;
            font-weight: 400 !important;
            letter-spacing: 0 !important;
            text-transform: uppercase !important;
            line-height: 1.08 !important;
            display: inline-flex !important;
            align-items: baseline !important;
            justify-content: center !important;
            gap: 10px !important;
            flex-wrap: wrap !important;
          }

          .po-content {
            position: relative !important;
            z-index: 25 !important;
            width: 100% !important;
            max-width: none !important;
            height: 100svh !important;
            min-height: 100svh !important;
            padding: 176px 34px 230px !important;
            margin: 0 !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
          }

          .po-slides {
            position: relative !important;
            width: 100% !important;
            max-width: 330px !important;
            height: 300px !important;
            margin: 0 !important;
            perspective: 900px !important;
            overflow: visible !important;
          }

          .po-slide {
            position: absolute !important;
            left: 0 !important;
            top: 50% !important;
            width: 100% !important;
            will-change: transform, opacity, filter !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
          }

          .po-slide-row {
            display: flex !important;
            align-items: flex-start !important;
            gap: 13px !important;
          }

          .po-ball {
            width: 14px !important;
            height: 14px !important;
            min-width: 14px !important;
            margin-top: 7px !important;
          }

          .po-ball-core {
            background: linear-gradient(
              135deg,
              #00fe4e 0%,
              #0adf54 45%,
              #050889 100%
            ) !important;
            box-shadow:
              0 0 0 4px rgba(0, 254, 78, 0.18),
              0 0 15px rgba(0, 254, 78, 0.6),
              inset 0 1px 2px rgba(255, 255, 255, 0.65) !important;
          }

          .po-ball-pulse {
            border-color: rgba(0, 254, 78, 0.55) !important;
          }

          .po-slide-content {
            flex: 1 !important;
            min-width: 0 !important;
          }

          .po-slide-title {
            font-size: 18px !important;
            line-height: 1.25 !important;
            margin-bottom: 14px !important;
            font-weight: 500 !important;
            letter-spacing: 0.18em !important;
            text-transform: uppercase !important;
            font-family:
              var(--font-montserrat),
              var(--font-poppins),
              sans-serif !important;
            color: #171717 !important;
            -webkit-text-fill-color: #171717 !important;
            background: none !important;
          }

          .po-slide-text {
            font-size: clamp(16px, 4.4vw, 20px) !important;
            line-height: 1.45 !important;
            max-width: 300px !important;
            color: rgba(0, 0, 0, 0.78) !important;
            font-weight: 400 !important;
            letter-spacing: -0.02em !important;
          }

          .po-canvas {
            position: absolute !important;
            top: auto !important;
            left: 50% !important;
            bottom: -305px !important;
            width: 720px !important;
            height: 720px !important;
            transform: translateX(-50%) !important;
            opacity: 0.62 !important;
            z-index: 1 !important;
          }

          .po-rings {
            top: 50% !important;
            left: 50% !important;
            width: 100% !important;
            height: 100% !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
          }

          .po-rings img {
            filter: contrast(1.1) brightness(1.02) opacity(0.7) !important;
          }

          .po-solid {
            opacity: 0.32 !important;
            filter: contrast(1.15) brightness(1.05) opacity(0.65) !important;
          }

          .po-glow {
            display: block !important;
            top: 50% !important;
            left: 50% !important;
            width: 74% !important;
            height: 74% !important;
            background: radial-gradient(
              circle,
              rgba(0, 254, 78, 0.2) 0%,
              rgba(10, 122, 95, 0.11) 34%,
              transparent 74%
            ) !important;
            filter: blur(48px) !important;
            opacity: 1 !important;
          }

          .po-sphere-gradient {
            display: block !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 230px !important;
            height: 230px !important;
            transform: translate(-50%, -50%) !important;
            background: radial-gradient(
              circle at 50% 50%,
              rgba(0, 254, 78, 0.45) 0%,
              rgba(10, 122, 95, 0.28) 38%,
              rgba(5, 8, 137, 0.1) 66%,
              transparent 86%
            ) !important;
            border-radius: 50% !important;
            filter: blur(22px) !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }

          .po-vector {
            display: block !important;
            position: absolute !important;
            right: -230px !important;
            bottom: 34px !important;
            top: auto !important;
            left: auto !important;
            width: 520px !important;
            max-width: none !important;
            max-height: none !important;
            opacity: 0.14 !important;
            transform: rotate(180deg) !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }

          .po-control-pill {
            display: flex !important;
            position: absolute !important;
            left: 50% !important;
            bottom: 92px !important;
            top: auto !important;
            right: auto !important;
            transform: translateX(-50%) !important;
            width: 78px !important;
            height: 22px !important;
            background: rgba(0, 0, 0, 0.92) !important;
            padding: 7px 10px !important;
            border-radius: 999px !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 50 !important;
            box-shadow:
              0 8px 22px rgba(0, 0, 0, 0.34),
              inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
          }

          .po-progress-track {
            position: relative !important;
            display: block !important;
            width: 100% !important;
            height: 4px !important;
            border-radius: 999px !important;
            background: rgba(255, 255, 255, 0.2) !important;
            overflow: hidden !important;
          }

          .po-progress-fill {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            height: 100% !important;
            width: 0%;
            border-radius: 999px !important;
            background: rgba(255, 255, 255, 0.96) !important;
            transition: none !important;
          }
        }

        @media (max-width: 480px) {
          .po-title {
            top: 54px !important;
          }

          .po-title h2 {
            font-size: 31px !important;
            gap: 8px !important;
            letter-spacing: 0 !important;
            line-height: 1.08 !important;
          }

          .po-content {
            padding: 176px 34px 230px !important;
          }

          .po-slides {
            max-width: 310px !important;
            height: 300px !important;
            margin: 0 !important;
          }

          .po-slide-text {
            max-width: 285px !important;
            font-size: clamp(15.5px, 4.4vw, 18px) !important;
            line-height: 1.48 !important;
          }

          .po-canvas {
            width: 690px !important;
            height: 690px !important;
            bottom: -310px !important;
          }

          .po-control-pill {
            bottom: 92px !important;
          }
        }

        @media (max-width: 380px) {
          .po-title {
            top: 50px !important;
          }

          .po-title h2 {
            font-size: 28px !important;
            gap: 7px !important;
            line-height: 1.1 !important;
          }

          .po-content {
            padding: 170px 28px 220px !important;
          }

          .po-slides {
            max-width: 292px !important;
            height: 292px !important;
            margin: 0 !important;
          }

          .po-slide-text {
            max-width: 270px !important;
            font-size: 15px !important;
          }

          .po-canvas {
            width: 650px !important;
            height: 650px !important;
            bottom: -300px !important;
          }
        }

        .po-title h2,
        .po-title h2 span {
          font-family: var(--font-montserrat), sans-serif !important;
          font-size: 42px !important;
          font-weight: 400 !important;
          letter-spacing: 0 !important;
          line-height: 1.2 !important;
        }

        @media (max-width: 768px) {
          .po-title h2,
          .po-title h2 span {
            font-family: var(--font-montserrat), sans-serif !important;
            font-size: 28px !important;
            font-weight: 400 !important;
            letter-spacing: 0 !important;
            line-height: 1.08 !important;
          }
        }

        @media (max-width: 480px) {
          .po-title h2,
          .po-title h2 span {
            font-size: 28px !important;
            font-weight: 400 !important;
            letter-spacing: 0 !important;
            line-height: 1.08 !important;
          }
        }

        @media (max-width: 380px) {
          .po-title h2,
          .po-title h2 span {
            font-size: 28px !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
}
