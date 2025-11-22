import React from 'react';

export const RoyalPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
       {/* Simple geometric Islamic-style pattern overlay */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0,20 L20,0 L40,20 L20,40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-yellow-200"/>
            <circle cx="20" cy="20" r="5" fill="currentColor" className="text-yellow-200" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
};