// app/components/ScrollToTopIndicator.tsx

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollToTopIndicator() {
  const wrapperRef = useRef<HTMLButtonElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const line = lineRef.current;

    if (!wrapper || !line) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;

      if (scrollTop > 220) {
        gsap.to(wrapper, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(wrapper, {
          opacity: 0,
          x: 18,
          duration: 0.35,
          ease: "power3.out",
        });
      }

      gsap.to(line, {
        scaleY: Math.max(progress, 0.08),
        duration: 0.25,
        ease: "power2.out",
      });
    };

    gsap.set(wrapper, {
      opacity: 0,
      x: 18,
    });

    gsap.set(line, {
      scaleY: 0.08,
      transformOrigin: "top center",
    });

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={wrapperRef}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
  className="fixed right-[33px] top-1/2 z-[999] flex -translate-y-1/2 cursor-pointer flex-col items-center max-[768px]:hidden"
    >
      <span className="origin-center rotate-[-90deg] whitespace-nowrap text-[12px] font-medium text-black">
        Scroll To Top
      </span>

      <div className="mt-[56px] h-[112px] w-px overflow-hidden bg-black/10">
        <div ref={lineRef} className="h-full w-full bg-[#00fe4e]" />
      </div>
    </button>
  );
}