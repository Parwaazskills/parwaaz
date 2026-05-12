// app/sections/CompanyHistorySection.tsx

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const years = ["1985", "2000", "2007", "2009", "2011", "2020", "2023"];

const historyTickerTitleClass =
  "history-title whitespace-nowrap bg-[linear-gradient(90deg,#00fe4e_0%,#00d657_18%,#02875d_42%,#00616f_68%,#07136f_100%)] bg-clip-text text-[110px] font-regular uppercase leading-[0.9] tracking-[-0.06em] text-transparent max-[1300px]:text-[118px] max-[1100px]:text-[94px] max-[900px]:text-[72px] max-[760px]:whitespace-normal max-[760px]:text-[54px] max-[760px]:leading-[0.95] max-[520px]:text-[42px] max-[390px]:text-[34px]";

const historyData: Record<
  string,
  {
    company: string;
    offices: string;
    employees: string;
    milestone: string;
  }
> = {
  "1985": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2000": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2007": {
    company: "Mitrddex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2009": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2011": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2020": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
  "2023": {
    company: "Mitrex",
    offices: "Islamabad, Lahore, Karachi, Kabul",
    employees: "43",
    milestone:
      "Mitrex established as the foundation of our conglomerate, with a focus on multi-regional expansion",
  },
};

function HistoryCard({
  year,
  active = false,
  onClick,
}: {
  year: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const item = historyData[year];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`history-card h-[180px] w-full rounded-[8px] px-[32px] pt-[20px] text-left transition-all duration-300 max-[900px]:h-auto max-[900px]:min-h-[180px] max-[480px]:min-h-[190px] max-[480px]:px-[22px] max-[480px]:pt-[19px] ${
        active
          ? "bg-[#030887] text-white shadow-[0_15px_32px_rgba(3,8,135,0.18)]"
          : "border border-[#00fe4e] border-r-[#040887] bg-white text-black hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(3,8,135,0.08)]"
      }`}
    >
      <h3
        className={`text-[29px] font-normal leading-none tracking-[-0.6px] max-[480px]:text-[26px] ${
          active
            ? "text-white"
            : "bg-gradient-to-r from-[#00fe4e] via-[#009b70] to-[#060d79] bg-clip-text text-transparent"
        }`}
      >
        {year}
      </h3>

      <ul
        className={`mt-[22px] space-y-[9px] pl-[14px] text-[9.5px] leading-[1.35] max-[480px]:mt-[18px] max-[480px]:text-[9.2px] ${
          active ? "text-white" : "text-black"
        }`}
      >
        <li className="list-disc">
          <span className="font-bold">Company:</span> {item.company}
        </li>
        <li className="list-disc">
          <span className="font-bold">Offices:</span> {item.offices}
        </li>
        <li className="list-disc">
          <span className="font-bold">Employees:</span> {item.employees}
        </li>
        <li className="list-disc">
          <span className="font-bold">Milestone:</span> {item.milestone}
        </li>
      </ul>
    </button>
  );
}

export default function CompanyHistorySection() {
  const [activeYear, setActiveYear] = useState("1985");

  const sectionRef = useRef<HTMLElement | null>(null);
  const tickerTrackRef = useRef<HTMLDivElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const yearsRef = useRef<HTMLDivElement | null>(null);
  const cardsGridRef = useRef<HTMLDivElement | null>(null);
  const networkRef = useRef<HTMLDivElement | null>(null);

  const orderedYears = useMemo(() => {
    const activeIndex = years.indexOf(activeYear);

    if (activeIndex === -1) return years;

    return [...years.slice(activeIndex), ...years.slice(0, activeIndex)];
  }, [activeYear]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const tickerTrack = tickerTrackRef.current;
    const para = paraRef.current;
    const yearsBox = yearsRef.current;
    const cardsGrid = cardsGridRef.current;
    const network = networkRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const isMobile = window.matchMedia("(max-width: 760px)").matches;

    if (isMobile) {
      gsap.set([tickerTrack, para, yearsBox, cardsGrid, network], {
        clearProps: "all",
      });

      return;
    }

    const ctx = gsap.context(() => {
      if (tickerTrack) {
        gsap.set(tickerTrack, {
          xPercent: 0,
          willChange: "transform",
        });

        gsap.to(tickerTrack, {
          xPercent: -50,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
      }

      gsap.set(para, {
        opacity: 0,
        y: 20,
        filter: "blur(5px)",
      });

      gsap.set(yearsBox, {
        opacity: 0,
        x: -18,
        filter: "blur(4px)",
      });

      gsap.set(cardsGrid, {
        opacity: 0,
        y: 14,
        filter: "blur(4px)",
      });

      if (network) {
        gsap.set(network, {
          opacity: 0,
          x: 28,
          scale: 0.96,
          filter: "blur(6px)",
        });
      }

      const forceComplete = () => {
        gsap.set([para, yearsBox, cardsGrid, network], {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
      };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            end: "top 48%",
            scrub: 0.75,
            invalidateOnRefresh: true,
            onLeave: forceComplete,
          },
        })
        .to(para, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          duration: 0.36,
        })
        .to(
          yearsBox,
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.35,
          },
          "-=0.2"
        )
        .to(
          cardsGrid,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.45,
          },
          "-=0.25"
        )
        .to(
          network,
          {
            opacity: 0.7,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.35,
          },
          "-=0.38"
        );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 760px)").matches;

    if (isMobile) return;

    const cards = gsap.utils.toArray<HTMLElement>(".history-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 14,
        scale: 0.985,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.32,
        ease: "power3.out",
        stagger: {
          each: 0.035,
          from: "start",
        },
      }
    );
  }, [activeYear]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-x-clip overflow-y-visible bg-white pb-[50px] pt-[76px] max-[900px]:pb-[54px] max-[900px]:pt-[60px] max-[600px]:pb-[48px] max-[600px]:pt-[50px]"
    >
      {/* Right side network decorative lines */}
      <div
        ref={networkRef}
        className="electric-network pointer-events-none absolute right-[-72px] top-[430px] z-0 h-[300px] w-[330px] opacity-70 max-[900px]:hidden"
      >
        <svg
          viewBox="0 0 330 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M323 45H270L257 88L280 118L330 132"
            stroke="#D8D8D8"
            strokeWidth="1"
          />
          <path
            d="M330 168L292 158L247 190L204 175L170 203L132 193"
            stroke="#D8D8D8"
            strokeWidth="1"
          />
          <path
            d="M330 216L289 202L241 230L193 215L152 242L112 231"
            stroke="#D8D8D8"
            strokeWidth="1"
          />
          <path
            d="M330 94L292 102L253 102L214 127L172 116L139 139L96 129"
            stroke="#D8D8D8"
            strokeWidth="1"
          />
          <circle cx="270" cy="45" r="7" fill="#D6D8DA" />
          <circle cx="204" cy="175" r="7" fill="#D6D8DA" />
          <circle cx="132" cy="193" r="7" fill="#D6D8DA" />
          <circle cx="112" cy="231" r="10" fill="#D6D8DA" />
          <circle cx="96" cy="129" r="7" fill="#D6D8DA" />
          <circle cx="139" cy="139" r="6" fill="#D6D8DA" />
          <circle cx="170" cy="203" r="7" fill="#D6D8DA" />
          <circle cx="247" cy="190" r="7" fill="#D6D8DA" />
        </svg>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="w-full overflow-visible max-[760px]:overflow-visible">
          <div
            ref={tickerTrackRef}
            className="flex w-max items-center gap-[42px] max-[760px]:block max-[760px]:w-full"
          >
            <h2 className={historyTickerTitleClass}>
              COMPANY HISTORY AND TRAJECTORY
            </h2>

            <h2
              aria-hidden="true"
              className={`${historyTickerTitleClass} max-[760px]:hidden`}
            >
              COMPANY HISTORY AND TRAJECTORY
            </h2>
          </div>
        </div>

        <p
          ref={paraRef}
          className="mt-[30px] max-w-[1200px] text-[18px] font-normal leading-[1.45] tracking-[-0.2px] text-black max-[600px]:mt-[22px] max-[600px]:text-[11.5px] max-[600px]:leading-[1.5]"
        >
          Over the years, our conglomerate has evolved and expanded across
          multiple industries, establishing a strong presence both locally and
          internationally. Below is a timeline of our growth and success,
          highlighting key milestones in our journey..
        </p>

        <div className="mt-[50px] grid grid-cols-[100px_1fr] gap-[48px] max-[900px]:gap-[34px] max-[760px]:grid-cols-1 max-[760px]:gap-[28px] max-[600px]:mt-[34px]">
          {/* Years Sidebar */}
          <div
            ref={yearsRef}
            className="relative flex flex-col items-center gap-[25px] pt-0 max-[760px]:flex-row max-[760px]:flex-wrap max-[760px]:justify-start max-[760px]:gap-[10px]"
          >
            {years.map((year) => {
              const isActive = activeYear === year;

              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveYear(year)}
                  className={`relative h-[38px] w-[93px] rounded-[6px] text-[13.5px] font-normal transition-all duration-300 max-[480px]:h-[36px] max-[480px]:w-[82px] max-[480px]:text-[12.5px] ${
                    isActive
                      ? "bg-[#030887] text-white"
                      : "border border-[#e4e4e4] bg-white text-black hover:border-[#00fe4e]"
                  }`}
                >
                  {year}

                  {isActive && (
                    <span className="absolute right-[-22px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[8px] border-l-[14px] border-y-transparent border-l-[#030887] max-[760px]:hidden" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsGridRef}
            className="grid grid-cols-2 gap-x-[48px] gap-y-[13px] max-[1100px]:gap-x-[28px] max-[760px]:grid-cols-1"
          >
            {orderedYears.slice(0, 6).map((year, index) => (
              <HistoryCard
                key={`${activeYear}-${year}`}
                year={year}
                active={index === 0}
                onClick={() => setActiveYear(year)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes electricNetwork {
          0% {
            opacity: 0.42;
            filter: drop-shadow(0 0 0 rgba(0, 254, 78, 0));
          }
          8% {
            opacity: 0.95;
            filter: drop-shadow(0 0 8px rgba(0, 254, 78, 0.45));
          }
          12% {
            opacity: 0.5;
            filter: drop-shadow(0 0 2px rgba(0, 254, 78, 0.18));
          }
          18% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(0, 254, 78, 0.55));
          }
          25% {
            opacity: 0.58;
            filter: drop-shadow(0 0 0 rgba(0, 254, 78, 0));
          }
          55% {
            opacity: 0.72;
            filter: drop-shadow(0 0 5px rgba(3, 8, 135, 0.28));
          }
          62% {
            opacity: 1;
            filter: drop-shadow(0 0 11px rgba(0, 254, 78, 0.5));
          }
          68% {
            opacity: 0.52;
            filter: drop-shadow(0 0 0 rgba(0, 254, 78, 0));
          }
          100% {
            opacity: 0.7;
            filter: drop-shadow(0 0 3px rgba(0, 254, 78, 0.18));
          }
        }

        .electric-network {
          animation: electricNetwork 2.4s infinite steps(2, end);
          will-change: opacity, filter;
        }

        .electric-network svg path {
          stroke: #d8d8d8;
        }

        .electric-network svg circle {
          fill: #d6d8da;
        }

        .electric-network:hover svg path {
          stroke: #00fe4e;
        }

        .electric-network:hover svg circle {
          fill: #00fe4e;
        }

        @media (max-width: 760px) {
          .history-card {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}