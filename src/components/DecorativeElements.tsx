import React from 'react';

/**
 * 3D Playful Toy Planets, Clouds, Stars and Orbital elements
 */

export const RingedPlanet: React.FC<{
  className?: string;
  size?: number;
  planetColor?: string;
  ringColor?: string;
}> = ({
  className = '',
  size = 64,
  planetColor = '#24ACD0',
  ringColor = '#FFCA05',
}) => {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Planet body gradient with 3D spherical lighting */}
          <radialGradient
            id={`planetGrad-${planetColor.replace('#', '')}`}
            cx="35%"
            cy="30%"
            r="65%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor={planetColor} />
            <stop offset="100%" stopColor="#146078" />
          </radialGradient>
          {/* Ring gradient */}
          <linearGradient
            id={`ringGrad-${ringColor.replace('#', '')}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="50%" stopColor={ringColor} />
            <stop offset="100%" stopColor="#D98A00" />
          </linearGradient>
        </defs>

        {/* Back portion of the ring */}
        <path
          d="M 12 50 C 12 38 88 38 88 50"
          stroke={`url(#ringGrad-${ringColor.replace('#', '')})`}
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Spherical planet body */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill={`url(#planetGrad-${planetColor.replace('#', '')})`}
        />

        {/* Front portion of the ring */}
        <path
          d="M 88 50 C 88 62 12 62 12 50"
          stroke={`url(#ringGrad-${ringColor.replace('#', '')})`}
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Cute shine highlight */}
        <ellipse
          cx="40"
          cy="36"
          rx="6"
          ry="3"
          fill="#FFFFFF"
          opacity="0.75"
          transform="rotate(-25 40 36)"
        />
      </svg>
    </div>
  );
};

export const ToyCloud: React.FC<{
  className?: string;
  width?: number;
  height?: number;
  fillColor?: string;
}> = ({
  className = '',
  width = 120,
  height = 70,
  fillColor = '#FFFFFF',
}) => {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 140 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <radialGradient id="cloudHighlight" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor={fillColor} />
            <stop offset="100%" stopColor="#E2D4DE" />
          </radialGradient>
        </defs>
        {/* Soft rounded 3D cloud bubbles */}
        <path
          d="M 35 65 C 20 65 12 55 12 42 C 12 30 22 22 34 22 C 37 12 48 5 62 5 C 78 5 90 15 94 28 C 104 28 114 36 114 47 C 114 57 106 65 95 65 Z"
          fill="url(#cloudHighlight)"
        />
        {/* Cute glossy specular reflection */}
        <ellipse cx="60" cy="18" rx="14" ry="5" fill="#FFFFFF" opacity="0.6" />
        <ellipse cx="32" cy="32" rx="7" ry="3" fill="#FFFFFF" opacity="0.5" />
      </svg>
    </div>
  );
};

export const StarSparkle: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({
  className = '',
  size = 28,
  color = '#FFCA05',
}) => {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow"
      >
        <path
          d="M 16 0 C 16 9 23 16 32 16 C 23 16 16 23 16 32 C 16 23 9 16 0 16 C 9 16 16 9 16 0 Z"
          fill={color}
        />
        <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export const OrbitalRing: React.FC<{
  className?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
}> = ({
  className = '',
  width = 240,
  height = 120,
  strokeColor = '#FFFFFF',
}) => {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <ellipse
          cx="150"
          cy="75"
          rx="140"
          ry="65"
          stroke={strokeColor}
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.35"
        />
        <circle cx="280" cy="85" r="5" fill="#FFCA05" />
        <circle cx="35" cy="50" r="4" fill="#24ACD0" />
      </svg>
    </div>
  );
};
