import React from 'react';

export const EsgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c-4.28 2.37-4.28 7.63 0 10m0-10c4.28 2.37 4.28 7.63 0 10M12 3.5v17" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12c2.37-4.28 7.63-4.28 10 0m-10 0c2.37 4.28 7.63 4.28 10 0" />
  </svg>
);