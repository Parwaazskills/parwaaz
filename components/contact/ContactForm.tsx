"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error: any) {
      setErrorMsg(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#00b347] before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-[#00fe4e] before:shadow-[0_0_8px_#00fe4e]">
        Get in Touch
      </span>

      <h2 className="mt-[14px] font-[var(--font-poppins)] text-[clamp(28px,4vw,44px)] font-medium leading-[1.15] tracking-[-0.01em] text-[#050505]">
        We&apos;re here to turn
        <br />
        your{" "}
        <span className="font-bold not-italic text-[#00b347]">ideas</span> into{" "}
        <span className="font-bold not-italic text-[#00b347]">impact</span>.
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              className="mb-[6px] block text-[13px] font-medium text-[#4a4a4a]"
              htmlFor="name"
            >
              Your name <span className="ml-[2px] text-[#00b347]">*</span>
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-white/60 px-[14px] py-3 font-[var(--font-poppins)] text-sm text-[#050505] outline-none backdrop-blur-[4px] transition-all duration-300 placeholder:text-[#999] focus:border-[#00fe4e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,254,78,0.12),0_4px_16px_rgba(0,254,78,0.08)]"
            />
          </div>

          <div>
            <label
              className="mb-[6px] block text-[13px] font-medium text-[#4a4a4a]"
              htmlFor="email"
            >
              Your email <span className="ml-[2px] text-[#00b347]">*</span>
            </label>

            <input
              id="email"
              type="email"
              required
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-white/60 px-[14px] py-3 font-[var(--font-poppins)] text-sm text-[#050505] outline-none backdrop-blur-[4px] transition-all duration-300 placeholder:text-[#999] focus:border-[#00fe4e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,254,78,0.12),0_4px_16px_rgba(0,254,78,0.08)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              className="mb-[6px] block text-[13px] font-medium text-[#4a4a4a]"
              htmlFor="company"
            >
              Your company
            </label>

            <input
              id="company"
              type="text"
              placeholder="Company name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-white/60 px-[14px] py-3 font-[var(--font-poppins)] text-sm text-[#050505] outline-none backdrop-blur-[4px] transition-all duration-300 placeholder:text-[#999] focus:border-[#00fe4e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,254,78,0.12),0_4px_16px_rgba(0,254,78,0.08)]"
            />
          </div>

          <div>
            <label
              className="mb-[6px] block text-[13px] font-medium text-[#4a4a4a]"
              htmlFor="budget"
            >
              Budget Range
            </label>

            <select
              id="budget"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-white/60 px-[14px] py-3 font-[var(--font-poppins)] text-sm text-[#050505] outline-none backdrop-blur-[4px] transition-all duration-300 focus:border-[#00fe4e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,254,78,0.12),0_4px_16px_rgba(0,254,78,0.08)]"
            >
              <option value="">In USD</option>
              <option value="Less than $5,000">Less than $5,000</option>
              <option value="$5,000 – $15,000">$5,000 – $15,000</option>
              <option value="$15,000 – $50,000">$15,000 – $50,000</option>
              <option value="$50,000+">$50,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label
            className="mb-[6px] block text-[13px] font-medium text-[#4a4a4a]"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            id="message"
            placeholder="Type here..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-[120px] w-full resize-y rounded-[10px] border-[1.5px] border-black/10 bg-white/60 px-[14px] py-3 font-[var(--font-poppins)] text-sm text-[#050505] outline-none backdrop-blur-[4px] transition-all duration-300 placeholder:text-[#999] focus:border-[#00fe4e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,254,78,0.12),0_4px_16px_rgba(0,254,78,0.08)]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group relative inline-flex h-12 cursor-pointer items-center justify-center gap-[10px] rounded-[24px] border-[1.5px] border-transparent bg-[#f1f1f1] px-9 text-sm font-medium text-[#333333] shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00fe4e] hover:bg-[linear-gradient(135deg,#00fe4e_0%,#0adf54_100%)] hover:text-black hover:shadow-[0_8px_24px_rgba(0,254,78,0.5),0_0_0_6px_rgba(0,254,78,0.12)] active:translate-y-0 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}

          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00fe4e] text-[#050505] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </span>
        </button>
      </form>

      {submitted ? (
        <div className="mt-[14px] inline-flex items-center gap-2 text-[13px] font-medium text-[#00b347]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Message sent! We&apos;ll get back to you soon.
        </div>
      ) : errorMsg ? (
        <div className="mt-[14px] inline-flex items-center gap-2 text-[13px] font-medium text-red-600">
          {errorMsg}
        </div>
      ) : (
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#6a6a6a]">
          <svg
            className="text-[#00b347]"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          We respect your privacy. Your information is safe with us.
        </div>
      )}
    </div>
  );
}