"use client";

// app/sections/CourseJobsSection.tsx

const jobStats = [
  {
    value: "$15 Trillion",
    label: "AI net worth by 2030",
  },
  {
    value: "$118 Billion",
    label: "AI net worth by 2030",
  },
  {
    value: "Upto $150k",
    label: "Avg annual salary",
  },
  {
    value: "97 Million",
    label: "New jobs by 2025",
  },
];

export default function CourseJobsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-[42px] pt-[24px] max-[768px]:pb-[38px] max-[768px]:pt-[28px] max-[480px]:pb-[34px]">
      <div className="mx-auto w-full max-w-[1400px] px-[86px] max-[1200px]:px-[60px] max-[1024px]:px-[36px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        <h2 className="text-center text-[31px] font-medium uppercase leading-none tracking-[1px] max-[768px]:text-[26px] max-[480px]:text-[22px] max-[480px]:leading-[1.25]">
          <span className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_34%,#006d78_63%,#07136f_100%)] bg-clip-text text-transparent">
            SECURE TOP AI & MACHINE LEARNING JOBS
          </span>
        </h2>

        <div className="mx-auto mt-[45px] grid w-full max-w-[1064px] grid-cols-4 gap-[13px] max-[1024px]:gap-[12px] max-[768px]:mt-[34px] max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-[14px]">
          {jobStats.map((item) => (
            <div
              key={item.value}
              className="relative h-[114px] overflow-hidden rounded-[16px] bg-white shadow-[0_3px_0_rgba(0,0,0,0.18),0_8px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_0_rgba(0,0,0,0.16),0_14px_26px_rgba(0,0,0,0.1)] max-[480px]:h-[106px]"
            >
              {/* Green left curved border */}
              <div className="absolute bottom-0 left-0 top-0 w-[21px] rounded-l-[16px] bg-[#00fe4e]" />
              <div className="absolute bottom-0 left-[6px] top-0 w-[22px] rounded-l-[14px] bg-white" />

              {/* Soft right fade like screenshot */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[24px] bg-gradient-to-l from-white to-transparent" />

              <div className="relative z-[2] flex h-full flex-col items-center justify-center px-[24px] text-center">
                <h3 className="text-[24px] font-medium leading-none tracking-[-0.5px] text-black max-[1024px]:text-[21px] max-[480px]:text-[22px]">
                  {item.value}
                </h3>

                <p className="mt-[11px] text-[16px] font-normal leading-[1.45] tracking-[0.1px] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
