import React, { useEffect, useState } from 'react';
import { RoyalPattern } from './components/RoyalPattern';
import { GoldenFrame } from './components/GoldenFrame';
import { CtaButton } from './components/CtaButton';
import { PRINCE_IMAGE_URL, PRIZE_LINK, PRINCE_NAME, BUTTON_TEXT, PAGE_TITLE, PAGE_SUBTITLE } from './constants';
import { Crown } from 'lucide-react';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-royal-green via-[#003319] to-black">
      <RoyalPattern />

      {/* Top Navigation / Header */}
      <nav className="w-full p-6 z-10 flex justify-center items-center border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-royal-goldLight">
          <Crown className="w-6 h-6" />
          <span className="font-amiri text-xl tracking-wider">المملكة العربية السعودية</span>
          <Crown className="w-6 h-6" />
        </div>
      </nav>

      <main className={`flex-grow flex flex-col items-center justify-center px-4 py-12 w-full max-w-4xl z-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Card Container */}
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 w-full flex flex-col items-center shadow-2xl">
          
          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-royal-gold rounded-tl-3xl opacity-60"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-royal-gold rounded-tr-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-royal-gold rounded-bl-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-royal-gold rounded-br-3xl opacity-60"></div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-royal-goldLight font-amiri text-2xl md:text-3xl mb-2 tracking-wide">{PAGE_TITLE}</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto"></div>
          </div>

          {/* Royal Image Section */}
          <div className="mb-10 transform hover:scale-105 transition-transform duration-500">
            <GoldenFrame>
              <img 
                src={PRINCE_IMAGE_URL} 
                alt={PRINCE_NAME}
                className="w-full h-full object-cover"
              />
            </GoldenFrame>
          </div>

          {/* Prince Name & Title */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-amiri text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 leading-relaxed py-2 drop-shadow-sm">
              {PRINCE_NAME}
            </h1>
            <p className="text-gray-300 font-naskh text-lg md:text-xl max-w-2xl leading-8">
              {PAGE_SUBTITLE}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full flex items-center gap-4 mb-10 opacity-50">
            <div className="h-px bg-gradient-to-l from-royal-gold to-transparent flex-1"></div>
            <div className="w-3 h-3 rotate-45 bg-royal-gold"></div>
            <div className="h-px bg-gradient-to-r from-royal-gold to-transparent flex-1"></div>
          </div>

          {/* Action Button */}
          <div className="w-full flex justify-center animate-bounce-slow">
             <CtaButton text={BUTTON_TEXT} href={PRIZE_LINK} />
          </div>

          {/* Footer/Disclaimer */}
          <p className="mt-12 text-xs text-gray-500 font-naskh">
            الموقع الرسمي للتواصل واستلام المنح الملكية. جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
}