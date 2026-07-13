"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/heroSlides";
import Link from "next/link";

interface HeroSectionProps {
  heroBgIndex: number;
  setHeroBgIndex: (v: number) => void;
}

export default function HeroSection({ heroBgIndex, setHeroBgIndex }: HeroSectionProps) {
  const [showRobot, setShowRobot] = useState(heroBgIndex === 0);
  const [robotExiting, setRobotExiting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (heroBgIndex === 0) {
      setShowRobot(true);
      setRobotExiting(false);
    } else {
      if (showRobot) {
        setRobotExiting(true);

        timeout = setTimeout(() => {
          setShowRobot(false);
          setRobotExiting(false);
        }, 950);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [heroBgIndex, showRobot]);

  return (
    <>
      <style jsx global>{`
        @keyframes robotFloat {
          0%, 100% {
            transform: translateY(0);
            filter: drop-shadow(0 0 40px rgba(62, 130, 255, 0.45));
          }
          50% {
            transform: translateY(-14px);
            filter: drop-shadow(0 0 65px rgba(62, 130, 255, 0.7));
          }
        }

        @keyframes robotBottomIn {
          0% {
            opacity: 0;
            transform: translateY(140px) scale(0.94);
            filter: blur(7px) drop-shadow(0 0 18px rgba(62, 130, 255, 0.18));
          }
          70% {
            opacity: 1;
            transform: translateY(-10px) scale(1.01);
            filter: blur(0) drop-shadow(0 0 58px rgba(62, 130, 255, 0.55));
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) drop-shadow(0 0 48px rgba(62, 130, 255, 0.5));
          }
        }

        @keyframes robotBottomOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) drop-shadow(0 0 48px rgba(62, 130, 255, 0.5));
          }
          22% {
            opacity: 1;
            transform: translateY(-14px) scale(1.015);
            filter: blur(0) drop-shadow(0 0 60px rgba(62, 130, 255, 0.6));
          }
          100% {
            opacity: 0;
            transform: translateY(150px) scale(0.94);
            filter: blur(8px) drop-shadow(0 0 12px rgba(62, 130, 255, 0.12));
          }
        }

        .robot-float {
          animation: robotFloat 4.8s ease-in-out infinite;
        }

        .robot-bottom-in {
          animation: robotBottomIn 1.05s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .robot-bottom-out {
          animation: robotBottomOut 0.95s cubic-bezier(0.55, 0, 0.25, 1) both;
        }

        .hero-bg {
          height: 760px;
          min-height: 760px;
          max-height: 760px;
          position: relative;
          width: 100%;
          background: #000;
          z-index: 1;
          overflow: hidden;
        }

        .hero-bg-layer {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-layer-0 {
          background-position: center bottom;
        }

        .hero-bg-layer-1 {
          background-position: center 46%;
        }

        .hero-bg-layer-2 {
          background-position: center bottom;
        }

        .hero-bg-layer.is-active {
          opacity: 1;
        }

        .hero-content-wrap {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1280px;
          height: 100%;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        @media (min-width: 640px) {
          .hero-content-wrap {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 1024px) {
          .hero-content-wrap {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        .hero-content-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-content-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .hero-text-content {
          position: relative;
          z-index: 10;
          max-width: 560px;
          text-align: left;
        }

        .hero-bg-dots {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          margin-top: 48px;
          z-index: 20;
        }

        .hero-bg-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .hero-bg-dot:hover {
          background: rgba(255, 255, 255, 0.55);
        }

        .hero-bg-dot.is-active {
          background: #00fe4e;
          box-shadow: 0 0 12px rgba(0, 254, 78, 0.6);
        }

        .hero-robot-wrap {
          position: absolute;
          right: 6%;
          bottom: -4px;
          width: 40%;
          max-width: 560px;
          aspect-ratio: 1 / 1;
          pointer-events: none;
          z-index: 6;
          transform-origin: bottom center;
          will-change: transform, opacity, filter;
        }

        @media (min-width: 1280px) {
          .hero-robot-wrap {
            right: 8%;
            width: 39%;
            max-width: 590px;
            bottom: -6px;
          }
        }

        @media (min-width: 1536px) {
          .hero-robot-wrap {
            right: 10%;
            width: 38%;
            max-width: 620px;
            bottom: -8px;
          }
        }

        .hero-robot-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-origin: bottom center;
        }

        .hero-robot-glow {
          position: absolute;
          inset: 24%;
          bottom: 8%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(78, 121, 255, 0.32), transparent 70%);
          filter: blur(52px);
        }

        .hero-robot-img {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }

        @media (max-width: 768px) {
          .hero-bg {
            height: 720px !important;
            min-height: 720px !important;
            max-height: 720px !important;
            overflow: hidden !important;
          }

          .hero-bg-layer {
            background-repeat: no-repeat !important;
            background-size: cover !important;
          }

          .hero-bg-layer-0,
          .hero-bg-layer-1,
          .hero-bg-layer-2 {
            background-position: center top !important;
          }

          .hero-content-wrap {
            height: 100%;
            align-items: center;
            padding-left: 30px;
            padding-right: 24px;
          }

          .hero-text-content {
            max-width: 100%;
          }

          .hero-robot-wrap {
            display: none !important;
          }

          .hero-bg-dots {
            margin-top: 118px;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .hero-bg-dots {
            margin-top: 100px;
          }
        }

        @keyframes heroSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-anim-slide-up {
          animation: heroSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-anim-delay-1 {
          animation-delay: 0.1s;
        }

        .hero-anim-delay-2 {
          animation-delay: 0.2s;
        }

        .hero-anim-delay-3 {
          animation-delay: 0.3s;
        }
      `}</style>

      <section className="hero-bg">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.bg}
            className={`hero-bg-layer hero-bg-layer-${i} ${
              i === heroBgIndex ? "is-active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
        ))}

        {showRobot && (
          <div
            className={`hero-robot-wrap hidden lg:block ${
              robotExiting ? "robot-bottom-out" : "robot-bottom-in"
            }`}
          >
            <div className="hero-robot-inner robot-float">
              <div className="hero-robot-glow" />
              <img src="/robot.png" alt="Robot" className="hero-robot-img" />
            </div>
          </div>
        )}

        <div className="hero-content-wrap">
          <div className="hero-content-grid">
            <div className="hero-text-content">
              <h1
                key={`hero-title-${heroBgIndex}`}
                className="gsap-hero-title hero-anim-slide-up mb-2 font-extrabold leading-[.95] tracking-[-0.05em] text-[#00fe4e] drop-shadow-[0_0_20px_rgba(0,254,78,.35)]"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                {heroSlides[heroBgIndex].title}
              </h1>

              <h2
                key={`hero-subtitle-${heroBgIndex}`}
                className="gsap-hero-subtitle hero-anim-slide-up hero-anim-delay-1 mb-4 font-medium leading-tight tracking-[-0.03em] text-white"
                style={{
                  fontSize: "clamp(18px, 2.6vw, 30px)",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                {heroSlides[heroBgIndex].subtitle}
              </h2>

              <p
                key={`hero-desc-${heroBgIndex}`}
                className="gsap-hero-text hero-anim-slide-up hero-anim-delay-2 mb-5 lg:mb-6 font-normal leading-[1.5] text-white/80"
                style={{
                  fontSize: "clamp(12px, 1vw, 14px)",
                  maxWidth: "480px",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                {heroSlides[heroBgIndex].desc}
              </p>

       <div className="gsap-hero-cta hero-anim-slide-up hero-anim-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
  <Link
    href="/aitech"
    className="hero-btn inline-flex items-center justify-center h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium no-underline"
  >
    Explore Solutions
  </Link>

  <Link
    href="/contact"
    className="hero-btn inline-flex items-center justify-center h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium no-underline"
  >
    Partner with us
  </Link>
</div>

              <div className={`hero-bg-dots hero-dots-slide-${heroBgIndex}`}>
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroBgIndex(i)}
                    className={`hero-bg-dot ${i === heroBgIndex ? "is-active" : ""}`}
                    aria-label={`Show banner ${i + 1}`}
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
