"use client";

// app/sections/Reskillingservicebreakdown.tsx

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ServiceItem = {
  id: string;
  iconSrc: string;
  title: ReactNode;
  description: string;
  exclusive?: boolean;
  deliverables: string[];
};

const services: ServiceItem[] = [
  {
    id: "skills-gap-diagnostics",
    iconSrc: "/icon/Dignostic.svg",
    title: (
      <>
        Skills Gap
        <br />
        Diagnostics
      </>
    ),
    description:
      "Rigorous, data-driven assessment of workforce capability gaps — at national, sectoral, or enterprise level — using WEF Future of Jobs methodology, employer survey data, and role-by-role competency benchmarking. The output is a prioritised, actionable skills investment plan, not a generic report.",
    deliverables: [
      "National & sectoral skills gap mapping",
      "Enterprise capability audit by role and function",
      "AI & digital readiness scan",
      "Competency benchmarking against international standards",
      "Prioritised skills investment roadmap",
    ],
  },
  {
    id: "learning-programme-architecture",
    iconSrc: "/icon/LearningProg.svg",
    title: (
      <>
        Learning Programme
        <br />
        Architecture
      </>
    ),
    description:
      "Custom learning journeys designed from the ground up — built on Coursera content, Gnowbe microlearning, and Parwaaz's proprietary employer co-designed programmes. Every pathway is mapped to real job outcomes and validated by the 50+ major employers who co-designed our content library.",
    deliverables: [
      "Role-specific learning pathway design",
      "Coursera specialisation & programme selection",
      "Gnowbe mobile microlearning programme build",
      "Proprietary content development with employer validation",
      "Blended learning journey architecture",
    ],
  },
  {
    id: "coursera-enterprise-deployment",
    iconSrc: "/icon/LMS.svg",
    exclusive: true,
    title: (
      <>
        Coursera Enterprise
        <br />
        Deployment
      </>
    ),
    description:
      "As Pakistan's exclusive B2B Coursera partner, Parwaaz provides full enterprise licensing, LMS configuration, SSO integration, and ongoing platform management. For organisations with existing HR technology, we integrate Coursera into SAP SuccessFactors, Workday, Oracle HCM, or custom LMS platforms.",
    deliverables: [
      "Coursera B2B enterprise licence negotiation & setup",
      "LMS configuration, branding & SSO integration",
      "Coursera + SAP / Workday / Oracle integration",
      "Admin training & platform management",
      "Learner onboarding & cohort management",
    ],
  },
  {
    id: "credentials-certification",
    iconSrc: "/icon/Certification.svg",
    title: (
      <>
        Credentials
        <br />
        & Certification
      </>
    ),
    description:
      "Stackable, internationally recognised credentials that give employees proof of capability and give employers confidence in quality. Built on Coursera university partnerships — including Google, IBM, Meta, and 200+ leading institutions — and aligned to Pakistan's National Qualifications Framework.",
    deliverables: [
      "Coursera professional certificate programmes",
      "University-backed credentials (200+ institutions)",
      "Google, IBM, Meta & Microsoft certifications",
      "Employer-recognised internal skills badges",
      "National Qualifications Framework alignment",
    ],
  },
  {
    id: "workforce-reskilling-cohorts",
    iconSrc: "/icon/Development2.svg",
    title: (
      <>
        Workforce Reskilling
        <br />
        Cohorts
      </>
    ),
    description:
      "Structured, time-bound reskilling programmes that move employees from current to future capability — with accountability mechanisms, cohort peer learning, and employer outcome tracking. Designed for AI literacy, data skills, digital operations, project management, and sector-specific technical reskilling.",
    deliverables: [
      "AI literacy & generative AI programmes for all staff levels",
      "Data analytics & digital tools acceleration cohorts",
      "Leadership & management development programmes",
      "Public sector workforce reskilling delivery",
      "Cohort tracking, completion & outcome reporting",
    ],
  },
  {
    id: "learning-impact-skills-intelligence",
    iconSrc: "/icon/Intelligence.svg",
    title: (
      <>
        Learning Impact
        <br />
        & Skills Intelligence
      </>
    ),
    description:
      "The most underdeveloped capability in Pakistan's learning market. Parwaaz measures what actually changes — capability lift, behaviour change, business outcome correlation, and learning ROI — and presents it in boardroom-ready reporting that justifies continued investment and guides future programme decisions.",
    deliverables: [
      "Pre & post capability assessments",
      "Learning completion & engagement analytics",
      "Business outcome correlation reporting",
      "Learning ROI calculation & board presentation",
      "WEF-aligned national skills progress reporting",
    ],
  },
];

export default function Reskillingservicebreakdown() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    let removeTimer: ReturnType<typeof setTimeout>;

    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      const target = document.getElementById(hash);

      if (!target) return;

      setActiveHash("");

      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setActiveHash(hash);

        clearTimeout(removeTimer);
        removeTimer = setTimeout(() => {
          setActiveHash("");
        }, 3200);
      });
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      clearTimeout(removeTimer);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-[70px] pt-[8px] max-[768px]:pb-[56px] max-[768px]:pt-[24px]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }

            .service-breakdown-card {
              scroll-margin-top: 120px;
            }

            .service-breakdown-card:target,
            .service-breakdown-card.is-hash-highlight {
              animation: serviceGlow 3s ease-in-out;
            }

            @keyframes serviceGlow {
              0% {
                background: rgba(0, 5, 114, 0.08);
                box-shadow: 0 0 0 0 rgba(0, 5, 114, 0.00);
              }
              35% {
                background: rgba(0, 5, 114, 0.10);
                box-shadow: 0 0 0 6px rgba(0, 5, 114, 0.08), 0 18px 46px rgba(0, 5, 114, 0.18);
              }
              100% {
                background: transparent;
                box-shadow: 0 0 0 0 rgba(0, 5, 114, 0.00);
              }
            }

            @media (max-width: 768px) {
              .service-breakdown-card {
                scroll-margin-top: 90px;
              }
            }
          `,
        }}
      />

      {/* Right Orbit */}
      <div className="pointer-events-none absolute right-[-315px] top-[185px] z-0 h-[660px] w-[660px] opacity-[0.42] max-[1100px]:hidden">
        <Image
          src="/orbit.svg"
          alt="Decorative orbit"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px]">
        <div className="flex items-end justify-between gap-6 border-b border-[#E7E7E7] pb-[24px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
          <h2 className="font-montserrat text-[26px] font-semibold leading-[1.2] tracking-[-0.25px] text-[#8A8A8A] max-[768px]:text-[24px] max-[480px]:text-[22px]">
            Service Breakdown
          </h2>

          <p className="font-montserrat text-[14px] font-normal leading-[1.4] tracking-[0.1px] text-[#8A8A8A] max-[480px]:text-[13px]">
            6 Services · Reskilling & Upskilling
          </p>
        </div>

        <div className="mt-[28px] flex flex-col gap-[24px] max-[768px]:mt-[30px] max-[768px]:gap-[28px]">
          {services.map((item, index) => {
            return (
              <div
                id={item.id}
                key={index}
                className={`service-breakdown-card grid grid-cols-[342px_1fr_390px] items-stretch gap-[22px] rounded-[18px] border-b border-[#EEEEEE] p-[12px] pb-[24px] transition-all duration-300 max-[1180px]:grid-cols-[310px_1fr] max-[1180px]:gap-y-[18px] max-[768px]:grid-cols-1 max-[768px]:gap-[14px] max-[768px]:pb-[28px] ${
                  activeHash === item.id ? "is-hash-highlight" : ""
                }`}
              >
                <div className="flex min-h-[190px] w-full items-center rounded-t-[15px] bg-[#000572] px-[38px] max-[1180px]:min-h-[170px] max-[768px]:max-w-[360px] max-[480px]:min-h-[150px] max-[480px]:px-[30px]">
                  <div>
                    <div className="mb-[16px] flex items-center">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={58}
                        height={58}
                        className="h-[56px] w-[56px] object-contain"
                      />
                    </div>

                    <h3 className="font-montserrat text-[25px] font-medium leading-[1.14] tracking-[-0.4px] text-white max-[480px]:text-[22px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-start max-[1180px]:pr-[12px] max-[768px]:pr-0">
                  {item.exclusive && (
                    <div className="mb-[12px] inline-flex w-fit items-center justify-center rounded-[4px] bg-[#00F51F] px-[10px] py-[5px] font-montserrat text-[10px] font-semibold uppercase leading-none tracking-[1px] text-[#001000]">
                      Exclusive Partnership
                    </div>
                  )}

                  <p className="max-w-[680px] font-montserrat text-[16px] font-normal leading-[1.45] tracking-[0.1px] text-[#000000] max-[1024px]:text-[16px] max-[480px]:text-[14px]">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-[14px] border border-[#E8E8E8] bg-[#FAFAFA] px-[24px] py-[22px] max-[1180px]:col-span-2 max-[768px]:col-span-1 max-[480px]:px-[18px] max-[480px]:py-[18px]">
                  <h4 className="font-montserrat text-[13px] font-semibold uppercase leading-[1.3] tracking-[1.7px] text-[#8A8A8A]">
                    Deliverables
                  </h4>

                  <ul className="mt-[14px] flex flex-col gap-[9px]">
                    {item.deliverables.map(
                      (deliverable, deliverableIndex) => (
                        <li
                          key={deliverableIndex}
                          className="relative pl-[18px] font-montserrat text-[14px] font-normal leading-[1.45] tracking-[0.05px] text-[#000000] before:absolute before:left-0 before:top-[1px] before:text-[#000572] before:content-['—'] max-[480px]:text-[13px]"
                        >
                          {deliverable}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-[44px] flex w-full max-w-[1400px] flex-col items-center justify-center rounded-[12px] border border-[#00FF2F] bg-[#000572] px-[42px] py-[40px] text-center shadow-[0_18px_55px_rgba(0,5,114,0.14)] max-[768px]:mt-[38px] max-[768px]:px-[22px] max-[768px]:py-[34px] max-[480px]:rounded-[10px]">
          <h3 className="font-montserrat text-[24px] font-semibold leading-[1.25] tracking-[1.2px] text-[#00FF2F] max-[768px]:text-[22px] max-[480px]:text-[20px]">
            Ready To Discuss Reskilling?
          </h3>

          <p className="mt-[22px] max-w-[835px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[1.05px] text-white max-[768px]:mt-[18px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Tell Us About Your Organisation, Your Challenge, And Your Timeline.
            Parwaaz Can Help You Close Skills Gaps With A Structured,
            Execution-Ready Reskilling Approach.
          </p>

       <a
  href="/contact"
  className="group relative z-[3] mt-[18px] inline-flex h-[48px] items-center justify-center gap-[10px] rounded-[24px] border-[1.5px] border-transparent bg-[#F1F1F1] px-[36px] font-montserrat text-[14px] font-medium leading-none text-[#333333] no-underline shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:border-[#00FE4E] hover:bg-[linear-gradient(135deg,#00FE4E_0%,#0ADF54_100%)] hover:text-black hover:shadow-[0_8px_24px_rgba(0,254,78,0.5),0_0_0_6px_rgba(0,254,78,0.12)] active:translate-y-0 active:scale-[0.97] max-[480px]:h-[46px] max-[480px]:w-full"
>
  Start a Project
  <span className="inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#00FE4E] text-[#050505] transition-all duration-300 ease-in-out group-hover:translate-x-[4px] group-hover:bg-white">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </span>
</a>
        </div>
      </div>
    </section>
  );
}