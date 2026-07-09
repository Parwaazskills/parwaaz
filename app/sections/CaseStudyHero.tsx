// app/sections/CaseStudyHero.tsx

export default function CaseStudyHero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#000572] px-4 py-[90px] max-[768px]:min-h-[340px] max-[768px]:py-[76px] max-[480px]:min-h-[500px] max-[480px]:py-[64px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        <h1 className="font-montserrat text-[80px] font-medium leading-[0.98] tracking-[-1.8px] text-[#00FE4E] max-[1024px]:text-[66px] max-[768px]:text-[50px] max-[520px]:text-[38px] max-[390px]:text-[32px]">
          Sourcing Technical Leaders
          <br />
          <span className="font-bold">To Safeguard National Security</span>
        </h1>

        <p className="mt-[20px] max-w-[900px] font-montserrat text-[16px] font-normal leading-[1.45] tracking-[-0.2px] text-[#ffffff] max-[768px]:mt-[18px] max-[768px]:max-w-[620px] max-[768px]:text-[16px] max-[520px]:text-[13px]">
          The demand for cybersecurity and IT talent has never been greater,
          making technical recruitment a top priority for the U.S. Department of
          Defense (DoD). To find the best technical talent, the DoD partnered
          with Correlation One to execute innovative recruitment strategies that
          attract and assess cybersecurity, IT, and engineering professionals.
        </p>
      </div>
    </section>
  );
}