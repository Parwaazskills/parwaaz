// app/sections/OurMissionSection.tsx

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Aitechsubsection() {
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
        <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
          The AI navigator thesis
        </h2>

        <div className="mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Parwaaz does not sell AI products. We act as the independent
            navigator and integrator — helping organisations understand the
            landscape, choose the right infrastructure partners, and deploy AI
            that actually delivers business outcomes. This is how BCG X and
            Deloitte approach AI advisory at a global level. We bring that
            rigour to Pakistan and GCC markets, with local execution capability
            no global firm can match.
          </p>
        </div>
      </div>

      <div className="mission-block mx-auto mt-[18px] w-full max-w-[1400px] will-change-transform">
        <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
          Why international AI partners need Parwaaz
        </h2>

        <div className="mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Global AI platforms — G42, Microsoft Azure AI, Google Vertex, AWS
            Bedrock — need trusted local partners to reach enterprise and
            government clients in South Asia. Parwaaz occupies that integrator
            role: qualified to evaluate, scope, and implement these platforms,
            while managing the local relationships, compliance requirements,
            and change management that international vendors cannot handle
            remotely.
          </p>
        </div>
      </div>

      <div className="mission-block mx-auto mt-[18px] w-full max-w-[1400px] will-change-transform">
        <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#000572] max-[480px]:text-[22px]">
          What makes this different from IT consulting
        </h2>

        <div className="mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
            Traditional IT consultants sell implementation hours. Parwaaz starts
            upstream — with strategy and readiness — ensuring clients invest in
            the right AI capability for their specific context, not just what
            vendors are pushing. Our AI governance and ethics practice, aligned
            to WEF principles, ensures deployments are responsible and auditable
            from day one.
          </p>
        </div>
      </div>
    </section>
  );
}