// app/sections/OurServicesIncludeSection.tsx

import Image from "next/image";

const services = [
  {
    title: (
      <>
        Applied AI
        <br />
        Learning
      </>
    ),
    description:
      "Practical AI programs designed for real-world business and workforce applications.",
  },
  {
    title: (
      <>
        Generative
        <br />
        AI Programs
      </>
    ),
    description:
      "Training pathways focused on AI productivity, content generation, and workflow transformation.",
  },
  {
    title: (
      <>
        AI for
        <br />
        Enterprise
      </>
    ),
    description:
      "AI capability development designed for teams, organizations, and operational functions.",
  },
  {
    title: (
      <>
        Emerging
        <br />
        Technology Pathways
      </>
    ),
    description:
      "Learning Programs Covering Automation, Data, Cloud, And Future Digital Systems.",
  },
];

export default function OurServicesIncludeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-[86px] pt-[18px] max-[1024px]:pb-[70px] max-[768px]:pb-[58px] max-[768px]:pt-[8px] max-[480px]:pb-[48px]">
      {/* Right orbit */}
      <div className="pointer-events-none absolute bottom-[95px] right-[-240px] z-0 h-[650px] w-[650px] opacity-[0.42] max-[1100px]:hidden">
        <Image
          src="/orbit.svg"
          alt="Decorative orbit"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1400px]">
        <h2 className="font-montserrat text-[26px] font-semibold leading-[1.15] tracking-[-0.3px] text-[#8A8A8A] max-[768px]:text-[24px] max-[480px]:text-[22px]">
          Our Services Include
        </h2>

        <div className="mt-[66px] grid grid-cols-3 gap-x-[26px] gap-y-[44px] max-[1100px]:grid-cols-2 max-[1100px]:gap-x-[22px] max-[1100px]:gap-y-[38px] max-[700px]:grid-cols-1 max-[700px]:gap-y-[32px]">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <div className="relative h-[185px] w-full overflow-hidden rounded-[18px] bg-[#000572] max-[768px]:h-[175px] max-[480px]:h-[168px]">
                <div className="absolute left-0 top-0 h-full w-[172px] max-[480px]:w-[155px]">
                  <Image
                    src="/platform-card-shape.svg"
                    alt=""
                    fill
                    priority={index < 3}
                    className="object-cover object-left"
                  />
                </div>

                <div className="relative z-[2] flex h-full items-center pl-[198px] pr-[28px] max-[1280px]:pl-[184px] max-[768px]:pl-[172px] max-[480px]:pl-[158px] max-[480px]:pr-[20px]">
                  <h3 className="font-montserrat text-[24px] font-semibold leading-[1.22] tracking-[-0.35px] text-white max-[768px]:text-[22px] max-[480px]:text-[20px]">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="mx-auto max-w-[490px] px-[14px] pt-[10px] text-center max-[480px]:max-w-full max-[480px]:px-[6px]">
                <p className="font-montserrat text-[15.5px] font-normal leading-[1.38] tracking-[0.1px] text-black max-[768px]:text-[14px] max-[480px]:text-[13px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[72px] max-[768px]:mt-[54px]">
          <h3 className="font-montserrat text-[24px] font-semibold leading-[1.25] tracking-[-0.25px] text-[#8A8A8A] max-[768px]:text-[21px] max-[480px]:text-[19px]">
            Prepare For The AI Economy
          </h3>

          <p className="mt-[18px] font-montserrat text-[18px] font-normal leading-[1.45] tracking-[0.2px] text-[#000000] max-[768px]:text-[16px] max-[480px]:text-[14px]">
            Partner With Parwaaz To Build Future-Ready AI Capability And
            Workforce Transformation Pathways.
          </p>
        </div>
      </div>
    </section>
  );
}