import React from 'react';
import { ArrowLeft, Gift } from 'lucide-react';

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
      className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-royal-green transition-all duration-200 bg-gold-gradient font-amiri rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 shadow-[0_0_40px_rgba(197,160,40,0.3)] overflow-hidden"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
      <span className="absolute top-0 left-0 w-full h-1 bg-white/30"></span>
      
      <Gift className="w-6 h-6 ml-3 animate-bounce" />
      <span className="relative text-xl md:text-2xl tracking-wide">{text}</span>
      <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
      
      <span className="absolute bottom-0 right-0 block w-full h-1 bg-black/10"></span>
    </a>
  );
};