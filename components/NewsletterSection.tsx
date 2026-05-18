"use client";

import Link from "next/link";

export default function NewsletterSection() {
  return (
    <>
      <style jsx global>{`
        .newsletter-section {
          position: relative;
          background: #ffffff;
          padding: 0 24px 64px;
        }
        .newsletter-divider {
          width: 100%;
          max-width: 720px;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(0,254,78,0.6) 50%, transparent 100%);
          margin: 0 auto 48px;
        }
        .newsletter-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .newsletter-title {
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-size: clamp(22px, 3.4vw, 42px);
          font-weight: 400;
          letter-spacing: 0px;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 640px) { .newsletter-title { white-space: normal; } }
        .newsletter-text {
          margin: 18px auto 0;
          max-width: 620px;
          font-size: 13px;
          line-height: 1.65;
          color: rgba(0,0,0,0.7);
        }
        .newsletter-form {
          display: flex;
          flex-direction: row;
          gap: 12px;
          max-width: 620px;
          margin: 28px auto 0;
        }
        .newsletter-input {
          flex: 1;
          height: 52px;
          padding: 0 22px;
          border-radius: 10px;
          border: 1.5px solid rgba(0,254,78,0.35);
          background: #ffffff;
          font-size: 14px;
          color: #000;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .newsletter-input::placeholder { color: rgba(0,0,0,0.4); }
        .newsletter-input:focus {
          border-color: #00fe4e;
          box-shadow: 0 0 0 4px rgba(0,254,78,0.12);
        }
        .newsletter-btn {
          height: 52px;
          padding: 0 36px;
          border-radius: 10px;
          background: #ffffff;
          color: #050889;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: 1.5px solid #00fe4e;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease, filter 0.25s ease;
          white-space: nowrap;
        }
        .newsletter-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 254, 78, 0.5);
          filter: brightness(1.05);
        }
        .newsletter-btn:active { transform: translateY(0); }
        .newsletter-checkbox {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 480px;
          margin: 20px auto 0;
          font-size: 13px;
          color: rgba(0,0,0,0.75);
          cursor: pointer;
        }
        .newsletter-checkbox input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #00fe4e;
          cursor: pointer;
        }
        .newsletter-note {
          margin: 16px auto 0;
          font-size: 12px;
          color: rgba(0,0,0,0.55);
          line-height: 1.6;
          max-width: 520px;
        }
        .newsletter-note-label { font-weight: 600; color: rgba(0,0,0,0.75); }
        .newsletter-link {
          color: rgba(0,0,0,0.75);
          text-decoration: underline;
          text-decoration-color: rgba(0,0,0,0.3);
          text-underline-offset: 2px;
          transition: color 0.25s ease, text-decoration-color 0.25s ease;
        }
        .newsletter-link:hover {
          color: #00b347;
          text-decoration-color: #00b347;
        }
        @media (max-width: 640px) {
          .newsletter-section { padding: 0 20px 48px; }
          .newsletter-divider { margin-bottom: 36px; }
          .newsletter-form { flex-direction: column; gap: 10px; margin-top: 22px; }
          .newsletter-input { height: 48px; padding: 0 18px; }
          .newsletter-btn { height: 48px; padding: 0 28px; }
          .newsletter-text { font-size: 12.5px; margin-top: 14px; }
        }
        @media (max-width: 480px) {
          .newsletter-section { padding: 0 16px 36px; }
          .newsletter-checkbox { font-size: 12px; }
          .newsletter-note { font-size: 11.5px; }
        }
      `}</style>

      <section className="newsletter-section">
        <div className="newsletter-divider" />
        <div className="newsletter-inner">
          <h2 className="newsletter-title">
            Join The Future Of Innovation
          </h2>
          <p className="newsletter-text">
            Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We&apos;ll share other exciting news and exclusive offers, too.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
        <Link href="/contact" className="newsletter-btn inline-flex items-center justify-center no-underline">
  Sign Up
</Link>
          </div>
          <label className="newsletter-checkbox">
            <input type="checkbox" />
            <span>Keep me updated on other news and exclusive offers</span>
          </label>
          <p className="newsletter-note">
            <span className="newsletter-note-label">Note:</span> You can opt-out at any time. See our{" "}
            <Link href="#" className="newsletter-link">Privacy Policy</Link> and{" "}
            <Link href="#" className="newsletter-link">Terms</Link>.
          </p>
        </div>
      </section>
    </>
  );
}