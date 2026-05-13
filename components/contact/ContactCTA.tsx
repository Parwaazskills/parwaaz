"use client";

export default function ContactCTA() {
  return (
    <>
      <style jsx>{`
        .contact-cta-section {
           background: transparent;
          padding: 0 0 80px;
        }
        @media (max-width: 768px) {
          .contact-cta-section { padding: 0 0 56px; }
        }

        /* ============ CARD — DARK NAVBAR GRADIENT ============ */
        .contact-cta-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          padding: 56px 64px;
          /* Exact navbar gradient: 00FE4E → 0CA53B (60%) → 1E1E1E */
       background: linear-gradient(135deg, #00FE4E 0%, #0CA53B 50%, #064E1F 100%);
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 40px;
          align-items: center;
          min-height: 220px;
        }
        @media (max-width: 1024px) {
          .contact-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 40px 24px;
            gap: 24px;
          }
        }

        /* ============ ORBIT RINGS — VISIBLE & ROTATING ============ */
        .contact-cta-orbit-wrap {
          position: absolute;
          right: 18%;
          top: 50%;
          width: 480px;
          height: 480px;
          margin-top: -240px;
          pointer-events: none;
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .contact-cta-orbit-wrap {
            right: -120px;
            opacity: 0.5;
          }
        }

        .contact-cta-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform-origin: center center;
        }
        .contact-cta-ring-1 {
          width: 100%;
          height: 100%;
          margin-top: -50%;
          margin-left: -50%;
          border: 1.5px dashed rgba(255, 255, 255, 0.25);
          animation: ringRotate 30s linear infinite;
        }
        .contact-cta-ring-2 {
          width: 75%;
          height: 75%;
          margin-top: -37.5%;
          margin-left: -37.5%;
          border: 1px solid rgba(0, 254, 78, 0.4);
          animation: ringRotateReverse 45s linear infinite;
        }
        .contact-cta-ring-3 {
          width: 50%;
          height: 50%;
          margin-top: -25%;
          margin-left: -25%;
          border: 1px dotted rgba(255, 255, 255, 0.3);
          animation: ringRotate 22s linear infinite;
        }

        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ringRotateReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        /* Orbiting nodes that travel along the rings */
        .contact-cta-orbit-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          margin-top: -6px;
          margin-left: -6px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 14px #00fe4e, 0 0 28px rgba(0, 254, 78, 0.6);
          transform-origin: center center;
        }
        .contact-cta-orbit-node.n1 {
          animation: nodeOrbit1 30s linear infinite;
        }
        .contact-cta-orbit-node.n2 {
          animation: nodeOrbit2 45s linear infinite;
        }
        .contact-cta-orbit-node.n3 {
          animation: nodeOrbit3 22s linear infinite;
        }

        @keyframes nodeOrbit1 {
          from { transform: rotate(0deg) translateX(240px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(240px) rotate(-360deg); }
        }
        @keyframes nodeOrbit2 {
          from { transform: rotate(90deg) translateX(180px) rotate(-90deg); }
          to { transform: rotate(450deg) translateX(180px) rotate(-450deg); }
        }
        @keyframes nodeOrbit3 {
          from { transform: rotate(180deg) translateX(120px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(120px) rotate(-540deg); }
        }

        /* Ambient pulsing dots */
        .contact-cta-pulse-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 14px #00fe4e, 0 0 28px rgba(0, 254, 78, 0.5);
          animation: pulseDot 2.4s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }
        .contact-cta-pulse-dot.p1 { top: 18%; right: 24%; }
        .contact-cta-pulse-dot.p2 { top: 70%; right: 12%; animation-delay: 1s; }
        .contact-cta-pulse-dot.p3 { top: 45%; right: 38%; animation-delay: 1.8s; }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        /* ============ ROCKET ============ */
        .contact-cta-rocket {
          position: relative;
          z-index: 3;
          width: 160px;
          height: 160px;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .contact-cta-rocket {
            margin: 0 auto;
            width: 120px;
            height: 120px;
          }
        }
        .contact-cta-rocket-svg {
          width: 100%;
          height: 100%;
          animation: rocketFloat 3.6s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));
        }
        @keyframes rocketFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, -10px); }
        }

        .contact-cta-content {
          position: relative;
          z-index: 3;
        }

        .contact-cta-heading {
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 12px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        }

        .contact-cta-sub {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 480px;
        }
        @media (max-width: 1024px) {
          .contact-cta-sub {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .contact-cta-btn {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 500;
          color: #0a0a0a;
          background: #ffffff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
        .contact-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 254, 78, 0.4);
        }
        .contact-cta-btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #00fe4e;
          color: #050505;
          transition: transform 0.3s ease;
        }
        .contact-cta-btn:hover .contact-cta-btn-arrow {
          transform: translateX(4px);
        }
      `}</style>

      <section className="contact-cta-section">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="contact-cta-card">

            {/* ============ ROTATING ORBIT SYSTEM ============ */}
            <div className="contact-cta-orbit-wrap" aria-hidden="true">
              <div className="contact-cta-ring contact-cta-ring-1" />
              <div className="contact-cta-ring contact-cta-ring-2" />
              <div className="contact-cta-ring contact-cta-ring-3" />

              <div className="contact-cta-orbit-node n1" />
              <div className="contact-cta-orbit-node n2" />
              <div className="contact-cta-orbit-node n3" />
            </div>

            {/* Ambient pulsing dots */}
            <span className="contact-cta-pulse-dot p1" aria-hidden="true" />
            <span className="contact-cta-pulse-dot p2" aria-hidden="true" />
            <span className="contact-cta-pulse-dot p3" aria-hidden="true" />

            {/* Rocket */}
            <div className="contact-cta-rocket">
              <svg
                className="contact-cta-rocket-svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="rotate(-35 100 100)">
                  {/* Rocket body */}
                  <ellipse cx="100" cy="100" rx="22" ry="58" fill="#ffffff" stroke="#0a1a3a" strokeWidth="3" />

                  {/* Window */}
                  <circle cx="100" cy="78" r="10" fill="#0a1a3a" />
                  <circle cx="100" cy="78" r="6" fill="#00fe4e" />
                  <circle cx="98" cy="76" r="2" fill="#ffffff" opacity="0.8" />

                  {/* Side fins */}
                  <path d="M78 132 L60 165 L78 158 Z" fill="#0a1a3a" />
                  <path d="M122 132 L140 165 L122 158 Z" fill="#0a1a3a" />

                  {/* Center bottom fin */}
                  <path d="M100 158 L94 178 L106 178 Z" fill="#0a1a3a" />

                  {/* Nose cap */}
                  <ellipse cx="100" cy="46" rx="8" ry="14" fill="#0a1a3a" />

                  {/* Flame */}
                  <path
                    d="M88 162 Q100 188 112 162 Q108 178 100 198 Q92 178 88 162 Z"
                    fill="#00fe4e"
                  />
                  <path
                    d="M93 166 Q100 182 107 166 Q104 174 100 192 Q96 174 93 166 Z"
                    fill="#ffeb3b"
                    opacity="0.85"
                  />
                  <path
                    d="M97 170 Q100 178 103 170 Q102 174 100 186 Q98 174 97 170 Z"
                    fill="#ffffff"
                    opacity="0.6"
                  />
                </g>
              </svg>
            </div>

            {/* Content */}
            <div className="contact-cta-content">
              <h3 className="contact-cta-heading">
                Ready to start your next big project?
              </h3>
              <p className="contact-cta-sub">
                Let&apos;s discuss how Parwaaz can help you achieve your business goals.
              </p>
            </div>

            {/* Button */}
            <a href="#contact-form" className="contact-cta-btn">
              Start a Project
              <span className="contact-cta-btn-arrow">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}