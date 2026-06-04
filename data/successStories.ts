export type SuccessStory = {
  city: string;
  x: string;
  y: string;
  xMobile?: string;
  yMobile?: string;
  // Testimonial content shown in the navy panel below the map
  video: string;        // mp4 path under /public
  videoObjectPosition?: string;  // optional per-video crop position
  videoObjectFit?: "cover" | "contain";  // optional per-video fit mode
  category: string;     // e.g. "INTERNATIONAL PLACEMENT"
  quote: string;
  personName: string;
  personRole: string;
};

/*
 * Coordinates are % positions on a standard equirectangular world map.
 *   x: 0% = far left  |  100% = far right
 *   y: 0% = top       |  100% = bottom
 *
 * Real lat/lng → map %:
 *   KSA (Riyadh)        24.7° N, 46.7° E
 *   UAE (Dubai)         25.2° N, 55.3° E
 *   Singapore            1.3° N, 103.8° E
 *   South Africa (JNB)  26.2° S, 28.0° E
 *   Australia (Sydney)  33.9° S, 151.2° E
 *
 * Mobile coords match desktop because map keeps the same 2:1 aspect ratio
 * on all screens (no zoom/crop). Pins scale proportionally with the map.
 */
export const successStories: SuccessStory[] = [
  {
    city: "KSA",
    x: "60%",
    y: "42%",
    xMobile: "62%",
    yMobile: "32%",
    video: "/video/Ksa.mp4",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Parwaaz helped me secure a job opportunity in the Kingdom of Saudi Arabia, where I have now been working successfully for the past two years. This opportunity changed my life, helped me support my family, and gave me a more stable future.",
    personName: "Muhammad Siddiqui",
    personRole: "Technical Trainer — Kingdom of Saudi Arabia",
  },
  {
    city: "KSA",
    x: "60%",
    y: "42%",
    xMobile: "62%",
    yMobile: "32%",
    video: "/video/mustafa.mp4",
    videoObjectPosition: "center 55%",
    videoObjectFit: "contain",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Coming from Sudan with years of industry experience, I always wanted an opportunity where I could teach, mentor, and pass my knowledge on to others. Parwaaz supported me throughout the journey and helped me secure my next role in KSA.",
    personName: "Mustafa Saleh",
    personRole: "Industrial Mechanical Trainer — Kingdom of Saudi Arabia",
  },
  {
    city: "UAE",
    x: "64%",
    y: "44%",
    xMobile: "69%",
    yMobile: "34%",
    video: "",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Parwaaz is expanding integrated solutions across the UAE — connecting talent, technology and opportunity.",
    personName: "UAE Market",
    personRole: "Strategic Partnership Hub",
  },
  {
    city: "Singapore",
    x: "68%",
    y: "48%",
    xMobile: "94%",
    yMobile: "45%",
    video: "",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Parwaaz is expanding integrated solutions across Singapore — connecting talent, technology and opportunity.",
    personName: "Singapore Market",
    personRole: "Strategic Partnership Hub",
  },
  {
    city: "South Africa",
    x: "53%",
    y: "65%",
    xMobile: "60%",
    yMobile: "50%",
    video: "",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Parwaaz is expanding integrated solutions across South Africa — connecting talent, technology and opportunity.",
    personName: "South Africa Market",
    personRole: "Strategic Partnership Hub",
  },
  {
    city: "Australia",
    x: "75%",
    y: "72%",
    xMobile: "94%",
    yMobile: "58%",
    video: "",
    category: "INTERNATIONAL PLACEMENT",
    quote:
      "Parwaaz is expanding integrated solutions across Australia — connecting talent, technology and opportunity.",
    personName: "Australia Market",
    personRole: "Strategic Partnership Hub",
  },
];