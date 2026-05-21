"use client";

import { teamMembers } from "@/data/teamMembers";

export default function TeamSection() {
  return (
    <>
      <style jsx global>{`
        .team-section {
          position: relative;
          overflow: visible;
          background: #ffffff;
          padding: 56px 0 24px;
        }

        @media (min-width: 1024px) {
          .team-section {
            padding: 80px 0 32px;
          }
        }

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

        .team-bg-circuit svg {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1023px) {
          .team-bg-circuit {
            display: none;
          }
        }

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

        .team-cards-col {
          position: relative;
          z-index: 10;
          grid-column: 2;
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
          animation: none;
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

        .team-about-btn {
          position: relative;
          z-index: 5;
          height: 48px;
          padding: 0 32px;
          border-radius: 24px;
          background: #00fe4e;
          color: #000000;
          font-size: 15px;
          font-weight: 500;
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.35),
            0 0 0 6px rgba(0, 254, 78, 0.12);
          transition: transform 0.25s, box-shadow 0.25s;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }

        .team-about-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0, 254, 78, 0.5),
            0 0 0 8px rgba(0, 254, 78, 0.18);
        }

        .team-mobile-btn-wrap {
          display: none;
        }

        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .team-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          height: 100%;
        }

        .team-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.4;
          overflow: hidden;
          border-radius: 6px;
          background: #f0f0f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s, box-shadow 0.35s;
        }

        .team-photo-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }

        .team-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.4s ease;
        }

        .team-photo-frame:hover img {
          filter: grayscale(0%);
        }

        .team-card-role {
          min-height: 60px;
          margin-top: 12px;
          font-size: 11px;
          line-height: 1.35;
          color: #000000;
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
          text-transform: uppercase;
        }

        @media (min-width: 1024px) {
          .team-card-name {
            font-size: 16px;
          }
        }

        .team-card-linkedin-wrap {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .team-card-linkedin {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          background: #0077b5;
          color: #ffffff;
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.25);
        }

        .team-card-linkedin:hover {
          transform: translateY(-2px) scale(1.08);
          background: #00b95a;
          box-shadow: 0 8px 18px rgba(0, 185, 90, 0.45);
        }

        .team-card-linkedin svg {
          width: 16px;
          height: 16px;
          display: block;
        }

        @media (max-width: 1023px) {
          .team-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .team-cards-col {
            grid-column: 1;
          }

          .team-neptune-wrap {
            width: 480px;
            height: 480px;
            left: 0;
            right: auto;
            top: 20%;
          }

          .team-neptune-btn {
            left: 240px;
            top: 20%;
          }

          .team-cards-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            overflow: hidden;
            padding: 34px 0 20px !important;
          }

          .team-neptune-wrap,
          .team-neptune-btn {
            display: none !important;
          }

          .team-row {
            padding-top: 0 !important;
          }

          .team-title {
            font-size: clamp(36px, 10vw, 54px);
            line-height: 1.08;
            letter-spacing: 0.12em;
          }

          .team-cards-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }

          .team-photo-frame {
            aspect-ratio: 1 / 1 !important;
            border-radius: 7px;
          }

          .team-card-role {
            min-height: 50px !important;
            margin-top: 10px;
            font-size: 10px !important;
            line-height: 1.35;
          }

          .team-card-name {
            min-height: 36px !important;
            font-size: 12px !important;
            line-height: 1.35;
            letter-spacing: 0.08em;
          }

          .team-card-linkedin-wrap {
            margin-top: 8px;
          }

          .team-card-linkedin {
            width: 30px;
            height: 30px;
          }

          .team-card-linkedin svg {
            width: 14px;
            height: 14px;
          }

          .team-mobile-btn-wrap {
            display: flex;
            justify-content: center;
            margin-top: 28px;
          }

          .team-mobile-btn-wrap .team-about-btn {
            height: 46px;
            padding: 0 42px;
            border-radius: 999px;
            font-size: 15px;
            box-shadow: 0 8px 22px rgba(0, 254, 78, 0.32),
              0 0 0 5px rgba(0, 254, 78, 0.1);
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding-top: 30px !important;
          }

          .team-cards-grid {
            gap: 10px;
          }

          .team-card-role {
            font-size: 9.5px !important;
          }

          .team-card-name {
            font-size: 11px !important;
            letter-spacing: 0.07em;
          }

          .team-card-linkedin {
            width: 28px;
            height: 28px;
          }

          .team-card-linkedin svg {
            width: 13px;
            height: 13px;
          }

          .team-mobile-btn-wrap {
            margin-top: 26px;
          }

          .team-mobile-btn-wrap .team-about-btn {
            height: 44px;
            padding: 0 38px;
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-neptune-wrap img,
          .team-about-btn,
          .team-photo-frame,
          .team-photo-frame img,
          .team-card-linkedin {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      <section className="team-section">
        <div className="team-neptune-wrap" aria-hidden="true">
          <img src="/neptune.svg" alt="" />
        </div>

        <div data-reveal="zoom" className="team-neptune-btn">
          <button className="team-about-btn">About Team</button>
        </div>

        <div className="team-bg-circuit">
          <svg
            viewBox="0 0 200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="180" cy="40" r="6" fill="#00fe4e" />
            <path
              d="M180 40 L100 40 L100 120 L60 120"
              stroke="#00fe4e"
              strokeWidth="1.5"
            />
            <circle cx="60" cy="120" r="4" fill="#00fe4e" />
            <path
              d="M180 40 L180 200 L120 200"
              stroke="#00fe4e"
              strokeWidth="1.5"
            />
            <circle cx="120" cy="200" r="5" fill="#00fe4e" />
            <path
              d="M180 200 L180 320 L80 320"
              stroke="#00fe4e"
              strokeWidth="1.5"
            />
            <circle cx="80" cy="320" r="4" fill="#00fe4e" />
            <path
              d="M180 40 L180 360"
              stroke="#00fe4e"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              opacity="0.5"
            />
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

                <p className="gsap-words mt-3 text-[14px] leading-[1.65] text-black lg:text-[15px]">
                  Our business experts come from businesses of all shapes and
                  sizes.
                </p>
              </div>

              <div className="team-cards-grid">
                {teamMembers.map((m, i) => (
                  <div
                    key={m.name}
                    data-reveal="up"
                    data-reveal-delay={i * 110}
                    className="team-card"
                  >
                    <div className="team-photo-frame">
                      <img src={m.img} alt={m.name} />
                    </div>

                    <div className="team-card-role">{m.role}</div>

                    <div className="team-card-name">{m.name}</div>

                    <div className="team-card-linkedin-wrap">
                      <a
                        href={m.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-card-linkedin"
                        aria-label={`${m.name} on LinkedIn`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div data-reveal="up" className="team-mobile-btn-wrap">
                <button className="team-about-btn">About Team</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}