"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, Search, Plus, Mic, ArrowUp, Menu, X,
  Lightbulb, Code2, FileText, GraduationCap,
  Database, Image as ImageIcon, MapPin,
  CheckCircle2, BookOpen, Smile, Globe,
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
    // Fix for mobile pin/scrub flakiness — takes over scroll handling
    // to prevent native scroll momentum from interfering with pinned timelines
    ScrollTrigger.normalizeScroll(true);

    const section = sectionRef.current;
    const orbit = orbitRef.current;
    const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !orbit || slideEls.length === 0) return;

    let ctx: gsap.Context | null = null;

    const setup = () => {
      if (ctx) ctx.revert();
      ctx = gsap.context(() => {
        gsap.set(orbit, { xPercent: -50, yPercent: -50 });
        gsap.to(orbit, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        const isMobile = window.innerWidth <= 768;

        const swingOrigin = isMobile ? "-80px 50%" : "-380px 50%";
        const swingX = isMobile ? -25 : -100;
        const swingY = isMobile ? 60 : 280;
        const exitX = isMobile ? 20 : 80;
        const exitY = isMobile ? -55 : -260;

        slideEls.forEach((slide, index) => {
          gsap.set(slide, {
            opacity: index === 0 ? 1 : 0,
            x: index === 0 ? 0 : swingX,
            y: index === 0 ? 0 : swingY,
            rotation: index === 0 ? 0 : 32,
            scale: index === 0 ? 1 : 0.85,
            filter: index === 0 ? "blur(0px)" : "blur(6px)",
            transformOrigin: swingOrigin,
          });
        });

        const slideDuration = isMobile ? 1800 : 1100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(slideEls.length - 1) * slideDuration}`,
            scrub: isMobile ? 1.2 : 1,
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
            x: exitX,
            y: exitY,
            rotation: -32,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 1.2,
            ease: "power3.inOut",
          }, i);

          tl.fromTo(next, {
            opacity: 0,
            x: swingX,
            y: swingY,
            rotation: 32,
            scale: 0.85,
            filter: "blur(6px)",
            transformOrigin: swingOrigin,
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

        // Don't call ScrollTrigger.refresh() here — page-level useEffect already does this
        // and calling it inside setup() can cause duplicate triggers
      }, section);
    };

    setup();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let lastWidth = window.innerWidth;
    const onResize = () => {
      const w = window.innerWidth;
      const wasMobile = lastWidth <= 768;
      const isMobile = w <= 768;
      if (wasMobile !== isMobile) {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          setup();
          ScrollTrigger.refresh();
        }, 200);
      }
      lastWidth = w;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (ctx) ctx.revert();
    };
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

      <style jsx global>{`
        .po-section {
          position: relative;
          width: 100%;
          min-height: 90vh;
          background: #ffffff;
          padding: 40px 0 80px;
          overflow: visible;
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
          transform: translateY(-30%);
          pointer-events: none;
          z-index: 1;
        }
        .po-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 130%;
          height: 130%;
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

        .parwaaz-list {
          list-style: decimal;
          list-style-position: outside;
          padding-left: 1.5em;
          counter-reset: parwaaz-counter;
        }
        .parwaaz-list li {
          padding-left: 0.5em;
        }
        .parwaaz-list li::marker {
          color: #050889;
          font-weight: 600;
        }
        @media (min-width: 1024px) {
          .parwaaz-list {
            padding-left: 1.8em;
          }
        }

        .po-vector {
          position: absolute;
          right: -250px;
          bottom: -100px;
          width: 600px;
          max-width: 60vw;
          max-height: 1100px;
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
          width: 22px;
          height: 22px;
          min-width: 22px;
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
          .po-canvas { top: 50%; left: -300px; width: 700px; height: 700px; transform: translateY(-30%); }
          .po-vector { right: -250px; bottom: -100px; width: 600px; max-width: 60vw; max-height: 1100px; opacity: 0.85; }
        }

        @media (max-width: 1024px) {
          .po-section { padding: 40px 0 80px; min-height: 90vh; }
          .po-canvas { top: 50%; left: -300px; width: 700px; height: 700px; transform: translateY(-30%); }
          .po-vector { right: -250px; bottom: -100px; width: 600px; max-width: 60vw; max-height: 1100px; opacity: 0.85; }
          .po-content { padding: 0 24px 0 0; min-height: 55vh; }
          .po-slides { margin-right: 24px; max-width: 480px; height: 280px; }
        }

        @media (max-width: 768px) {
          .po-section { padding: 40px 0 60px; min-height: 100vh; overflow: visible; }
          .po-title { margin-bottom: 28px; }
          .po-title h2 { font-size: clamp(28px, 7vw, 38px); gap: 10px; }
          .po-canvas {
            position: absolute;
            top: 50%;
            left: -180px;
            width: 460px;
            height: 460px;
            transform: translateY(-30%);
            opacity: 0.85;
            z-index: 1;
          }
          .po-vector {
            position: absolute;
            right: -90px;
            bottom: -60px;
            width: 280px;
            opacity: 0.85;
            max-width: none;
            max-height: none;
            z-index: 2;
          }
          .po-content {
            position: relative;
            z-index: 5;
            min-height: 70vh;
            padding: 0 20px 0 0;
            align-items: center;
            justify-content: flex-end;
          }
          .po-slides {
            position: relative;
            width: 100%;
            max-width: 280px;
            margin-right: 12px;
            margin-left: auto;
            height: 320px;
            perspective: 1200px;
            z-index: 10;
          }
          .po-slide {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            z-index: 10;
          }
          .po-slide-row { gap: 12px; align-items: flex-start; justify-content: flex-start; }
          .po-ball { width: 16px; height: 16px; min-width: 16px; margin-top: 8px; }
          .po-slide-content { text-align: left; }
          .po-slide-title { font-size: 26px; line-height: 1.1; margin-bottom: 8px; }
          .po-slide-text { font-size: 12px; line-height: 1.55; max-width: none; margin: 0; }
        }

        @media (max-width: 480px) {
          .po-section { padding: 32px 0 48px; min-height: 100vh; }
          .po-title { padding: 0 16px; margin-bottom: 22px; }
          .po-title h2 { font-size: 26px; gap: 8px; }
          .po-canvas { left: -160px; width: 400px; height: 400px; opacity: 0.82; }
          .po-vector { width: 220px; right: -80px; bottom: -50px; opacity: 0.8; }
          .po-content { padding: 0 16px 0 0; min-height: 65vh; }
          .po-slides { max-width: 240px; margin-right: 8px; height: 300px; }
          .po-slide-row { gap: 10px; }
          .po-ball { width: 14px; height: 14px; min-width: 14px; margin-top: 6px; }
          .po-slide-title { font-size: 22px; }
          .po-slide-text { font-size: 11.5px; line-height: 1.5; }
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroServicesOpen, setHeroServicesOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialDir, setTestimonialDir] = useState<'next' | 'prev'>('next');
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  const heroBackgrounds = ["/back-image.png", "/bg.png", "/bg2.png"];

  // Auto-rotate hero background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex(prev => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const cx = useRef(0); const cy = useRef(0);
  const rx = useRef(0); const ry = useRef(0);
  const logoTrackRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: "Sara Mohamed",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      stars: 5,
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.",
    },
    {
      name: "Ahmed Khan",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      stars: 5,
      text: "Parwaaz transformed our hiring process. Their international recruitment expertise and dedication to quality candidates is unmatched. The team is professional, responsive, and truly understands our business needs.",
    },
    {
      name: "Fatima Hassan",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
      stars: 5,
      text: "The Coursera partnership opened up incredible learning opportunities for our team. World-class courses combined with personalized guidance made all the difference in our professional development journey.",
    },
    {
      name: "Bilal Ahmad",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      stars: 5,
      text: "Outstanding service and remarkable attention to detail. Parwaaz delivered exactly what they promised, on time and within budget. I highly recommend them for any digital transformation initiative.",
    },
  ];

  const handleLogoPrev = () => {
    setLogoIndex(prev => prev - 1);
  };
  const handleLogoNext = () => {
    setLogoIndex(prev => prev + 1);
  };

  const handleTestimonialPrev = () => {
    setTestimonialDir('prev');
    setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleTestimonialNext = () => {
    setTestimonialDir('next');
    setTestimonialIndex(prev => (prev + 1) % testimonials.length);
  };

  // Seamless infinite loop: array is tripled [A,B,C,D,E | A,B,C,D,E | A,B,C,D,E].
  // We keep the visual "current" index inside the middle copy.
  // When index drifts outside [0, len), wait for the slide to finish, then silently
  // re-position to the equivalent slot in the middle copy without animating.
  useEffect(() => {
    const track = logoTrackRef.current;
    if (!track) return;
    const len = clientLogos.length;
    if (logoIndex >= 0 && logoIndex < len) return;

    const handle = setTimeout(() => {
      const wrapped = ((logoIndex % len) + len) % len;
      track.style.transition = 'none';
      setLogoIndex(wrapped);
      // force reflow then re-enable transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (logoTrackRef.current) logoTrackRef.current.style.transition = '';
        });
      });
    }, 620);

    return () => clearTimeout(handle);
  }, [logoIndex]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(pointer: fine)');

    let cleanup: (() => void) | null = null;

    const attachCursor = () => {
      if (cleanup) return;
      const ring = ringRef.current;
      const dot = dotRef.current;
      if (!ring || !dot) return;
      let af = 0;
      let initialized = false;

      const move = (e: MouseEvent) => {
        cx.current = e.clientX;
        cy.current = e.clientY;
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

      cleanup = () => {
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseover", handleEnter);
        document.removeEventListener("mouseout", handleLeave);
        cancelAnimationFrame(af);
        document.body.classList.remove("pw-ca");
        ring.style.opacity = '0';
        dot.style.opacity = '0';
      };
    };

    const detachCursor = () => {
      if (cleanup) {
        cleanup();
        cleanup = null;
      }
    };

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        attachCursor();
      } else {
        detachCursor();
      }
    };

    handleChange(mql);
    mql.addEventListener('change', handleChange);

    return () => {
      mql.removeEventListener('change', handleChange);
      detachCursor();
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
        const el = entry.target as HTMLElement;
        const isCycleMode = el.dataset.revealMode === 'cycle';
        if (entry.isIntersecting) {
          const delay = el.dataset.revealDelay;
          if (delay) { el.style.transitionDelay = `${delay}ms`; }
          el.classList.add('is-visible');
          if (!isCycleMode) {
            observer.unobserve(el);
          }
        } else if (isCycleMode) {
          el.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const splitElement = (el: HTMLElement) => {
      if (el.dataset.textSplitProcessed) return;
      const mode = el.dataset.textSplit === 'words' ? 'words' : 'chars';
      const original = el.textContent || '';
      el.dataset.textSplitOriginal = original;
      el.textContent = '';
      el.classList.add('text-split');
      const tokens = mode === 'words' ? original.split(/(\s+)/) : Array.from(original);
      tokens.forEach((token) => {
        if (/^\s+$/.test(token)) {
          el.appendChild(document.createTextNode(token));
          return;
        }
        if (mode === 'chars' && token === ' ') {
          el.appendChild(document.createTextNode(' '));
          return;
        }
        const span = document.createElement('span');
        span.className = 'text-split-token';
        span.textContent = token;
        el.appendChild(span);
      });
      el.dataset.textSplitProcessed = '1';
    };

    const splitTriggers: ScrollTrigger[] = [];
    const paragraphTriggers: ScrollTrigger[] = [];

    const splitElements = Array.from(document.querySelectorAll<HTMLElement>('[data-text-split]'));
    splitElements.forEach(splitElement);

    splitElements.forEach((el) => {
      const tokens = el.querySelectorAll<HTMLElement>('.text-split-token');
      if (!tokens.length) return;
      if (reduced) {
        tokens.forEach(t => { t.style.opacity = '1'; t.style.transform = 'none'; });
        return;
      }
      gsap.set(tokens, { yPercent: 110, opacity: 0, rotate: 6 });
      const tween = gsap.to(tokens, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.035,
        paused: true,
        overwrite: 'auto',
      });
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => tween.play(),
      });
      splitTriggers.push(st);
    });

    const paragraphs = Array.from(
      document.querySelectorAll<HTMLElement>('[data-mwg-reveal="paragraph"]')
    );
    paragraphs.forEach((p) => {
      if (p.dataset.mwgProcessed) return;
      p.dataset.mwgProcessed = '1';
      if (reduced) {
        p.style.opacity = '1';
        p.style.transform = 'none';
        return;
      }
      gsap.set(p, { y: 30, opacity: 0 });
      const tween = gsap.to(p, {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
        paused: true,
        overwrite: 'auto',
      });
      const st = ScrollTrigger.create({
        trigger: p,
        start: 'top 88%',
        once: true,
        onEnter: () => tween.play(),
      });
      paragraphTriggers.push(st);
    });

    // Only refresh ScrollTrigger if user hasn't scrolled yet.
    // Refreshing after the user has scrolled into a pinned section
    // causes the timeline to fast-forward to current scroll position,
    // which makes pinned slides flash by instantly.
    const safeRefresh = () => {
      if (window.scrollY < 50) {
        ScrollTrigger.refresh();
      }
    };
    const refreshTimer = setTimeout(safeRefresh, 250);
    const onLoad = () => safeRefresh();
    window.addEventListener('load', onLoad);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', onLoad);
      splitTriggers.forEach(t => t.kill());
      paragraphTriggers.forEach(t => t.kill());
    };
  }, []);

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

        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }

        .text-split { display: inline-block; overflow: hidden; line-height: 1.05; padding-bottom: 0.05em; }
        .text-split-token { display: inline-block; opacity: 0; transform: translateY(110%); will-change: transform, opacity; }
        @media (prefers-reduced-motion: reduce) { .text-split-token { opacity: 1 !important; transform: none !important; } }
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
        .pw-orb-wrap { position: absolute; left: 130px; top: 50%; width: 0; height: 0; pointer-events: none; z-index: 4; display: none; }
        @media (min-width: 1024px) { .pw-orb-wrap { display: block; } }
        .pw-orb { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: rgba(255, 255, 255, 0.7); box-shadow: 0 0 6px rgba(255, 255, 255, 0.6); margin: -1.5px 0 0 -1.5px; opacity: 0.5; }
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
          .pw-logo-zone img {
            height: 48px !important;
          }
        }
        .pw-logo-zone img:hover {
          transform: none !important;
          filter: brightness(0) invert(1) !important;
        }
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
        .hero-bg { position: relative; width: 100%; background: #000; z-index: 1; overflow: visible; }
        .hero-bg-layer {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          z-index: 0;
          pointer-events: none;
        }
        .hero-bg-layer.is-active { opacity: 1; }
        .hero-bg-dots {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 6;
        }
        @media (min-width: 1024px) {
          .hero-bg-dots {
            left: 0;
            bottom: auto;
            top: 540px;
            transform: none;
            margin-left: 32px;
          }
        }
        .hero-bg-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-bg-dot:hover { background: rgba(255, 255, 255, 0.55); }
        .hero-bg-dot.is-active {
          background: #00fe4e;
          box-shadow: 0 0 12px rgba(0, 254, 78, 0.6);
        }
        .hero-robot-wrap { position: absolute; right: 4%; top: 100px; width: 38%; max-width: 420px; aspect-ratio: 1 / 1; pointer-events: none; z-index: 5; }
        @media (min-width: 1024px) { .hero-robot-wrap { right: 6%; top: 120px; width: 36%; max-width: 480px; } }
        @media (min-width: 1280px) { .hero-robot-wrap { right: 8%; top: 130px; width: 38%; max-width: 540px; } }
        @media (min-width: 1536px) { .hero-robot-wrap { right: 10%; max-width: 580px; } }
        .hero-robot-mobile {
          position: relative;
          width: 78%;
          max-width: 280px;
          aspect-ratio: 1 / 1;
          margin: 28px auto 8px;
          z-index: 5;
        }
        .hero-robot-glow { position: absolute; inset: 20%; border-radius: 50%; background: radial-gradient(circle, rgba(78,121,255,.28), transparent 70%); filter: blur(48px); }
        .hero-robot-img { position: relative; z-index: 10; width: 100%; height: 100%; object-fit: contain; }
        .chatbox-wrap { position: relative; z-index: 5; margin-top: -60px; }
        @media (min-width: 640px) { .chatbox-wrap { margin-top: -90px; } }
        @media (min-width: 1024px) { .chatbox-wrap { margin-top: -90px; } }

        @keyframes chatboxSlideUp { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ea-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: #000572;
          background-image:
            radial-gradient(ellipse 110% 80% at 50% 0%, rgba(117, 251, 105, 0.7) 0%, rgba(117, 251, 105, 0.35) 30%, rgba(117, 251, 105, 0.1) 55%, rgba(0, 5, 114, 0) 75%),
            linear-gradient(180deg, rgba(117, 251, 105, 0.12) 0%, rgba(0, 5, 114, 0.95) 60%, #000572 100%);
          border: 3px solid #00ff66;
          box-shadow:
            0 0 28px rgba(0, 255, 102, 0.28),
            0 28px 80px rgba(0, 0, 0, 0.18);
          animation: chatboxSlideUp .8s cubic-bezier(.2,.9,.3,1) both;
          animation-delay: .3s;
          transition: background-color 0.5s ease, background-image 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
        }
        .ea-card:hover {
          background-color: #00033f;
          background-image:
            radial-gradient(ellipse 110% 80% at 50% 0%, rgba(117, 251, 105, 0.7) 0%, rgba(117, 251, 105, 0.35) 30%, rgba(117, 251, 105, 0.1) 55%, rgba(0, 3, 63, 0) 75%),
            linear-gradient(180deg, rgba(117, 251, 105, 0.12) 0%, rgba(0, 3, 63, 0.97) 55%, #00033f 100%);
          box-shadow:
            0 0 36px rgba(0, 255, 102, 0.4),
            0 32px 90px rgba(0, 0, 0, 0.3);
        }
        .ea-card::before {
          content: none;
        }

        .wef-card {
          position: relative;
          background: #f8f8f8;
          border-radius: 8px;
          isolation: isolate;
        }
        @media (max-width: 850px) {
          .parwaaz-row {
            grid-template-columns: 1fr !important;
            max-width: 515px !important;
            gap: 24px !important;
          }
          .parwaaz-blue {
            width: 100% !important;
            max-width: 296px;
            margin-inline: auto;
          }
        }
        @media (max-width: 768px) {
          .wef-card {
            flex-direction: column !important;
            gap: 14px !important;
            padding: 22px !important;
            text-align: center;
            max-width: 350px !important;
            margin-inline: auto !important;
          }
          .wef-card > div:first-child {
            width: auto !important;
          }
          .wef-card img {
            height: 82px !important;
          }
          .wef-card p {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          .parwaaz-row {
            max-width: 350px !important;
          }
        }
        .parwaaz-list-item::marker {
          color: #050889;
          font-weight: 600;
        }
        /* Static gradient border (default, idle state) */
        .wef-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        /* Traveling green glow outline — only visible on hover */
        .wef-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: conic-gradient(
            from var(--wef-angle, 0deg),
            transparent 0%,
            transparent 60%,
            rgba(0, 254, 78, 0.4) 75%,
            #00fe4e 85%,
            rgba(0, 254, 78, 0.4) 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s ease;
          filter: drop-shadow(0 0 6px rgba(0, 254, 78, 0.6));
        }
        @property --wef-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes wefBorderTravel {
          to { --wef-angle: 360deg; }
        }
        .wef-card:hover::after {
          opacity: 1;
          animation: wefBorderTravel 2.4s linear infinite;
        }
        /* Fallback for browsers without @property — fade glow in/out */
        @supports not (background: conic-gradient(from 0deg, red, blue)) {
          .wef-card::after { display: none; }
        }
        .chatbox-btn:hover { transform: translateY(-3px) scale(1.05); }
        .ask-typing-wrap { display: flex; align-items: center; min-height: 40px; }
        .ask-typing { display: inline-block; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 400; overflow: hidden; white-space: nowrap; border-right: 2px solid rgba(255,255,255,0.7); animation: askType 4.5s steps(14, end) infinite, askCaret 0.7s step-end infinite; max-width: 0; }
        @keyframes askType { 0%, 5% { max-width: 0; } 40%, 70% { max-width: 200px; } 95%, 100% { max-width: 0; } }
        @keyframes askCaret { 0%, 100% { border-color: transparent; } 50% { border-color: rgba(255,255,255,0.7); } }

        .logo-shell { position: relative; overflow: hidden; padding: 24px 0 32px; width: 100vw; margin-left: calc(50% - 50vw); -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%); }
        .logo-track { display: flex; width: max-content; gap: 32px; padding-left: 16px; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); will-change: transform; }
        @media (min-width: 640px) { .logo-track { padding-left: 24px; } }
        @media (min-width: 1024px) { .logo-track { padding-left: 32px; } }
        .logo-nav-wrap { display: flex; justify-content: center; margin-top: 8px; }
        .logo-nav-btn { width: 84px; height: 60px; background: #ffffff; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 0 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.04); transition: box-shadow 0.3s ease, border-color 0.3s ease; }
        .logo-nav-btn:hover { box-shadow: 0 6px 18px rgba(0,254,78,0.18), 0 0 0 2px rgba(0,254,78,0.25); border-color: rgba(0,254,78,0.35); }
        .logo-nav-arrow { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: transparent; border: none; cursor: pointer; padding: 0; color: #8e8e8e; border-radius: 8px; transition: color 0.25s ease, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease, filter 0.25s ease; }
        .logo-nav-arrow svg { width: 20px; height: 20px; transition: filter 0.25s ease; }
        .logo-nav-arrow-prev:hover { color: #00fe4e; transform: translateX(-2px); background: rgba(0,254,78,0.08); }
        .logo-nav-arrow-prev:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .logo-nav-arrow-next:hover { color: #00fe4e; transform: translateX(2px); background: rgba(0,254,78,0.08); }
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
        .logo-card:hover img {
          filter: grayscale(0);
        }

        @keyframes pinPop { 0%, 18% { opacity: 0; transform: translateY(18px) scale(.82); } 38%, 100% { opacity: 1; transform: none; } }

        .service-card { transition: transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1), border-color 0.45s cubic-bezier(0.2,0.9,0.3,1); cursor: pointer; will-change: transform; }
        .service-card::before { content: ''; position: absolute; inset: 0; border-radius: 10px; background: radial-gradient(circle at top right, rgba(0,254,78,0.06), transparent 60%); opacity: 0; transition: opacity 0.45s ease; pointer-events: none; }
        .service-card:hover::before { opacity: 0; }
        .service-card-dark::before { background: radial-gradient(circle at top right, rgba(0,254,78,0.18), transparent 60%); }
        .service-card-dark:hover { transform: translateY(-12px); box-shadow: 0 20px 50px rgba(5,7,131,0.4), 0 0 0 1px rgba(0,254,78,0.5), 0 8px 20px rgba(0,0,0,0.2); }
        .service-card-icon { transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), color 0.45s ease; will-change: transform; }
        .service-card:hover .service-card-icon { transform: translateY(-4px) scale(1.05); }
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

        .service-card-cycle {
          background: #ffffff;
          border-color: #e5e5e5;
          transition: background 0.45s ease, border-color 0.45s ease, transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1);
        }
        .service-card-cycle .service-card-icon-cycle {
          color: #d0d0d0;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-eyebrow {
          color: #1a1a1a;
          font-weight: 500;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-title {
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: filter 0.45s ease, opacity 0.45s ease;
        }
        .service-card-cycle .service-card-body {
          color: #6b6b6b;
          transition: color 0.45s ease;
        }

        .service-card-cycle:hover {
          background: #050783;
          border-color: #050783;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(5, 7, 131, 0.18);
        }
        .service-card-cycle:hover .service-card-icon-cycle {
          color: #ffffff;
        }
        .service-card-cycle:hover .service-card-eyebrow {
          color: #ffffff;
        }
        .service-card-cycle:hover .service-card-title {
          background: none;
          -webkit-text-fill-color: #ffffff;
          color: #ffffff;
        }
        .service-card-cycle:hover .service-card-body {
          color: rgba(255, 255, 255, 0.78);
        }

        .stat-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #02E046;
          border-radius: 10px;
          cursor: default;
        }
        .stat-card-icon {
          color: #02E046;
        }
        .stat-card-val {
          color: #000000;
        }
        @media (max-width: 768px) {
          .stat-card {
            width: 160px !important;
            height: 160px !important;
            aspect-ratio: auto !important;
            padding: 12px !important;
            margin: 0 auto !important;
          }
          .stat-card-label {
            font-size: 11px !important;
            line-height: 1.2 !important;
          }
        }

        @keyframes pinPulse { 0%, 100% { box-shadow: 0 0 0 2px #00fe4e, 0 4px 10px rgba(0,0,0,0.12), 0 0 0 0 rgba(0,254,78,0.5); } 50% { box-shadow: 0 0 0 2px #00fe4e, 0 4px 10px rgba(0,0,0,0.12), 0 0 0 12px rgba(0,254,78,0); } }

        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-shell { position: relative; width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); overflow: hidden; padding: 6px 0; }
        .marquee-track { display: flex; width: max-content; gap: 60px; animation: marqueeScroll 28s linear infinite; will-change: transform; }
        .marquee-shell:hover .marquee-track { animation-play-state: paused; }
        .marquee-text {
          flex-shrink: 0;
          font-family: var(--font-poppins), sans-serif;
          font-weight: 400;
          font-size: clamp(40px, 8vw, 110px);
          line-height: 1;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          white-space: nowrap;
          background: linear-gradient(
            90deg,
            #04B93F 0%,
            #04B93F 12%,
            #038936 30%,
            #0a5a30 55%,
            #050889 80%,
            #050889 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gradientShift 12s linear infinite;
        }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

        .trusted-heading {
          background: linear-gradient(
            90deg,
            #00FE4E 0%,
            #000572 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 768px) {
          .trusted-heading {
            white-space: normal !important;
          }
        }
        .map-stage { position: relative; width: 100%; max-width: 1080px; height: clamp(220px, 38vw, 340px); margin: 24px auto 0; overflow: hidden; background: #fff; }
        .map-stage::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(0,0,0,.13) 2px, transparent 2.6px); background-size: 13px 13px; mask-image: radial-gradient(ellipse at center, black 45%, transparent 76%); opacity: .48; pointer-events: none; }
        .map-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; opacity: .82; filter: grayscale(1) contrast(.9) brightness(1.12); }
        .map-pin { position: absolute; z-index: 5; min-width: clamp(120px, 14vw, 160px); display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: #ffffff; border-radius: 6px; box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04); animation: pinPop .9s cubic-bezier(.2,.9,.25,1) both; transition: transform .28s, box-shadow .28s; }
        .map-pin:hover { transform: translateY(-7px) scale(1.035); box-shadow: 0 14px 32px rgba(0,254,78,0.18), 0 0 0 1px rgba(0,254,78,0.3); }
        .map-pin::after { content: ''; position: absolute; left: 22px; bottom: -10px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 12px solid #ffffff; filter: drop-shadow(0 4px 4px rgba(0,0,0,0.06)); }
        .map-pin-icon { position: relative; width: clamp(34px, 4.2vw, 42px); height: clamp(34px, 4.2vw, 42px); flex: 0 0 auto; border-radius: 50%; background: #00fe4e; box-shadow: 0 0 0 2px rgba(0,254,78,0.25), 0 2px 6px rgba(0,0,0,0.12); display: flex; align-items: center; justify-content: center; overflow: hidden; animation: pinPulse 2.4s ease-in-out infinite; }
        .map-pin-icon img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .map-pin:hover .map-pin-icon img { transform: scale(1.12); }
        .map-pin-text { display: flex; flex-direction: column; min-width: 0; }
        .map-pin-title { font-size: clamp(13px, 1.5vw, 15px); line-height: 1.1; color: #111; font-weight: 600; }
        .map-pin-link { display: inline-block; margin-top: 3px; font-size: 10px; color: #050889; text-decoration: underline; font-weight: 600; }
        .pin-lhr { left: 8%; top: 10%; animation-delay: .05s; }
        .pin-isl { left: 40%; top: 38%; animation-delay: .22s; }
        .pin-khi { right: 14%; top: 22%; animation-delay: .38s; }
        .pin-fsd { left: 22%; bottom: 12%; animation-delay: .56s; }

        .testimonials-section { position: relative; padding: 88px 0 80px; background: #ffffff; }
        .testimonials-pill-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #00FE4E;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }
        .testimonials-heading {
          background: linear-gradient(
            90deg,
            #00FE4E 0%,
            #000572 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 1024px) { .testimonials-section { padding: 56px 0 64px; } }
        @media (max-width: 768px) { .testimonials-section { padding: 44px 0 52px; } }
        @media (max-width: 480px) { .testimonials-section { padding: 36px 0 44px; } }

        .testimonial-stage {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 30px auto;
          min-height: 240px;
        }
        @media (max-width: 768px) { .testimonial-stage { min-height: 260px; } }
        @media (max-width: 480px) { .testimonial-stage { min-height: 300px; } }

        .testimonial-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          opacity: 0;
          pointer-events: none;
          transform: translateY(40px) scale(0.96);
          transition:
            opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        .testimonial-slide.is-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
          transition-delay: 0.1s;
        }
        .testimonial-slide.dir-prev:not(.is-active) {
          transform: translateY(-40px) scale(0.96);
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-slide,
          .testimonial-slide.is-active {
            transition: opacity 0.2s ease;
            transform: none;
          }
        }
        .testimonials-blink { position: absolute; top: 50%; width: clamp(240px, 28vw, 420px); height: auto; pointer-events: none; z-index: 1; animation: blinkTwinkle 3.2s ease-in-out infinite; }
        .testimonials-blink-left { left: -60px; transform: translateY(-50%); }
        .testimonials-blink-right { right: -60px; transform: translateY(-50%) scaleX(-1); animation-delay: 1.6s; }
        @keyframes blinkTwinkle { 0%, 100% { opacity: 0.55; filter: brightness(1); } 25% { opacity: 0.9; filter: brightness(1.15) drop-shadow(0 0 6px rgba(0,254,78,0.25)); } 50% { opacity: 0.7; filter: brightness(1.05) drop-shadow(0 0 4px rgba(0,254,78,0.15)); } 75% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0 8px rgba(0,254,78,0.3)); } }
        .testimonials-avatar { object-position: center 75%; box-shadow: 0 4px 16px rgba(0,0,0,0.1), 0 0 0 3px rgba(0,254,78,0.12); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .testimonials-avatar:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.14), 0 0 0 5px rgba(0,254,78,0.18); }
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
        .newsletter-title {
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-size: clamp(22px, 3.4vw, 42px);
          font-weight: 400;
          letter-spacing: 0px;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
          background: linear-gradient(
            90deg,
            #00FE4E 0%,
            #000572 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 640px) {
          .newsletter-title {
            white-space: normal;
          }
        }
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
          background: transparent;
          padding: 10px 0 110px;
          margin-top: 110px;
        }
        .contact-cta-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: center;
        }
        .contact-cta-box {
          position: relative;
          width: 100%;
          max-width: 820px;
          min-height: 270px;
          padding: 44px 56px;
          background: linear-gradient(135deg, #0a0e7a 0%, #050889 100%);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(5, 7, 131, 0.25);
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
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          line-height: 1.5;
          max-width: 560px;
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
          .contact-cta-section { margin-top: 40px; padding: 0 0 80px; }
          .contact-cta-wrap { padding: 0 24px; }
          .contact-cta-box { padding: 40px 32px; min-height: 200px; gap: 20px; }
          .contact-cta-text { font-size: 17px; }
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
        .team-bg-circuit { position: absolute; right: 2%; top: 50%; transform: translateY(-50%); width: 160px; height: 380px; pointer-events: none; opacity: 0.55; z-index: 1; }
        .team-bg-circuit svg { width: 100%; height: 100%; }
        @media (max-width: 1023px) { .team-bg-circuit { display: none; } }
        .team-title { font-family: var(--font-poppins), sans-serif; font-size: clamp(36px, 6.5vw, 72px); font-weight: 300; letter-spacing: 0.04em; line-height: 1; margin: 0; text-transform: uppercase; }
        .team-row { position: relative; z-index: 10; display: grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: start; }
        .team-btn-col { position: relative; display: flex; align-items: center; justify-content: center; min-height: 280px; }
        .team-neptune-wrap { position: absolute; left: -200px; top: 50%; transform: translateY(-50%); width: 760px; height: 760px; pointer-events: none; z-index: 1; }
        .team-neptune-wrap img { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: contain; transform: translate(-50%, -50%); transform-origin: 50% 50%; animation: teamSphereRotate 60s linear infinite; will-change: transform; opacity: 0.85; }
        .team-neptune-btn { position: absolute; left: calc(-200px + 380px); top: 50%; transform: translate(-50%, -50%); z-index: 5; }
        @keyframes teamSphereRotate { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .team-neptune-wrap img { animation: none; } }
        .team-about-btn { position: relative; z-index: 5; height: 48px; padding: 0 32px; border-radius: 24px; background: #00fe4e; color: #000; font-size: 15px; font-weight: 500; box-shadow: 0 8px 24px rgba(0,254,78,0.35), 0 0 0 6px rgba(0,254,78,0.12); transition: transform 0.25s, box-shadow 0.25s; white-space: nowrap; cursor: pointer; border: none; }
        .team-about-btn:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 12px 32px rgba(0,254,78,0.5), 0 0 0 8px rgba(0,254,78,0.18); }
        .team-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .team-cards-col { position: relative; z-index: 10; grid-column: 2; }
        .team-card { display: flex; flex-direction: column; align-items: stretch; }
        .team-card-role { min-height: 32px; margin-top: 12px; font-size: 11px; line-height: 1.35; color: #000; text-align: center; display: flex; align-items: flex-start; justify-content: center; }
        @media (min-width: 1024px) { .team-card-role { font-size: 12px; min-height: 34px; } }
        .team-card-name { margin-top: 4px; font-size: 14px; font-weight: 700; color: #00b95a; text-align: center; letter-spacing: 0.02em; }
        @media (min-width: 1024px) { .team-card-name { font-size: 16px; } }
        .team-card-linkedin { margin: 12px auto 0; display: flex; height: 28px; width: 28px; align-items: center; justify-content: center; border-radius: 9999px; background: #0077b5; color: #fff; }
        .team-photo-frame { position: relative; width: 100%; aspect-ratio: 4 / 4.4; overflow: hidden; border-radius: 6px; background: #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.35s, box-shadow 0.35s; }
        .team-photo-frame:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.15); }
        .team-photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
        @media (max-width: 1023px) { .team-row { grid-template-columns: 1fr; gap: 24px; } .team-cards-col { grid-column: 1; } .team-neptune-wrap { width: 480px; height: 480px; left: 0; right: auto; top: 20%; } .team-neptune-btn { left: 240px; top: 20%; } .team-cards-grid { grid-template-columns: repeat(4, 1fr); gap: 14px; } }
        @media (max-width: 768px) { .team-neptune-wrap { width: 320px; height: 320px; left: -50px; top: 0; transform: none; opacity: 0.7; } .team-neptune-btn { position: absolute; left: 95px; top: 160px; transform: translate(-50%, -50%); margin-bottom: 0; z-index: 10; } .team-about-btn { height: 38px !important; padding: 0 22px !important; font-size: 13px !important; border-radius: 20px !important; box-shadow: 0 6px 18px rgba(0,254,78,0.3), 0 0 0 4px rgba(0,254,78,0.1) !important; } .team-cards-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .team-row { padding-top: 320px !important; } }
        @media (max-width: 480px) { .team-cards-grid { gap: 12px; } }
      `}</style>

      <div className="hero-stack">
        <section className="hero-bg">
          {heroBackgrounds.map((bg, i) => (
            <div
              key={bg}
              className={`hero-bg-layer ${i === heroBgIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-3 pb-[70px] sm:pb-[120px] lg:pb-[180px]">

            <div className="hero-robot-wrap hidden lg:block">
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
              <nav className="pw-nav">
                <div className="pw-nav-bg" />
                <div className="pw-glow-line" />
                <div className="pw-logo-glow" />
                <div className="pw-orb-wrap"><div className="pw-orb na" /><div className="pw-orb nb" /><div className="pw-orb nc" /></div>
                <div className="pw-logo-zone"><img src="/parwaaz-logo.png" alt="Parwaaz" /></div>
                <div className="pw-links">
                  {[
                    { l: "Home", a: true, hasDropdown: false },
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
                <div className="lg:hidden mt-3 rounded-2xl border border-[#00fe4e]/30 bg-black/95 backdrop-blur p-5 space-y-1">
                  <Link href="#" onClick={() => setMobileNavOpen(false)} className="block text-white text-base font-semibold hover:text-[#00fe4e] py-2">Home</Link>
                  <Link href="#" onClick={() => setMobileNavOpen(false)} className="block text-white text-base font-semibold hover:text-[#00fe4e] py-2">About</Link>

                  <button
                    onClick={() => setMobileServicesOpen(v => !v)}
                    className="flex w-full items-center justify-between py-2 text-base font-semibold text-white hover:text-[#00fe4e]"
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>Services</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300"
                      style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: mobileServicesOpen ? "1000px" : "0px",
                      opacity: mobileServicesOpen ? 1 : 0,
                    }}
                  >
                    <div className="pl-3 pt-1 pb-2 space-y-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e] mb-1.5">Marketing &amp; Branding</div>
                        <div className="space-y-1">
                          {["International Events", "Domestic Events", "Webinars", "Meetups", "Tech Export Marketing", "Tech Connect"].map(item => (
                            <Link key={item} href="#" onClick={() => { setMobileNavOpen(false); setMobileServicesOpen(false); }} className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]">{item}</Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e] mb-1.5">HR Skills &amp; Capacity</div>
                        <div className="space-y-1">
                          {["SLED Program", "GAIN Network", "ICT Training Roadmap", "ILMS", "PM's Skills Initiative", "INSPIRE Program"].map(item => (
                            <Link key={item} href="#" onClick={() => { setMobileNavOpen(false); setMobileServicesOpen(false); }} className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]">{item}</Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#00fe4e] mb-1.5">Infrastructure</div>
                        <div className="space-y-1">
                          {["STPs", "IT Parks", "NCSP Centres"].map(item => (
                            <Link key={item} href="#" onClick={() => { setMobileNavOpen(false); setMobileServicesOpen(false); }} className="block py-1 text-[13px] text-white/80 hover:text-[#00fe4e]">{item}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="#" onClick={() => setMobileNavOpen(false)} className="block text-white text-base font-semibold hover:text-[#00fe4e] py-2">Contact</Link>

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
                <div className="hero-robot-mobile lg:hidden">
                  <div className="hero-robot-glow" />
                  <img src="/robot.png" alt="Robot" className="hero-robot-img robot-float" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bg-dots">
            {heroBackgrounds.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroBgIndex(i)}
                className={`hero-bg-dot ${i === heroBgIndex ? 'is-active' : ''}`}
                aria-label={`Show banner ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="chatbox-wrap">
          <div className="mx-auto w-full max-w-[1100px] px-3 sm:px-6">
            <div className="ea-card">
              <div className="relative px-4 py-4 sm:px-7 sm:py-6">

                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="mb-1 font-bold leading-tight text-[#00fe4e]" style={{ fontSize: 'clamp(18px, 5.2vw, 28px)' }}>
                    How Can We Assist You Today?
                  </h3>
                  <p className="font-medium text-white/85 px-2" style={{ fontSize: 'clamp(10px, 2.6vw, 12px)' }}>
                    Find answers to your questions instantly let AI do the work for you
                  </p>
                </div>

                <div className="bg-black rounded-t-[10px] sm:rounded-t-[12px] overflow-hidden">
                  <div className="px-3 py-3 sm:px-5 sm:py-5">
                    <div className="ask-typing-wrap">
                      <span className="ask-typing">Ask Anything...</span>
                    </div>
                    <div className="flex items-center justify-between mt-3 sm:mt-5">
                      <label className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-white rounded-[7px] cursor-pointer">
                        <Plus className="h-4 w-4 text-black" />
                        <input type="file" accept="*/*" className="hidden" />
                      </label>
                      <div className="flex gap-1.5 sm:gap-2">
                        <button className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-transparent border border-white/25 rounded-[7px]">
                          <Mic className="h-4 w-4 text-white/80" />
                        </button>
                        <button className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-blue-500 rounded-[7px]">
                          <ArrowUp className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:justify-center flex-nowrap gap-1.5 sm:gap-2 bg-[#2f58b3] px-2.5 sm:px-4 py-2.5 sm:py-3 overflow-x-auto scrollbar-hide">
                    {chips.map(({ label, icon: Icon }) => (
                      <button key={label} className="flex h-[24px] sm:h-[28px] shrink-0 items-center gap-1 sm:gap-1.5 rounded-full bg-white px-2.5 sm:px-3 text-[9px] sm:text-[11px] font-semibold text-[#4b4b4b] shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 whitespace-nowrap">
                        <Icon className="h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] text-[#00fe4e]" /><span>{label}</span>
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
        <section data-reveal="up" className="mt-[64px] mx-auto w-full max-w-[1410px] px-4 sm:px-6 lg:px-0">
          <div className="wef-card mx-auto flex min-h-[150px] w-full max-w-[1120px] items-center gap-[42px] rounded-[8px] bg-[#f8f8f8] px-[54px] py-[28px]">
            <div className="flex w-[290px] shrink-0 items-center justify-center">
              <img src="/wef-logo.png" alt="World Economic Forum" className="h-[118px] w-auto object-contain" />
            </div>
            <p className="max-w-[740px] text-[24px] font-light leading-[1.28] tracking-[-0.02em] text-[#8c8c93]">
              Closing the Skills Gap in Pakistan, Parwaaz is the exclusive partner for the World Economic Forum in Pakistan
            </p>
          </div>

          <div className="parwaaz-row mx-auto mt-[64px] grid w-full max-w-[970px] grid-cols-[515px_296px] items-start gap-[18px]">
            <div>
              <div data-reveal="left" data-reveal-mode="cycle" className="h-[138px] w-full rounded-[8px] bg-[#d9d9d9] px-[42px] py-[26px]">
                <div className="flex h-full items-start justify-between gap-6">
                  <div>
                    <h3 className="text-[42px] font-extrabold leading-[0.95] tracking-[-0.045em] text-[#050889]">
                      Par.waaz
                    </h3>
                    <div className="mt-[10px] text-[18px] font-medium leading-none text-black">
                      flight or flying
                    </div>
                    <div className="mt-[10px] text-[18px] font-medium leading-none text-black">
                      (پرواز)
                    </div>
                  </div>
                  <img
                    src="/iran-flag.png"
                    alt="flag"
                    className="mt-[2px] h-[30px] w-[48px] rounded-[5px] object-cover"
                  />
                </div>
              </div>
              <div className="pt-[18px] pl-[34px] pr-[10px]">
                <ol className="list-decimal space-y-[24px] text-[16px] font-light leading-[1.62] tracking-[-0.01em] text-[#222]">
                  <li data-mwg-reveal="paragraph" className="parwaaz-list-item">
                    Parwaaz (پرواز) is a Persian word meaning flight — not just the physical act of flying, but the rise of spirit, the leap of ambition and uninterrupted flight.
                  </li>
                  <li data-mwg-reveal="paragraph" className="parwaaz-list-item">
                    We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.
                  </li>
                </ol>
              </div>
            </div>
            <div data-reveal="right" data-reveal-mode="cycle" data-reveal-delay="120" className="parwaaz-blue h-[296px] w-[296px] rounded-[8px] border border-[#00FE4E] bg-[#000572] px-[24px] py-[22px]">
              <p className="m-0 text-[16px] font-light leading-[1.58] tracking-[-0.01em] text-white">
                We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

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
              <div data-reveal="zoom" data-reveal-delay="0" className="service-card service-card-cycle relative flex flex-col min-h-[340px] lg:min-h-[380px] rounded-[10px] border border-[#e5e5e5] p-8 lg:p-10">
                <FileText className="service-card-icon absolute right-7 top-6 lg:right-10 lg:top-8 h-[64px] w-[64px] lg:h-[80px] lg:w-[80px] service-card-icon-cycle" strokeWidth={1.4} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[90px] text-[14px]">Coursera &amp;</div>
                <h3 className="service-card-title mt-2 font-medium leading-tight tracking-[-0.02em]" style={{ fontSize: 'clamp(26px, 2.6vw, 32px)' }}>
                  Digital Learning
                </h3>
                <p className="service-card-body mt-4 text-[14px] lg:text-[15px] leading-[1.7]">Empowering Pakistan&apos;s workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
              </div>
              <div data-reveal="zoom" data-reveal-delay="140" className="service-card service-card-cycle relative flex flex-col min-h-[340px] lg:min-h-[380px] rounded-[10px] border border-[#e5e5e5] p-8 lg:p-10">
                <Database className="service-card-icon absolute right-7 top-6 lg:right-10 lg:top-8 h-[64px] w-[64px] lg:h-[80px] lg:w-[80px] service-card-icon-cycle" strokeWidth={1.5} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[90px] text-[14px]">International Recruitment</div>
                <h3 className="service-card-title mt-2 font-medium leading-tight tracking-[-0.02em]" style={{ fontSize: 'clamp(26px, 2.6vw, 32px)' }}>&amp; Payroll</h3>
                <p className="service-card-body mt-4 text-[14px] lg:text-[15px] leading-[1.7]">Connecting top Pakistani talent with global opportunities. We provide comprehensive recruitment and manpower solutions to meet the needs of international partners.</p>
              </div>
              <div data-reveal="zoom" data-reveal-delay="280" className="service-card service-card-cycle relative flex flex-col min-h-[340px] lg:min-h-[380px] rounded-[10px] border border-[#e5e5e5] p-8 lg:p-10 md:col-span-2 lg:col-span-1">
                <Code2 className="service-card-icon absolute right-7 top-6 lg:right-10 lg:top-8 h-[64px] w-[64px] lg:h-[80px] lg:w-[80px] service-card-icon-cycle" strokeWidth={1.4} />
                <div className="service-card-eyebrow mt-[70px] lg:mt-[90px] text-[14px]">Payroll, Contract &amp; Visa Management</div>
                <h3 className="service-card-title mt-2 font-medium leading-tight tracking-[-0.02em]" style={{ fontSize: 'clamp(26px, 2.6vw, 32px)' }}>Services</h3>
                <p className="service-card-body mt-4 text-[14px] lg:text-[15px] leading-[1.7]">Empowering Pakistan&apos;s workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
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
            <div className="mt-6 lg:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[1280px]">
              {[
                { Icon: CheckCircle2, val: "1,000+", l1: "Successful", l2: "Placements" },
                { Icon: BookOpen, val: "12,000+", l1: "Specialized", l2: "Courses" },
                { Icon: Smile, val: "95%", l1: "Customer", l2: "Satisfaction" },
                { Icon: Globe, val: "5+", l1: "Countries", l2: "where we have clients" },
              ].map((s, i) => (
                <div key={s.val} data-reveal="up" data-reveal-delay={i * 100} className="stat-card aspect-square flex flex-col items-center justify-center p-6">
                  <s.Icon className="stat-card-icon mb-3 lg:mb-4" strokeWidth={1.6} style={{ width: 'clamp(34px, 3.4vw, 44px)', height: 'clamp(34px, 3.4vw, 44px)' }} />
                  <div className="stat-card-val font-normal leading-none" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>{s.val}</div>
                  <div className="stat-card-label mt-3 lg:mt-4 text-center leading-[1.2] text-black" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
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
              <div ref={logoTrackRef} className="logo-track" style={{ transform: `translateX(calc(${-(logoIndex + clientLogos.length)} * (clamp(150px, 16vw, 200px) + 32px)))` }}>
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={logo.name + "-" + i} className="logo-card"><img src={logo.src} alt={logo.name} /></div>
                ))}
              </div>
            </div>
            <div data-reveal="zoom" data-reveal-delay="400" className="logo-nav-wrap">
              <div className="logo-nav-btn">
                <button onClick={handleLogoPrev} className="logo-nav-arrow logo-nav-arrow-prev" aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button onClick={handleLogoNext} className="logo-nav-arrow logo-nav-arrow-next" aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="team-section">
          <div className="team-neptune-wrap" aria-hidden="true">
            <img src="/neptune.svg" alt="" />
          </div>
          <div data-reveal="zoom" className="team-neptune-btn">
            <button className="team-about-btn">About Team</button>
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
            <div className="team-row">
              <div className="team-cards-col">
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
                <div className="team-cards-grid">
                  {teamMembers.map((m, i) => (
                    <div key={m.name} data-reveal="up" data-reveal-delay={i * 110} className="team-card">
                      <div className="team-photo-frame">
                        <img src={m.img} alt={m.name} />
                      </div>
                      <div className="team-card-role">{m.role}</div>
                      <div className="team-card-name">{m.name}</div>
                      <div className="team-card-linkedin">
                        <LinkedInSvg />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <section className="relative bg-white py-10 lg:py-16 overflow-hidden">
            <h2 data-reveal="up-sm" className="trusted-heading text-center uppercase" style={{ fontSize: 'clamp(28px, 4.4vw, 56px)', fontWeight: 400, lineHeight: '1', letterSpacing: '0px', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
              Trusted By 14 Million Professional
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
                  <div className="map-pin-text">
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
            <div data-reveal="zoom" className="testimonials-pill mx-auto flex h-[48px] w-[173px] items-center gap-[8px] rounded-[50px] bg-[#00FE4E] border border-[#E4E6E8] pl-[6px] pr-[18px]">
              <div className="flex items-center">
                <img src={testimonials[0].img} alt="" className="testimonials-pill-avatar" style={{ zIndex: 3 }} />
                <img src={testimonials[1].img} alt="" className="testimonials-pill-avatar -ml-[12px]" style={{ zIndex: 2 }} />
                <img src={testimonials[2].img} alt="" className="testimonials-pill-avatar -ml-[12px]" style={{ zIndex: 1 }} />
              </div>
              <span className="text-[14px] font-semibold text-black leading-none">Testimonials</span>
            </div>
            <h2 data-reveal="up-sm" className="testimonials-heading mt-14 lg:mt-[72px] text-center uppercase" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400, lineHeight: '1', letterSpacing: '0px', fontFamily: 'Inter, sans-serif' }}>
              What Our Client Say
            </h2>
            <div className="testimonial-stage mt-24 lg:mt-[140px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`testimonial-slide ${i === testimonialIndex ? 'is-active' : ''} dir-${testimonialDir}`}
                  aria-hidden={i !== testimonialIndex}
                >
                  <img src={t.img} alt={t.name} className="testimonials-avatar mx-auto h-[44px] w-[44px] lg:h-[48px] lg:w-[48px] rounded-full object-cover" />
                  <div className="mt-3 lg:mt-4 text-[14px] lg:text-[15px] font-bold text-[#050889] text-center">{t.name}</div>
                  <div className="mt-1 text-[11px] text-[#ffc400] tracking-[0.18em] text-center">{'★'.repeat(t.stars)}</div>
                  <p className="mt-4 lg:mt-5 text-[13px] lg:text-[15px] leading-[1.65] text-black/75 max-w-[640px] mx-auto text-center">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
            <div data-reveal="zoom" data-reveal-delay="360" className="testimonials-nav-wrap">
              <div className="testimonials-nav-btn">
                <button onClick={handleTestimonialPrev} className="testimonials-nav-arrow testimonials-nav-arrow-prev" aria-label="Previous testimonial">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button onClick={handleTestimonialNext} className="testimonials-nav-arrow testimonials-nav-arrow-next" aria-label="Next testimonial">
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
              Join The Future Of Innovation
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