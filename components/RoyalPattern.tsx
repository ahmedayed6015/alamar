import React from 'react';

export const RoyalPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden">
       {/* Base Gradient */}
       <div className="absolute inset-0 bg-radial-gradient from-[#0B4619] to-[#000000] opacity-90"></div>
       
       {/* Islamic Pattern SVG */}
       <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}>
       </div>
       
       {/* Vignette for focus */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
    </div>
  );
};