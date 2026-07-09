"use client";

// app/sections/ExploreCareersSection.tsx

import Image from "next/image";
import Link from "next/link";

type Career = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

const careers: Career[] = [
  {
    id: 1,
    title: "Data Analyst",
    description:
      "A Data Analyst collects, cleans, and interprets data to provide actionable insights. They use tools like Excel, SQL, Power BI and Python to support better business decisions.",
    image: "/careers/data-analyst.jpg",
    slug: "data-analyst",
  },
  {
    id: 2,
    title: "Data Analyst",
    description:
      "A Data Analyst collects, cleans, and interprets data to provide actionable insights. They use tools like Excel, SQL, Power BI and Python to support better business decisions.",
    image: "/careers/data-analyst.jpg",
    slug: "data-analyst",
  },
  {
    id: 3,
    title: "Data Analyst",
    description:
      "A Data Analyst collects, cleans, and interprets data to provide actionable insights. They use tools like Excel, SQL, Power BI and Python to support better business decisions.",
    image: "/careers/data-analyst.jpg",
    slug: "data-analyst",
  },
];

// Just comment the above array or make it []
// and the empty state will automatically appear.

export default function ExploreCareersSection() {
  return (
    <section className="w-full bg-white px-[86px] py-[70px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-center font-montserrat text-[48px] font-bold uppercase leading-none tracking-[1px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
          <span className="inline-block bg-gradient-to-r from-[#00FE4E] to-[#000572] bg-clip-text text-transparent">
            Explore Careers
          </span>
        </h2>

        {/* Empty State */}
        {careers.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[18px] border border-dashed border-[#d7d7d7] bg-[#fafafa]">
            <h3 className="font-montserrat text-[28px] font-semibold text-[#000572]">
              No Open Positions
            </h3>

            <p className="mt-[12px] max-w-[500px] text-center font-montserrat text-[15px] leading-[1.7] text-[#707070]">
              We don't have any career opportunities available at the moment.
              Please check back later for future openings.
            </p>
          </div>
        ) : (
          <>
            {/* Cards */}
            <div className="mt-[54px] grid grid-cols-3 gap-x-[90px] gap-y-[40px] max-[1200px]:gap-x-[40px] max-[900px]:grid-cols-2 max-[768px]:grid-cols-1">
              {careers.map((career) => (
                <article key={career.id}>
                  {/* Image */}
                  <div className="relative h-[180px] w-full overflow-hidden rounded-[15px] bg-[#d9d9d9]">
                    <Image
                      src={career.image}
                      alt={career.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-[12px] pt-[14px]">
                    <h3 className="font-montserrat text-[19px] font-semibold text-[#151515]">
                      {career.title}
                    </h3>

                    <p className="mt-[10px] line-clamp-2 font-montserrat text-[13px] leading-[1.55] text-[#5b5b5b]">
                      {career.description}
                    </p>

                    <div className="mt-[14px] text-right">
                      <Link
                        href={`/careers/${career.slug}`}
                        className="font-montserrat text-[11px] font-semibold text-[#000572] underline underline-offset-2 transition hover:text-[#00b94a]"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-[60px] flex justify-center">
              <Link
                href="/careers"
                className="flex h-[58px] w-[165px] items-center justify-center rounded-[15px] bg-[#00FE4E] font-montserrat text-[18px] font-medium text-[#151515] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#00e848]"
              >
                Explore all
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}