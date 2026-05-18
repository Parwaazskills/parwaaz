"use client";

export default function ContactCTASection() {
  return (
    <>
      <style jsx global>{`
        .contact-cta-section {
          position: relative;
          z-index: 5;
          background: transparent;
          padding: 10px 0 40px;
          margin-top: 20px;
        }

        .contact-cta-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: center;
        }

        .contact-cta-box {
          position: relative;
          width: 100%;
          max-width: 720px;
          min-height: 170px;
          padding: 44px 56px;
          background: linear-gradient(135deg, #0a0e7a 0%, #050889 100%);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(5, 7, 131, 0.25);
        }

        .contact-cta-box::after {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(
            ellipse,
            rgba(0, 254, 78, 0.12),
            transparent 60%
          );
          pointer-events: none;
        }

        .contact-cta-heading {
          position: relative;
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 26px;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          line-height: 1.25;
          max-width: 620px;
          z-index: 1;
        }

        .contact-cta-text {
          position: relative;
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #ffffff;
          text-align: center;
          line-height: 1.55;
          max-width: 560px;
          opacity: 0.9;
          z-index: 1;
        }

        /* ============ BUTTON — matches "Start a Project" style ============ */
        .contact-cta-btn {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 48px;
          padding: 0 36px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #333333;
          background: #f1f1f1;
          border: 1.5px solid transparent;
          border-radius: 24px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
          margin-top: 6px;
          transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease,
                      box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .contact-cta-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          color: #000000;
          border-color: #00fe4e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5),
                      0 0 0 6px rgba(0, 254, 78, 0.12);
        }

        .contact-cta-btn:active {
          transform: translateY(0) scale(0.97);
        }

        .contact-cta-btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00fe4e;
          color: #050505;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .contact-cta-btn:hover .contact-cta-btn-arrow {
          transform: translateX(4px);
          background: #ffffff;
        }

        .contact-cta-btn-arrow svg {
          width: 12px;
          height: 12px;
        }

        @media (max-width: 1024px) {
          .contact-cta-section {
            margin-top: 40px;
            padding: 0 0 80px;
          }

          .contact-cta-wrap {
            padding: 0 24px;
          }

          .contact-cta-box {
            padding: 40px 32px;
            min-height: 200px;
            gap: 16px;
          }

          .contact-cta-heading {
            font-size: 23px;
          }

          .contact-cta-text {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .contact-cta-section {
            margin-top: calc(var(--po-mobile-overlap, 285px) * -1) !important;
            padding: 0 0 0 !important;
            position: relative !important;
            z-index: 60 !important;
            background: transparent !important;
          }

          .contact-cta-wrap {
            padding: 0 20px !important;
          }

          .contact-cta-box {
            min-height: 180px !important;
            padding: 34px 24px !important;
            border-radius: 14px !important;
          }

          .contact-cta-heading {
            font-size: 20px;
          }

          .contact-cta-text {
            font-size: 13px;
          }
        }
      `}</style>

      <section className="contact-cta-section">
        <div className="contact-cta-wrap">
          <div className="contact-cta-box" data-reveal="zoom">
            <h3 className="contact-cta-heading">
              Let&apos;s Build the Next Flight of Growth!
            </h3>

            <p className="contact-cta-text">
              Connect with our team to explore workforce transformation, digital
              capability, and strategic expansion opportunities.
            </p>

            <a href="/contact" className="contact-cta-btn">
              Contact Us
              <span className="contact-cta-btn-arrow">
                <svg
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