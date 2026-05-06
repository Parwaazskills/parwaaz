"use client";

import React from "react";
import type { LucideProps } from "lucide-react";

/**
 * Office chair icon — swivel chair with wheels, matches reference design.
 * Drop-in replacement for any LucideIcon (accepts same props).
 */
export const OfficeChair = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 1.5, color = "currentColor", ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {/* Backrest */}
      <path d="M8 3h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      {/* Seat */}
      <path d="M5 13h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
      {/* Center post */}
      <path d="M12 16v3" />
      {/* Five-star base legs */}
      <path d="M12 19l-4 2.5" />
      <path d="M12 19l4 2.5" />
      <path d="M12 19v2.5" />
      {/* Wheels */}
      <circle cx="7.5" cy="22" r="0.8" fill={color} />
      <circle cx="16.5" cy="22" r="0.8" fill={color} />
      <circle cx="12" cy="22.2" r="0.8" fill={color} />
    </svg>
  )
);
OfficeChair.displayName = "OfficeChair";