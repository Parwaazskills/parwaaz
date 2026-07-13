"use client";

// app/sections/CourseCareerBannerSection.tsx

import Image from "next/image";
import Link from "next/link";

export default function CourseCareerBannerSection() {
  return (
    <section className="relative w-full bg-white pb-[54px] pt-[24px] max-[768px]:pb-[46px] max-[768px]:pt-[16px] max-[480px]:pb-[38px]">
      <div className="mx-auto w-full max-w-[1400px] px-[150px] max-[1200px]:px-[90px] max-[1024px]:px-[50px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        <div className="relative mx-auto h-[348px] w-full max-w-[1104px] overflow-visible rounded-[18px] max-[1024px]:h-[330px] max-[768px]:h-auto max-[768px]:min-h-[500px] max-[480px]:min-h-[470px]">
          {/* Green Banner Background */}
          <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-[#d8ffd5]">
            <Image
              src="/careerbanner.png"
              alt="Career banner background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Left Content */}
          <div className="relative z-[3] flex h-full max-w-[590px] flex-col justify-center pl-[92px] pt-[4px] max-[1024px]:pl-[58px] max-[768px]:h-auto max-[768px]:max-w-full max-[768px]:justify-start max-[768px]:px-[34px] max-[768px]:pb-[230px] max-[768px]:pt-[52px] max-[480px]:px-[24px] max-[480px]:pb-[220px] max-[480px]:pt-[42px]">
            <h2 className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_35%,#006d78_68%,#07136f_100%)] bg-clip-text text-[37px] font-semibold uppercase leading-[1.18] tracking-[0.7px] text-transparent max-[1024px]:text-[34px] max-[768px]:text-[32px] max-[480px]:text-[27px] max-[390px]:text-[24px]">
              START, SWITCH, OR
              <br />
              ADVANCE YOUR CAREER
            </h2>

            <p className="mt-[28px] text-[15px] font-normal leading-none tracking-[0.1px] text-black max-[480px]:mt-[22px] max-[480px]:text-[13px]">
              Grow with courses from top organizations
            </p>

            <Link
              href="/courses"
              className="hero-btn mt-[35px] inline-flex h-[44px] items-center justify-center rounded-[24px] px-7 text-[14px] font-medium no-underline sm:h-[48px] lg:px-9 max-[480px]:mt-[28px]"
            >
              Join for free
            </Link>
          </div>

          {/* Right Person Image - out from top, clipped from bottom by banner */}
          <div className="absolute bottom-0 right-[86px] z-[4] h-[430px] w-[330px] overflow-hidden max-[1100px]:right-[45px] max-[1024px]:h-[405px] max-[1024px]:w-[310px] max-[768px]:right-[24px] max-[768px]:h-[335px] max-[768px]:w-[255px] max-[480px]:right-[6px] max-[480px]:h-[300px] max-[480px]:w-[230px]">
            <Image
              src="/careerbannerhuman.png"
              alt="Student holding laptop"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-[41px] flex justify-center gap-[4px] max-[768px]:mt-[34px]">
          <span className="h-[6px] w-[49px] rounded-full bg-[#030887]" />
          <span className="h-[6px] w-[26px] rounded-full bg-[#d7d7d7]" />
          <span className="h-[6px] w-[13px] rounded-full bg-[#d7d7d7]" />
          <span className="h-[6px] w-[13px] rounded-full bg-[#d7d7d7]" />
        </div>
      </div>
    </section>
  );
}
