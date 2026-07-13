"use client";

// app/sections/CaseStudyDetails.tsx

const contextPills = [
  "Status as the largest employer in the world",
  "Vital role in protecting national security",
];

const branches = [
  "U.S. Army",
  "Navy",
  "Marine Corps",
  "Air Force",
  "Space Force",
  "National Guard",
  "Coast Guard",
];

const goalPoints = [
  "Create a talent pipeline of qualified technical professionals.",
  "Strengthen its employer brand in cybersecurity and IT.",
  "Leverage untraditional recruitment tactics.",
  "Evaluate and recruit candidates at scale.",
];

export default function CaseStudyDetails() {
  return (
    <section className="w-full bg-white px-[86px] py-[90px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-[110px] max-[1200px]:gap-[60px] max-[900px]:grid-cols-1">
        {/* Context Card */}
        <div className="rounded-[14px] bg-[#E6E6F1] px-[34px] py-[36px] max-[480px]:px-[22px]">
          <h2 className="font-montserrat text-[46px] font-bold leading-none text-[#000572] max-[768px]:text-[38px]">
            Context
          </h2>

          <p className="mt-[28px] font-montserrat text-[16px] font-normal leading-[1.75] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Finding skilled cybersecurity and IT personnel is no easy feat, as
            the demand for skilled professionals in these fields continues to
            skyrocket. <span className="font-semibold text-[#000572]">Research</span>{" "}
            by the International Information System Security Certification
            Consortium (ISC2) states that 67% of organizations have a shortage
            of cybersecurity professionals. This challenge is particularly
            pressing for the DoD due to its:
          </p>

          <div className="mt-[34px] flex flex-col gap-[12px]">
            {contextPills.map((pill, index) => (
              <div
                key={index}
                className="w-fit rounded-full bg-white px-[26px] py-[12px] font-montserrat text-[14px] font-medium text-black max-[480px]:w-full max-[480px]:text-[13px]"
              >
                {pill}
              </div>
            ))}
          </div>

          <p className="mt-[28px] font-montserrat text-[16px] font-normal leading-[1.7] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
            The DoD employs 3.4M individuals under entities such as the:
          </p>

          <div className="mt-[24px] flex flex-wrap gap-[8px]">
            {branches.map((branch, index) => (
              <span
                key={index}
                className="rounded-full bg-[#000572] px-[13px] py-[8px] font-montserrat text-[12px] font-semibold text-white"
              >
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Goals Card */}
        <div className="rounded-[14px] bg-[#E6E6F1] px-[34px] py-[36px] max-[480px]:px-[22px]">
          <h2 className="font-montserrat text-[46px] font-bold leading-none text-[#000572] max-[768px]:text-[38px]">
            Goals
          </h2>

          <div className="mt-[28px] space-y-[24px] font-montserrat text-[16px] font-normal leading-[1.75] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
            <p>
              Rather than relying on conventional recruitment tactics to enhance
              its technical workforce, the DoD partnered with Correlation One to
              launch innovative cybersecurity and IT recruitment strategies such
              as:
            </p>

            <p>
              <span className="font-bold text-[#000572]">
                The Cyber Sentinel Skills Challenge:
              </span>{" "}
              Cybersecurity competitions that engage InfoSec professionals and
              improve the DoD’s employer brand.
            </p>

            <p>
              <span className="font-bold text-[#000572]">
                The U.S. Army Career Invitational:
              </span>{" "}
              Career discovery competitions that identify, educate, and recruit
              skilled individuals for opportunities with the{" "}
              <span className="font-semibold text-[#000572]">U.S. Army.</span>
            </p>

            <p>
              Through the launch of two recurring, virtual competitions
              Correlation One enables the DoD to:
            </p>

            <ul className="space-y-[15px] pt-[4px]">
              {goalPoints.map((point, index) => (
                <li key={index} className="flex gap-[10px]">
                  <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#00FE4E]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
