"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { servicesData } from "@/data/services";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CATEGORIES = [
  {
    key: "AI & Advanced Technology" as keyof typeof servicesData,
    num: "01",
    href: "/aitech",
    tagline: "Intelligent systems that redefine what's possible",
  },
  {
    key: "Reskilling & Upskilling" as keyof typeof servicesData,
    num: "02",
    href: "/reskilling",
    tagline: "Future-ready workforces built on world-class learning",
  },
  {
    key: "Talent Mobility & Manpower Solutions" as keyof typeof servicesData,
    num: "03",
    href: "/talent",
    tagline: "Connecting top Pakistani talent to global opportunities",
  },
  {
    key: "Consulting, Advisory & Research" as keyof typeof servicesData,
    num: "04",
    href: "/consulting",
    tagline: "Strategic clarity for complex transformation",
  },
  {
    key: "Workspace, Design & Infrastructure" as keyof typeof servicesData,
    num: "05",
    href: "/workspace",
    tagline: "Environments engineered for peak performance",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServicesSection(_props: Record<string, any> = {}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const outer = outerRef.current;
    if (!track || !outer) return;

    const panels = Array.from(
      track.querySelectorAll<HTMLElement>(".svc-h-panel")
    );
    const panelCount = panels.length;

    const getPanelW = () => outer.offsetWidth;
    const getTotalScroll = () => (panelCount - 1) * getPanelW();

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(track, {
        x: () => -getTotalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          scroller: window,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${getTotalScroll()}`,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel) => {
        const heading = panel.querySelector<HTMLElement>(".svc-panel-heading");
        const tagline = panel.querySelector<HTMLElement>(".svc-panel-tagline");
        const cta = panel.querySelector<HTMLElement>(".svc-panel-cta");
        const cards = panel.querySelectorAll<HTMLElement>(".svc-card");
        const counter = panel.querySelector<HTMLElement>(".svc-panel-counter");

        const stConfig = {
          trigger: panel,
          containerAnimation: scrollTween,
          start: "left 88%",
          toggleActions: "play none none reverse",
        };

        if (counter)
          gsap.from(counter, {
            opacity: 0, y: -20, duration: 0.6, ease: "power3.out",
            scrollTrigger: stConfig,
          });

        if (heading)
          gsap.from(heading, {
            opacity: 0, x: -80, duration: 1, ease: "power3.out",
            scrollTrigger: stConfig,
          });

        if (tagline)
          gsap.from(tagline, {
            opacity: 0, x: -50, duration: 0.8, delay: 0.15, ease: "power3.out",
            scrollTrigger: stConfig,
          });

        if (cta)
          gsap.from(cta, {
            opacity: 0, y: 18, duration: 0.7, delay: 0.28, ease: "power3.out",
            scrollTrigger: stConfig,
          });

        if (cards.length)
          gsap.from(cards, {
            opacity: 0, y: 60, duration: 0.7, stagger: 0.08, ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left 78%",
              toggleActions: "play none none reverse",
            },
          });
      });
    }, outer);

    // Fire after ProjectOrbitSection's 350ms refresh so both are in sync
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(true), 450);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* ── Section header ── */
        .svc-section-header {
          padding-bottom: 40px;
        }
        @media (min-width: 1024px) {
          .svc-section-header {
            padding-bottom: 48px;
          }
        }

        /* ── Outer pinned container ── */
        .svc-scroll-outer {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          /* dvh = dynamic viewport: adapts to browser chrome/toolbars */
          height: 100vh;
          height: 100dvh;
        }

        /* ── Track ── */
        .svc-scroll-track {
          display: flex;
          height: 100%;
          will-change: transform;
        }

        /* ── Single panel ── */
        .svc-h-panel {
          flex-shrink: 0;
          width: 100vw;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #ffffff;
        }

        /* ── Panel inner layout — grid so cards fill exact remaining height ── */
        .svc-panel-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
          padding: 36px 24px 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .svc-panel-inner {
            padding: 44px 72px 0;
          }
        }
        @media (min-width: 1280px) {
          .svc-panel-inner {
            padding: 48px 96px 0;
            max-width: 1440px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* ── Panel top row ── */
        .svc-panel-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }
        @media (min-width: 1024px) {
          .svc-panel-top {
            margin-bottom: 14px;
          }
        }

        .svc-panel-counter {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #050783;
          margin-bottom: 6px;
        }

        .svc-panel-heading {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          font-size: clamp(24px, 3vw, 48px);
        }

        .svc-panel-tagline {
          margin-top: 4px;
          font-size: clamp(12px, 1vw, 15px);
          color: #6b6b6b;
          font-weight: 400;
          line-height: 1.4;
          max-width: 400px;
        }

        .svc-panel-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1.5px solid #050783;
          color: #050783;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          flex-shrink: 0;
          white-space: nowrap;
          transition: background 0.3s ease, border-color 0.3s ease,
            color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: auto;
          align-self: flex-start;
        }
        .svc-panel-cta:hover {
          background: #00fe4e;
          border-color: #00fe4e;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 254, 78, 0.35);
        }
        .svc-panel-cta svg {
          transition: transform 0.3s ease;
        }
        .svc-panel-cta:hover svg {
          transform: translateX(4px);
        }

        /* ── Cards grid — fills the 1fr row, never overflows ── */
        .svc-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 10px;
          min-height: 0;
          overflow: hidden;
          padding-bottom: 20px;
        }
        @media (min-width: 768px) {
          .svc-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 12px;
            padding-bottom: 24px;
          }
        }
        @media (min-width: 1024px) {
          .svc-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 14px;
            padding-bottom: 28px;
          }
        }

        /* ── Individual card ── */
        .svc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1.5px solid #e5e5e5;
          background: #ffffff;
          text-decoration: none;
          overflow: hidden;
          transition: background 0.45s cubic-bezier(0.2, 0.9, 0.3, 1),
            border-color 0.45s cubic-bezier(0.2, 0.9, 0.3, 1),
            transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1),
            box-shadow 0.45s cubic-bezier(0.2, 0.9, 0.3, 1);
          cursor: pointer;
          min-height: 0;
          height: 100%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        @media (min-width: 1024px) {
          .svc-card {
            padding: 18px 20px;
          }
        }
        @media (min-width: 1280px) {
          .svc-card {
            padding: 22px 24px;
          }
        }
        .svc-card:hover {
          background: #050783;
          border-color: #050783;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(5, 7, 131, 0.18);
        }

        .svc-card-icon-wrap {
          width: 30px;
          height: 30px;
          margin-bottom: 10px;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .svc-card-icon-wrap {
            width: 36px;
            height: 36px;
            margin-bottom: 12px;
          }
        }
        .svc-card-icon-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) saturate(100%) invert(45%);
          transition: filter 0.45s ease;
        }
        .svc-card:hover .svc-card-icon-wrap img {
          filter: brightness(0) invert(1);
        }
        .svc-card-icon-svg {
          width: 30px;
          height: 30px;
          color: #6b6b6b;
          transition: color 0.45s ease;
          flex-shrink: 0;
          margin-bottom: 10px;
        }
        @media (min-width: 1024px) {
          .svc-card-icon-svg {
            width: 36px;
            height: 36px;
            margin-bottom: 12px;
          }
        }
        .svc-card:hover .svc-card-icon-svg {
          color: #ffffff;
        }

        .svc-card-eyebrow {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #1a1a1a;
          margin-bottom: 2px;
          transition: color 0.45s ease;
          line-height: 1.3;
        }
        @media (min-width: 1024px) {
          .svc-card-eyebrow { font-size: 10px; }
        }
        .svc-card:hover .svc-card-eyebrow {
          color: rgba(255, 255, 255, 0.75);
        }

        .svc-card-title {
          font-size: clamp(13px, 1.1vw, 17px);
          font-weight: 700;
          background: linear-gradient(90deg, #00fe4e 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          transition: filter 0.45s ease, opacity 0.45s ease;
        }
        .svc-card:hover .svc-card-title {
          background: none;
          -webkit-text-fill-color: #ffffff;
          color: #ffffff;
        }

        .svc-card-body {
          font-size: 10px;
          color: #6b6b6b;
          line-height: 1.5;
          flex: 1;
          transition: color 0.45s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .svc-card-body {
            font-size: 11px;
            -webkit-line-clamp: 3;
          }
        }
        @media (min-width: 1280px) {
          .svc-card-body {
            font-size: 12px;
          }
        }
        .svc-card:hover .svc-card-body {
          color: rgba(255, 255, 255, 0.78);
        }

        .svc-card-arrow {
          position: absolute;
          bottom: 12px;
          right: 14px;
          width: 16px;
          height: 16px;
          color: #cfcfcf;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        @media (min-width: 1024px) {
          .svc-card-arrow { bottom: 16px; right: 18px; width: 18px; height: 18px; }
        }
        .svc-card:hover .svc-card-arrow {
          color: rgba(255, 255, 255, 0.5);
          transform: translate(2px, -2px);
        }

        /* ── Panel decorative number ── */
        .svc-panel-deco {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .svc-panel-deco-num {
          position: absolute;
          bottom: -20px;
          right: -10px;
          font-size: 28vw;
          font-weight: 900;
          color: rgba(5, 7, 131, 0.04);
          line-height: 1;
          letter-spacing: -0.05em;
          pointer-events: none;
          user-select: none;
          font-family: var(--font-montserrat), sans-serif;
        }


        /* ── Scroll hint (first panel only) ── */
        .svc-scroll-hint {
          position: absolute;
          bottom: 16px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #aaaaaa;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          z-index: 10;
          pointer-events: none;
        }
        .svc-scroll-hint svg {
          animation: svcHintBounce 1.6s ease-in-out infinite;
        }
        @keyframes svcHintBounce {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }

        /* ── Mobile horizontal scroll (CSS snap, no GSAP pin) ── */
        .svc-mobile-scroll {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          height: 100svh;
        }
        .svc-mobile-scroll::-webkit-scrollbar {
          display: none;
        }
        .svc-mobile-panel {
          flex-shrink: 0;
          width: 100vw;
          height: 100%;
          scroll-snap-align: start;
        }

        /* ══════════════════════════════════════
           DARK MODE
           ══════════════════════════════════════ */

        /* Section + panel backgrounds */
        html.dark .svc-scroll-outer,
        html.dark .svc-h-panel {
          background: #05070b !important;
        }

        /* "Our Services" eyebrow label */
        html.dark .svc-section-header .text-black {
          color: rgba(245, 248, 246, 0.82) !important;
        }

        /* Description paragraph */
        html.dark .svc-section-header p {
          color: rgba(245, 248, 246, 0.6) !important;
        }

        /* Panel counter (01 / 05) */
        html.dark .svc-panel-counter {
          color: #00fe4e !important;
        }

        /* Panel main heading */
        html.dark .svc-panel-heading {
          color: #f5f8f6 !important;
        }

        /* Panel tagline */
        html.dark .svc-panel-tagline {
          color: rgba(245, 248, 246, 0.5) !important;
        }

        /* CTA button */
        html.dark .svc-panel-cta {
          border-color: rgba(245, 248, 246, 0.25) !important;
          color: rgba(245, 248, 246, 0.82) !important;
        }
        html.dark .svc-panel-cta:hover {
          background: #00fe4e !important;
          border-color: #00fe4e !important;
          color: #000 !important;
        }

        /* Watermark number */
        html.dark .svc-panel-deco-num {
          color: rgba(255, 255, 255, 0.025) !important;
        }

        /* Scroll hint text */
        html.dark .svc-scroll-hint {
          color: rgba(255, 255, 255, 0.25) !important;
        }

        /* Cards — default state */
        html.dark .svc-card {
          background: #0d141e !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
        }
        html.dark .svc-card-eyebrow {
          color: rgba(245, 248, 246, 0.55) !important;
        }
        html.dark .svc-card-title {
          background: linear-gradient(90deg, #00fe4e 0%, #6b78ff 100%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        html.dark .svc-card-body {
          color: rgba(245, 248, 246, 0.48) !important;
        }
        html.dark .svc-card-icon-wrap img {
          filter: brightness(0) saturate(100%) invert(70%) !important;
        }
        html.dark .svc-card-icon-svg {
          color: rgba(245, 248, 246, 0.45) !important;
        }
        html.dark .svc-card-arrow {
          color: rgba(255, 255, 255, 0.2) !important;
        }

        /* Cards — hover state (keep same deep blue as light mode) */
        html.dark .svc-card:hover {
          background: #050783 !important;
          border-color: #050783 !important;
          box-shadow: 0 10px 28px rgba(5, 7, 131, 0.35) !important;
        }
        html.dark .svc-card:hover .svc-card-eyebrow { color: rgba(255,255,255,0.75) !important; }
        html.dark .svc-card:hover .svc-card-title {
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
          color: #ffffff !important;
        }
        html.dark .svc-card:hover .svc-card-body { color: rgba(255,255,255,0.78) !important; }
        html.dark .svc-card:hover .svc-card-icon-wrap img { filter: brightness(0) invert(1) !important; }
        html.dark .svc-card:hover .svc-card-icon-svg { color: #ffffff !important; }
        html.dark .svc-card:hover .svc-card-arrow { color: rgba(255,255,255,0.5) !important; }

      `}</style>

      {/* ── Section Header (light, inside max-width) ── */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 svc-section-header">
        <div
          data-reveal="up-sm"
          className="mb-3 lg:mb-4 uppercase tracking-[0.08em] text-black"
          style={{
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat), sans-serif",
          }}
        >
          Our Services
        </div>

        <div
          data-reveal="fade"
          data-reveal-delay="100"
          className="gsap-marquee marquee-shell"
        >
          <div className="marquee-track">
            <span className="gsap-clip marquee-text">
              Solutions Designed To Move Organizations Forward
            </span>
            <span className="marquee-text">
              Solutions Designed To Move Organizations Forward
            </span>
            <span className="marquee-text">
              Solutions Designed To Move Organizations Forward
            </span>
            <span className="marquee-text">
              Solutions Designed To Move Organizations Forward
            </span>
          </div>
        </div>

        <p
          data-reveal="up-sm"
          data-reveal-delay="200"
          className="mt-3 lg:mt-4 max-w-[560px] leading-[1.3] text-[#202020]"
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
        >
          Transforming businesses with AI-powered technology and intelligent
          automation
        </p>
      </div>

      {/* ── Desktop: GSAP pinned horizontal scroll ── */}
      <div
        ref={outerRef}
        className="hidden svc-scroll-outer lg:block"
        style={{ height: "100dvh", position: "relative", zIndex: 10 }}
      >
        <div ref={trackRef} className="svc-scroll-track">
          {CATEGORIES.map((cat, catIndex) => {
            const cards = servicesData[cat.key] || [];
            return (
              <div key={cat.key} className="svc-h-panel">
                {/* Decorative layer */}
                <div className="svc-panel-deco">
                  <span className="svc-panel-deco-num">{cat.num}</span>
                </div>

                <div className="svc-panel-inner">
                  {/* Top: meta + heading + CTA */}
                  <div className="svc-panel-top">
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="svc-panel-counter">
                        {cat.num}&nbsp;/&nbsp;0{CATEGORIES.length}
                      </div>
                      <h2 className="svc-panel-heading">{cat.key}</h2>
                      <p className="svc-panel-tagline">{cat.tagline}</p>
                    </div>

                    <Link href={cat.href} className="svc-panel-cta">
                      Explore All
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7h10M7 2l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Cards grid */}
                  <div className="svc-cards-grid">
                    {cards.map((card, cardIndex) => {
                      const isImg = typeof card.icon === "string";
                      const IconComp = !isImg
                        ? (card.icon as LucideIcon)
                        : null;

                      return (
                        <Link
                          key={cardIndex}
                          href={card.href || "#"}
                          className="svc-card"
                        >
                          {isImg ? (
                            <div className="svc-card-icon-wrap">
                              <img src={card.icon as string} alt="" />
                            </div>
                          ) : IconComp ? (
                            <IconComp
                              className="svc-card-icon-svg"
                              strokeWidth={1.3}
                            />
                          ) : null}

                          <div className="svc-card-eyebrow">
                            {card.eyebrow}
                          </div>
                          <div className="svc-card-title">{card.title}</div>
                          <p className="svc-card-body">{card.body}</p>

                          <svg
                            className="svc-card-arrow"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4 16L16 4M16 4H8M16 4v8"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </div>

               
              </div>
            );
          })}
        </div>

      </div>

     
    </>
  );
}
