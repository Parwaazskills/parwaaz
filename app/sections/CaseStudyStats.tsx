"use client";

// app/sections/CaseStudyStats.tsx

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: "14,000+",
    description:
      "Technical professionals have so far applied to take part in the competitions",
  },
  {
    value: "68%",
    description: "Expressed increased excitement about joining the DoD",
  },
  {
    value: "77%",
    description:
      "Of attendees reported an improved understanding of Army career paths",
  },
];

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const number = Number(value.replace(/[^0-9]/g, ""));
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const suffix = value.match(/[^\d]+$/)?.[0] || "";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let frame: number;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * number));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, number]);

  return (
    <h3
      ref={ref}
      className="font-montserrat text-[64px] font-bold leading-none tracking-[-1.5px] text-[#000572] max-[1024px]:text-[54px] max-[480px]:text-[44px]"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}

export default function CaseStudyStats() {
  return (
    <section className="w-full bg-white px-[86px] py-[80px] max-[1200px]:px-[64px] max-[1024px]:px-[42px] max-[768px]:px-[24px] max-[480px]:px-[18px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-3 border-y border-[#d9d9d9] max-[768px]:grid-cols-1">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`px-[44px] py-[44px] max-[1024px]:px-[24px] max-[768px]:border-b max-[768px]:border-[#d9d9d9] max-[768px]:px-0 ${
                index !== stats.length - 1
                  ? "border-r border-[#d9d9d9] max-[768px]:border-r-0"
                  : "max-[768px]:border-b-0"
              }`}
            >
              <AnimatedCounter value={stat.value} />

              <p className="mt-[14px] max-w-[340px] font-montserrat text-[22px] font-normal leading-[1.65] tracking-[-0.4px] text-[#001f4d] max-[1024px]:text-[18px] max-[480px]:text-[15px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}