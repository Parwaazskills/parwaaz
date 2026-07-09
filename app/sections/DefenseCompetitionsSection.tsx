"use client";

// app/sections/DefenseCompetitionsSection.tsx

import Image from "next/image";

type CompetitionBlock = {
  title: string;
  image: string;
  intro: React.ReactNode;
  pills: React.ReactNode[];
  outro?: React.ReactNode;
  extraPillsTitle?: string;
  extraPills?: React.ReactNode[];
};

const competitions: CompetitionBlock[] = [
  {
    title: "The Cyber Sentinel Skills Challenge",
    image: "/case-study/cyber-sentinel.png",
    intro: (
      <>
        The{" "}
        <span className="font-semibold text-[#000572]">
          Cyber Sentinel Skills Challenge
        </span>{" "}
        was the first of the two series to launch. The Cyber Sentinel is an
        online cybersecurity competition that:
      </>
    ),
    pills: [
      <>Attracts and engages qualified industry professionals.</>,
      <>
        Educates the cybersecurity community about{" "}
        <span className="font-semibold text-[#000572]">
          career opportunities
        </span>{" "}
        with the DoD.
      </>,
      <>
        Evaluates participant skills and maps them to DoD hiring needs.
      </>,
    ],
    outro:
      "The challenge uses a Capture the Flag format where participants solve security tasks based on real-world scenarios.",
  },
  {
    title: "The U.S. Army Career Invitational",
    image: "/case-study/career-invitational.png",
    intro: (
      <>
        The U.S. Army Career Invitational uses a competition framework to
        identify, educate, and recruit skilled technical professionals.
      </>
    ),
    pills: [
      <>Create a pipeline of technical professionals ready to serve.</>,
      <>
        Assess participant skills against criteria from the{" "}
        <span className="font-semibold text-[#000572]">
          Armed Services Vocational Aptitude Battery
        </span>
        .
      </>,
      <>
        Strengthen employer brand and showcase U.S. Army career opportunities.
      </>,
    ],
    extraPillsTitle: "Each competition also includes:",
    extraPills: [
      <>
        An in-depth presentation about in-demand roles, job requirements, and
        career pathways.
      </>,
      <>A raffle where participants can win their share of cash prizes.</>,
    ],
  },
];

export default function DefenseCompetitionsSection() {
  return (
    <section className="w-full bg-white px-[86px] py-[86px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="font-montserrat text-[42px] font-bold leading-[1.15] tracking-[-0.8px] max-[1024px]:text-[36px] max-[768px]:text-[30px] max-[480px]:text-[25px]">
            <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
              Building The Future Of Defense
            </span>
          </h2>

          <p className="mx-auto mt-[18px] max-w-[980px] font-montserrat text-[15px] font-normal leading-[1.75] text-[#333333] max-[480px]:text-[13px]">
            The two competitions behind the DoD&apos;s workforce strategy,
            designed to attract skilled technologists through virtual
            competition-based events.
          </p>
        </div>

        <div className="mt-[62px] flex flex-col gap-[34px]">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="grid grid-cols-[390px_1fr] items-center gap-[46px] rounded-[28px] border border-[#E6E6F1] bg-white p-[22px] shadow-[0_18px_50px_rgba(0,5,114,0.06)] max-[1024px]:grid-cols-[330px_1fr] max-[900px]:grid-cols-1 max-[480px]:rounded-[20px] max-[480px]:p-[14px]"
            >
              <div className="relative h-[260px] w-full overflow-hidden rounded-[22px] bg-[#000572] max-[480px]:h-[220px]">
                <Image
                  src={competition.image}
                  alt={competition.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-[12px] pr-[18px] max-[900px]:pr-0">
                <h3 className="font-montserrat text-[27px] font-bold leading-[1.2] text-[#000572] max-[768px]:text-[23px]">
                  {competition.title}
                </h3>

                <p className="mt-[18px] font-montserrat text-[15px] font-normal leading-[1.75] text-[#202020] max-[480px]:text-[13px]">
                  {competition.intro}
                </p>

                <div className="mt-[22px] flex flex-wrap gap-[10px]">
                  {competition.pills.map((pill, pillIndex) => (
                    <div
                      key={pillIndex}
                      className="rounded-full bg-[#E6E6F1] px-[18px] py-[10px] font-montserrat text-[13px] font-medium leading-[1.4] text-[#111111] max-[480px]:rounded-[14px]"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                {competition.outro && (
                  <p className="mt-[22px] font-montserrat text-[15px] font-normal leading-[1.75] text-[#202020] max-[480px]:text-[13px]">
                    {competition.outro}
                  </p>
                )}

                {competition.extraPillsTitle && (
                  <p className="mt-[22px] font-montserrat text-[15px] font-semibold text-[#000572] max-[480px]:text-[13px]">
                    {competition.extraPillsTitle}
                  </p>
                )}

                {competition.extraPills && (
                  <div className="mt-[14px] flex flex-wrap gap-[10px]">
                    {competition.extraPills.map((pill, pillIndex) => (
                      <div
                        key={pillIndex}
                        className="rounded-full bg-[#E6E6F1] px-[18px] py-[10px] font-montserrat text-[13px] font-medium leading-[1.4] text-[#111111] max-[480px]:rounded-[14px]"
                      >
                        {pill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}