"use client";

// app/sections/CourseHero.tsx

import Image from "next/image";
import Link from "next/link";

export default function CourseHero() {
  return (
    <section className="relative z-[5] mb-[70px] h-[60vh] min-h-[600px] w-full overflow-visible bg-[#07077d] pt-[135px] max-[1024px]:h-auto max-[1024px]:min-h-[600px] max-[768px]:mb-0 max-[768px]:pt-[100px] max-[768px]:pb-[70px]">
      <div className="relative z-[2] mx-auto h-full w-full max-w-[1400px] overflow-visible px-[86px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:flex max-[768px]:flex-col max-[768px]:px-[24px] max-[480px]:px-[18px]">
        {/* Left Content */}
        <div className="relative z-[3] max-w-[720px] max-[1200px]:max-w-[55%] max-[768px]:max-w-full">
          <p className="max-w-[410px] text-[15.5px] font-normal leading-[1.55] tracking-[0.1px] text-white max-[480px]:text-[13px]">
            Establish Yourself as a Transformational
            <br />
            Business Leader
          </p>

          <h1 className="mt-[7px] text-[49px] font-extrabold leading-[0.98] tracking-[-1.2px] text-[#00fe4e] max-[1024px]:text-[43px] max-[768px]:text-[42px] max-[480px]:text-[34px]">
            Accelerated
            <br />
            Management Program
          </h1>

          <p className="mt-[20px] max-w-[650px] text-[15.5px] font-normal leading-[1.58] tracking-[0.05px] text-white max-[480px]:text-[13px]">
            The Accelerated Management Program from National University of
            Singapore Business School is a 9-month live-online fast-track
            management program for professionals who want to excel in a dynamic
            business environment.
          </p>

          <div className="mt-[31px] flex items-center gap-[8px] max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[12px]">
            <Link
              href="/brochure"
              className="hero-btn inline-flex h-[44px] items-center justify-center rounded-[24px] px-7 text-[14px] font-medium no-underline sm:h-[48px] lg:px-9 max-[480px]:w-full"
            >
              Download Brochure
            </Link>

            <Link
              href="/apply"
              className="hero-btn inline-flex h-[44px] items-center justify-center rounded-[24px] px-7 text-[14px] font-medium no-underline sm:h-[48px] lg:px-9 max-[480px]:w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-[106px] top-0 z-[10] h-[430px] w-[340px] overflow-visible max-[1200px]:right-[64px] max-[1024px]:right-[42px] max-[1024px]:h-[410px] max-[1024px]:w-[315px] max-[768px]:relative max-[768px]:right-auto max-[768px]:top-auto max-[768px]:mt-[44px] max-[768px]:h-[390px] max-[768px]:w-full max-[768px]:max-w-[360px] max-[480px]:h-[320px] max-[480px]:max-w-full">
          <div className="absolute bottom-[-12px] left-[-7px] right-[-7px] top-[37px] bg-[#00fe4e]" />

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
