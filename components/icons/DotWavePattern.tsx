import React from 'react';

export const DotWavePattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 150"
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    <defs>
      <pattern
        id="dot-wave-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.5" fill="rgba(255, 255, 255, 0.08)" />
      </pattern>
    </defs>
    <path
      d="M0,50 C200,150 350,0 720,50 C1090,100 1240,-50 1440,50 V150 H0 Z"
      fill="url(#dot-wave-pattern)"
    />
  </svg>
);
