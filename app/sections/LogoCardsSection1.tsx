// app/sections/LogoCardsSection.tsx

"use client";

import Image from "next/image";

const logos = [
  {
    name: "Engro Corp",
    src: "/engro.png",
  },
  {
    name: "UBL",
    src: "/ubl-united-bank-limited 2.png",
  },
  {
    name: "FPCL",
    src: "/fpcl.png",
  },
  {
    name: "atlantis",
    src: "/atlantis.png",
  },
  {
    name: "americana",
    src: "/americana.png",
  },
  {
    name: "tuv",
    src: "/tuv.png",
  },
  {
    name: "asslair",
    src: "/asslair.png",
  },
  {
    name: "ibex",
    src: "/ibex.png",
  },
  {
    name: "mcc",
    src: "/mcc.png",
  },
  {
    name: "oro",
    src: "/oro.png",
  },
  {
    name: "vtt",
    src: "/vtt.png",
  },
];

const repeatedLogos = [...logos, ...logos];

export default function LogoCardsSection() {
  return (
    <section className="logo-marquee-section w-full overflow-hidden bg-white py-[64px] max-[768px]:py-[52px]">
      <div className="relative w-full overflow-hidden">
        <div className="logo-marquee-track flex w-max gap-[24px] px-4">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group relative flex h-[250px] w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white transition-transform duration-300 ease-out hover:- max-[480px]:h-[230px] max-[480px]:w-[230px]"
            >
              {/* Default border */}
              <div className="pointer-events-none absolute inset-0 rounded-[10px] border border-[#808184] opacity-100 transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover gradient border */}
              <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-[linear-gradient(120deg,rgba(0,254,78,1)_0%,rgba(0,5,114,0.5)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* White inside so gradient stays border only */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[9px] bg-white" />

              <div className="relative z-[2] h-[96px] w-[178px] max-[480px]:h-[88px] max-[480px]:w-[165px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  priority={index === 0}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .logo-marquee-track {
          animation: logo-marquee 28s linear infinite;
          will-change: transform;
        }

        @keyframes logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(calc(-50% - 12px), 0, 0);
          }
        }

        @media (max-width: 768px) {
          .logo-marquee-track {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
}