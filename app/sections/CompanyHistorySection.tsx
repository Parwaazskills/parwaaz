// app/sections/CompanyHistorySection.tsx

"use client";

import { useState } from "react";

const years = ["1985", "2000", "2007", "2009", "2011", "2020", "2023"];

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
}: {
  year: string;
  active?: boolean;
}) {
  const item = historyData[year];

  return (
    <div
      className={`h-[180px] rounded-[8px] px-[32px] pt-[20px] transition-all duration-300 ${
        active
          ? "bg-[#030887] text-white"
          : "border border-[#00fe4e] border-r-[#040887] bg-white text-black"
      }`}
    >
      <h3
        className={`text-[29px] font-normal leading-none tracking-[-0.6px] ${
          active
            ? "text-white"
            : "bg-gradient-to-r from-[#00fe4e] via-[#009b70] to-[#060d79] bg-clip-text text-transparent"
        }`}
      >
        {year}
      </h3>

      <ul
        className={`mt-[22px] space-y-[9px] pl-[14px] text-[9.5px] leading-[1.35] ${
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
    </div>
  );
}

export default function CompanyHistorySection() {
  const [activeYear, setActiveYear] = useState("1985");

  return (
    <section className="relative w-full overflow-hidden bg-white pb-[36px] pt-[54px]">
      {/* Right side network decorative lines */}
      <div className="pointer-events-none absolute right-[-72px] top-[410px] z-0 h-[300px] w-[330px] opacity-70 max-[900px]:hidden">
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

      <div className="relative z-[2] mx-auto w-full max-w-[1125px] px-4">
        {/* Heading */}
        <h2 className="text-[84px] font-light uppercase leading-none tracking-[4px] max-[900px]:text-[62px] max-[600px]:text-[42px]">
          <span className="text-[#00fe4e]">COMPANY</span>{" "}
          <span className="bg-gradient-to-r from-[#02875d] via-[#00616f] to-[#07136f] bg-clip-text text-transparent">
            HISTORY
          </span>
        </h2>

        <p className="mt-[26px] max-w-[790px] text-[12px] font-normal leading-[1.1] tracking-[-0.2px] text-black">
          Over the years, our conglomerate has evolved and expanded across
          multiple industries, establishing a strong presence both locally and
          internationally. Below is a timeline of our growth and success,
          highlighting key milestones in our journey..
        </p>

        <div className="mt-[48px] grid grid-cols-[100px_1fr] gap-[48px] max-[760px]:grid-cols-1 max-[760px]:gap-[28px]">
          {/* Years Sidebar */}
          <div className="relative flex flex-col items-center gap-[25px] pt-0 max-[760px]:flex-row max-[760px]:flex-wrap max-[760px]:justify-center">
            {years.map((year) => {
              const isActive = activeYear === year;

              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveYear(year)}
                  className={`relative h-[38px] w-[93px] rounded-[6px] text-[13.5px] font-normal transition-all duration-300 ${
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
          <div className="grid grid-cols-2 gap-x-[48px] gap-y-[13px] max-[760px]:grid-cols-1">
            <HistoryCard year={activeYear} active />

            {years
              .filter((year) => year !== activeYear)
              .slice(0, 5)
              .map((year) => (
                <HistoryCard key={`${activeYear}-${year}`} year={activeYear} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}