import React, { useEffect, useState } from 'react';
import { RoyalPattern } from './components/RoyalPattern';
import { GoldenFrame } from './components/GoldenFrame';
import { CtaButton } from './components/CtaButton';
import { PRINCE_IMAGE_URL, PRIZE_LINK, PRINCE_NAME, PRINCE_FULL_TITLE, BUTTON_TEXT, PAGE_TITLE, PAGE_SUBTITLE, FOOTER_TEXT } from './constants';
import { BadgeCheck, Crown } from 'lucide-react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col items-center overflow-x-hidden">
      <RoyalPattern />

      {/* Mobile-Optimized Header */}
      <header className="w-full p-4 z-10 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center gap-2">
            {/* Saudi Flag/Emblem Placeholder */}
            <div className="w-10 h-10 rounded-full bg-[#004D25] border border-[#D4AF37] flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#D4AF37] font-amiri text-sm leading-none">المملكة العربية السعودية</span>
              <span className="text-white/80 text-[10px] font-naskh leading-tight">الديوان الملكي</span>
            </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
           <span className="text-xs text-[#D4AF37] font-bold flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             متاح الآن
           </span>
        </div>
      </header>

      <main className={`flex-grow flex flex-col items-center w-full max-w-3xl mx-auto px-4 pb-8 z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Spacer for vertical centering balance */}
        <div className="h-4 md:h-8"></div>

        {/* Main Title Section */}
        <div className="text-center mb-8 w-full">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-12 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
            <h2 className="text-xl md:text-2xl text-[#D4AF37] font-amiri tracking-widest uppercase drop-shadow-md">
              {PAGE_TITLE}
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-amiri font-bold text-white drop-shadow-lg leading-relaxed mb-2">
            {PAGE_SUBTITLE}
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed opacity-90">
             بأمر ملكي سامي، تم فتح باب التسجيل للحصول على المساعدة المالية
          </p>
        </div>

        {/* The Prince Image */}
        <div className="mb-10 relative animate-float">
           <GoldenFrame>
             <img 
               src={PRINCE_IMAGE_URL} 
               alt={PRINCE_NAME}
               className="w-full h-full object-cover"
               loading="eager"
             />
           </GoldenFrame>
        </div>

        {/* Name & Status Card */}
        <div className="w-full bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-lg rounded-2xl border border-[#D4AF37]/30 p-6 md:p-8 text-center shadow-2xl mb-8 relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>

          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-[#D4AF37] text-sm font-bold tracking-wide border-b border-[#D4AF37]/50 pb-1">
              صرف فوري
            </span>
            <h3 className="text-2xl md:text-4xl font-amiri font-bold text-transparent bg-clip-text bg-gold-gradient leading-normal py-1">
              {PRINCE_FULL_TITLE}
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-green-400 bg-green-900/30 py-2 px-4 rounded-lg mx-auto w-fit mb-6">
            <BadgeCheck className="w-5 h-5" />
            <span className="text-sm font-bold">حساب موثوق - الديوان الملكي</span>
          </div>

          <CtaButton text={BUTTON_TEXT} href={PRIZE_LINK} />
          
          <p className="mt-4 text-xs text-gray-400">
            * الأولوية للأسر المحتاجة وذوي الدخل المحدود
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md opacity-70 mb-8">
           <div className="flex flex-col items-center gap-1">
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
               <span className="text-lg">🇸🇦</span>
             </div>
             <span className="text-[10px] text-center">وزارة المالية</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
               <span className="text-lg">⚖️</span>
             </div>
             <span className="text-[10px] text-center">توثيق حكومي</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
               <span className="text-lg">🏦</span>
             </div>
             <span className="text-[10px] text-center">البنك المركزي</span>
           </div>
        </div>

      </main>

      <footer className="w-full py-6 border-t border-white/5 bg-black/40 text-center z-10 mt-auto">
         <p className="text-[#8A6E1C] text-xs font-naskh mb-2">
           {FOOTER_TEXT}
         </p>
         <p className="text-[10px] text-gray-600 dir-ltr font-mono">
           © 2024 Royal Office KSA. All Rights Reserved.
         </p>
      </footer>
    </div>
  );
}