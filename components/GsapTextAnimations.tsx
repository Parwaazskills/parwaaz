"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapTextAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Mark body as gsap-ready so CSS hides .gsap-char/.gsap-word for the JS to reveal them
    document.body.classList.add("gsap-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const triggers: ScrollTrigger[] = [];

    // MOBILE-ONLY: exclude orbit + blue CTA from text GSAP on mobile (≤768px).
    // Desktop keeps the original behavior (no IGNORE filter) — strict per user instruction.
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const IGNORE = isMobile
      ? ":not(.po-title):not(.po-slide-title):not(.po-slide-text):not(.contact-cta-section *):not(.contact-cta-wrap *)"
      : "";

    // MOBILE-ONLY: force-reveal any text inside excluded elements (orbit titles, CTA).
    // Without this, if those elements have gsap-heading/gsap-words classes from JSX,
    // their chars/words still get split + hidden by .gsap-ready CSS, but never animated
    // back to visible because IGNORE blocked the animation. This unhides them immediately.
    const forceRevealExcluded = () => {
      if (!isMobile) return;
      const excludedSelectors = [
        ".contact-cta-section",
        ".contact-cta-wrap",
      ];
      excludedSelectors.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((parent) => {
          // Reveal the parent itself
          parent.style.opacity = "1";
          parent.style.transform = "none";
          parent.style.filter = "none";
          parent.style.clipPath = "none";
          // Reveal any chars/words already inside (in case JSX has gsap-heading/gsap-words)
          parent.querySelectorAll<HTMLElement>(".gsap-char, .gsap-word").forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.filter = "none";
          });
        });
      });
    };

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>(
          ".gsap-heading, .gsap-words, .gsap-clip, .gsap-fade-up, .gsap-hero-title, .gsap-hero-subtitle, .gsap-hero-text, .gsap-hero-cta"
        )
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "none";
          el.style.clipPath = "none";
        });
      document.querySelectorAll<HTMLElement>(".gsap-char, .gsap-word").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
    };

    const splitToChars = (el: HTMLElement) => {
      if (el.dataset.gsapSplit === "chars") return;
      const original = el.dataset.gsapOriginal ?? el.textContent ?? "";
      el.dataset.gsapOriginal = original;
      el.textContent = "";
      const frag = document.createDocumentFragment();
      Array.from(original).forEach((ch) => {
        if (ch === " ") {
          frag.appendChild(document.createTextNode(" "));
          return;
        }
        const span = document.createElement("span");
        span.className = "gsap-char";
        span.textContent = ch;
        frag.appendChild(span);
      });
      el.appendChild(frag);
      el.dataset.gsapSplit = "chars";
    };

    const splitToWords = (el: HTMLElement) => {
      if (el.dataset.gsapSplit === "words") return;
      const original = el.dataset.gsapOriginal ?? el.textContent ?? "";
      el.dataset.gsapOriginal = original;
      el.textContent = "";
      const frag = document.createDocumentFragment();
      original.split(/(\s+)/).forEach((word) => {
        if (/^\s+$/.test(word)) {
          frag.appendChild(document.createTextNode(word));
          return;
        }
        if (!word) return;
        const span = document.createElement("span");
        span.className = "gsap-word";
        span.textContent = word;
        frag.appendChild(span);
      });
      el.appendChild(frag);
      el.dataset.gsapSplit = "words";
    };

    // MOBILE-ONLY: simpler safeRefresh that always refreshes (no scroll/orbit guard).
    // Desktop keeps the original guarded behavior.
    const safeRefresh = isMobile
      ? () => {
          const orbit = document.querySelector(".po-section");
          if (!orbit) return;
          const rect = orbit.getBoundingClientRect();
          const insideOrbit = rect.top <= 10 && rect.bottom >= window.innerHeight * 0.5;
          if (!insideOrbit && window.scrollY < 80) {
            ScrollTrigger.refresh();
          }
        }
      : () => {
          const orbit = document.querySelector(".po-section");
          let isInsidePinnedOrbit = false;
          if (orbit) {
            const rect = orbit.getBoundingClientRect();
            isInsidePinnedOrbit = rect.top <= 10 && rect.bottom > window.innerHeight;
          }
          if (!isInsidePinnedOrbit && window.scrollY < 80) {
            ScrollTrigger.refresh();
          }
        };

    if (reduced) {
      revealAll();
      return;
    }

    let refreshTimer: ReturnType<typeof setTimeout> | null = null;
    let safetyTimer: ReturnType<typeof setTimeout> | null = null;
    let storedCtx: gsap.Context | null = null;

    const rafId = requestAnimationFrame(() => {
      try {
        storedCtx = gsap.context(() => {
          // .gsap-heading: char split, rotateX + blur
          document.querySelectorAll<HTMLElement>(`.gsap-heading${IGNORE}`).forEach((el) => {
            if (el.dataset.gsapBound === "1") return;
            el.dataset.gsapBound = "1";
            splitToChars(el);
            const chars = el.querySelectorAll<HTMLElement>(".gsap-char");
            if (!chars.length) return;
            gsap.set(el, { perspective: 800 });
            gsap.set(chars, {
              opacity: 0,
              y: 60,
              rotateX: -45,
              filter: "blur(8px)",
              transformOrigin: "50% 100%",
            });
            const tween = gsap.to(chars, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.025,
              paused: true,
            });
            triggers.push(
              ScrollTrigger.create({
                trigger: el,
                start: "top 95%",
                once: true,
                onEnter: () => tween.play(),
              })
            );
          });

          // .gsap-words: word fade-up
          document.querySelectorAll<HTMLElement>(`.gsap-words${IGNORE}`).forEach((el) => {
            if (el.dataset.gsapBound === "1") return;
            el.dataset.gsapBound = "1";
            splitToWords(el);
            const words = el.querySelectorAll<HTMLElement>(".gsap-word");
            if (!words.length) return;
            gsap.set(words, { opacity: 0, y: 24 });
            const tween = gsap.to(words, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.035,
              paused: true,
            });
            triggers.push(
              ScrollTrigger.create({
                trigger: el,
                start: "top 95%",
                once: true,
                onEnter: () => tween.play(),
              })
            );
          });

          // .gsap-clip: clip-path reveal
          document.querySelectorAll<HTMLElement>(`.gsap-clip${IGNORE}`).forEach((el) => {
            if (el.dataset.gsapBound === "1") return;
            el.dataset.gsapBound = "1";
            gsap.set(el, { clipPath: "inset(100% 0 0 0)", y: 80 });
            const tween = gsap.to(el, {
              clipPath: "inset(0% 0 0 0)",
              y: 0,
              duration: 1.1,
              ease: "expo.out",
              paused: true,
            });
            triggers.push(
              ScrollTrigger.create({
                trigger: el,
                start: "top 95%",
                once: true,
                onEnter: () => tween.play(),
              })
            );
          });

          // .gsap-fade-up
          document.querySelectorAll<HTMLElement>(`.gsap-fade-up${IGNORE}`).forEach((el) => {
            if (el.dataset.gsapBound === "1") return;
            el.dataset.gsapBound = "1";
            gsap.set(el, { opacity: 0, y: 30 });
            const tween = gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              paused: true,
            });
            triggers.push(
              ScrollTrigger.create({
                trigger: el,
                start: "top 95%",
                once: true,
                onEnter: () => tween.play(),
              })
            );
          });

          // Hero sequence: fires immediately, no scroll trigger
          const heroItems = [
            { sel: ".gsap-hero-title", delay: 0.1, type: "chars" as const },
            { sel: ".gsap-hero-subtitle", delay: 0.3, type: "words" as const },
            { sel: ".gsap-hero-text", delay: 0.45, type: "words" as const },
            { sel: ".gsap-hero-cta", delay: 0.6, type: "fade" as const },
          ];

          heroItems.forEach(({ sel, delay, type }) => {
            document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
              if (el.dataset.gsapBound === "1") return;
              el.dataset.gsapBound = "1";
              if (type === "chars") {
                splitToChars(el);
                const chars = el.querySelectorAll<HTMLElement>(".gsap-char");
                if (!chars.length) return;
                gsap.set(chars, {
                  opacity: 0,
                  y: 60,
                  rotateX: -45,
                  filter: "blur(8px)",
                });
                gsap.to(chars, {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  duration: 0.9,
                  ease: "power4.out",
                  stagger: 0.025,
                  delay,
                });
              }
              if (type === "words") {
                splitToWords(el);
                const words = el.querySelectorAll<HTMLElement>(".gsap-word");
                if (!words.length) return;
                gsap.set(words, { opacity: 0, y: 24 });
                gsap.to(words, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: "power3.out",
                  stagger: 0.035,
                  delay,
                });
              }
              if (type === "fade") {
                gsap.set(el, { opacity: 0, y: 20 });
                gsap.to(el, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: "power3.out",
                  delay,
                });
              }
            });
          });

          refreshTimer = setTimeout(safeRefresh, 300);
          if (document.fonts?.ready) {
            document.fonts.ready.then(() => {
              if (window.scrollY < 80) safeRefresh();
            });
          }
        });

        // MOBILE: force-reveal excluded elements right after GSAP context runs
        forceRevealExcluded();
        // And again after 500ms to catch orbit slides that may render after mount
        setTimeout(forceRevealExcluded, 500);
        setTimeout(forceRevealExcluded, 1500);

        // Safety net per spec: anything still invisible after 2s gets force-revealed
        safetyTimer = setTimeout(() => {
          document.querySelectorAll<HTMLElement>(".gsap-char, .gsap-word").forEach((el) => {
            (el as HTMLElement).style.opacity = "1";
          });
        }, 2000);
      } catch (err) {
        console.warn("[GsapTextAnimations] failed, revealing all:", err);
        revealAll();
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (refreshTimer) clearTimeout(refreshTimer);
      if (safetyTimer) clearTimeout(safetyTimer);
      triggers.forEach((t) => t.kill());
      if (storedCtx) storedCtx.revert();
      document.body.classList.remove("gsap-ready");
    };
  }, []);

  return null;
}