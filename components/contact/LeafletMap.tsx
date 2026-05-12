"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center text-gray-400 text-sm">
      Loading map...
    </div>
  ),
});

export default function ContactMap() {
  return (
    <>
      <style jsx>{`
        .contact-map-wrap {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
          background: #fff;
        }

        .contact-map-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 254, 78, 0.12) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
          border-radius: 50%;
        }

        .contact-map-orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 12px #00fe4e;
          animation: orbitDot 4s ease-in-out infinite;
          z-index: 10;
        }
        .contact-map-orbit-dot.d1 { top: -4px; left: 20%; animation-delay: 0s; }
        .contact-map-orbit-dot.d2 { top: 50%; right: -4px; animation-delay: 1.3s; }
        .contact-map-orbit-dot.d3 { bottom: -4px; left: 60%; animation-delay: 2.6s; }
        @keyframes orbitDot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        @media (max-width: 768px) {
          .contact-map-wrap {
            border-radius: 16px;
          }
        }
      `}</style>

      <div className="relative">
        <div className="contact-map-glow" />
        <div className="contact-map-wrap">
          <div className="contact-map-orbit-dot d1" />
          <div className="contact-map-orbit-dot d2" />
          <div className="contact-map-orbit-dot d3" />
          <LeafletMap />
        </div>
      </div>
    </>
  );
}