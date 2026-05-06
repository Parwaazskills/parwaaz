import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookSvg, YoutubeSvg, XSvg } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div data-reveal="up" className="site-footer-brand">
            <img src="/parwaaz-logo.svg" alt="Parwaaz" className="site-footer-logo" />
            <p className="site-footer-tagline">
              Fueling your business growth with workforce solutions, digital skills of the future, and creative design services.
            </p>
            <div className="site-footer-follow">
              <div className="site-footer-follow-label">Follow us</div>
              <div className="site-footer-socials">
                {[FacebookSvg, YoutubeSvg, XSvg].map((Icon, i) => (
                  <Link key={i} href="#" className="site-footer-social" aria-label="Social link">
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div data-reveal="up" data-reveal-delay="120" className="site-footer-col">
            <Link href="#" className="site-footer-link site-footer-link-active">About</Link>
            <Link href="#" className="site-footer-link">People</Link>
            <Link href="#" className="site-footer-link">Contact</Link>
            <Link href="#" className="site-footer-link">Services</Link>
          </div>
          <div data-reveal="up" data-reveal-delay="240" className="site-footer-col">
            <Link href="#" className="site-footer-link">Terms</Link>
            <Link href="#" className="site-footer-link">Privacy Policy</Link>
            <Link href="#" className="site-footer-link">Legal Notice</Link>
            <Link href="#" className="site-footer-link">Accessibility</Link>
          </div>
          <div data-reveal="up" data-reveal-delay="360" className="site-footer-col">
            <div className="site-footer-contact">
              <MapPin className="site-footer-icon" />
              <span>Lahore, Karachi, Islamabad</span>
            </div>
            <div className="site-footer-contact">
              <Phone className="site-footer-icon" />
              <span>+92 300 2855800</span>
            </div>
            <div className="site-footer-contact">
              <Mail className="site-footer-icon" />
              <span>contact@parwaaz.co</span>
            </div>
          </div>
        </div>
        <div data-reveal="fade" data-reveal-delay="500" className="site-footer-bottom">
          © 2026 Parwaaz.co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}