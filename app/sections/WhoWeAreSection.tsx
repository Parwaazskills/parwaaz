// app/sections/WhoWeAreSection.tsx

import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-[60px] pt-[92px] max-[1024px]:pt-[78px] max-[768px]:pb-[70px] max-[768px]:pt-[64px]">
      {/* Right side circle lines image */}
      <div className="pointer-events-none absolute right-0 top-[282px] z-0 h-[760px] w-[470px] max-[768px]:hidden">
        <Image
          src="/images/who-we-are-lines.png"
          alt="Decorative circle lines"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1125px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[58px] font-light leading-none tracking-[5px] max-[768px]:text-[42px] max-[768px]:tracking-[3px] max-[480px]:text-[34px] max-[480px]:tracking-[2px]">
            <span className="text-[#00fe4e]">WHO</span>{" "}
            <span className="bg-gradient-to-r from-[#00a95a] via-[#006b78] to-[#0a1f87] bg-clip-text text-transparent">
              WE ARE
            </span>
          </h2>

          <p className="mx-auto mt-[15px] max-w-[930px] text-[21px] font-light leading-[1.22] tracking-[0.2px] text-[#878787] max-[768px]:text-[16px] max-[480px]:text-[14px] max-[480px]:leading-[1.45]">
            At Parwaaz, we are dedicated to driving growth and transformation
            for businesses in Pakistan, the Middle East, Saudi Arabia and
            beyond. With specialised expertise in international placements,
            payroll outsourcing, facilities management, ed-tech, content
            development, technology management, and design solutions, we bridge
            the gap between ambition and achievement.
          </p>
        </div>

        {/* Top Row */}
        <div className="mt-[96px] grid grid-cols-[1.42fr_0.98fr] items-stretch gap-[16px] max-[768px]:mt-[55px] max-[768px]:grid-cols-1">
          {/* Mission Card */}
          <div className="relative h-[232px] overflow-hidden rounded-[19px] bg-[#030887] px-[38px] pb-[34px] pt-[80px] max-[480px]:h-auto max-[480px]:min-h-[260px] max-[480px]:px-[24px] max-[480px]:pt-[86px]">
            <div className="pointer-events-none absolute inset-0 rounded-[19px] border-l border-t border-[#00fe4e]/90" />

            <Image
              src="/images/mission-icon.png"
              alt="Mission icon"
              width={88}
              height={88}
              className="absolute right-[38px] top-[30px] h-[88px] w-[88px] object-contain max-[480px]:right-[22px] max-[480px]:top-[22px] max-[480px]:h-[62px] max-[480px]:w-[62px]"
            />

            <h3 className="text-[31px] font-bold leading-none tracking-[0.5px] text-[#00fe4e] max-[480px]:text-[26px]">
              OUR MISSION
            </h3>

            <p className="mt-[16px] max-w-[575px] text-[11.4px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
              Our mission is to empower companies with the tools, talent, and
              creative strategies needed to stay competitive in an ever-evolving
              market. Whether it&apos;s sourcing top talent, enhancing employee
              learning, managing employee payrolls or delivering cutting-edge
              design services, we are committed to delivering results that make
              an impact.
            </p>
          </div>

          {/* Top Image Card */}
          <div className="relative h-[232px] overflow-hidden rounded-[19px]">
            <Image
              src="/images/who-we-are-card.png"
              alt="Who we are visual"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-[100px] grid grid-cols-[0.98fr_1.42fr] items-stretch gap-[16px] max-[768px]:mt-[28px] max-[768px]:grid-cols-1">
          {/* Bottom Image Card */}
          <div className="relative h-[234px] overflow-hidden rounded-[19px] max-[768px]:order-2">
            <Image
              src="/images/who-we-are-card.png"
              alt="Technology visual"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* What Sets Us Apart Card */}
          <div className="relative h-[234px] overflow-hidden rounded-[19px] bg-[#030887] px-[38px] pb-[34px] pt-[88px] max-[768px]:order-1 max-[480px]:h-auto max-[480px]:min-h-[265px] max-[480px]:px-[24px] max-[480px]:pt-[92px]">
            <div className="pointer-events-none absolute inset-0 rounded-[19px] border-l border-t border-[#00fe4e]/90" />

            <Image
              src="/images/sets-apart-icon.png"
              alt="Sets apart icon"
              width={92}
              height={92}
              className="absolute right-[38px] top-[25px] h-[92px] w-[92px] object-contain max-[480px]:right-[22px] max-[480px]:top-[22px] max-[480px]:h-[66px] max-[480px]:w-[66px]"
            />

            <h3 className="text-[31px] font-bold uppercase leading-none tracking-[0.5px] text-[#00fe4e] max-[480px]:text-[25px]">
              WHAT SETS US APART
            </h3>

            <p className="mt-[16px] max-w-[590px] text-[11.4px] font-light leading-[1.8] tracking-[0.08px] text-white/90 max-[480px]:text-[11px]">
              Our strength lies in our unique ability to blend global
              perspectives with local expertise. With a deep understanding of
              the South Asian and EMEA region&apos;s business landscape, we
              offer solutions that are not only innovative but also culturally
              aligned and strategically sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}