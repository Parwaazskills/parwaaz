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
  const cardsBlockRef = useRef<HTMLDivElement | null>(null);
  const orbitSpinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

  const paragraphText =
    "At Parwaaz, we are dedicated to driving growth and transformation for businesses in Pakistan, the Middle East, Saudi Arabia and beyond. With specialised expertise in international placements, payroll outsourcing, facilities management, ed-tech, content development, technology management, and design solutions, we bridge the gap between ambition and achievement.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cardsBlock = cardsBlockRef.current;
    const orbitSpin = orbitSpinRef.current;

    if (!section || !cardsBlock) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current, {
        opacity: 0,
        y: 42,
        scale: 0.96,
        filter: "blur(8px)",
      });

      gsap.set(imageRefs.current, {
        opacity: 0,
        y: 42,
        scale: 0.95,
        filter: "blur(8px)",
        clipPath: "inset(10% 10% 10% 10% round 19px)",
      });

      gsap.set(iconRefs.current, {
        opacity: 0,
        scale: 0.72,
        rotate: -8,
        filter: "blur(6px)",
      });

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
        gsap.set(
          [
            cardRefs.current[0],
            cardRefs.current[1],
            imageRefs.current[0],
            imageRefs.current[1],
            iconRefs.current[0],
            iconRefs.current[1],
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          }
        );

        gsap.set([imageRefs.current[0], imageRefs.current[1]], {
          clipPath: "inset(0% 0% 0% 0% round 19px)",
        });
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
        .to(cardRefs.current[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          duration: 0.45,
        })
        .to(
          imageRefs.current[0],
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
          iconRefs.current[0],
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
          imageRefs.current[1],
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
          cardRefs.current[1],
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
          iconRefs.current[1],
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
            className="object-contain object-right scale-[1.12] translate-x-[84px] translate-y-[-45px]"
          />
        </div>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="overflow-visible text-[58px] font-light uppercase leading-[1.18] tracking-[5px] max-[768px]:text-[42px] max-[768px]:tracking-[3px] max-[480px]:text-[34px] max-[480px]:tracking-[2px]">
            <span className="text-[#00fe4e]">WHO</span>{" "}
            <span className="bg-[linear-gradient(90deg,#00fe4e_0%,#00d657_18%,#02875d_42%,#00616f_68%,#07136f_100%)] bg-clip-text text-transparent">
              WE ARE
            </span>
          </h2>

          <p className="mx-auto mt-[15px] max-w-[1200px] text-[21px] font-light leading-[1.22] tracking-[0.2px] text-[#878787] max-[768px]:text-[16px] max-[480px]:text-[14px] max-[480px]:leading-[1.45]">
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

              <p className="mt-[16px] max-w-[575px] text-[11.4px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
                Our mission is to empower companies with the tools, talent, and
                creative strategies needed to stay competitive in an
                ever-evolving market. Whether it&apos;s sourcing top talent,
                enhancing employee learning, managing employee payrolls or
                delivering cutting-edge design services, we are committed to
                delivering results that make an impact.
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

              <p className="mt-[16px] max-w-[590px] text-[11.4px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
                Our strength lies in our unique ability to blend global
                perspectives with local expertise. With a deep understanding of
                the South Asian and EMEA region&apos;s business landscape, we
                offer solutions that are not only innovative but also culturally
                aligned and strategically sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}