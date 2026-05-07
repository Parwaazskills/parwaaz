"use client";

import { useRef, useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";

export default function ClientsSection() {
  const [logoIndex, setLogoIndex] = useState(0);
  const logoTrackRef = useRef<HTMLDivElement | null>(null);

  const handleLogoPrev = () => setLogoIndex((prev) => prev - 1);
  const handleLogoNext = () => setLogoIndex((prev) => prev + 1);

  useEffect(() => {
    const track = logoTrackRef.current;
    if (!track) return;
    const len = clientLogos.length;
    if (logoIndex >= 0 && logoIndex < len) return;

    const handle = setTimeout(() => {
      const wrapped = ((logoIndex % len) + len) % len;
      track.style.transition = "none";
      setLogoIndex(wrapped);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (logoTrackRef.current) logoTrackRef.current.style.transition = "";
        });
      });
    }, 620);

    return () => clearTimeout(handle);
  }, [logoIndex]);

  return (
    <>
      <style jsx global>{`
        .logo-shell {
          position: relative;
          overflow: hidden;
          padding: 24px 0 32px;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        .logo-track {
          display: flex;
          width: max-content;
          gap: 32px;
          padding-left: 16px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        @media (min-width: 640px) { .logo-track { padding-left: 24px; } }
        @media (min-width: 1024px) { .logo-track { padding-left: 32px; } }
        .logo-nav-wrap { display: flex; justify-content: center; margin-top: 8px; }
        .logo-nav-btn {
          width: 84px;
          height: 60px;
          background: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .logo-nav-btn:hover {
          box-shadow: 0 6px 18px rgba(0,254,78,0.18), 0 0 0 2px rgba(0,254,78,0.25);
          border-color: rgba(0,254,78,0.35);
        }
        .logo-nav-arrow {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #8e8e8e;
          border-radius: 8px;
          transition: color 0.25s ease, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease, filter 0.25s ease;
        }
        .logo-nav-arrow svg { width: 20px; height: 20px; transition: filter 0.25s ease; }
        .logo-nav-arrow-prev:hover {
          color: #00fe4e;
          transform: translateX(-2px);
          background: rgba(0,254,78,0.08);
        }
        .logo-nav-arrow-prev:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .logo-nav-arrow-next:hover {
          color: #00fe4e;
          transform: translateX(2px);
          background: rgba(0,254,78,0.08);
        }
        .logo-nav-arrow-next:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .logo-nav-arrow:active { transform: scale(0.92); }
        .logo-card {
          width: clamp(150px, 16vw, 200px);
          height: clamp(80px, 9vw, 110px);
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: none;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.35s ease;
        }
        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 254, 78, 0.12);
        }
        .logo-card img {
          max-height: 55%;
          max-width: 70%;
          width: auto;
          object-fit: contain;
          filter: grayscale(0.15);
          transition: filter 0.3s ease;
        }
        .logo-card:hover img { filter: grayscale(0); }
        @media (max-width: 768px) {
          .logo-shell { padding-bottom: 12px !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white pb-12 lg:pb-20 pt-16 lg:pt-24">
          <div data-reveal="up-sm" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black">
            Clients
          </div>
          <div data-reveal="fade" data-reveal-delay="100" className="gsap-marquee marquee-shell mt-3">
            <div className="marquee-track">
              <span className="gsap-clip marquee-text">Transforming Your Possibilities</span>
              <span className="marquee-text">Transforming Your Possibilities</span>
              <span className="marquee-text">Transforming Your Possibilities</span>
            </div>
          </div>
          <p
            data-reveal="up-sm"
            data-reveal-delay="200"
            className="gsap-words mt-3 lg:mt-4 text-[14px] lg:text-[15px] text-black"
          >
            We work for a wide variety of clients in both the private and public sectors.
          </p>
          <div data-reveal="fade" data-reveal-delay="300" className="logo-shell mt-5 lg:mt-6">
            <div
              ref={logoTrackRef}
              className="logo-track"
              style={{
                transform: `translateX(calc(${
                  -(logoIndex + clientLogos.length)
                } * (clamp(150px, 16vw, 200px) + 32px)))`,
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={logo.name + "-" + i} className="logo-card">
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="zoom" data-reveal-delay="400" className="logo-nav-wrap">
            <div className="logo-nav-btn">
              <button onClick={handleLogoPrev} className="logo-nav-arrow logo-nav-arrow-prev" aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={handleLogoNext} className="logo-nav-arrow logo-nav-arrow-next" aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}