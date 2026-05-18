// app/sections/OurValuesSection.tsx

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
  {
    title: "EXCELLENCE WITHOUT EXCEPTION",
    text: "Every engagement, every deliverable, every outcome — held to a global benchmark, without compromise.",
    icon: "/ourvalExcellence.png",
    iconAlt: "Excellence icon",
  },
  {
    title: "RADICAL ACCOUNTABILITY",
    text: "We commit fully, deliver completely, and own the outcome — no caveats, no exceptions.",
    icon: "/ourvalaccountability.png",
    iconAlt: "Accountability icon",
  },
  {
    title: "INTEGRATED THINKING",
    text: "We connect capabilities, not just services — because lasting transformation is always the result of a system, never a single solution.",
    icon: "/ourvalIntegratedthinking.png",
    iconAlt: "Integrated thinking icon",
  },
  {
    title: "THE COURAGE TO LEAD",
    text: "We do not follow where the market goes. We move first — and bring our clients with us.",
    icon: "/ourvalcouragetolead.png",
    iconAlt: "Courage icon",
  },
  {
    title: "HUMAN AT THE CENTRE",
    text: "Every placement, every programme, every strategy exists for one reason: to change the trajectory of a human life.",
    icon: "/ourvalHumancenter.png",
    iconAlt: "Human icon",
  },
];

export default function OurValuesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const scrollTextRef = useRef<HTMLDivElement | null>(null);
  const accordionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const scrollText = scrollTextRef.current;

    if (!section || !heading) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(heading, {
        opacity: 0,
        y: 28,
        filter: "blur(7px)",
        backgroundPosition: "0% center",
      });

      gsap.set(accordionRefs.current, {
        opacity: 0,
        y: 20,
        scale: 0.985,
        filter: "blur(5px)",
      });

      if (scrollText) {
        gsap.set(scrollText, {
          opacity: 0,
          y: -12,
        });
      }

      const forceComplete = () => {
        gsap.set(heading, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          backgroundPosition: "100% center",
        });

        gsap.set(accordionRefs.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });

        if (scrollText) {
          gsap.set(scrollText, {
            opacity: 1,
            y: 0,
          });
        }
      };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 46%",
            scrub: 0.45,
            invalidateOnRefresh: true,
            onLeave: forceComplete,
          },
        })
        .to(heading, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          backgroundPosition: "100% center",
          ease: "none",
          duration: 0.55,
        })
        .to(
          scrollText,
          {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 0.25,
          },
          "-=0.35"
        );

      gsap.to(accordionRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 0.55,
        stagger: {
          each: 0.08,
          from: "start",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white pb-[76px] pt-[29px] max-[900px]:pb-[62px] max-[900px]:pt-[58px]"
    >
      <div className="pointer-events-none absolute right-[-95px] top-[-156px] z-0 h-[250px] w-[520px] overflow-hidden max-[768px]:hidden">
        <div className="absolute right-[-18px] top-[-160px] h-[300px] w-[560px] rounded-[50%] border border-black/25" />
        <div className="absolute right-[-3px] top-[-124px] h-[260px] w-[510px] rounded-[50%] border border-black/20" />
        <div className="absolute right-[10px] top-[-91px] h-[220px] w-[455px] rounded-[50%] border border-black/15" />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1012px] px-4">
        <h2
          ref={headingRef}
          className="bg-[linear-gradient(90deg,#00df49_0%,#00c85a_28%,#00766c_50%,#071663_76%,#040c54_100%)] bg-[length:160%_100%] bg-clip-text text-center text-[56px] font-normal uppercase leading-[1] tracking-[9px] text-transparent max-[900px]:text-[42px] max-[900px]:tracking-[5px] max-[480px]:text-[34px] max-[480px]:tracking-[3px]"
        >
          OUR VALUES
        </h2>

        <div className="mt-[50px] grid grid-cols-2 gap-x-[58px] gap-y-[10px] max-[900px]:mt-[38px] max-[900px]:grid-cols-1 max-[900px]:gap-[14px]">
          {values.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.title}
                ref={(el) => {
                  accordionRefs.current[index] = el;
                }}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`group w-full cursor-pointer rounded-[7px] bg-[#04037f] text-left transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_25px_rgba(4,3,127,0.18)] ${
                  isOpen ? "min-h-[109px]" : "h-[77px]"
                }`}
              >
                <div
                  className={`flex h-full w-full items-center gap-[22px] px-[33px] transition-all duration-300 max-[480px]:gap-[16px] max-[480px]:px-[22px] ${
                    isOpen ? "py-[22px]" : "py-0"
                  }`}
                >
<div className="relative flex h-[58px] w-[50px] shrink-0 items-center justify-center overflow-hidden max-[480px]:h-[48px] max-[480px]:w-[42px]">
                      <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex w-full items-center justify-between gap-4">
                      <h3 className="text-[14px] font-semibold uppercase leading-[1.15] tracking-[1.45px] text-[#00fe4e] max-[480px]:text-[11.5px] max-[480px]:tracking-[1px]">
                        {item.title}
                      </h3>

                      {isOpen ? (
                        <ChevronUp className="h-[13px] w-[13px] shrink-0 text-[#00fe4e]" />
                      ) : (
                        <ChevronDown className="h-[13px] w-[13px] shrink-0 text-[#00fe4e]" />
                      )}
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-[10px] max-w-[338px] text-[14px] font-light leading-[1.45] tracking-[0.25px] text-white/80 max-[480px]:text-[11px]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}