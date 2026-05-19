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
    linkedin: "https://www.linkedin.com/in/shahban-shoukat-a50321250/",
  },
  {
    name: "SHeRJEEL USMANI",
    role: "Co-Founder",
    img: "/team-sharjeel.png",
    linkedin: "https://www.linkedin.com/in/muhammad-sherjeel-pasha-usmani-21444665/",
  },
  {
    name: "OMAR NAEEM",
    role: "Investment Advisor",
    img: "/team-omar.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "SALMAN FAYYAZ",
    role: "Digital Marketing Consultant",
    img: "/team-salman.png",
    linkedin: "https://www.linkedin.com/in/salmanfayyaz/",
  },
];
