"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { servicesData } from "@/data/services";

interface ServicesSectionProps {
  activeServiceTab: keyof typeof servicesData;
  setActiveServiceTab: (v: keyof typeof servicesData) => void;
  serviceAnimKey: number;
  setServiceAnimKey: (v: number | ((prev: number) => number)) => void;
  servicePage: number;
  setServicePage: (v: number | ((prev: number) => number)) => void;
}

export default function ServicesSection({
  activeServiceTab,
  setActiveServiceTab,
  serviceAnimKey,
  setServiceAnimKey,
}: ServicesSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    setGlowingSide("prev");
    setTimeout(() => setGlowingSide(null), 800);
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
    setGlowingSide("next");
    setTimeout(() => setGlowingSide(null), 800);
  };

  return (
    <>
      <style jsx global>{`
        .service-card {
          transition: transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1), border-color 0.45s cubic-bezier(0.2,0.9,0.3,1);
          cursor: pointer;
          will-change: transform;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: radial-gradient(circle at top right, rgba(0,254,78,0.06), transparent 60%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .service-card:hover::before { opacity: 0; }
        .service-card-icon {
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), color 0.45s ease, filter 0.45s ease, opacity 0.45s ease;
          will-change: transform;
        }
        .service-card:hover .service-card-icon { transform: translateY(-4px) scale(1.05); }

        @keyframes serviceCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .service-card-icon { animation: serviceCardFloat 3.5s ease-in-out infinite; }

        .service-card-icon-img {
          filter: brightness(0) saturate(100%) invert(45%);
          opacity: 1;
        }
        .service-card-cycle:hover .service-card-icon-img {
          filter: brightness(0) invert(1);
          opacity: 1;
        }

        .service-tab-btn {
          background: #f1f1f1;
          border: 1.5px solid #cfcfcf;
          color: #333333;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .service-tab-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          border-color: #00fe4e;
          color: #000;
          transform: translateY(-2px);
        }
        .service-tab-btn.is-active {
          background: #00fe4e;
          border-color: #00fe4e;
          color: #000;
        }

        @keyframes serviceCardSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .service-card-anim {
          opacity: 0;
          animation: serviceCardSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ============================================
           NEW NAV BUTTONS — using /button.svg
           Mirrors PartnerLogosSection styling
           ============================================ */
        .services-nav-wrap {
          display: flex;
          justify-content: center;
          margin-top: 12px;
          padding: 24px 0;
        }
        .services-nav-box {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 60px;
          line-height: 0;
        }
        .services-nav-svg {
          display: block;
          width: 79px;
          height: 71px;
          pointer-events: none;
          position: relative;
          z-index: 2;
        }

        /* GLOW — radial halo on each side */
        .services-glow {
          position: absolute;
          top: 50%;
          width: 60px;
          height: 60px;
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
        .services-glow-prev { left: -10px; }
        .services-glow-next { right: -10px; }

        /* HOVER — glow appears smoothly */
        .services-nav-hit-prev:hover ~ .services-glow-prev,
        .services-glow-prev:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .services-nav-hit-next:hover ~ .services-glow-next,
        .services-glow-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* CLICK pulse */
        .services-glow.is-active {
          animation: servicesGlowAnim 0.75s ease-out forwards;
        }
        @keyframes servicesGlowAnim {
          0% { opacity: 0; transform: translateY(-50%) scale(0.3); }
          25% { opacity: 1; transform: translateY(-50%) scale(1.15); }
          100% { opacity: 0; transform: translateY(-50%) scale(1.5); }
        }

        .services-nav-hit {
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
        .services-nav-hit-prev { left: 0; }
        .services-nav-hit-next { right: 0; }

        /* MOBILE responsive */
        @media (max-width: 768px) {
          .services-nav-box,
          .services-nav-svg {
            width: 66px;
            height: 60px;
          }
          .services-glow {
            width: 50px;
            height: 50px;
          }
        }
        @media (max-width: 480px) {
          .services-nav-box,
          .services-nav-svg {
            width: 58px;
            height: 52px;
          }
          .services-glow {
            width: 44px;
            height: 44px;
          }
        }

        .service-card-cycle {
          background: #ffffff;
          border-color: #e5e5e5;
          transition: background 0.45s ease, border-color 0.45s ease, transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1);
        }
        .service-card-cycle .service-card-icon-cycle {
          color: #6b6b6b;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-eyebrow {
          color: #1a1a1a;
          font-weight: 500;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-title {
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: filter 0.45s ease, opacity 0.45s ease;
        }
        .service-card-cycle .service-card-body {
          color: #6b6b6b;
          transition: color 0.45s ease;
        }
        .service-card-cycle:hover {
          background: #050783;
          border-color: #050783;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(5, 7, 131, 0.18);
        }
        .service-card-cycle:hover .service-card-icon-cycle { color: #ffffff; }
        .service-card-cycle:hover .service-card-eyebrow { color: #ffffff; }
        .service-card-cycle:hover .service-card-title {
          background: none;
          -webkit-text-fill-color: #ffffff;
          color: #ffffff;
        }
        .service-card-cycle:hover .service-card-body { color: rgba(255, 255, 255, 0.78); }

        .services-swiper {
          width: 100%;
          padding: 4px 4px 8px;
        }
        .services-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        .services-swiper .swiper-slide > * {
          width: 100%;
        }

        .services-tabs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 640px) {
          .services-tabs-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
        }
        @media (min-width: 1024px) {
          .services-tabs-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      <section className="mt-14 lg:mt-20 pb-12 lg:pb-16">
        <div data-reveal="up-sm" className="mb-3 lg:mb-4 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.08em] text-black">
          Our Services
        </div>
        <div data-reveal="fade" data-reveal-delay="100" className="gsap-marquee marquee-shell">
          <div className="marquee-track">
            <span className="gsap-clip marquee-text">Solutions Designed To Move Organizations Forward</span>
            <span className="marquee-text">Solutions Designed To Move Organizations Forward</span>
            <span className="marquee-text">Solutions Designed To Move Organizations Forward</span>
            <span className="marquee-text">Solutions Designed To Move Organizations Forward</span>
          </div>
        </div>
        <p
          data-reveal="up-sm"
          data-reveal-delay="200"
          className="gsap-words mt-3 lg:mt-4 max-w-[560px] leading-[1.3] text-[#202020]"
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
        >
          Transforming businesses with AI-powered technology and intelligent automation
        </p>

        <div data-reveal="up-sm" data-reveal-delay="280" className="services-tabs-grid mt-6 lg:mt-7">
          {(Object.keys(servicesData) as (keyof typeof servicesData)[]).map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveServiceTab(item);
                setServiceAnimKey((k) => k + 1);
                if (swiperRef.current) {
                  swiperRef.current.slideTo(0);
                }
              }}
              className={`service-tab-btn w-full h-[48px] lg:h-[60px] rounded-[8px] text-[12px] lg:text-[14px] font-medium px-2 flex items-center justify-center text-center leading-tight ${
                activeServiceTab === item ? "is-active" : ""
              }`}
            >
              <span className="block">{item}</span>
            </button>
          ))}
        </div>

        <div className="mt-6" key={`${String(activeServiceTab)}-${serviceAnimKey}`}>
          <Swiper
            modules={[Navigation, A11y]}
            onSwiper={(s) => { swiperRef.current = s; }}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="services-swiper"
          >
            {(servicesData[activeServiceTab] || []).map((card, i) => {
              const isImageIcon = typeof card.icon === "string";
              const IconComponent = !isImageIcon ? (card.icon as React.ComponentType<{ className?: string; strokeWidth?: number }>) : null;

              return (
                <SwiperSlide key={`${String(activeServiceTab)}-${i}`}>
                  <Link
                    href={card.href || "#"}
                    className="service-card service-card-cycle service-card-anim relative flex flex-col min-h-[440px] lg:aspect-square lg:min-h-0 rounded-[14px] border border-[#e5e5e5] p-7 lg:p-8 overflow-hidden"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {isImageIcon ? (
                      <img
                        src={card.icon as string}
                        alt=""
                        className="service-card-icon service-card-icon-img absolute right-7 top-6 lg:right-8 lg:top-8 h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] object-contain"
                      />
                    ) : IconComponent ? (
                      <IconComponent
                        className="service-card-icon absolute right-7 top-6 lg:right-8 lg:top-8 h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] service-card-icon-cycle"
                        strokeWidth={1.4}
                      />
                    ) : null}
                    <div className="service-card-eyebrow mt-[60px] lg:mt-[90px] text-[13px] lg:text-[14px]">
                      {card.eyebrow}
                    </div>
                    <h3
                      className="service-card-title mt-2 font-medium leading-tight tracking-[-0.02em]"
                      style={{ fontSize: "clamp(22px, 2.2vw, 28px)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="service-card-body mt-3 lg:mt-4 text-[13px] lg:text-[14px] leading-[1.55]">
                      {card.body}
                    </p>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* ============ NAV BUTTONS (using /button.svg) ============ */}
        <div data-reveal="zoom" data-reveal-delay="100" className="services-nav-wrap">
          <div className="services-nav-box">
            <button
              type="button"
              onClick={handlePrev}
              className="services-nav-hit services-nav-hit-prev"
              aria-label="Previous cards"
            />
            <button
              type="button"
              onClick={handleNext}
              className="services-nav-hit services-nav-hit-next"
              aria-label="Next cards"
            />
            <span
              className={`services-glow services-glow-prev ${
                glowingSide === "prev" ? "is-active" : ""
              }`}
            />
            <span
              className={`services-glow services-glow-next ${
                glowingSide === "next" ? "is-active" : ""
              }`}
            />
            <img src="/button.svg" alt="" className="services-nav-svg" />
          </div>
        </div>
      </section>
    </>
  );
}