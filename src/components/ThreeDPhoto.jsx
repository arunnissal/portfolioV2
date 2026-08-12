import React from 'react';

export default function ThreeDPhoto({ isHovered = false }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-visible select-none p-1">
      {/* Sleek static image card with smooth grayscale and outline transitions */}
      <div 
        className={`w-[230px] h-[300px] md:w-[260px] md:h-[340px] rounded-2xl overflow-hidden relative border transition-all duration-500 ease-out shadow-2xl ${
          isHovered 
            ? 'border-accent-blue-hover/60 scale-[1.03] shadow-[0_0_25px_rgba(236,72,153,0.25)]' 
            : 'border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
        }`}
      >
        {/* Glowing glass overlay card glare */}
        <div className={`absolute inset-0 card-glare z-10 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-30'}`} />

        {/* The portrait picture */}
        <img 
          src="/src/assets/avatar.jpeg" 
          alt="Arunnissal B"
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered ? 'grayscale-0 brightness-[1.05] contrast-[1.02]' : 'grayscale-[40%] brightness-95'
          }`}
          onError={(e) => {
            console.warn("Avatar image failed to load, loading fallback graphics.");
            e.target.style.display = 'none';
          }}
        />

        {/* Dynamic projector laser light bars at the bottom */}
        <div className={`absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-accent-blue/20 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`} />
      </div>
    </div>
  );
}
