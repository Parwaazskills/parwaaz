"use client";

// app/sections/CaseStudyResultsSection.tsx

const results = [
  <>
    Established a talent pipeline of{" "}
    <span className="font-bold text-[#000572]">14,000+</span> technical
    professionals
  </>,
  <>Increased understanding of career paths within the DoD</>,
  <>Generated excitement from candidates about joining the DoD</>,
];

export default function CaseStudyResultsSection() {
  return (
    <section className="w-full bg-white px-[86px] py-[90px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-[95px] rounded-[28px] border border-[#E6E6F1] bg-white p-[42px] shadow-[0_18px_55px_rgba(0,5,114,0.06)] max-[1100px]:gap-[55px] max-[900px]:grid-cols-1 max-[480px]:rounded-[20px] max-[480px]:p-[22px]">
        {/* Left */}
        <div>
          <h2 className="font-montserrat text-[48px] font-bold leading-none max-[768px]:text-[38px] max-[480px]:text-[30px]">
            <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
              Results
            </span>
          </h2>

          <p className="mt-[34px] max-w-[600px] font-montserrat text-[16px] font-normal leading-[1.75] text-[#202020] max-[480px]:text-[13px]">
            By partnering with Correlation One on career discovery competitions
            and skill challenges, the DoD strengthens its recruitment
            initiatives for key fields such as cybersecurity and IT.
          </p>

          <div className="mt-[30px] border-l-[7px] border-[#00FE4E] pl-[18px]">
            <div className="flex flex-col gap-[13px]">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="w-fit rounded-full bg-[#E6E6F1] px-[28px] py-[13px] font-montserrat text-[15px] font-medium leading-[1.4] text-[#111111] max-[480px]:w-full max-[480px]:rounded-[16px] max-[480px]:text-[12px]"
                >
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Quote */}
        <div className="rounded-[24px] bg-[#000572] p-[38px] text-white max-[480px]:rounded-[18px] max-[480px]:p-[24px]">
          <div className="font-montserrat text-[86px] font-bold leading-[0.65] text-[#00FE4E]">
            “
          </div>

          <p className="mt-[20px] font-montserrat text-[24px] font-medium italic leading-[1.35] text-white max-[1024px]:text-[21px] max-[480px]:text-[17px]">
            My experience with the Army Career Invitational competition was a
            turning point in my decision to pursue a new career path that allows
            me to serve. It&apos;s a great opportunity to gain insight into Army
            careers, connect with others, and expand your professional network.
          </p>

          <div className="mt-[32px] h-px w-full bg-[#00FE4E]/60" />

          <div className="mt-[22px]">
            <h3 className="font-montserrat text-[16px] font-bold text-white">
              Vaugh R.
            </h3>

            <p className="mt-[6px] font-montserrat text-[14px] font-normal text-white/75">
              U.S. Army Career Invitational participant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}