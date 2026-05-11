"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Mail, Phone, Search, Menu, X } from "lucide-react";
import { FacebookSvg, YoutubeSvg, XSvg } from "@/components/SocialIcons";

interface NavbarProps {
  mobileNavOpen: boolean;
  setMobileNavOpen: (v: boolean) => void;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  setSearchOpen: (v: boolean) => void;
  activeLink?: string;
}

const SERVICES_DROPDOWN = [
  {
    title: "Skills Management",
    items: [
      { name: "Digital Learning", href: "/services/skills-management/digital-learning" },
      { name: "AI Learning", href: "/services/skills-management/ai-learning" },
      { name: "Workforce Development", href: "/services/skills-management/workforce-development" },
      { name: "Professional Certifications", href: "/services/skills-management/professional-certifications" },
    ],
  },
  {
    title: "Manpower Solutions",
    items: [
      { name: "Talent Mobility", href: "/services/manpower-solutions/talent-mobility" },
      { name: "Workforce Operations", href: "/services/manpower-solutions/workforce-operations" },
      { name: "Talent Sourcing", href: "/services/manpower-solutions/talent-sourcing" },
      { name: "Managed Workforce Services", href: "/services/manpower-solutions/managed-workforce-services" },
    ],
  },
  {
    title: "Research & Surveys",
    items: [
      { name: "Market Research", href: "/services/research-surveys/market-research" },
      { name: "Surveys & Assessments", href: "/services/research-surveys/surveys-assessments" },
      { name: "Impact Assessment", href: "/services/research-surveys/impact-assessment" },
      { name: "Research Advisory", href: "/services/research-surveys/research-advisory" },
    ],
  },
  {
    title: "Consulting & Business",
    items: [
      { name: "Business Consulting", href: "/services/consulting-business/business-consulting" },
      { name: "Strategic Advisory", href: "/services/consulting-business/strategic-advisory" },
      { name: "Creative & Digital Services", href: "/services/consulting-business/creative-digital-services" },
      { name: "Business Support Services", href: "/services/consulting-business/business-support-services" },
    ],
  },
];

export default function Navbar({
  mobileNavOpen,
  setMobileNavOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  setSearchOpen,
  activeLink = "Home",
}: NavbarProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const nav = document.querySelector<HTMLElement>(".pw-nav");
    if (!nav) return;
    const move = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      nav.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      nav.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    nav.addEventListener("mousemove", move);
    return () => nav.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes navIn { from { opacity: 0; transform: translateY(-22px) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes orb1 { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        @keyframes orb2 { from { transform: rotate(120deg) translateX(52px) rotate(-120deg); } to { transform: rotate(480deg) translateX(52px) rotate(-480deg); } }
        @keyframes orb3 { from { transform: rotate(240deg) translateX(45px) rotate(-240deg); } to { transform: rotate(600deg) translateX(45px) rotate(-600deg); } }

        .pw-nav-wrapper {
          position: relative;
          z-index: 60;
          margin-top: 8px;
        }
        @media (min-width: 1024px) {
          .pw-nav-wrapper {
            margin-top: -10px;
            width: min(1320px, calc(100vw - 34px));
            margin-left: auto;
            margin-right: auto;
          }
        }

        .pw-nav {
          --mx: 50%;
          --my: 50%;
          position: relative;
          z-index: 50;
          width: 100%;
          height: 64px !important;
          border-radius: 24px;
          display: flex;
          align-items: center;
          background: linear-gradient(
            90deg,
            #00ff66 0%,
            #00c653 22%,
            #0a6c3f 38%,
            #032d1e 55%,
            #021722 75%,
            #001326 100%
          ) !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          animation: navIn .7s cubic-bezier(.2,.9,.3,1) both;
          transition: transform 0.35s ease, filter 0.35s ease;
          isolation: isolate;
          overflow: visible;
        }
        @media (min-width: 1024px) {
          .pw-nav {
            height: 72px !important;
          }
        }

        .pw-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at var(--mx) var(--my),
            rgba(0, 254, 78, 0.46),
            rgba(0, 254, 78, 0.16) 24%,
            transparent 56%
          );
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .pw-nav:hover::before { opacity: 1; }

        .pw-nav:hover {
          transform: translateY(-1px);
          filter: drop-shadow(0 0 18px rgba(0, 254, 78, 0.34));
        }

        .pw-nav::after {
          display: none !important;
          content: none !important;
        }

        .pw-nav-bg,
        .pw-nav-bg::before,
        .pw-nav-bg::after,
        .pw-logo-glow,
        .pw-glow-line {
          display: none !important;
          opacity: 0 !important;
          box-shadow: none !important;
          filter: none !important;
        }

        .pw-orb-wrap {
          position: absolute;
          left: 130px;
          top: 50%;
          width: 0;
          height: 0;
          pointer-events: none;
          z-index: 4;
          display: none;
        }
        @media (min-width: 1024px) { .pw-orb-wrap { display: block; } }
        .pw-orb {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
          margin: -1.5px 0 0 -1.5px;
          opacity: 0.5;
        }
        .na { animation: orb1 5s linear infinite; }
        .nb { animation: orb2 7s linear infinite; }
        .nc { animation: orb3 9s linear infinite; }

        .pw-logo-zone {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          padding: 0 16px;
          height: 100%;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .pw-logo-zone {
            padding: 0 44px;
            min-width: 320px;
          }
        }
        .pw-logo-zone img {
          height: 38px !important;
          width: auto;
          object-fit: contain;
          opacity: 1 !important;
          filter: brightness(0) invert(1) !important;
          mix-blend-mode: normal !important;
        }
        @media (min-width: 1024px) {
          .pw-logo-zone img { height: 48px !important; }
        }
        .pw-logo-zone img:hover {
          transform: none !important;
          filter: brightness(0) invert(1) !important;
        }

        .pw-links {
          position: relative;
          z-index: 5;
          display: none;
          flex: 1;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        @media (min-width: 1024px) { .pw-links { display: flex; } }
        .pw-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-decoration: none;
          border-radius: 999px;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .pw-link::before,
        .pw-link::after {
          display: none !important;
          content: none !important;
        }
        .pw-link-dot { display: none !important; }
        .pw-link:hover {
          color: #00fe4e;
          transform: translateY(-2px);
        }
        .pw-link-active { color: #00fe4e; }

        .pw-link-dropdown-wrap { position: relative; }
        .pw-link-chevron {
          width: 14px;
          height: 14px;
          margin-left: 4px;
          transition: transform 0.3s ease;
        }
        .pw-link-dropdown-wrap:hover .pw-link-chevron { transform: rotate(180deg); }

        .pw-dropdown-panel {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: min(1100px, calc(100vw - 40px));
          background:
            linear-gradient(135deg, rgba(0, 254, 78, 0.08) 0%, #0c0f17 40%, rgba(5, 8, 137, 0.6) 100%),
            #0c0f17;
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(0, 254, 78, 0.18);
          border-radius: 16px;
          padding: 28px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.3s;
          z-index: 1000;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(0, 254, 78, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .pw-dropdown-panel::before {
          content: '';
          position: absolute;
          top: -18px;
          left: 0;
          right: 0;
          height: 18px;
        }
        .pw-link-dropdown-wrap:hover .pw-dropdown-panel {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .pw-dropdown-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .pw-dropdown-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pw-dropdown-col-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00fe4e;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 254, 78, 0.15);
        }
        .pw-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 9px 10px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .pw-dropdown-item-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.4);
          flex-shrink: 0;
          margin-top: 7px;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .pw-dropdown-item-name {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.4;
          transition: color 0.25s ease;
        }
        .pw-dropdown-item:hover {
          background: rgba(0, 254, 78, 0.08);
          transform: translateX(2px);
        }
        .pw-dropdown-item:hover .pw-dropdown-item-dot {
          background: #00fe4e;
          box-shadow: 0 0 10px rgba(0, 254, 78, 0.7);
          transform: scale(1.3);
        }
        .pw-dropdown-item:hover .pw-dropdown-item-name { color: #00fe4e; }
        @media (max-width: 1023px) {
          .pw-dropdown-panel { display: none; }
          .pw-link-chevron { display: none; }
        }

        .pw-search {
          position: relative;
          z-index: 5;
          padding: 0 14px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.75);
          transition: color .25s, transform .3s;
          display: flex;
          align-items: center;
          margin-left: auto;
        }
        @media (min-width: 1024px) {
          .pw-search { padding: 0 20px 0 0; margin-left: 0; }
        }
        .pw-search:hover { color: #00fe4e; transform: translateY(-2px) scale(1.1); }

        .pw-mobile-toggle {
          position: relative;
          z-index: 5;
          padding: 0 14px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #fff;
          display: flex;
          align-items: center;
        }
        @media (min-width: 1024px) { .pw-mobile-toggle { display: none; } }

        .pw-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          box-shadow: 0 0 0 0 rgba(0, 254, 78, 0);
          transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .pw-social-icon:hover {
          background: rgba(0, 254, 78, 0.15);
          color: #00fe4e;
          box-shadow: 0 0 18px rgba(0, 254, 78, 0.6), 0 0 0 1px rgba(0, 254, 78, 0.4);
          transform: translateY(-1px) scale(1.05);
        }
      `}</style>

      <div className="hidden lg:flex items-center justify-end gap-5 text-[12px] font-semibold text-white/90 mb-3 max-w-[1320px] w-[calc(100%-34px)] mx-auto pr-2">
        <div className="flex items-center gap-2">
          <Mail className="h-3.5 w-3.5 text-[#00fe4e]" />
          <span>+92 300 2855800</span>
        </div>
        <span className="text-white/35">|</span>
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-[#00fe4e]" />
          <span>+92 300 2855800</span>
        </div>
        <span className="text-white/35">|</span>
        <span className="text-white/65 mr-2">Follow Us:</span>
        <div className="flex items-center gap-3">
          <Link href="#" className="pw-social-icon"><FacebookSvg /></Link>
          <Link href="#" className="pw-social-icon"><YoutubeSvg /></Link>
          <Link href="#" className="pw-social-icon"><XSvg /></Link>
        </div>
      </div>

      <div className="pw-nav-wrapper relative mb-4 lg:mb-5">
        <nav className="pw-nav">
          <div className="pw-nav-bg" />
          <div className="pw-glow-line" />
          <div className="pw-logo-glow" />
          <div className="pw-orb-wrap">
            <div className="pw-orb na" />
            <div className="pw-orb nb" />
            <div className="pw-orb nc" />
          </div>
          <div className="pw-logo-zone">
            <img src="/parwaaz-logo.png" alt="Parwaaz" />
          </div>
          <div className="pw-links">
            {[
              { l: "Home", href: "/", hasDropdown: false },
              { l: "About", href: "/about", hasDropdown: false },
              { l: "Services", href: "#", hasDropdown: true },
              { l: "Contact", href: "/contact", hasDropdown: false },
            ].map(({ l, href, hasDropdown }) => {
              const a = l === activeLink;
              return hasDropdown ? (
                <div key={l} className="pw-link-dropdown-wrap">
                  <Link href={href} className={a ? "pw-link pw-link-active" : "pw-link"}>
                    <span className="pw-link-dot" />
                    <span>{l}</span>
                    <svg className="pw-link-chevron" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className="pw-dropdown-panel">
                    <div className="pw-dropdown-grid-4">
                      {SERVICES_DROPDOWN.map((col) => (
                        <div key={col.title} className="pw-dropdown-col">
                          <div className="pw-dropdown-col-title">{col.title}</div>
                          {col.items.map((item) => (
                            <Link key={item.name} href={item.href} className="pw-dropdown-item">
                              <span className="pw-dropdown-item-dot" />
                              <span className="pw-dropdown-item-name">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={l} href={href} className={a ? "pw-link pw-link-active" : "pw-link"}>
                  <span className="pw-link-dot" />
                  <span>{l}</span>
                </Link>
              );
            })}
          </div>
          <button className="pw-search" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <Search size={18} strokeWidth={2} />
          </button>
          <button className="pw-mobile-toggle" aria-label="Menu" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileNavOpen && (
          <div className="lg:hidden mt-3 rounded-2xl border border-[#00fe4e]/30 bg-black/95 backdrop-blur p-5 space-y-1">
            <Link href="/" onClick={() => setMobileNavOpen(false)} className={`block text-base font-semibold py-2 ${activeLink === "Home" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"}`}>Home</Link>
            <Link href="/about" onClick={() => setMobileNavOpen(false)} className={`block text-base font-semibold py-2 ${activeLink === "About" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"}`}>About</Link>

            <button
              onClick={() => setMobileServicesOpen(v => !v)}
              className={`flex w-full items-center justify-between py-2 text-base font-semibold ${activeLink === "Services" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"}`}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300"
                style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: mobileServicesOpen ? "2000px" : "0px",
                opacity: mobileServicesOpen ? 1 : 0,
              }}
            >
              <div className="pl-3 pt-1 pb-2 space-y-4">
                {SERVICES_DROPDOWN.map((col) => (
                  <div key={col.title}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e] mb-1.5">{col.title}</div>
                    <div className="space-y-1">
                      {col.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => { setMobileNavOpen(false); setMobileServicesOpen(false); }}
                          className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" onClick={() => setMobileNavOpen(false)} className={`block text-base font-semibold py-2 ${activeLink === "Contact" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"}`}>Contact</Link>

            <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#00fe4e]" />+92 300 2855800</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#00fe4e]" />+92 300 2855800</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}