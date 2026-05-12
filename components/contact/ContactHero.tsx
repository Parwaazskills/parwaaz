"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactHero() {
  const ringLeftRef = useRef<HTMLDivElement | null>(null);
  const ringRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // GSAP rotation — same pattern as ProjectOrbitSection
    const tweenLeft = ringLeftRef.current
      ? gsap.to(ringLeftRef.current, {
          rotation: 360,
          duration: 80,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        })
      : null;

    const tweenRight = ringRightRef.current
      ? gsap.to(ringRightRef.current, {
          rotation: -360,
          duration: 100,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        })
      : null;

    return () => {
      tweenLeft?.kill();
      tweenRight?.kill();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .contact-hero {
          position: relative;
          overflow: hidden;
          /* TRANSPARENT — inherits gradient from parent wrapper (page.tsx) */
          background: transparent;
          min-height: 480px;
          padding: 60px 0 80px;
        }

        @media (max-width: 768px) {
          .contact-hero {
            min-height: 400px;
            padding: 40px 0 64px;
          }
        }

        .contact-hero-noise {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 3px 3px;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        /* DARKER, MORE VISIBLE ORBITAL RINGS */
        .contact-orbit-ring {
          position: absolute;
          top: 50%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }
        .contact-orbit-ring::before,
        .contact-orbit-ring::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          border-style: solid;
        }
        .contact-orbit-ring {
          border: 1.5px solid rgba(0, 254, 78, 0.28);
        }
        .contact-orbit-ring::after {
          inset: 50px;
          border: 1px solid rgba(0, 254, 78, 0.18);
        }
        .contact-orbit-ring::before {
          inset: 110px;
          border: 1px dashed rgba(0, 254, 78, 0.22);
        }

        .contact-orbit-left {
          left: -250px;
          margin-top: -300px;
        }

        .contact-orbit-right {
          right: -250px;
          margin-top: -300px;
        }

        @media (max-width: 768px) {
          .contact-orbit-ring {
            width: 400px;
            height: 400px;
            margin-top: -200px;
          }
          .contact-orbit-left { left: -200px; }
          .contact-orbit-right { right: -200px; }
        }

        .contact-orbit-node {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 16px #00fe4e, 0 0 32px rgba(0, 254, 78, 0.5);
          animation: nodePulse 2.4s ease-in-out infinite;
        }
        .contact-orbit-node.n1 { top: 8%; left: 50%; }
        .contact-orbit-node.n2 { top: 50%; left: 92%; animation-delay: 0.8s; }
        .contact-orbit-node.n3 { top: 88%; left: 28%; animation-delay: 1.6s; }
        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .contact-hero-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 800px;
          height: 800px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 254, 78, 0.1) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .contact-hero-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }
        .contact-hero-title .accent {
          background: linear-gradient(90deg, #00fe4e 0%, #5cffa0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          font-style: italic;
          font-weight: 500;
        }

        .contact-hero-sub {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          max-width: 620px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 768px) {
          .contact-hero-sub { font-size: 14px; }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero-noise" />
        <div className="contact-hero-glow" />

        {/* Orbital rings — GSAP rotates these refs */}
        <div ref={ringLeftRef} className="contact-orbit-ring contact-orbit-left">
          <span className="contact-orbit-node n1" />
          <span className="contact-orbit-node n2" />
        </div>
        <div ref={ringRightRef} className="contact-orbit-ring contact-orbit-right">
          <span className="contact-orbit-node n1" />
          <span className="contact-orbit-node n3" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          {/* Uses your global GSAP system — gsap-heading for char reveal, gsap-words for word fade */}
          <h1 className="contact-hero-title gsap-heading">
            Let&apos;s build something
            <br />
            <span className="accent">extraordinary together.</span>
          </h1>

          <p className="contact-hero-sub gsap-words">
            Have a project in mind or want to explore how we can work together? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}