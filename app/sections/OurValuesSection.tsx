// app/sections/OurValuesSection.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
  {
    title: "CLIENT-CENTRIC APPROACH:",
    text: "Your goals are our priority, and we tailor our solutions to fit your unique needs.",
  },
  {
    title: "INNOVATION",
    text: "We bring fresh ideas, modern strategies, and forward-thinking solutions to help your business grow with confidence.",
  },
  {
    title: "INTEGRITY",
    text: "We build trust through transparency, accountability, and honest communication at every step.",
  },
];

function SplitLetters({
  text,
  type = "normal",
}: {
  text: string;
  type?: "normal" | "gradient";
}) {
  return (
    <span aria-label={text}>
      {text.split("").map((char, index) => {
        if (char === " ") {
          return (
            <span
              key={`space-${index}`}
              className="inline-block"
              aria-hidden="true"
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={`${char}-${index}`}
            className={`our-values-heading-char inline-block will-change-transform ${
              type === "gradient"
                ? "our-values-gradient-char bg-[linear-gradient(90deg,#008d5f,#006575,#071a76,#008d5f)] bg-[length:220%_100%] bg-clip-text text-transparent"
                : "text-[#00fe4e]"
            }`}
            aria-hidden="true"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default function OurValuesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const scrollTextRef = useRef<HTMLDivElement | null>(null);
  const accordionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const scrollText = scrollTextRef.current;

    if (!section || !image) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const headingChars = gsap.utils.toArray<HTMLElement>(
        ".our-values-heading-char"
      );
      const gradientChars = gsap.utils.toArray<HTMLElement>(
        ".our-values-gradient-char"
      );

      gsap.set(image, {
        opacity: 0,
        x: -34,
        y: 18,
        scale: 0.96,
        filter: "blur(8px)",
        clipPath: "inset(8% 8% 8% 8% round 11px)",
      });

      gsap.set(headingChars, {
        opacity: 0,
        y: (index) => (index % 2 === 0 ? 28 : -22),
        x: (index) => (index % 2 === 0 ? -8 : 8),
        rotateZ: (index) => (index % 2 === 0 ? -5 : 5),
        scale: 0.92,
        filter: "blur(7px)",
        transformOrigin: "50% 50%",
      });

      gsap.set(gradientChars, {
        backgroundPosition: "0% center",
      });

      gsap.set(accordionRefs.current, {
        opacity: 0,
        y: 18,
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
        gsap.set(image, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0% round 11px)",
        });

        gsap.set(headingChars, {
          opacity: 1,
          y: 0,
          x: 0,
          rotateZ: 0,
          scale: 1,
          filter: "blur(0px)",
        });

        gsap.set(accordionRefs.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });

        gsap.set(gradientChars, {
          backgroundPosition: "220% center",
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
        .to(image, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0% round 11px)",
          ease: "none",
          duration: 0.55,
        })
        .to(
          headingChars,
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotateZ: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: {
              amount: 0.18,
              from: "start",
            },
            duration: 0.45,
          },
          "-=0.42"
        )
        .to(
          gradientChars,
          {
            backgroundPosition: "220% center",
            ease: "none",
            stagger: {
              amount: 0.1,
              from: "start",
            },
            duration: 0.35,
          },
          "-=0.42"
        )
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
          start: "top 82%",
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
      className="relative w-full overflow-hidden bg-white pb-[70px] pt-[78px] max-[900px]:pb-[64px] max-[900px]:pt-[64px] max-[480px]:pb-[56px] max-[480px]:pt-[54px]"
    >
      {/* Top right decorative lines image */}
      <div className="pointer-events-none absolute right-[-18px] top-[-182px] z-0 h-[286px] w-[455px] max-[768px]:hidden">
        {/* <Image
          src="/orbit.svg"
          alt="Decorative circle lines"
          fill
          priority
          className="object-contain object-right-top"
        /> */}
      </div>

      {/* Scroll To Top text/line */}
      {/* <div
        ref={scrollTextRef}
        className="pointer-events-none absolute right-[33px] top-[31px] z-[1] flex flex-col items-center max-[768px]:hidden"
      >
        <span className="origin-center rotate-[-90deg] whitespace-nowrap text-[12px] font-medium text-black">
          Scroll To Top
        </span>
        <div className="mt-[56px] h-[112px] w-px bg-[#00fe4e]" />
      </div> */}

      <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] grid-cols-[1.08fr_0.98fr] items-start gap-[43px] px-4 max-[1200px]:gap-[34px] max-[900px]:grid-cols-1 max-[900px]:gap-[34px] max-[480px]:gap-[28px]">
        {/* Left Image */}
        <div
          ref={imageRef}
          className="relative h-[400px] w-full overflow-hidden rounded-[11px] max-[900px]:h-[340px] max-[480px]:h-[260px]"
        >
          <Image
            src="/ourval.png"
            alt="Our values"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="pt-[15px] max-[900px]:pt-0">
          <h2 className="overflow-visible text-[36px] font-regular uppercase leading-[1.12] tracking-[1px] max-[480px]:text-[29px]">
            <SplitLetters text="OUR" type="normal" />{" "}
            <SplitLetters text="VALUES" type="gradient" />
          </h2>

          <div className="mt-[32px] flex flex-col gap-[22px] max-[480px]:mt-[26px] max-[480px]:gap-[16px]">
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
                  className={`w-full rounded-[7px] bg-[#030887] px-[30px] text-left transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_25px_rgba(3,8,135,0.18)] max-[480px]:px-[20px] ${
                    isOpen
                      ? "min-h-[92px] pb-[18px] pt-[26px]"
                      : "h-[60px] py-0"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <h3 className="text-[15px] font-bold uppercase leading-[1.12] tracking-[0.4px] text-[#00fe4e] max-[480px]:text-[13px]">
                      {item.title}
                    </h3>

                    {isOpen ? (
                      <ChevronUp className="h-[16px] w-[16px] shrink-0 text-[#00fe4e]" />
                    ) : (
                      <ChevronDown className="h-[16px] w-[16px] shrink-0 text-[#00fe4e]" />
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
                      <p className="mt-[12px] text-[11.5px] font-light leading-[1.45] tracking-[0.1px] text-white/95 max-[480px]:text-[11px]">
                        <span className="mr-[6px] text-[#00fe4e]">•</span>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}