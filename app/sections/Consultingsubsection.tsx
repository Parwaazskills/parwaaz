// app/sections/OurMissionSection.tsx

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Consultingsubsection() {
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
            The "local intelligence, global standard" position
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
       Deloitte and PwC are the gold standard for management consulting globally. At this stage, Parwaaz does not compete with them on depth of specialisation or brand recognition in mature markets. Our competitive position is different and deliberately so: we are the firm that brings international consulting rigour to Pakistan and GCC markets, with the local relationships, language fluency, regulatory knowledge, and execution infrastructure that global firms simply cannot deliver from Riyadh or Dubai.
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
            Research as a commercial asset
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Our WEF partnership makes Parwaaz's research output uniquely credible. An annual "Future of Work Pakistan" report published under WEF co-branding carries the kind of institutional weight that attracts government engagement, donor funding, and multinational attention. This research function is not just an advisory service — it is a business development engine that elevates every other service line.
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
            How we approach public sector differently
          </h2>
        </div>

        <div className="ml-[33px] mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:ml-0 max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Government advisory requires a fundamentally different approach than corporate consulting. Decision timelines are longer, stakeholder complexity is higher, and implementation success depends on factors that no PowerPoint deck can address. Parwaaz has the relationships, patience, and local knowledge to navigate this environment — and the WEF mandate adds the international credibility that public sector clients need to justify strategic partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}