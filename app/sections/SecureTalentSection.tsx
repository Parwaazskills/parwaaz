"use client";

// app/sections/SecureTalentSection.tsx

import Image from "next/image";
import Link from "next/link";

const points = [
  "Build a robust pipeline of skilled technical professionals.",
  "Boost your employer brand to fill in-demand roles.",
  "Identify, evaluate, and hire top talent quickly.",
];

export default function SecureTalentSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[60px]">
      <div className="relative left-1/2 w-screen -translate-x-1/2 -skew-y-[0deg] overflow-hidden bg-[#000572] px-[86px] py-[82px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        {/* Left full overlay image */}
        <div className="absolute bottom-0 left-0 top-0 w-[55%] skew-y-[0deg] scale-[1.08] opacity-45 max-[900px]:w-full max-[900px]:opacity-25">
          <Image
            src="/cases.jpg"
            alt="Secure technical talent"
            fill
            className="object-cover object-center"
          />

          {/* Fade image to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000572]/45 to-[#000572]" />
        </div>

        <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] skew-y-[0deg] grid-cols-2 items-center gap-[90px] max-[1100px]:gap-[50px] max-[900px]:grid-cols-1">
          {/* Empty left column for image space */}
          <div className="min-h-[312px] max-[900px]:hidden" />

          {/* Content */}
          <div>
            <h2 className="max-w-[680px] font-montserrat text-[48px] font-bold leading-[1.05] tracking-[-1px] text-[#00FE4E] max-[1024px]:text-[40px] max-[480px]:text-[30px]">
              Secure the best
              <br />
              technical talent
            </h2>

          <p className="mt-[26px] font-montserrat text-[16px] font-semibold leading-[1.55] !text-white max-[768px]:text-[14px] max-[480px]:text-[13px]">
              Find out how Parwaaz&apos;s custom workforce development programs:
            </p>

          <ul className="mt-[24px] space-y-[9px] pl-[22px] font-montserrat text-[16px] font-medium leading-[1.55] !text-white max-[768px]:text-[14px] max-[480px]:text-[13px]">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="list-disc !text-white marker:!text-white"
                >
                  <span className="!text-white">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="hero-btn mt-[40px] inline-flex h-[44px] items-center justify-center rounded-[24px] px-7 font-montserrat text-[14px] font-medium no-underline sm:h-[48px] lg:px-9 max-[480px]:w-full"
            >
              Talk to sales →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
