"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GsapTextAnimations from "@/components/GsapTextAnimations";
import SearchModal from "@/components/SearchModal";

export default function ProfessionalCertificationsPage() {
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

      <main className="pc-page">
        {/* HERO BLOCK */}
        <section className="pc-hero">
          <Navbar
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            setSearchOpen={setSearchOpen}
            activeLink="Services"
          />

          <div className="pc-hero-content">
            <h1 className="pc-hero-title gsap-hero-title">
              Globally Recognized Learning &amp;
            </h1>
            <h1 className="pc-hero-title pc-hero-title-line2 gsap-hero-title">
              Certification Pathways
            </h1>
            <p className="pc-hero-sub gsap-hero-subtitle">
              Providing access to international certifications designed to strengthen professional growth, digital competitiveness, and workforce readiness.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="pc-intro">
          <h3 className="pc-intro-eyebrow gsap-heading">
            Certifications Are Becoming The New Workforce Currency
          </h3>
          <p className="gsap-words">
            Modern Industries Increasingly Rely On Globally Recognized Certifications To Validate Capability, Strengthen Competitiveness, And Accelerate Workforce Mobility. Parwaaz Enables Organizations And Professionals To Access Internationally Aligned Certification Pathways Across Digital And Emerging Sectors.
          </p>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="pc-cards-block">
          <h2 className="pc-cards-title gsap-heading">Core Capabilities</h2>

          <div className="pc-cards-grid">
            <div className="pc-card gsap-fade-up">
              <h3 className="pc-card-title">International Certifications</h3>
              <p>
                Access To Globally Recognized Digital And Professional Credentials.
              </p>
            </div>
            <div className="pc-card gsap-fade-up">
              <h3 className="pc-card-title">Technology Certification Pathways</h3>
              <p>
                Learning Tracks Aligned With AI, Cloud, Cybersecurity, And Digital Systems.
              </p>
            </div>
            <div className="pc-card gsap-fade-up">
              <h3 className="pc-card-title">Enterprise Certification Programs</h3>
              <p>
                Certification Pathways Designed For Workforce Capability Development.
              </p>
            </div>
            <div className="pc-card gsap-fade-up">
              <h3 className="pc-card-title">Career Advancement Support</h3>
              <p>
                Professional Development Models Focused On Employability And Growth.
              </p>
            </div>
          </div>

          {/* Decorative orbits — desktop, sits next to cards on right */}
          <div className="pc-orbit-wrap pc-orbit-desktop" aria-hidden="true">
            <div ref={orbitRef} className="pc-orbit-rings">
              <img src="/orbit.svg" alt="" />
            </div>
            <img ref={orbit2Ref} src="/orbit1.svg" alt="" className="pc-orbit-solid" />
          </div>
        </section>

        {/* CLOSING */}
        <section className="pc-closing">
          <h3 className="pc-closing-eyebrow gsap-heading">
            Advance Through Global Credentials
          </h3>
          <p className="gsap-words">
            Partner With Parwaaz To Unlock Internationally Recognized Certification Pathways.
          </p>
        </section>

        {/* CLIENT LOGOS */}
        <section className="pc-clients">
          <div className="pc-clients-row">
            <div className="pc-client-card">
              <img src="/vtt-global.png" alt="VTT Global" />
            </div>
            <div className="pc-client-card">
              <img src="/oro.png" alt="ORO Group" />
            </div>
            <div className="pc-client-card">
              <img src="/assl-air.png" alt="ASSL Air" />
            </div>
          </div>

          {/* MOBILE orbit */}
          <div className="pc-orbit-mobile" aria-hidden="true">
            <div ref={orbitMobRef} className="pc-orbit-rings">
              <img src="/orbit.svg" alt="" />
            </div>
            <img ref={orbit2MobRef} src="/orbit1.svg" alt="" className="pc-orbit-solid" />
          </div>
        </section>
      </main>

      <Footer />
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />

      <style jsx global>{`
        .pc-page {
          width: 100%;
          background: #ffffff;
          position: relative;
        }
        .pc-page section {
          border: none !important;
        }

        /* ============ HERO ============ */
        .pc-hero {
          position: relative;
          width: 100%;
          background: #000572;
          padding: 24px 0 120px;
          overflow-x: hidden;
        }
        .pc-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 0;
          text-align: center;
        }
        .pc-hero-title {
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
        .pc-hero-title-line2 {
          margin-top: 4px;
        }
        .pc-hero-sub {
          margin: 32px auto 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(13px, 1.05vw, 15px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 400;
          max-width: 720px;
        }

        /* ============ INTRO ============ */
        .pc-intro {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 64px 60px;
          text-align: center;
        }
        .pc-intro-eyebrow {
          margin: 0 0 18px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.45);
          letter-spacing: -0.01em;
        }
        .pc-intro p {
          margin: 0 auto;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: rgba(0, 0, 0, 0.78);
          font-weight: 400;
          max-width: 1100px;
        }

        /* ============ CORE CAPABILITIES ============ */
        .pc-cards-block {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 64px 80px;
          position: relative;
        }
        .pc-cards-title {
          margin: 0 0 60px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          color: rgba(0, 0, 0, 0.45);
          text-align: center;
          letter-spacing: -0.01em;
        }
        .pc-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 580px));
          gap: 32px;
          max-width: 1184px;
          margin: 0 auto;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .pc-card {
          background: #ffffff;
          border: 1px solid rgba(138, 138, 138, 0.5);
          border-radius: 14px;
          padding: 40px 36px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .pc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(10, 223, 84, 0.12);
          border-color: rgba(10, 223, 84, 0.6);
        }
        .pc-card-title {
          margin: 0 0 14px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          color: #000572;
          letter-spacing: -0.01em;
        }
        .pc-card p {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.72);
          font-weight: 400;
          max-width: 380px;
        }

        /* ============ ORBIT — DESKTOP ============ */
        .pc-orbit-wrap {
          position: absolute;
          top: 90%;
          right: -250px;
          transform: translateY(-50%);
          width: 700px;
          height: 700px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.55;
        }
        .pc-orbit-rings {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        .pc-orbit-rings img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.2) brightness(0.85) opacity(0.65);
        }
        .pc-orbit-solid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.3) brightness(0.8) opacity(0.5);
          will-change: transform;
        }

        .pc-orbit-mobile {
          display: none;
        }

        /* ============ CLOSING ============ */
        .pc-closing {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 64px 60px;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .pc-closing-eyebrow {
          margin: 0 0 14px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.45);
          letter-spacing: -0.01em;
        }
        .pc-closing p {
          margin: 0 auto;
          font-family: var(--font-poppins), sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: rgba(0, 0, 0, 0.78);
          font-weight: 400;
          max-width: 900px;
        }

        /* ============ CLIENT LOGOS ============ */
        .pc-clients {
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 64px 100px;
          position: relative;
          z-index: 2;
        }
        .pc-clients-row {
          display: flex;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 3;
        }
        .pc-client-card {
          flex: 0 0 296px;
          width: 296px;
          height: 220px;
          background: #ffffff;
          border: 1px solid #d9d9d9;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pc-client-card:hover {
          border-color: #0adf54;
          box-shadow: 0 0 0 2px rgba(10, 223, 84, 0.18), 0 10px 24px rgba(10, 223, 84, 0.15);
          transform: translateY(-3px);
        }
        .pc-client-card img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* ============ TABLET ============ */
        @media (max-width: 1100px) {
          .pc-intro,
          .pc-cards-block,
          .pc-closing,
          .pc-clients {
            padding-left: 32px;
            padding-right: 32px;
          }
          .pc-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 100%;
          }
          .pc-orbit-wrap {
            width: 500px;
            height: 500px;
            right: -200px;
          }
          .pc-clients-row {
            gap: 20px;
          }
          .pc-client-card {
            flex: 0 0 calc(33.333% - 14px);
            width: auto;
            height: 180px;
          }
        }

        /* ============ MOBILE ============ */
        @media (max-width: 768px) {
          .pc-hero {
            padding: 16px 0 64px;
          }
          .pc-hero-content {
            padding: 36px 16px 0;
          }
          .pc-hero-title {
            font-size: 30px;
            line-height: 1.15;
          }
          .pc-hero-sub {
            margin-top: 18px;
            font-size: 12.5px;
            line-height: 1.55;
          }

          .pc-intro {
            padding: 56px 20px 32px;
          }
          .pc-intro-eyebrow {
            font-size: 14px;
            margin-bottom: 14px;
          }
          .pc-intro p {
            font-size: 13px;
            line-height: 1.75;
          }

          .pc-cards-block {
            padding: 24px 20px 40px;
          }
          .pc-cards-title {
            font-size: 17px;
            margin-bottom: 32px;
          }
          .pc-cards-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            max-width: 100%;
          }
          .pc-card {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 12px;
          }
          .pc-card-title {
            font-size: 17px;
            margin-bottom: 12px;
          }
          .pc-card p {
            font-size: 13px;
            line-height: 1.7;
          }

          /* Mobile orbit */
          .pc-orbit-desktop {
            display: none !important;
          }
          .pc-orbit-mobile {
            display: block !important;
            position: relative;
            width: 400px;
            height: 400px;
            margin: -120px 0 -40px auto;
            right: -140px;
            pointer-events: none;
            z-index: 1;
            opacity: 0.5;
          }
          .pc-orbit-mobile .pc-orbit-rings {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            will-change: transform;
          }
          .pc-orbit-mobile .pc-orbit-rings img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: contrast(1.2) brightness(0.85) opacity(0.65);
          }
          .pc-orbit-mobile .pc-orbit-solid {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: contrast(1.3) brightness(0.8) opacity(0.55);
            will-change: transform;
          }

          .pc-closing {
            padding: 40px 20px 32px;
          }
          .pc-closing-eyebrow {
            font-size: 14px;
            margin-bottom: 12px;
          }
          .pc-closing p {
            font-size: 13px;
            line-height: 1.75;
          }

          .pc-clients {
            padding: 0 20px 56px;
          }
          .pc-clients-row {
            gap: 12px;
            justify-content: center;
          }
          .pc-client-card {
            flex: 1 1 calc(50% - 6px);
            width: auto;
            height: 130px;
            padding: 16px;
            border-radius: 10px;
          }
        }

        @media (max-width: 480px) {
          .pc-hero-title {
            font-size: 26px;
          }
          .pc-client-card {
            flex: 1 1 100%;
            height: 140px;
          }
        }

        /* ============ FOOTER LINE FIX ============ */
        .pc-page + footer,
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