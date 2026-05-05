// app/sections/OurValuesSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const values = [
  {
    title: "CLIENT-CENTRIC APPROACH:",
    text: "Your goals are our priority, and we tailor our solutions to fit your unique needs.",
  },
  {
    title: "INNOVATION",
    text: "We bring fresh ideas, modern strategies, and forward-thinking solutions to help your business grow with confidence.",
  },
  {
    title: "INTEGRITY",
    text: "We build trust through transparency, accountability, and honest communication at every step.",
  },
];

export default function OurValuesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white pb-[42px] pt-[68px]">
      {/* Top right decorative lines image */}
      <div className="pointer-events-none absolute right-[-18px] top-[-182px] z-0 h-[286px] w-[455px] max-[768px]:hidden">
        <Image
          src="/images/who-we-are-lines.png"
          alt="Decorative circle lines"
          fill
          priority
          className="object-contain object-right-top"
        />
      </div>

      {/* Scroll To Top text/line */}
      <div className="pointer-events-none absolute right-[33px] top-[31px] z-[1] flex flex-col items-center max-[768px]:hidden">
        <span className="origin-center rotate-[-90deg] whitespace-nowrap text-[12px] font-medium text-black">
          Scroll To Top
        </span>
        <div className="mt-[56px] h-[112px] w-px bg-[#00fe4e]" />
      </div>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1158px] grid-cols-[1.08fr_0.98fr] items-start gap-[43px] px-4 max-[900px]:grid-cols-1">
        {/* Left Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[11px] max-[900px]:h-[340px] max-[480px]:h-[260px]">
          <Image
            src="/images/values-puzzle.png"
            alt="Our values"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="pt-[15px] max-[900px]:pt-0">
          <h2 className="text-[32px] font-bold uppercase leading-none tracking-[1px]">
            <span className="text-[#00fe4e]">OUR</span>{" "}
            <span className="bg-gradient-to-r from-[#008d5f] via-[#006575] to-[#071a76] bg-clip-text text-transparent">
              VALUES
            </span>
          </h2>

          <div className="mt-[32px] flex flex-col gap-[22px]">
            {values.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full rounded-[7px] bg-[#030887] px-[30px] text-left transition-all duration-300 ${
                    isOpen
                      ? "min-h-[86px] pb-[17px] pt-[28px]"
                      : "h-[60px] py-0"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <h3 className="text-[15px] font-bold uppercase leading-none tracking-[0.4px] text-[#00fe4e]">
                      {item.title}
                    </h3>

                    {isOpen ? (
                      <ChevronUp className="h-[16px] w-[16px] shrink-0 text-[#00fe4e]" />
                    ) : (
                      <ChevronDown className="h-[16px] w-[16px] shrink-0 text-[#00fe4e]" />
                    )}
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-[12px] text-[11.5px] font-light leading-[1.35] tracking-[0.1px] text-white/95">
                        <span className="mr-[6px] text-[#00fe4e]">•</span>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}