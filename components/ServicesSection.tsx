"use client";

import { servicesData } from "@/data/services";

interface ServicesSectionProps {
  activeServiceTab: keyof typeof servicesData;
  setActiveServiceTab: (v: keyof typeof servicesData) => void;
  serviceAnimKey: number;
  setServiceAnimKey: (v: number | ((prev: number) => number)) => void;
  servicePage: number;
  setServicePage: (v: number | ((prev: number) => number)) => void;
}

export default function ServicesSection({
  activeServiceTab,
  setActiveServiceTab,
  serviceAnimKey,
  setServiceAnimKey,
  servicePage,
  setServicePage,
}: ServicesSectionProps) {
  return (
    <>
      <style jsx global>{`
        .service-card {
          transition: transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1), border-color 0.45s cubic-bezier(0.2,0.9,0.3,1);
          cursor: pointer;
          will-change: transform;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: radial-gradient(circle at top right, rgba(0,254,78,0.06), transparent 60%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .service-card:hover::before { opacity: 0; }
        .service-card-icon {
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), color 0.45s ease;
          will-change: transform;
        }
        .service-card:hover .service-card-icon { transform: translateY(-4px) scale(1.05); }

        @keyframes serviceCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .service-card-icon { animation: serviceCardFloat 3.5s ease-in-out infinite; }

        .service-tab-btn {
          background: #f1f1f1;
          border: 1.5px solid #cfcfcf;
          color: #333333;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .service-tab-btn:hover {
          background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
          border-color: #00fe4e;
          color: #000;
          transform: translateY(-2px);
        }
        .service-tab-btn.is-active {
          background: #00fe4e;
          border-color: #00fe4e;
          color: #000;
        }

        @keyframes serviceCardSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .service-card-anim {
          opacity: 0;
          animation: serviceCardSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .services-nav-wrap { display: flex; justify-content: center; }
        .services-nav-btn {
          width: 84px;
          height: 60px;
          background: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .services-nav-arrow {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #8e8e8e;
          border-radius: 8px;
          transition: color 0.25s ease, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease, filter 0.25s ease;
        }
        .services-nav-arrow svg { width: 20px; height: 20px; transition: filter 0.25s ease; }
        .services-nav-arrow-prev:hover {
          color: #00fe4e;
          transform: translateX(-2px);
          background: rgba(0,254,78,0.08);
        }
        .services-nav-arrow-prev:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .services-nav-arrow-next:hover {
          color: #00fe4e;
          transform: translateX(2px);
          background: rgba(0,254,78,0.08);
        }
        .services-nav-arrow-next:hover svg { filter: drop-shadow(0 0 4px rgba(0,254,78,0.4)); }
        .services-nav-arrow:active { transform: scale(0.92); }

        .service-card-cycle {
          background: #ffffff;
          border-color: #e5e5e5;
          transition: background 0.45s ease, border-color 0.45s ease, transform 0.45s cubic-bezier(0.2,0.9,0.3,1), box-shadow 0.45s cubic-bezier(0.2,0.9,0.3,1);
        }
        .service-card-cycle .service-card-icon-cycle {
          color: #d0d0d0;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-eyebrow {
          color: #1a1a1a;
          font-weight: 500;
          transition: color 0.45s ease;
        }
        .service-card-cycle .service-card-title {
          background: linear-gradient(90deg, #00FE4E 0%, #000572 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: filter 0.45s ease, opacity 0.45s ease;
        }
        .service-card-cycle .service-card-body {
          color: #6b6b6b;
          transition: color 0.45s ease;
        }
        .service-card-cycle:hover {
          background: #050783;
          border-color: #050783;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(5, 7, 131, 0.18);
        }
        .service-card-cycle:hover .service-card-icon-cycle { color: #ffffff; }
        .service-card-cycle:hover .service-card-eyebrow { color: #ffffff; }
        .service-card-cycle:hover .service-card-title {
          background: none;
          -webkit-text-fill-color: #ffffff;
          color: #ffffff;
        }
        .service-card-cycle:hover .service-card-body { color: rgba(255, 255, 255, 0.78); }
      `}</style>

      <section className="mt-14 lg:mt-20 pb-12 lg:pb-16">
        <div data-reveal="up-sm" className="mb-3 lg:mb-4 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.08em] text-black">
          Our Services
        </div>
        <div data-reveal="fade" data-reveal-delay="100" className="gsap-marquee marquee-shell">
          <div className="marquee-track">
            <span className="gsap-clip marquee-text">Cutting-Edge Solutions</span>
            <span className="marquee-text">Cutting-Edge Solutions</span>
            <span className="marquee-text">Cutting-Edge Solutions</span>
            <span className="marquee-text">Cutting-Edge Solutions</span>
          </div>
        </div>
        <p
          data-reveal="up-sm"
          data-reveal-delay="200"
          className="gsap-words mt-3 lg:mt-4 max-w-[560px] leading-[1.3] text-[#202020]"
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
        >
          Transforming businesses with AI-powered technology and intelligent automation
        </p>
        <div data-reveal="up-sm" data-reveal-delay="280" className="mt-6 lg:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {(Object.keys(servicesData) as (keyof typeof servicesData)[]).map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveServiceTab(item);
                setServiceAnimKey((k) => k + 1);
              }}
              className={`service-tab-btn h-[48px] lg:h-[60px] rounded-[8px] text-[14px] lg:text-[16px] font-medium ${
                activeServiceTab === item ? "is-active" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          key={`${activeServiceTab}-${servicePage}-${serviceAnimKey}`}
          className="services-cards-track mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch"
        >
          {servicesData[activeServiceTab]
            .slice(servicePage * 3, servicePage * 3 + 3)
            .map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={`${activeServiceTab}-${servicePage}-${i}`}
                  className={`service-card service-card-cycle service-card-anim relative flex flex-col min-h-[440px] lg:aspect-square lg:min-h-0 rounded-[14px] border border-[#e5e5e5] p-7 lg:p-8 overflow-hidden ${
                    i === 2 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <Icon
                    className="service-card-icon absolute right-7 top-6 lg:right-8 lg:top-8 h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] service-card-icon-cycle"
                    strokeWidth={1.4}
                  />
                  <div className="service-card-eyebrow mt-[60px] lg:mt-[90px] text-[13px] lg:text-[14px]">
                    {card.eyebrow}
                  </div>
                  <h3
                    className="service-card-title mt-2 font-medium leading-tight tracking-[-0.02em]"
                    style={{ fontSize: "clamp(24px, 2.4vw, 30px)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="service-card-body mt-3 lg:mt-4 text-[13px] lg:text-[14px] leading-[1.55]">
                    {card.body}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="services-nav-wrap mt-7 lg:mt-9">
          <div className="services-nav-btn">
            <button
              onClick={() => {
                const totalPages = Math.ceil(servicesData[activeServiceTab].length / 3);
                setServicePage((p) => (p - 1 + totalPages) % totalPages);
                setServiceAnimKey((k) => k + 1);
              }}
              className="services-nav-arrow services-nav-arrow-prev"
              aria-label="Previous cards"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => {
                const totalPages = Math.ceil(servicesData[activeServiceTab].length / 3);
                setServicePage((p) => (p + 1) % totalPages);
                setServiceAnimKey((k) => k + 1);
              }}
              className="services-nav-arrow services-nav-arrow-next"
              aria-label="Next cards"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}