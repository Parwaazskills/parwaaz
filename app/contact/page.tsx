"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCards from "@/components/contact/ContactCards";
import ContactCTA from "@/components/contact/ContactCTA";
import SearchModal from "@/components/SearchModal";

export default function ContactPage() {
  // ============ NAVBAR STATE ============
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ============ SEARCH MODAL EFFECT ============
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

  return (
    <>
      {/* ============ SEARCH MODAL ============ */}
      <SearchModal
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <style jsx global>{`
        .contact-page-wrap {
          background: #f7fdf9;
        }

        .contact-page-main {
          background: transparent;
        }

        html.dark .contact-page-wrap {
          background: #05070b !important;
        }

        html.dark .contact-page-main {
          background: #05070b !important;
        }
      `}</style>

      {/* ============ PAGE CONTENT ============ */}
      <div className="contact-page-wrap">
        {/* Navbar wrapper — matches ContactHero gradient */}
        <div style={{ background: "#000572" }}>
          <div className="mx-auto w-full max-w-[1320px] px-4 pt-3 sm:px-6 lg:px-8">
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
          className="contact-page-main relative overflow-x-clip"
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
            className="relative py-16 md:py-24"
            style={{ zIndex: 1 }}
          >
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
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
