import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FacebookSvg, YoutubeSvg, XSvg } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] bg-white pt-10 max-[1024px]:pt-8 max-[768px]:pt-7 max-[480px]:pt-6">
      <div className="mx-auto max-w-[1280px] px-8 max-[768px]:px-6 max-[480px]:px-5">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.3fr] items-start gap-12 max-[1024px]:grid-cols-[1.2fr_1fr_1fr_1.2fr] max-[1024px]:gap-8 max-[768px]:grid-cols-2 max-[768px]:gap-x-6 max-[768px]:gap-y-7 max-[480px]:grid-cols-1 max-[480px]:gap-6">
          {/* ============ BRAND COLUMN ============ */}
          <div
            data-reveal="up"
            className="max-w-[320px] max-[768px]:col-span-2 max-[768px]:max-w-full max-[480px]:col-span-1"
          >
            <Link href="/" aria-label="Parwaaz home">
              <img
                src="/parwaaz-logo.svg"
                alt="Parwaaz"
                className="block h-9 w-auto object-contain"
              />
            </Link>

            <p className="mt-[18px] text-sm leading-[1.55] text-black/70 max-[1024px]:text-[13px] max-[480px]:mt-3.5">
              Building pathways for growth through talent, technology, and
              integrated business solutions.
            </p>

            <div className="mt-7 max-[480px]:mt-5">
              <div className="mb-3 text-sm font-semibold text-black/85">
                Follow us
              </div>

              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/15 bg-transparent text-black/55 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.08] hover:border-[#00fe4e] hover:bg-[#00fe4e] hover:text-black hover:shadow-[0_6px_16px_rgba(0,254,78,0.45)] [&_svg]:block [&_svg]:h-4 [&_svg]:w-4"
                  aria-label="Facebook"
                >
                  <FacebookSvg />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/parwaazskills/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/15 bg-transparent text-black/55 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.08] hover:border-[#00fe4e] hover:bg-[#00fe4e] hover:text-black hover:shadow-[0_6px_16px_rgba(0,254,78,0.45)] [&_svg]:block [&_svg]:h-4 [&_svg]:w-4"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </Link>

                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/15 bg-transparent text-black/55 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.08] hover:border-[#00fe4e] hover:bg-[#00fe4e] hover:text-black hover:shadow-[0_6px_16px_rgba(0,254,78,0.45)] [&_svg]:block [&_svg]:h-4 [&_svg]:w-4"
                  aria-label="YouTube"
                >
                  <YoutubeSvg />
                </Link>

                <Link
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-black/15 bg-transparent text-black/55 transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.08] hover:border-[#00fe4e] hover:bg-[#00fe4e] hover:text-black hover:shadow-[0_6px_16px_rgba(0,254,78,0.45)] [&_svg]:block [&_svg]:h-4 [&_svg]:w-4"
                  aria-label="X (Twitter)"
                >
                  <XSvg />
                </Link>
              </div>
            </div>
          </div>

          {/* ============ COMPANY COLUMN ============ */}
          <div
            data-reveal="up"
            data-reveal-delay="120"
            className="flex flex-col gap-3 pt-1"
          >
            <Link
              href="/about"
              className="w-fit text-[13.5px] font-normal text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              About
            </Link>

            <Link
              href="/about#team"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              People
            </Link>

            <Link
              href="/contact"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Contact
            </Link>

            <Link
              href="/aitech"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Services
            </Link>
          </div>

          {/* ============ SERVICES COLUMN ============ */}
          <div
            data-reveal="up"
            data-reveal-delay="240"
            className="flex flex-col gap-3 pt-1"
          >
            <Link
              href="/aitech"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              AI & Technology
            </Link>

            <Link
              href="/reskilling"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Reskilling
            </Link>

            <Link
              href="/talent"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Talent Mobility
            </Link>

            <Link
              href="/consulting"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Consulting
            </Link>

            <Link
              href="/workspace"
              className="w-fit text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              Workspace
            </Link>
          </div>

          {/* ============ CONTACT COLUMN ============ */}
          <div
            data-reveal="up"
            data-reveal-delay="360"
            className="flex flex-col gap-3 pt-1"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2.5 text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>Lahore, Karachi, Islamabad, Singapore</span>
            </Link>

            <a
              href="tel:+923002855800"
              className="flex items-center gap-2.5 text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>+92 300 2855800</span>
            </a>

            <a
              href="mailto:contact@parwaaz.co"
              className="flex items-center gap-2.5 text-[13.5px] text-black/70 no-underline transition-all duration-300 hover:translate-x-[3px] hover:text-[#00fe4e]"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#00fe4e]" />
              <span>contact@parwaaz.co</span>
            </a>
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