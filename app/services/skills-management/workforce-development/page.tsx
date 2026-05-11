"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GsapTextAnimations from "@/components/GsapTextAnimations";
import SearchModal from "@/components/SearchModal";

export default function WorkforceDevelopmentPage() {
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const orbit2Ref = useRef<HTMLImageElement | null>(null);
  const orbitMobRef = useRef<HTMLDivElement | null>(null);
  const orbit2MobRef = useRef<HTMLImageElement | null>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
      if (orbit2Ref.current) {
        gsap.to(orbit2Ref.current, {
          rotation: -360,
          duration: 120,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
      if (orbitMobRef.current) {
        gsap.to(orbitMobRef.current, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
      if (orbit2MobRef.current) {
        gsap.to(orbit2MobRef.current, {
          rotation: -360,
          duration: 120,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <GsapTextAnimations />

      <main className="wfd-page">
        {/* HERO BLOCK */}
        <section className="wfd-hero">
          <Navbar
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            setSearchOpen={setSearchOpen}
            activeLink="Services"
          />

          <div className="wfd-hero-content">
            <h1 className="wfd-hero-title gsap-hero-title">
              Future Workforce &amp; Capability
            </h1>
            <h1 className="wfd-hero-title wfd-hero-title-line2 gsap-hero-title">
              Development
            </h1>
            <p className="wfd-hero-sub gsap-hero-subtitle">
              Designing workforce development pathways that strengthen employability, productivity, and long-term economic participation.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="wfd-intro">
          <h3 className="wfd-intro-eyebrow gsap-heading">
            Workforce Transformation Starts With Capability
          </h3>
          <p className="gsap-words">
            As Industries Evolve And Workforce Demands Continue To Shift, Organizations Require Structured Capability Development Models That Prepare Talent For Modern Economic Realities. Parwaaz Develops Industry-Aligned Workforce Pathways That Support Employment Readiness, Professional Growth, And Workforce Resilience.
          </p>
        </section>

        {/* GREEN CAPABILITIES BLOCK */}
        <section className="wfd-services-block">
          <div className="wfd-services-card">
            <div className="wfd-services-content">
              <h2 className="wfd-services-title">Core Capabilities</h2>

              <div className="wfd-service-group">
                <h3 className="wfd-service-heading">
                  <span className="wfd-bullet" /> Employment-Linked Training
                </h3>
                <p className="wfd-service-body">
                  Programs Aligned With Workforce And Industry Requirements.
                </p>
              </div>

              <div className="wfd-service-group">
                <h3 className="wfd-service-heading">
                  <span className="wfd-bullet" /> Industry Workforce Programs
                </h3>
                <p className="wfd-service-body">
                  Sector-Specific Learning Pathways Designed For Operational Readiness.
                </p>
              </div>

              <div className="wfd-service-group">
                <h3 className="wfd-service-heading">
                  <span className="wfd-bullet" /> Future Skills Development
                </h3>
                <p className="wfd-service-body">
                  Programs Focused On Adaptability, Productivity, And Digital Readiness.
                </p>
              </div>

              <div className="wfd-service-group">
                <h3 className="wfd-service-heading">
                  <span className="wfd-bullet" /> Training Network Ecosystems
                </h3>
                <p className="wfd-service-body">
                  Partnership-Driven Models Designed For Scalable Learning Delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="wfd-closing">
          <h3 className="wfd-closing-eyebrow gsap-heading">
            Strengthen Workforce Readiness
          </h3>
          <p className="gsap-words">
            Connect With Parwaaz To Develop Scalable Workforce Capability And Employment-Focused Learning Solutions.
          </p>
        </section>

        {/* CLIENT LOGOS — orbit positioned relative to this section */}
        <section className="wfd-clients">
          <div className="wfd-clients-row">
            <div className="wfd-client-card">
              <img src="/mcc-logo.png" alt="MCC" />
            </div>
            <div className="wfd-client-card">
              <img src="/ibex.png" alt="IBEX" />
            </div>
          </div>

          {/* DESKTOP orbit — sits next to logos, doesn't extend page */}
          <div className="wfd-orbit-wrap wfd-orbit-desktop" aria-hidden="true">
            <div ref={orbitRef} className="wfd-orbit-rings">
              <img src="/orbit.svg" alt="" />
            </div>
            <img ref={orbit2Ref} src="/orbit1.svg" alt="" className="wfd-orbit-solid" />
          </div>

          {/* MOBILE orbit — relative position, in flow */}
          <div className="wfd-orbit-mobile" aria-hidden="true">
            <div ref={orbitMobRef} className="wfd-orbit-rings">
              <img src="/orbit.svg" alt="" />
            </div>
            <img ref={orbit2MobRef} src="/orbit1.svg" alt="" className="wfd-orbit-solid" />
          </div>
        </section>
      </main>

      <Footer />
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />

      <style jsx global>{`
        .wfd-page {
          width: 100%;
          background: #ffffff;
        
          position: relative;
        }
        .wfd-page section {
          border: none !important;
        }

        /* ============ HERO ============ */
        .wfd-hero {
          position: relative;
          width: 100%;
          background: #000572;
          padding: 24px 0 120px;
          overflow-x: hidden;
        }
        .wfd-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 0;
          text-align: center;
        }
        .wfd-hero-title {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 200;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #00ff66;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
        }
        .wfd-hero-title-line2 {
          margin-top: 4px;
        }
        .wfd-hero-sub {
          margin: 32px auto 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(13px, 1.05vw, 15px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 400;
          max-width: 720px;
        }

        /* ============ INTRO ============ */
        .wfd-intro {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 64px 48px;
        }
        .wfd-intro-eyebrow {
          margin: 0 0 18px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.45);
          letter-spacing: -0.01em;
        }
        .wfd-intro p {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: rgba(0, 0, 0, 0.78);
          font-weight: 400;
        }

        /* ============ GREEN CAPABILITIES BLOCK ============ */
        .wfd-services-block {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
        }
        .wfd-services-card {
          position: relative;
          z-index: 2;
          width: 100%;
          background: #eaf7ee;
          border-radius: 18px;
          padding: 56px 80px;
          overflow: visible;
        }
        .wfd-services-content {
          position: relative;
          z-index: 2;
          max-width: 100%;
        }
        .wfd-services-title {
          margin: 0 0 40px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
          color: #000572;
          letter-spacing: -0.01em;
        }
        .wfd-service-group {
          margin-bottom: 32px;
        }
        .wfd-service-group:last-of-type {
          margin-bottom: 0;
        }
        .wfd-service-heading {
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.3;
          color: #0a0a0a;
          letter-spacing: -0.01em;
        }
        .wfd-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #000572;
          flex-shrink: 0;
        }
        .wfd-service-body {
          margin: 0 0 0 20px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.72);
          font-weight: 400;
        }

        /* ============ CLOSING ============ */
        .wfd-closing {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 64px 32px;
          position: relative;
          z-index: 2;
        }
        .wfd-closing-eyebrow {
          margin: 0 0 14px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.45);
          letter-spacing: -0.01em;
        }
        .wfd-closing p {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: rgba(0, 0, 0, 0.78);
          font-weight: 400;
          max-width: 1100px;
        }

        /* ============ CLIENT LOGOS ============ */
        .wfd-clients {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px 40px;
          position: relative;
          z-index: 2;
        }
        .wfd-clients-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 3;
        }
        .wfd-client-card {
          flex: 0 0 200px;
          width: 200px;
          height: 200px;
          background: #ffffff;
          border: 1px solid #d9d9d9;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .wfd-client-card:hover {
          border-color: #0adf54;
          box-shadow: 0 0 0 2px rgba(10, 223, 84, 0.18), 0 10px 24px rgba(10, 223, 84, 0.15);
          transform: translateY(-3px);
        }
        .wfd-client-card img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* ============ ORBIT — DESKTOP (positioned relative to .wfd-clients) ============ */
        .wfd-orbit-wrap {
          position: absolute;
          top: -180px;
          right: -250px;
          width: 650px;
          height: 650px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.55;
        }
        .wfd-orbit-rings {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        .wfd-orbit-rings img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.2) brightness(0.85) opacity(0.65);
        }
        .wfd-orbit-solid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.3) brightness(0.8) opacity(0.5);
          will-change: transform;
        }

        .wfd-orbit-mobile {
          display: none;
        }

        /* ============ TABLET ============ */
        @media (max-width: 1100px) {
          .wfd-intro,
          .wfd-services-block,
          .wfd-closing,
          .wfd-clients {
            padding-left: 32px;
            padding-right: 32px;
          }
          .wfd-services-card {
            padding: 48px 40px;
          }
          .wfd-orbit-wrap {
            width: 500px;
            height: 500px;
            right: -200px;
            top: -180px;
          }
        }

        /* ============ MOBILE ============ */
        @media (max-width: 768px) {
          .wfd-hero {
            padding: 16px 0 64px;
          }
          .wfd-hero-content {
            padding: 36px 16px 0;
          }
          .wfd-hero-title {
            font-size: 32px;
            line-height: 1.15;
          }
          .wfd-hero-sub {
            margin-top: 18px;
            font-size: 12.5px;
            line-height: 1.55;
          }

          .wfd-intro {
            padding: 48px 20px 32px;
          }
          .wfd-intro-eyebrow {
            font-size: 14px;
            margin-bottom: 14px;
          }
          .wfd-intro p {
            font-size: 13px;
            line-height: 1.75;
          }

          .wfd-services-block {
            padding: 0 20px;
            position: relative;
            z-index: 3;
          }
          .wfd-services-card {
            padding: 32px 24px;
            border-radius: 14px;
            overflow: hidden;
            position: relative;
            z-index: 3;
          }
          .wfd-services-title {
            font-size: 22px;
            margin-bottom: 28px;
          }
          .wfd-service-group {
            margin-bottom: 24px;
          }
          .wfd-service-heading {
            font-size: 16px;
            gap: 10px;
            margin-bottom: 8px;
          }
          .wfd-bullet {
            width: 7px;
            height: 7px;
          }
          .wfd-service-body {
            font-size: 12.5px;
            line-height: 1.65;
            margin-left: 17px;
          }

          /* Mobile orbit — relative position, in flow, no ghost height */
          .wfd-orbit-desktop {
            display: none !important;
          }
          .wfd-orbit-mobile {
            display: block !important;
            position: relative;
            width: 400px;
            height: 400px;
            margin: 10px 0 -40px auto;
            right: -140px;
            pointer-events: none;
            z-index: 1;
            opacity: 0.5;
          }
          .wfd-orbit-mobile .wfd-orbit-rings {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            will-change: transform;
          }
          .wfd-orbit-mobile .wfd-orbit-rings img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: contrast(1.2) brightness(0.85) opacity(0.65);
          }
          .wfd-orbit-mobile .wfd-orbit-solid {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: contrast(1.3) brightness(0.8) opacity(0.55);
            will-change: transform;
          }

          .wfd-closing {
            padding: 60px 20px 32px;
          }
          .wfd-closing-eyebrow {
            font-size: 14px;
            margin-bottom: 12px;
          }
          .wfd-closing p {
            font-size: 13px;
            line-height: 1.75;
          }

          .wfd-clients {
            padding: 0 20px 40px;
          }
          .wfd-clients-row {
            gap: 14px;
            justify-content: flex-start;
          }
          .wfd-client-card {
            flex: 0 0 calc(50% - 7px);
            width: auto;
            height: 140px;
            padding: 20px;
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .wfd-hero-title {
            font-size: 28px;
          }
        }

        /* ============ FOOTER LINE FIX ============ */
        .wfd-page + footer,
        footer {
          border-top: 0 !important;
        }
        footer hr,
        footer::before,
        footer::after,
        .footer-divider,
        .footer-line {
          display: none !important;
          border: 0 !important;
        }
      `}</style>
    </>
  );
}