"use client";

export default function ContactHero() {
  return (
    <>
      <style jsx>{`
        .contact-hero {
          position: relative;
          overflow: hidden;
          background: transparent;
          min-height: 460px;
          padding: 80px 0 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-hero {
            min-height: 380px;
            padding: 60px 0 80px;
          }
        }

        .contact-hero-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }
        .contact-hero-title .accent {
          color: #00fe4e;
          font-weight: 700;
          font-style: normal;
        }

        .contact-hero-sub {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          max-width: 620px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 768px) {
          .contact-hero-sub { font-size: 14px; }
        }
      `}</style>

      <section className="contact-hero">
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="contact-hero-title">
            Let&apos;s build something
            <br />
            <span className="accent">extraordinary together.</span>
          </h1>

          <p className="contact-hero-sub">
            Have a project in mind or want to explore how we can work together? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}