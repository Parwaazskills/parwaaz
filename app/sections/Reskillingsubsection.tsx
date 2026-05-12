// app/sections/OurMissionSection.tsx

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ReskillingSubsection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".mission-block", {
        opacity: 0,
        y: 42,
        filter: "blur(14px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".mission-block h2", {
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".mission-block p", {
        opacity: 0,
        y: 22,
        filter: "blur(10px)",
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.16,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 py-[96px] max-[768px]:py-[70px] max-[480px]:py-[56px]"
    >
      <div className="mission-block mx-auto w-full max-w-[1400px] will-change-transform">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#000572]">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                d="M1 4.1L4.05 7L10 1"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
            The exclusive partnerships no competitor holds
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Parwaaz is the exclusive B2B Coursera partner in Pakistan — the only organisation that can deploy Coursera's enterprise LMS, negotiate B2B licensing, and integrate Coursera into existing HR technology stacks for Pakistani organisations. We are also the exclusive Gnowbe partner in Pakistan, providing mobile-first microlearning from top Singapore universities. Combined with our WEF mandate, these three exclusivities create a skills delivery infrastructure no competitor can replicate.
          </p>
        </div>
      </div>

      <div className="mission-block mx-auto mt-[18px] w-full max-w-[1400px] will-change-transform">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#000572]">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                d="M1 4.1L4.05 7L10 1"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
            Why skills management is a strategic investment
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Korn Ferry estimates the global talent shortage will reach 85 million workers by 2030. In Pakistan, the gap between employer demand and workforce capability is already acute in AI, data, digital operations, and technical functions. Organisations that invest in structured reskilling now will have a decisive talent advantage within 24 months. Parwaaz makes that investment measurable, managed, and aligned to international standards.
          </p>
        </div>
      </div>

      <div className="mission-block mx-auto mt-[18px] w-full max-w-[1400px] will-change-transform">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#000572]">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                d="M1 4.1L4.05 7L10 1"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
            From course catalogue to skills architecture
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
           Most learning vendors sell access to content. Parwaaz builds skills architecture — a system that starts with diagnosing capability gaps, designs learning interventions mapped to specific job outcomes, deploys them through the right platforms, and measures whether skills actually changed. This is how Deloitte and PwC sell learning advisory at a global level. We bring that methodology to Pakistan with local employer intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}