"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { servicesData } from "@/data/services";

type LucideComp = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

const ACCENTS = ["#00fe4e", "#00e0b0", "#00c8f0", "#4da8ff", "#a78bfa"];
const NUMS    = ["01", "02", "03", "04", "05"];

// Orbit ring + planet component rendered per group
function OrbitRings({ accent }: { accent: string }) {
  return (
    <svg
      className="hs-orbit-svg"
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      {/* Static rings */}
      <circle cx="200" cy="200" r="178" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.10" />
      <circle cx="200" cy="200" r="118" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.07" strokeDasharray="5 9" />
      <circle cx="200" cy="200" r="60"  fill="none" stroke={accent} strokeWidth="0.6" opacity="0.13" />

      {/* Orbiting planets — each <g> rotates around the SVG center */}
      <g className="hs-orb-g1" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="378" cy="200" r="5" fill={accent} opacity="0.85" />
        <circle cx="378" cy="200" r="9" fill={accent} opacity="0.15" />
      </g>
      <g className="hs-orb-g2" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="318" cy="200" r="3.5" fill={accent} opacity="0.75" />
        <circle cx="318" cy="200" r="6"   fill={accent} opacity="0.12" />
      </g>
      <g className="hs-orb-g3" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="260" cy="200" r="2.5" fill={accent} opacity="0.9" />
      </g>
    </svg>
  );
}

export default function HorizontalServicesScroll() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const fillRef     = useRef<HTMLDivElement>(null);
  const groupRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth <= 900) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: true, nullTargetWarn: false });

    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context | null = null;

    const setup = () => {
      if (ctx) ctx.revert();

      const groups = groupRefs.current.filter(Boolean) as HTMLDivElement[];

      ctx = gsap.context(() => {
        const shift = () => Math.max(0, track.scrollWidth - window.innerWidth);

        // ─── Per-group burst timelines ───────────────────────────────
        const timelines: gsap.core.Timeline[] = [];
        const fired = new Array(groups.length).fill(false);
        const TWO_PI = Math.PI * 2;

        groups.forEach((group) => {
          const cards  = Array.from(group.querySelectorAll<HTMLElement>(".hs-card"));
          const count  = cards.length;
          const radius = 140; // burst radius in px

          // Set every card to its "circular burst" starting state
          cards.forEach((card, ci) => {
            const angle = (ci / count) * TWO_PI - Math.PI / 2;
            gsap.set(card, {
              x:        Math.cos(angle) * radius,
              y:        Math.sin(angle) * radius,
              rotation: (angle * 180) / Math.PI,
              opacity:  0,
              scale:    0.4,
              force3D:  true,
            });
          });

          const tl = gsap.timeline({ paused: true });
          tl.to(cards, {
            x: 0, y: 0, rotation: 0, opacity: 1, scale: 1,
            duration: 0.82,
            ease:     "back.out(1.35)",
            stagger:  { amount: 0.52, from: "start" },
            force3D:  true,
          });
          timelines.push(tl);
        });

        // ─── Horizontal scroll trigger ───────────────────────────────
        const triggerGroup = (gi: number) => {
          if (fired[gi] || !timelines[gi]) return;
          fired[gi] = true;
          timelines[gi].play();
        };

        gsap.to(track, {
          x:    () => -shift(),
          ease: "none",
          scrollTrigger: {
            trigger:          section,
            start:            "top top",
            end:              () => `+=${shift()}`,
            scrub:            1.6,
            pin:              true,
            pinSpacing:       true,
            anticipatePin:    1,
            invalidateOnRefresh: true,

            onEnter: () => triggerGroup(0),

            onUpdate: (self) => {
              // progress bar
              if (fillRef.current) {
                fillRef.current.style.width = `${self.progress * 100}%`;
              }
              // trigger each group as it slides into view
              const scrolled = self.progress * shift();
              groups.forEach((g, gi) => {
                if (fired[gi]) return;
                // fire when the group's left edge is ≤ 70 % of viewport width
                if (g.offsetLeft - scrolled <= window.innerWidth * 0.70) {
                  triggerGroup(gi);
                }
              });
            },
          },
        });
      }, section);
    };

    setup();
    const t = setTimeout(() => ScrollTrigger.refresh(true), 360);

    let rt: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (rt) clearTimeout(rt);
      rt = setTimeout(() => { setup(); ScrollTrigger.refresh(true); }, 240);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
      if (rt) clearTimeout(rt);
      if (ctx) ctx.revert();
    };
  }, []);

  const entries = Object.entries(servicesData);

  return (
    <section ref={sectionRef} className="hs-section">
      <div className="hs-viewport">
        <div ref={trackRef} className="hs-track">

          {entries.map(([category, items], ci) => {
            const accent = ACCENTS[ci] ?? "#00fe4e";
            const num    = NUMS[ci]    ?? `0${ci + 1}`;

            return (
              <div
                key={category}
                className="hs-group"
                ref={(el) => { groupRefs.current[ci] = el; }}
                style={{ "--a": accent } as React.CSSProperties}
              >
                {/* ── Chapter card ───────────────────────────────── */}
                <div className="hs-chapter">
                  <span className="hs-chapter-ghost">{num}</span>

                  {/* First group: section header. Others: empty spacer so chapter body stays at bottom */}
                  {ci === 0 ? (
                    <div className="hs-intro-block">
                      <span className="hs-intro-eyebrow">What We Offer</span>
                      <h2 className="hs-intro-title">
                        <span className="hs-dim">Our</span> Services
                      </h2>
                      <div className="hs-dots" aria-hidden="true">
                        <span /><span /><span />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="hs-chapter-body">
                    <span className="hs-chapter-counter">{num} — 05</span>
                    <h3 className="hs-chapter-name">{category}</h3>
                    <p className="hs-chapter-count">{items.length} services in this area</p>
                  </div>

                  <div className="hs-chapter-bar" />
                </div>

                {/* ── Grid section ───────────────────────────────── */}
                <div className="hs-grid-section">
                  <OrbitRings accent={accent} />

                  <div className="hs-grid">
                    {items.map((svc, si) => {
                      const isStr  = typeof svc.icon === "string";
                      const IconEl = isStr ? null : (svc.icon as LucideComp);

                      return (
                        <div key={si} className="hs-card">
                          {/* Ambient glow from top */}
                          <div className="hs-glow" />

                          {/* Pulsing node indicator */}
                          <div className="hs-node">
                            <div className="hs-node-core" />
                            <div className="hs-node-ring" />
                          </div>

                          {/* Icon */}
                          <div className="hs-icon-box">
                            {isStr ? (
                              <img
                                src={svc.icon as string}
                                alt=""
                                className="hs-icon-img"
                              />
                            ) : IconEl ? (
                              <IconEl size={18} strokeWidth={1.6} />
                            ) : null}
                          </div>

                          <p className="hs-eyebrow">{svc.eyebrow}</p>
                          <h4 className="hs-card-title">{svc.title}</h4>
                          <p className="hs-card-desc">
                            {svc.body.length > 105
                              ? svc.body.slice(0, 105) + "…"
                              : svc.body}
                          </p>

                          <Link href={svc.href} className="hs-cta">
                            {svc.btn}
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                              <path d="M1.5 5.5h8M7 2l3 3.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Thin progress bar */}
      <div className="hs-progress">
        <div ref={fillRef} className="hs-progress-fill" />
      </div>

      <style jsx global>{`
        /* ── Section ─────────────────────────────── */
        .hs-section {
          position: relative;
          width: 100%;
          height: 100svh;
          background: #04060d;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hs-viewport {
          flex: 1;
          min-height: 0;
          overflow: hidden;
          position: relative;
        }

        .hs-track {
          display: flex;
          align-items: stretch;
          height: 100%;
          will-change: transform;
        }

        /* ── Group (one viewport wide) ───────────── */
        .hs-group {
          width: 100vw;
          flex-shrink: 0;
          display: flex;
          align-items: stretch;
        }

        /* ── Chapter card ────────────────────────── */
        .hs-chapter {
          flex-shrink: 0;
          width: clamp(260px, 29vw, 380px);
          background: #070a18;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 36px 44px;
        }

        /* Ghost number watermark */
        .hs-chapter-ghost {
          position: absolute;
          top: -16px;
          right: -10px;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 200px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.06em;
          color: rgba(255, 255, 255, 0.025);
          user-select: none;
          pointer-events: none;
        }

        /* Thin accent bar on left edge */
        .hs-chapter-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: var(--a);
          opacity: 0.75;
        }

        /* Intro block (first group only) */
        .hs-intro-block {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hs-intro-eyebrow {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #00fe4e;
        }

        .hs-intro-title {
          margin: 0;
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .hs-dim { color: rgba(255, 255, 255, 0.28); }

        /* Pulsing dots animation */
        .hs-dots {
          display: flex;
          gap: 5px;
          margin-top: 4px;
        }
        .hs-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00fe4e;
          opacity: 0.2;
          animation: hsDot 1.9s ease-in-out infinite;
        }
        .hs-dots span:nth-child(2) { animation-delay: 0.22s; }
        .hs-dots span:nth-child(3) { animation-delay: 0.44s; }
        @keyframes hsDot {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.95; transform: scale(1.4); }
        }

        /* Chapter content (category label) */
        .hs-chapter-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hs-chapter-counter {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--a);
        }

        .hs-chapter-name {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(18px, 1.7vw, 26px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .hs-chapter-count {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.32);
        }

        /* ── Grid section ────────────────────────── */
        .hs-grid-section {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        /* ── SVG orbit rings (background) ────────── */
        .hs-orbit-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(520px, 80vh);
          height: min(520px, 80vh);
          pointer-events: none;
          z-index: 0;
          overflow: visible;
        }

        /* Rotating planet groups */
        .hs-orb-g1 {
          animation: hsOrbit 13s linear infinite;
        }
        .hs-orb-g2 {
          animation: hsOrbit 21s linear infinite reverse;
        }
        .hs-orb-g3 {
          animation: hsOrbit 8s linear infinite;
        }
        @keyframes hsOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Cards grid ──────────────────────────── */
        .hs-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 13px;
          height: 100%;
          padding: 18px 22px 18px 18px;
        }

        /* ── Individual card ─────────────────────── */
        .hs-card {
          position: relative;
          background: rgba(8, 11, 26, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 17px 15px 13px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow: hidden;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: border-color 0.3s ease;
          cursor: default;
          /* will-change set by GSAP */
        }
        .hs-card:hover {
          border-color: rgba(255, 255, 255, 0.16);
        }

        /* Ambient top glow */
        .hs-glow {
          position: absolute;
          top: -16px;
          left: 10%;
          right: 10%;
          height: 48px;
          background: var(--a);
          opacity: 0.09;
          filter: blur(14px);
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── Pulsing node ────────────────────────── */
        .hs-node {
          position: relative;
          width: 8px;
          height: 8px;
          margin-bottom: 2px;
          flex-shrink: 0;
        }
        .hs-node-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--a);
          animation: hsNodeGlow 2.6s ease-in-out infinite;
        }
        .hs-node-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px solid var(--a);
          opacity: 0;
          animation: hsNodeRipple 2.6s ease-in-out infinite;
        }
        @keyframes hsNodeGlow {
          0%, 100% { box-shadow: 0 0 0 0 transparent; }
          50%       { box-shadow: 0 0 6px 2px var(--a); filter: brightness(1.15); }
        }
        @keyframes hsNodeRipple {
          0%   { opacity: 0.7; transform: scale(0.5); }
          100% { opacity: 0;   transform: scale(1.9); }
        }

        /* ── Icon box ────────────────────────────── */
        .hs-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hs-icon-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9px;
          background: var(--a);
          opacity: 0.13;
        }
        .hs-icon-img {
          width: 18px;
          height: 18px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          /* tint the icon to match accent */
          filter: brightness(0) invert(1) opacity(0.75);
        }

        /* ── Card text ───────────────────────────── */
        .hs-eyebrow {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--a);
          opacity: 0.9;
        }

        .hs-card-title {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(12px, 1.05vw, 15px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .hs-card-desc {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(10.5px, 0.82vw, 12.5px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.42);
          flex: 1;
        }

        .hs-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--a);
          text-decoration: none;
          opacity: 0.78;
          margin-top: 2px;
          transition: gap 0.15s ease, opacity 0.15s ease;
          align-self: flex-start;
        }
        .hs-cta:hover {
          gap: 8px;
          opacity: 1;
        }

        /* ── Progress bar ────────────────────────── */
        .hs-progress {
          height: 3px;
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }
        .hs-progress-fill {
          height: 100%;
          width: 0%;
          background: #00fe4e;
          transition: none;
        }

        /* ── Mobile ──────────────────────────────── */
        @media (max-width: 900px) {
          .hs-section {
            height: auto;
            overflow: visible;
            padding-bottom: 32px;
          }
          .hs-viewport {
            overflow-x: auto;
            overflow-y: visible;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hs-viewport::-webkit-scrollbar { display: none; }

          .hs-track {
            align-items: flex-start;
            height: auto;
          }

          .hs-group {
            width: auto;
            flex-direction: column;
            scroll-snap-align: start;
          }

          .hs-chapter {
            width: 88vw;
            min-height: 200px;
            padding: 28px 24px 32px;
          }
          .hs-chapter-ghost { font-size: 120px; }
          .hs-chapter-name  { font-size: 20px; }

          .hs-grid-section {
            width: 88vw;
            min-height: 0;
          }

          .hs-orbit-svg { display: none; }

          .hs-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);
            height: auto;
            padding: 16px;
            gap: 10px;
          }

          .hs-card {
            padding: 14px 13px 12px;
          }

          .hs-progress { display: none; }

          /* Cards are always visible on mobile */
          .hs-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }

        @media (max-width: 480px) {
          .hs-chapter,
          .hs-grid-section {
            width: 92vw;
          }
          .hs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
