"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Lahore, Karachi, Islamabad", "Pakistan"],
    cta: "View on Map",
    href: "#",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+92 300 2855800"],
    cta: "Make a Call",
    href: "tel:+923002855800",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["contact@parwaaz.co"],
    cta: "Send Email",
    href: "mailto:contact@parwaaz.co",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday – Sunday: Closed"],
    cta: null,
    href: null,
  },
];

export default function ContactCards() {
  return (
    <>
      <style jsx>{`
        .contact-cards-section {
          position: relative;
          background: transparent;
          padding: 0 0 64px;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .contact-cards-section { padding: 0 0 48px; }
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 254, 78, 0.1);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.04);
        }
        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
            padding: 16px;
            gap: 12px;
          }
        }

        .contact-card {
          position: relative;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 14px;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 254, 78, 0.3);
          box-shadow: 0 12px 28px rgba(0, 254, 78, 0.12), 0 4px 8px rgba(0, 0, 0, 0.04);
        }

        .contact-card-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 254, 78, 0.12);
          color: #00b347;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .contact-card:hover .contact-card-icon {
          background: #00fe4e;
          color: #050505;
          box-shadow: 0 0 0 4px rgba(0, 254, 78, 0.18);
        }

        .contact-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #050505;
          margin-bottom: 4px;
        }

        .contact-card-line {
          font-size: 12.5px;
          color: #5a5a5a;
          line-height: 1.5;
        }

        .contact-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-size: 12px;
          font-weight: 600;
          color: #00b347;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: gap 0.25s ease;
        }
        .contact-card-cta:hover {
          gap: 8px;
        }
      `}</style>

      <section className="contact-cards-section">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="contact-cards-grid">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="contact-card">
                  <div className="contact-card-icon">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="contact-card-title">{card.title}</div>
                    {card.lines.map((line) => (
                      <div key={line} className="contact-card-line">{line}</div>
                    ))}
                    {card.cta && card.href && (
                      <a href={card.href} className="contact-card-cta">
                        {card.cta} →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}