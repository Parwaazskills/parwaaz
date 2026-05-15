"use client";

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
    id: "office-setup-accommodation",
    iconSrc: "/icon/Officesetup.svg",
    title: (
      <>
        Office Setup
        <br />
        & Accommodation
      </>
    ),
    description:
      "End-to-end workspace and housing solutions for teams setting up in Pakistan or relocating internationally — handled entirely by Parwaaz so leadership can focus on the business. From identifying and negotiating the right space to handing over a fully furnished, operational office on day one.",
    deliverables: [
      "Office space market search, evaluation & negotiation",
      "Lease management & landlord liaison",
      "Staff accommodation sourcing, furnishing & management",
      "Utilities, connectivity & facilities setup",
      "Ongoing facilities management & maintenance coordination",
    ],
  },
  {
    id: "architecture-interior-design",
    iconSrc: "/icon/Architecture.svg",
    title: (
      <>
        Architecture
        <br />
        & Interior Design
      </>
    ),
    description:
      "Professional architecture and interior design services from concept to construction documentation — for commercial offices, institutional buildings, residential developments, and hospitality projects. Delivered through our Design Synergies partnership with full design team capability.",
    deliverables: [
      "Architectural concept & schematic design",
      "Interior design, material specification & FF&E",
      "Planning application & regulatory approvals",
      "3D visualisation, renders & walkthrough animations",
      "Full construction documentation & specifications",
    ],
  },
  {
    id: "bim-digital-construction",
    iconSrc: "/icon/digitalconstruction.svg",
    title: (
      <>
        BIM
        <br />
        & Digital Construction
      </>
    ),
    description:
      "Building Information Modelling services that bring coordination, precision, and cost control to complex construction projects. BIM reduces design clashes, eliminates construction waste, and produces an accurate digital twin that supports facilities management for the building's lifetime.",
    deliverables: [
      "3D BIM modelling (Revit, ArchiCAD, Navisworks)",
      "Multi-discipline coordination & clash detection",
      "4D construction sequencing & programme planning",
      "Cost estimation linked to BIM model (5D)",
      "As-built documentation & digital twin handover",
    ],
  },
  {
    id: "construction-management",
    iconSrc: "/icon/ConstructionManagement.svg",
    title: (
      <>
        Construction
        <br />
        Management
      </>
    ),
    description:
      "Professional management of construction projects from procurement through to handover — providing the owner with a single point of accountability for time, cost, and quality. Our construction management team has delivered commercial, institutional, and infrastructure projects across Pakistan.",
    deliverables: [
      "Contractor procurement, evaluation & appointment",
      "Contract administration & site supervision",
      "Quality management & inspection programmes",
      "Cost control, variation management & reporting",
      "Health & safety management & compliance",
    ],
  },
  {
    id: "fit-out-refurbishment",
    iconSrc: "/icon/refurbishment.svg",
    title: (
      <>
        Fit-out
        <br />
        & Refurbishment
      </>
    ),
    description:
      "Turnkey commercial fit-out — from Cat A shell-and-core to fully furnished, branded, technology-enabled workspaces. Also specialist refurbishment of existing spaces, including MEP upgrades, structural modifications, and full interior renewal while minimising business disruption.",
    deliverables: [
      "Cat A & Cat B commercial fit-out delivery",
      "Office refurbishment & space reconfiguration",
      "MEP design, procurement & installation coordination",
      "Furniture supply, installation & workplace styling",
      "Snagging, commissioning & practical completion",
    ],
  },
  {
    id: "workspace-technology-integration",
    iconSrc: "/icon/workspace.svg",
    title: (
      <>
        Workspace Technology
        <br />
        Integration
      </>
    ),
    description:
      "The digital infrastructure that makes modern workspaces productive — designed and installed as part of the fit-out process, not retrofitted afterwards. From enterprise connectivity and AV systems to access control, smart building management, and IoT integration.",
    deliverables: [
      "Structured cabling & enterprise Wi-Fi design & install",
      "AV, video conferencing & digital signage systems",
      "Access control, CCTV & physical security",
      "Smart building management system (BMS) integration",
      "IT server room & data infrastructure setup",
    ],
  },
];

export default function WorkplaceServiceBreakdown() {
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
            6 Services · Workspace, Design & Infrastructure
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
            Ready To Discuss Workspace?
          </h3>

          <p className="mt-[22px] max-w-[835px] font-montserrat text-[16px] font-normal leading-[1.75] tracking-[1.05px] text-white max-[768px]:mt-[18px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Tell Us About Your Organisation, Your Challenge, And Your Timeline.
            Parwaaz Can Help You Build, Equip, And Manage The Physical
            Infrastructure Your Teams Need To Operate.
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