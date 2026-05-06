"use client";

// app/sections/CourseHero.tsx

import Image from "next/image";
import Link from "next/link";

export default function CourseHero() {
  return (
    <section className="relative h-[457px] w-full overflow-hidden bg-white max-[1024px]:h-[560px] max-[768px]:h-auto max-[768px]:overflow-visible">
      {/* Blue Background */}
      <div className="absolute left-0 top-0 h-[407px] w-full bg-[#07077d] max-[1024px]:h-[500px] max-[768px]:h-full" />

      {/* Content Wrapper */}
      <div className="relative z-[2] mx-auto h-full w-full max-w-[1400px] px-[86px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:flex max-[768px]:flex-col max-[768px]:px-[24px] max-[768px]:pb-[52px] max-[768px]:pt-[44px] max-[480px]:px-[18px]">
        {/* Left Content */}
        <div className="relative z-[3] pt-[25px] max-[768px]:pt-0">
          <p className="max-w-[410px] text-[15.5px] font-normal leading-[1.55] tracking-[0.1px] text-white max-[768px]:max-w-full max-[480px]:text-[13px]">
            Establish Yourself as a Transformational
            <br className="max-[480px]:hidden" />
            Business Leader
          </p>

          <h1 className="mt-[7px] max-w-[680px] text-[49px] font-extrabold leading-[0.98] tracking-[-1.2px] text-[#00fe4e] max-[1024px]:max-w-[560px] max-[1024px]:text-[43px] max-[768px]:max-w-full max-[768px]:text-[42px] max-[480px]:text-[34px]">
            Accelerated
            <br />
            Management Program
          </h1>

          <p className="mt-[20px] max-w-[650px] text-[15.5px] font-normal leading-[1.58] tracking-[0.05px] text-white max-[1024px]:max-w-[530px] max-[768px]:max-w-full max-[480px]:text-[13px] max-[480px]:leading-[1.65]">
            The Accelerated Management Program from National University of
            Singapore Business School is a 9-month live-online fast-track
            management program for professionals who want to excel in a dynamic
            business environment.
          </p>

          <div className="mt-[31px] flex items-center gap-[8px] max-[480px]:mt-[26px] max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[12px]">
            <Link
              href="/brochure"
              className="flex h-[40px] w-[162px] items-center justify-center rounded-[14px] bg-[#00fe4e] text-[12px] font-normal text-[#07140d] shadow-[0_8px_18px_rgba(0,254,78,0.2)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#00e948] max-[480px]:w-full"
            >
              Download Brochure
            </Link>

            <Link
              href="/apply"
              className="flex h-[42px] w-[162px] items-center justify-center rounded-[14px] border border-black/10 bg-white text-[12px] font-normal text-[#2b2f35] shadow-[0_8px_18px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5] max-[480px]:w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-[106px] top-[26px] z-[2] h-[421px] w-[340px] max-[1200px]:right-[64px] max-[1024px]:right-[42px] max-[1024px]:top-[74px] max-[1024px]:h-[390px] max-[1024px]:w-[315px] max-[768px]:relative max-[768px]:right-auto max-[768px]:top-auto max-[768px]:mt-[44px] max-[768px]:h-[390px] max-[768px]:w-full max-[768px]:max-w-[360px] max-[480px]:h-[320px] max-[480px]:max-w-full">
          {/* Green offset frame */}
          <div className="absolute bottom-[-10px] left-[-7px] right-[-7px] top-[37px] bg-[#00fe4e] max-[768px]:bottom-[-8px] max-[768px]:left-[-6px] max-[768px]:right-[-6px] max-[768px]:top-[34px]" />

          {/* Image */}
          <div className="relative h-full w-full overflow-hidden rounded-t-[17px] bg-[#d9d9d9]">
            <Image
              src="/coursehero.png"
              alt="Accelerated Management Program"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}