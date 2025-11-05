import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const gold = '#D4B258';

interface ProgressArrowProps {
  progress: number; // 0 to 100
  onClick: () => void;
}

export const ProgressArrow: React.FC<ProgressArrowProps> = ({ progress, onClick }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button onClick={onClick} className="relative w-10 h-10 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258] bg-white hover:bg-amber-100 transition-colors group" aria-label="Next">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
        <circle
          className="text-amber-200"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
        <circle
          style={{ color: gold }}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          className="transition-all duration-100 linear"
        />
      </svg>
      <ArrowRightIcon className="w-5 h-5 z-10" />
    </button>
  );
};