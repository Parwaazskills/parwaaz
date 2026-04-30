"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Mail, Phone, Search, Plus, Mic, ArrowUp,
  Lightbulb, Code2, FileText, GraduationCap,
  Database, Image as ImageIcon, MapPin,
} from "lucide-react";

function FacebookSvg() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.703 4.533-4.703 1.313 0 2.686.236 2.686.236v2.973H15.83c-1.49 0-1.955.931-1.955 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" /></svg>;
}
function YoutubeSvg() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.504 3.5 12 3.5 12 3.5s-7.504 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.08 0 12 0 12s0 3.92.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.496 20.5 12 20.5 12 20.5s7.504 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>;
}
function XSvg() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.636 7.584H.478l8.6-9.83L0 1.153h7.594l5.243 6.932L18.9 1.153Zm-1.29 19.494h2.04L6.486 3.246H4.298l13.313 17.401Z" /></svg>;
}
function LinkedInSvg() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" /></svg>;
}

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

const BODY = "Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.";
const CARDS = [
  { title: "Demand",   color: "#5BE1E8", tilt: -12 }, // Cyan from Figma
  { title: "Design",   color: "#00FF66", tilt:   8 }, // Bright green from Figma
  { title: "Build",    color: "#8FF1BA", tilt:  18 }, // Light mint from Figma
  { title: "Validate", color: "#8FF1BA", tilt:  26 }, // Light mint from Figma
];
const CARD_GAP = 300; // px between card centers
const TOTAL_SCROLL = (CARDS.length - 1) * CARD_GAP; // 900px

export default function Page() {
  const sectionRef  = useRef<HTMLElement | null>(null);
  const systemRef   = useRef<HTMLDivElement | null>(null);
  const planetRef   = useRef<HTMLDivElement | null>(null);
  const crescentRef = useRef<HTMLDivElement | null>(null);
  const stripRef    = useRef<HTMLDivElement | null>(null);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef  = useRef<HTMLDivElement | null>(null);
  const cx = useRef(0); const cy = useRef(0);
  const rx = useRef(0); const ry = useRef(0);

  /* ── ORBIT SCROLL ── */
  useEffect(() => {
    let raf = 0;

    const run = () => {
      const sec = sectionRef.current;
      if (!sec || !stripRef.current) return;

      const vh = window.innerHeight;
      const rect = sec.getBoundingClientRect();
      
      const scrolled = Math.max(0, Math.min(TOTAL_SCROLL, -rect.top));
      const p = scrolled / TOTAL_SCROLL;

      if (systemRef.current)
        systemRef.current.style.transform = `translateY(-50%) rotate(${(p * -20).toFixed(2)}deg)`;
      if (planetRef.current)
        planetRef.current.style.transform = `rotate(${(p * 20).toFixed(2)}deg)`;
      if (crescentRef.current)
        crescentRef.current.style.transform = `translateY(-50%) rotate(${(-167.25 + p * 6).toFixed(2)}deg)`;

      stripRef.current.style.transform = `translateY(${-scrolled}px)`;

      const focus = vh * 0.42;
      const cards = stripRef.current.querySelectorAll<HTMLElement>(".orbit-card");
      
      cards.forEach((el, i) => {
        const cardTop = focus + i * CARD_GAP;
        const screenY = cardTop - scrolled;
        const dist = screenY - focus;
        const abs = Math.abs(dist);

        // 0.xyz uses a SHARP focus window - only 1 card visible at a time
        // Opacity drops off quickly outside ±180px from center
        const opacityWindow = 180;
        const opacity = abs < opacityWindow 
          ? Math.pow(1 - (abs / opacityWindow), 2.5) // Quadratic falloff for sharp focus
          : 0;

        // Scale: cards grow as they approach center (0.85 → 1.0)
        const scale = abs < opacityWindow
          ? 0.85 + (0.15 * (1 - abs / opacityWindow))
          : 0.85;

        // Tilt: cards tilt based on distance from center
        const tilt = CARDS[i].tilt + (dist / vh) * -6;

        // Blur: adds depth - blurrier when further from focus
        const blur = abs < opacityWindow
          ? (abs / opacityWindow) * 2
          : 2;

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `rotate(${tilt.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.filter = `blur(${blur.toFixed(2)}px)`;
        el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
      });
    };

    const initCards = () => {
      if (!stripRef.current) return;
      const vh = window.innerHeight;
      const focus = vh * 0.42;
      const cards = stripRef.current.querySelectorAll<HTMLElement>(".orbit-card");
      cards.forEach((el, i) => {
        el.style.top = `${focus + i * CARD_GAP}px`;
      });
    };

    initCards();
    run();
    
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(run); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { initCards(); run(); });
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", initCards);
    };
  }, []);

  /* ── CURSOR ── */
  useEffect(() => {
    const ring = ringRef.current; const dot = dotRef.current;
    if (!ring || !dot) return;
    let af = 0;
    const move = (e: MouseEvent) => {
      cx.current = e.clientX; cy.current = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx.current += (cx.current - rx.current) * 0.16;
      ry.current += (cy.current - ry.current) * 0.16;
      ring.style.transform = `translate3d(${rx.current}px,${ry.current}px,0) translate(-50%,-50%)`;
      af = requestAnimationFrame(loop);
    };
    const on  = () => document.body.classList.add("pw-ca");
    const off = () => document.body.classList.remove("pw-ca");
    const els = Array.from(document.querySelectorAll("a,button,input,textarea,select,label"));
    els.forEach(el => { el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off); });
    window.addEventListener("mousemove", move, { passive: true });
    af = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move); cancelAnimationFrame(af);
      document.body.classList.remove("pw-ca");
      els.forEach(el => { el.removeEventListener("mouseenter", on); el.removeEventListener("mouseleave", off); });
    };
  }, []);

  return (
    <main className="bg-white">
      <div ref={ringRef} className="pw-ring" />
      <div ref={dotRef}  className="pw-dot"  />

      <style jsx global>{`
        body{cursor:none;}
        a,button,input,textarea,select,label{cursor:none;}
        .pw-ring,.pw-dot{position:fixed;left:0;top:0;pointer-events:none;z-index:2147483647;will-change:transform;}
        .pw-ring{width:46px;height:46px;border-radius:50%;border:1px solid rgba(0,255,102,.92);background:rgba(0,255,102,.035);box-shadow:0 0 28px rgba(0,255,102,.38),inset 0 0 18px rgba(0,255,102,.12);mix-blend-mode:difference;transition:width .28s,height .28s,background .28s,border-color .28s;}
        .pw-dot{width:8px;height:8px;border-radius:50%;background:#00ff66;box-shadow:0 0 18px rgba(0,255,102,.95),0 0 42px rgba(0,255,102,.38);}
        body.pw-ca .pw-ring{width:82px;height:82px;border-color:rgba(255,255,255,.96);background:rgba(0,255,102,.16);}
        body.pw-ca .pw-dot{width:5px;height:5px;background:#fff;}
        @media(pointer:coarse){body,a,button,input,textarea,select,label{cursor:auto;}.pw-ring,.pw-dot{display:none;}}

        @keyframes navIn{from{opacity:0;transform:translateY(-22px) scale(.97);}to{opacity:1;transform:none;}}
        @keyframes glowBreathe{0%,100%{opacity:.82;transform:scale(1);filter:blur(20px);}50%{opacity:1;transform:scale(1.28);filter:blur(26px);}}
        @keyframes orb1{from{transform:rotate(0deg) translateX(60px) rotate(0deg);}to{transform:rotate(360deg) translateX(60px) rotate(-360deg);}}
        @keyframes orb2{from{transform:rotate(120deg) translateX(52px) rotate(-120deg);}to{transform:rotate(480deg) translateX(52px) rotate(-480deg);}}
        @keyframes orb3{from{transform:rotate(240deg) translateX(45px) rotate(-240deg);}to{transform:rotate(600deg) translateX(45px) rotate(-600deg);}}
        @keyframes adp{0%,100%{transform:scale(1);opacity:.6;}50%{transform:scale(1.75);opacity:1;box-shadow:0 0 8px rgba(0,255,102,.9);}}

        .pw-nav{position:relative;width:100%;height:72px;border-radius:16px;overflow:hidden;display:flex;align-items:center;background:linear-gradient(90deg,#00ff66 0%,#00e05a 14%,#00813a 22%,#003d18 32%,#001a0a 45%,#010d08 60%,#010810 80%,#020912 100%);border:1px solid rgba(0,255,102,.18);box-shadow:0 0 0 1px rgba(0,255,102,.10),0 8px 32px rgba(0,0,0,.5);animation:navIn .7s cubic-bezier(.2,.9,.3,1) both;}
        .pw-glow-line{position:absolute;left:3%;right:3%;top:-8px;height:5px;border-radius:999px;background:linear-gradient(90deg,#00ff66 0%,rgba(0,255,102,.55) 35%,rgba(0,255,102,.08) 65%,transparent 100%);filter:blur(4px);pointer-events:none;}
        .pw-logo-glow{position:absolute;left:-30px;top:50%;transform:translateY(-50%);width:210px;height:210px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,102,.72) 0%,rgba(0,210,80,.28) 45%,transparent 70%);pointer-events:none;animation:glowBreathe 3.8s ease-in-out infinite;}
        .pw-orb-wrap{position:absolute;left:158px;top:50%;width:0;height:0;pointer-events:none;z-index:4;}
        .pw-orb{position:absolute;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.72);box-shadow:0 0 10px rgba(0,255,102,.9);margin:-3px 0 0 -3px;}
        .na{animation:orb1 5s linear infinite;}.nb{animation:orb2 7s linear infinite;}.nc{animation:orb3 9s linear infinite;}
        .pw-logo-zone{position:relative;z-index:5;display:flex;align-items:center;padding:0 16px 0 18px;min-width:255px;height:100%;flex-shrink:0;}
        .pw-logo-zone img{height:50px;width:auto;object-fit:contain;transition:transform .35s,filter .35s;}
        .pw-logo-zone img:hover{transform:translateY(-4px) scale(1.05);filter:drop-shadow(0 8px 18px rgba(0,255,102,.55));}
        .pw-links{position:relative;z-index:5;display:flex;flex:1;align-items:center;justify-content:center;gap:60px;}
        .pw-link{position:relative;display:flex;align-items:center;gap:6px;color:#fff;font-size:16px;font-weight:600;letter-spacing:.025em;text-decoration:none;transition:color .25s,transform .3s;}
        .pw-link::before{content:'';display:block;width:6px;height:6px;border-radius:50%;background:#00ff66;box-shadow:0 0 8px rgba(0,255,102,.9);flex-shrink:0;opacity:0;transform:scale(0);transition:opacity .22s,transform .22s cubic-bezier(.34,1.56,.64,1);}
        .pw-link::after{content:'';position:absolute;bottom:-7px;left:0;height:2px;width:0;border-radius:99px;background:#00ff66;transition:width .28s;}
        .pw-link:hover{color:#00ff66;transform:translateY(-5px) scale(1.04);}
        .pw-link:hover::before{opacity:1;transform:scale(1);}
        .pw-link:hover::after{width:100%;}
        .pw-link-active{color:#00ff66;}
        .pw-link-active::before{opacity:1;transform:scale(1);animation:adp 2s ease-in-out infinite;}
        .pw-link-active::after{width:100%;background:rgba(0,255,102,.4);}
        .pw-search{position:relative;z-index:5;padding:0 22px 0 0;background:transparent;border:none;cursor:pointer;color:rgba(255,255,255,.72);transition:color .25s,transform .3s;display:flex;align-items:center;}
        .pw-search:hover{color:#00ff66;transform:translateY(-3px) scale(1.12);}

        @keyframes robotFloat{0%,100%{transform:translateY(0);filter:drop-shadow(0 0 40px rgba(62,130,255,.45));}50%{transform:translateY(-15px);filter:drop-shadow(0 0 65px rgba(62,130,255,.7));}}
        .robot-float{animation:robotFloat 4.8s ease-in-out infinite;}

        .ea-card{overflow:hidden;border-radius:10px;border:2px solid #00ff66;background:linear-gradient(180deg,rgba(121,181,181,.88) 0%,rgba(93,125,204,.88) 46%,rgba(21,25,145,.98) 100%);box-shadow:0 0 26px rgba(0,255,102,.14);}
        .ea-pb{min-height:235px;background:#000;padding:32px 42px 30px;}
        .ea-pc{width:min(760px,80%);min-height:82px;border-radius:12px;border:1px solid rgba(128,138,214,.42);background:rgba(39,43,91,.96);display:flex;align-items:center;gap:20px;padding:0 28px;}
        .ea-dia{width:26px;height:26px;border:6px solid #5be1ff;border-radius:6px;transform:rotate(45deg);box-shadow:0 0 16px rgba(91,225,255,.8);animation:diaPulse 2.2s ease-in-out infinite;flex-shrink:0;}
        @keyframes diaPulse{0%,100%{transform:rotate(45deg) scale(1);opacity:.75;}50%{transform:rotate(45deg) scale(1.14);opacity:1;}}
        .ea-pt{color:#d6dbff;font-size:25px;font-weight:800;letter-spacing:-.03em;white-space:nowrap;overflow:hidden;}
        .ea-pt span{display:inline-block;padding:0 6px;background:rgba(255,255,255,.14);border-right:3px solid rgba(255,255,255,.76);animation:eaType 7s steps(28) infinite,eaCaret .8s step-end infinite;overflow:hidden;max-width:0;vertical-align:bottom;}
        @keyframes eaType{0%{max-width:0;}45%{max-width:420px;}78%{max-width:420px;}100%{max-width:0;}}
        @keyframes eaCaret{0%,100%{border-color:transparent;}50%{border-color:rgba(255,255,255,.78);}}
        .ea-ar{margin-top:42px;display:flex;align-items:center;justify-content:flex-end;gap:10px;}
        .ea-btn{display:flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:6px;background:#fff;color:#111;transition:transform .25s;}
        .ea-btn:hover{transform:translateY(-3px);}
        .ea-btn.pr{background:#1724d8;color:#fff;}
        .ea-cr{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:14px;background:#060b83;padding:25px 22px;}

        @keyframes logoQ{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        @keyframes logoF{0%,42%,100%{transform:translateY(0) scale(1);opacity:.78;border-color:rgba(0,0,0,.18);}12%,28%{transform:translateY(-14px) scale(1.08);opacity:1;border-color:rgba(0,255,102,.95);}}
        .logo-shell{position:relative;overflow:hidden;width:100%;padding:30px 0 42px;mask-image:linear-gradient(90deg,transparent 0%,black 9%,black 91%,transparent 100%);}
        .logo-track{display:flex;width:max-content;gap:36px;animation:logoQ 32s linear infinite;will-change:transform;}
        .logo-shell:hover .logo-track{animation-play-state:paused;}
        .logo-card{width:248px;height:150px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;border-radius:6px;border:1px solid rgba(0,0,0,.18);background:rgba(255,255,255,.96);transition:transform .35s,border-color .35s;animation:logoF 14s ease-in-out infinite;}
        .logo-card:nth-child(2),.logo-card:nth-child(7){animation-delay:2.2s;}.logo-card:nth-child(3),.logo-card:nth-child(8){animation-delay:4.4s;}.logo-card:nth-child(4),.logo-card:nth-child(9){animation-delay:6.6s;}.logo-card:nth-child(5),.logo-card:nth-child(10){animation-delay:8.8s;}
        .logo-card:hover{transform:translateY(-16px) scale(1.1)!important;border-color:#00ff66!important;}
        .logo-card img{max-height:82px;max-width:160px;width:auto;object-fit:contain;}

        @keyframes pinPop{0%,18%{opacity:0;transform:translateY(18px) scale(.82);}38%,100%{opacity:1;transform:none;}}
        @keyframes pinPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,255,102,.36);}50%{box-shadow:0 0 0 12px rgba(0,255,102,0);}}
        .map-stage{position:relative;width:min(1080px,100%);height:360px;margin:28px auto 0;overflow:hidden;background:#fff;}
        .map-stage::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(0,0,0,.13) 2px,transparent 2.6px);background-size:13px 13px;mask-image:radial-gradient(ellipse at center,black 45%,transparent 76%);opacity:.48;pointer-events:none;}
        .map-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:.82;filter:grayscale(1) contrast(.9) brightness(1.12);}
        .map-pin{position:absolute;z-index:5;width:154px;height:74px;display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(216,216,216,.94);border-radius:4px;box-shadow:0 10px 28px rgba(0,0,0,.08);animation:pinPop .9s cubic-bezier(.2,.9,.25,1) both;transition:transform .28s;}
        .map-pin:hover{transform:translateY(-7px) scale(1.035);}
        .map-pin::after{content:'';position:absolute;left:38px;bottom:-16px;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:17px solid rgba(216,216,216,.94);}
        .map-pin-icon{width:43px;height:43px;flex:0 0 auto;background:#00ff66;border-radius:2px;animation:pinPulse 2.4s ease-in-out infinite;}
        .map-pin-title{font-size:17px;line-height:1;color:#111;font-weight:500;}
        .map-pin-link{display:inline-block;margin-top:5px;font-size:8px;color:#050889;text-decoration:underline;font-weight:700;}
        .pin-lhr{left:94px;top:38px;animation-delay:.05s;}.pin-isl{left:450px;top:135px;animation-delay:.22s;}.pin-khi{right:165px;top:78px;animation-delay:.38s;}.pin-fsd{left:255px;bottom:42px;animation-delay:.56s;}

        /* ══════════════════════════════════════════════════════════
           ORBIT SECTION — Perfect filmstrip implementation
           
           Section = 100vh sticky + 900px scroll = NO blank space
           4 cards positioned 300px apart → all visible
        ══════════════════════════════════════════════════════════ */

        .orbit-section {
          position: relative;
          height: calc(100vh + ${TOTAL_SCROLL}px);
          margin-inline: calc(50% - 50vw);
          background: #f5f5f5;
        }

        .orbit-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: #f5f5f5;
        }

        @keyframes spinCW  { to { transform: rotate(360deg);  } }
        @keyframes spinCCW { to { transform: rotate(-360deg); } }
        @keyframes ballPulse { 0%,100%{opacity:.8;transform:scale(1);}50%{opacity:1;transform:scale(1.1);} }

        .orbit-system {
          position: absolute;
          left: -420px;
          top: 50%;
          width: 1000px;
          height: 1000px;
          transform: translateY(-50%);
          transform-origin: center;
          will-change: transform;
          pointer-events: none;
          z-index: 1;
        }

        .orbit-planet {
          position: absolute;
          left: 80px;
          top: 280px;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 45%, #e8e8e8 0%, #c2c2c2 25%, #a8a8a8 50%, #888 75%, #666 100%);
          box-shadow: 30px 0 60px rgba(100,100,100,.15);
          transform-origin: center;
          will-change: transform;
          z-index: 2;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .ring-1 { inset: 0;      border: 1px solid rgba(0,0,0,.18); }
        .ring-2 { inset: 90px;   border: 1px solid rgba(0,0,0,.16); }
        .ring-3 { inset: 180px;  border: 1px solid rgba(0,0,0,.14); }
        .ring-4 { inset: 290px;  border: 1px solid rgba(0,0,0,.12); }

        .orbit-objects,
        .orbit-objects-fast {
          position: absolute;
          inset: 0;
          transform-origin: center;
          will-change: transform;
          z-index: 3;
        }
        .orbit-objects { animation: spinCW 24s linear infinite; }
        .orbit-objects-fast { inset: 78px; animation: spinCCW 9s linear infinite; }

        .orbit-dot {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(200,200,200,.75);
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
        }

        .orbit-solid {
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: rgba(200,200,200,.85);
          box-shadow: 0 4px 16px rgba(0,0,0,.12);
        }

        .d1{left:800px;top:100px;} .d2{left:930px;top:500px;}
        .d3{left:500px;top:910px;} .d4{left:210px;top:430px;}
        .d5{left:670px;top:230px;width:30px;height:30px;} .d6{left:780px;top:750px;width:32px;height:32px;}
        .s1{left:805px;top:185px;} .s2{left:885px;top:458px;} .s3{left:735px;top:775px;}

        .orbit-crescent {
          position: absolute;
          right: -200px;
          top: 50%;
          width: 1117px;
          height: 1696px;
          transform: translateY(-50%) rotate(-167.25deg);
          transform-origin: center;
          will-change: transform;
          z-index: 2;
          pointer-events: none;
        }

        .orbit-strip {
          position: absolute;
          inset: 0;
          will-change: transform;
          z-index: 10;
          pointer-events: none;
        }

        .orbit-card {
          position: absolute;
          display: flex;
          align-items: flex-start;
          gap: 26px;
          width: 620px;
          left: 52%;
          visibility: visible;
          opacity: 0;
          transform-origin: 0 40%;
          will-change: transform, opacity, filter;
        }

        .orbit-ball {
          width: 70px;
          height: 70px;
          min-width: 70px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #d4d4d4;
          box-shadow: 0 20px 45px rgba(0,0,0,.10);
          animation: ballPulse 3.8s ease-in-out infinite;
        }

        .orbit-card h3 {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 54px;
          line-height: 60px;
          font-weight: 500;
          letter-spacing: 0;
          margin: 0 0 18px;
        }

        .orbit-card p {
          margin: 0;
          max-width: 480px;
          font-size: clamp(14px, 1.1vw, 16px);
          line-height: 1.58;
          font-weight: 600;
          color: rgba(60,60,60,.76);
          letter-spacing: -.008em;
        }

        @media (max-width: 1200px) {
          .orbit-system { left: -520px; width: 950px; height: 950px; }
          .orbit-crescent { right: -340px; width: 420px; height: 640px; }
          .orbit-card { width: 500px; left: 48%; }
          .orbit-card h3 { font-size: 42px; }
          .orbit-card p { font-size: 13px; max-width: 360px; }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#020812]">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20px_30px,rgba(255,255,255,.85)_1px,transparent_1.5px),radial-gradient(circle_at_130px_80px,rgba(0,180,255,.9)_1.5px,transparent_2px),radial-gradient(circle_at_210px_170px,rgba(255,255,255,.7)_1px,transparent_1.5px),radial-gradient(circle_at_70px_170px,rgba(0,180,255,.8)_1.5px,transparent_2px)] [background-size:240px_240px]" />
        <div className="absolute inset-x-0 bottom-[-150px] h-[390px] rounded-[100%] border-t border-[#7bd6ff]/45 bg-[radial-gradient(ellipse_at_top,rgba(34,141,255,.55),transparent_58%)] shadow-[0_-28px_120px_rgba(0,119,255,.34)]" />
        <div className="absolute left-[40%] bottom-[-48px] h-[290px] w-[600px] -translate-x-1/2 rounded-[100%] border border-white/25" />
        <div className="absolute left-[58%] bottom-[-60px] h-[320px] w-[760px] -translate-x-1/2 rounded-[100%] border border-white/15" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-14 pb-[185px] pt-8">
          <div className="mb-8 flex items-center justify-end gap-5 text-[13px] font-semibold text-white/90">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#00ff66]" /><span>+92 300 2855800</span></div>
            <span className="text-white/35">|</span>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#00ff66]" /><span>+92 300 2855800</span></div>
            <span className="text-white/35">|</span>
            <span className="text-white/65">Follow Us:</span>
            <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff66]/12 text-[#00ff66] shadow-[0_0_18px_rgba(0,255,102,.6)] transition hover:bg-[#00ff66]/20"><FacebookSvg /></Link>
            <Link href="#" className="flex h-7 w-7 items-center justify-center text-white/75 transition hover:text-white"><YoutubeSvg /></Link>
            <Link href="#" className="flex h-7 w-7 items-center justify-center text-white/75 transition hover:text-white"><XSvg /></Link>
          </div>
          <div className="relative mb-10">
            <div className="pw-glow-line" />
            <nav className="pw-nav">
              <div className="pw-logo-glow" />
              <div className="pw-orb-wrap"><div className="pw-orb na" /><div className="pw-orb nb" /><div className="pw-orb nc" /></div>
              <div className="pw-logo-zone"><img src="/parwaaz-logo.png" alt="Parwaaz" /></div>
              <div className="pw-links">
                {[{l:"Home",a:true},{l:"About",a:false},{l:"Services",a:false},{l:"Contact",a:false}].map(({l,a})=>(
                  <Link key={l} href="#" className={a?"pw-link pw-link-active":"pw-link"}>{l}</Link>
                ))}
              </div>
              <button className="pw-search" aria-label="Search"><Search size={22} strokeWidth={2} /></button>
            </nav>
          </div>
          <div className="grid min-h-[520px] grid-cols-[1.05fr_0.95fr] items-center gap-6">
            <div className="max-w-[700px] pl-[70px]">
              <h1 className="mb-3 text-[64px] font-extrabold leading-[.96] tracking-[-0.055em] text-[#00ff66] drop-shadow-[0_0_20px_rgba(0,255,102,.35)]">Delivering Digital<br />Experience</h1>
              <h2 className="mb-7 text-[39px] font-medium leading-none tracking-[-0.04em] text-white">That Make The <span className="text-[#00ff66]">World</span> Better</h2>
              <p className="mb-10 max-w-[640px] text-[16px] font-medium leading-[1.35] text-white/80">Connecting you the right tools, People, and Creative Strategies to<br />elevate your business in <span className="text-[#00ff66]">South Asia, Middle east</span> and beyond.</p>
              <div className="flex items-center gap-6">
                <button className="h-[54px] rounded-[15px] bg-[#00ff33] px-12 text-[15px] font-medium text-[#063615] shadow-[0_0_20px_rgba(0,255,102,.28)] transition hover:brightness-110 active:scale-95">Our Services</button>
                <button className="h-[54px] rounded-[15px] bg-[#f1f1f1] px-12 text-[15px] font-medium text-[#5b5b5b] shadow-[0_8px_24px_rgba(0,0,0,.12)] transition hover:bg-white active:scale-95">Get Started</button>
              </div>
            </div>
            <div className="relative flex justify-end">
              <div className="absolute right-[16%] top-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(78,121,255,.30),transparent_70%)] blur-2xl" />
              <img src="/robot.png" alt="Robot" className="robot-float relative z-10 mt-12 h-auto w-full max-w-[560px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHITE CONTENT ═══ */}
      <section className="relative z-20 -mt-[145px] bg-white pb-16">
        <div className="mx-auto max-w-[1180px] px-6">

          <div className="ea-card">
            <div className="relative px-8 pb-9 pt-8">
              <div className="relative z-10 text-center">
                <h3 className="mb-2 text-[28px] font-bold text-[#00ff66]">How Can We Assist You Today?</h3>
                <p className="mb-7 text-[10px] font-semibold text-white/90">Find answers to your questions instantly let AI do the work for you</p>
              </div>
              <div className="relative z-10 overflow-hidden rounded-[10px] border border-black/30 bg-black">
                <div className="ea-pb">
                  <div className="ea-pc"><span className="ea-dia" /><div className="ea-pt">I want to <span>learn full-stack development</span></div></div>
                  <div className="ea-ar">
                    <label className="ea-btn cursor-pointer"><Plus className="h-5 w-5" /><input type="file" accept="audio/*" className="hidden" /></label>
                    <button className="ea-btn"><Mic className="h-5 w-5 text-[#1724d8]" /></button>
                    <button className="ea-btn pr"><ArrowUp className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="ea-cr">
                  {chips.map(({label,icon:Icon})=>(
                    <button key={label} className="flex h-[32px] shrink-0 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-semibold text-[#4b4b4b] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition hover:-translate-y-1">
                      <Icon className="h-4 w-4 text-[#00ff66]" /><span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-20 rounded-[10px] border border-[#54ff9a] bg-[#f8f8f8] px-10 py-8">
            <div className="grid items-center gap-10 md:grid-cols-[270px_1fr]">
              <div className="flex justify-center md:justify-start"><img src="/wef-logo.png" alt="WEF" className="h-[138px] w-auto object-contain" /></div>
              <p className="max-w-[780px] text-[29px] leading-[1.25] text-[#8c8c93]">Closing the Skills Gap in Pakistan, Parwaaz is the exclusive partner for the World Economic Forum in Pakistan</p>
            </div>
          </section>

          <section className="mt-[70px] grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="rounded-[12px] bg-[#d9d9d9] px-10 py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-[48px] font-extrabold leading-none tracking-[-0.04em] text-[#050889]">Par.waaz</h3>
                    <div className="mt-3 text-[22px] font-medium text-black">flight or flying</div>
                    <div className="mt-3 text-[22px] font-medium text-black">(پرواز)</div>
                  </div>
                  <img src="/iran-flag.png" alt="Iran flag" className="mt-1 h-[34px] w-[54px] rounded-[6px] object-cover" />
                </div>
              </div>
              <div className="px-8 pt-5">
                <p className="text-[20px] leading-[1.65] tracking-[-0.02em] text-[#222]">1. Parwaaz (پرواز) is a Persian word meaning flight — not just the physical act of flying, but the rise of spirit, the leap of ambition and uninterrupted flight.</p>
                <p className="mt-8 text-[20px] leading-[1.65] tracking-[-0.02em] text-[#333]">2. We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.</p>
              </div>
            </div>
            <div className="bg-[#040a96] px-8 py-8 shadow-[0_0_0_1px_rgba(0,255,102,.45)]">
              <p className="text-[27px] font-medium leading-[1.48] tracking-[-0.03em] text-white">We chose this name because it reflects exactly what we do. AI and advanced technology are the defining forces of our era — and learning them is no longer optional, it is the difference between being left behind and leading the way.</p>
            </div>
          </section>

          <section className="mt-[90px] overflow-hidden bg-white pb-[90px]">
            <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-black">Our Services</div>
            <h2 className="whitespace-nowrap text-[92px] font-light uppercase leading-[0.95] tracking-[0.04em] text-[#0adf54]">Cutting-Edge <span className="text-[#0a7a5f]">Solutions</span></h2>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.25] text-[#202020]">Transforming businesses with AI-powered technology and intelligent automation</p>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {["Training","HR services","Reports","Surveys"].map((item,i)=>(
                <button key={item} className={i===0?"h-[64px] rounded-[8px] bg-[#00f25a] text-[17px] font-medium text-black":"h-[64px] rounded-[8px] border border-[#dddddd] bg-white text-[17px] font-medium text-black transition hover:border-[#00ff66]"}>{item}</button>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-3 gap-8">
              <div className="relative h-[338px] rounded-[10px] border border-[#00ff66] bg-white px-8 py-8">
                <FileText className="absolute right-8 top-7 h-[82px] w-[82px] text-[#c9c9c9]" strokeWidth={1.4} />
                <div className="mt-[105px] text-[13px] font-medium text-black">Coursera &amp;</div>
                <h3 className="mt-2 text-[34px] font-light leading-none tracking-[-0.03em]"><span className="text-[#00d84f]">Digital</span> <span className="text-[#0d5d7e]">Learning</span></h3>
                <p className="mt-6 text-[13px] leading-[1.75] text-[#686868]">Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
              </div>
              <div className="relative h-[338px] rounded-[10px] bg-[#050783] px-8 py-8 text-white">
                <Database className="absolute right-8 top-7 h-[82px] w-[82px] text-white" strokeWidth={1.5} />
                <div className="mt-[105px] text-[13px] font-medium tracking-[0.08em]">International Recruitment</div>
                <h3 className="mt-2 text-[34px] font-light leading-none tracking-[-0.03em]">&amp; Payroll</h3>
                <p className="mt-6 text-[13px] leading-[1.75] text-white/70">Connecting top Pakistani talent with global opportunities. We provide comprehensive recruitment and manpower solutions to meet the needs of international partners.</p>
              </div>
              <div className="relative h-[338px] rounded-[10px] border border-[#00ff66] bg-white px-8 py-8">
                <Code2 className="absolute right-8 top-7 h-[82px] w-[82px] text-[#c9c9c9]" strokeWidth={1.4} />
                <div className="mt-[105px] text-[13px] font-medium text-black">Payroll, Contract &amp; Visa Management</div>
                <h3 className="mt-2 text-[34px] font-light leading-none tracking-[-0.03em] text-[#00d84f]">Services</h3>
                <p className="mt-6 text-[13px] leading-[1.75] text-[#686868]">Empowering Pakistan's workforce with world-class skills through global partnerships like Coursera. Unlock new career opportunities with tailored programs designed for modern professionals.</p>
              </div>
            </div>
          </section>

          <section className="relative mt-[70px] pb-[110px]">
            <h3 className="text-[48px] font-light leading-none tracking-[-0.03em] text-black">Why Choose Us</h3>
            <h2 className="mt-6 text-[64px] font-light uppercase leading-none tracking-[0.04em] text-[#0adf54]">Let The Numbers <span className="text-[#050889]">Speak!</span></h2>
            <p className="mt-5 text-[17px] leading-[1.4] text-black">With enough data, the numbers speak for themselves.</p>
            <div className="mt-8 grid max-w-[1020px] grid-cols-4 gap-[70px]">
              {[{icon:"☑",val:"1,000+",l1:"Successful",l2:"Placements",active:true},{icon:"▯",val:"12,000+",l1:"Specialized",l2:"Courses",active:false},{icon:"♟",val:"95%",l1:"Customer",l2:"Satisfaction",active:false},{icon:"◎",val:"5+",l1:"Countries",l2:"where we have clients",active:false}].map(s=>(
                <div key={s.val} className={s.active?"flex h-[170px] flex-col items-center justify-center rounded-[4px] bg-[#050783] text-white":"flex h-[170px] flex-col items-center justify-center rounded-[4px] border border-[#bdbdbd] bg-white text-black"}>
                  <div className={s.active?"mb-4 text-[36px] text-white":"mb-4 text-[36px] text-[#00ff66]"}>{s.icon}</div>
                  <div className="text-[42px] font-light leading-none">{s.val}</div>
                  <div className="mt-4 text-center text-[17px] leading-[1.05]"><div>{s.l1}</div><div>{s.l2}</div></div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ ORBIT SECTION — ALL 4 CARDS VISIBLE ═══ */}
          <section ref={sectionRef} className="orbit-section">
            <div className="orbit-sticky">
              
              {/* LEFT — rings (SVG) + planet + spinning dots */}
              <div ref={systemRef} className="orbit-system">
                <svg viewBox="0 0 1000 1000" style={{ width: "100%", height: "100%" }}>
                  {/* OUTER SOLID RING */}
                  <circle cx="500" cy="500" r="480" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1.2" />
                  {/* DASHED RING (FIGMA STYLE) */}
                  <circle cx="500" cy="500" r="410" fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth="1.1" strokeDasharray="6 10" />
                  {/* MID SOLID RING */}
                  <circle cx="500" cy="500" r="330" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
                  {/* INNER DOTTED RING */}
                  <circle cx="500" cy="500" r="260" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1" strokeDasharray="2 8" />
                </svg>
                
                {/* PLANET */}
                <div ref={planetRef} className="orbit-planet" />
                
                <div className="orbit-objects">
                  <span className="orbit-dot d1" />
                  <span className="orbit-dot d2" />
                  <span className="orbit-dot d3" />
                  <span className="orbit-dot d4" />
                  <span className="orbit-solid s1" />
                  <span className="orbit-solid s2" />
                  <span className="orbit-solid s3" />
                </div>
                
                <div className="orbit-objects-fast">
                  <span className="orbit-dot d5" />
                  <span className="orbit-dot d6" />
                </div>
              </div>

              {/* RIGHT — mint green crescent at 30% opacity, rotation -167.25° */}
              <div ref={crescentRef} className="orbit-crescent">
                <img 
                  src="/vector.png" 
                  alt="" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: 0.3
                  }}
                />
              </div>

              {/* FILMSTRIP — 4 cards */}
              <div ref={stripRef} className="orbit-strip">
                {CARDS.map((card) => (
                  <article key={card.title} className="orbit-card">
                    <span className="orbit-ball" />
                    <div>
                      <h3 style={{ color: card.color }}>{card.title}</h3>
                      <p>{BODY}</p>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* CLIENT LOGOS */}
          <section className="relative overflow-hidden bg-white pb-[120px]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black">Clients</div>
            <h2 className="mt-3 whitespace-nowrap text-[92px] font-light uppercase leading-none tracking-[0.04em] text-[#0adf54]">Transforming <span className="text-[#0a7a5f]">You</span></h2>
            <p className="mt-5 text-[15px] text-black">We work for a wide variety of clients in both the private and public sectors.</p>
            <div className="logo-shell mt-8">
              <div className="logo-track">
                {[...clientLogos,...clientLogos].map((logo,i)=>(
                  <div key={logo.name+"-"+i} className="logo-card"><img src={logo.src} alt={logo.name} /></div>
                ))}
              </div>
            </div>
          </section>

          {/* TEAM */}
          <section className="relative overflow-hidden bg-white pb-[110px] pt-[30px]">
            <div className="absolute -left-[190px] top-[5px] h-[520px] w-[520px] rounded-full border border-[#b4f7c9]" />
            <div className="absolute -left-[130px] top-[65px] h-[390px] w-[390px] rounded-full border border-[#b4f7c9]" />
            <div className="absolute -left-[70px] top-[125px] h-[260px] w-[260px] rounded-full border border-[#b4f7c9]" />
            <h2 className="text-[58px] font-light uppercase leading-none tracking-[0.04em]"><span className="text-[#0adf54]">Meet</span> <span className="text-[#0a7a5f]">Our</span> <span className="text-[#050889]">Team</span></h2>
            <p className="mt-5 text-[16px] text-black">Our business experts come from businesses of all shapes and sizes.</p>
            <button className="absolute left-[30px] top-[250px] h-[40px] rounded-[10px] bg-[#00ff66] px-10 text-[13px] font-medium text-black shadow-[0_10px_24px_rgba(0,255,102,.25)]">About Team</button>
            <div className="ml-[190px] mt-[60px] grid grid-cols-4 gap-8">
              {teamMembers.map(m=>(
                <div key={m.name} className="text-center">
                  <div className="h-[185px] overflow-hidden rounded-[6px] bg-[#eeeeee]"><img src={m.img} alt={m.name} className="h-full w-full object-cover" /></div>
                  <div className="mt-3 text-[10px] text-black">{m.role}</div>
                  <div className="mt-1 text-[15px] font-bold text-[#00b95a]">{m.name}</div>
                  <div className="mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#0077b5] text-white"><LinkedInSvg /></div>
                </div>
              ))}
            </div>
          </section>

          {/* TRUSTED MAP */}
          <section className="relative bg-white py-20 overflow-hidden">
            <h2 className="text-center text-[46px] font-light uppercase leading-none tracking-[0.04em]"><span className="text-[#0adf54]">Trusted By 14 Million</span> <span className="text-[#050889]">Professional</span></h2>
            <p className="mt-3 text-center text-[18px] text-black">Watch stories of success from around the world</p>
            <div className="map-stage">
              <img src="/world-map.png" alt="World map" className="map-img" />
              {[{city:"Lahore",cls:"pin-lhr"},{city:"Islamabad",cls:"pin-isl"},{city:"Karachi",cls:"pin-khi"},{city:"Faisalabad",cls:"pin-fsd"}].map(pin=>(
                <div key={pin.city} className={`map-pin ${pin.cls}`}>
                  <div className="map-pin-icon" />
                  <div><div className="map-pin-title">{pin.city}</div><div className="map-pin-link">Detail</div></div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="relative overflow-hidden bg-white pb-[120px]">
            <div className="mx-auto flex h-[28px] w-[120px] items-center justify-center rounded-full bg-[#00ff66] text-[10px] font-semibold text-black">Testimonials</div>
            <h2 className="mt-8 text-center text-[64px] font-light uppercase leading-none tracking-[0.04em]"><span className="text-[#0adf54]">What Our</span> <span className="text-[#0a7a5f]">Client</span> <span className="text-[#050889]">Say</span></h2>
            <div className="mx-auto mt-10 max-w-[520px] text-center">
              <img src="/testimonial-user.png" alt="Client" className="mx-auto h-[58px] w-[58px] rounded-full object-cover" />
              <div className="mt-3 text-[13px] font-bold text-[#050889]">Sara Mohamed</div>
              <div className="mt-1 text-[12px] text-[#ffc400]">★★★★★</div>
              <p className="mt-5 text-[12px] leading-[1.7] text-black">I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the real-time availability.</p>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="bg-white pb-[120px] text-center">
            <div className="mx-auto mb-[70px] h-[1px] max-w-[540px] bg-[#00ff66]/50" />
            <h2 className="text-[40px] font-light uppercase tracking-[0.04em]"><span className="text-[#0adf54]">Join The Future</span> <span className="text-[#050889]">Of Innovation</span></h2>
            <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-[1.6] text-black">Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too.</p>
            <div className="mx-auto mt-8 flex max-w-[540px] items-center gap-2">
              <input type="email" placeholder="Enter your email address" className="h-[52px] flex-1 rounded-[6px] border border-[#bfffd0] px-6 text-[12px] outline-none focus:border-[#00ff66]" />
              <button className="h-[52px] rounded-[6px] bg-[#00ff66] px-12 text-[13px] font-medium text-black transition hover:brightness-110">Sign Up</button>
            </div>
            <label className="mx-auto mt-5 flex max-w-[430px] items-center justify-center gap-2 text-[12px] text-black">
              <input type="checkbox" className="h-3 w-3" />
              Keep me updated on other news and exclusive offers
            </label>
          </section>

          {/* FOOTER */}
          <footer className="bg-white pb-[50px]">
            <div className="mx-auto grid max-w-[900px] grid-cols-[1.5fr_1fr_1fr_1.4fr] gap-16">
              <div>
                <div className="inline-flex rounded-[8px] bg-[rgb(7,119,48)] px-3 py-2"><img src="/parwaaz-logo.png" alt="Parwaaz" className="h-[34px] w-auto object-contain" /></div>
                <p className="mt-8 max-w-[260px] text-[14px] leading-[1.35] text-black">Fueling your business growth with workforce solutions, digital skills of the future, and creative design services.</p>
                <div className="mt-12 text-[13px] font-semibold text-black">Follow us</div>
                <div className="mt-4 flex items-center gap-3">
                  {[FacebookSvg,YoutubeSvg,XSvg].map((Icon,i)=>(
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff66] text-black transition hover:scale-110"><Icon /></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-[12px] text-black">
                <Link href="#" className="block text-[#00d84f] transition hover:text-[#00ff66]">About</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">People</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">Contact</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">Services</Link>
              </div>
              <div className="space-y-4 text-[12px] text-black">
                <Link href="#" className="block transition hover:text-[#00d84f]">Terms</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">Privacy Policy</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">Legal Notice</Link>
                <Link href="#" className="block transition hover:text-[#00d84f]">Accessibility</Link>
              </div>
              <div className="space-y-4 text-[12px] text-black">
                <div className="flex items-center gap-2"><MapPin className="h-3 w-3 text-[#00ff66]" />Lahore, Karachi, Islamabad</div>
                <div className="flex items-center gap-2"><Phone className="h-3 w-3 text-[#00ff66]" />+92 300 2855800</div>
                <div className="flex items-center gap-2"><Mail className="h-3 w-3 text-[#00ff66]" />contact@parwaaz.co</div>
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-[900px] text-right text-[11px] text-black">© 2026 Parwaaz.co. All rights reserved.</div>
          </footer>

        </div>
      </section>
    </main>
  );
}
