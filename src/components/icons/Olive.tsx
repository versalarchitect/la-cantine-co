import type { SVGProps } from 'react';

export function OliveIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-olive-bounce ${className}`}
      aria-label="Olive"
      role="img"
      {...props}
    >
      {/* Main olive body */}
      <path
        d="M12 20.5c4.8 0 7.5-3.2 7.5-7.2 0-4.8-2.7-9.3-7.5-9.3S4.5 8.5 4.5 13.3c0 4 2.7 7.2 7.5 7.2z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Stem */}
      <path
        d="M12 4c0.1-0.8-0.1-2.2-0.2-2.5"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Leaves */}
      <path
        d="M11.8 1.5c0.6-0.6 2.8-1 3.8 0.4 1 1.4-0.4 2.4-0.8 2.6"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 1.5c-0.6-0.6-2.8-1-3.8 0.4-1 1.4 0.4 2.4 0.8 2.6"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Detail lines */}
      <path
        d="M9 9.2c1.2-1.8 4.8-1.8 6 0.3"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.8c2.2 1.8 4.8 1.8 7 0"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 14.2c2 1.2 4.4 1.2 6.4 0"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 16.8c1.8 0.8 3.8 0.8 5.6 0"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Highlight */}
      <path
        d="M10 7.8c0.8-0.6 3.2-0.6 4 0.2"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 
