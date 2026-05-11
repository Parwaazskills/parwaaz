"use client";

import { heroSlides } from "@/data/heroSlides";

interface HeroSectionProps {
  heroBgIndex: number;
  setHeroBgIndex: (v: number) => void;
}

export default function HeroSection({ heroBgIndex, setHeroBgIndex }: HeroSectionProps) {
  return (
    <>
      <style jsx global>{`
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 40px rgba(62,130,255,.45)); }
          50% { transform: translateY(-15px); filter: drop-shadow(0 0 65px rgba(62,130,255,.7)); }
        }
        .robot-float { animation: robotFloat 4.8s ease-in-out infinite; }

        .hero-btn {
          background: #f1f1f1;
          color: #333333;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
          transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .hero-btn-primary,
        .hero-btn-secondary {
          background: #f1f1f1;
          color: #333333;
        }
        .hero-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          color: #000000;
          border-color: #00fe4e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
        }
        .hero-btn:active { transform: translateY(0) scale(0.97); }

        .hero-stack { position: relative; width: 100%; }
        .hero-bg {
          min-height: 720px;
          position: relative;
          width: 100%;
          background: #000;
          z-index: 1;
          overflow: visible;
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
        .hero-bg-layer-0 { background-position: center bottom; }
        .hero-bg-layer-1 { background-position: center 46%; }
        .hero-bg-layer-2 { background-position: center bottom; }
        @media (max-width: 768px) {
          .hero-bg-layer-0,
          .hero-bg-layer-1,
          .hero-bg-layer-2 { background-position: center top; }
        }
        .hero-bg-layer.is-active { opacity: 1; }

        /* ============================================
           DOTS — MOBILE (default)
           ============================================ */
        .hero-bg-dots {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 6;
          transition: top 0.5s ease;
        }

        /* ============================================
           DOTS — DESKTOP (≥1024px)
           Per-slide top positioning
           ============================================ */
        @media (min-width: 1024px) {
          .hero-bg-dots {
            position: absolute;
            left: 182px;
            bottom: auto;
            transform: none;
            margin-left: 0;
            z-index: 20;
          }
          /* Background 1 (slide 0) — push DOWN here */
          .hero-bg-dots.hero-dots-slide-0 { top: 600px; }
          /* Background 2 (slide 1) — keep current */
          .hero-bg-dots.hero-dots-slide-1 { top: 480px; }
          /* Background 3 (slide 2) — push DOWN here */
          .hero-bg-dots.hero-dots-slide-2 { top: 540px; }
        }

        .hero-bg-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-bg-dot:hover { background: rgba(255, 255, 255, 0.55); }
        .hero-bg-dot.is-active {
          background: #00fe4e;
          box-shadow: 0 0 12px rgba(0, 254, 78, 0.6);
        }

        .hero-robot-wrap {
          position: absolute;
          right: 4%;
          top: 180px;
          width: 38%;
          max-width: 420px;
          aspect-ratio: 1 / 1;
          pointer-events: none;
          z-index: 5;
        }
        @media (min-width: 1024px) {
          .hero-robot-wrap { right: 6%; top: 500px; width: 36%; max-width: 480px; }
        }
        @media (min-width: 1280px) {
          .hero-robot-wrap { right: 8%; top: 235px; width: 38%; max-width: 540px; }
        }
        @media (min-width: 1536px) {
          .hero-robot-wrap { right: 10%; max-width: 580px; }
        }
        .hero-robot-mobile {
          position: relative;
          width: 78%;
          max-width: 280px;
          aspect-ratio: 1 / 1;
          margin: 28px auto 8px;
          z-index: 5;
        }
        .hero-robot-glow {
          position: absolute;
          inset: 20%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(78,121,255,.28), transparent 70%);
          filter: blur(48px);
        }
        .hero-robot-img {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .hero-bg {
            min-height: 720px !important;
            height: auto !important;
            overflow: hidden !important;
            position: relative !important;
            padding-bottom: 0 !important;
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
          .hero-robot-wrap,
          .hero-robot-mobile {
            position: relative !important;
            top: 115px !important;
            right: auto !important;
            left: auto !important;
            width: 76% !important;
            max-width: 270px !important;
            margin: 92px auto 18px !important;
            z-index: 8 !important;
          }
          .hero-bg-dots {
            left: 24px !important;
            bottom: 230px !important;
            top: auto !important;
            transform: none !important;
          }
        }

        @keyframes heroSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-anim-slide-up {
          animation: heroSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-anim-delay-1 { animation-delay: 0.1s; }
        .hero-anim-delay-2 { animation-delay: 0.2s; }
        .hero-anim-delay-3 { animation-delay: 0.3s; }
      `}</style>

      <section className="hero-bg">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.bg}
            className={`hero-bg-layer hero-bg-layer-${i} ${i === heroBgIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
        ))}
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-[140px] lg:pt-[180px] pb-[70px] sm:pb-[120px] lg:pb-[180px]">
          {heroBgIndex === 0 && (
            <div className="hero-robot-wrap hidden lg:block">
              <div className="hero-robot-glow" />
              <img src="/robot.png" alt="Robot" className="hero-robot-img robot-float" />
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center pt-2 lg:pt-6">
            <div className="relative z-10">
              <h1
                key={`hero-title-${heroBgIndex}`}
                className="gsap-hero-title hero-anim-slide-up mb-2 font-extrabold leading-[.95] tracking-[-0.05em] text-[#00fe4e] drop-shadow-[0_0_20px_rgba(0,254,78,.35)]"
                style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
              >
                {heroSlides[heroBgIndex].title}
              </h1>
              <h2
                key={`hero-subtitle-${heroBgIndex}`}
                className="gsap-hero-subtitle hero-anim-slide-up hero-anim-delay-1 mb-4 font-medium leading-tight tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(18px, 2.6vw, 30px)" }}
              >
                {heroSlides[heroBgIndex].subtitle}
              </h2>
              <p
                key={`hero-desc-${heroBgIndex}`}
                className="gsap-hero-text hero-anim-slide-up hero-anim-delay-2 mb-5 lg:mb-6 font-normal leading-[1.5] text-white/80"
                style={{ fontSize: "clamp(12px, 1vw, 14px)", maxWidth: "480px" }}
              >
                {heroSlides[heroBgIndex].desc}
              </p>
              <div className="gsap-hero-cta hero-anim-slide-up hero-anim-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button className="hero-btn hero-btn-primary h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium">Explore Solutions</button>
                <button className="hero-btn hero-btn-secondary h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium">Partner with us</button>
              </div>
              {heroBgIndex === 0 && (
                <div className="hero-robot-mobile lg:hidden">
                  <div className="hero-robot-glow" />
                  <img src="/robot.png" alt="Robot" className="hero-robot-img robot-float" />
                </div>
              )}
            </div>
          </div>
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
      </section>
    </>
  );
}