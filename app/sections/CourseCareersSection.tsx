"use client";

// app/sections/CourseCareersSection.tsx

const leftCareers = [
  "Ai Engineer",
  "Ai Research Scientist",
  "Big Data Engineer",
  "Deep Learning Engineer",
  "Computer Version Engineer",
];

const rightCareers = [
  "Machine Learning Engineer",
  "Prompt Engineer",
  "NLP Engineer",
  "Business Intelligence Engineer",
  "AI Consultant",
];

export default function CourseCareersSection() {
  return (
    <section className="relative w-full bg-white pb-[54px] pt-[18px] max-[768px]:pb-[46px] max-[768px]:pt-[8px] max-[480px]:pb-[38px]">
      <div className="mx-auto w-full max-w-[1400px] px-[100px] max-[1200px]:px-[70px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        <div className="mx-auto min-h-[417px] w-full max-w-[1160px] rounded-[18px] bg-white px-[88px] pb-[58px] pt-[48px] shadow-[0_3px_0_rgba(0,0,0,0.18),0_0_22px_rgba(0,0,0,0.04)] max-[1024px]:px-[56px] max-[768px]:min-h-0 max-[768px]:px-[34px] max-[768px]:pb-[42px] max-[768px]:pt-[38px] max-[480px]:rounded-[14px] max-[480px]:px-[22px] max-[480px]:pb-[34px] max-[480px]:pt-[32px]">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold uppercase leading-none tracking-[0.7px] text-[#030887] max-[768px]:text-[25px] max-[480px]:text-[22px] max-[480px]:leading-[1.25]">
              CAREERS IN AI AND ML
            </h2>

            <p className="mt-[18px] text-[12px] font-normal leading-none tracking-[0.35px] text-black/80 max-[480px]:text-[11px] max-[480px]:leading-[1.45]">
              Here Are The Ideal Jobs Roles In AI Sought After By Companies In
              India
            </p>
          </div>

          <div className="mt-[63px] grid grid-cols-2 gap-[88px] max-[900px]:gap-[50px] max-[640px]:mt-[42px] max-[640px]:grid-cols-1 max-[640px]:gap-[0px]">
            <ul className="space-y-[26px] max-[640px]:space-y-[20px]">
              {leftCareers.map((career) => (
                <li
                  key={career}
                  className="flex items-start gap-[12px] text-[16.5px] font-normal leading-[1.2] tracking-[0.05px] text-black max-[768px]:text-[15px] max-[480px]:text-[14px]"
                >
                  <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-black" />
                  <span>{career}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-[26px] max-[640px]:mt-[20px] max-[640px]:space-y-[20px]">
              {rightCareers.map((career) => (
                <li
                  key={career}
                  className="flex items-start gap-[12px] text-[16.5px] font-normal leading-[1.2] tracking-[0.05px] text-black max-[768px]:text-[15px] max-[480px]:text-[14px]"
                >
                  <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-black" />
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}