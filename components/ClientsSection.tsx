"use client";

import { useMemo, useRef, useState } from "react";
import { clientLogos } from "@/data/clientLogos";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ClientsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [glowingSide, setGlowingSide] = useState<"prev" | "next" | null>(null);

  /*
    Swiper loop needs enough slides.
    This safely duplicates logos only for slider stability.
  */
  const sliderLogos = useMemo(() => {
    if (clientLogos.length >= 12) return clientLogos;

    const repeated = [];
    const minSlides = 18;

    for (let i = 0; repeated.length < minSlides; i++) {
      repeated.push(...clientLogos);
    }

    return repeated;
  }, []);

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
        .clients-swiper {
          width: 100%;
          overflow: visible;
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
        }

        .clients-swiper:active {
          cursor: grabbing;
        }

        .clients-swiper .swiper-wrapper {
          align-items: center;
          transition-timing-function: ease-in-out !important;
        }

        .clients-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clients-glow {
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

        .clients-nav-hit-prev:hover ~ .clients-glow-prev {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .clients-nav-hit-next:hover ~ .clients-glow-next {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .clients-glow.is-active {
          animation: clientsGlowAnim 0.75s ease-out forwards;
        }

        @keyframes clientsGlowAnim {
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

        @media (max-width: 768px) {
          .clients-glow {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .clients-glow {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white pb-12 pt-16 lg:pb-20 lg:pt-24">
          <div
            data-reveal="up-sm"
            className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black"
          >
            Clients
          </div>

          <div
            data-reveal="fade"
            data-reveal-delay="100"
            className="gsap-marquee marquee-shell mt-3"
          >
            <div className="marquee-track">
              <span className="gsap-clip marquee-text">Powering Growth</span>
              <span className="marquee-text">Powering Growth</span>
              <span className="marquee-text">Powering Growth</span>
            </div>
          </div>

          <p
            data-reveal="up-sm"
            data-reveal-delay="200"
            className="gsap-words mt-3 text-[14px] text-black lg:mt-4 lg:text-[15px]"
          >
            Supporting public and private sector organizations through integrated
            workforce and digital transformation solutions.
          </p>

          <div
            data-reveal="fade"
            data-reveal-delay="300"
            className="relative mt-5 w-screen overflow-hidden py-6 pb-8 [margin-left:calc(50%-50vw)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_6%,black_94%,transparent_100%)] [mask-image:linear-gradient(90deg,transparent_0%,black_6%,black_94%,transparent_100%)] lg:mt-6 max-md:pb-3"
          >
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <Swiper
                modules={[Autoplay]}
                className="clients-swiper"
                loop={true}
                speed={650}
                slidesPerView={5}
                slidesPerGroup={1}
                spaceBetween={32}
                grabCursor={true}
                allowTouchMove={true}
                simulateTouch={true}
                touchStartPreventDefault={false}
                touchMoveStopPropagation={false}
                touchRatio={1}
                touchAngle={45}
                threshold={3}
                resistance={true}
                resistanceRatio={0.75}
                loopAdditionalSlides={10}
                loopPreventsSliding={false}
                observer={true}
                observeParents={true}
                updateOnWindowResize={true}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              onSwiper={(swiper) => {
  swiperRef.current = swiper;

  window.setTimeout(() => {
    swiper.update();
  }, 100);
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
                {sliderLogos.map((logo, index) => (
                  <SwiperSlide key={`${logo.name}-${index}`}>
                    <div className="mx-auto flex h-[clamp(80px,9vw,110px)] w-full max-w-[200px] select-none items-center justify-center rounded-[10px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,254,78,0.12)]">
                      <img
                        draggable={false}
                        src={logo.src}
                        alt={logo.name}
                        className="pointer-events-none h-auto max-h-[55%] w-auto max-w-[70%] select-none object-contain grayscale-[0.15] transition duration-300 ease-out [-webkit-user-drag:none] hover:grayscale-0"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div
            data-reveal="zoom"
            data-reveal-delay="400"
            className="mt-3 flex justify-center py-6"
          >
            <div className="relative inline-block h-[71px] w-[79px] leading-none max-md:h-[60px] max-md:w-[66px] max-[480px]:h-[52px] max-[480px]:w-[58px]">
              <button
                type="button"
                onClick={handlePrev}
                className="clients-nav-hit-prev absolute left-0 top-0 z-[3] h-full w-1/2 cursor-pointer border-0 bg-transparent p-0 text-[0px] text-transparent"
                aria-label="Previous"
              />

              <button
                type="button"
                onClick={handleNext}
                className="clients-nav-hit-next absolute right-0 top-0 z-[3] h-full w-1/2 cursor-pointer border-0 bg-transparent p-0 text-[0px] text-transparent"
                aria-label="Next"
              />

              <span
                className={`clients-glow clients-glow-prev left-[-10px] ${
                  glowingSide === "prev" ? "is-active" : ""
                }`}
              />

              <span
                className={`clients-glow clients-glow-next right-[-10px] ${
                  glowingSide === "next" ? "is-active" : ""
                }`}
              />

              <img
                src="/button.svg"
                alt=""
                className="pointer-events-none relative z-[2] block h-[60px] w-[60px] select-none [-webkit-user-drag:none] max-md:h-[60px] max-md:w-[66px] max-[480px]:h-[52px] max-[480px]:w-[58px]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}