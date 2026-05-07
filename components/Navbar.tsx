"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone, Search, Menu, X } from "lucide-react";
import { FacebookSvg, YoutubeSvg, XSvg } from "@/components/SocialIcons";

interface NavbarProps {
  mobileNavOpen?: boolean;
  setMobileNavOpen?: (v: boolean) => void;
  mobileServicesOpen?: boolean;
  setMobileServicesOpen?: (v: boolean | ((prev: boolean) => boolean)) => void;
  setSearchOpen?: (v: boolean) => void;
}

export default function Navbar({
  mobileNavOpen,
  setMobileNavOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  setSearchOpen,
}: NavbarProps = {}) {
  const [internalMobileNavOpen, setInternalMobileNavOpen] = useState(false);
  const [internalMobileServicesOpen, setInternalMobileServicesOpen] =
    useState(false);
  const [, setInternalSearchOpen] = useState(false);

  const navOpen = mobileNavOpen ?? internalMobileNavOpen;
  const servicesOpen = mobileServicesOpen ?? internalMobileServicesOpen;

  const updateNavOpen = setMobileNavOpen ?? setInternalMobileNavOpen;
  const updateServicesOpen =
    setMobileServicesOpen ?? setInternalMobileServicesOpen;
  const updateSearchOpen = setSearchOpen ?? setInternalSearchOpen;

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
            margin-top: 8px;
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
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: min(900px, calc(100vw - 40px));
          background: linear-gradient(
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
          padding: 24px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.3s;
          z-index: 1000;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(0, 254, 78, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .pw-dropdown-panel::before {
          content: "";
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

        .pw-dropdown-grid-6 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .pw-dropdown-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .pw-dropdown-col-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00fe4e;
          margin-bottom: 12px;
        }

        .pw-dropdown-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 10px;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease,
            color 0.25s ease;
        }

        .pw-dropdown-item-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.4);
          flex-shrink: 0;
          transition: background 0.25s ease, box-shadow 0.25s ease,
            transform 0.25s ease;
        }

        .pw-dropdown-item-name {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.3;
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: transparent;
          color: rgba(255, 255, 255, 0.75);
          box-shadow: 0 0 0 0 rgba(0, 254, 78, 0);
          transition: background 0.3s ease, color 0.3s ease,
            box-shadow 0.3s ease, transform 0.3s ease;
        }

        .pw-social-icon:hover {
          background: rgba(0, 254, 78, 0.15);
          color: #00fe4e;
          box-shadow: 0 0 18px rgba(0, 254, 78, 0.6),
            0 0 0 1px rgba(0, 254, 78, 0.4);
          transform: translateY(-1px) scale(1.05);
        }

        .pw-topbar {
          width: min(1320px, calc(100vw - 34px));
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      <div className="pw-topbar hidden items-center justify-end pt-[6px] lg:flex">
        <div className="flex items-center justify-end gap-[14px] text-[12px] font-semibold leading-none text-white/90">
          <div className="flex items-center gap-[6px] whitespace-nowrap">
            <Mail className="h-[13px] w-[13px] text-[#00fe4e]" />
            <span>+92 300 2855800</span>
          </div>

          <span className="h-[14px] w-px bg-white/35" />

          <div className="flex items-center gap-[6px] whitespace-nowrap">
            <Phone className="h-[13px] w-[13px] text-[#00fe4e]" />
            <span>+92 300 2855800</span>
          </div>

          <span className="h-[14px] w-px bg-white/35" />

          <div className="flex items-center gap-[9px] whitespace-nowrap">
            <span className="text-white/70">Follow Us:</span>
            <Link href="#" className="pw-social-icon" aria-label="Facebook">
              <FacebookSvg />
            </Link>
            <Link href="#" className="pw-social-icon" aria-label="YouTube">
              <YoutubeSvg />
            </Link>
            <Link href="#" className="pw-social-icon" aria-label="X">
              <XSvg />
            </Link>
          </div>
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
              { l: "Home", a: true, hasDropdown: false },
              { l: "About", a: false, hasDropdown: false },
              { l: "Services", a: false, hasDropdown: true },
              { l: "Contact", a: false, hasDropdown: false },
            ].map(({ l, a, hasDropdown }) =>
              hasDropdown ? (
                <div key={l} className="pw-link-dropdown-wrap">
                  <Link
                    href="#"
                    className={a ? "pw-link pw-link-active" : "pw-link"}
                  >
                    <span className="pw-link-dot" />
                    <span>{l}</span>
                    <svg
                      className="pw-link-chevron"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
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
                    <div className="pw-dropdown-grid pw-dropdown-grid-6">
                      <div className="pw-dropdown-col">
                        <div className="pw-dropdown-col-title">
                          Marketing & Branding
                        </div>
                        {[
                          "International Events",
                          "Domestic Events",
                          "Webinars",
                          "Meetups",
                          "Tech Export Marketing",
                          "Tech Connect",
                        ].map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="pw-dropdown-item"
                          >
                            <span className="pw-dropdown-item-dot" />
                            <span className="pw-dropdown-item-name">
                              {item}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="pw-dropdown-col">
                        <div className="pw-dropdown-col-title">
                          HR Skills & Capacity
                        </div>
                        {[
                          "SLED Program",
                          "GAIN Network",
                          "ICT Training Roadmap",
                          "ILMS",
                          "PM's Skills Initiative",
                          "INSPIRE Program",
                        ].map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="pw-dropdown-item"
                          >
                            <span className="pw-dropdown-item-dot" />
                            <span className="pw-dropdown-item-name">
                              {item}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="pw-dropdown-col">
                        <div className="pw-dropdown-col-title">
                          Infrastructure
                        </div>
                        {["STPs", "IT Parks", "NCSP Centres"].map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="pw-dropdown-item"
                          >
                            <span className="pw-dropdown-item-dot" />
                            <span className="pw-dropdown-item-name">
                              {item}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l}
                  href="#"
                  className={a ? "pw-link pw-link-active" : "pw-link"}
                >
                  <span className="pw-link-dot" />
                  <span>{l}</span>
                </Link>
              )
            )}
          </div>

          <button
            className="pw-search"
            aria-label="Search"
            onClick={() => updateSearchOpen(true)}
          >
            <Search size={18} strokeWidth={2} />
          </button>

          <button
            className="pw-mobile-toggle"
            aria-label="Menu"
            onClick={() => updateNavOpen(!navOpen)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {navOpen && (
          <div className="mt-3 space-y-1 rounded-2xl border border-[#00fe4e]/30 bg-black/95 p-5 backdrop-blur lg:hidden">
            <Link
              href="#"
              onClick={() => updateNavOpen(false)}
              className="block py-2 text-base font-semibold text-white hover:text-[#00fe4e]"
            >
              Home
            </Link>

            <Link
              href="#"
              onClick={() => updateNavOpen(false)}
              className="block py-2 text-base font-semibold text-white hover:text-[#00fe4e]"
            >
              About
            </Link>

            <button
              onClick={() => updateServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2 text-base font-semibold text-white hover:text-[#00fe4e]"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300"
                style={{
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
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
                maxHeight: servicesOpen ? "1000px" : "0px",
                opacity: servicesOpen ? 1 : 0,
              }}
            >
              <div className="space-y-3 pb-2 pl-3 pt-1">
                <div>
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e]">
                    Marketing &amp; Branding
                  </div>
                  <div className="space-y-1">
                    {[
                      "International Events",
                      "Domestic Events",
                      "Webinars",
                      "Meetups",
                      "Tech Export Marketing",
                      "Tech Connect",
                    ].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => {
                          updateNavOpen(false);
                          updateServicesOpen(false);
                        }}
                        className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e]">
                    HR Skills &amp; Capacity
                  </div>
                  <div className="space-y-1">
                    {[
                      "SLED Program",
                      "GAIN Network",
                      "ICT Training Roadmap",
                      "ILMS",
                      "PM's Skills Initiative",
                      "INSPIRE Program",
                    ].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => {
                          updateNavOpen(false);
                          updateServicesOpen(false);
                        }}
                        className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e]">
                    Infrastructure
                  </div>
                  <div className="space-y-1">
                    {["STPs", "IT Parks", "NCSP Centres"].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => {
                          updateNavOpen(false);
                          updateServicesOpen(false);
                        }}
                        className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#"
              onClick={() => updateNavOpen(false)}
              className="block py-2 text-base font-semibold text-white hover:text-[#00fe4e]"
            >
              Contact
            </Link>

            <div className="mt-3 space-y-2 border-t border-white/10 pt-3 text-sm text-white/80">
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