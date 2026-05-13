"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partnerLogos = [
  { src: "/wef.png", name: "World Economic Forum" },
  { src: "/coursera.png", name: "Coursera" },
  { src: "/educative.png", name: "Educative" },
  { src: "/pearson.png", name: "Pearson" },
  { src: "/tuv-rheinland.png", name: "TÜV Rheinland" },
  { src: "/dost-cargo.png", name: "Dost Cargo" },
  { src: "/practice-hub.png", name: "Practice Hub" },
];

export default function PartnerLogosSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);

  const handleGlow = (side: "prev" | "next") => {
    setGlowingSide(side);
    window.setTimeout(() => setGlowingSide(null), 800);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    handleGlow("prev");
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
    handleGlow("next");
  };

  return (
    <>
      <style jsx global>{`
        .collab-section {
          width: 100%;
          padding: 90px 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .collab-title {
          margin: 0 0 40px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(22px, 3.5vw, 45px);
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.2;
          text-align: center;
          background: linear-gradient(90deg, #00fe4e 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .collab-shell {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
          padding: 16px 0 24px;
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

        .collab-swiper {
          width: 100%;
          padding-left: 16px;
          padding-right: 16px;
          overflow: visible;
          cursor: grab;
        }

        .collab-swiper:active {
          cursor: grabbing;
        }

        .collab-swiper .swiper-wrapper {
          align-items: center;
          transition-timing-function: ease-in-out !important;
        }

        .collab-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .collab-card {
          width: 100%;
          max-width: 200px;
          height: clamp(80px, 9vw, 110px);
          margin: 0 auto;
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
          user-select: none;
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
          height: auto;
          object-fit: contain;
          filter: grayscale(0.15);
          transition: filter 0.3s ease;
          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        .collab-card:hover img {
          filter: grayscale(0);
        }

        .collab-nav-wrap {
          display: flex;
          justify-content: center;
          margin-top: 12px;
          padding: 24px 0;
        }

        .collab-nav-box {
          position: relative;
          display: inline-block;
          width: 79px;
          height: 71px;
          line-height: 0;
        }

        .collab-nav-svg {
          display: block;
          width: 60px;
          height: 60px;
          pointer-events: none;
          position: relative;
          z-index: 2;
          user-select: none;
          -webkit-user-drag: none;
        }

        .collab-glow {
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

        .collab-glow-prev {
          left: -10px;
        }

        .collab-glow-next {
          right: -10px;
        }

        .collab-nav-hit-prev:hover ~ .collab-glow-prev {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .collab-nav-hit-next:hover ~ .collab-glow-next {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .collab-glow.is-active {
          animation: sideGlowAnim 0.75s ease-out forwards;
        }

        @keyframes sideGlowAnim {
          0% {
            opacity: 0;
            transform: translateY(-50%) scale(0.3);
          }

          25% {
            opacity: 1;
            transform: translateY(-50%) scale(1.15);
          }

          100% {
            opacity: 0;
            transform: translateY(-50%) scale(1.5);
          }
        }

        .collab-nav-hit {
          position: absolute !important;
          top: 0 !important;
          width: 50% !important;
          height: 100% !important;
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer !important;
          z-index: 3 !important;
          font-size: 0 !important;
          color: transparent !important;
          transform: none !important;
        }

        .collab-nav-hit-prev {
          left: 0 !important;
        }

        .collab-nav-hit-next {
          right: 0 !important;
        }

        @media (min-width: 640px) {
          .collab-swiper {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 1024px) {
          .collab-swiper {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        @media (max-width: 768px) {
          .collab-section {
            padding: 60px 0 28px;
          }

          .collab-title {
            font-size: 20px;
            letter-spacing: 0.02em;
            margin-bottom: 24px;
          }

          .collab-shell {
            padding-bottom: 12px !important;
          }

          .collab-nav-box,
          .collab-nav-svg {
            width: 66px;
            height: 60px;
          }

          .collab-glow {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .collab-section {
            padding: 48px 0 24px;
          }

          .collab-title {
            font-size: 17px;
            margin-bottom: 18px;
          }

          .collab-nav-box,
          .collab-nav-svg {
            width: 58px;
            height: 52px;
          }

          .collab-glow {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <section className="collab-section">
        <h2 className="collab-title" data-reveal="up-sm">
          INTERNATIONAL COLLABORATORS
        </h2>

        <div data-reveal="fade" data-reveal-delay="100" className="collab-shell">
          <Swiper
            modules={[Autoplay]}
            className="collab-swiper"
            loop={true}
            speed={600}
            slidesPerView={5}
            slidesPerGroup={1}
            spaceBetween={32}
            grabCursor={true}
            allowTouchMove={true}
            simulateTouch={true}
            touchRatio={1}
            touchAngle={45}
            threshold={3}
            resistance={true}
            resistanceRatio={0.75}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 28,
              },
              1200: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 32,
              },
            }}
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={`${logo.name}-${index}`}>
                <div className="collab-card">
                  <img draggable={false} src={logo.src} alt={logo.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div data-reveal="zoom" data-reveal-delay="200" className="collab-nav-wrap">
          <div className="collab-nav-box">
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