"use client";

import { Plus, Mic, ArrowUp } from "lucide-react";
import { chips } from "@/data/chips";

export default function ChatBox() {
  return (
    <>
      <style jsx global>{`
        .chatbox-wrap {
          position: relative;
          z-index: 5;
          margin-top: -60px;
        }
        @media (min-width: 640px) { .chatbox-wrap { margin-top: -90px; } }
        @media (min-width: 1024px) { .chatbox-wrap { margin-top: -90px; } }

        @keyframes chatboxSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ea-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: #000572;
          background-image:
            radial-gradient(ellipse 110% 80% at 50% 0%, rgba(117, 251, 105, 0.7) 0%, rgba(117, 251, 105, 0.35) 30%, rgba(117, 251, 105, 0.1) 55%, rgba(0, 5, 114, 0) 75%),
            linear-gradient(180deg, rgba(117, 251, 105, 0.12) 0%, rgba(0, 5, 114, 0.95) 60%, #000572 100%);
          border: 3px solid #00ff66;
          box-shadow:
            0 0 28px rgba(0, 255, 102, 0.28),
            0 28px 80px rgba(0, 0, 0, 0.18);
          animation: chatboxSlideUp .8s cubic-bezier(.2,.9,.3,1) both;
          animation-delay: .3s;
          transition: background-color 0.5s ease, background-image 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
        }
        .ea-card:hover {
          background-color: #00033f;
          background-image:
            radial-gradient(ellipse 110% 80% at 50% 0%, rgba(117, 251, 105, 0.7) 0%, rgba(117, 251, 105, 0.35) 30%, rgba(117, 251, 105, 0.1) 55%, rgba(0, 3, 63, 0) 75%),
            linear-gradient(180deg, rgba(117, 251, 105, 0.12) 0%, rgba(0, 3, 63, 0.97) 55%, #00033f 100%);
          box-shadow:
            0 0 36px rgba(0, 255, 102, 0.4),
            0 32px 90px rgba(0, 0, 0, 0.3);
        }
        .ea-card::before { content: none; }

        .chatbox-btn:hover { transform: translateY(-3px) scale(1.05); }
        .ask-typing-wrap { display: flex; align-items: center; min-height: 40px; }
        .ask-typing {
          display: inline-block;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid rgba(255,255,255,0.7);
          animation: askType 4.5s steps(14, end) infinite, askCaret 0.7s step-end infinite;
          max-width: 0;
        }
        @keyframes askType {
          0%, 5% { max-width: 0; }
          40%, 70% { max-width: 200px; }
          95%, 100% { max-width: 0; }
        }
        @keyframes askCaret {
          0%, 100% { border-color: transparent; }
          50% { border-color: rgba(255,255,255,0.7); }
        }

        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .chatbox-wrap {
            position: relative !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: -108px auto 0 !important;
            padding: 0 16px !important;
            transform: none !important;
            z-index: 15 !important;
          }
          .ea-card {
            width: 100% !important;
            max-width: 380px !important;
            margin: 0 auto !important;
            border-radius: 22px !important;
          }
        }
      `}</style>

      <div className="chatbox-wrap">
        <div className="mx-auto w-full max-w-[1100px] px-3 sm:px-6">
          <div className="ea-card">
            <div className="relative px-4 py-4 sm:px-7 sm:py-6">
              <div className="text-center mb-3 sm:mb-4">
                <h3
                  className="mb-1 font-bold leading-tight text-[#00fe4e]"
                  style={{ fontSize: "clamp(18px, 5.2vw, 28px)" }}
                >
                  How Can We Assist You Today?
                </h3>
                <p
                  className="font-medium text-white/85 px-2"
                  style={{ fontSize: "clamp(10px, 2.6vw, 12px)" }}
                >
                  Find answers to your questions instantly let AI do the work for you
                </p>
              </div>

              <div className="bg-black rounded-t-[10px] sm:rounded-t-[12px] overflow-hidden">
                <div className="px-3 py-3 sm:px-5 sm:py-5">
                  <div className="ask-typing-wrap">
                    <span className="ask-typing">Ask Anything...</span>
                  </div>
                  <div className="flex items-center justify-between mt-3 sm:mt-5">
                    <label className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-white rounded-[7px] cursor-pointer">
                      <Plus className="h-4 w-4 text-black" />
                      <input type="file" accept="*/*" className="hidden" />
                    </label>
                    <div className="flex gap-1.5 sm:gap-2">
                      <button className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-transparent border border-white/25 rounded-[7px]">
                        <Mic className="h-4 w-4 text-white/80" />
                      </button>
                      <button className="chatbox-btn flex items-center justify-center w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-blue-500 rounded-[7px]">
                        <ArrowUp className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-center flex-nowrap gap-1.5 sm:gap-2 bg-[#2f58b3] px-2.5 sm:px-4 py-2.5 sm:py-3 overflow-x-auto scrollbar-hide">
                  {chips.map(({ label, icon: Icon }) => (
                    <button
                      key={label}
                      className="flex h-[24px] sm:h-[28px] shrink-0 items-center gap-1 sm:gap-1.5 rounded-full bg-white px-2.5 sm:px-3 text-[9px] sm:text-[11px] font-semibold text-[#4b4b4b] shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      <Icon className="h-[10px] w-[10px] sm:h-[11px] sm:w-[11px] text-[#00fe4e]" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}