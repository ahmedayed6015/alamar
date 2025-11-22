import React from 'react';

interface GoldenFrameProps {
  children: React.ReactNode;
}

export const GoldenFrame: React.FC<GoldenFrameProps> = ({ children }) => {
  return (
    <div className="relative inline-block group">
      {/* Glow Effect behind the frame */}
      <div className="absolute -inset-4 bg-royal-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* The Main Metallic Frame */}
      <div className="relative p-[6px] rounded-full bg-gold-gradient shadow-2xl">
        {/* Inner Detail Ring */}
        <div className="p-[4px] rounded-full bg-royal-green border border-royal-gold/30">
           {/* The Image Container */}
           <div className="relative rounded-full overflow-hidden w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-2 border-black/20 shadow-inner bg-gray-800">
              {children}
              
              {/* Gloss overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>
           </div>
        </div>
      </div>
      
      {/* Ornamental Emblem at the bottom */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative w-16 h-16 flex items-center justify-center">
           <div className="absolute inset-0 bg-gold-gradient rounded-full shadow-lg p-1">
              <div className="w-full h-full bg-royal-green rounded-full flex items-center justify-center border border-yellow-400/30">
                  {/* Saudi Emblem SVG (Simplified) */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-royal-gold">
                    <path d="M12 2L15 8H21L16 13L18 19L12 15L6 19L8 13L3 8H9L12 2Z" fill="currentColor" stroke="#B38728" strokeWidth="0.5"/>
                  </svg>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};