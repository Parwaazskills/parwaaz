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
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(0, 254, 78, 0.12), transparent 60%);
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
        .contact-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 36px;
          padding: 0 24px 0 28px;
          border-radius: 4px;
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          color: #000;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 254, 78, 0.4);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          margin-top: 6px;
        }
        .contact-cta-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .contact-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
        }
        .contact-cta-btn:hover svg { transform: translateX(4px); }
        @media (max-width: 1024px) {
          .contact-cta-section { margin-top: 40px; padding: 0 0 80px; }
          .contact-cta-wrap { padding: 0 24px; }
          .contact-cta-box { padding: 40px 32px; min-height: 200px; gap: 16px; }
          .contact-cta-heading { font-size: 23px; }
          .contact-cta-text { font-size: 14px; }
        }
        @media (max-width: 768px) {
          .contact-cta-section {
            margin-top: 100px !important;
            padding: 0 0 0 !important;
            position: relative !important;
            z-index: 10 !important;
          }
          .contact-cta-heading { font-size: 20px; }
          .contact-cta-text { font-size: 13px; }
        }
      `}</style>

      <section className="contact-cta-section">
        <div className="contact-cta-wrap">
          <div className="contact-cta-box" data-reveal="zoom">
            <h3 className="contact-cta-heading">Let&apos;s Build the Next Flight of Growth!</h3>
            <p className="contact-cta-text">
              Connect with our team to explore workforce transformation, digital capability, and strategic expansion opportunities.
            </p>
            <button className="contact-cta-btn">
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}