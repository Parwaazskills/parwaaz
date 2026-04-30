"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, Search, Plus, Mic, ArrowUp, Menu, X,
  Lightbulb, Code2, FileText, GraduationCap,
  Database, Image as ImageIcon, MapPin,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectOrbitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const slides = [
    {
      title: "Demand",
      text: "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.",
    },
    {
      title: "Design",
      text: "Crafting tailored learning experiences that align with industry demands and prepare professionals for the future of work.",
    },
    {
      title: "Build",
      text: "Building real-world skills through hands-on projects, expert mentorship, and globally recognized certifications.",
    },
    {
      title: "Validate",
      text: "Validating expertise with industry-recognized credentials, helping professionals stand out in a competitive global workforce.",
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const orbit = orbitRef.current;
    const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !orbit || slideEls.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(orbit, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        return;
      }

      slideEls.forEach((slide, index) => {
        gsap.set(slide, {
          opacity: index === 0 ? 1 : 0,
          x: index === 0 ? 0 : -100,
          y: index === 0 ? 0 : 280,
          rotation: index === 0 ? 0 : 32,
          scale: index === 0 ? 1 : 0.85,
          filter: index === 0 ? "blur(0px)" : "blur(6px)",
          transformOrigin: "-380px 50%",
        });
      });

      const slideDuration = 1100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${slideEls.length * slideDuration}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < slideEls.length; i++) {
        const prev = slideEls[i - 1];
        const next = slideEls[i];
        if (!prev || !next) continue;

        tl.to(prev, {
          opacity: 0,
          x: 80,
          y: -260,
          rotation: -32,
          scale: 0.85,
          filter: "blur(6px)",
          duration: 1.2,
          ease: "power3.inOut",
        }, i);

        tl.fromTo(next, {
          opacity: 0,
          x: -100,
          y: 280,
          rotation: 32,
          scale: 0.85,
          filter: "blur(6px)",
          transformOrigin: "-380px 50%",
        }, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.inOut",
        }, i + 0.02);
      }

      const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);
      return () => clearTimeout(refreshTimeout);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="po-section">
      <div className="po-title">
        <h2>
          <span className="po-title-a">HOW IT</span>
          <span className="po-title-b">WORKS</span>
        </h2>
      </div>

      <div className="po-canvas">
        <div ref={orbitRef} className="po-rings">
          <img src="/orbit.svg" alt="" />
        </div>
        <img src="/orbit1.svg" alt="" className="po-solid" />
        <div className="po-glow" />
      </div>

      <img src="/vector.svg" alt="" className="po-vector" />

      <div className="po-content">
        <div className="po-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => { slideRefs.current[index] = el; }}
              className="po-slide"
            >
              <div className="po-slide-row">
                <div className="po-ball">
                  <div className="po-ball-core" />
                  <div className="po-ball-pulse" />
                </div>
                <div className="po-slide-content">
                  <h3 className="po-slide-title">{slide.title}</h3>
                  <p className="po-slide-text">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .po-section {
          position: relative;
          width: 100%;
          min-height: 90vh;
          overflow: hidden;
          background: #ffffff;
          padding: 40px 0 100px;
        }

        .po-title {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 20px;
          padding: 0 24px;
        }
        .po-title h2 {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 1;
          display: inline-flex;
          align-items: baseline;
          gap: 16px;
        }
        .po-title-a {
          background: linear-gradient(135deg, #0adf54 0%, #0a7a5f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .po-title-b {
          background: linear-gradient(135deg, #0a7a5f 0%, #050889 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .po-canvas {
          position: absolute;
          top: 50%;
          left: -300px;
          width: 700px;
          height: 700px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 1;
        }
        .po-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 130%;
          height: 130%;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
        .po-rings img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.3) brightness(0.9) opacity(0.85);
        }
        .po-solid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: contrast(1.4) brightness(0.75) opacity(0.7);
        }
        .po-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 254, 78, 0.08) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
        }

        .po-vector {
          position: absolute;
          right: -20px;
          bottom: 40px;
          width: 360px;
          max-height: 540px;
          height: auto;
          object-fit: contain;
          z-index: 2;
          pointer-events: none;
          opacity: 0.85;
        }

        .po-content {
          position: relative;
          z-index: 5;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px 0 0;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .po-slides {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin-right: 40px;
          height: 320px;
          perspective: 1400px;
        }

        .po-slide {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          will-change: transform, opacity, filter;
        }

        .po-slide-row {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .po-ball {
          position: relative;
          width: 28px;
          height: 28px;
          min-width: 28px;
          margin-top: 14px;
          flex-shrink: 0;
        }
        .po-ball-core {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #d8d8d8 0%, #c0c0c0 50%, #9a9a9a 100%);
          box-shadow:
            0 0 0 3px rgba(180, 180, 180, 0.18),
            0 2px 8px rgba(0, 0, 0, 0.12),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          animation: poBallPulse 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .po-ball-pulse {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(160, 160, 160, 0.5);
          opacity: 0;
          animation: poBallRipple 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes poBallPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 3px rgba(180, 180, 180, 0.18), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 5px rgba(180, 180, 180, 0.28), 0 2px 12px rgba(0, 0, 0, 0.16), inset 0 1px 2px rgba(255, 255, 255, 0.6);
          }
        }
        @keyframes poBallRipple {
          0% { opacity: 0.7; transform: scale(0.8); }
          100% { opacity: 0; transform: scale(1.8); }
        }

        .po-slide-content {
          flex: 1;
          min-width: 0;
        }

        .po-slide-title {
          margin: 0 0 14px 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(40px, 4vw, 53px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, #0adf54 0%, #0a7a5f 50%, #050889 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .po-slide-text {
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(14px, 1.5vw, 20px);
          line-height: 1.65;
          color: rgba(0, 0, 0, 0.62);
          font-weight: 400;
          max-width: 700px;
        }

        @media (max-width: 1280px) {
          .po-canvas { left: -260px; width: 600px; height: 600px; }
          .po-vector { width: 320px; max-height: 480px; bottom: 40px; right: -10px; }
        }

        @media (max-width: 1024px) {
          .po-section { padding: 40px 0 80px; min-height: 90vh; }
          .po-canvas { left: -280px; width: 560px; height: 560px; }
          .po-vector { width: 240px; max-height: 440px; bottom: -40px; right: -10px; }
          .po-content { padding: 0 24px 0 0; min-height: 55vh; }
          .po-slides { margin-right: 24px; max-width: 480px; height: 280px; }
        }

        @media (max-width: 768px) {
          .po-section { padding: 24px 0 8px; min-height: 0; }
          .po-title { margin-bottom: 16px; }
          .po-title h2 { font-size: clamp(24px, 6.5vw, 32px); gap: 10px; }
          .po-canvas {
            top: auto;
            bottom: 0;
            left: -120px;
            width: 200px;
            height: 200px;
            transform: none;
            opacity: 0.3;
            z-index: 1;
          }
          .po-vector {
            right: -30px;
            bottom: 0;
            width: 130px;
            max-height: 200px;
            opacity: 0.55;
            z-index: 2;
          }
          .po-content {
            position: relative;
            z-index: 5;
            min-height: 0;
            padding: 0 20px;
            align-items: stretch;
            justify-content: flex-start;
          }
          .po-slides {
            position: relative;
            height: auto;
            min-height: 0;
            max-width: 100%;
            margin-right: 0;
          }
          .po-slide {
            position: relative;
            top: auto;
            left: auto;
            transform: none !important;
          }
          .po-slide:not(:first-child) {
            display: none;
          }
          .po-slide-row { gap: 14px; align-items: flex-start; }
          .po-ball { width: 20px; height: 20px; min-width: 20px; margin-top: 6px; }
          .po-slide-title { font-size: 26px; line-height: 1.1; margin-bottom: 8px; }
          .po-slide-text { font-size: 13px; line-height: 1.55; }
        }

        @media (max-width: 480px) {
          .po-section { padding: 20px 0 8px; }
          .po-title { padding: 0 16px; margin-bottom: 14px; }
          .po-title h2 { font-size: 22px; gap: 8px; }
          .po-canvas { left: -110px; width: 180px; height: 180px; opacity: 0.28; }
          .po-vector { width: 110px; max-height: 170px; bottom: 0; right: -20px; opacity: 0.5; }
          .po-content { padding: 0 16px; }
          .po-slide-title { font-size: 22px; }
          .po-slide-text { font-size: 12.5px; line-height: 1.5; }
        }
      `}</style>
    </section>
  );
}

function FacebookSvg() { return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.703 4.533-4.703 1.313 0 2.686.236 2.686.236v2.973H15.83c-1.49 0-1.955.931-1.955 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" /></svg>; }
function YoutubeSvg() { return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.504 3.5 12 3.5 12 3.5s-7.504 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.08 0 12 0 12s0 3.92.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.496 20.5 12 20.5 12 20.5s7.504 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>; }
function XSvg() { return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.636 7.584H.478l8.6-9.83L0 1.153h7.594l5.243 6.932L18.9 1.153Zm-1.29 19.494h2.04L6.486 3.246H4.298l13.313 17.401Z" /></svg>; }
function LinkedInSvg() { return <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" /></svg>; }

const chips = [
  { label: "Brainstorm", icon: Lightbulb }, { label: "Code", icon: Code2 },
  { label: "Summarize text", icon: FileText }, { label: "Get advice", icon: GraduationCap },
  { label: "Analyze data", icon: Database }, { label: "Analyze images", icon: ImageIcon },
];
const clientLogos = [
  { name: "Toyota", src: "/toyota-logo.png" }, { name: "UBL", src: "/ubl-logo.png" },
  { name: "Systems", src: "/systems-logo.png" }, { name: "TÜV Rheinland", src: "/tuv-logo.png" },
  { name: "FPCL", src: "/fpcl-logo.png" },
];
const teamMembers = [
  { name: "SHAHBAN SHOUKAT", role: "Co-Founder", img: "/team-shahban.png" },
  { name: "SHARJEEL USMANI", role: "Co-Founder & Business Creation Leader", img: "/team-sharjeel.png" },
  { name: "OMAR NAEEM", role: "CFO / Investment Advisor", img: "/team-omar.png" },
  { name: "SALMAN FAIZ", role: "Digital Marketing Consultant", img: "/team-salman.png" },
];

export default function Page() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroServicesOpen, setHeroServicesOpen] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const cx = useRef(0); const cy = useRef(0);
  const rx = useRef(0); const ry = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const ring = ringRef.current; const dot = dotRef.current;
    if (!ring || !dot) return;
    let af = 0;
    let initialized = false;

    const move = (e: MouseEvent) => {
      cx.current = e.clientX; cy.current = e.clientY;
      if (!initialized) {
        rx.current = e.clientX;
        ry.current = e.clientY;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
        initialized = true;
      }
      dot.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx.current += (cx.current - rx.current) * 0.18;
      ry.current += (cy.current - ry.current) * 0.18;
      ring.style.transform = `translate3d(${rx.current}px,${ry.current}px,0) translate(-50%,-50%)`;
      af = requestAnimationFrame(loop);
    };

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest && target.closest("a,button,input,textarea,select,label,[role='button']")) {
        document.body.classList.add("pw-ca");
      }
    };
    const handleLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest && target.closest("a,button,input,textarea,select,label,[role='button']")) {
        document.body.classList.remove("pw-ca");
      }
    };

    ring.style.opacity = '0';
    dot.style.opacity = '0';
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", handleEnter, { passive: true });
    document.addEventListener("mouseout", handleLeave, { passive: true });
    af = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
      cancelAnimationFrame(af);
      document.body.classList.remove("pw-ca");
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!heroServicesOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHeroServicesOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [heroServicesOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof IntersectionObserver === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => { el.classList.add('is-visible'); });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) { el.style.transitionDelay = `${delay}ms`; }
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    targets.forEach(el => observer.observe(el));
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach(el => {
        if (!el.dataset.revealObserved) { el.dataset.revealObserved = '1'; observer.observe(el); }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">
      <div ref={ringRef} className="pw-ring" />
      <div ref={dotRef} className="pw-dot" />

      {searchOpen && (
        <div className="pw-search-modal" onClick={() => setSearchOpen(false)}>
          <div className="pw-search-panel" onClick={(e) => e.stopPropagation()}>
            <div className="pw-search-input-row">
              <Search className="pw-search-input-icon" size={20} strokeWidth={2} />
              <input
                type="text"
                className="pw-search-input"
                placeholder="Search Parwaaz..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className="pw-search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={20} />
              </button>
            </div>
            <div className="pw-search-suggestions">
              <div className="pw-search-suggest-label">Suggestions</div>
              {[
                { label: "Our Services", href: "#" },
                { label: "Training Programs", href: "#" },
                { label: "International Recruitment", href: "#" },
                { label: "Coursera Partnership", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "About Parwaaz", href: "#" },
              ]
                .filter(s => searchQuery === "" || s.label.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(s => (
                  <Link key={s.label} href={s.href} className="pw-search-suggest-item" onClick={() => setSearchOpen(false)}>
                    <Search size={14} strokeWidth={2} />
                    <span>{s.label}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (pointer: fine) { body { cursor: none; } a, button, input, textarea, select, label { cursor: none; } }

        [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity, transform; }
        [data-reveal="fade"] { transform: none; }
        [data-reveal="up"] { transform: translateY(40px); }
        [data-reveal="up-sm"] { transform: translateY(20px); }
        [data-reveal="left"] { transform: translateX(-40px); }
        [data-reveal="right"] { transform: translateX(40px); }
        [data-reveal="scale"] { transform: scale(0.92); }
        [data-reveal="zoom"] { transform: scale(0.96) translateY(20px); }
        [data-reveal].is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { [data-reveal] { opacity: 1 !important; transform: none !important; transition: none !important; } }

        .pw-ring, .pw-dot { position: fixed; left: 0; top: 0; pointer-events: none; z-index: 2147483647; will-change: transform; transition: opacity .25s ease, width .28s, height .28s, background .28s, border-color .28s; }
        .pw-ring { width: 46px; height: 46px; border-radius: 50%; border: 1.5px solid rgba(0,254,78,.92); background: rgba(0,254,78,.04); box-shadow: 0 0 28px rgba(0,254,78,.38), inset 0 0 18px rgba(0,254,78,.12); }
        .pw-dot { width: 8px; height: 8px; border-radius: 50%; background: #00fe4e; box-shadow: 0 0 18px rgba(0,254,78,.95), 0 0 42px rgba(0,254,78,.38); }
        body.pw-ca .pw-ring { width: 82px; height: 82px; border-color: rgba(0,254,78,1); background: rgba(0,254,78,.18); }
        body.pw-ca .pw-dot { width: 5px; height: 5px; background: #fff; }
        @media (pointer: coarse) { .pw-ring, .pw-dot { display: none; } }

        @keyframes navIn { from { opacity: 0; transform: translateY(-22px) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes glowBreathe { 0%, 100% { opacity: .82; transform: scale(1); filter: blur(20px); } 50% { opacity: 1; transform: scale(1.28); filter: blur(26px); } }
        @keyframes orb1 { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        @keyframes orb2 { from { transform: rotate(120deg) translateX(52px) rotate(-120deg); } to { transform: rotate(480deg) translateX(52px) rotate(-480deg); } }
        @keyframes orb3 { from { transform: rotate(240deg) translateX(45px) rotate(-240deg); } to { transform: rotate(600deg) translateX(45px) rotate(-600deg); } }

        .pw-nav-wrapper {
          position: relative;
          z-index: 60;
        }

        .pw-nav {
          position: relative;
          z-index: 50;
          width: 100%;
          height: 56px;
          border-radius: 14px;
          overflow: visible;
          display: flex;
          align-items: center;
          background: rgba(8, 10, 14, 0.72);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 8px 32px rgba(0, 0, 0, 0.4);
          animation: navIn .7s cubic-bezier(.2,.9,.3,1) both;
          transition: border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
        }
        .pw-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(90deg, #00FE4E 0%, rgba(12, 165, 59, 0.6) 20%, rgba(30, 30, 30, 0) 100%);
          pointer-events: none;
          opacity: 0;
          transform: translateX(-30%);
          clip-path: inset(0 round 14px);
          transition: opacity 0.5s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pw-nav:hover {
          background: rgba(8, 10, 14, 0.85);
          border-color: rgba(0, 254, 78, 0.18);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 8px 32px rgba(0, 0, 0, 0.5),
            0 0 24px rgba(0, 254, 78, 0.08);
        }
        .pw-nav:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        @media (min-width: 1024px) { .pw-nav { height: 64px; } }
        .pw-glow-line {
          position: absolute;
          left: 20%;
          right: 20%;
          top: -1px;
          height: 1px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent 0%, rgba(0, 254, 78, 0.4) 50%, transparent 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .pw-nav:hover ~ .pw-glow-line,
        .pw-glow-line { opacity: 0.6; }
        .pw-logo-glow {
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 240px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(0, 254, 78, 0.4) 0%, rgba(0, 254, 78, 0.15) 40%, transparent 75%);
          pointer-events: none;
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.4s ease;
        }
        .pw-nav:hover .pw-logo-glow { opacity: 1; }
        .pw-orb-wrap { position: absolute; left: 130px; top: 50%; width: 0; height: 0; pointer-events: none; z-index: 4; display: none; }
        @media (min-width: 1024px) { .pw-orb-wrap { display: block; } }
        .pw-orb { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: rgba(0, 254, 78, 0.7); box-shadow: 0 0 6px rgba(0, 254, 78, 0.6); margin: -1.5px 0 0 -1.5px; opacity: 0.5; }
        .na { animation: orb1 5s linear infinite; }
        .nb { animation: orb2 7s linear infinite; }
        .nc { animation: orb3 9s linear infinite; }
        .pw-logo-zone { position: relative; z-index: 5; display: flex; align-items: center; padding: 0 16px; height: 100%; flex-shrink: 0; }
        @media (min-width: 1024px) { .pw-logo-zone { padding: 0 24px; min-width: 220px; } }
        .pw-logo-zone img { height: 30px; width: auto; object-fit: contain; filter: brightness(1.05) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)); transition: transform .35s, filter .35s; }
        @media (min-width: 1024px) { .pw-logo-zone img { height: 36px; } }
        .pw-logo-zone img:hover { transform: translateY(-2px) scale(1.05); filter: brightness(1.15) drop-shadow(0 4px 14px rgba(0, 254, 78, 0.45)); }
        .pw-links { position: relative; z-index: 5; display: none; flex: 1; align-items: center; justify-content: center; gap: 12px; }
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
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pw-link::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 999px;
          background: linear-gradient(90deg,
            rgba(0, 254, 78, 0) 0%,
            rgba(0, 254, 78, 0.18) 35%,
            rgba(0, 254, 78, 0.28) 50%,
            rgba(0, 254, 78, 0.18) 65%,
            rgba(0, 254, 78, 0) 100%);
          background-size: 220% 100%;
          background-position: 100% 50%;
          opacity: 0;
          transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
        }
        .pw-link::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 999px;
          border: 1px solid transparent;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .pw-link-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 10px rgba(0, 254, 78, 0.95), 0 0 18px rgba(0, 254, 78, 0.45);
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
        }
        .pw-link:hover { color: #00fe4e; }
        .pw-link:hover::before { opacity: 1; background-position: 0% 50%; }
        .pw-link:hover::after { border-color: rgba(0, 254, 78, 0.25); box-shadow: inset 0 0 12px rgba(0, 254, 78, 0.08); }
        .pw-link:hover .pw-link-dot { opacity: 1; transform: scale(1); }
        .pw-link-active { color: #00fe4e; }
        .pw-link-active::before { opacity: 1; background-position: 0% 50%; background: linear-gradient(90deg, rgba(0, 254, 78, 0.22) 0%, rgba(0, 254, 78, 0.12) 100%); }
        .pw-link-active::after { border-color: rgba(0, 254, 78, 0.3); box-shadow: inset 0 0 14px rgba(0, 254, 78, 0.1); }
        .pw-link-active .pw-link-dot { opacity: 1; transform: scale(1); }

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
          width: min(900px, calc(100vw - 40px));
          background:
            linear-gradient(135deg, rgba(0, 254, 78, 0.08) 0%, #0c0f17 40%, rgba(5, 8, 137, 0.6) 100%),
            #0c0f17;
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(0, 254, 78, 0.18);
          border-radius: 16px;
          padding: 24px;
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
          font-family: var(--font-poppins), sans-serif;
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
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .pw-dropdown-item-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.4);
          flex-shrink: 0;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
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
        .pw-dropdown-item:hover .pw-dropdown-item-name { color: #00fe4e; }
        @media (max-width: 1023px) {
          .pw-dropdown-panel { display: none; }
          .pw-link-chevron { display: none; }
        }
        .pw-search { position: relative; z-index: 5; padding: 0 14px; background: transparent; border: none; cursor: pointer; color: rgba(255,255,255,0.75); transition: color .25s, transform .3s; display: flex; align-items: center; margin-left: auto; }
        @media (min-width: 1024px) { .pw-search { padding: 0 20px 0 0; margin-left: 0; } }
        .pw-search:hover { color: #00fe4e; transform: translateY(-2px) scale(1.1); }
        .pw-mobile-toggle { position: relative; z-index: 5; padding: 0 14px; background: transparent; border: none; cursor: pointer; color: #fff; display: flex; align-items: center; }
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

        @keyframes pwSearchFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pwSearchScaleIn { from { opacity: 0; transform: translateY(-20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .pw-search-modal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 12vh 20px 20px;
          animation: pwSearchFadeIn 0.25s ease both;
          cursor: default;
        }
        .pw-search-panel {
          width: 100%;
          max-width: 580px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 254, 78, 0.15);
          overflow: hidden;
          animation: pwSearchScaleIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .pw-search-input-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .pw-search-input-icon { color: rgba(0, 0, 0, 0.4); flex-shrink: 0; }
        .pw-search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          color: #000;
          font-family: var(--font-poppins), sans-serif;
        }
        .pw-search-input::placeholder { color: rgba(0, 0, 0, 0.4); }
        .pw-search-close {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .pw-search-close:hover { background: rgba(0, 254, 78, 0.15); color: #00b347; }
        .pw-search-suggestions { padding: 12px 0; max-height: 60vh; overflow-y: auto; }
        .pw-search-suggest-label {
          padding: 8px 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.45);
        }
        .pw-search-suggest-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          color: rgba(0, 0, 0, 0.78);
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.25s ease;
        }
        .pw-search-suggest-item:hover {
          background: rgba(0, 254, 78, 0.08);
          color: #050889;
          padding-left: 26px;
        }
        .pw-search-suggest-item svg { color: rgba(0, 0, 0, 0.4); flex-shrink: 0; }
        .pw-search-suggest-item:hover svg { color: #00fe4e; }
        @media (max-width: 640px) {
          .pw-search-modal { padding: 8vh 16px 16px; }
          .pw-search-panel { border-radius: 12px; }
          .pw-search-input-row { padding: 14px 16px; }
          .pw-search-input { font-size: 15px; }
          .pw-search-suggest-item { padding: 11px 16px; font-size: 13px; }
        }

        @keyframes robotFloat { 0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 40px rgba(62,130,255,.45)); } 50% { transform: translateY(-15px); filter: drop-shadow(0 0 65px rgba(62,130,255,.7)); } }
        .robot-float { animation: robotFloat 4.8s ease-in-out infinite; }

        .hero-btn {
          background: #f1f1f1;
          color: #333333;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
          transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .hero-btn-primary,
        .hero-btn-secondary {
          background: #f1f1f1;
          color: #333333;
        }
        .hero-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          color: #000000;
          border-color: #00fe4e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
        }
        .hero-btn:active { transform: translateY(0) scale(0.97); }

        .hero-services-wrap {
          position: relative;
          display: inline-block;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }
        .hero-services-chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.3s ease;
        }
        .hero-services-chevron.is-open { transform: rotate(180deg); }
        .hero-services-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: transparent;
          cursor: default;
        }
        @keyframes heroServicesSlideIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-services-panel {
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          width: min(900px, calc(100vw - 32px));
          background:
            linear-gradient(135deg, rgba(0, 254, 78, 0.06) 0%, rgba(8, 10, 14, 0.97) 35%, rgba(5, 8, 137, 0.4) 100%),
            rgba(8, 10, 14, 0.96);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(0, 254, 78, 0.18);
          border-radius: 16px;
          padding: 24px;
          z-index: 100;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(0, 254, 78, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          animation: heroServicesSlideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
          max-height: min(70vh, 560px);
          overflow-y: auto;
        }
        .hero-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px 28px;
        }
        .hero-services-col { display: flex; flex-direction: column; gap: 2px; }
        .hero-services-col-title {
          font-family: var(--font-poppins), sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00fe4e;
          margin-bottom: 10px;
        }
        .hero-services-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 6px 10px;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .hero-services-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.4);
          flex-shrink: 0;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .hero-services-item:hover {
          background: rgba(0, 254, 78, 0.08);
          transform: translateX(2px);
          color: #ffffff;
        }
        .hero-services-item:hover .hero-services-dot {
          background: #00fe4e;
          box-shadow: 0 0 10px rgba(0, 254, 78, 0.7);
          transform: scale(1.3);
        }
        @media (max-width: 768px) {
          .hero-services-panel {
            position: fixed;
            top: 80px;
            left: 16px;
            right: 16px;
            width: auto;
            max-height: calc(100vh - 100px);
          }
          .hero-services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
        }
        @media (max-width: 480px) {
          .hero-services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .hero-stack { position: relative; width: 100%; }
        .hero-bg { position: relative; width: 100%; background: #000; background-image: url(/back-image.png); background-size: cover; background-position: center bottom; background-repeat: no-repeat; z-index: 1; overflow: visible; }
        .hero-robot-wrap { position: absolute; right: 4%; top: 100px; width: 38%; max-width: 420px; aspect-ratio: 1 / 1; pointer-events: none; z-index: 5; }
        @media (min-width: 1024px) { .hero-robot-wrap { right: 6%; top: 120px; width: 36%; max-width: 480px; } }
        @media (min-width: 1280px) { .hero-robot-wrap { right: 8%; top: 130px; width: 38%; max-width: 540px; } }
        @media (min-width: 1536px) { .hero-robot-wrap { right: 10%; max-width: 580px; } }
        .hero-robot-mobile {
          position: relative;
          width: 70%;
          max-width: 260px;
          aspect-ratio: 1 / 1;
          margin: 0 auto 8px;
          z-index: 5;
        }
        .hero-robot-glow { position: absolute; inset: 20%; border-radius: 50%; background: radial-gradient(circle, rgba(78,121,255,.28), transparent 70%); filter: blur(48px); }
        .hero-robot-img { position: relative; z-index: 10; width: 100%; height: 100%; object-fit: contain; }
        .chatbox-wrap { position: relative; z-index: 5; margin-top: -60px; }
        @media (min-width: 640px) { .chatbox-wrap { margin-top: -90px; } }
        @media (min-width: 1024px) { .chatbox-wrap { margin-top: -90px; } }

        @keyframes chatboxSlideUp { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ea-card { overflow: hidden; border-radius: 20px; border: 2px solid #00fe4e; background: linear-gradient(180deg, rgba(121,181,181,.92) 0%, rgba(93,125,204,.92) 46%, rgba(21,25,145,.98) 100%); box-shadow: 0 0 26px rgba(0,254,78,.14), 0 20px 60px rgba(0,0,0,0.3); animation: chatboxSlideUp .8s cubic-bezier(.2,.9,.3,1) both; animation-delay: .3s; }
        .chatbox-btn:hover { transform: translateY(-3px) scale(1.05); }
        .ask-typing-wrap { display: flex; align-items: center; min-height: 40px; }
        .ask-typing { display: inline-block; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 400; overflow: hidden; white-space: nowrap; border-right: 2px solid rgba(255,255,255,0.7); animation: askType 4.5s steps(14, end) infinite, askCaret 0.7s step-end infinite; max-width: 0; }
        @keyframes askType { 0%, 5% { max-width: 0; } 40%, 70% { max-width: 200px; } 95%, 100% { max-width: 0; } }
        @keyframes askCaret { 0%, 100% { border-color: transparent; } 50% { border-color: rgba(255,255,255,0.7); } }

        @keyframes logoQ { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes logoF { 0%, 42%, 100% { transform: translateY(0) scale(1); opacity: .78; border-color: rgba(0,0,0,.18); } 12%, 28% { transform: translateY(-14px) scale(1.08); opacity: 1; border-color: rgba(0,254,78,.95); } }
        .logo-shell { position: relative; overflow: hidden; width: 100%; padding: 20px 0 28px; mask-image: linear-gradient(90deg, transparent 0%, black 9%, black 91%, transparent 100%); }
        .logo-track { display: flex; width: max-content; gap: 28px; animation: logoQ 32s linear infinite; will-change: transform; }
        .logo-shell:hover .logo-track { animation-play-state: paused; }
        .logo-nav-wrap { display: flex; justify-content: center; margin-top: 8px; }
        .logo-nav-btn { width: 84px; height: 60px; background: #ffffff; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 0 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.04); }
        .logo-nav-arrow { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: transparent; border: none; cursor: pointer; padding: 0; transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .logo-nav-arrow svg { width: 20px; height: 20px; transition: filter 0.25s ease; }
        .logo-nav-arrow-prev { color: #8e8e8e; }
        .logo-nav-arrow-prev:hover { color: #00fe4e; transform: translateX(-2px); }
        .logo-nav-arrow-prev:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .logo-nav-arrow-next { color: #00fe4e; filter: drop-shadow(0 0 6px rgba(0,254,78,0.45)); }
        .logo-nav-arrow-next:hover { transform: translateX(2px); filter: drop-shadow(0 0 10px rgba(0,254,78,0.7)); }
        .logo-nav-arrow:active { transform: scale(0.92); }
        .logo-card { width: clamp(140px, 18vw, 220px); height: clamp(90px, 11vw, 130px); flex: 0 0 auto; display: flex; align-items: center; justify-content: center; border-radius: 6px; border: 1px solid rgba(0,0,0,.18); background: rgba(255,255,255,.96); transition: transform .35s, border-color .35s; animation: logoF 14s ease-in-out infinite; }
        .logo-card:nth-child(2), .logo-card:nth-child(7) { animation-delay: 2.2s; }
        .logo-card:nth-child(3), .logo-card:nth-child(8) { animation-delay: 4.4s; }
        .logo-card:nth-child(4), .logo-card:nth-child(9) { animation-delay: 6.6s; }
        .logo-card:nth-child(5), .logo-card:nth-child(10) { animation-delay: 8.8s; }
        .logo-card:hover { transform: translateY(-16px) scale(1.1) !important; border-color: #00fe4e !important; }
        .logo-card img { max-height: 60%; max-width: 70%; width: auto; object-fit: contain; }

        @keyframes pinPop { 0%, 18% { opacity: 0; transform: translateY(18px) scale(.82); } 38%, 100% { opacity: 1; transform: none; } }

        .service-card { transition: transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1), border-color 0.45s cubic-bezier(0.2,0.9,0.3,1); cursor: pointer; will-change: transform; }
        .service-card::before { content: ''; position: absolute; inset: 0; border-radius: 10px; background: radial-gradient(circle at top right, rgba(0,254,78,0.08), transparent 60%); opacity: 0; transition: opacity 0.45s ease; pointer-events: none; }
        .service-card:hover { transform: translateY(-12px); box-shadow: 0 20px 50px rgba(0,254,78,0.15), 0 8px 20px rgba(0,0,0,0.06); border-color: #00fe4e !important; }
        .service-card:hover::before { opacity: 1; }
        .service-card-dark::before { background: radial-gradient(circle at top right, rgba(0,254,78,0.18), transparent 60%); }
        .service-card-dark:hover { transform: translateY(-12px); box-shadow: 0 20px 50px rgba(5,7,131,0.4), 0 0 0 1px rgba(0,254,78,0.5), 0 8px 20px rgba(0,0,0,0.2); }
        .service-card-icon { transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), color 0.45s ease; will-change: transform; }
        .service-card:hover .service-card-icon { transform: translateY(-6px) scale(1.08) rotate(-4deg); color: #00fe4e !important; }
        @keyframes serviceCardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .service-card-icon { animation: serviceCardFloat 3.5s ease-in-out infinite; }

        .service-tab-btn {
          background: #f1f1f1;
          border: 1.5px solid #cfcfcf;
          color: #333333;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .service-tab-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          border-color: #00fe4e;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
        }

        @keyframes cardSpotlight {
          0%, 30% { background: #050783; border-color: #050783; }
          40%, 100% { background: #ffffff; border-color: #00fe4e; }
        }
        @keyframes iconSpotlight {
          0%, 30% { color: #ffffff; }
          40%, 100% { color: #c9c9c9; }
        }
        @keyframes textSpotlight {
          0%, 30% { color: #ffffff; }
          40%, 100% { color: #000000; }
        }
        @keyframes bodySpotlight {
          0%, 30% { color: rgba(255, 255, 255, 0.7); }
          40%, 100% { color: #686868; }
        }
        @keyframes titleSpotlight {
          0%, 30% { color: #ffffff; }
          40%, 100% { color: #00d84f; }
        }

        .service-card-cycle {
          animation: cardSpotlight 9s ease-in-out infinite;
          transition: transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1);
        }
        .service-card-cycle-1 { animation-delay: 0s; }
        .service-card-cycle-2 { animation-delay: 3s; }
        .service-card-cycle-3 { animation-delay: 6s; }

        .service-card-cycle-1 .service-card-icon-cycle { animation: iconSpotlight 9s ease-in-out infinite; animation-delay: 0s; }
        .service-card-cycle-2 .service-card-icon-cycle { animation: iconSpotlight 9s ease-in-out infinite; animation-delay: 3s; }
        .service-card-cycle-3 .service-card-icon-cycle { animation: iconSpotlight 9s ease-in-out infinite; animation-delay: 6s; }

        .service-card-cycle-1 .service-card-eyebrow { animation: textSpotlight 9s ease-in-out infinite; animation-delay: 0s; }
        .service-card-cycle-2 .service-card-eyebrow { animation: textSpotlight 9s ease-in-out infinite; animation-delay: 3s; }
        .service-card-cycle-3 .service-card-eyebrow { animation: textSpotlight 9s ease-in-out infinite; animation-delay: 6s; }

        .service-card-cycle-1 .service-card-title { animation: titleSpotlight 9s ease-in-out infinite; animation-delay: 0s; }
        .service-card-cycle-2 .service-card-title { animation: titleSpotlight 9s ease-in-out infinite; animation-delay: 3s; }
        .service-card-cycle-3 .service-card-title { animation: titleSpotlight 9s ease-in-out infinite; animation-delay: 6s; }

        .service-card-cycle-1 .service-card-body { animation: bodySpotlight 9s ease-in-out infinite; animation-delay: 0s; }
        .service-card-cycle-2 .service-card-body { animation: bodySpotlight 9s ease-in-out infinite; animation-delay: 3s; }
        .service-card-cycle-3 .service-card-body { animation: bodySpotlight 9s ease-in-out infinite; animation-delay: 6s; }

        .service-card-cycle:hover,
        .service-card-cycle:hover .service-card-icon-cycle,
        .service-card-cycle:hover .service-card-eyebrow,
        .service-card-cycle:hover .service-card-title,
        .service-card-cycle:hover .service-card-body {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card-cycle,
          .service-card-cycle .service-card-icon-cycle,
          .service-card-cycle .service-card-eyebrow,
          .service-card-cycle .service-card-title,
          .service-card-cycle .service-card-body { animation: none; }
        }

        .stat-card { position: relative; overflow: hidden; cursor: pointer; transition: transform 0.4s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.4s cubic-bezier(0.2,0.9,0.3,1), border-color 0.3s ease, background 0.4s ease; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(0,254,78,0.18), transparent); transition: left 0.7s cubic-bezier(0.2,0.9,0.3,1); }
        .stat-card:hover::before { left: 100%; }
        .stat-card:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(0,254,78,0.18), 0 6px 16px rgba(0,0,0,0.06); border-color: #00fe4e !important; }
        .stat-card-active::before { background: linear-gradient(120deg, transparent, rgba(0,254,78,0.32), transparent); }
        .stat-card-active:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(5,7,131,0.45), 0 0 0 1.5px rgba(0,254,78,0.6), 0 6px 16px rgba(0,0,0,0.2); background: #060a9a !important; }
        .stat-card-icon { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), color 0.3s ease; }
        .stat-card:hover .stat-card-icon { transform: scale(1.2) rotate(8deg); color: #00fe4e !important; }
        .stat-card-active:hover .stat-card-icon { color: #00fe4e !important; }
        .stat-card-val { transition: color 0.3s ease, transform 0.4s ease; }
        .stat-card:hover .stat-card-val { transform: scale(1.05); }
        .stat-card:not(.stat-card-active):hover .stat-card-val { color: #050783; }

        @keyframes statCardSpotlight {
          0%, 20% { background: #050783; border-color: #050783; }
          30%, 100% { background: #ffffff; border-color: #bdbdbd; }
        }
        @keyframes statIconSpotlight {
          0%, 20% { color: #ffffff; }
          30%, 100% { color: #00fe4e; }
        }
        @keyframes statTextSpotlight {
          0%, 20% { color: #ffffff; }
          30%, 100% { color: #000000; }
        }

        .stat-card-cycle { animation: statCardSpotlight 8s ease-in-out infinite; }
        .stat-card-cycle-1 { animation-delay: 0s; }
        .stat-card-cycle-2 { animation-delay: 2s; }
        .stat-card-cycle-3 { animation-delay: 4s; }
        .stat-card-cycle-4 { animation-delay: 6s; }

        .stat-card-cycle-1 .stat-card-icon-cycle { animation: statIconSpotlight 8s ease-in-out infinite; animation-delay: 0s; }
        .stat-card-cycle-2 .stat-card-icon-cycle { animation: statIconSpotlight 8s ease-in-out infinite; animation-delay: 2s; }
        .stat-card-cycle-3 .stat-card-icon-cycle { animation: statIconSpotlight 8s ease-in-out infinite; animation-delay: 4s; }
        .stat-card-cycle-4 .stat-card-icon-cycle { animation: statIconSpotlight 8s ease-in-out infinite; animation-delay: 6s; }

        .stat-card-cycle-1 .stat-card-val-cycle,
        .stat-card-cycle-1 .stat-card-label-cycle { animation: statTextSpotlight 8s ease-in-out infinite; animation-delay: 0s; }
        .stat-card-cycle-2 .stat-card-val-cycle,
        .stat-card-cycle-2 .stat-card-label-cycle { animation: statTextSpotlight 8s ease-in-out infinite; animation-delay: 2s; }
        .stat-card-cycle-3 .stat-card-val-cycle,
        .stat-card-cycle-3 .stat-card-label-cycle { animation: statTextSpotlight 8s ease-in-out infinite; animation-delay: 4s; }
        .stat-card-cycle-4 .stat-card-val-cycle,
        .stat-card-cycle-4 .stat-card-label-cycle { animation: statTextSpotlight 8s ease-in-out infinite; animation-delay: 6s; }

        .stat-card-cycle:hover,
        .stat-card-cycle:hover .stat-card-icon-cycle,
        .stat-card-cycle:hover .stat-card-val-cycle,
        .stat-card-cycle:hover .stat-card-label-cycle {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card-cycle,
          .stat-card-cycle .stat-card-icon-cycle,
          .stat-card-cycle .stat-card-val-cycle,
          .stat-card-cycle .stat-card-label-cycle { animation: none; }
        }

        @keyframes pinPulse { 0%, 100% { box-shadow: 0 0 0 2px #00fe4e, 0 4px 10px rgba(0,0,0,0.12), 0 0 0 0 rgba(0,254,78,0.5); } 50% { box-shadow: 0 0 0 2px #00fe4e, 0 4px 10px rgba(0,0,0,0.12), 0 0 0 12px rgba(0,254,78,0); } }

        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-shell { position: relative; width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); overflow: hidden; padding: 6px 0; }
        .marquee-track { display: flex; width: max-content; gap: 60px; animation: marqueeScroll 28s linear infinite; will-change: transform; }
        .marquee-shell:hover .marquee-track { animation-play-state: paused; }
        .marquee-text { flex-shrink: 0; font-family: var(--font-poppins), sans-serif; font-weight: 300; font-size: clamp(40px, 8vw, 110px); line-height: 1; letter-spacing: 0.02em; text-transform: uppercase; white-space: nowrap; background: linear-gradient(90deg, #d4ff3a 0%, #0adf54 18%, #050889 38%, #0a7a5f 58%, #0adf54 78%, #d4ff3a 100%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; animation: gradientShift 8s linear infinite; }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

        .map-stage { position: relative; width: 100%; max-width: 1080px; height: clamp(220px, 38vw, 340px); margin: 24px auto 0; overflow: hidden; background: #fff; }
        .map-stage::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(0,0,0,.13) 2px, transparent 2.6px); background-size: 13px 13px; mask-image: radial-gradient(ellipse at center, black 45%, transparent 76%); opacity: .48; pointer-events: none; }
        .map-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; opacity: .82; filter: grayscale(1) contrast(.9) brightness(1.12); }
        .map-pin { position: absolute; z-index: 5; width: clamp(110px, 14vw, 154px); height: clamp(56px, 7vw, 74px); display: flex; align-items: center; gap: 10px; padding: 11px 14px; background: rgba(216,216,216,.94); border-radius: 4px; box-shadow: 0 10px 28px rgba(0,0,0,.08); animation: pinPop .9s cubic-bezier(.2,.9,.25,1) both; transition: transform .28s; }
        .map-pin:hover { transform: translateY(-7px) scale(1.035); }
        .map-pin::after { content: ''; position: absolute; left: 38px; bottom: -16px; width: 0; height: 0; border-left: 14px solid transparent; border-right: 14px solid transparent; border-top: 17px solid rgba(216,216,216,.94); }
        .map-pin-icon { position: relative; width: clamp(44px, 5.5vw, 56px); height: clamp(44px, 5.5vw, 56px); flex: 0 0 auto; border-radius: 50%; background: #ffffff; box-shadow: 0 0 0 2.5px #00fe4e, 0 4px 12px rgba(0,0,0,0.12); padding: 4px; display: flex; align-items: center; justify-content: center; overflow: hidden; animation: pinPulse 2.4s ease-in-out infinite; }
        .map-pin-icon img { width: 100%; height: 100%; object-fit: contain; display: block; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .map-pin:hover .map-pin-icon img { transform: scale(1.12); }
        .map-pin:hover .map-pin-icon { box-shadow: 0 0 0 2.5px #00fe4e, 0 6px 18px rgba(0,254,78,0.35), 0 4px 12px rgba(0,0,0,0.15); }
        .map-pin-title { font-size: clamp(13px, 1.5vw, 17px); line-height: 1; color: #111; font-weight: 500; }
        .map-pin-link { display: inline-block; margin-top: 5px; font-size: 8px; color: #050889; text-decoration: underline; font-weight: 700; }
        .pin-lhr { left: 8%; top: 10%; animation-delay: .05s; }
        .pin-isl { left: 40%; top: 38%; animation-delay: .22s; }
        .pin-khi { right: 14%; top: 22%; animation-delay: .38s; }
        .pin-fsd { left: 22%; bottom: 12%; animation-delay: .56s; }

        .testimonials-section { position: relative; padding: 56px 0 64px; background: #ffffff; }
        .testimonials-heading {
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 1024px) { .testimonials-section { padding: 48px 0 56px; } }
        @media (max-width: 768px) { .testimonials-section { padding: 40px 0 48px; } }
        @media (max-width: 480px) { .testimonials-section { padding: 32px 0 40px; } }
        .testimonials-blink { position: absolute; top: 50%; width: clamp(240px, 28vw, 420px); height: auto; pointer-events: none; z-index: 1; animation: blinkTwinkle 3.2s ease-in-out infinite; }
        .testimonials-blink-left { left: -60px; transform: translateY(-50%); }
        .testimonials-blink-right { right: -60px; transform: translateY(-50%) scaleX(-1); animation-delay: 1.6s; }
        @keyframes blinkTwinkle { 0%, 100% { opacity: 0.55; filter: brightness(1); } 25% { opacity: 0.9; filter: brightness(1.15) drop-shadow(0 0 6px rgba(0,254,78,0.25)); } 50% { opacity: 0.7; filter: brightness(1.05) drop-shadow(0 0 4px rgba(0,254,78,0.15)); } 75% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0 8px rgba(0,254,78,0.3)); } }
        .testimonials-avatar { object-position: center 75%; box-shadow: 0 4px 16px rgba(0,0,0,0.1), 0 0 0 4px rgba(0,254,78,0.12); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .testimonials-avatar:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.14), 0 0 0 6px rgba(0,254,78,0.18); }
        .testimonials-nav-wrap { display: flex; justify-content: center; margin-top: 24px; }
        .testimonials-nav-btn { width: 84px; height: 60px; background: #ffffff; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 0 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); }
        .testimonials-nav-arrow {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: rgba(0, 0, 0, 0.45);
          transition: color 0.3s ease, transform 0.25s ease, filter 0.3s ease;
        }
        .testimonials-nav-arrow svg { width: 22px; height: 22px; }
        .testimonials-nav-arrow-prev:hover {
          color: #00fe4e;
          transform: translateX(-3px);
          filter: drop-shadow(0 0 8px rgba(0, 254, 78, 0.55));
        }
        .testimonials-nav-arrow-next:hover {
          color: #00fe4e;
          transform: translateX(3px);
          filter: drop-shadow(0 0 8px rgba(0, 254, 78, 0.55));
        }
        .testimonials-nav-arrow:active { transform: scale(0.92); }
        @media (max-width: 768px) { .testimonials-blink { width: 180px; } .testimonials-blink-left { left: -80px; } .testimonials-blink-right { right: -80px; } }
        @media (max-width: 480px) { .testimonials-blink { width: 130px; } .testimonials-blink-left { left: -90px; } .testimonials-blink-right { right: -90px; } .testimonials-nav-btn { width: 76px; height: 56px; } }

        .newsletter-section { position: relative; background: #ffffff; padding: 0 24px 64px; }
        .newsletter-divider { width: 100%; max-width: 720px; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,254,78,0.6) 50%, transparent 100%); margin: 0 auto 48px; }
        .newsletter-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .newsletter-title { margin: 0; font-family: var(--font-poppins), sans-serif; font-size: clamp(26px, 4vw, 42px); font-weight: 400; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.15; }
        .newsletter-title-a { background: linear-gradient(135deg, #0adf54 0%, #0a7a5f 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .newsletter-title-b { background: linear-gradient(135deg, #0a7a5f 0%, #050889 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .newsletter-text { margin: 18px auto 0; max-width: 620px; font-size: 13px; line-height: 1.65; color: rgba(0,0,0,0.7); }
        .newsletter-form { display: flex; flex-direction: row; gap: 12px; max-width: 620px; margin: 28px auto 0; }
        .newsletter-input { flex: 1; height: 52px; padding: 0 22px; border-radius: 10px; border: 1.5px solid rgba(0,254,78,0.35); background: #ffffff; font-size: 14px; color: #000; outline: none; transition: border-color 0.25s ease, box-shadow 0.25s ease; }
        .newsletter-input::placeholder { color: rgba(0,0,0,0.4); }
        .newsletter-input:focus { border-color: #00fe4e; box-shadow: 0 0 0 4px rgba(0,254,78,0.12); }
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
        .newsletter-checkbox { display: flex; align-items: center; justify-content: center; gap: 10px; max-width: 480px; margin: 20px auto 0; font-size: 13px; color: rgba(0,0,0,0.75); cursor: pointer; }
        .newsletter-checkbox input[type="checkbox"] { width: 16px; height: 16px; accent-color: #00fe4e; cursor: pointer; }
        .newsletter-note { margin: 16px auto 0; font-size: 12px; color: rgba(0,0,0,0.55); line-height: 1.6; max-width: 520px; }
        .newsletter-note-label { font-weight: 600; color: rgba(0,0,0,0.75); }
        .newsletter-link { color: rgba(0,0,0,0.75); text-decoration: underline; text-decoration-color: rgba(0,0,0,0.3); text-underline-offset: 2px; transition: color 0.25s ease, text-decoration-color 0.25s ease; }
        .newsletter-link:hover { color: #00b347; text-decoration-color: #00b347; }
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

        .contact-cta-section {
          position: relative;
          z-index: 5;
          background: #ffffff;
          padding: 16px 0 48px;
          margin-top: -120px;
          overflow-x: hidden;
        }
        .contact-cta-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: center;
        }
        .contact-cta-box {
          position: relative;
          width: 100%;
          max-width: 600px;
          padding: 28px 36px;
          background: linear-gradient(135deg, #0a0e7a 0%, #050889 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          overflow: hidden;
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
        .contact-cta-text {
          position: relative;
          margin: 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 16px;
          color: #ffffff;
          text-align: center;
          line-height: 1.5;
          max-width: 600px;
          z-index: 1;
        }
        .contact-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 44px;
          padding: 0 24px 0 28px;
          border-radius: 22px;
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
        }
        .contact-cta-btn svg { width: 18px; height: 18px; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .contact-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
        }
        .contact-cta-btn:hover svg { transform: translateX(4px); }
        @media (max-width: 1024px) {
          .contact-cta-section { margin-top: -80px; padding: 8px 0 36px; }
          .contact-cta-wrap { padding: 0 24px; }
          .contact-cta-box { padding: 24px 28px; max-width: 520px; }
        }
        @media (max-width: 768px) {
          .contact-cta-section { margin-top: 0; padding: 8px 0 28px; }
          .contact-cta-wrap { padding: 0 16px; }
          .contact-cta-box { padding: 22px 22px; border-radius: 16px; }
          .contact-cta-text { font-size: 14px; }
          .contact-cta-btn { height: 42px; padding: 0 22px 0 26px; font-size: 13px; }
        }
        @media (max-width: 480px) {
          .contact-cta-section { margin-top: 0; padding: 4px 0 24px; }
          .contact-cta-box { padding: 20px 18px; gap: 14px; }
        }

        .site-footer { position: relative; background: #ffffff; padding: 40px 0 0; border-top: 1px solid rgba(0,0,0,0.06); }
        .site-footer-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
        .site-footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.3fr; gap: 48px; align-items: start; }
        .site-footer-brand { max-width: 320px; }
        .site-footer-logo { height: 36px; width: auto; object-fit: contain; display: block; }
        .site-footer-tagline { margin: 18px 0 0; font-size: 14px; line-height: 1.55; color: rgba(0,0,0,0.7); }
        .site-footer-follow { margin-top: 28px; }
        .site-footer-follow-label { font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.85); margin-bottom: 12px; }
        .site-footer-socials { display: flex; gap: 12px; }
        .site-footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          color: rgba(0, 0, 0, 0.55);
          border: 1.5px solid rgba(0, 0, 0, 0.15);
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
        }
        .site-footer-social:hover {
          background: #00fe4e;
          color: #000;
          border-color: #00fe4e;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 16px rgba(0, 254, 78, 0.45);
        }
        .site-footer-col { display: flex; flex-direction: column; gap: 12px; padding-top: 4px; }
        .site-footer-link {
          font-size: 13.5px;
          color: rgba(0, 0, 0, 0.72);
          transition: color 0.25s ease, transform 0.25s ease;
          display: inline-block;
          width: fit-content;
        }
        .site-footer-link:hover {
          color: #00fe4e;
          transform: translateX(3px);
        }
        .site-footer-link-active {
          color: rgba(0, 0, 0, 0.72);
          font-weight: 400;
        }
        .site-footer-contact { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: rgba(0,0,0,0.72); }
        .site-footer-icon { width: 14px; height: 14px; color: #00fe4e; flex-shrink: 0; }
        .site-footer-bottom { max-width: 1280px; margin: 32px auto 0; padding: 18px 32px; font-size: 12px; color: rgba(0,0,0,0.55); text-align: center; border-top: 1px solid rgba(0,0,0,0.06); }
        @media (max-width: 1024px) {
          .site-footer { padding: 32px 0 0; }
          .site-footer-grid { grid-template-columns: 1.2fr 1fr 1fr 1.2fr; gap: 32px; }
          .site-footer-tagline { font-size: 13px; }
        }
        @media (max-width: 768px) {
          .site-footer { padding: 28px 0 0; }
          .site-footer-inner { padding: 0 24px; }
          .site-footer-grid { grid-template-columns: 1fr 1fr; gap: 28px 24px; }
          .site-footer-brand { grid-column: 1 / -1; max-width: 100%; }
          .site-footer-bottom { margin-top: 24px; padding: 16px 24px; }
        }
        @media (max-width: 480px) {
          .site-footer { padding: 24px 0 0; }
          .site-footer-inner { padding: 0 20px; }
          .site-footer-grid { grid-template-columns: 1fr; gap: 24px; }
          .site-footer-tagline { margin-top: 14px; }
          .site-footer-follow { margin-top: 20px; }
          .site-footer-bottom { padding: 14px 20px; }
        }

        .team-section { position: relative; overflow: hidden; background: #fff; padding: 56px 0; }
        @media (min-width: 1024px) { .team-section { padding: 80px 0; } }
        .team-bg-sphere { position: absolute; left: -8%; top: 50%; transform: translateY(-50%); width: 55%; max-width: 800px; aspect-ratio: 1 / 1; pointer-events: none; opacity: 0.55; z-index: 1; }
        .team-bg-sphere img { width: 100%; height: 100%; object-fit: contain; }
        @media (max-width: 768px) { .team-bg-sphere { left: -25%; width: 90%; opacity: 0.25; } }
        .team-bg-circuit { position: absolute; right: 2%; top: 50%; transform: translateY(-50%); width: 160px; height: 380px; pointer-events: none; opacity: 0.55; z-index: 1; }
        .team-bg-circuit svg { width: 100%; height: 100%; }
        @media (max-width: 1023px) { .team-bg-circuit { display: none; } }
        .team-title { font-family: var(--font-poppins), sans-serif; font-size: clamp(36px, 6.5vw, 72px); font-weight: 300; letter-spacing: 0.04em; line-height: 1; margin: 0; text-transform: uppercase; }
        .team-row { position: relative; z-index: 10; display: grid; grid-template-columns: 200px 1fr; gap: 28px; align-items: center; }
        .team-btn-col { display: flex; align-items: center; justify-content: center; }
        .team-about-btn { height: 48px; padding: 0 32px; border-radius: 24px; background: #00fe4e; color: #000; font-size: 15px; font-weight: 500; box-shadow: 0 8px 24px rgba(0,254,78,0.35), 0 0 0 6px rgba(0,254,78,0.12); transition: transform 0.25s, box-shadow 0.25s; white-space: nowrap; cursor: pointer; border: none; }
        .team-about-btn:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 12px 32px rgba(0,254,78,0.5), 0 0 0 8px rgba(0,254,78,0.18); }
        .team-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .team-card { display: flex; flex-direction: column; }
        .team-photo-frame { position: relative; width: 100%; aspect-ratio: 4 / 4.4; overflow: hidden; border-radius: 6px; background: #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.35s, box-shadow 0.35s; }
        .team-photo-frame:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); }
        .team-photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
        @media (max-width: 1023px) { .team-row { grid-template-columns: 1fr; gap: 24px; } .team-btn-col { justify-content: flex-start; } .team-cards-grid { grid-template-columns: repeat(4, 1fr); gap: 14px; } }
        @media (max-width: 768px) { .team-cards-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 480px) { .team-cards-grid { gap: 12px; } }
      `}</style>

      <div className="hero-stack">
        <section className="hero-bg">
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-3 pb-[70px] sm:pb-[120px] lg:pb-[180px]">

            <div className="hidden md:block hero-robot-wrap">
              <div className="hero-robot-glow" />
              <img src="/robot.png" alt="Robot" className="hero-robot-img robot-float" />
            </div>

            <div className="hidden lg:flex items-center justify-end gap-5 text-[12px] font-semibold text-white/90 mb-3">
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#00fe4e]" /><span>+92 300 2855800</span></div>
              <span className="text-white/35">|</span>
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#00fe4e]" /><span>+92 300 2855800</span></div>
              <span className="text-white/35">|</span>
              <span className="text-white/65 mr-2">Follow Us:</span>
              <div className="flex items-center gap-3">
                <Link href="#" className="pw-social-icon"><FacebookSvg /></Link>
                <Link href="#" className="pw-social-icon"><YoutubeSvg /></Link>
                <Link href="#" className="pw-social-icon"><XSvg /></Link>
              </div>
            </div>

            <div className="pw-nav-wrapper relative mb-4 lg:mb-5">
              <div className="pw-glow-line hidden lg:block" />
              <nav className="pw-nav">
                <div className="pw-logo-glow" />
                <div className="pw-orb-wrap"><div className="pw-orb na" /><div className="pw-orb nb" /><div className="pw-orb nc" /></div>
                <div className="pw-logo-zone"><img src="/parwaaz-logo.png" alt="Parwaaz" /></div>
                <div className="pw-links">
                  {[
                    { l: "Home", a: false, hasDropdown: false },
                    { l: "About", a: false, hasDropdown: false },
                    { l: "Services", a: false, hasDropdown: true },
                    { l: "Contact", a: false, hasDropdown: false },
                  ].map(({ l, a, hasDropdown }) => (
                    hasDropdown ? (
                      <div key={l} className="pw-link-dropdown-wrap">
                        <Link href="#" className={a ? "pw-link pw-link-active" : "pw-link"}>
                          <span className="pw-link-dot" />
                          <span>{l}</span>
                          <svg className="pw-link-chevron" viewBox="0 0 20 20" fill="none">
                            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                        <div className="pw-dropdown-panel">
                          <div className="pw-dropdown-grid pw-dropdown-grid-6">
                            <div className="pw-dropdown-col">
                              <div className="pw-dropdown-col-title">Marketing & Branding</div>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">International Events</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">Domestic Events</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">Webinars</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">Meetups</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">Tech Export Marketing</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">Tech Connect</span></Link>
                            </div>

                            <div className="pw-dropdown-col">
                              <div className="pw-dropdown-col-title">HR Skills & Capacity</div>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">SLED Program</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">GAIN Network</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">ICT Training Roadmap</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">ILMS</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">PM&apos;s Skills Initiative</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">INSPIRE Program</span></Link>
                            </div>

                            <div className="pw-dropdown-col">
                              <div className="pw-dropdown-col-title">Infrastructure</div>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">STPs</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">IT Parks</span></Link>
                              <Link href="#" className="pw-dropdown-item"><span className="pw-dropdown-item-dot" /><span className="pw-dropdown-item-name">NCSP Centres</span></Link>
                            </div>

                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link key={l} href="#" className={a ? "pw-link pw-link-active" : "pw-link"}>
                        <span className="pw-link-dot" />
                        <span>{l}</span>
                      </Link>
                    )
                  ))}
                </div>
                <button className="pw-search" aria-label="Search" onClick={() => setSearchOpen(true)}><Search size={18} strokeWidth={2} /></button>
                <button className="pw-mobile-toggle" aria-label="Menu" onClick={() => setMobileNavOpen(v => !v)}>
                  {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </nav>

              {mobileNavOpen && (
                <div className="lg:hidden mt-3 rounded-2xl border border-[#00fe4e]/30 bg-black/95 backdrop-blur p-5 space-y-3">
                  {["Home", "About", "Services", "Contact"].map(l => (
                    <Link key={l} href="#" onClick={() => setMobileNavOpen(false)} className="block text-white text-base font-semibold hover:text-[#00fe4e] py-1">{l}</Link>
                  ))}
                  <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-white/80 text-sm">
                    <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#00fe4e]" />+92 300 2855800</div>
                    <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#00fe4e]" />+92 300 2855800</div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center pt-2 lg:pt-6">
              <div className="relative z-10">
                <h1 className="mb-2 font-extrabold leading-[.95] tracking-[-0.05em] text-[#00fe4e] drop-shadow-[0_0_20px_rgba(0,254,78,.35)]" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                  Delivering Digital<br />Experience
                </h1>
                <h2 className="mb-4 font-medium leading-tight tracking-[-0.03em] text-white" style={{ fontSize: 'clamp(18px, 2.6vw, 30px)' }}>
                  That Make The <span className="text-[#00fe4e]">World</span> Better
                </h2>
                <p className="mb-5 lg:mb-6 font-normal leading-[1.5] text-white/80" style={{ fontSize: 'clamp(12px, 1vw, 14px)', maxWidth: '480px' }}>
                  Connecting you the right tools, People, and Creative Strategies to elevate your business in <span className="text-[#00fe4e]">South Asia, Middle east</span> and beyond.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button className="hero-btn hero-btn-primary h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium">Our Services</button>
                  <button className="hero-btn hero-btn-secondary h-[44px] sm:h-[48px] px-7 lg:px-9 rounded-[24px] text-[14px] font-medium">Get Started</button>
                </div>
              </div>

              <div className="md:hidden order-first hero-robot-mobile">
                <div className="hero-robot-glow" />
                <img src="/robot.png" alt="Robot" className="hero-robot-img robot-float" />
              </div>
            </div>
          </div>
        </section>

        <div className="chatbox-wrap">
          <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
            <div className="ea-card">
              <div className="relative px-5 py-5 sm:px-7 sm:py-6">
                <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-white/40" />
                <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-white/40" />

                <div className="text-center mb-4">
                  <h3 className="mb-1 font-bold leading-tight text-[#00fe4e]" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}>
                    How Can We Assist You Today?
                  </h3>
                  <p className="font-medium text-white/85" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
                    Find answers to your questions instantly let AI do the work for you
                  </p>
                </div>

                <div className="bg-black rounded-[10px] overflow-hidden">
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <div className="ask-typing-wrap">
                      <span className="ask-typing">Ask Anything...</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:mt-5">
                      <label className="chatbox-btn flex items-center justify-center w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] bg-white rounded-[7px] cursor-pointer">
                        <Plus className="h-4 w-4 text-black" />
                        <input type="file" accept="*/*" className="hidden" />
                      </label>
                      <div className="flex gap-2">
                        <button className="chatbox-btn flex items-center justify-center w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] bg-transparent border border-white/25 rounded-[7px]">
                          <Mic className="h-4 w-4 text-white/80" />
                        </button>
                        <button className="chatbox-btn flex items-center justify-center w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] bg-blue-500 rounded-[7px]">
                          <ArrowUp className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-2 bg-[#2952a8] px-3 sm:px-4 py-3 overflow-x-auto">
                    {chips.map(({ label, icon: Icon }) => (
                      <button key={label} className="flex h-[26px] sm:h-[28px] shrink-0 items-center gap-1.5 rounded-full bg-white px-3 text-[10px] sm:text-[11px] font-semibold text-[#4b4b4b] shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 whitespace-nowrap">
                        <Icon className="h-[11px] w-[11px] text-[#00fe4e]" /><span>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative z-10 bg-white pt-10 lg:pt-14 pb-12">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

          <section data-reveal="up" className="rounded-[10px] border border-[#54ff9a] bg-[#f8f8f8] p-6 sm:p-8 lg:px-10 lg:py-7">
            <div className="grid items-center gap-6 lg:gap-10 md:grid-cols-[260px_1fr]">
              <div className="flex justify-center md:justify-start">
                <img src="/wef-logo.png" alt="WEF" className="h-[90px] lg:h-[120px] w-auto object-contain" />
              </div>
              <p className="max-w-[780px] text-[#8c8c93] leading-[1.3] text-center md:text-left" style={{ fontSize: 'clamp(16px, 2.2vw, 26px)' }}>
                Closing the Skills Gap in Pakistan, Parwaaz is the exclusive partner for the World Economic Forum in Pakistan
              </p>
            </div>
          </section>

          <section className="mt-10 lg:mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal="left">
              <div className="rounded-[12px] bg-[#d9d9d9] p-6 sm:p-8 lg:px-10 lg:py-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-extrabold leading-none tracking-[-0.04em] text-[#050889]" style={{ fontSize: 'clamp(30px, 3.8vw, 46px)' }}>Par.waaz</h3>
                    <div className="mt-3 font-medium text-black" style={{ fontSize: 'clamp(15px, 1.9vw, 21px)' }}>flight or flying</div>
                    <div className="mt-3 font-medium text-black" style={{ fontSize: 'clamp(15px, 1.9vw, 21px)' }}>(پرواز)</div>
                  </div>
                  <img src="/iran-flag.png" alt="flag" className="mt-1 h-[28px] w-[44px] lg:h-[34px] lg:w-[54px] rounded-[6px] object-cover flex-shrink-0" />
                </div>
              </div>
              <div className="px-2 sm:px-6 lg:px-8 pt-5">
                <p className="leading-[1.6] tracking-[-0.02em] text-[#222]" style={{ fontSize: 'clamp(14px, 1.5vw, 19px)' }}>
                  1. Parwaaz (پرواز) is a Persian word meaning flight — not just the physical act of flying, but the rise of spirit, the leap of ambition and uninterrupted flight.
                </p>
                <p className="mt-5 lg:mt-6 leading-[1.6] tracking-[-0.02em] text-[#333]" style={{ fontSize: 'clamp(14px, 1.5vw, 19px)' }}>
                  2. We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.
                </p>
              </div>
            </div>
            <div data-reveal="right" data-reveal-delay="120" className="bg-[#040a96] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(0,254,78,.45)] rounded-[12px] lg:rounded-none">
              <p className="font-medium leading-[1.45] tracking-[-0.03em] text-white" style={{ fontSize: 'clamp(17px, 2.4vw, 26px)' }}>
                We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.
              </p>
            </div>
          </section>

          <section className="mt-14 lg:mt-20 pb-12 lg:pb-16">
            <div data-reveal="up-sm" className="mb-3 lg:mb-4 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.08em] text-black">Our Services</div>
            <div data-reveal="fade" data-reveal-delay="100" className="marquee-shell">
              <div className="marquee-track">
                <span className="marquee-text">Cutting-Edge Solutions</span>
                <span className="marquee-text">Cutting-Edge Solutions</span>
                <span className="marquee-text">Cutting-Edge Solutions</span>
                <span className="marquee-text">Cutting-Edge Solutions</span>
              </div>
            </div>
            <p data-reveal="up-sm" data-reveal-delay="200" className="mt-3 lg:mt-4 max-w-[560px] leading-[1.3] text-[#202020]" style={{ fontSize: 'clamp(13px, 1.4vw, 16px)' }}>
              Transforming businesses with AI-powered technology and intelligent automation
            </p>
            <div data-reveal="up-sm" data-reveal-delay="280" className="mt-6 lg:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {["Training", "HR services", "Reports", "Surveys"].map((item) => (
                <button key={item} className="service-tab-btn h-[48px] lg:h-[60px] rounded-[8px] text-[14px] lg:text-[16px] font-medium">
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
              <div data-reveal="zoom" data-reveal-delay="0" className="service-card service-card-cycle service-card-cycle-1 relative min-h-[300px] lg:h-[340px] rounded-[10px] border border-[#00fe4e] bg-white p-6 lg:p-9">
                <FileText className="service-card-icon absolute right-6 top-5 lg:right-9 lg:top-7 h-[60px] w-[60px] lg:h-[76px] lg:w-[76px] service-card-icon-cycle" strokeWidth={1.4} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[100px] text-[13px] font-medium">Coursera &amp;</div>
                <h3 className="service-card-title mt-2 font-light leading-none tracking-[-0.03em]" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)' }}>
                  Digital Learning
                </h3>
                <p className="service-card-body mt-4 lg:mt-5 text-[13px] leading-[1.7]">Empowering Pakistan&apos;s workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
              </div>
              <div data-reveal="zoom" data-reveal-delay="140" className="service-card service-card-cycle service-card-cycle-2 relative min-h-[300px] lg:h-[340px] rounded-[10px] border border-[#00fe4e] bg-white p-6 lg:p-9">
                <Database className="service-card-icon absolute right-6 top-5 lg:right-9 lg:top-7 h-[60px] w-[60px] lg:h-[76px] lg:w-[76px] service-card-icon-cycle" strokeWidth={1.5} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[100px] text-[13px] font-medium tracking-[0.08em]">International Recruitment</div>
                <h3 className="service-card-title mt-2 font-light leading-none tracking-[-0.03em]" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)' }}>&amp; Payroll</h3>
                <p className="service-card-body mt-4 lg:mt-5 text-[13px] leading-[1.7]">Connecting top Pakistani talent with global opportunities. We provide comprehensive recruitment and manpower solutions to meet the needs of international partners.</p>
              </div>
              <div data-reveal="zoom" data-reveal-delay="280" className="service-card service-card-cycle service-card-cycle-3 relative min-h-[300px] lg:h-[340px] rounded-[10px] border border-[#00fe4e] bg-white p-6 lg:p-9 md:col-span-2 lg:col-span-1">
                <Code2 className="service-card-icon absolute right-6 top-5 lg:right-9 lg:top-7 h-[60px] w-[60px] lg:h-[76px] lg:w-[76px] service-card-icon-cycle" strokeWidth={1.4} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[100px] text-[13px] font-medium">Payroll, Contract &amp; Visa Management</div>
                <h3 className="service-card-title mt-2 font-light leading-none tracking-[-0.03em]" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)' }}>Services</h3>
                <p className="service-card-body mt-4 lg:mt-5 text-[13px] leading-[1.7]">Empowering Pakistan&apos;s workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
              </div>
            </div>
          </section>

          <section className="mt-10 lg:mt-14 pb-12 lg:pb-20">
            <h3 data-reveal="up-sm" className="font-light leading-none tracking-[-0.03em] text-black" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>Why Choose Us</h3>
            <div data-reveal="fade" data-reveal-delay="100" className="marquee-shell mt-3 lg:mt-5">
              <div className="marquee-track">
                <span className="marquee-text">Let The Numbers Speak!</span>
                <span className="marquee-text">Let The Numbers Speak!</span>
                <span className="marquee-text">Let The Numbers Speak!</span>
              </div>
            </div>
            <p data-reveal="up-sm" data-reveal-delay="200" className="mt-3 lg:mt-4 leading-[1.4] text-black" style={{ fontSize: 'clamp(13px, 1.4vw, 16px)' }}>With enough data, the numbers speak for themselves.</p>
            <div className="mt-6 lg:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[60px] max-w-[1020px]">
              {[
                { icon: "☑", val: "1,000+", l1: "Successful", l2: "Placements" },
                { icon: "▯", val: "12,000+", l1: "Specialized", l2: "Courses" },
                { icon: "♟", val: "95%", l1: "Customer", l2: "Satisfaction" },
                { icon: "◎", val: "5+", l1: "Countries", l2: "where we have clients" },
              ].map((s, i) => (
                <div key={s.val} data-reveal="up" data-reveal-delay={i * 100} className={`stat-card stat-card-cycle stat-card-cycle-${i + 1} flex h-[130px] lg:h-[160px] flex-col items-center justify-center rounded-[4px] border border-[#bdbdbd] bg-white text-black`}>
                  <div className="stat-card-icon stat-card-icon-cycle mb-2 lg:mb-3 text-[26px] lg:text-[34px]">{s.icon}</div>
                  <div className="stat-card-val stat-card-val-cycle font-light leading-none" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)' }}>{s.val}</div>
                  <div className="stat-card-label stat-card-label-cycle mt-2 lg:mt-3 text-center leading-[1.05]" style={{ fontSize: 'clamp(12px, 1.3vw, 16px)' }}>
                    <div>{s.l1}</div><div>{s.l2}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <ProjectOrbitSection />

        <section className="contact-cta-section">
          <div className="contact-cta-wrap">
            <div className="contact-cta-box" data-reveal="zoom">
              <p className="contact-cta-text">Get in touch to learn how our team can support your business</p>
              <button className="contact-cta-btn">
                <span>Contact Us</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <section className="relative bg-white pb-12 lg:pb-20 pt-16 lg:pt-24">
            <div data-reveal="up-sm" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black">Clients</div>
            <div data-reveal="fade" data-reveal-delay="100" className="marquee-shell mt-3">
              <div className="marquee-track">
                <span className="marquee-text">Transforming Your Possibilities</span>
                <span className="marquee-text">Transforming Your Possibilities</span>
                <span className="marquee-text">Transforming Your Possibilities</span>
              </div>
            </div>
            <p data-reveal="up-sm" data-reveal-delay="200" className="mt-3 lg:mt-4 text-[14px] lg:text-[15px] text-black">We work for a wide variety of clients in both the private and public sectors.</p>
            <div data-reveal="fade" data-reveal-delay="300" className="logo-shell mt-5 lg:mt-6">
              <div className="logo-track">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={logo.name + "-" + i} className="logo-card"><img src={logo.src} alt={logo.name} /></div>
                ))}
              </div>
            </div>
            <div data-reveal="zoom" data-reveal-delay="400" className="logo-nav-wrap">
              <div className="logo-nav-btn">
                <button className="logo-nav-arrow logo-nav-arrow-prev" aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="logo-nav-arrow logo-nav-arrow-next" aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="team-section">
          <div className="team-bg-sphere">
            <img src="/Group.png" alt="" />
          </div>
          <div className="team-bg-circuit">
            <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="180" cy="40" r="6" fill="#00fe4e" />
              <path d="M180 40 L100 40 L100 120 L60 120" stroke="#00fe4e" strokeWidth="1.5" />
              <circle cx="60" cy="120" r="4" fill="#00fe4e" />
              <path d="M180 40 L180 200 L120 200" stroke="#00fe4e" strokeWidth="1.5" />
              <circle cx="120" cy="200" r="5" fill="#00fe4e" />
              <path d="M180 200 L180 320 L80 320" stroke="#00fe4e" strokeWidth="1.5" />
              <circle cx="80" cy="320" r="4" fill="#00fe4e" />
              <path d="M180 40 L180 360" stroke="#00fe4e" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.5" />
            </svg>
          </div>
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div data-reveal="up" className="relative z-10 mb-8 lg:mb-12">
              <h2 className="team-title">
                <span className="text-[#0adf54]">MEET</span>{" "}
                <span className="text-[#0a7a5f]">OUR</span>{" "}
                <span className="text-[#050889]">TEAM</span>
              </h2>
              <p className="mt-3 text-[14px] lg:text-[15px] text-black">
                Our business experts come from businesses of all shapes and sizes.
              </p>
            </div>
            <div className="team-row">
              <div data-reveal="left" className="team-btn-col">
                <button className="team-about-btn">About Team</button>
              </div>
              <div className="team-cards-grid">
                {teamMembers.map((m, i) => (
                  <div key={m.name} data-reveal="up" data-reveal-delay={i * 110} className="team-card">
                    <div className="team-photo-frame">
                      <img src={m.img} alt={m.name} />
                    </div>
                    <div className="mt-3 text-[11px] lg:text-[12px] text-black text-center">{m.role}</div>
                    <div className="mt-1 text-[14px] lg:text-[16px] font-bold text-[#00b95a] text-center tracking-wide">{m.name}</div>
                    <div className="mx-auto mt-3 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#0077b5] text-white">
                      <LinkedInSvg />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <section className="relative bg-white py-10 lg:py-16 overflow-hidden">
            <h2 data-reveal="up-sm" className="text-center font-light uppercase leading-tight tracking-[0.04em]" style={{ fontSize: 'clamp(26px, 4.2vw, 44px)' }}>
              <span className="text-[#0adf54]">Trusted By 14 Million</span> <span className="text-[#050889]">Professional</span>
            </h2>
            <p data-reveal="up-sm" data-reveal-delay="120" className="mt-3 text-center text-[13px] lg:text-[17px] text-black">Watch stories of success from around the world</p>
            <div data-reveal="zoom" data-reveal-delay="240" className="map-stage">
              <img src="/world-map.png" alt="World map" className="world-map.png" />
              {[
                { city: "Lahore", cls: "pin-lhr", img: "/minar.png" },
                { city: "Islamabad", cls: "pin-isl", img: "/faisal-mosque.png" },
                { city: "Karachi", cls: "pin-khi", img: "/mazar.png" },
                { city: "Faisalabad", cls: "pin-fsd", img: "/clock-tower.png" },
              ].map(pin => (
                <div key={pin.city} className={`map-pin ${pin.cls}`}>
                  <div className="map-pin-icon">
                    <img src={pin.img} alt={pin.city} />
                  </div>
                  <div>
                    <div className="map-pin-title">{pin.city}</div>
                    <div className="map-pin-link">Detail</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="testimonials-section relative overflow-hidden bg-white">
          <img src="/blink.svg" alt="" className="testimonials-blink testimonials-blink-left" />
          <img src="/blink.svg" alt="" className="testimonials-blink testimonials-blink-right" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div data-reveal="zoom" className="mx-auto flex h-[44px] w-[170px] items-center justify-center rounded-[50px] bg-[#00FE4E] border border-[#E4E6E8] text-[14px] font-semibold text-black">Testimonials</div>
            <h2 data-reveal="up-sm" data-reveal-delay="120" className="testimonials-heading mt-4 lg:mt-5 text-center font-light uppercase leading-tight tracking-[0.04em]" style={{ fontSize: 'clamp(32px, 5.5vw, 60px)' }}>
              What Our Client Say
            </h2>
            <div data-reveal="up" data-reveal-delay="240" className="mx-auto mt-5 lg:mt-6 max-w-[560px] text-center">
              <img src="/testimonial-user.png" alt="Client" className="testimonials-avatar mx-auto h-[64px] w-[64px] rounded-full object-cover" />
              <div className="mt-4 text-[14px] font-bold text-[#050889]">Sara Mohamed</div>
              <div className="mt-1 text-[13px] text-[#ffc400] tracking-[0.2em]">★★★★★</div>
              <p className="mt-4 lg:mt-5 text-[13px] lg:text-[14px] leading-[1.7] text-black/80 max-w-[520px] mx-auto">I&apos;ve been using the hotel booking system for several years now, and it&apos;s become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.</p>
            </div>
            <div data-reveal="zoom" data-reveal-delay="360" className="testimonials-nav-wrap">
              <div className="testimonials-nav-btn">
                <button className="testimonials-nav-arrow testimonials-nav-arrow-prev" aria-label="Previous testimonial">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="testimonials-nav-arrow testimonials-nav-arrow-next" aria-label="Next testimonial">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="newsletter-divider" />
          <div className="newsletter-inner">
            <h2 data-reveal="up-sm" className="newsletter-title">
              <span className="newsletter-title-a">Join The Future</span>{" "}
              <span className="newsletter-title-b">Of Innovation</span>
            </h2>
            <p data-reveal="up-sm" data-reveal-delay="120" className="newsletter-text">
              Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We&apos;ll share other exciting news and exclusive offers, too.
            </p>
            <div data-reveal="up" data-reveal-delay="240" className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button className="newsletter-btn">Sign Up</button>
            </div>
            <label data-reveal="fade" data-reveal-delay="360" className="newsletter-checkbox">
              <input type="checkbox" />
              <span>Keep me updated on other news and exclusive offers</span>
            </label>
            <p data-reveal="fade" data-reveal-delay="440" className="newsletter-note">
              <span className="newsletter-note-label">Note:</span> You can opt-out at any time. See our{" "}
              <Link href="#" className="newsletter-link">Privacy Policy</Link> and{" "}
              <Link href="#" className="newsletter-link">Terms</Link>.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-grid">
              <div data-reveal="up" className="site-footer-brand">
                <img src="/parwaaz-logo.svg" alt="Parwaaz" className="site-footer-logo" />
                <p className="site-footer-tagline">
                  Fueling your business growth with workforce solutions, digital skills of the future, and creative design services.
                </p>
                <div className="site-footer-follow">
                  <div className="site-footer-follow-label">Follow us</div>
                  <div className="site-footer-socials">
                    {[FacebookSvg, YoutubeSvg, XSvg].map((Icon, i) => (
                      <Link key={i} href="#" className="site-footer-social" aria-label="Social link">
                        <Icon />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-reveal-delay="120" className="site-footer-col">
                <Link href="#" className="site-footer-link site-footer-link-active">About</Link>
                <Link href="#" className="site-footer-link">People</Link>
                <Link href="#" className="site-footer-link">Contact</Link>
                <Link href="#" className="site-footer-link">Services</Link>
              </div>
              <div data-reveal="up" data-reveal-delay="240" className="site-footer-col">
                <Link href="#" className="site-footer-link">Terms</Link>
                <Link href="#" className="site-footer-link">Privacy Policy</Link>
                <Link href="#" className="site-footer-link">Legal Notice</Link>
                <Link href="#" className="site-footer-link">Accessibility</Link>
              </div>
              <div data-reveal="up" data-reveal-delay="360" className="site-footer-col">
                <div className="site-footer-contact">
                  <MapPin className="site-footer-icon" />
                  <span>Lahore, Karachi, Islamabad</span>
                </div>
                <div className="site-footer-contact">
                  <Phone className="site-footer-icon" />
                  <span>+92 300 2855800</span>
                </div>
                <div className="site-footer-contact">
                  <Mail className="site-footer-icon" />
                  <span>contact@parwaaz.co</span>
                </div>
              </div>
            </div>
            <div data-reveal="fade" data-reveal-delay="500" className="site-footer-bottom">
              © 2026 Parwaaz.co. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}