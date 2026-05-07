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
      title: "Demand",
      text: "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.",
    },
    {
      title: "Design",
      text: "Crafting tailored learning experiences that align with industry demands and prepare professionals for the future of work.",
    },
    {
      title: "Build",
      text: "Building real-world skills through hands-on projects, expert mentorship, and globally recognized certifications.",
    },
    {
      title: "Validate",
      text: "Validating expertise with industry-recognized credentials, helping professionals stand out in a competitive global workforce.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const orbit = orbitRef.current;
    const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !orbit || slideEls.length === 0) return;

    let ctx: gsap.Context | null = null;

    const setup = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        gsap.set(orbit, { xPercent: -50, yPercent: -50 });
        gsap.to(orbit, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
          slideEls.forEach((slide, index) => {
            const ball = slide.querySelector(".po-ball") as HTMLElement | null;

            gsap.set(slide, {
              opacity: index === 0 ? 1 : 0,
              scale: 1,
              filter: "blur(0px)",
            });

            if (ball) {
              const orbitRadius = 140;
              const startAngle = -90;
              const angleStep = 60;
              const angle = startAngle + index * angleStep;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * orbitRadius;
              const y = Math.sin(rad) * orbitRadius + 250;

              gsap.set(ball, {
                x: index === 0 ? 0 : x,
                y: index === 0 ? 0 : y,
              });
            }
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${slideEls.length * 950}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (pillRef.current) {
                  const progress = self.progress;
                  const slideIndex = Math.min(Math.floor(progress * 4), 3);
                  const dots = pillRef.current.querySelectorAll(".po-pill-dot");
                  dots.forEach((dot, i) => {
                    const el = dot as HTMLElement;
                    if (i === slideIndex) {
                      el.style.background = "rgba(255, 255, 255, 0.95)";
                      el.style.width = "14px";
                      el.style.height = "3px";
                      el.style.borderRadius = "2px";
                    } else {
                      el.style.background = "rgba(255, 255, 255, 0.35)";
                      el.style.width = "3px";
                      el.style.height = "3px";
                      el.style.borderRadius = "50%";
                    }
                  });
                }
              },
            },
          });

          for (let i = 1; i < slideEls.length; i++) {
            const prev = slideEls[i - 1];
            const next = slideEls[i];
            if (!prev || !next) continue;

            const nextBall = next.querySelector(".po-ball") as HTMLElement | null;

            tl.to(
              prev,
              {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
              },
              i
            );

            tl.fromTo(
              next,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut",
              },
              i + 0.1
            );

            if (nextBall) {
              const orbitRadius = 140;
              const startAngle = -90;
              const angleStep = 60;
              const angle = startAngle + i * angleStep;
              const rad = (angle * Math.PI) / 180;
              const startX = Math.cos(rad) * orbitRadius;
              const startY = Math.sin(rad) * orbitRadius + 250;

              tl.fromTo(
                nextBall,
                {
                  x: startX,
                  y: startY,
                },
                {
                  x: 0,
                  y: 0,
                  duration: 1,
                  ease: "power2.inOut",
                },
                i
              );
            }
          }

          tl.to(
            slideEls[slideEls.length - 1],
            {
              opacity: 1,
              duration: 0.3,
              ease: "none",
            },
            slideEls.length - 0.3
          );
          return;
        }

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
      ScrollTrigger.refresh();
    }, 300);

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
          ScrollTrigger.refresh();
        }, 200);
      }
      lastWidth = w;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(refreshTimer);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="po-section">
      <div className="po-title">
        <h2>
          <span className="po-title-a">HOW IT</span>
          <span className="po-title-b">WORKS</span>
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
        <span className="po-pill-dot"></span>
        <span className="po-pill-dot"></span>
        <span className="po-pill-dot"></span>
        <span className="po-pill-dot"></span>
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
          top: 50%;
          left: -300px;
          width: 700px;
          height: 700px;
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
          background: radial-gradient(circle, rgba(0, 254, 78, 0.08) 0%, transparent 70%);
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
          background: linear-gradient(135deg, #d8d8d8 0%, #c0c0c0 50%, #9a9a9a 100%);
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
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 3px rgba(180, 180, 180, 0.18), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 5px rgba(180, 180, 180, 0.28), 0 2px 12px rgba(0, 0, 0, 0.16), inset 0 1px 2px rgba(255, 255, 255, 0.6);
          }
        }
        @keyframes poBallRipple {
          0% { opacity: 0.7; transform: scale(0.8); }
          100% { opacity: 0; transform: scale(1.8); }
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
          background: linear-gradient(135deg, #0adf54 0%, #0a7a5f 50%, #050889 100%);
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
          .po-canvas { top: 50%; left: -300px; width: 700px; height: 700px; transform: translateY(-30%); }
          .po-vector { right: -100px; bottom: -230px; width: 450px; max-width: 30vw; max-height: 900px; opacity: 0.85; }
        }

        @media (max-width: 1024px) {
          .po-section { padding: 40px 0 80px; min-height: 90vh; }
          .po-canvas { top: 50%; left: -300px; width: 700px; height: 700px; transform: translateY(-30%); }
          .po-vector { right: -100px; bottom: -230px; width: 450px; max-width: 30vw; max-height: 900px; opacity: 0.85; }
          .po-content { padding: 0 24px 0 0; min-height: 55vh; }
          .po-slides { margin-right: 24px; max-width: 480px; height: 280px; }
        }

        @media (max-width: 768px) {
          .po-section {
            height: 760px !important;
            min-height: 760px !important;
            padding: 28px 0 0 !important;
            overflow: hidden !important;
          }
          .po-title {
            margin-bottom: 32px !important;
            padding: 0 14px !important;
            z-index: 30 !important;
          }
          .po-title h2 {
            font-size: 22px !important;
            line-height: 1 !important;
            gap: 6px !important;
          }
          .po-content {
            position: relative !important;
            height: auto !important;
            min-height: auto !important;
            padding: 0 32px !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            margin-top: 0 !important;
            z-index: 15 !important;
          }
          .po-slides {
            position: relative !important;
            width: 100% !important;
            max-width: 280px !important;
            height: 200px !important;
            margin: 0 0 0 8px !important;
            z-index: 20 !important;
            overflow: visible !important;
          }
          .po-slide {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            transform: none !important;
          }
          .po-slide-row {
            gap: 12px !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
          }
          .po-ball {
            width: 8px !important;
            height: 8px !important;
            min-width: 8px !important;
            margin-top: 6px !important;
          }
          .po-ball-core {
            background: linear-gradient(135deg, #00ff66 0%, #00b347 50%, #050889 100%) !important;
            box-shadow:
              0 0 0 3px rgba(0, 255, 102, 0.3),
              0 0 12px rgba(0, 255, 102, 0.7),
              inset 0 1px 2px rgba(255, 255, 255, 0.6) !important;
          }
          .po-ball-pulse {
            border-color: rgba(0, 255, 102, 0.6) !important;
          }
          .po-slide-title {
            font-size: 11px !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
            font-weight: 500 !important;
            letter-spacing: 0.12em !important;
            text-transform: uppercase !important;
            font-family: var(--font-mono, ui-monospace, "SF Mono", monospace) !important;
            color: #0a0a0a !important;
            -webkit-text-fill-color: #0a0a0a !important;
            background: none !important;
          }
          .po-slide-text {
            font-size: 14px !important;
            line-height: 1.55 !important;
            max-width: 280px !important;
            color: rgba(0, 0, 0, 0.85) !important;
            font-weight: 400 !important;
          }
          .po-canvas {
            position: absolute !important;
            top: auto !important;
            bottom: -260px !important;
            left: -100px !important;
            width: 720px !important;
            height: 720px !important;
            transform: none !important;
            opacity: 0.55 !important;
            z-index: 1 !important;
          }
          .po-rings {
            width: 100% !important;
            height: 100% !important;
          }
          .po-rings img {
            filter: contrast(1.3) brightness(0.9) opacity(0.85) !important;
          }
          .po-solid {
            opacity: 0.5 !important;
          }
          .po-glow {
            display: block !important;
            top: 50% !important;
            left: 50% !important;
            width: 70% !important;
            height: 70% !important;
            background: radial-gradient(
              circle,
              rgba(0, 255, 102, 0.25) 0%,
              rgba(0, 179, 71, 0.12) 30%,
              transparent 70%
            ) !important;
            filter: blur(50px) !important;
            opacity: 1 !important;
          }
          .po-sphere-gradient {
            display: block !important;
            position: absolute !important;
            top: 48% !important;
            left: 50% !important;
            width: 220px !important;
            height: 220px !important;
            transform: translate(-50%, -50%) !important;
            background: radial-gradient(
              circle at 50% 50%,
              rgba(0, 255, 102, 0.7) 0%,
              rgba(10, 122, 95, 0.4) 35%,
              rgba(5, 8, 137, 0.25) 65%,
              transparent 85%
            ) !important;
            border-radius: 50% !important;
            filter: blur(24px) !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }
          .po-vector {
            display: block !important;
            position: absolute !important;
            right: -180px !important;
            bottom: -80px !important;
            top: auto !important;
            left: auto !important;
            width: 480px !important;
            max-width: none !important;
            max-height: none !important;
            opacity: 0.28 !important;
            transform: rotate(180deg) !important;
            z-index: 3 !important;
            pointer-events: none !important;
          }
          .po-control-pill {
            display: flex !important;
            position: absolute !important;
            top: 320px !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
            transform: translateX(-50%) !important;
            background: #0a0a0a !important;
            padding: 8px 18px !important;
            border-radius: 999px !important;
            gap: 5px !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 30 !important;
            box-shadow:
              0 4px 14px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
            will-change: transform !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          .po-pill-dot {
            width: 3px !important;
            height: 3px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 0.35) !important;
            display: block !important;
            transition: all 0.3s ease !important;
          }
        }
      `}</style>
    </section>
  );
}