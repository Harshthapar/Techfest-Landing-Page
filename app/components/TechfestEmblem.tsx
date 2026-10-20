"use client";

interface TechfestLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export default function TechfestEmblem({
  size = 36,
  className = "",
  glow = true,
}: TechfestLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter: glow
            ? "drop-shadow(0 0 8px rgba(0, 243, 255, 0.6)) drop-shadow(0 0 16px rgba(112, 0, 255, 0.4))"
            : "none",
        }}
        aria-label="Techfest IIT Bombay Logo"
      >
        <defs>
          {/* Main cyan/purple neon gradient */}
          <linearGradient id="tf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="60%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7000ff" />
          </linearGradient>

          {/* Core high-voltage white/cyan gradient */}
          <linearGradient id="tf-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#b060ff" />
          </linearGradient>
        </defs>

        {/* 
          Stylized 'TF' monogram in italic sci-fi aerospace angular silhouette 
          Matching official Techfest IIT Bombay insignia
        */}
        {/* T-bar and stem combined with F top bar & lower prong */}
        <path
          d="M 12 18 L 92 18 L 84 32 L 60 32 L 46 84 L 28 84 L 42 32 L 20 32 Z"
          fill="url(#tf-gradient)"
        />

        {/* Inner secondary 'F' cross-fin with electric cutout */}
        <path
          d="M 52 46 L 78 46 L 73 56 L 49 56 Z"
          fill="url(#tf-glow)"
        />

        {/* High-tech top accent sliver */}
        <path
          d="M 28 14 L 88 14 L 85 17 L 31 17 Z"
          fill="#00f3ff"
          opacity="0.9"
        />

        {/* Micro trademark square / dot indicator */}
        <rect
          x="88"
          y="15"
          width="4"
          height="4"
          fill="#00f3ff"
          transform="rotate(45 90 17)"
        />
      </svg>
    </div>
  );
}
