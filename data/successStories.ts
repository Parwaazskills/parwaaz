
export type SuccessStory = {
  city: string;
  x: string;
  y: string;
  xMobile?: string;   // NEW
  yMobile?: string;   // NEW
  img: string;
  video: string;
  name: string;
  role: string;
  text: string;
};

export const successStories: SuccessStory[] = [
  {
    city: "Lahore",
    x: "80%",
    y: "42%",
    xMobile: "25%",
    yMobile: "22%",
    img: "/minar.png",
    video: "/minar.png",
    name: "Aisha Tariq",
    role: "Senior Product Manager",
    text: "The Coursera partnership opened doors I never thought possible. From a small startup to leading a fintech team — Parwaaz changed everything.",
  },
  // (others stay as-is, no mobile overrides needed)
  {
    city: "Islamabad",
    x: "55%",
    y: "28%",
    xMobile: "71%",
    yMobile: "36%",
    
    img: "/faisal-mosque.png",
    video: "/faisal-mosque.png",
    name: "Ali Khan",
    role: "Software Engineer",
    text: "This program gave me real-world skills and confidence to grow internationally.",
  },
  {
    city: "Karachi",
    x: "25%",
    y: "65%",
     xMobile: "80%",
  yMobile: "58%",
    img: "/mazar.png",
    video: "/mazar.png",
    name: "Sara Ahmed",
    role: "UX Designer",
    text: "The exposure and mentorship helped me break into global design roles.",
  },
  {
    city: "Faisalabad",
    x: "20%",
    y: "32%",
     xMobile: "30%",
  yMobile: "58%",
    
    img: "/clock-tower.png",
    video: "/clock-tower.png",
    name: "Usman Raza",
    role: "Data Analyst",
    text: "From learning basics to handling enterprise data — huge transformation.",
  },
];