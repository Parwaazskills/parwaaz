"use client";

// app/sections/BlogDetailSection.tsx

import Link from "next/link";

type BlogDetail = {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
};

const blog: BlogDetail = {
  title:
    "What Is the ROI of Gemini in the Enterprise? An AI Enablement Playbook for Measurable Returns",
  author: "Sham Mustafa",
  date: "July 8, 2026",
  readTime: "16 min read",
  category: "Enterprise AI Enablement",
  tags: [
    "GenAI",
    "Workforce Development",
    "Featured",
    "AI Upskilling",
    "Enterprise AI Training",
    "AI ROI",
    "Google Gemini",
  ],
};

export default function BlogDetailSection() {
  return (
    <article className="w-full bg-white px-[86px] py-[80px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[920px]">
        <div className="mb-[24px] flex flex-wrap gap-[10px]">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D7D8EA] bg-white px-[14px] py-[8px] font-montserrat text-[12px] font-bold text-[#000572]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-montserrat text-[56px] font-bold leading-[1.05] tracking-[-1.4px] text-[#000572] max-[900px]:text-[44px] max-[520px]:text-[34px]">
          {blog.title}
        </h1>

        <div className="mt-[24px] flex flex-wrap items-center gap-[14px] border-b border-[#E6E6F1] pb-[28px] font-montserrat text-[14px] text-black max-[480px]:text-[13px]">
          <span className="font-bold text-black">{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <div className="mt-[44px]">
          <div className="mb-[34px] flex items-center justify-between gap-[20px]">
            <p className="font-montserrat text-[12px] font-bold uppercase tracking-[5px] text-[#00B84A]">
              {blog.category}
            </p>

            <p className="font-montserrat text-[12px] font-bold uppercase tracking-[4px] text-[#000572]">
              {blog.readTime}
            </p>
          </div>

          <p className="font-montserrat text-[23px] font-medium italic leading-[1.65] text-black max-[520px]:text-[18px]">
            Most enterprises already own Gemini — it arrived bundled inside
            their Google Workspace agreement. Almost none can name its return.
            This is Parwaaz&apos;s playbook for converting AI capability into
            ROI.
          </p>

          <div className="my-[42px] rounded-[22px] bg-[#000572] p-[34px] shadow-[0_18px_50px_rgba(0,5,114,0.15)] max-[520px]:p-[22px]">
            <p className="mb-[12px] font-montserrat text-[11px] font-bold uppercase tracking-[4px] text-[#00FE4E]">
              The Short Answer
            </p>

            <p className="font-montserrat text-[16px] leading-[1.75] text-white max-[520px]:text-[13px]">
              <span className="font-bold text-[#00FE4E]">Curriculum:</span>{" "}
              Design around Gemini&apos;s two surfaces — the standalone web app
              and Gemini embedded inside Gmail, Docs, Sheets, and Slides.
              <br />
              <br />
              <span className="font-bold text-[#00FE4E]">ROI:</span> The real
              return comes from activating paid-for AI capability that is
              currently unused.
            </p>
          </div>

          <section className="border-t border-[#000572]/30 pt-[32px]">
            <h2 className="font-montserrat text-[34px] font-bold leading-[1.15] text-[#000572] max-[520px]:text-[26px]">
              What does an effective enterprise Gemini curriculum look like?
            </h2>

            <div className="mt-[22px] rounded-[18px] border-l-[5px] border-[#00FE4E] bg-[#E6E6F1] p-[26px]">
              <p className="font-montserrat text-[16px] leading-[1.8] text-black max-[768px]:text-[14px] max-[520px]:text-[13px]">
                <span className="font-bold text-[#000572]">
                  An effective Gemini curriculum is organized around two
                  surfaces, not one tool.
                </span>{" "}
                Gemini on the web is the open-ended collaborator. Gemini in
                Workspace is the embedded assistant for recurring business work.
              </p>
            </div>

            <p className="mt-[26px] font-montserrat text-[16px] leading-[1.9] text-black max-[768px]:text-[14px] max-[520px]:text-[13px]">
              The framing we teach in every session: Gemini on the web is your
              blue-sky collaborator; Gemini in Workspace is your capable intern.
              The web app is where you think broadly, while Workspace
              integrations are where you execute recurring work.
            </p>
          </section>

          <section className="mt-[54px] border-t border-[#000572]/30 pt-[32px]">
            <h2 className="font-montserrat text-[34px] font-bold leading-[1.15] text-[#000572] max-[520px]:text-[26px]">
              The Gemini maturity ladder
            </h2>

            <div className="mt-[28px] space-y-[24px]">
              {[
                [
                  "Stage 1 — Search-Bar Substitute",
                  "One-off questions in the web app, first answer accepted. High activity, low value.",
                ],
                [
                  "Stage 2 — Thought Partner",
                  "Iterative sessions with layered prompts, alternatives, pushback, files, and voice as inputs.",
                ],
                [
                  "Stage 3 — In-Flow Assistant",
                  "Gemini used inside Gmail, Docs, Sheets, and Slides for recurring work.",
                ],
                [
                  "Stage 4 — Workflow Redesign With Gems",
                  "Recurring tasks packaged as reusable Gems that turn prompts into repeatable team assets.",
                ],
              ].map(([title, body], index) => (
                <div key={title} className="flex gap-[18px]">
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#00FE4E] font-montserrat text-[14px] font-bold text-black">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-montserrat text-[13px] font-bold uppercase tracking-[3px] text-[#000572]">
                      {title}
                    </h3>

                    <p className="mt-[7px] font-montserrat text-[16px] leading-[1.65] text-black max-[768px]:text-[14px] max-[520px]:text-[13px]">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[54px] rounded-[24px] bg-[#000572] p-[36px] max-[520px]:p-[24px]">
            <p className="font-montserrat text-[11px] font-bold uppercase tracking-[4px] text-[#00FE4E]">
              Work With Us
            </p>

            <h2 className="mt-[12px] font-montserrat text-[32px] font-bold text-white max-[520px]:text-[25px]">
              From AI investment to AI impact
            </h2>

            <p className="mt-[16px] max-w-[680px] font-montserrat text-[16px] leading-[1.8] text-white max-[520px]:text-[13px]">
              If your organization has AI tools inside its workflow but no
              measured return, the gap is enablement.
            </p>

            <Link
              href="/contact"
              className="mt-[28px] flex h-[50px] w-[280px] items-center justify-center rounded-[10px] bg-[#00FE4E] font-montserrat text-[13px] font-bold uppercase tracking-[1.5px] text-black transition hover:scale-[1.03] max-[520px]:w-full"
            >
              Talk to our team →
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
