"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, Pause, X, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import { successStories } from "@/data/successStories";

// Format seconds → "M:SS"
const fmtTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export default function AlumniSection() {
  const [active, setActive] = useState(0);
  const [panelAnimKey, setPanelAnimKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const thumbVideoRef = useRef<HTMLVideoElement | null>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement | null>(null);
  const lightboxWrapRef = useRef<HTMLDivElement | null>(null);
  const controlsHideTimer = useRef<NodeJS.Timeout | null>(null);

  const current = successStories[active];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ────────────── THUMB HOVER PREVIEW ──────────────
  const handleThumbHover = () => {
    if (!thumbVideoRef.current || !current.video) return;
    thumbVideoRef.current.play().catch(() => {});
  };
  const handleThumbLeave = () => {
    if (!thumbVideoRef.current) return;
    thumbVideoRef.current.pause();
    thumbVideoRef.current.currentTime = 0;
  };

  // ────────────── STORY CLICK ──────────────
  const handleStoryClick = (index: number) => {
    setActive(index);
    setPanelAnimKey((k) => k + 1);
    setTimeout(() => {
      testimonialRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // ────────────── LIGHTBOX OPEN/CLOSE ──────────────
  const openLightbox = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!current.video) return;
    if (thumbVideoRef.current) {
      thumbVideoRef.current.pause();
      thumbVideoRef.current.currentTime = 0;
    }
    setProgress(0);
    setCurrentTime(0);
    setIsPlaying(false);
    setIsBuffering(true);
    setShowControls(true);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    const v = lightboxVideoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setLightboxOpen(false);
    setIsPlaying(false);
    setIsFullscreen(false);
  }, []);

  // ────────────── VIDEO CONTROLS ──────────────
  const togglePlay = useCallback(() => {
    const v = lightboxVideoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }, []);

  const toggleMute = useCallback(() => {
    const v = lightboxVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = lightboxWrapRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const seek = useCallback((deltaSeconds: number) => {
    const v = lightboxVideoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + deltaSeconds));
  }, []);

  const seekTo = (clientX: number, rect: DOMRect) => {
    const v = lightboxVideoRef.current;
    if (!v || !v.duration) return;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  };

  // ────────────── CONTROLS AUTO-HIDE ──────────────
  const showControlsThenHide = useCallback(() => {
    setShowControls(true);
    if (controlsHideTimer.current) clearTimeout(controlsHideTimer.current);
    controlsHideTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  }, [isPlaying]);

  // ────────────── KEYBOARD ──────────────
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape": closeLightbox(); break;
        case " ":
        case "k":
        case "K":
          e.preventDefault(); togglePlay(); break;
        case "m":
        case "M": toggleMute(); break;
        case "f":
        case "F": toggleFullscreen(); break;
        case "ArrowRight": seek(5); break;
        case "ArrowLeft": seek(-5); break;
      }
    };
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);

    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFsChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.body.style.overflow = "";
      if (controlsHideTimer.current) clearTimeout(controlsHideTimer.current);
    };
  }, [lightboxOpen, closeLightbox, togglePlay, toggleMute, toggleFullscreen, seek]);

  return (
    <>
      <style jsx>{`
        .alumni-section { position: relative; }

        /* ============ MAP WRAPPER — FULL WIDTH ============ */
   .alumni-map-wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 4px;
}
@media (min-width: 768px) {
  .alumni-map-wrap { padding: 0 24px; }
}
@media (min-width: 1024px) {
  .alumni-map-wrap { padding: 0 32px; }
}
@media (min-width: 1440px) {
  .alumni-map-wrap { padding: 0 48px; }
}
        .alumni-map-stage { position: relative; width: 100%; line-height: 0; }

        /* World map fills the wrapper — no max-width clipping */
      .world-map-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1000 / 500;
}
@media (max-width: 768px) {
  .world-map-img-wrap {
    aspect-ratio: 16 / 11;
  }
  .world-map-img-wrap :global(img) {
    object-fit: cover !important;
    transform: scale(1.15);
    transform-origin: center 55%;
  }
}
        .world-map-img-wrap :global(img) {
          opacity: 1;
          filter: none;
          pointer-events: none;
          user-select: none;
          object-fit: contain;
        }

        /* ============ PIN ============ */
        .alumni-pin {
          position: absolute; z-index: 5;
          padding: 0; background: transparent; border: 0; cursor: pointer;
          transform: translate(-50%, -100%);
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          line-height: 1;
        }
        .alumni-pin:hover { transform: translate(-50%, -100%) translateY(-4px) scale(1.08); }
        .alumni-pin-active { transform: translate(-50%, -100%) translateY(-6px) scale(1.15); }
        .alumni-pin-active:hover { transform: translate(-50%, -100%) translateY(-8px) scale(1.18); }

        .alumni-pin-icon {
          width: 32px; height: 42px; display: block;
          filter: drop-shadow(0 4px 8px rgba(0, 5, 114, 0.35));
          transition: filter 0.3s ease;
        }
        .alumni-pin-active .alumni-pin-icon {
          filter: drop-shadow(0 6px 12px rgba(0, 5, 114, 0.5));
        }

        .alumni-pin-label {
          margin-top: 3px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 13px; font-weight: 700;
          color: #000572; letter-spacing: 0.02em;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .alumni-pin:hover .alumni-pin-label { color: #00b347; }
        .alumni-pin-active .alumni-pin-label { color: #000572; }

        @media (max-width: 1024px) {
          .alumni-pin-icon { width: 28px; height: 36px; }
          .alumni-pin-label { font-size: 11px; }
        }
        @media (max-width: 768px) {
          .alumni-pin-icon { width: 22px; height: 28px; }
          .alumni-pin-label { font-size: 9.5px; font-weight: 800; }
        }
        @media (max-width: 480px) {
          .alumni-pin-icon { width: 18px; height: 24px; }
          .alumni-pin-label { font-size: 8.5px; }
        }

        /* ============ FEATURED BADGE ============ */
        .featured-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          color: #000;
          background: linear-gradient(135deg, #00FE4E 0%, #0CA53B 100%);
          box-shadow: 0 2px 8px rgba(0, 254, 78, 0.25);
        }

        /* ============ VIDEO THUMB ============ */
        .video-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background: #050505;
          cursor: pointer;
          display: block;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease;
        }
        .video-thumb.disabled { cursor: default; }
        .video-thumb:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(0, 254, 78, 0.18),
                      0 8px 18px rgba(0, 5, 114, 0.35);
        }
        .video-thumb video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 25%;
          pointer-events: none;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.4s ease;
        }
        .video-thumb:hover video {
          transform: scale(1.05);
          filter: brightness(1.05);
        }
        .video-thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(0, 5, 114, 0.15) 0%,
            rgba(0, 5, 114, 0.45) 100%);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.35s ease;
          pointer-events: none;
        }
        .video-thumb:hover .video-thumb-overlay {
          background: linear-gradient(180deg,
            rgba(0, 5, 114, 0.05) 0%,
            rgba(0, 5, 114, 0.25) 100%);
        }
        .video-thumb-duration {
          position: absolute;
          bottom: 12px; right: 12px;
          padding: 3px 8px;
          font-size: 11px; font-weight: 700;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 4px;
          backdrop-filter: blur(4px);
          letter-spacing: 0.02em;
          pointer-events: none;
        }
        .play-btn {
          width: 68px; height: 68px;
          border-radius: 50%;
          background: #00FE4E;
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            0 8px 24px rgba(0, 254, 78, 0.45),
            0 0 0 6px rgba(255, 255, 255, 0.12);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s ease;
          position: relative;
          pointer-events: none;
        }
        .play-btn::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.25);
          opacity: 0;
          animation: pulseRing 2s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .video-thumb:hover .play-btn {
          transform: scale(1.12);
          box-shadow:
            0 12px 32px rgba(0, 254, 78, 0.65),
            0 0 0 10px rgba(255, 255, 255, 0.18);
        }
        .video-placeholder {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #000572, #0a0d8a);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px; letter-spacing: 0.15em; font-weight: 500;
        }

        /* ============ LIGHTBOX ============ */
        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lightboxScaleIn {
          from { opacity: 0; transform: scale(0.88) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .lightbox-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0, 3, 18, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: lightboxFadeIn 0.3s ease-out;
        }
        .lightbox-inner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          max-height: 88vh;
          animation: lightboxScaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .lightbox-video-wrap {
          position: relative;
          width: 100%;
          background: #000;
          border-radius: 14px;
          overflow: hidden;
          box-shadow:
            0 40px 80px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(0, 254, 78, 0.15);
          aspect-ratio: 16 / 9;
          max-height: 88vh;
        }
        .lightbox-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #000;
        }
        .lightbox-close {
          position: absolute;
          top: -52px; right: 0;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease,
                      transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 0;
          z-index: 10;
        }
        .lightbox-close:hover {
          background: rgba(0, 254, 78, 0.18);
          border-color: #00FE4E;
          transform: scale(1.08) rotate(90deg);
        }
        @media (max-width: 768px) {
          .lightbox-close { top: -48px; width: 38px; height: 38px; }
        }

        .lightbox-center-play {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 84px; height: 84px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.95);
          color: #000;
          border: 0;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 14px 40px rgba(0, 254, 78, 0.5),
                      0 0 0 8px rgba(255, 255, 255, 0.12);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 3;
          padding: 0;
        }
        .lightbox-center-play:hover { transform: translate(-50%, -50%) scale(1.08); }
        @media (max-width: 600px) { .lightbox-center-play { width: 64px; height: 64px; } }

        .buffering-spinner {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 56px; height: 56px;
          border: 4px solid rgba(255, 255, 255, 0.15);
          border-top-color: #00FE4E;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
          z-index: 3;
          pointer-events: none;
        }
        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

        .controls-bar {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 28px 18px 14px;
          background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0) 100%);
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 4;
        }
        .controls-bar.hidden {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }
        .progress-track {
          position: relative;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          cursor: pointer;
          transition: height 0.2s ease;
        }
        .progress-track:hover { height: 8px; }
        .progress-fill {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          background: linear-gradient(90deg, #00FE4E 0%, #0CA53B 100%);
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(0, 254, 78, 0.6);
          pointer-events: none;
        }
        .progress-thumb {
          position: absolute;
          top: 50%;
          width: 14px; height: 14px;
          background: #00FE4E;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          box-shadow: 0 0 12px rgba(0, 254, 78, 0.8);
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .progress-track:hover .progress-thumb { transform: translate(-50%, -50%) scale(1); }

        .controls-row {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #fff;
        }
        .ctrl-btn {
          background: transparent;
          border: 0;
          color: #fff;
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .ctrl-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: scale(1.08);
        }
        .ctrl-time {
          font-family: var(--font-poppins), sans-serif;
          font-size: 12px;
          font-variant-numeric: tabular-nums;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.02em;
        }
        .ctrl-spacer { flex: 1; }

        @media (max-width: 600px) {
          .controls-bar { padding: 22px 12px 10px; }
          .ctrl-btn { width: 32px; height: 32px; }
          .ctrl-time { font-size: 11px; }
        }

        @keyframes alumniPanelIn {
          0% { opacity: 0; transform: translateY(24px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .alumni-panel {
          animation: alumniPanelIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
        }
        @media (max-width: 768px) {
          .alumni-panel {
            padding: 24px !important;
            gap: 20px !important;
          }
          .alumni-panel h3 { font-size: 16px !important; line-height: 1.5 !important; }
          .play-btn { width: 58px; height: 58px; }
        }
        @media (max-width: 480px) {
          .alumni-panel { padding: 18px !important; }
          .alumni-panel h3 { font-size: 15px !important; }
          .play-btn { width: 50px; height: 50px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .alumni-pin, .video-thumb, .video-thumb video,
          .play-btn, .lightbox-close, .lightbox-center-play { transition: none; }
          .alumni-panel, .lightbox-backdrop, .lightbox-inner,
          .play-btn::before { animation: none; }
        }
      `}</style>

      <section className="alumni-section pt-0 md:pt-24 pb-16 md:pb-20 bg-white">
        {/* HEADER */}
        <div className="text-center mb-6 px-4">
          <p className="text-xs tracking-widest text-gray-500">SUCCESS STORIES</p>
          <h2
            className="mt-3 text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: "1",
              fontFamily: "Inter, sans-serif",
              backgroundImage: "linear-gradient(90deg, #00FE4E 0%, #000572 100%)",
              WebkitBackgroundClip: "text",
              margin: 0,
            }}
          >
            PARTNERS ACROSS GLOBAL MARKETS
          </h2>
          <p className="gsap-words text-gray-500 mt-2">
            Delivering integrated solutions across international markets.
          </p>
        </div>

        {/* MAP — FULL WIDTH */}
        <div className="alumni-map-wrap">
          <div className="alumni-map-stage">
            <div className="world-map-img-wrap">
              <Image
                src="/world-map.png"
                alt="World map"
                fill
                priority
                sizes="100vw"
              />
            </div>

            {successStories.map((item, i) => {
  // Skip duplicate pins for the same city — show pin only at the first occurrence
  const firstIndex = successStories.findIndex((s) => s.city === item.city);
  if (firstIndex !== i) return null;

  // Pin is active if active story belongs to this city
  const isActive = successStories[active]?.city === item.city;
  return (
    <button
      key={item.city}
      type="button"
      onClick={() => handleStoryClick(i)}
      style={{
        top: isMobile && item.yMobile ? item.yMobile : item.y,
        left: isMobile && item.xMobile ? item.xMobile : item.x,
      }}
      className={`alumni-pin ${isActive ? "alumni-pin-active" : ""}`}
      aria-label={`${item.city} market`}
      aria-pressed={isActive}
    >
                  <svg
                    className="alumni-pin-icon"
                    viewBox="0 0 38 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 0C8.507 0 0 8.507 0 19c0 13.5 19 31 19 31s19-17.5 19-31C38 8.507 29.493 0 19 0z"
                      fill="#000572"
                    />
                    <circle cx="19" cy="19" r="6.5" fill="#ffffff" />
                  </svg>
                  <span className="alumni-pin-label">{item.city}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TESTIMONIAL PANEL */}
       <div
  ref={testimonialRef}
  className="max-w-[1100px] mx-auto px-4 relative z-10"
  style={{ marginTop: isMobile ? "-140px" : "56px" }}
>
          <div
            key={`alumni-panel-${panelAnimKey}`}
            className="alumni-panel rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center"
            style={{ background: "#000572" }}
          >
            <div className="w-full md:w-1/2">
              <div
                className={`video-thumb ${!current.video ? "disabled" : ""}`}
                onClick={current.video ? openLightbox : undefined}
                onMouseEnter={handleThumbHover}
                onMouseLeave={handleThumbLeave}
                role="button"
                tabIndex={current.video ? 0 : -1}
                onKeyDown={(e) => {
                  if (!current.video) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox();
                  }
                }}
                aria-label={current.video ? `Play ${current.city} video` : `No video available`}
              >
                {current.video ? (
                  <>
                    <video
                      key={current.video}
                      ref={thumbVideoRef}
                      src={current.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={current.videoObjectPosition ? { objectPosition: current.videoObjectPosition } : undefined}
                      onLoadedMetadata={(e) => {
                        const d = (e.target as HTMLVideoElement).duration;
                        if (isFinite(d)) setDuration(d);
                      }}
                    />
                    <div className="video-thumb-overlay">
                      <div className="play-btn">
                        <Play className="text-black ml-1" size={28} fill="black" />
                      </div>
                    </div>
                    {duration > 0 && (
                      <span className="video-thumb-duration">{fmtTime(duration)}</span>
                    )}
                  </>
                ) : (
                  <div className="video-placeholder">{current.city}</div>
                )}
              </div>
            </div>

            <div className="text-white w-full md:w-1/2">
              <span className="featured-badge">FEATURED STORY</span>

              <p className="text-[#00FE4E] mt-4 text-xs md:text-sm tracking-widest font-semibold">
                {current.category}
              </p>
<h3
  className="mt-3 leading-relaxed text-white/90"
  style={{ fontSize: "16px", fontWeight: 300 }}
>
  &ldquo;{current.quote}&rdquo;
</h3>

<div className="mt-5">
  <p className="font-semibold text-white" style={{ fontSize: "16px" }}>
    {current.personName}
  </p>
  <p className="text-xs md:text-sm text-white/70 mt-0.5">
    {current.personRole}
  </p>
</div>

              <div className="flex gap-2 mt-5">
                {successStories.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleStoryClick(i)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      i === active ? "w-6 bg-[#00FE4E]" : "w-3 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to ${successStories[i].city}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ LIGHTBOX ════════════════ */}
      {lightboxOpen && current.video && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.city} success story video`}
        >
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close video (Esc)"
            >
              <X size={20} />
            </button>

            <div
              ref={lightboxWrapRef}
              className="lightbox-video-wrap"
              onMouseMove={showControlsThenHide}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={lightboxVideoRef}
                src={current.video}
                className="lightbox-video"
                playsInline
                autoPlay
                onClick={togglePlay}
                onPlay={() => { setIsPlaying(true); setIsBuffering(false); showControlsThenHide(); }}
                onPause={() => { setIsPlaying(false); setShowControls(true); }}
                onWaiting={() => setIsBuffering(true)}
                onPlaying={() => setIsBuffering(false)}
                onCanPlay={() => setIsBuffering(false)}
                onTimeUpdate={(e) => {
                  const v = e.target as HTMLVideoElement;
                  setCurrentTime(v.currentTime);
                  if (v.duration) setProgress(v.currentTime / v.duration);
                }}
                onLoadedMetadata={(e) => {
                  const d = (e.target as HTMLVideoElement).duration;
                  if (isFinite(d)) setDuration(d);
                }}
                onEnded={() => { setIsPlaying(false); setShowControls(true); }}
              />

              {isBuffering && <div className="buffering-spinner" aria-hidden="true" />}

              {!isPlaying && !isBuffering && (
                <button
                  type="button"
                  className="lightbox-center-play"
                  onClick={togglePlay}
                  aria-label="Play"
                >
                  <Play size={34} fill="#000" />
                </button>
              )}

              <div className={`controls-bar ${!showControls ? "hidden" : ""}`}>
                <div
                  className="progress-track"
                  onClick={(e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    seekTo(e.clientX, rect);
                  }}
                >
                  <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
                  <div className="progress-thumb" style={{ left: `${progress * 100}%` }} />
                </div>

                <div className="controls-row">
                  <button
                    type="button"
                    className="ctrl-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause (Space)" : "Play (Space)"}
                  >
                    {isPlaying ? <Pause size={18} fill="#fff" /> : <Play size={18} fill="#fff" />}
                  </button>

                  <button
                    type="button"
                    className="ctrl-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute (M)" : "Mute (M)"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span className="ctrl-time">
                    {fmtTime(currentTime)} / {fmtTime(duration)}
                  </span>

                  <span className="ctrl-spacer" />

                  <button
                    type="button"
                    className="ctrl-btn"
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
                  >
                    {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}