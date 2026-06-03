// app/components/ScrollToTopIndicator.tsx

"use client";

import { useEffect, useRef } from "react";

export default function ScrollToTopIndicator() {
  const wrapperRef = useRef<HTMLButtonElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const line = lineRef.current;

    if (!wrapper || !line) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      wrapper.style.display = "none";
      return;
    }

    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;

      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;
      const nextVisible = scrollTop > 220;

      if (nextVisible !== visible) {
        visible = nextVisible;
        wrapper.style.opacity = visible ? "1" : "0";
        wrapper.style.transform = visible
          ? "translate3d(0, -50%, 0)"
          : "translate3d(18px, -50%, 0)";
      }

      line.style.transform = `scaleY(${Math.max(progress, 0.08)})`;
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    wrapper.style.opacity = "0";
    wrapper.style.transform = "translate3d(18px, -50%, 0)";
    line.style.transform = "scaleY(0.08)";
    line.style.transformOrigin = "top center";

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        cancelAnimationFrame(frame);
      }
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
      className="fixed right-[33px] top-1/2 z-[999] flex cursor-pointer flex-col items-center transition-[opacity,transform] duration-300 ease-out max-[768px]:hidden"
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
