import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function FacebookSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94z" />
    </svg>
  );
}

function YoutubeSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2s-.23-1.65-.95-2.38c-.91-.95-1.93-.96-2.4-1.01C16.8 2.56 12 2.56 12 2.56s-4.8 0-8.15.25c-.47.05-1.49.06-2.4 1.01C.73 4.55.5 6.2.5 6.2S.25 8.13.25 10.06v1.81c0 1.93.25 3.86.25 3.86s.23 1.65.95 2.38c.91.95 2.1.92 2.63 1.02 1.91.18 7.92.24 7.92.24s4.8-.01 8.15-.26c.47-.05 1.49-.06 2.4-1.01.72-.73.95-2.38.95-2.38s.25-1.93.25-3.86v-1.81c0-1.93-.25-3.86-.25-3.86zM9.67 14.62V7.96l6.18 3.34-6.18 3.32z" />
    </svg>
  );
}

function XSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.78L23.2 22h-6.27l-4.9-6.4L6.4 22H3.3l7.28-8.32L2.9 2h6.42l4.43 5.86L18.9 2zm-1.1 17.85h1.72L8.38 4.03H6.53L17.8 19.85z" />
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", icon: FacebookSvg, href: "#" },
    { label: "YouTube", icon: YoutubeSvg, href: "#" },
    { label: "X", icon: XSvg, href: "#" },
  ];

  return (
    <footer className="relative border-t border-black/[0.06] bg-white pt-10 max-[1024px]:pt-8 max-[768px]:pt-7 max-[480px]:pt-6">
      <div className="mx-auto max-w-[1280px] px-8 max-[768px]:px-6 max-[480px]:px-5">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.3fr] items-start gap-12 max-[1024px]:grid-cols-[1.2fr_1fr_1fr_1.2fr] max-[1024px]:gap-8 max-[768px]:grid-cols-2 max-[768px]:gap-x-6 max-[768px]:gap-y-7 max-[480px]:grid-cols-1 max-[480px]:gap-6">
          <div data-reveal="up" className="max-w-[320px] max-[768px]:col-span-2 max-[768px]:max-w-full max-[480px]:col-span-1">
            <img
              src="/parwaaz-logo.svg"
              alt="Parwaaz"
              className="block h-9 w-auto object-contain"
            />

            <p className="mt-[18px] text-sm leading-[1.55] text-black/70 max-[1024px]:text-[13px] max-[480px]:mt-3.5">
              Fueling your business growth with workforce solutions, digital
              skills of the future, and creative design services.
            </p>

            <div className="mt-7 max-[480px]:mt-5">
              <div className="mb-3 text-sm font-semibold text-black/85">
                Follow us
              </div>

              <div className="flex gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/15 bg-transparent text-black/55 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.08] hover:border-[#00fe4e] hover:bg-[#00fe4e] hover:text-black hover:shadow-[0_6px_16px_rgba(0,254,78,0.45)] [&_svg]:block [&_svg]:h-4 [&_svg]:w-4"
                      aria-label={item.label}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div data-reveal="up" data-reveal-delay="120" className="flex flex-col gap-3 pt-1">
            {["About", "People", "Contact", "Services"].map((item) => (
              <Link
                key={item}
                href="#"
                className="w-fit text-[13.5px] font-normal text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div data-reveal="up" data-reveal-delay="240" className="flex flex-col gap-3 pt-1">
            {["Terms", "Privacy Policy", "Legal Notice", "Accessibility"].map((item) => (
              <Link
                key={item}
                href="#"
                className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div data-reveal="up" data-reveal-delay="360" className="flex flex-col gap-3 pt-1">
            <div className="flex items-center gap-2.5 text-[13.5px] text-black/70">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>Lahore, Karachi, Islamabad</span>
            </div>

            <div className="flex items-center gap-2.5 text-[13.5px] text-black/70">
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>+92 300 2855800</span>
            </div>

            <div className="flex items-center gap-2.5 text-[13.5px] text-black/70">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>contact@parwaaz.co</span>
            </div>
          </div>
        </div>

        <div
          data-reveal="fade"
          data-reveal-delay="500"
          className="mx-auto mt-8 border-t border-black/[0.06] px-8 py-[18px] text-center text-xs text-black/55 max-[768px]:mt-6 max-[768px]:px-6 max-[768px]:py-4 max-[480px]:px-5 max-[480px]:py-3.5"
        >
          © 2026 Parwaaz.co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}