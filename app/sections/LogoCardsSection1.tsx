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
];

export default function LogoCardsSection() {
  return (
    <section className="w-full bg-white px-4 py-[64px] max-[768px]:py-[52px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid w-fit grid-cols-[250px_250px_250px] gap-[24px] max-[900px]:grid-cols-[250px_250px] max-[640px]:mx-auto max-[640px]:grid-cols-[250px]">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="group relative flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-[10px] bg-white transition-transform duration-300 ease-out hover:-translate-y-[3px] max-[480px]:h-[230px] max-[480px]:w-[230px]"
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
    </section>
  );
}