export type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;  // optional LinkedIn profile URL
};

export const teamMembers: TeamMember[] = [
  {
    name: "SHAHBAN SHOUKAT",
    role: "Co-Founder",
    img: "/team-shahban.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "SHARJEEL USMANI",
    role: "Co-Founder & Business Creation Leader",
    img: "/team-sharjeel.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "OMAR NAEEM",
    role: "CFO / Investment Advisor",
    img: "/team-omar.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "SALMAN FAIZ",
    role: "Digital Marketing Consultant",
    img: "/team-salman.png",
    linkedin: "https://www.linkedin.com/",
  },
];