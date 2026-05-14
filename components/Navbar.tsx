"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
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
    title: "AI & Advanced Technology",
    items: [
      { name: "AI Strategy & Readiness", href: "/aitech#ai-strategy-readiness" },
      { name: "International AI Partner Solutions", href: "/aitech#international-ai-partner-brokerage" },
      { name: "Generative AI & LLM Deployment", href: "/aitech#generative-ai-llm-deployment" },
      { name: "Process Automation", href: "/aitech#process-automation-ai-workflows" },
      { name: "Custom Technology Development", href: "/aitech#custom-technology-development" },
      { name: "AI Governance & Compliance", href: "/aitech#ai-governance-compliance" },
    ],
  },
  {
    title: "Reskilling & Upskilling",
    items: [
      { name: "Skills Gap Diagnostics", href: "/reskilling#skills-gap-diagnostics" },
      { name: "Learning Programme Design", href: "/reskilling#learning-programme-architecture" },
      { name: "Platform Deployment & LMS", href: "/reskilling#coursera-enterprise-deployment" },
      { name: "Credentials & Certification", href: "/reskilling#credentials-certification" },
      { name: "Workforce Reskilling & Upskilling", href: "/reskilling#workforce-reskilling-cohorts" },
      { name: "Learning Impact & Skills Intelligence", href: "/reskilling#learning-impact-skills-intelligence" },
    ],
  },
  {
    title: "Talent Mobility & Manpower",
    items: [
      { name: "International Recruitment", href: "/talent#international-recruitment" },
      { name: "Payroll & Contract Management", href: "/talent#payroll-contract-management" },
      { name: "Visa & Immigration Services", href: "/talent#visa-immigration-services" },
      { name: "Workforce Deployment & Settling-in", href: "/talent#workforce-deployment-settling-in" },
      { name: "Talent Intelligence & Analytics", href: "/talent#talent-intelligence-analytics" },
      { name: "Outsourced HR & People Operations", href: "/talent#outsourced-hr-people-operations" },
    ],
  },
  {
    title: "Consulting, Advisory & Research",
    items: [
      { name: "Digital Transformation Advisory", href: "/consulting#digital-transformation-advisory" },
      { name: "Organisational Design & HR Transformation", href: "/consulting#organisational-design-hr-transformation" },
      { name: "Public Sector Innovation", href: "/consulting#public-sector-innovation" },
      { name: "Workforce & Market Research", href: "/consulting#workforce-market-research" },
      { name: "International Market Entry Support", href: "/consulting#international-market-entry-support" },
      { name: "Programme & Project Management", href: "/consulting#programme-project-management" },
    ],
  },
  {
    title: "Workspace, Design & Infrastructure",
    items: [
      { name: "Office Setup & Accommodation", href: "/workspace#office-setup-accommodation" },
      { name: "Architecture & Interior Design", href: "/workspace#architecture-interior-design" },
      { name: "BIM & Digital Construction", href: "/workspace#bim-digital-construction" },
      { name: "Construction Management", href: "/workspace#construction-management" },
      { name: "Fit-out & Refurbishment", href: "/workspace#fit-out-refurbishment" },
      { name: "Workspace Technology Integration", href: "/workspace#workspace-technology-integration" },
    ],
  },
];

export default function Navbar({
  mobileNavOpen,
  setMobileNavOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  setSearchOpen,
  activeLink,
}: NavbarProps) {
  const pathname = usePathname();

  const servicePages = ["/aitech", "/reskilling", "/talent", "/consulting", "/workspace"];

  const detectedActiveLink =
    pathname === "/"
      ? "Home"
      : pathname.startsWith("/about")
      ? "About"
      : pathname.startsWith("/contact")
      ? "Contact"
      : servicePages.some((page) => pathname.startsWith(page))
      ? "Services"
      : "Home";

  const currentActiveLink = activeLink || detectedActiveLink;

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

    const updateDropdownPosition = () => {
      const navRect = nav.getBoundingClientRect();
      const top = navRect.bottom + 8;
      document.documentElement.style.setProperty("--dropdown-top", `${top}px`);
    };

    updateDropdownPosition();
    window.addEventListener("scroll", updateDropdownPosition);
    window.addEventListener("resize", updateDropdownPosition);

    return () => {
      nav.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes navIn {
          from {
            opacity: 0;
            transform: translateY(-22px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes orb1 {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes orb2 {
          from {
            transform: rotate(120deg) translateX(52px) rotate(-120deg);
          }
          to {
            transform: rotate(480deg) translateX(52px) rotate(-480deg);
          }
        }

        @keyframes orb3 {
          from {
            transform: rotate(240deg) translateX(45px) rotate(-240deg);
          }
          to {
            transform: rotate(600deg) translateX(45px) rotate(-600deg);
          }
        }

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
          animation: navIn 0.7s cubic-bezier(0.2, 0.9, 0.3, 1) both;
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

        .pw-nav:hover::before {
          opacity: 1;
        }

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

        @media (min-width: 1024px) {
          .pw-orb-wrap {
            display: block;
          }
        }

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

        .na {
          animation: orb1 5s linear infinite;
        }

        .nb {
          animation: orb2 7s linear infinite;
        }

        .nc {
          animation: orb3 9s linear infinite;
        }

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
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .pw-logo-zone img {
            height: 48px !important;
          }
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
          height: 100%;
        }

        @media (min-width: 1024px) {
          .pw-links {
            display: flex;
          }
        }

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
          cursor: pointer;
        }

        .pw-link::before,
        .pw-link::after {
          display: none !important;
          content: none !important;
        }

        .pw-link-dot {
          display: none !important;
        }

        .pw-link:hover {
          color: #00fe4e;
          transform: translateY(-2px);
        }

        .pw-link-active {
          color: #00fe4e;
        }

        .pw-link-dropdown-wrap {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .pw-link-dropdown-wrap::after {
          content: "";
          position: fixed;
          top: calc(var(--dropdown-top, 100px) - 28px);
          left: 50%;
          transform: translateX(-50%);
          width: min(1280px, calc(100vw - 40px));
          height: 34px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: 999;
        }

        .pw-link-dropdown-wrap:hover::after {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .pw-link-chevron {
          width: 14px;
          height: 14px;
          margin-left: 4px;
          transition: transform 0.3s ease;
        }

        .pw-link-dropdown-wrap:hover .pw-link-chevron {
          transform: rotate(180deg);
        }

        .pw-dropdown-panel {
          position: fixed;
          top: var(--dropdown-top, 100px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: min(1280px, calc(100vw - 40px));
          background:
            linear-gradient(
              135deg,
              rgba(0, 254, 78, 0.08) 0%,
              #0c0f17 40%,
              rgba(5, 8, 137, 0.6) 100%
            ),
            #0c0f17;
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(0, 254, 78, 0.18);
          border-radius: 16px;
          padding: 28px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 0.3s ease,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0.3s;
          z-index: 1000;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(0, 254, 78, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          cursor: default;
        }

        .pw-dropdown-panel::before {
          content: "";
          position: absolute;
          top: -28px;
          left: 0;
          right: 0;
          height: 28px;
        }

        .pw-link-dropdown-wrap:hover .pw-dropdown-panel {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .pw-dropdown-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .pw-dropdown-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .pw-dropdown-col-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00fe4e;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 254, 78, 0.15);
          line-height: 1.3;
          min-height: 50px;
        }

        .pw-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 8px;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
          cursor: pointer;
        }

        .pw-dropdown-item-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.4);
          flex-shrink: 0;
          margin-top: 7px;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .pw-dropdown-item-name {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.35;
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

        .pw-dropdown-item:hover .pw-dropdown-item-name {
          color: #00fe4e;
        }

        @media (max-width: 1023px) {
          .pw-dropdown-panel {
            display: none;
          }

          .pw-link-chevron {
            display: none;
          }
        }

        .pw-search {
          position: relative;
          z-index: 5;
          padding: 0 14px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.75);
          transition: color 0.25s, transform 0.3s;
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        @media (min-width: 1024px) {
          .pw-search {
            padding: 0 20px 0 0;
            margin-left: 0;
          }
        }

        .pw-search:hover {
          color: #00fe4e;
          transform: translateY(-2px) scale(1.1);
        }

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

        @media (min-width: 1024px) {
          .pw-mobile-toggle {
            display: none;
          }
        }

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
          transition:
            background 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
          cursor: pointer;
        }

        .pw-social-icon:hover {
          background: rgba(0, 254, 78, 0.15);
          color: #00fe4e;
          box-shadow:
            0 0 18px rgba(0, 254, 78, 0.6),
            0 0 0 1px rgba(0, 254, 78, 0.4);
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
          <Link href="#" className="pw-social-icon">
            <FacebookSvg />
          </Link>
          <Link href="#" className="pw-social-icon">
            <YoutubeSvg />
          </Link>
          <Link href="#" className="pw-social-icon">
            <XSvg />
          </Link>
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
            <Link href="/">
              <img src="/parwaaz-logo.png" alt="Parwaaz" />
            </Link>
          </div>

          <div className="pw-links">
            {[
              { l: "Home", href: "/", hasDropdown: false },
              { l: "About", href: "/about", hasDropdown: false },
              { l: "Services", href: "#", hasDropdown: true },
              { l: "Contact", href: "/contact", hasDropdown: false },
            ].map(({ l, href, hasDropdown }) => {
              const a = l === currentActiveLink;

              return hasDropdown ? (
                <div key={l} className="pw-link-dropdown-wrap">
                  <Link href={href} className={a ? "pw-link pw-link-active" : "pw-link"}>
                    <span className="pw-link-dot" />
                    <span>{l}</span>
                    <svg className="pw-link-chevron" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 8L10 13L15 8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  <div className="pw-dropdown-panel">
                    <div className="pw-dropdown-grid-5">
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

          <button
            className="pw-mobile-toggle"
            aria-label="Menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileNavOpen && (
          <div className="lg:hidden mt-3 rounded-2xl border border-[#00fe4e]/30 bg-black/95 backdrop-blur p-5 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              className={`block text-base font-semibold py-2 ${
                currentActiveLink === "Home" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileNavOpen(false)}
              className={`block text-base font-semibold py-2 ${
                currentActiveLink === "About" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"
              }`}
            >
              About
            </Link>

            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={`flex w-full items-center justify-between py-2 text-base font-semibold cursor-pointer ${
                currentActiveLink === "Services" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"
              }`}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300"
                style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path
                  d="M5 8L10 13L15 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: mobileServicesOpen ? "3500px" : "0px",
                opacity: mobileServicesOpen ? 1 : 0,
              }}
            >
              <div className="pl-3 pt-1 pb-2 space-y-4">
                {SERVICES_DROPDOWN.map((col) => (
                  <div key={col.title}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e] mb-1.5">
                      {col.title}
                    </div>

                    <div className="space-y-1">
                      {col.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setMobileNavOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e] cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileNavOpen(false)}
              className={`block text-base font-semibold py-2 ${
                currentActiveLink === "Contact" ? "text-[#00fe4e]" : "text-white hover:text-[#00fe4e]"
              }`}
            >
              Contact
            </Link>

            <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00fe4e]" />
                +92 300 2855800
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#00fe4e]" />
                +92 300 2855800
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}