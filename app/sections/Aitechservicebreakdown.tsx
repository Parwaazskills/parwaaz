// app/sections/LearningPlatformsSection.tsx

import Image from "next/image";
import type { ReactNode } from "react";

type ServiceItem = {
  id: string;
  iconSrc: string;
  title: ReactNode;
  description: string;
  deliverables: string[];
};

const services: ServiceItem[] = [
  {
    id: "ai-strategy-readiness",
    iconSrc: "/icon/Readiness.svg",
    title: (
      <>
        AI Strategy
        <br />
        & Readiness
      </>
    ),
    description:
      "A C-suite engagement that answers the three questions every leadership team needs answered before spending on AI: Where does AI genuinely create value in our business? What capability do we already have and what do we need to build? How do we govern AI responsibly while moving fast enough to matter?",
    deliverables: [
      "AI maturity assessment across all functions",
      "Use-case identification & business case modelling",
      "Build vs. buy vs. partner decision framework",
      "Three-year AI transformation roadmap",
      "Board-ready AI strategy presentation",
    ],
  },
  {
    id: "international-ai-partner-brokerage",
    iconSrc: "/icon/Partners.svg",
    title: (
      <>
        International AI
        <br />
        Partner Brokerage
      </>
    ),
    description:
      "Access to the world's leading AI infrastructure platforms — with Parwaaz as the accountable integrator. We evaluate vendors independently, negotiate on your behalf, and manage the full implementation lifecycle so you get the best technology for your context, not the loudest sales pitch.",
    deliverables: [
      "Independent AI vendor evaluation & RFP management",
      "G42, Azure OpenAI, AWS Bedrock, Google Vertex scoping",
      "Commercial negotiation & contract structuring",
      "Local implementation & systems integration",
      "Ongoing managed AI operations & optimisation",
    ],
  },
  {
    id: "generative-ai-llm-deployment",
    iconSrc: "/icon/LLM.svg",
    title: (
      <>
        Generative AI
        <br />
        & LLM Deployment
      </>
    ),
    description:
      "Enterprise-grade deployment of large language models and generative AI applications — from intelligent document processing and customer service automation to knowledge management systems and AI-powered decision support tools.",
    deliverables: [
      "Enterprise LLM selection, setup & fine-tuning",
      "RAG Retrieval-Augmented Generation pipeline build",
      "Internal knowledge base & AI search systems",
      "AI copilots for HR, finance & operations",
      "Document intelligence & contract automation",
    ],
  },
  {
    id: "process-automation-ai-workflows",
    iconSrc: "/icon/Automation.svg",
    title: (
      <>
        Process Automation
        <br />
        & AI Workflows
      </>
    ),
    description:
      "Move beyond basic RPA to intelligent automation — combining robotic process automation with AI judgement layers that can handle exceptions, learn from patterns, and continuously improve. Built for HR, finance, procurement, and public sector operations.",
    deliverables: [
      "End-to-end process audit & automation opportunity mapping",
      "RPA build & deployment using UiPath and Power Automate",
      "AI-enhanced exception handling & decision logic",
      "HR onboarding, payroll & compliance automation",
      "Public sector service delivery digitalisation",
    ],
  },
  {
    id: "custom-technology-development",
    iconSrc: "/icon/Development.svg",
    title: (
      <>
        Custom Technology
        <br />
        Development
      </>
    ),
    description:
      "Bespoke software, data platforms, and digital products built for your specific requirements — from MVP prototypes to enterprise-scale systems. Our team combines product thinking with technical depth to deliver solutions that are built to last, not just built to demo.",
    deliverables: [
      "Custom software & web application development",
      "API design, build & third-party integrations",
      "Data platforms, pipelines & analytics dashboards",
      "Digital product design, UX & prototyping",
      "Cloud architecture & DevOps setup",
    ],
  },
  {
    id: "ai-governance-compliance",
    iconSrc: "/icon/Compliance.svg",
    title: (
      <>
        AI Governance
        <br />
        & Compliance
      </>
    ),
    description:
      "As AI becomes embedded in business operations, governance is not optional — it is the difference between AI that scales and AI that creates liability. Parwaaz builds responsible AI frameworks aligned to WEF principles, international standards, and Pakistan's evolving regulatory environment.",
    deliverables: [
      "Responsible AI policy & ethics framework",
      "Model risk assessment & bias audit",
      "Data privacy & AI compliance architecture",
      "AI governance committee setup & training",
      "Ongoing AI audit & regulatory reporting",
    ],
  },
];

export default function Aitechservicebreakdown() {
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
            6 Services · AI & Advanced Technology
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
            Ready To Discuss AI?
          </h3>

          <p className="mt-[22px] max-w-[835px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[1.05px] text-white max-[768px]:mt-[18px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Tell Us About Your Organisation, Your Challenge, And Your Timeline.
            Parwaaz Can Help You Move From AI Strategy To Deployment With A
            Structured, Execution-Ready Approach.
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