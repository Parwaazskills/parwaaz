import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-divider" />
      <div className="newsletter-inner">
        <h2 data-reveal="up-sm" className="newsletter-title">
          Join The Future Of Innovation
        </h2>
        <p data-reveal="up-sm" data-reveal-delay="120" className="gsap-words newsletter-text">
          Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We&apos;ll share other exciting news and exclusive offers, too.
        </p>
        <div data-reveal="up" data-reveal-delay="240" className="newsletter-form">
          <input type="email" placeholder="Enter your email address" className="newsletter-input" />
          <button className="newsletter-btn">Sign Up</button>
        </div>
        <label data-reveal="fade" data-reveal-delay="360" className="newsletter-checkbox">
          <input type="checkbox" />
          <span>Keep me updated on other news and exclusive offers</span>
        </label>
        <p data-reveal="fade" data-reveal-delay="440" className="newsletter-note">
          <span className="newsletter-note-label">Note:</span> You can opt-out at any time. See our{" "}
          <Link href="#" className="newsletter-link">Privacy Policy</Link> and{" "}
          <Link href="#" className="newsletter-link">Terms</Link>.
        </p>
      </div>
    </section>
  );
}