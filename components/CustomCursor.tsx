"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const cx = useRef(0);
  const cy = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

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

        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      };

      const loop = () => {
        rx.current += (cx.current - rx.current) * 0.18;
        ry.current += (cy.current - ry.current) * 0.18;

        ring.style.transform = `translate3d(${rx.current}px, ${ry.current}px, 0) translate(-50%, -50%)`;

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
      <div ref={ringRef} className="pw-ring" />
      <div ref={dotRef} className="pw-dot" />
    </>
  );
}