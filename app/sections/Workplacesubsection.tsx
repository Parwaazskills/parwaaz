
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Workplacesubsection() {
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
            Why workspace is a strategic differentiator
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
No firm in Parwaaz's benchmark set — not Deloitte, PwC, ManpowerGroup, or Korn Ferry — offers physical workspace and infrastructure services alongside talent and skills. This makes Parwaaz uniquely positioned as a single accountable partner for international companies entering Pakistan: we find the people, train them, deploy them, and build the workspace they operate from. No competitor can offer that.
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
The international company entry use case
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
When a multinational decides to establish operations in Pakistan, the first practical questions are physical: where will the office be? How will it be set up? Where will expatriate staff live? Parwaaz handles all of this — from office sourcing and fit-out to staff accommodation and workspace technology integration — allowing leadership to focus on the business, not the logistics.
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
         Design Synergies: the architecture partnership
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
Parwaaz's architecture and construction services are delivered in partnership with Design Synergies, a specialist practice with expertise in BIM, commercial design, and construction management. This partnership extends Parwaaz's capability from space sourcing into full design and build — covering everything from interior design and 3D visualisation to BIM coordination and site management.
          </p>
        </div>
      </div>
    </section>
  );
}