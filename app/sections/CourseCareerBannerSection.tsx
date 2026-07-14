"use client";

// app/sections/CourseCareerBannerSection.tsx

import Image from "next/image";
import Link from "next/link";

export default function CourseCareerBannerSection() {
  return (
    <section className="relative w-full bg-white pb-[54px] pt-[24px] max-[768px]:pb-[46px] max-[768px]:pt-[16px] max-[480px]:pb-[38px]">
      <div className="mx-auto w-full max-w-[1400px] px-[150px] max-[1200px]:px-[90px] max-[1024px]:px-[50px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
        <div className="relative mx-auto h-[348px] w-full max-w-[1104px] overflow-visible rounded-[18px] max-[1024px]:h-[330px] max-[768px]:h-[590px] max-[480px]:h-[550px] max-[390px]:h-[520px]">
          {/* Green Banner Background */}
          <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-[#d8ffd5]">
            <Image
              src="/careerbanner.png"
              alt="Career banner background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1104px"
              className="object-cover object-center"
            />
          </div>

          {/* Left Content */}
          <div className="relative z-[3] flex h-full max-w-[590px] flex-col justify-center pl-[92px] pt-[4px] max-[1024px]:pl-[58px] max-[768px]:h-auto max-[768px]:max-w-full max-[768px]:items-center max-[768px]:justify-start max-[768px]:px-[34px] max-[768px]:pt-[46px] max-[768px]:text-center max-[480px]:px-[24px] max-[480px]:pt-[38px] max-[390px]:px-[20px] max-[390px]:pt-[32px]">
            <h2 className="bg-[linear-gradient(90deg,#00fe4e_0%,#00b961_35%,#006d78_68%,#07136f_100%)] bg-clip-text text-[37px] font-semibold uppercase leading-[1.18] tracking-[0.7px] text-transparent max-[1024px]:text-[34px] max-[768px]:text-center max-[768px]:text-[31px] max-[480px]:text-[27px] max-[390px]:text-[23px]">
              START, SWITCH, OR
              <br />
              ADVANCE YOUR CAREER
            </h2>

            <p className="mt-[28px] text-[16px] font-normal leading-[1.6] tracking-[0.1px] text-black max-[768px]:mt-[22px] max-[768px]:text-center max-[768px]:text-[14px] max-[480px]:mt-[18px] max-[480px]:text-[13px] max-[390px]:text-[12px]">
              Grow with courses from top organizations
            </p>

            <Link
              href="/courses"
              className="hero-btn mt-[35px] inline-flex h-[44px] w-[190px] items-center justify-center rounded-[24px] px-7 text-[14px] font-medium no-underline sm:h-[48px] max-[768px]:mt-[26px] max-[480px]:mt-[22px] max-[480px]:h-[44px] max-[480px]:w-[170px] max-[390px]:w-[155px] max-[390px]:text-[13px]"
            >
              Join for free
            </Link>
          </div>

          {/* Right Person Image */}
          <div className="absolute bottom-0 right-[86px] z-[4] h-[430px] w-[330px] overflow-hidden max-[1100px]:right-[45px] max-[1024px]:h-[405px] max-[1024px]:w-[310px] max-[768px]:left-1/2 max-[768px]:right-auto max-[768px]:h-[320px] max-[768px]:w-[245px] max-[768px]:-translate-x-1/2 max-[480px]:h-[285px] max-[480px]:w-[220px] max-[390px]:h-[260px] max-[390px]:w-[200px]">
            <Image
              src="/careerbannerhuman.png"
              alt="Student holding laptop"
              fill
              priority
              sizes="(max-width: 390px) 200px, (max-width: 480px) 220px, (max-width: 768px) 245px, 330px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-[41px] flex justify-center gap-[4px] max-[768px]:mt-[34px] max-[480px]:mt-[28px]">
          <span className="h-[6px] w-[49px] rounded-full bg-[#030887]" />
          <span className="h-[6px] w-[26px] rounded-full bg-[#d7d7d7]" />
          <span className="h-[6px] w-[13px] rounded-full bg-[#d7d7d7]" />
          <span className="h-[6px] w-[13px] rounded-full bg-[#d7d7d7]" />
        </div>
      </div>
    </section>
  );
}