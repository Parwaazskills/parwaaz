"use client";

// app/sections/CourseTrustSection.tsx

const stats = [
  {
    value: "9 Months",
    label: "Program Duration",
  },
  {
    value: "Live-Online",
    label: "Program Format",
  },
  {
    value: "USD 6,000",
    label: "Program Fee",
  },
  {
    value: "June, 2026",
    label: "Next Cohort",
  },
];

const ratings = [1, 2, 3, 4];

function GoogleLogoText() {
  return (
    <span className="ml-[8px] inline-flex items-center text-[31px] font-normal leading-none tracking-[-1.4px] max-[480px]:text-[27px]">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export default function CourseTrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-[56px] pt-[33px] max-[768px]:pb-[48px] max-[768px]:pt-[40px]">
      <div className="mx-auto w-full max-w-[1400px] px-4">
        {/* Top Info Bar */}
        <div className="mx-auto flex h-[101px] w-full max-w-[800px] items-center overflow-hidden rounded-[8px] border border-[#00fe4e] border-b-[#030887] bg-white shadow-[0_1px_0_rgba(3,8,135,0.35)] max-[768px]:h-auto max-[768px]:max-w-[520px] max-[768px]:grid max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex h-[56px] flex-1 flex-col items-center justify-center px-[26px] text-center max-[768px]:h-[84px] ${
                index !== stats.length - 1
                  ? "border-r border-[#d7d7d7] max-[480px]:border-r-0 max-[480px]:border-b"
                  : ""
              } ${
                index === 1
                  ? "max-[768px]:border-r-0"
                  : ""
              } ${
                index < 2
                  ? "max-[768px]:border-b max-[480px]:border-b"
                  : ""
              }`}
            >
              <h3 className="text-[16px] font-medium leading-[1.3] tracking-[0.1px] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
                {item.value}
              </h3>

              <p className="mt-[8px] text-[14px] font-normal leading-[1.3] tracking-[0.1px] text-black max-[480px]:text-[13px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="mt-[76px] text-center text-[34px] font-medium uppercase leading-none tracking-[1.1px] max-[768px]:mt-[56px] max-[768px]:text-[28px] max-[480px]:text-[24px] max-[480px]:leading-[1.2]">
          <span className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_38%,#006d78_68%,#07136f_100%)] bg-clip-text text-transparent">
            TRUSTED BY MILLIONS OF LEARNERS
          </span>
        </h2>

        {/* Rating Cards */}
        <div className="mx-auto mt-[34px] grid w-full max-w-[976px] grid-cols-4 gap-[29px] max-[1024px]:max-w-[850px] max-[1024px]:gap-[20px] max-[768px]:grid-cols-2 max-[768px]:max-w-[560px] max-[480px]:grid-cols-1 max-[480px]:gap-[16px]">
          {ratings.map((item) => (
            <div
              key={item}
              className="flex h-[88px] items-center justify-center rounded-[8px] border border-[#00fe4e] border-b-[#030887] bg-white shadow-[0_1px_0_rgba(3,8,135,0.28)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(3,8,135,0.08)]"
            >
              <div className="flex items-center justify-center">
                <span className="text-[22px] font-normal leading-none tracking-[-0.8px] text-black max-[480px]:text-[21px]">
                  4.6
                </span>

                <span className="ml-[10px] text-[34px] leading-none text-[#FFD400] drop-shadow-[0_1px_0_rgba(0,0,0,0.18)] max-[480px]:text-[31px]">
                  ★
                </span>

                <GoogleLogoText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
