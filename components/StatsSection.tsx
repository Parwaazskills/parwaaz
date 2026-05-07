"use client";

import { CheckCircle2, BookOpen, Smile, Globe } from "lucide-react";

const stats = [
  { Icon: CheckCircle2, val: "1,000+", l1: "Successful", l2: "Placements" },
  { Icon: BookOpen, val: "12,000+", l1: "Specialized", l2: "Courses" },
  { Icon: Smile, val: "95%", l1: "Customer", l2: "Satisfaction" },
  { Icon: Globe, val: "5+", l1: "Countries", l2: "where we have clients" },
];

export default function StatsSection() {
  return (
    <>
      <style jsx global>{`
        .stat-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #02E046;
          border-radius: 10px;
          cursor: default;
        }
        .stat-card-icon { color: #02E046; }
        .stat-card-val { color: #000000; }
        @media (max-width: 768px) {
          .stat-card {
            width: 160px !important;
            height: 160px !important;
            aspect-ratio: auto !important;
            padding: 12px !important;
            margin: 0 auto !important;
          }
          .stat-card-label {
            font-size: 11px !important;
            line-height: 1.2 !important;
          }
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-shell {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          overflow: hidden;
          padding: 6px 0;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 60px;
          animation: marqueeScroll 28s linear infinite;
          will-change: transform;
        }
        .marquee-shell:hover .marquee-track { animation-play-state: paused; }
        .marquee-text {
          flex-shrink: 0;
          font-family: var(--font-poppins), sans-serif;
          font-weight: 400;
          font-size: clamp(40px, 8vw, 110px);
          line-height: 1;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          white-space: nowrap;
          background: linear-gradient(
            90deg,
            #04B93F 0%,
            #04B93F 12%,
            #038936 30%,
            #0a5a30 55%,
            #050889 80%,
            #050889 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gradientShift 12s linear infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <section className="mt-10 lg:mt-14 pb-12 lg:pb-20">
        <h3
          data-reveal="up-sm"
          className="font-light leading-none tracking-[-0.03em] text-black"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          Why Choose Us
        </h3>
        <div
          data-reveal="fade"
          data-reveal-delay="100"
          className="gsap-marquee marquee-shell mt-3 lg:mt-5"
        >
          <div className="marquee-track">
            <span className="gsap-clip marquee-text">Let The Numbers Speak!</span>
            <span className="marquee-text">Let The Numbers Speak!</span>
            <span className="marquee-text">Let The Numbers Speak!</span>
          </div>
        </div>
        <p
          data-reveal="up-sm"
          data-reveal-delay="200"
          className="gsap-words mt-3 lg:mt-4 leading-[1.4] text-black"
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
        >
          With enough data, the numbers speak for themselves.
        </p>
        <div className="mt-6 lg:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[1280px]">
          {stats.map((s, i) => (
            <div
              key={s.val}
              data-reveal="up"
              data-reveal-delay={i * 100}
              className="stat-card aspect-square flex flex-col items-center justify-center p-6"
            >
              <s.Icon
                className="stat-card-icon mb-3 lg:mb-4"
                strokeWidth={1.6}
                style={{
                  width: "clamp(34px, 3.4vw, 44px)",
                  height: "clamp(34px, 3.4vw, 44px)",
                }}
              />
              <div
                className="stat-card-val font-normal leading-none"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                {s.val}
              </div>
              <div
                className="stat-card-label mt-3 lg:mt-4 text-center leading-[1.2] text-black"
                style={{ fontSize: "clamp(13px, 1.3vw, 16px)" }}
              >
                <div>{s.l1}</div>
                <div>{s.l2}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}