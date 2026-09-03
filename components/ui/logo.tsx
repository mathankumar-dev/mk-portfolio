import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  mColor?: string;
  accentColor?: string;
}

export function MKLogo({
  className = "w-6 h-6",
  size,
  mColor = "#FFFFFF",
  accentColor = "#10B981", // Emerald accent matching portfolio palette
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="MK Logo"
    >
      {/* M Shape (Crisp White Bold Strokes) */}
      <g stroke={mColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Left vertical stem */}
        <path d="M 28 76 L 31 25" />
        {/* M inner diagonals */}
        <path d="M 31 25 L 46 43 L 56 24" />
        {/* Right stem top section */}
        <path d="M 56 24 L 57 42" />
        {/* Right stem bottom stub */}
        <path d="M 59 63 L 60 76" />
      </g>

      {/* K Shape (Accent Stroke with angled top and curved hook tail) */}
      <g stroke={accentColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 71 31 L 53 50 C 58 60 67 72 78 70 C 86 68 87 56 81 48" />
      </g>
    </svg>
  );
}

