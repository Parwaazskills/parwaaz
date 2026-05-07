// app/sections/OurMissionSection.tsx

export default function OurMissionSection() {
  return (
    <section className="w-full bg-white px-4 py-[96px] max-[768px]:py-[70px] max-[480px]:py-[56px]">
      <div className="mx-auto w-full max-w-[1215px]">
        <h2 className="font-montserrat text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#8A8A8A] max-[480px]:text-[22px]">
          The Future of Learning Is Digital
        </h2>

        <div className="mt-[18px] max-w-[1185px] font-montserrat text-[16px] font-normal leading-[1.65] tracking-[0.2px] text-[#000000] max-[768px]:text-[14px] max-[480px]:text-[13px]">
          <p>
           As industries evolve through AI, automation, and digital transformation, organizations require learning ecosystems capable of preparing talent for rapidly changing economic and workforce demands.
          </p>

          <p className="mt-[28px]">
            Parwaaz enables enterprises, institutions, and development partners to build scalable digital learning pathways aligned with future industry needs and global standards.
          </p>
        </div>
      </div>
    </section>
  );
}