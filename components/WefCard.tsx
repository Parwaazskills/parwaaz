"use client";

export default function WefCard() {
  return (
    <>
      <style jsx global>{`
        .wef-card {
          position: relative;
          background: #f8f8f8;
          border-radius: 8px;
          isolation: isolate;
        }
        @media (max-width: 768px) {
          .wef-card {
            flex-direction: column !important;
            gap: 14px !important;
            padding: 22px !important;
            text-align: center;
            max-width: 350px !important;
            margin-inline: auto !important;
          }
          .wef-card > div:first-child { width: auto !important; }
          .wef-card img { height: 82px !important; }
          .wef-card p { font-size: 14px !important; line-height: 1.5 !important; }
        }
        .wef-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .wef-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: conic-gradient(
            from var(--wef-angle, 0deg),
            transparent 0%,
            transparent 60%,
            rgba(0, 254, 78, 0.4) 75%,
            #00fe4e 85%,
            rgba(0, 254, 78, 0.4) 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s ease;
          filter: drop-shadow(0 0 6px rgba(0, 254, 78, 0.6));
        }
        @property --wef-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes wefBorderTravel {
          to { --wef-angle: 360deg; }
        }
        .wef-card:hover::after {
          opacity: 1;
          animation: wefBorderTravel 2.4s linear infinite;
        }
        @supports not (background: conic-gradient(from 0deg, red, blue)) {
          .wef-card::after { display: none; }
        }
      `}</style>

      <section data-reveal="up" className="mt-[64px] mx-auto w-full max-w-[1410px] px-4 sm:px-6 lg:px-0">
        <div className="wef-card mx-auto flex min-h-[150px] w-full max-w-[1120px] items-center gap-[42px] rounded-[8px] bg-[#f8f8f8] px-[54px] py-[28px]">
          <div className="flex w-[290px] shrink-0 items-center justify-center">
            <img
              src="/wef-logo.png"
              alt="World Economic Forum"
              className="h-[118px] w-auto object-contain"
            />
          </div>
          <p className="max-w-[740px] text-[24px] font-light leading-[1.28] tracking-[-0.02em] text-[#8c8c93]">
            Closing the Skills Gap in Pakistan, Parwaaz is the exclusive partner for the World Economic Forum in Pakistan
          </p>
        </div>
      </section>
    </>
  );
}