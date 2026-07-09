"use client";

// app/sections/CareerGoalsSection.tsx

const goals = [
  "Start my career",
  "Change my career",
  "Grow in my\nCurrent role",
  "Grow in my\nCurrent role",
];

export default function CareerGoalsSection() {
  return (
    <section className="w-full bg-white px-[86px] py-[36px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto max-w-[1400px] rounded-[13px] bg-[#E6E6F1] px-[24px] py-[20px] max-[768px]:px-[18px] max-[768px]:py-[18px]">
        <div className="flex items-center gap-[18px] max-[1024px]:flex-wrap max-[768px]:gap-[14px]">
          <div className="flex min-w-[210px] items-center max-[1024px]:w-full">
            <h2 className="font-montserrat text-[17px] font-bold uppercase leading-[1.25] tracking-[0.2px] text-[#000572] max-[768px]:text-[15px]">
              WHAT BRINGS YOU TO
              <br />
              COURSERA TODAY?
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-4 gap-[12px] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex h-[64px] items-center gap-[14px] rounded-[10px] bg-white"
              >
                <div className="ml-[8px] h-[40px] w-[40px] shrink-0 rounded-[8px] bg-[#000572]" />

                <p className="whitespace-pre-line text-left font-montserrat text-[15px] font-medium leading-[1.1] text-[#202020]">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}