"use client";

import { useEffect, useRef, useState } from "react";
import GsapTextAnimations from "@/components/GsapTextAnimations";
import ProjectOrbitSection from "@/components/ProjectOrbitSection";
import ContactCTASection from "@/components/ContactCTASection";
import TeamSection from "@/components/TeamSection";
import AlumniSection from "@/components/AlumniSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChatBox from "@/components/ChatBox";
import SearchModal from "@/components/SearchModal";
import WefCard from "@/components/WefCard";
import ParwaazAboutCard from "@/components/ParwaazAboutCard";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { heroSlides } from "@/data/heroSlides";
import { servicesData } from "@/data/services";

export default function Page() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroServicesOpen, setHeroServicesOpen] = useState(false);
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const [activeServiceTab, setActiveServiceTab] =
    useState<keyof typeof servicesData>("Training");
  const [serviceAnimKey, setServiceAnimKey] = useState(0);
  const [servicePage, setServicePage] = useState(0);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const cx = useRef(0);
  const cy = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    setServicePage(0);
  }, [activeServiceTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(pointer: fine)");

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
          ring.style.opacity = "1";
          dot.style.opacity = "1";
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
        if (
          target.closest &&
          target.closest("a,button,input,textarea,select,label,[role='button']")
        ) {
          document.body.classList.add("pw-ca");
        }
      };
      const handleLeave = (e: Event) => {
        const target = e.target as HTMLElement;
        if (
          target.closest &&
          target.closest("a,button,input,textarea,select,label,[role='button']")
        ) {
          document.body.classList.remove("pw-ca");
        }
      };

      ring.style.opacity = "0";
      dot.style.opacity = "0";
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
        ring.style.opacity = "0";
        dot.style.opacity = "0";
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
    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
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
    if (typeof window === "undefined") return;
    if (typeof IntersectionObserver === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => {
          el.classList.add("is-visible");
        });
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const isCycleMode = el.dataset.revealMode === "cycle";
          if (entry.isIntersecting) {
            const delay = el.dataset.revealDelay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("is-visible");
            if (!isCycleMode) {
              observer.unobserve(el);
            }
          } else if (isCycleMode) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    targets.forEach((el) => observer.observe(el));
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => {
          if (!el.dataset.revealObserved) {
            el.dataset.revealObserved = "1";
            observer.observe(el);
          }
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">
      <GsapTextAnimations />
      <div ref={ringRef} className="pw-ring" />
      <div ref={dotRef} className="pw-dot" />

      <SearchModal
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, input, textarea, select, label { cursor: none; }
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        [data-reveal="fade"] { transform: none; }
        [data-reveal="up"] { transform: translateY(40px); }
        [data-reveal="up-sm"] { transform: translateY(20px); }
        [data-reveal="left"] { transform: translateX(-40px); }
        [data-reveal="right"] { transform: translateX(40px); }
        [data-reveal="scale"] { transform: scale(0.92); }
        [data-reveal="zoom"] { transform: scale(0.96) translateY(20px); }
        [data-reveal].is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        .text-split {
          display: inline-block;
          overflow: hidden;
          line-height: 1.05;
          padding-bottom: 0.05em;
        }
        .text-split-token {
          display: inline-block;
          opacity: 0;
          transform: translateY(110%);
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .text-split-token { opacity: 1 !important; transform: none !important; }
        }

        .pw-ring, .pw-dot {
          position: fixed;
          left: 0;
          top: 0;
          pointer-events: none;
          z-index: 2147483647;
          will-change: transform;
          transition: opacity .25s ease, width .28s, height .28s, background .28s, border-color .28s;
        }
        .pw-ring {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,254,78,.92);
          background: rgba(0,254,78,.04);
          box-shadow: 0 0 28px rgba(0,254,78,.38), inset 0 0 18px rgba(0,254,78,.12);
        }
        .pw-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 18px rgba(0,254,78,.95), 0 0 42px rgba(0,254,78,.38);
        }
        body.pw-ca .pw-ring {
          width: 82px;
          height: 82px;
          border-color: rgba(0,254,78,1);
          background: rgba(0,254,78,.18);
        }
        body.pw-ca .pw-dot {
          width: 5px;
          height: 5px;
          background: #fff;
        }
        @media (pointer: coarse) {
          .pw-ring, .pw-dot { display: none; }
        }
      `}</style>

      <div className="hero-stack">
        <HeroSection heroBgIndex={heroBgIndex} setHeroBgIndex={setHeroBgIndex} />

        <div className="absolute top-0 left-0 right-0 z-50 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-3">
          <Navbar
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>

        <ChatBox />
      </div>

      <section className="relative z-10 bg-white pt-10 lg:pt-14 pb-12">
        <WefCard />
        <ParwaazAboutCard />

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ServicesSection
            activeServiceTab={activeServiceTab}
            setActiveServiceTab={setActiveServiceTab}
            serviceAnimKey={serviceAnimKey}
            setServiceAnimKey={setServiceAnimKey}
            servicePage={servicePage}
            setServicePage={setServicePage}
          />
          <StatsSection />
        </div>

        <ProjectOrbitSection />
        <ContactCTASection />
        <ClientsSection />
        <TeamSection />
        <AlumniSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </section>
    </main>
  );
}