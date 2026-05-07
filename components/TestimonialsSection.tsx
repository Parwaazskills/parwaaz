"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialDir, setTestimonialDir] = useState<"next" | "prev">("next");

  const handleTestimonialPrev = () => {
    setTestimonialDir("prev");
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleTestimonialNext = () => {
    setTestimonialDir("next");
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
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
          border: 2px solid #00FE4E;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }
        .testimonials-heading {
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 1024px) { .testimonials-section { padding: 56px 0 64px; } }
        @media (max-width: 768px) { .testimonials-section { padding: 0 0 52px; } }
        @media (max-width: 480px) { .testimonials-section { padding: 36px 0 44px; } }

        .testimonial-stage {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 30px auto;
          min-height: 240px;
        }
        @media (max-width: 768px) { .testimonial-stage { min-height: 200px; } }
        @media (max-width: 480px) { .testimonial-stage { min-height: 220px; } }

        .testimonial-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          opacity: 0;
          pointer-events: none;
          transform: translateY(40px) scale(0.96);
          transition:
            opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        .testimonial-slide.is-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
          transition-delay: 0.1s;
        }
        .testimonial-slide.dir-prev:not(.is-active) {
          transform: translateY(-40px) scale(0.96);
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-slide,
          .testimonial-slide.is-active {
            transition: opacity 0.2s ease;
            transform: none;
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
        .testimonials-blink-left { left: -60px; transform: translateY(-50%); }
        .testimonials-blink-right {
          right: -60px;
          transform: translateY(-50%) scaleX(-1);
          animation-delay: 1.6s;
        }
        @keyframes blinkTwinkle {
          0%, 100% { opacity: 0.55; filter: brightness(1); }
          25% { opacity: 0.9; filter: brightness(1.15) drop-shadow(0 0 6px rgba(0,254,78,0.25)); }
          50% { opacity: 0.7; filter: brightness(1.05) drop-shadow(0 0 4px rgba(0,254,78,0.15)); }
          75% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0 8px rgba(0,254,78,0.3)); }
        }
        .testimonials-avatar {
          object-position: center 75%;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1), 0 0 0 3px rgba(0,254,78,0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonials-avatar:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.14), 0 0 0 5px rgba(0,254,78,0.18);
        }
        .testimonials-nav-wrap { display: flex; justify-content: center; margin-top: 24px; }
        .testimonials-nav-btn {
          width: 84px;
          height: 60px;
          background: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .testimonials-nav-arrow {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: rgba(0, 0, 0, 0.45);
          transition: color 0.3s ease, transform 0.25s ease, filter 0.3s ease;
        }
        .testimonials-nav-arrow svg { width: 22px; height: 22px; }
        .testimonials-nav-arrow-prev:hover {
          color: #00fe4e;
          transform: translateX(-3px);
          filter: drop-shadow(0 0 8px rgba(0, 254, 78, 0.55));
        }
        .testimonials-nav-arrow-next:hover {
          color: #00fe4e;
          transform: translateX(3px);
          filter: drop-shadow(0 0 8px rgba(0, 254, 78, 0.55));
        }
        .testimonials-nav-arrow:active { transform: scale(0.92); }
        @media (max-width: 768px) {
          .testimonials-blink { width: 180px; }
          .testimonials-blink-left { left: -80px; }
          .testimonials-blink-right { right: -80px; }
        }
        @media (max-width: 480px) {
          .testimonials-blink { width: 130px; }
          .testimonials-blink-left { left: -90px; }
          .testimonials-blink-right { right: -90px; }
          .testimonials-nav-btn { width: 76px; height: 56px; }
        }
      `}</style>

      <section className="testimonials-section relative overflow-hidden bg-white">
        <img src="/blink.svg" alt="" className="testimonials-blink testimonials-blink-left" />
        <img src="/blink.svg" alt="" className="testimonials-blink testimonials-blink-right" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            data-reveal="zoom"
            className="testimonials-pill mx-auto flex h-[48px] w-[173px] items-center gap-[8px] rounded-[50px] bg-[#00FE4E] border border-[#E4E6E8] pl-[6px] pr-[18px]"
          >
            <div className="flex items-center">
              <img src={testimonials[0].img} alt="" className="testimonials-pill-avatar" style={{ zIndex: 3 }} />
              <img src={testimonials[1].img} alt="" className="testimonials-pill-avatar -ml-[12px]" style={{ zIndex: 2 }} />
              <img src={testimonials[2].img} alt="" className="testimonials-pill-avatar -ml-[12px]" style={{ zIndex: 1 }} />
            </div>
            <span className="text-[14px] font-semibold text-black leading-none">Testimonials</span>
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
          <div className="testimonial-stage mt-24 lg:mt-[140px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide ${i === testimonialIndex ? "is-active" : ""} dir-${testimonialDir}`}
                aria-hidden={i !== testimonialIndex}
              >
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
              </div>
            ))}
          </div>
          <div data-reveal="zoom" data-reveal-delay="360" className="testimonials-nav-wrap">
            <div className="testimonials-nav-btn">
              <button
                onClick={handleTestimonialPrev}
                className="testimonials-nav-arrow testimonials-nav-arrow-prev"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleTestimonialNext}
                className="testimonials-nav-arrow testimonials-nav-arrow-next"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}