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
  mColor = "currentColor",
  accentColor = "#FF1E1E", // Vibrant red matching user's custom mark
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
      {/* M Shape */}
      <path
        d="M 22 88 L 26 23 L 48 48 L 64 16 L 64 84"
        stroke={mColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* K Chevrons (Vibrant Red) */}
      <path
        d="M 92 24 L 67 55 L 98 76"
        stroke={accentColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MKLogoBadge({
  className = "w-8 h-8",
  size,
  variant = "dark",
}: {
  className?: string;
  size?: number;
  variant?: "dark" | "glass" | "transparent";
}) {
  const bgClass =
    variant === "glass"
      ? "bg-neutral-900/80 backdrop-blur-sm border border-neutral-800/80 shadow-sm"
      : variant === "dark"
      ? "bg-neutral-950 border border-neutral-800/80 shadow-inner"
      : "";

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-lg p-1.5 transition-all duration-200 group-hover:border-neutral-700 ${bgClass} ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <MKLogo
        className="w-full h-full text-white"
        accentColor="#FF1E1E"
      />
    </div>
  );
}
