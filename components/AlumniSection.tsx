"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { successStories } from "@/data/successStories";

const fmtTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const DEFAULT_STORY_META: Record<
  string,
  {
    name: string;
    role: string;
  }
> = {
  KSA: {
    name: "Muhammad Siddiqui",
    role: "Technical Trainer — Kingdom of Saudi Arabia",
  },
  UAE: {
    name: "Success Story",
    role: "United Arab Emirates",
  },
  Singapore: {
    name: "Success Story",
    role: "Singapore",
  },
  Australia: {
    name: "Success Story",
    role: "Australia",
  },
  "South Africa": {
    name: "Success Story",
    role: "South Africa",
  },
};

const getStoryName = (story: any) => {
  return (
    story?.name ||
    story?.studentName ||
    story?.personName ||
    story?.fullName ||
    story?.alumniName ||
    story?.author ||
    story?.clientName ||
    DEFAULT_STORY_META[story?.city]?.name ||
    story?.city ||
    ""
  );
};

const getStoryRole = (story: any) => {
  return (
    story?.role ||
    story?.designation ||
    story?.subtitle ||
    story?.profession ||
    story?.jobTitle ||
    story?.position ||
    story?.location ||
    story?.country ||
    story?.destination ||
    story?.company ||
    DEFAULT_STORY_META[story?.city]?.role ||
    ""
  );
};

export default function AlumniSection() {
  const sliderStories = useMemo(
    () => successStories.filter((s) => s.video),
    []
  );

  const [active, setActive] = useState(0);
  const [panelAnimKey, setPanelAnimKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const current = sliderStories[active] || sliderStories[0];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollPanelToCenter = useCallback(() => {
    setTimeout(() => {
      testimonialRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 120);
  }, []);

  const handleThumbHover = () => {
    if (!thumbVideoRef.current || !current?.video) return;
    thumbVideoRef.current.play().catch(() => {});
  };

  const handleThumbLeave = () => {
    if (!thumbVideoRef.current) return;
    thumbVideoRef.current.pause();
    thumbVideoRef.current.currentTime = 0;
  };

  const handleStoryClick = (index: number) => {
    setActive(index);
    setPanelAnimKey((k) => k + 1);
    scrollPanelToCenter();
  };

  const handlePinClick = (city: string) => {
    const storyIndex = sliderStories.findIndex((s) => s.city === city);
    if (storyIndex === -1) return;

    setActive(storyIndex);
    setPanelAnimKey((k) => k + 1);
    scrollPanelToCenter();
  };

  const openLightbox = useCallback(() => {
    if (!current?.video) return;

    setLightboxOpen(true);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setShowControls(true);
    setIsBuffering(true);

    setTimeout(() => {
      const v = lightboxVideoRef.current;
      if (!v) return;

      v.currentTime = 0;
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }, 80);
  }, [current]);

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
    setProgress(0);
    setCurrentTime(0);
    setIsBuffering(false);
    setShowControls(true);
  }, []);

  const togglePlay = useCallback(() => {
    const v = lightboxVideoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const v = lightboxVideoRef.current;
    if (!v) return;

    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!lightboxWrapRef.current) return;

    if (!document.fullscreenElement) {
      lightboxWrapRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const seek = useCallback((deltaSeconds: number) => {
    const v = lightboxVideoRef.current;
    if (!v) return;

    v.currentTime = Math.max(
      0,
      Math.min(v.duration || 0, v.currentTime + deltaSeconds)
    );
  }, []);

  const seekTo = (clientX: number, rect: DOMRect) => {
    const v = lightboxVideoRef.current;
    if (!v || !v.duration) return;

    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  };

  const showControlsThenHide = useCallback(() => {
    setShowControls(true);

    if (controlsHideTimer.current) clearTimeout(controlsHideTimer.current);

    controlsHideTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  }, [isPlaying]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case " ":
        case "k":
        case "K":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
        case "M":
          toggleMute();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "ArrowRight":
          seek(5);
          break;
        case "ArrowLeft":
          seek(-5);
          break;
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
  }, [
    lightboxOpen,
    closeLightbox,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    seek,
  ]);

  return (
    <>
      <style jsx>{`
        .alumni-section {
          position: relative;
          overflow: hidden;
          padding-top: 54px;
        }

        .alumni-header {
          position: relative;
          z-index: 30;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .alumni-kicker {
          position: relative;
          z-index: 31;
          margin: 0 0 8px;
          font-size: 11px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #7b8494;
        }

        .alumni-title {
          position: relative;
          z-index: 31;
          max-width: 100%;
          margin: 0 auto;
          font-family: Inter, sans-serif;
          font-size: clamp(30px, 3.05vw, 56px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: 0.112em;
          white-space: nowrap;
          color: transparent;
          background-image: linear-gradient(90deg, #00b94f 0%, #000572 100%);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .alumni-subtitle {
          position: relative;
          z-index: 31;
          margin: 10px 0 0;
          font-size: 16px;
          line-height: 1.35;
          color: #7a8393;
        }

        .alumni-map-wrap {
          position: relative;
          z-index: 2;
          left: 50%;
          width: min(112vw, 1840px);
          max-width: none;
          margin: -50px 0 0;
          padding: 0 34px;
          transform: translateX(-50%);
        }

        .alumni-map-stage {
          position: relative;
          width: 100%;
          line-height: 0;
        }

        .world-map-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1000 / 500;
        }

        .world-map-img-wrap :global(img) {
          object-fit: contain;
          opacity: 1;
          filter: none;
          pointer-events: none;
          user-select: none;
          transform: scale(1.61);
          transform-origin: center center;
        }

        .alumni-pin {
          position: absolute;
          z-index: 5;
          padding: 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          transform: translate(-50%, -100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          line-height: 1;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-pin:hover {
          transform: translate(-50%, -100%) translateY(-4px) scale(1.07);
        }

        .alumni-pin-active {
          transform: translate(-50%, -100%) translateY(-5px) scale(1.12);
        }

        .alumni-pin-active:hover {
          transform: translate(-50%, -100%) translateY(-7px) scale(1.15);
        }

        .alumni-pin-icon {
          width: 30px;
          height: 39px;
          display: block;
          filter: drop-shadow(0 4px 8px rgba(0, 5, 114, 0.3));
        }

        .alumni-pin-active .alumni-pin-icon {
          filter: drop-shadow(0 7px 13px rgba(0, 5, 114, 0.46));
        }

        .alumni-pin-label {
          margin-top: 4px;
          font-family: var(--font-poppins), sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #000572;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .alumni-pin:hover .alumni-pin-label {
          color: #00b347;
        }

       .alumni-panel-wrap {
  max-width: 1080px;
  margin: -20px auto 0; /* increase negative value to reduce gap */
  padding: 0 20px;
  position: relative;
  z-index: 10;
  scroll-margin-top: 130px;
}

        .alumni-panel {
          background: #000572;
          border-radius: 28px;
          padding: 34px 40px;
          display: flex;
          align-items: center;
          gap: 34px;
          box-shadow: 0 24px 70px rgba(0, 5, 114, 0.2);
          animation: panelFade 0.45s ease both;
        }

        @keyframes panelFade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .featured-badge {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #000;
          background: #00fe4e;
          box-shadow: 0 8px 22px rgba(0, 254, 78, 0.22);
        }

        .video-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          background: #050505;
          cursor: pointer;
          display: block;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .video-thumb.disabled {
          cursor: default;
        }

        .video-thumb:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(0, 254, 78, 0.18),
            0 8px 18px rgba(0, 5, 114, 0.35);
        }

        .video-thumb video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
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
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 5, 114, 0.12) 0%,
            rgba(0, 5, 114, 0.42) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .video-thumb-duration {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 4px;
          backdrop-filter: blur(4px);
          pointer-events: none;
        }

        .play-btn {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: #00fe4e;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 254, 78, 0.45),
            0 0 0 6px rgba(255, 255, 255, 0.12);
          position: relative;
          pointer-events: none;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          min-height: 230px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 26px;
          font-weight: 700;
          background: linear-gradient(135deg, #000572 0%, #0015c8 100%);
        }

        .panel-content {
          min-width: 0;
        }

        .panel-category {
          color: #00fe4e;
          margin-top: 18px;
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.22em;
          font-weight: 800;
          text-transform: uppercase;
        }

        .panel-quote {
          margin-top: 14px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 300;
        }

        .panel-name {
          margin-top: 20px;
          color: #ffffff;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 800;
        }

        .panel-role {
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          line-height: 1.35;
          font-weight: 400;
        }

        .story-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
        }

        .story-dot {
          width: 13px;
          height: 4px;
          border: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .story-dot.active {
          width: 24px;
          background: #00fe4e;
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: lightboxFade 0.25s ease both;
        }

        @keyframes lightboxFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-inner {
          position: relative;
          width: min(1120px, 100%);
          aspect-ratio: 16 / 9;
          background: #000;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
        }

        .lightbox-inner:fullscreen {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
        }

        .lightbox-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.62);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .lightbox-close:hover {
          transform: scale(1.06);
          background: rgba(0, 0, 0, 0.82);
        }

        .lightbox-center-play {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 76px;
          height: 76px;
          border: 0;
          border-radius: 50%;
          background: #00fe4e;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 14px 38px rgba(0, 254, 78, 0.32);
        }

        .buffering-spinner {
          position: absolute;
          inset: 50% auto auto 50%;
          width: 52px;
          height: 52px;
          margin: -26px 0 0 -26px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #00fe4e;
          animation: spin 0.8s linear infinite;
          z-index: 4;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .controls-bar {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          padding: 18px 20px 16px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.78) 100%
          );
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .controls-bar.hidden {
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
        }

        .progress-track {
          position: relative;
          width: 100%;
          height: 6px;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          margin-bottom: 14px;
        }

        .progress-fill {
          height: 100%;
          border-radius: 99px;
          background: #00fe4e;
        }

        .progress-thumb {
          position: absolute;
          top: 50%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00fe4e;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 4px rgba(0, 254, 78, 0.22);
        }

        .controls-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
        }

        .ctrl-btn {
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ctrl-btn:hover {
          background: rgba(255, 255, 255, 0.22);
        }

        .ctrl-time {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
        }

        .ctrl-spacer {
          flex: 1;
        }

        @media (max-width: 1280px) {
          .alumni-section {
            padding-top: 46px;
          }

          .alumni-title {
            font-size: clamp(28px, 2.85vw, 48px);
            letter-spacing: 0.105em;
          }

          .alumni-map-wrap {
            width: min(116vw, 1400px);
            max-width: none;
            margin-top: -12px;
          }
        }

        @media (max-width: 1024px) {
          .alumni-section {
            padding-top: 40px;
          }

          .alumni-title {
            white-space: normal;
            letter-spacing: 0.08em;
          }

          .alumni-map-wrap {
            width: min(118vw, 1180px);
            max-width: none;
            margin-top: -6px;
            padding: 0 20px;
          }

          .alumni-pin-icon {
            width: 26px;
            height: 34px;
          }

          .alumni-pin-label {
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
          .alumni-section {
            padding-top: 34px !important;
            padding-bottom: 48px !important;
          }

          .alumni-header {
            margin-bottom: 0;
            padding: 0 16px;
          }

          .alumni-kicker {
            margin-bottom: 7px;
          }

          .alumni-title {
            font-size: clamp(28px, 8.2vw, 42px);
            line-height: 1.06;
            letter-spacing: 0.04em;
            white-space: normal;
          }

          .alumni-subtitle {
            margin-top: 9px;
            font-size: 14px;
          }

          .alumni-map-wrap {
            width: 120vw;
            padding: 0;
            margin-top: -4px;
          }

          .world-map-img-wrap {
            aspect-ratio: 16 / 11;
          }

          .world-map-img-wrap :global(img) {
            object-fit: cover !important;
            transform: scale(1.45);
            transform-origin: center 55%;
          }

          .alumni-pin-icon {
            width: 22px;
            height: 29px;
          }

          .alumni-pin-label {
            font-size: 9.5px;
            font-weight: 800;
          }

          .alumni-panel-wrap {
            margin-top: -88px;
            padding: 0 14px;
            scroll-margin-top: 90px;
          }

          .alumni-panel {
            padding: 22px !important;
            gap: 20px !important;
            flex-direction: column;
            border-radius: 22px;
          }

          .panel-quote {
            font-size: 16px;
            line-height: 1.55;
          }

          .panel-name {
            font-size: 18px;
          }

          .panel-role {
            font-size: 14px;
          }

          .play-btn {
            width: 56px;
            height: 56px;
          }

          .lightbox-backdrop {
            padding: 12px;
          }

          .lightbox-inner {
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .alumni-map-wrap {
            margin-top: 0;
          }

          .alumni-panel-wrap {
            margin-top: -72px;
          }

          .alumni-panel {
            padding: 18px !important;
          }

          .alumni-pin-icon {
            width: 18px;
            height: 24px;
          }

          .alumni-pin-label {
            font-size: 8.5px;
          }

          .play-btn {
            width: 50px;
            height: 50px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .alumni-pin,
          .video-thumb,
          .video-thumb video,
          .lightbox-close,
          .lightbox-center-play {
            transition: none;
          }

          .alumni-panel,
          .lightbox-backdrop {
            animation: none;
          }
        }
      `}</style>

      <section className="alumni-section pb-14 md:pb-16 bg-white">
        <div className="alumni-header">
          <p className="alumni-kicker">SUCCESS STORIES</p>

          <h2 className="alumni-title">PARTNERS ACROSS GLOBAL MARKETS</h2>

          <p className="alumni-subtitle">
            Delivering integrated solutions across international markets.
          </p>
        </div>

        <div className="alumni-map-wrap">
          <div className="alumni-map-stage">
            <div className="world-map-img-wrap">
              <Image
                src="/mapppp.svg"
                alt="World map"
                fill
                priority
                sizes="(max-width: 768px) 120vw, (max-width: 1024px) 118vw, (max-width: 1280px) 116vw, 112vw"
              />
            </div>

            {successStories.map((item, i) => {
              const firstIndex = successStories.findIndex(
                (s) => s.city === item.city
              );

              if (firstIndex !== i) return null;

              const isActive = current?.city === item.city;

              return (
                <button
                  key={item.city}
                  type="button"
                  onClick={() => handlePinClick(item.city)}
                  style={{
                    top: isMobile && item.yMobile ? item.yMobile : item.y,
                    left: isMobile && item.xMobile ? item.xMobile : item.x,
                  }}
                  className={`alumni-pin ${
                    isActive ? "alumni-pin-active" : ""
                  }`}
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

        {current && (
          <div ref={testimonialRef} className="alumni-panel-wrap">
            <div key={`alumni-panel-${panelAnimKey}`} className="alumni-panel">
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
                  aria-label={
                    current.video
                      ? `Play ${current.city} video`
                      : "No video available"
                  }
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
                        style={
                          current.videoObjectPosition
                            ? { objectPosition: current.videoObjectPosition }
                            : undefined
                        }
                        onLoadedMetadata={(e) => {
                          const d = (e.target as HTMLVideoElement).duration;
                          if (isFinite(d)) setDuration(d);
                        }}
                      />

                      <div className="video-thumb-overlay">
                        <div className="play-btn">
                          <Play
                            className="text-black ml-1"
                            size={28}
                            fill="black"
                          />
                        </div>
                      </div>

                      {duration > 0 && (
                        <span className="video-thumb-duration">
                          {fmtTime(duration)}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className="video-placeholder">{current.city}</div>
                  )}
                </div>
              </div>

              <div className="text-white w-full md:w-1/2 panel-content">
                <span className="featured-badge">FEATURED STORY</span>

                <p className="panel-category">{current.category}</p>

                <h3 className="panel-quote">&ldquo;{current.quote}&rdquo;</h3>

                <p className="panel-name">{getStoryName(current)}</p>

                {getStoryRole(current) ? (
                  <p className="panel-role">{getStoryRole(current)}</p>
                ) : null}

                {sliderStories.length > 1 && (
                  <div className="story-dots" aria-label="Success stories">
                    {sliderStories.map((story, index) => (
                      <button
                        key={`${story.city}-${index}`}
                        type="button"
                        className={`story-dot ${
                          active === index ? "active" : ""
                        }`}
                        onClick={() => handleStoryClick(index)}
                        aria-label={`View ${story.city} story`}
                        aria-pressed={active === index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {lightboxOpen && current?.video && (
          <div
            className="lightbox-backdrop"
            onMouseMove={showControlsThenHide}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div ref={lightboxWrapRef} className="lightbox-inner">
              <button
                type="button"
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close video"
              >
                <X size={22} />
              </button>

              <video
                ref={lightboxVideoRef}
                className="lightbox-video"
                src={current.video}
                playsInline
                controls={false}
                muted={isMuted}
                onClick={togglePlay}
                onPlay={() => {
                  setIsPlaying(true);
                  setIsBuffering(false);
                  showControlsThenHide();
                }}
                onPause={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
                onWaiting={() => setIsBuffering(true)}
                onPlaying={() => setIsBuffering(false)}
                onCanPlay={() => setIsBuffering(false)}
                onTimeUpdate={(e) => {
                  const v = e.target as HTMLVideoElement;
                  setCurrentTime(v.currentTime);

                  if (v.duration) {
                    setProgress(v.currentTime / v.duration);
                  }
                }}
                onLoadedMetadata={(e) => {
                  const d = (e.target as HTMLVideoElement).duration;
                  if (isFinite(d)) setDuration(d);
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
              />

              {isBuffering && (
                <div className="buffering-spinner" aria-hidden="true" />
              )}

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
                    const rect = e.currentTarget.getBoundingClientRect();
                    seekTo(e.clientX, rect);
                  }}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${progress * 100}%` }}
                  />
                  <div
                    className="progress-thumb"
                    style={{ left: `${progress * 100}%` }}
                  />
                </div>

                <div className="controls-row">
                  <button
                    type="button"
                    className="ctrl-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause size={18} fill="#fff" />
                    ) : (
                      <Play size={18} fill="#fff" />
                    )}
                  </button>

                  <button
                    type="button"
                    className="ctrl-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
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
                    aria-label={
                      isFullscreen ? "Exit fullscreen" : "Fullscreen"
                    }
                  >
                    {isFullscreen ? (
                      <Minimize2 size={18} />
                    ) : (
                      <Maximize2 size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
