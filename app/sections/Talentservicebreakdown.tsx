"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ServiceItem = {
  id: string;
  iconSrc: string;
  title: ReactNode;
  description: string;
  deliverables: string[];
};

const services: ServiceItem[] = [
  {
    id: "international-recruitment",
    iconSrc: "/icon/Recruitment.svg",
    title: (
      <>
        International
        <br />
        Recruitment
      </>
    ),
    description:
      "End-to-end talent acquisition connecting Pakistan's skilled workforce with international opportunities across the GCC, UK, Europe, and beyond. From executive search to high-volume specialist hiring — with sector expertise in technology, construction, healthcare, hospitality, finance, and engineering.",
    deliverables: [
      "Executive & C-suite search (GCC, UK, international)",
      "Technical & specialist professional hiring",
      "Volume & mass recruitment programmes",
      "Sector-specific talent sourcing (tech, construction, health, hospitality)",
      "Candidate screening, assessment & reference management",
    ],
  },
  {
    id: "payroll-contract-management",
    iconSrc: "/icon/Payroll.svg",
    title: (
      <>
        Payroll &
        <br />
        Contract Management
      </>
    ),
    description:
      "Multi-country payroll processing and employer-of-record services that eliminate the administrative complexity of managing an internationally deployed workforce. Full statutory compliance, tax management, and legal documentation across Pakistan, GCC, and UK jurisdictions.",
    deliverables: [
      "Multi-country payroll processing & disbursement",
      "Employer of record (EOR) services",
      "Employment contract drafting & management",
      "Statutory compliance & tax management",
      "Payroll audit & regulatory reporting",
    ],
  },
  {
    id: "visa-immigration-services",
    iconSrc: "/icon/Visa.svg",
    title: (
      <>
        Visa &
        <br />
        Immigration Services
      </>
    ),
    description:
      "Complete visa processing, immigration case management, and legal documentation for international workforce deployment. Covering work visas, dependent visas, and ongoing immigration compliance across multiple destination countries — with dedicated case managers for high-volume programmes.",
    deliverables: [
      "Work visa application management & tracking",
      "Immigration documentation preparation & filing",
      "Dependent & family visa processing",
      "Destination country compliance management",
      "Visa renewal & status monitoring",
    ],
  },
  {
    id: "workforce-deployment-settling-in",
    iconSrc: "/icon/Settling.svg",
    title: (
      <>
        Workforce Deployment
        <br />
        & Settling-in
      </>
    ),
    description:
      "The services that make international deployment actually work — accommodation sourcing, logistics management, on-arrival orientation, and ongoing welfare support for deployed workers and their families. Parwaaz ensures that the worker who arrives is productive, settled, and retained.",
    deliverables: [
      "Pre-departure orientation & documentation",
      "Accommodation sourcing, setup & management",
      "Airport reception & on-arrival logistics",
      "Worker welfare monitoring & support",
      "Emergency assistance & repatriation management",
    ],
  },
  {
    id: "talent-intelligence-analytics",
    iconSrc: "/icon/Talentintelligence.svg",
    title: (
      <>
        Talent Intelligence
        <br />
        & Analytics
      </>
    ),
    description:
      "Data-driven insights on Pakistan's talent landscape — supply and demand by sector, geography, and skill level — helping employers make smarter sourcing decisions and helping policymakers understand workforce flows. Includes diaspora mapping and returnee programme design.",
    deliverables: [
      "Labour market supply & demand analysis by sector",
      "Talent availability mapping by region & skill",
      "Diaspora & returnee capability database",
      "Workforce planning & headcount modelling",
      "Custom talent market research & benchmarking",
    ],
  },
  {
    id: "outsourced-hr-people-operations",
    iconSrc: "/icon/Operations.svg",
    title: (
      <>
        Outsourced HR
        <br />
        & People Operations
      </>
    ),
    description:
      "Fully managed HR functions for companies that need professional people operations without building an in-house HR team — particularly valuable for international companies entering Pakistan, rapidly scaling startups, and government bodies transitioning to modern HR practices.",
    deliverables: [
      "End-to-end HR function outsourcing (HRO)",
      "Performance management system design & operation",
      "HR policy, procedure & documentation development",
      "Disciplinary, grievance & ER management",
      "HR technology selection & implementation support",
    ],
  },
];

export default function TalentMobilityServiceBreakdown() {
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
            6 Services · Talent Mobility & Manpower Solutions
          </p>
        </div>

        <div className="mt-[28px] flex flex-col gap-[24px] max-[768px]:mt-[30px] max-[768px]:gap-[28px]">
          {services.map((item) => {
            return (
              <div
                id={item.id}
                key={item.id}
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
            Ready To Discuss Talent?
          </h3>

          <p className="mt-[22px] max-w-[835px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[1.05px] text-white max-[768px]:mt-[18px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Tell Us About Your Organisation, Your Challenge, And Your Timeline.
            Parwaaz Can Help You Move From Workforce Planning To International
            Deployment With A Structured, Execution-Ready Approach.
          </p>

          <a
            href="/contact"
            className="mt-[18px] inline-flex h-[46px] min-w-[172px] items-center justify-center rounded-[7px] bg-[#00F51F] px-[28px] font-montserrat text-[13px] font-medium leading-none tracking-[-0.1px] text-[#001000] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#00DD1C] max-[480px]:h-[44px] max-[480px]:w-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}