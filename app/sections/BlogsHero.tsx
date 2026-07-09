// app/sections/BlogsHero.tsx

export default function BlogsHero() {
  return (
    <section className="relative flex min-h-[660px] w-full items-center justify-center overflow-hidden bg-[#000572] px-[86px] py-[90px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:min-h-[520px] max-[768px]:px-[24px] max-[768px]:py-[90px] max-[480px]:min-h-[480px] max-[480px]:px-[18px] max-[480px]:py-[82px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        <p className="font-montserrat text-[12px] font-semibold uppercase tracking-[7px] text-[#00FE4E] max-[480px]:text-[10px] max-[480px]:tracking-[4px]">
          Thought Leadership
        </p>

        <h1 className="mt-[28px] font-montserrat text-[72px] font-medium leading-[0.98] tracking-[-1.8px] text-white max-[1024px]:text-[60px] max-[768px]:text-[48px] max-[520px]:text-[38px] max-[390px]:text-[32px]">
          Parwaaz Insights
          <br className="hidden max-[520px]:block" />{" "}
          <span className="font-bold text-[#00FE4E]">Blog</span>
        </h1>

        <p className="mt-[22px] max-w-[760px] font-montserrat text-[16px] font-normal leading-[1.55] tracking-[-0.2px] text-white max-[768px]:max-w-[620px] max-[768px]:text-[15px] max-[520px]:text-[13px]">
          Explore practical insights on AI, technology, leadership, workforce
          development, and the future of professional learning.
        </p>
      </div>
    </section>
  );
}