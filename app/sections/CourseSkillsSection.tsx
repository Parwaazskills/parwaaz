"use client";

// app/sections/CourseSkillsSection.tsx

import { Check } from "lucide-react";

const skills = [
  "Programming Fundamental",
  "Machine Learning",
  "Computer Version",
  "Generative AI",
  "Foundational Skills Certification",
  "Problem-Solving Skills",
  "Portfolio Development",
];

export default function CourseSkillsSection() {
  return (
    <section className="relative w-full bg-white pb-[48px] pt-[34px] max-[768px]:pb-[42px] max-[768px]:pt-[32px] max-[480px]:pb-[36px]">
      <div className="mx-auto w-full max-w-[1400px] px-[65px] max-[1024px]:px-[36px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        <h2 className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_36%,#006d78_64%,#07136f_100%)] bg-clip-text text-[29px] font-semibold uppercase leading-none tracking-[1px] text-transparent max-[768px]:text-[25px] max-[480px]:text-[22px] max-[480px]:leading-[1.2]">
          SKILLS YOU WILL LEARN
        </h2>

        <div className="mt-[19px] flex max-w-[1160px] flex-wrap gap-x-[19px] gap-y-[19px] max-[768px]:gap-x-[12px] max-[768px]:gap-y-[12px]">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex min-h-[42px] items-center gap-[8px] rounded-[5px] bg-[#e9eaf4] px-[12px] pr-[17px] text-[16px] font-normal leading-[1.4] tracking-[0.1px] text-black max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:py-[10px] max-[480px]:text-[13px]"
            >
              <span className="flex h-[8px] w-[8px] shrink-0 items-center justify-center rounded-full bg-[#030887] text-white">
                <Check className="h-[5px] w-[5px]" strokeWidth={4} />
              </span>

              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
