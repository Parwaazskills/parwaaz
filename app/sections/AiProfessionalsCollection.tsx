"use client";

// app/sections/AiProfessionalsCollection.tsx

import Image from "next/image";

type AiCourse = {
  provider: string;
  title: string;
  rating: string;
  image: string;
};

const courses: AiCourse[] = [
  {
    provider: "Vanderbilt University",
    title: "Prompt Engineering",
    rating: "4.8 (9k)",
    image: "/courseai profesional/chatgpt.png",
  },
  {
    provider: "Google",
    title: "Google AI",
    rating: "4.8 (9k)",
    image: "/courseai profesional/googleai.png",
  },
  {
    provider: "Microsoft",
    title: "Microsoft Copilot: Your Everyday AI Companion",
    rating: "4.8 (9k)",
    image: "/courseai profesional/copilot.png",
  },
  {
    provider: "Vanderbilt University",
    title: "Google Workspace with Gemini",
    rating: "4.8 (9k)",
    image: "/courseai profesional/gemeni.png",
  },
];

export default function AiProfessionalsCollection() {
  return (
    <section className="w-full bg-white px-[86px] py-[34px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px] rounded-t-[33px] bg-gradient-to-r from-[#000572] to-[#33368E] px-[42px] pb-[36px] pt-[66px] max-[1024px]:px-[28px] max-[768px]:px-[20px] max-[480px]:px-[14px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-montserrat text-[31px] font-bold uppercase leading-[1.25] tracking-[1.3px] text-[#00FE4E] max-[768px]:text-[26px] max-[480px]:text-[22px]">
            AI For Professionals
            <br />
            Collection
          </h2>

          <p className="mt-[14px] font-montserrat text-[12px] font-medium capitalize tracking-[0.6px] text-white/60 max-[480px]:text-[10px]">
            Harness AI To Improve The Speed, Quality, And Consistency Of Your
            Work
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[60px] grid grid-cols-4 gap-[13px] max-[1024px]:grid-cols-2 max-[768px]:mt-[42px] max-[640px]:grid-cols-1">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-t-[23px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              {/* Image */}
              <div className="relative h-[186px] w-full bg-[#d9d9d9] max-[768px]:h-[210px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="min-h-[119px] bg-white px-[22px] pb-[20px] pt-[14px]">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[18px] font-bold leading-none text-[#d2a240]">
                    V
                  </span>

                  <span className="font-montserrat text-[9px] font-medium text-[#b6b6b6]">
                    {course.provider}
                  </span>
                </div>

                <h3 className="mt-[8px] font-montserrat text-[16px] font-semibold leading-[1.12] tracking-[-0.2px] text-[#1f1f1f]">
                  {course.title}
                </h3>

                <div className="mt-[8px] flex items-center gap-[5px] font-montserrat text-[8px] text-[#b5b5b5]">
                  <span className="text-[9px] text-[#ffb800]">★</span>
                  <span>{course.rating}</span>
                  <span>Specialization</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}