"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Talentsubsection() {
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
            The Pakistan–GCC talent corridor
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Pakistan has one of the world's largest overseas worker populations — concentrated in the GCC, UK, and East Asia. This is not just a labour migration story; it is a structured talent market with enormous data, service, and commercial potential. Parwaaz owns the local intelligence, employer relationships, and compliance infrastructure to serve both sides of this corridor at scale.
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
            What ManpowerGroup cannot do
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            ManpowerGroup is the global benchmark in workforce solutions, but it operates at a transactional layer — volume recruitment and payroll processing. Parwaaz adds the intelligence and integration layer: talent analytics, workforce planning advisory, learning integration for deployed workers, and the physical settling-in support that makes international deployment actually work for both employer and employee.
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
           The full lifecycle difference
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
           Most recruitment firms end their engagement when a candidate accepts an offer. Parwaaz's model follows the worker through the full deployment lifecycle — visa processing, accommodation setup, payroll management, welfare monitoring, and ongoing capability development through our learning partnerships. This lifecycle model creates deeper client relationships and significantly better retention outcomes for deployed workforces.
          </p>
        </div>
      </div>
    </section>
  );
}