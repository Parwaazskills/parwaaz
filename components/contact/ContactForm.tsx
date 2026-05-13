"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <style jsx>{`
        .contact-form-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #00b347;
          text-transform: uppercase;
        }
        .contact-form-tag::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00fe4e;
          box-shadow: 0 0 8px #00fe4e;
        }

        .contact-form-heading {
          margin-top: 14px;
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: #050505;
        }
        .contact-form-heading .accent {
  color: #00b347;
  font-style: normal;
  font-weight: 700;
}

        .contact-input-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #4a4a4a;
          margin-bottom: 6px;
        }
        .contact-input-label .req {
          color: #00b347;
          margin-left: 2px;
        }

        .contact-input,
        .contact-select,
        .contact-textarea {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          font-family: var(--font-poppins), sans-serif;
          color: #050505;
          background: rgba(255, 255, 255, 0.6);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          outline: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(4px);
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #999;
        }
        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          border-color: #00fe4e;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(0, 254, 78, 0.12), 0 4px 16px rgba(0, 254, 78, 0.08);
        }

        .contact-textarea {
          min-height: 120px;
          resize: vertical;
          font-family: var(--font-poppins), sans-serif;
        }

       .contact-submit {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 48px;
  padding: 0 36px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  background: #f1f1f1;
  border: 1.5px solid transparent;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
  transition: background 0.3s ease, color 0.3s ease, transform 0.25s ease,
              box-shadow 0.3s ease, border-color 0.3s ease;
}
.contact-submit:hover {
  background: linear-gradient(135deg, #00fe4e 0%, #0adf54 100%);
  color: #000000;
  border-color: #00fe4e;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 254, 78, 0.5), 0 0 0 6px rgba(0, 254, 78, 0.12);
}
.contact-submit:active {
  transform: translateY(0) scale(0.97);
}
.contact-submit-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #00fe4e;
  color: #050505;
  transition: transform 0.3s ease, background 0.3s ease;
}
.contact-submit:hover .contact-submit-arrow {
  transform: translateX(4px);
  background: #ffffff;
}
        .contact-privacy {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 12px;
          color: #6a6a6a;
        }
        .contact-privacy svg {
          color: #00b347;
        }

        .contact-success {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          font-size: 13px;
          color: #00b347;
          font-weight: 500;
        }
      `}</style>

      <div>
        <span className="contact-form-tag">Get in Touch</span>
        <h2 className="contact-form-heading">
          We&apos;re here to turn
          <br />
          your <span className="accent">ideas</span> into{" "}
          <span className="accent">impact</span>.
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="contact-input-label" htmlFor="name">
                Your name <span className="req">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-input-label" htmlFor="email">
                Your email <span className="req">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="contact-input-label" htmlFor="company">
                Your company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-input-label" htmlFor="budget">
                Budget Range
              </label>
              <select
                id="budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="contact-select"
              >
                <option value="">In USD</option>
                <option value="<5k">Less than $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="contact-input-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="contact-textarea"
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message
            <span className="contact-submit-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </span>
          </button>
        </form>

        {submitted ? (
          <div className="contact-success">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Message sent! We&apos;ll get back to you soon.
          </div>
        ) : (
          <div className="contact-privacy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            We respect your privacy. Your information is safe with us.
          </div>
        )}
      </div>
    </>
  );
}