"use client";

// app/sections/CourseProgramDetailsSection.tsx

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "./Form";

const programTabs = [
  {
    name: "COURSERA",
    description:
      "As Coursera’s Exclusive Partner In Pakistan For Business-To-Business Licensing, Parwaaz Provides Unparalleled Access To Coursera’s Learning Management System (LMS). We Collaborate With You To Build Customized Programs And Learning Pathways Tailored To Meet Your Specific Needs, Ensuring Your Workforce Is Ready For Tomorrow’s Challenges. Additionally, We Can Integrate Coursera With Existing LMS Platforms Being Run In Your Organization, Enhancing The Learning Experience And Streamlining Content Delivery.",
    bullets: [
      "60+ million registered learners",
      "40,000 skills taught & learned",
      "200 industry & university partners",
      "2,400 institutions transform skills with the Coursera Platform",
    ],
  },
  {
    name: "EDX",
    description:
      "Parwaaz helps organizations access globally recognized digital learning content through scalable learning partnerships. These programs support professional development, leadership growth, and future-ready workforce transformation.",
    bullets: [
      "Access to globally recognized learning content",
      "Flexible online learning paths for professionals",
      "Programs aligned with business and leadership growth",
      "Scalable solutions for teams and enterprise learning",
    ],
  },
  {
    name: "LINKEDIN LEARNING",
    description:
      "Parwaaz supports organizations with curated learning pathways that improve workplace capabilities, leadership confidence, and practical business skills. These solutions help teams learn continuously while staying aligned with real business goals.",
    bullets: [
      "Professional skill-building for modern teams",
      "Curated learning journeys for business needs",
      "Leadership and workplace productivity programs",
      "Easy adoption for employees and management teams",
    ],
  },
  {
    name: "CUSTOM LMS",
    description:
      "Parwaaz can help organizations design and integrate customized LMS-based learning ecosystems. These systems support internal training, content delivery, learner tracking, and structured development programs across departments.",
    bullets: [
      "Customized learning management system support",
      "Integration with existing organizational platforms",
      "Structured learning pathways for teams",
      "Streamlined content delivery and learner tracking",
    ],
  },
];

const outcomes = [
  "Gain foundational skills in strategy, finance and leadership, and identify new opportunities to drive growth",
  "Explore emerging technologies and how they will shape the market, your industry, and your organization",
  "Explore and learn to leverage diverse business perspectives and emerging business models",
  "Employ a strategic growth mindset and drive a data-driven growth strategy to rapidly scale up",
  "Acquire tools, frameworks, and techniques to drive change and expand your team and people leadership skills",
];

function GradientTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_38%,#006d78_67%,#07136f_100%)] bg-clip-text text-[31px] font-medium uppercase leading-[1.28] tracking-[1px] text-transparent max-[900px]:text-[27px] max-[480px]:text-[24px] max-[480px]:leading-[1.22]">
      {children}
    </h2>
  );
}

export default function CourseProgramDetailsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftContentRef = useRef<HTMLDivElement | null>(null);
  const formMoveRef = useRef<HTMLDivElement | null>(null);
  const tabContentRef = useRef<HTMLDivElement | null>(null);

  const activeProgram = programTabs[activeTab];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((prev) => (prev + 1) % programTabs.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!tabContentRef.current) return;

    gsap.fromTo(
      tabContentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeTab]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const formMove = formMoveRef.current;

    if (!section || !leftContent || !formMove) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(formMove, {
          y: 0,
          willChange: "transform",
        });

        gsap.to(formMove, {
          y: () => {
            const maxMove =
              leftContent.offsetHeight - formMove.offsetHeight - 40;

            return Math.max(maxMove, 0);
          },
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top+=90",
            end: "bottom bottom",
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.refresh();
      }, section);

      return () => ctx.revert();
    });

    mm.add("(max-width: 900px)", () => {
      gsap.set(formMove, {
        clearProps: "all",
        y: 0,
        x: 0,
      });

      return () => {
        gsap.set(formMove, { clearProps: "all" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible bg-white"
    >
      {/* Grey top background */}
      <div className="absolute left-0 top-0 z-0 h-[635px] w-full bg-[#f7f7fa] max-[900px]:h-[900px] max-[640px]:h-[980px] max-[480px]:h-[1040px]" />

      {/* Right orbit svg */}
      <div className="pointer-events-none absolute right-[-285px] top-[235px] z-[1] h-[770px] w-[770px] opacity-[0.42] max-[1100px]:right-[-410px] max-[900px]:hidden">
        <Image
          src="/orbit.svg"
          alt="Decorative orbit lines"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1160px] grid-cols-[1fr_485px] items-start gap-[72px] px-4 pb-[120px] pt-[50px] max-[1100px]:grid-cols-[1fr_430px] max-[1100px]:gap-[42px] max-[900px]:grid-cols-1 max-[900px]:gap-[45px] max-[900px]:px-[24px] max-[900px]:pb-[58px] max-[900px]:pt-[42px] max-[480px]:px-[18px]">
        {/* Left Content */}
        <div ref={leftContentRef} className="min-w-0">
          {/* Key Highlights */}
          <div className="max-w-[650px] max-[900px]:max-w-full">
            <p className="text-[13px] font-normal uppercase leading-none tracking-[0.8px] text-black">
              KEY PROGRAMS HIGHLIGHTS
            </p>

            <div className="mt-[18px]">
              <GradientTitle>
                EXCLUSIVE PARTNERSHIPS WITH
                <br />
                LEADING LEARNING PLATFORMS
              </GradientTitle>
            </div>

            <div ref={tabContentRef}>
              <h3 className="mt-[35px] text-[17px] font-normal uppercase leading-none tracking-[0.4px] text-black">
                {activeProgram.name}
              </h3>

              <p className="mt-[15px] max-w-[615px] text-[11.5px] font-normal uppercase leading-[1.42] tracking-[0.45px] text-black/90 max-[480px]:text-[10.8px] max-[480px]:leading-[1.55]">
                {activeProgram.description}
              </p>

              <ul className="mt-[42px] space-y-[22px] pl-[8px] max-[480px]:mt-[32px] max-[480px]:space-y-[16px]">
                {activeProgram.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[11px] text-[15px] font-normal leading-[1.3] tracking-[0.1px] text-black max-[480px]:text-[13px]"
                  >
                    <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagination */}
            <div className="mt-[78px] flex justify-center gap-[4px] max-[900px]:mt-[46px]">
              {programTabs.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  onClick={() => setActiveTab(index)}
                  className={`h-[6px] rounded-full transition-all duration-500 ease-out ${
                    activeTab === index
                      ? "w-[44px] bg-[#030887]"
                      : "w-[13px] bg-[#d7d7d7] hover:bg-[#030887]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-[111px] max-w-[625px] max-[900px]:mt-[70px] max-[900px]:max-w-full">
            <p className="text-[13px] font-normal uppercase leading-none tracking-[0.8px] text-black">
              PROGRAM OUTCOMES
            </p>

            <div className="mt-[12px]">
              <GradientTitle>
                EMERGE AS A HIGH-PERFORMING
                <br />
                LEADER
              </GradientTitle>
            </div>

            <p className="mt-[13px] text-[11.5px] font-normal leading-none tracking-[0.2px] text-black/80 max-[480px]:leading-[1.45]">
              Develop A Global Perspective And Build Future-Ready Capabilities
            </p>

            <div className="mt-[14px] flex flex-col gap-[5px]">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[49px] items-start gap-[10px] rounded-[5px] bg-[#f0f1f8] px-[13px] py-[12px] text-[12px] font-normal leading-[1.85] tracking-[0.05px] text-black max-[480px]:text-[11px] max-[480px]:leading-[1.6]"
                >
                  <span className="mt-[4px] flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#030887] text-white">
                    <Check className="h-[9px] w-[9px]" strokeWidth={3} />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Moving Inside Section */}
        <div className="relative z-[5] min-h-full self-stretch max-[900px]:min-h-0 max-[900px]:self-auto">
          <div
            ref={formMoveRef}
            className="relative w-full max-[900px]:mx-auto max-[900px]:max-w-[520px] max-[900px]:translate-x-0 max-[900px]:translate-y-0 max-[900px]:transform-none"
          >
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}