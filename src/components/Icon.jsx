import React from 'react';

const iconProps = { width: 24, height: 24, stroke: 'currentColor', fill: 'none', strokeWidth: 1.6 };

export const Icon = ({ name, size = 24 }) => {
  const props = { ...iconProps, width: size, height: size };
  switch (name) {
    case 'artifact':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7l8-4 8 4v10l-8 4-8-4z" />
          <path d="M4 7l8 4 8-4" />
          <path d="M12 11v10" />
        </svg>
      );
    case 'light':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c3.9 0 7 3 7 7 0 5-7 11-7 11S5 15 5 10c0-4 3.1-7 7-7z" />
          <path d="M9 21h6" />
        </svg>
      );
    case 'sensor':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M4.9 4.9a9 9 0 0114.2 0M3 12a9 9 0 009 9" />
          <path d="M12 3a9 9 0 019 9" />
        </svg>
      );
    case 'analytics':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12l4-4 3 3 5-5" />
          <path d="M5 20V4M12 20V10M19 20V6" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        </svg>
      );
    case 'waves':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12c1.5-2 3-3 4.5-3s3 1 4.5 3 3 3 4.5 3 3-1 4.5-3" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
