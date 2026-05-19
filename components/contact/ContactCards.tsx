"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Lahore, Karachi, Islamabad", "Pakistan & Singapore"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+92 300 2855800"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["contact@parwaaz.co"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday – Sunday: Closed"],
  },
];

export default function ContactCards() {
  return (
    <section className="relative z-[2] bg-transparent pb-16 max-[768px]:pb-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-4 rounded-[20px] border border-[rgba(0,254,78,0.1)] bg-white/85 p-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)] backdrop-blur-[10px] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-3 max-[640px]:p-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="relative flex min-h-[118px] items-center gap-[14px] rounded-[14px] border border-black/[0.04] bg-white p-[18px]"
              >
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#00fe4e]/[0.12] text-[#00b347]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <div className="mb-1 text-[14px] font-bold text-[#050505]">
                    {card.title}
                  </div>

                  {card.lines.map((line) => (
                    <div
                      key={line}
                      className="text-[12.5px] leading-[1.5] text-[#5a5a5a]"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}