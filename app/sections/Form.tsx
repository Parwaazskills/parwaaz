"use client";

// app/sections/Form.tsx

import Link from "next/link";

export default function Form() {
  return (
    <aside className="w-full rounded-[14px] bg-white px-[39px] pb-[37px] pt-[32px] shadow-[0_5px_20px_rgba(0,0,0,0.11)] max-[1100px]:px-[30px] max-[900px]:mt-[42px] max-[480px]:px-[20px] max-[480px]:pb-[28px] max-[480px]:pt-[26px]">
      <h3 className="text-center text-[24px] font-semibold leading-none tracking-[0.2px] text-black max-[480px]:text-[21px]">
        Learn More About The Course
      </h3>

      <p className="mt-[15px] text-center text-[11.2px] font-normal leading-none tracking-[0.2px] text-black/75 max-[480px]:leading-[1.4]">
        Get Details On Syllabus, Projects, Tools And More
      </p>

      <form className="mt-[31px]">
        <input
          type="text"
          placeholder="Name"
          className="h-[65px] w-full rounded-[7px] border border-[#dedede] bg-white px-[24px] text-[11px] font-normal tracking-[0.3px] text-black outline-none transition-all duration-300 placeholder:text-[#9a9a9a] focus:border-[#00fe4e] max-[480px]:h-[56px] max-[480px]:px-[18px]"
        />

        <input
          type="email"
          placeholder="Email"
          className="mt-[20px] h-[65px] w-full rounded-[7px] border border-[#dedede] bg-white px-[24px] text-[11px] font-normal tracking-[0.3px] text-black outline-none transition-all duration-300 placeholder:text-[#9a9a9a] focus:border-[#00fe4e] max-[480px]:h-[56px] max-[480px]:px-[18px]"
        />

        <div className="mt-[19px] grid grid-cols-[0.72fr_1.88fr] gap-[11px] max-[480px]:grid-cols-1">
          <input
            type="text"
            placeholder="Code"
            className="h-[65px] w-full rounded-[7px] border border-[#dedede] bg-white px-[24px] text-[11px] font-normal tracking-[0.3px] text-black outline-none transition-all duration-300 placeholder:text-[#9a9a9a] focus:border-[#00fe4e] max-[480px]:h-[56px] max-[480px]:px-[18px]"
          />

          <input
            type="text"
            placeholder="Phone"
            className="h-[65px] w-full rounded-[7px] border border-[#dedede] bg-white px-[24px] text-[11px] font-normal tracking-[0.3px] text-black outline-none transition-all duration-300 placeholder:text-[#9a9a9a] focus:border-[#00fe4e] max-[480px]:h-[56px] max-[480px]:px-[18px]"
          />
        </div>

        <input
          type="text"
          placeholder="Company"
          className="mt-[19px] h-[66px] w-full rounded-[7px] border border-[#dedede] bg-white px-[24px] text-[11px] font-normal tracking-[0.3px] text-black outline-none transition-all duration-300 placeholder:text-[#9a9a9a] focus:border-[#00fe4e] max-[480px]:h-[56px] max-[480px]:px-[18px]"
        />

        <p className="mt-[19px] text-[11px] font-normal leading-[1.35] tracking-[0.1px] text-black/85 max-[480px]:text-[10.5px]">
          By Submitting The Form, You Consent To Our{" "}
          <Link href="/terms" className="font-bold text-[#030887]">
            Terms Of Use
          </Link>{" "}
          &{" "}
          <Link href="/privacy" className="font-bold text-[#030887]">
            Privacy Policy
          </Link>{" "}
          And To Be Contacted By Us Via Email/Call/Whatsapp/SMS.
        </p>

        <button
          type="submit"
          className="mt-[12px] flex h-[65px] w-full items-center justify-center rounded-[6px] bg-[#030887] text-[17px] font-semibold tracking-[0.2px] text-white transition-all duration-300 hover:bg-[#02066d] hover:shadow-[0_12px_28px_rgba(3,8,135,0.2)] max-[480px]:h-[58px] max-[480px]:text-[15px]"
        >
          Download Broucher
        </button>

        <p className="mt-[12px] text-center text-[14px] font-semibold leading-none tracking-[0.1px] text-black max-[480px]:text-[12px]">
          Application Closes{" "}
          <span className="text-[#030887]">30th Apr 2026</span>
        </p>
      </form>
    </aside>
  );
}