"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [testimonialDir, setTestimonialDir] = useState<"next" | "prev">("next");
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);

  const handleTestimonialPrev = () => {
    setTestimonialDir("prev");
    swiperRef.current?.slidePrev();
    setGlowingSide("prev");
    setTimeout(() => setGlowingSide(null), 800);
  };

  const handleTestimonialNext = () => {
    setTestimonialDir("next");
    swiperRef.current?.slideNext();
    setGlowingSide("next");
    setTimeout(() => setGlowingSide(null), 800);
  };

  return (
    <>
      <style jsx global>{`
        .testimonials-section {
          position: relative;
          padding: 24px 0 80px;
          background: #ffffff;
        }

        .testimonials-pill-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #00fe4e;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .testimonials-heading {
          background: linear-gradient(90deg, #00fe4e 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 56px 0 64px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 0 0 52px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 36px 0 44px;
          }
        }

        .testimonial-stage {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 30px auto;
          min-height: 240px;
        }

        .testimonials-swiper {
          width: 100%;
          overflow: hidden;
        }

        .testimonials-swiper .swiper-wrapper {
          align-items: center;
        }

        .testimonials-swiper .swiper-slide {
          width: 100%;
          opacity: 0;
          pointer-events: none;
          transform: translateY(40px) scale(0.96);
          transition:
            opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .testimonial-stage.dir-prev .testimonials-swiper .swiper-slide {
          transform: translateY(-40px) scale(0.96);
        }

        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1) !important;
          transition-delay: 0.1s;
        }

        @media (max-width: 768px) {
          .testimonial-stage {
            min-height: 200px;
          }
        }

        @media (max-width: 480px) {
          .testimonial-stage {
            min-height: 220px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials-swiper .swiper-slide,
          .testimonials-swiper .swiper-slide-active {
            transition: opacity 0.2s ease;
            transform: none !important;
          }
        }

        .testimonials-blink {
          position: absolute;
          top: 50%;
          width: clamp(240px, 28vw, 420px);
          height: auto;
          pointer-events: none;
          z-index: 1;
          animation: blinkTwinkle 3.2s ease-in-out infinite;
        }

        .testimonials-blink-left {
          left: -60px;
          transform: translateY(-50%);
        }

        .testimonials-blink-right {
          right: -60px;
          transform: translateY(-50%) scaleX(-1);
          animation-delay: 1.6s;
        }

        @keyframes blinkTwinkle {
          0%,
          100% {
            opacity: 0.55;
            filter: brightness(1);
          }
          25% {
            opacity: 0.9;
            filter: brightness(1.15)
              drop-shadow(0 0 6px rgba(0, 254, 78, 0.25));
          }
          50% {
            opacity: 0.7;
            filter: brightness(1.05)
              drop-shadow(0 0 4px rgba(0, 254, 78, 0.15));
          }
          75% {
            opacity: 1;
            filter: brightness(1.2)
              drop-shadow(0 0 8px rgba(0, 254, 78, 0.3));
          }
        }

        .testimonials-avatar {
          object-position: center 75%;
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.1),
            0 0 0 3px rgba(0, 254, 78, 0.12);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .testimonials-avatar:hover {
          transform: scale(1.05);
          box-shadow:
            0 6px 20px rgba(0, 0, 0, 0.14),
            0 0 0 5px rgba(0, 254, 78, 0.18);
        }

        .testimonials-nav-wrap {
          display: flex;
          justify-content: center;
          margin-top: 24px;
          padding: 12px 0;
        }

        .testimonials-nav-box {
          position: relative;
          display: inline-block;
          width: 56px;
          height: 50px;
          line-height: 0;
        }

        .testimonials-nav-svg {
          display: block;
          width: 56px;
          height: 50px;
          pointer-events: none;
          position: relative;
          z-index: 2;
        }

        .testimonials-glow {
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
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .testimonials-glow-prev {
          left: -8px;
        }

        .testimonials-glow-next {
          right: -8px;
        }

        .testimonials-nav-hit-prev:hover ~ .testimonials-glow-prev,
        .testimonials-glow-prev:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .testimonials-nav-hit-next:hover ~ .testimonials-glow-next,
        .testimonials-glow-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .testimonials-glow.is-active {
          animation: testimonialsGlowAnim 0.75s ease-out forwards;
        }

        @keyframes testimonialsGlowAnim {
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

        .testimonials-nav-hit {
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

        .testimonials-nav-hit-prev {
          left: 0;
        }

        .testimonials-nav-hit-next {
          right: 0;
        }

        @media (max-width: 768px) {
          .testimonials-blink {
            width: 180px;
          }

          .testimonials-blink-left {
            left: -80px;
          }

          .testimonials-blink-right {
            right: -80px;
          }

          .testimonials-nav-box,
          .testimonials-nav-svg {
            width: 48px;
            height: 44px;
          }

          .testimonials-glow {
            width: 38px;
            height: 38px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-blink {
            width: 130px;
          }

          .testimonials-blink-left {
            left: -90px;
          }

          .testimonials-blink-right {
            right: -90px;
          }

          .testimonials-nav-box,
          .testimonials-nav-svg {
            width: 42px;
            height: 38px;
          }

          .testimonials-glow {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      <section className="testimonials-section relative overflow-hidden bg-white">
        <img
          src="/blink.svg"
          alt=""
          className="testimonials-blink testimonials-blink-left"
        />

        <img
          src="/blink.svg"
          alt=""
          className="testimonials-blink testimonials-blink-right"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            data-reveal="zoom"
            className="testimonials-pill mx-auto flex h-[48px] w-[173px] items-center gap-[8px] rounded-[50px] bg-[#00FE4E] border border-[#E4E6E8] pl-[6px] pr-[18px]"
          >
            <div className="flex items-center">
              <img
                src={testimonials[0].img}
                alt=""
                className="testimonials-pill-avatar"
                style={{ zIndex: 3 }}
              />
              <img
                src={testimonials[1].img}
                alt=""
                className="testimonials-pill-avatar -ml-[12px]"
                style={{ zIndex: 2 }}
              />
              <img
                src={testimonials[2].img}
                alt=""
                className="testimonials-pill-avatar -ml-[12px]"
                style={{ zIndex: 1 }}
              />
            </div>

            <span className="text-[14px] font-semibold text-black leading-none">
              Testimonials
            </span>
          </div>

          <h2
            className="testimonials-heading mt-6 lg:mt-[72px] text-center uppercase"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "0px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            What Our Client Say
          </h2>

          <div className={`testimonial-stage mt-24 lg:mt-[140px] dir-${testimonialDir}`}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={24}
              speed={650}
              loop={testimonials.length > 1}
              autoHeight={true}
              className="testimonials-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-card">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="testimonials-avatar mx-auto h-[44px] w-[44px] lg:h-[48px] lg:w-[48px] rounded-full object-cover"
                    />

                    <div className="mt-3 lg:mt-4 text-[14px] lg:text-[15px] font-bold text-[#050889] text-center">
                      {t.name}
                    </div>

                    <div className="mt-1 text-[11px] text-[#ffc400] tracking-[0.18em] text-center">
                      {"★".repeat(t.stars)}
                    </div>

                    <p className="mt-4 lg:mt-5 text-[13px] lg:text-[15px] leading-[1.65] text-black/75 max-w-[640px] mx-auto text-center">
                      {t.text}
                    </p>

                    <p className="mt-2 lg:mt-3 text-[12px] lg:text-[14px] text-[#6B7280] text-center">
                      {t.designation}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            data-reveal="zoom"
            data-reveal-delay="360"
            className="testimonials-nav-wrap"
          >
            <div className="testimonials-nav-box">
              <button
                type="button"
                onClick={handleTestimonialPrev}
                className="testimonials-nav-hit testimonials-nav-hit-prev"
                aria-label="Previous testimonial"
              />

              <button
                type="button"
                onClick={handleTestimonialNext}
                className="testimonials-nav-hit testimonials-nav-hit-next"
                aria-label="Next testimonial"
              />

              <span
                className={`testimonials-glow testimonials-glow-prev ${
                  glowingSide === "prev" ? "is-active" : ""
                }`}
              />

              <span
                className={`testimonials-glow testimonials-glow-next ${
                  glowingSide === "next" ? "is-active" : ""
                }`}
              />

              <img
                src="/button.svg"
                alt=""
                className="testimonials-nav-svg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}