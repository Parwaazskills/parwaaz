"use client";

import Image from "next/image";
import Link from "next/link";

export default function AbtHero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-[#10161d]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abthero.png"
          alt="Technology background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/35" />

      {/* Content Wrapper */}
      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-[86px] max-[1024px]:px-[48px] max-[768px]:items-center max-[768px]:px-[26px]">
        {/* Left Content */}
        <div className="relative z-[3] max-w-[700px]">
          <h1 className="max-w-[500px] text-[48px] font-extrabold leading-[0.98] tracking-[-1.4px] text-[#00fe4e] md:text-[48px] max-[480px]:text-[38px] max-[480px]:leading-[1]">
            Where Vision
            <br />
            Meets Elevation.
          </h1>

          <p className="mt-[14px] max-w-[700px] text-[13px] font-normal leading-[1.25] tracking-[-0.1px] text-white/85 max-[480px]:max-w-[330px] max-[480px]:text-[12px]">
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
        <div className="pointer-events-none absolute right-[84px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 max-[1024px]:right-[40px] max-[1024px]:h-[390px] max-[1024px]:w-[390px] max-[768px]:right-[-90px] max-[768px]:top-[62%] max-[768px]:h-[380px] max-[768px]:w-[380px] max-[480px]:right-[-115px] max-[480px]:top-[64%] max-[480px]:h-[340px] max-[480px]:w-[340px]">
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
        }

        @media (max-width: 480px) {
          section {
            height: 680px;
          }
        }
      `}</style>
    </section>
  );
}