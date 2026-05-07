"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
}

export default function SearchModal({
  searchOpen,
  setSearchOpen,
  searchQuery,
  setSearchQuery,
}: SearchModalProps) {
  if (!searchOpen) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes pwSearchFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pwSearchScaleIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pw-search-modal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 12vh 20px 20px;
          animation: pwSearchFadeIn 0.25s ease both;
          cursor: default;
        }
        .pw-search-panel {
          width: 100%;
          max-width: 580px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 254, 78, 0.15);
          overflow: hidden;
          animation: pwSearchScaleIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .pw-search-input-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .pw-search-input-icon { color: rgba(0, 0, 0, 0.4); flex-shrink: 0; }
        .pw-search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          color: #000;
          font-family: var(--font-poppins), sans-serif;
        }
        .pw-search-input::placeholder { color: rgba(0, 0, 0, 0.4); }
        .pw-search-close {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .pw-search-close:hover { background: rgba(0, 254, 78, 0.15); color: #00b347; }
        .pw-search-suggestions { padding: 12px 0; max-height: 60vh; overflow-y: auto; }
        .pw-search-suggest-label {
          padding: 8px 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.45);
        }
        .pw-search-suggest-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          color: rgba(0, 0, 0, 0.78);
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.25s ease;
        }
        .pw-search-suggest-item:hover {
          background: rgba(0, 254, 78, 0.08);
          color: #050889;
          padding-left: 26px;
        }
        .pw-search-suggest-item svg { color: rgba(0, 0, 0, 0.4); flex-shrink: 0; }
        .pw-search-suggest-item:hover svg { color: #00fe4e; }
        @media (max-width: 640px) {
          .pw-search-modal { padding: 8vh 16px 16px; }
          .pw-search-panel { border-radius: 12px; }
          .pw-search-input-row { padding: 14px 16px; }
          .pw-search-input { font-size: 15px; }
          .pw-search-suggest-item { padding: 11px 16px; font-size: 13px; }
        }
      `}</style>

      <div className="pw-search-modal" onClick={() => setSearchOpen(false)}>
        <div className="pw-search-panel" onClick={(e) => e.stopPropagation()}>
          <div className="pw-search-input-row">
            <Search className="pw-search-input-icon" size={20} strokeWidth={2} />
            <input
              type="text"
              className="pw-search-input"
              placeholder="Search Parwaaz..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              className="pw-search-close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>
          <div className="pw-search-suggestions">
            <div className="pw-search-suggest-label">Suggestions</div>
            {[
              { label: "Our Services", href: "#" },
              { label: "Training Programs", href: "#" },
              { label: "International Recruitment", href: "#" },
              { label: "Coursera Partnership", href: "#" },
              { label: "Contact Us", href: "#" },
              { label: "About Parwaaz", href: "#" },
            ]
              .filter(
                (s) =>
                  searchQuery === "" ||
                  s.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="pw-search-suggest-item"
                  onClick={() => setSearchOpen(false)}
                >
                  <Search size={14} strokeWidth={2} />
                  <span>{s.label}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}