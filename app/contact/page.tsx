"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCards from "@/components/contact/ContactCards";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  // ============ NAVBAR STATE ============
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // ============ CURSOR REFS ============
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const cx = useRef(0);
  const cy = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  // ============ CURSOR EFFECT ============
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

  return (
    <>
      {/* ============ CURSOR ELEMENTS ============ */}
      <div ref={ringRef} className="pw-ring" />
      <div ref={dotRef} className="pw-dot" />

      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, input, textarea, select, label { cursor: none; }
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

        /* CONTACT PAGE ONLY — force green tint on footer */
        .contact-page-wrap footer,
        .contact-page-wrap footer > *:first-child {
          background: #f7fdf9 !important;
        }
        .contact-page-wrap footer .bg-white {
          background: #f7fdf9 !important;
        }
      `}</style>

      {/* ============ PAGE CONTENT ============ */}
      <div className="contact-page-wrap" style={{ background: "#f7fdf9" }}>

        {/* Navbar wrapper — matches ContactHero gradient */}
        <div style={{ background: "#000572" }}>
  <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 pt-3">
    <Navbar
      mobileNavOpen={mobileNavOpen}
      setMobileNavOpen={setMobileNavOpen}
      mobileServicesOpen={mobileServicesOpen}
      setMobileServicesOpen={setMobileServicesOpen}
      setSearchOpen={setSearchOpen}
      activeLink="Contact"
    />
  </div>
  <ContactHero />
</div>

        {/* MAIN — transparent so wrapper's green shows through */}
        <main
          className="overflow-x-clip relative"
          style={{ background: "transparent" }}
        >
          {/* DECORATIVE VECTOR */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            <img
              src="/vector.svg"
              alt=""
              style={{
                position: "absolute",
                left: "-50px",
                rotate: "180deg",
                top: "-100px",
                width: "780px",
                maxWidth: "55vw",
                height: "auto",
                opacity: 0.18,
                filter: "drop-shadow(0 8px 32px rgba(0, 254, 78, 0.2))",
              }}
            />
          </div>

          {/* CONTACT + MAP SECTION */}
          <section
            className="py-16 md:py-24 relative"
            style={{ background: "transparent", zIndex: 1 }}
          >
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <ContactForm />
                <ContactMap />
              </div>
            </div>
          </section>

          <ContactCards />
          <ContactCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}