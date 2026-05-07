// app/sections/LearningPlatformsSection.tsx

import Image from "next/image";

const capabilities = [
  {
    title: (
      <>
        Enterprise
        <br />
        Digital Learning
      </>
    ),
    description:
      "Customized Learning Solutions Designed For Workforce Capability Development And Organizational Transformation.",
  },
  {
    title: (
      <>
        AI & Emerging
        <br />
        Technologies
      </>
    ),
    description:
      "Programs Focused On AI, Automation, Cloud, Cybersecurity, And Future Technology Adoption.",
  },
  {
    title: (
      <>
        Global Learning
        <br />
        Partnerships
      </>
    ),
    description:
      "Access To Internationally Recognized Platforms, Certifications, And Digital Learning Ecosystems.",
  },
  {
    title: (
      <>
        Workforce Upskilling
        <br />
        & Reskilling
      </>
    ),
    description:
      "Structured Pathways Designed To Strengthen Productivity, Adaptability, And Workforce Readiness",
  },
];

export default function LearningPlatformsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-[58px] pt-[8px] max-[768px]:pb-[52px] max-[768px]:pt-[24px]">
      {/* Right Orbit */}
      <div className="pointer-events-none absolute right-[-315px] top-[185px] z-0 h-[660px] w-[660px] opacity-[0.42] max-[1100px]:hidden">
        <Image
          src="/orbit.svg"
          alt="Decorative orbit"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px]">
        <h2 className="font-montserrat text-[26px] font-semibold leading-[1.2] tracking-[-0.25px] text-[#8A8A8A] max-[768px]:text-[24px] max-[480px]:text-[22px]">
          Core Capabilities
        </h2>

        <div className="mt-[25px] flex flex-col gap-[20px] max-[768px]:mt-[30px] max-[768px]:gap-[26px]">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[342px_1fr] items-center gap-[22px] max-[900px]:grid-cols-[300px_1fr] max-[768px]:grid-cols-1 max-[768px]:gap-[14px]"
            >
              <div className="flex h-[162px] w-full items-center rounded-t-[15px] bg-[#000572] px-[47px] max-[900px]:h-[150px] max-[768px]:max-w-[360px] max-[480px]:h-[140px] max-[480px]:px-[30px]">
                <h3 className="font-montserrat text-[26px] font-semibold leading-[1.14] tracking-[-0.4px] text-white max-[480px]:text-[22px]">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-[720px] font-montserrat text-[18px] font-normal leading-[1.35] tracking-[0.2px] text-[#000000] max-[1024px]:text-[16px] max-[480px]:text-[14px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[44px] pl-[18px] max-[768px]:mt-[38px] max-[768px]:pl-0">
          <h3 className="font-montserrat text-[16px] font-semibold leading-[1.3] tracking-[0.1px] text-[#8A8A8A] max-[480px]:text-[15px]">
            Let&apos;s Build Future-Ready Capability
          </h3>

          <p className="mt-[14px] font-montserrat text-[16px] font-normal leading-[1.45] tracking-[0.15px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
            Connect With Parwaaz To Explore Digital Learning, AI Capability, And
            Workforce Transformation Solutions.
          </p>
        </div>
      </div>
    </section>
  );
}