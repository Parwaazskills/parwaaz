// app/sections/WhoWeAreSection.tsx

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardsBlockRef = useRef<HTMLDivElement | null>(null);
  const orbitSpinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

  const paragraphText =
    "Parwaaz is a next-generation human capital and technology ecosystem — operating across Pakistan and the GCC where ambition is highest and the stakes are real. We integrate AI, workforce development, talent mobility, strategic advisory, and infrastructure as one connected force — not fragmented vendors, but a single partner accountable for the full picture. Where global firms bring the standard but lack the depth, and local firms bring the familiarity but lack the rigour, Parwaaz brings both.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const cardsBlock = cardsBlockRef.current;
    const orbitSpin = orbitSpinRef.current;

    if (!section || !cardsBlock) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
      const icons = iconRefs.current.filter(Boolean) as HTMLImageElement[];

      if (heading) {
        gsap.set(heading, {
          opacity: 0,
          y: 28,
          filter: "blur(7px)",
          backgroundPosition: "0% center",
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "top 46%",
              scrub: 0.45,
              invalidateOnRefresh: true,
              onLeave: () => {
                gsap.set(heading, {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  backgroundPosition: "100% center",
                });
              },
            },
          })
          .to(heading, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            backgroundPosition: "100% center",
            ease: "none",
            duration: 0.55,
          });
      }

      if (cards.length) {
        gsap.set(cards, {
          opacity: 0,
          y: 42,
          scale: 0.96,
          filter: "blur(8px)",
        });
      }

      if (images.length) {
        gsap.set(images, {
          opacity: 0,
          y: 42,
          scale: 0.95,
          filter: "blur(8px)",
          clipPath: "inset(10% 10% 10% 10% round 19px)",
        });
      }

      if (icons.length) {
        gsap.set(icons, {
          opacity: 0,
          scale: 0.72,
          rotate: -8,
          filter: "blur(6px)",
        });
      }

      if (orbitSpin) {
        gsap.set(orbitSpin, {
          rotate: -18,
          transformOrigin: "50% 50%",
        });

        gsap.to(orbitSpin, {
          rotate: 145,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.35,
            invalidateOnRefresh: true,
          },
        });
      }

      const forceCardsComplete = () => {
        const completeTargets = [
          cardRefs.current[0],
          cardRefs.current[1],
          imageRefs.current[0],
          imageRefs.current[1],
          iconRefs.current[0],
          iconRefs.current[1],
        ].filter(Boolean);

        if (completeTargets.length) {
          gsap.set(completeTargets, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          });
        }

        const completeImages = [
          imageRefs.current[0],
          imageRefs.current[1],
        ].filter(Boolean);

        if (completeImages.length) {
          gsap.set(completeImages, {
            clipPath: "inset(0% 0% 0% 0% round 19px)",
          });
        }
      };

      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardsBlock,
          start: "top 88%",
          end: "top 55%",
          scrub: 0.7,
          invalidateOnRefresh: true,
          onLeave: forceCardsComplete,
        },
      });

      cardsTimeline
        .to(cardRefs.current[0] ?? [], {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          duration: 0.45,
        })
        .to(
          imageRefs.current[0] ?? [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0% 0% 0% 0% round 19px)",
            ease: "none",
            duration: 0.45,
          },
          "-=0.35"
        )
        .to(
          iconRefs.current[0] ?? [],
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.25,
          },
          "-=0.3"
        )
        .to(
          imageRefs.current[1] ?? [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0% 0% 0% 0% round 19px)",
            ease: "none",
            duration: 0.45,
          },
          "-=0.05"
        )
        .to(
          cardRefs.current[1] ?? [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.45,
          },
          "-=0.35"
        )
        .to(
          iconRefs.current[1] ?? [],
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.25,
          },
          "-=0.3"
        );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${montserrat.className} relative isolate w-full overflow-hidden bg-white pb-[60px] pt-[92px] max-[1024px]:pt-[78px] max-[768px]:pb-[70px] max-[768px]:pt-[64px]`}
    >
      {/* Right side circle lines image */}
      <div className="pointer-events-none absolute right-[-20px] top-[170px] z-[1] h-[720px] w-[560px] overflow-hidden max-[1024px]:top-[210px] max-[1024px]:h-[620px] max-[1024px]:w-[500px] max-[768px]:hidden">
        <div
          ref={orbitSpinRef}
          className="relative h-full w-full will-change-transform"
        >
          <Image
            src="/orbit.svg"
            alt="Decorative circle lines"
            fill
            priority
            className="translate-x-[84px] translate-y-[-45px] scale-[1.12] object-contain object-right"
          />
        </div>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[1200px] text-center">
          <h2
            ref={headingRef}
            className="bg-[linear-gradient(90deg,#00df49_0%,#00c85a_28%,#00766c_50%,#071663_76%,#040c54_100%)] bg-[length:160%_100%] bg-clip-text text-center text-[56px] font-normal uppercase leading-[1] tracking-[9px] text-transparent max-[900px]:text-[42px] max-[900px]:tracking-[5px] max-[480px]:text-[34px] max-[480px]:tracking-[3px]"
            style={{
              fontFamily: "inherit",
            }}
          >
            WHO WE ARE
          </h2>

          <p className="mx-auto mt-[15px] max-w-[1200px] text-[16px] font-regular leading-[1.22] tracking-[0.2px] text-[#000000] max-[768px]:text-[16px] max-[480px]:text-[14px] max-[480px]:leading-[1.45]">
            {paragraphText}
          </p>
        </div>

        <div ref={cardsBlockRef}>
          {/* Top Row */}
          <div className="mt-[50px] grid grid-cols-[1.42fr_0.98fr] items-stretch gap-[16px] max-[768px]:mt-[55px] max-[768px]:grid-cols-1">
            {/* Mission Card */}
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              className="relative h-[232px] overflow-hidden rounded-[19px] bg-[#030887] px-[38px] pb-[34px] pt-[80px] max-[480px]:h-auto max-[480px]:min-h-[260px] max-[480px]:px-[24px] max-[480px]:pt-[86px]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[19px] border-l border-t border-[#00fe4e]/90" />

              <Image
                ref={(el) => {
                  iconRefs.current[0] = el;
                }}
                src="/ourmissionicon.png"
                alt="Mission icon"
                width={88}
                height={88}
                className="absolute right-[38px] top-[30px] h-[88px] w-[88px] object-contain max-[480px]:right-[22px] max-[480px]:top-[22px] max-[480px]:h-[62px] max-[480px]:w-[62px]"
              />

              <h3 className="text-[31px] font-bold leading-none tracking-[0.5px] text-[#00fe4e] max-[480px]:text-[26px]">
                OUR MISSION
              </h3>

              <p className="mt-[16px] max-w-[600px] text-[14px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
                To close the gap between where human potential exists and where
                the world needs it — building the infrastructure that transforms
                talent into opportunity, organisations into leaders, and
                economies into forces of global impact.
              </p>
            </div>

            {/* Top Image Card */}
            <div
              ref={(el) => {
                imageRefs.current[0] = el;
              }}
              className="relative h-[232px] overflow-hidden rounded-[19px]"
            >
              <Image
                src="/ourmission.png"
                alt="Who we are visual"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-[100px] grid grid-cols-[0.98fr_1.42fr] items-stretch gap-[16px] max-[768px]:mt-[28px] max-[768px]:grid-cols-1">
            {/* Bottom Image Card */}
            <div
              ref={(el) => {
                imageRefs.current[1] = el;
              }}
              className="relative h-[234px] overflow-hidden rounded-[19px] max-[768px]:order-2"
            >
              <Image
                src="/whatsetsusapart.png"
                alt="Technology visual"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* What Sets Us Apart Card */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className="relative h-[234px] overflow-hidden rounded-[19px] bg-[#030887] px-[38px] pb-[34px] pt-[88px] max-[768px]:order-1 max-[480px]:h-auto max-[480px]:min-h-[265px] max-[480px]:px-[24px] max-[480px]:pt-[92px]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[19px] border-l border-t border-[#00fe4e]/90" />

              <Image
                ref={(el) => {
                  iconRefs.current[1] = el;
                }}
                src="/whatsetsusicon.png"
                alt="Sets apart icon"
                width={92}
                height={92}
                className="absolute right-[38px] top-[25px] h-[92px] w-[92px] object-contain max-[480px]:right-[22px] max-[480px]:top-[22px] max-[480px]:h-[66px] max-[480px]:w-[66px]"
              />

              <h3 className="text-[31px] font-bold uppercase leading-none tracking-[0.5px] text-[#00fe4e] max-[480px]:text-[25px]">
                WHAT SETS US APART
              </h3>

              <p className="mt-[16px] max-w-[600px] text-[14px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
                We are the only partner in this market that connects enterprise
                AI, reskilling, cross-border talent mobility, WEF-backed
                advisory, and physical infrastructure under one roof — each
                capability designed to amplify the others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
