import React from 'react';

interface GoldenFrameProps {
  children: React.ReactNode;
}

export const GoldenFrame: React.FC<GoldenFrameProps> = ({ children }) => {
  return (
    <div className="relative p-1">
      {/* Outer Gold Glow */}
      <div className="absolute inset-0 bg-gold-gradient rounded-full blur opacity-40 animate-pulse"></div>
      
      {/* Main Frame Structure */}
      <div className="relative rounded-full p-2 bg-gradient-to-b from-royal-goldLight via-royal-gold to-royal-goldDark shadow-2xl">
        <div className="rounded-full border-4 border-royal-green/50 overflow-hidden aspect-square w-64 h-64 md:w-80 md:h-80 relative z-10 bg-black">
          {children}
        </div>
        
        {/* Decorative Elements (Simulated Emblems) */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-royal-gold rounded-full flex items-center justify-center border-4 border-royal-green shadow-lg z-20">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-royal-green">
             <path d="M12 2l4 6h6l-5 5 2 6-7-4-7 4 2-6-5-5h6z" fill="#004D25" stroke="none"/>
           </svg>
        </div>
      </div>
    </div>
  );
};