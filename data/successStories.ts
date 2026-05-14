export type SuccessStory = {
  city: string;
  x: string;
  y: string;
  xMobile?: string;
  yMobile?: string;
  // Testimonial content shown in the navy panel below the map
  video: string;        // mp4 path under /public
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
    x: "62%",
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
    city: "UAE",
    x: "66%",
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
    x: "76%",
    y: "55%",
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
    x: "57%",
    y: "75%",
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
    x: "80%",
    y: "78%",
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