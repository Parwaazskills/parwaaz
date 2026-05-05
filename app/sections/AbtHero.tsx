"use client";

import Image from "next/image";
import Link from "next/link";

export default function AbtHero() {
  return (
    <section className="relative h-[512px] w-full overflow-hidden bg-[#10161d]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abtglobe.png"
          alt="Technology background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/35" />

      {/* Content Wrapper */}
      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1154px] items-center justify-between px-[86px]">
        {/* Left Content */}
        <div className="mt-[8px] max-w-[520px]">
          <h1 className="max-w-[500px] text-[48px] font-extrabold leading-[0.98] tracking-[-1.4px] text-[#00fe4e] md:text-[48px]">
            Where Vision
            <br />
            Meets Elevation.
          </h1>

          <p className="mt-[14px] max-w-[455px] text-[13px] font-normal leading-[1.25] tracking-[-0.1px] text-white/85">
            Parwaaz is built on the foundation of creativity, strategy, and
            innovation. We partner with forward-thinking brands to design
            impactful solutions that drive growth, strengthen identity, and
            unlock new oppo
          </p>

          <div className="mt-[21px] flex items-center gap-[16px]">
            <Link
              href="/services"
              className="flex h-[38px] w-[132px] items-center justify-center rounded-[14px] bg-[#00fe4e] text-[12px] font-medium text-[#07140d] shadow-[0_8px_18px_rgba(0,254,78,0.22)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#00e948]"
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className="flex h-[40px] w-[134px] items-center justify-center rounded-[14px] border border-black/10 bg-white text-[12px] font-medium text-[#2b2f35] shadow-[0_8px_18px_rgba(255,255,255,0.14)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Rotating Orb */}
        <div className="pointer-events-none absolute right-[84px] top-[28px] h-[450px] w-[450px]">
          <div className="relative h-full w-full animate-orbRotate">
            <Image
              src="/abtglobe.png"
              alt="Rotating purple 3D orb"
              fill
              priority
              className="object-contain drop-shadow-[0_0_35px_rgba(111,55,255,0.75)]"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-orbRotate {
          animation: orbRotate 18s linear infinite;
          transform-origin: center;
          will-change: transform;
        }

        @media (max-width: 1024px) {
          section {
            height: 560px;
          }
        }

        @media (max-width: 768px) {
          section {
            height: 720px;
          }

          div[class*="max-w-[1154px]"] {
            padding-left: 26px;
            padding-right: 26px;
            align-items: flex-start;
            padding-top: 95px;
          }

          div[class*="right-[84px]"] {
            right: -90px;
            top: 300px;
            height: 380px;
            width: 380px;
          }

          h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 480px) {
          section {
            height: 680px;
          }

          h1 {
            font-size: 38px;
            line-height: 1;
          }

          p {
            max-width: 330px;
            font-size: 12px;
          }

          div[class*="right-[84px]"] {
            right: -115px;
            top: 330px;
            height: 340px;
            width: 340px;
          }
        }
      `}</style>
    </section>
  );
}