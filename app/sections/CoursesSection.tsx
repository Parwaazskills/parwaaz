"use client";

// app/sections/CoursesSection.tsx

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Course = {
  id: number;
  provider: string;
  title: string;
  type: string;
  rating: string;
  image?: string;
};

const tabs = ["New and Popular", "New and Popular", "New and Popular"];

const courses: Course[] = [
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
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-white px-[86px] pb-[70px] pt-[72px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
      <h2 className="text-center font-montserrat text-[48px] font-bold uppercase leading-[1.1] tracking-[2px] max-[768px]:text-[38px] max-[480px]:text-[30px]">
  <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
    Our Courses
  </span>
</h2>

        {/* Tabs */}
        <div className="relative mt-[42px] border-b border-[#222]">
          <div className="grid grid-cols-3 items-end">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative pb-[13px] text-[13px] font-bold leading-none ${
                  index === 0
                    ? "text-left"
                    : index === 1
                      ? "text-center"
                      : "text-right"
                } ${
                  activeTab === index ? "text-[#07177d]" : "text-[#a7a7a7]"
                }`}
              >
                {tab}

                {activeTab === index && (
                  <span
                    className={`absolute bottom-[-14px] h-0 w-0 border-l-[7px] border-r-[7px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#07177d] ${
                      index === 0
                        ? "left-[42px]"
                        : index === 1
                          ? "left-1/2 -translate-x-1/2"
                          : "right-[42px]"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-[40px] grid grid-cols-3 gap-[58px] max-[1100px]:gap-[34px] max-[900px]:grid-cols-1 max-[900px]:gap-[44px]">
          {[0, 1, 2].map((column) => (
            <div key={column}>
              <div className="flex flex-col gap-[12px]">
                {courses.map((course) => (
                  <div
                    key={`${column}-${course.id}`}
                    className="flex min-h-[72px] items-center rounded-[4px] bg-[#f1f1f7] px-[10px] py-[8px]"
                  >
                    <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[4px] bg-[#d9d9d9]">
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
                      <p className="flex items-center gap-[4px] text-[8px] text-[#9c9c9c]">
                        <span className="text-[10px] font-bold text-[#4285f4]">
                          G
                        </span>
                        {course.provider}
                      </p>

                      <h4 className="mt-[2px] truncate text-[12.5px] font-semibold leading-[1.15] text-[#222]">
                        {course.title}
                      </h4>

                      <p className="mt-[3px] text-[8px] text-[#9c9c9c]">
                        {course.type}
                      </p>
                    </div>

                    <div className="ml-[8px] flex items-center gap-[3px] pr-[56px] max-[1200px]:pr-[20px] max-[480px]:pr-0">
                      <span className="text-[9px] text-[#ffb800]">★</span>
                      <span className="text-[7px] text-[#9c9c9c]">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[8px] text-right">
                <Link
                  href="/courses"
                  className="text-[8px] font-semibold text-[#07177d] underline underline-offset-2"
                >
                  View all
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}