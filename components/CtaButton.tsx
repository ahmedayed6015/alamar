import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CtaButtonProps {
  text: string;
  href: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ text, href }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full max-w-md group mx-auto block touch-manipulation"
    >
      <div className="absolute -inset-1 bg-gold-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200 animate-pulse"></div>
      
      <button className="relative w-full overflow-hidden rounded-xl bg-gold-gradient px-8 py-4 md:py-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:translate-y-1 active:shadow-none">
        {/* Shimmer Animation Layer */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>
        
        {/* Button Content */}
        <div className="flex items-center justify-center gap-3 text-royal-green font-bold z-20 relative">
          <span className="font-amiri text-xl md:text-3xl tracking-wider drop-shadow-sm">
            {text}
          </span>
          <ExternalLink className="w-6 h-6 md:w-8 md:h-8 animate-bounce-x" />
        </div>
        
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none mix-blend-overlay"></div>
      </button>
    </a>
  );
};