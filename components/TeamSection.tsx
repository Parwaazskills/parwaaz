"use client";

import { teamMembers } from "@/data/teamMembers";
import { LinkedInSvg } from "@/components/SocialIcons";

export default function TeamSection() {
  return (
    <>
      <style jsx global>{`
        .team-section {
          position: relative;
          overflow: hidden;
          background: #fff;
          padding: 56px 0;
        }
        @media (min-width: 1024px) { .team-section { padding: 80px 0; } }
        .team-bg-circuit {
          position: absolute;
          right: 2%;
          top: 50%;
          transform: translateY(-50%);
          width: 160px;
          height: 380px;
          pointer-events: none;
          opacity: 0.55;
          z-index: 1;
        }
        .team-bg-circuit svg { width: 100%; height: 100%; }
        @media (max-width: 1023px) { .team-bg-circuit { display: none; } }
        .team-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(36px, 6.5vw, 72px);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1;
          margin: 0;
          text-transform: uppercase;
        }
        .team-row {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 32px;
          align-items: start;
        }
        .team-btn-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
        }
        .team-neptune-wrap {
          position: absolute;
          left: -200px;
          top: 50%;
          transform: translateY(-50%);
          width: 760px;
          height: 760px;
          pointer-events: none;
          z-index: 1;
        }
        .team-neptune-wrap img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translate(-50%, -50%);
          transform-origin: 50% 50%;
          animation: teamSphereRotate 60s linear infinite;
          will-change: transform;
          opacity: 0.85;
        }
        .team-neptune-btn {
          position: absolute;
          left: calc(-200px + 380px);
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
        }
        @keyframes teamSphereRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .team-neptune-wrap img { animation: none; }
        }
        .team-about-btn {
          position: relative;
          z-index: 5;
          height: 48px;
          padding: 0 32px;
          border-radius: 24px;
          background: #00fe4e;
          color: #000;
          font-size: 15px;
          font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,254,78,0.35), 0 0 0 6px rgba(0,254,78,0.12);
          transition: transform 0.25s, box-shadow 0.25s;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }
        .team-about-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0,254,78,0.5), 0 0 0 8px rgba(0,254,78,0.18);
        }
        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .team-cards-col { position: relative; z-index: 10; grid-column: 2; }
        .team-card { display: flex; flex-direction: column; align-items: stretch; height: 100%; }
        .team-card-role {
          min-height: 60px;
          margin-top: 12px;
          font-size: 11px;
          line-height: 1.35;
          color: #000;
          text-align: center;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 0 4px;
        }
        .team-card-name {
          margin-top: 4px;
          font-size: 14px;
          font-weight: 700;
          color: #00b95a;
          text-align: center;
          letter-spacing: 0.02em;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2px;
        }
        @media (min-width: 1024px) { .team-card-name { font-size: 16px; } }
        .team-card-linkedin {
          margin: auto auto 0;
          display: flex;
          height: 28px;
          width: 28px;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #0077b5;
          color: #fff;
        }
        .team-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.4;
          overflow: hidden;
          border-radius: 6px;
          background: #f0f0f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.35s, box-shadow 0.35s;
        }
        .team-photo-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }
        .team-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @media (max-width: 1023px) {
          .team-row { grid-template-columns: 1fr; gap: 24px; }
          .team-cards-col { grid-column: 1; }
          .team-neptune-wrap { width: 480px; height: 480px; left: 0; right: auto; top: 20%; }
          .team-neptune-btn { left: 240px; top: 20%; }
          .team-cards-grid { grid-template-columns: repeat(4, 1fr); gap: 14px; }
        }
        @media (max-width: 768px) {
          .team-section { padding: 0 !important; }
          .team-row { padding-top: 270px !important; }
          .team-card-role { min-height: 50px !important; font-size: 10px !important; }
          .team-card-name { min-height: 36px !important; font-size: 12px !important; }
          .team-photo-frame { aspect-ratio: 1 / 1 !important; }
          .team-neptune-wrap {
            width: 350px !important;
            height: 350px !important;
            left: -90px !important;
            top: -50px !important;
            transform: none !important;
            opacity: 0.85 !important;
          }
          .team-neptune-btn {
            position: absolute !important;
            left: 100px !important;
            top: 180px !important;
            transform: translate(-50%, -50%) !important;
            margin-bottom: 0 !important;
            z-index: 10 !important;
          }
        }
        @media (max-width: 480px) { .team-cards-grid { gap: 12px; } }
      `}</style>

      <section className="team-section">
        <div className="team-neptune-wrap" aria-hidden="true">
          <img src="/neptune.svg" alt="" />
        </div>
        <div data-reveal="zoom" className="team-neptune-btn">
          <button className="team-about-btn">About Team</button>
        </div>
        <div className="team-bg-circuit">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="180" cy="40" r="6" fill="#00fe4e" />
            <path d="M180 40 L100 40 L100 120 L60 120" stroke="#00fe4e" strokeWidth="1.5" />
            <circle cx="60" cy="120" r="4" fill="#00fe4e" />
            <path d="M180 40 L180 200 L120 200" stroke="#00fe4e" strokeWidth="1.5" />
            <circle cx="120" cy="200" r="5" fill="#00fe4e" />
            <path d="M180 200 L180 320 L80 320" stroke="#00fe4e" strokeWidth="1.5" />
            <circle cx="80" cy="320" r="4" fill="#00fe4e" />
            <path d="M180 40 L180 360" stroke="#00fe4e" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.5" />
          </svg>
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="team-row">
            <div className="team-cards-col">
              <div data-reveal="up" className="relative z-10 mb-8 lg:mb-12">
                <h2 className="team-title">
                  <span className="text-[#0adf54]">MEET</span>{" "}
                  <span className="text-[#0a7a5f]">OUR</span>{" "}
                  <span className="text-[#050889]">TEAM</span>
                </h2>
                <p className="gsap-words mt-3 text-[14px] lg:text-[15px] text-black">
                  Our business experts come from businesses of all shapes and sizes.
                </p>
              </div>
              <div className="team-cards-grid">
                {teamMembers.map((m, i) => (
                  <div key={m.name} data-reveal="up" data-reveal-delay={i * 110} className="team-card">
                    <div className="team-photo-frame">
                      <img src={m.img} alt={m.name} />
                    </div>
                    <div className="team-card-role">{m.role}</div>
                    <div className="team-card-name">{m.name}</div>
                    <div className="team-card-linkedin">
                      <LinkedInSvg />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}