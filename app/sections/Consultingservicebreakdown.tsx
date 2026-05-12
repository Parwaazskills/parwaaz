import Image from "next/image";
import type { ReactNode } from "react";

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
    id: "digital-transformation-advisory",
    iconSrc: "/icon/Dignostic.svg",
    title: (
      <>
        Digital Transformation
        <br />
        Advisory
      </>
    ),
    description:
      "End-to-end digital transformation engagements for enterprises and government bodies — from strategy and operating model redesign through to technology implementation and change management. Aligned to international frameworks (TOGAF, McKinsey 7S, Kotter) and calibrated to local execution realities.",
    deliverables: [
      "Digital strategy & operating model design",
      "As-is assessment & transformation gap analysis",
      "Technology roadmap & vendor selection support",
      "Change management & stakeholder engagement",
      "Post-transformation KPI design & performance measurement",
    ],
  },
  {
    id: "organisational-design-hr-transformation",
    iconSrc: "/icon/LearningProg.svg",
    title: (
      <>
        Organisational Design
        <br />
        & HR Transformation
      </>
    ),
    description:
      "Redesign how organisations are structured, how decisions are made, and how people are managed — to unlock the performance that existing capability and resources should already be delivering. Built on Korn Ferry and Deloitte organisational design methodology.",
    deliverables: [
      "Organisational structure design & spans/layers analysis",
      "Operating model redesign & RACI development",
      "HR technology selection & implementation oversight",
      "Performance management framework design",
      "Job architecture, grading & compensation benchmarking",
    ],
  },
  {
    id: "public-sector-innovation",
    iconSrc: "/icon/LMS.svg",
    title: (
      <>
        Public Sector
        <br />
        Innovation
      </>
    ),
    description:
      "Capacity building, service redesign, and programme delivery for government ministries, departments, and development organisations — backed by WEF frameworks and with a track record of delivery on donor-funded national programmes.",
    deliverables: [
      "E-government strategy & service digitalisation",
      "Civil service capacity building & training design",
      "Donor-funded programme design & delivery management",
      "Policy design, costing & evidence development",
      "Inter-ministerial coordination & stakeholder management",
    ],
  },
  {
    id: "workforce-market-research",
    iconSrc: "/icon/Certification.svg",
    title: (
      <>
        Workforce
        <br />
        & Market Research
      </>
    ),
    description:
      "Proprietary research products that generate commercial-grade insights on Pakistan's talent landscape and digital economy — published under WEF co-branding to maximise credibility and reach with government, investors, and multinationals.",
    deliverables: [
      "Future of Work Pakistan annual flagship report",
      "Sector-specific talent intelligence reports (tech, health, energy, construction)",
      "AI & digital economy adoption barometer (quarterly)",
      "Custom employer & worker primary surveys",
      "Data-as-a-Service: skills & labour market datasets",
    ],
  },
  {
    id: "international-market-entry-support",
    iconSrc: "/icon/Development2.svg",
    title: (
      <>
        International Market
        <br />
        Entry Support
      </>
    ),
    description:
      "The on-the-ground delivery partner for multinationals entering or scaling in Pakistan, Saudi Arabia, or UAE. Parwaaz provides the local market intelligence, regulatory navigation, partner identification, and operational setup that international firms need to move from decision to operations.",
    deliverables: [
      "Market entry feasibility & strategy",
      "Regulatory environment mapping & compliance navigation",
      "Local partner identification & due diligence",
      "Entity setup & operational launch support",
      "Ongoing government & stakeholder relationship management",
    ],
  },
  {
    id: "programme-project-management",
    iconSrc: "/icon/Intelligence.svg",
    title: (
      <>
        Programme
        <br />
        & Project Management
      </>
    ),
    description:
      "PMO-as-a-service for large national, regional, or organisational implementation programmes — providing the governance infrastructure, reporting discipline, and delivery accountability that complex multi-stakeholder programmes require but rarely have.",
    deliverables: [
      "Programme governance framework & PMO setup",
      "Master project planning & dependency management",
      "Risk register, issue management & escalation",
      "Stakeholder reporting & executive dashboards",
      "Benefits tracking & programme evaluation",
    ],
  },
];

export default function ConsultingServiceBreakdown() {
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

            .service-breakdown-card:target {
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
            6 Services · Consulting, Advisory & Research
          </p>
        </div>

        <div className="mt-[28px] flex flex-col gap-[24px] max-[768px]:mt-[30px] max-[768px]:gap-[28px]">
          {services.map((item, index) => {
            return (
              <div
                id={item.id}
                key={index}
                className="service-breakdown-card grid grid-cols-[342px_1fr_390px] items-stretch gap-[22px] rounded-[18px] border-b border-[#EEEEEE] p-[12px] pb-[24px] transition-all duration-300 max-[1180px]:grid-cols-[310px_1fr] max-[1180px]:gap-y-[18px] max-[768px]:grid-cols-1 max-[768px]:gap-[14px] max-[768px]:pb-[28px]"
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

                <div className="flex flex-col justify-top max-[1180px]:pr-[12px] max-[768px]:pr-0">
                  {item.exclusive && (
                    <div className="mb-[12px] inline-flex w-fit items-center justify-center rounded-[4px] bg-[#00F51F] px-[10px] py-[5px] font-montserrat text-[10px] font-semibold uppercase leading-none tracking-[1px] text-[#001000]">
                      Exclusive Partnership
                    </div>
                  )}

                  <p className="max-w-[680px] font-montserrat text-[17px] font-normal leading-[1.45] tracking-[0.1px] text-[#000000] max-[1024px]:text-[16px] max-[480px]:text-[14px]">
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
            Ready To Discuss Consulting?
          </h3>

          <p className="mt-[22px] max-w-[835px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[1.05px] text-white max-[768px]:mt-[18px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Tell Us About Your Organisation, Your Challenge, And Your Timeline.
            Parwaaz Can Help You Move From Strategy To Execution With A
            Structured, Locally Grounded Consulting Approach.
          </p>

          <a
            href="mailto:contact@parwaaz.co"
            className="mt-[18px] inline-flex h-[46px] min-w-[172px] items-center justify-center rounded-[7px] bg-[#00F51F] px-[28px] font-montserrat text-[13px] font-medium leading-none tracking-[-0.1px] text-[#001000] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#00DD1C] max-[480px]:h-[44px] max-[480px]:w-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}