import { teamMembers } from "@/data/teamMembers";
import { LinkedInSvg } from "@/components/SocialIcons";

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-neptune-wrap" aria-hidden="true">
        <img src="/neptune.svg" alt="" />
      </div>
      <div data-reveal="zoom" className="team-neptune-btn">
        <button className="team-about-btn">About Team</button>
      </div>
      <div className="team-bg-circuit">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="40" r="6" fill="#00fe4e" />
          <path d="M180 40 L100 40 L100 120 L60 120" stroke="#00fe4e" strokeWidth="1.5" />
          <circle cx="60" cy="120" r="4" fill="#00fe4e" />
          <path d="M180 40 L180 200 L120 200" stroke="#00fe4e" strokeWidth="1.5" />
          <circle cx="120" cy="200" r="5" fill="#00fe4e" />
          <path d="M180 200 L180 320 L80 320" stroke="#00fe4e" strokeWidth="1.5" />
          <circle cx="80" cy="320" r="4" fill="#00fe4e" />
          <path d="M180 40 L180 360" stroke="#00fe4e" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.5" />
        </svg>
      </div>
      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="team-row">
          <div className="team-cards-col">
            <div data-reveal="up" className="relative z-10 mb-8 lg:mb-12">
              <h2 className="team-title">
                <span className="text-[#0adf54]">MEET</span>{" "}
                <span className="text-[#0a7a5f]">OUR</span>{" "}
                <span className="text-[#050889]">TEAM</span>
              </h2>
              <p className="gsap-words mt-3 text-[14px] lg:text-[15px] text-black">
                Our business experts come from businesses of all shapes and sizes.
              </p>
            </div>
            <div className="team-cards-grid">
              {teamMembers.map((m, i) => (
                <div key={m.name} data-reveal="up" data-reveal-delay={i * 110} className="team-card">
                  <div className="team-photo-frame">
                    <img src={m.img} alt={m.name} />
                  </div>
                  <div className="team-card-role">{m.role}</div>
                  <div className="team-card-name">{m.name}</div>
                  <div className="team-card-linkedin">
                    <LinkedInSvg />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}