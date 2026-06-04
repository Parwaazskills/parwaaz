"use client";

import { useEffect, useState } from "react";
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
import PartnerLogosSection from "@/components/PartnerLogosSection";
import SearchModal from "@/components/SearchModal";

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
    useState<keyof typeof servicesData>("AI & Advanced Technology");

  const [serviceAnimKey, setServiceAnimKey] = useState(0);
  const [servicePage, setServicePage] = useState(0);

  useEffect(() => {
    document.body.classList.add("home-page-ready");

    return () => {
      document.body.classList.remove("home-page-ready");
    };
  }, []);

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
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
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
    <main className="home-page-shell bg-white overflow-x-hidden">
      <GsapTextAnimations />

      <SearchModal
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        [data-reveal="fade"] {
          transform: none;
        }

        [data-reveal="up"] {
          transform: translateY(40px);
        }

        [data-reveal="up-sm"] {
          transform: translateY(20px);
        }

        [data-reveal="left"] {
          transform: translateX(-40px);
        }

        [data-reveal="right"] {
          transform: translateX(40px);
        }

        [data-reveal="scale"] {
          transform: scale(0.92);
        }

        [data-reveal="zoom"] {
          transform: scale(0.96) translateY(20px);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: none;
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
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
          .text-split-token {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="hero-stack">
        <HeroSection
          heroBgIndex={heroBgIndex}
          setHeroBgIndex={setHeroBgIndex}
        />

        <div className="absolute top-0 left-0 right-0 z-50 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-3">
          <Navbar
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>

        <div style={{ display: "none" }}>
          <ChatBox />
        </div>
      </div>

      <PartnerLogosSection />

      <section className="relative z-10 bg-white pt-4 lg:pt-6 pb-12">
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
