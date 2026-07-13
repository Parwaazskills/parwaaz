"use client";

// app/sections/CoursesSection.tsx

import Image from "next/image";
import { useState } from "react";

type Course = {
  id: number;
  provider: string;
  title: string;
  type: string;
  rating: string;
  image?: string;
};

type CourseTab = {
  name: string;
  courses: Course[];
};

const courseTabs: CourseTab[] = [
  {
    name: "New and Popular",
    courses: [
      {
        id: 1,
        provider: "Google",
        title: "Google Project Management",
        type: "Professional Certificate",
        rating: "4.8",
      },
      {
        id: 2,
        provider: "Deeplearning Ai",
        title: "AI for Everyone",
        type: "Course",
        rating: "4.8",
      },
      {
        id: 3,
        provider: "IBM",
        title: "IBM Ai Developer",
        type: "Professional Certificate",
        rating: "4.7",
      },
    ],
  },
  {
    name: "Business",
    courses: [
      {
        id: 1,
        provider: "Meta",
        title: "Marketing Analytics",
        type: "Professional Certificate",
        rating: "4.7",
      },
      {
        id: 2,
        provider: "Wharton",
        title: "Business Foundations",
        type: "Specialization",
        rating: "4.8",
      },
      {
        id: 3,
        provider: "Google",
        title: "Digital Marketing",
        type: "Certificate",
        rating: "4.6",
      },
    ],
  },
  {
    name: "Technology",
    courses: [
      {
        id: 1,
        provider: "IBM",
        title: "Full Stack Software Developer",
        type: "Professional Certificate",
        rating: "4.6",
      },
      {
        id: 2,
        provider: "Google",
        title: "Cybersecurity Certificate",
        type: "Professional Certificate",
        rating: "4.8",
      },
      {
        id: 3,
        provider: "Microsoft",
        title: "AI Fundamentals",
        type: "Course",
        rating: "4.7",
      },
    ],
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCourses = courseTabs[activeTab].courses;

  return (
    <section className="relative w-full bg-white px-[86px] pb-[70px] pt-[72px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <h2 className="text-center font-montserrat text-[48px] font-bold uppercase leading-[1.1] tracking-[2px] max-[768px]:text-[38px] max-[480px]:text-[30px]">
          <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
            Our Courses
          </span>
        </h2>

        <div className="relative mt-[42px] border-b border-[#222] max-[640px]:mt-[32px]">
          <div className="grid grid-cols-3 items-end gap-[10px]">
            {courseTabs.map((tab, index) => (
              <button
                key={tab.name}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`relative pb-[13px] text-[14px] font-bold leading-[1.3] transition-colors duration-300 max-[640px]:text-[13px] max-[420px]:text-[12px] ${
                  index === 0
                    ? "text-left"
                    : index === 1
                      ? "text-center"
                      : "text-right"
                } ${
                  activeTab === index ? "text-[#07177d]" : "text-black"
                }`}
              >
                {tab.name}

                {activeTab === index && (
                  <span
                    className={`absolute bottom-[-14px] h-0 w-0 border-l-[7px] border-r-[7px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#07177d] ${
                      index === 0
                        ? "left-[42px] max-[640px]:left-[24px]"
                        : index === 1
                          ? "left-1/2 -translate-x-1/2"
                          : "right-[42px] max-[640px]:right-[24px]"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-3 gap-[58px] max-[1100px]:gap-[34px] max-[900px]:grid-cols-1 max-[900px]:gap-[12px] max-[640px]:mt-[34px]">
          {[0, 1, 2].map((column) => (
            <div key={column} className="flex flex-col gap-[12px]">
              {activeCourses.map((course) => (
                <div
                  key={`${column}-${course.id}`}
                  className="flex min-h-[104px] items-center rounded-[4px] bg-[#f1f1f7] px-[12px] py-[12px] max-[480px]:min-h-[96px]"
                >
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[4px] bg-[#d9d9d9] max-[480px]:h-[64px] max-[480px]:w-[64px]">
                    {course.image && (
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="ml-[13px] min-w-0 flex-1">
                    <p className="flex items-center gap-[4px] text-[13px] leading-[1.3] text-black max-[480px]:text-[12px]">
                      <span className="text-[14px] font-bold text-[#4285f4]">
                        {course.provider.charAt(0)}
                      </span>
                      {course.provider}
                    </p>

                    <h4 className="mt-[4px] truncate text-[16px] font-semibold leading-[1.3] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
                      {course.title}
                    </h4>

                    <p className="mt-[4px] text-[13px] leading-[1.3] text-black max-[480px]:text-[12px]">
                      {course.type}
                    </p>
                  </div>

                  <div className="ml-[8px] flex shrink-0 items-center gap-[3px] pr-[10px] max-[480px]:pr-0">
                    <span className="text-[9px] text-[#ffb800]">★</span>
                    <span className="text-[13px] text-black max-[480px]:text-[12px]">
                      {course.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
