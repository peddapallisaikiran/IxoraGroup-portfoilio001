import React from 'react';

const originalLogoUrl = 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756806978/Screenshot_2025-09-02_152100_rmpo9q.png';

export const IxoraGroupLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src={originalLogoUrl}
    alt="IxoraGroup Logo"
    {...props}
  />
);