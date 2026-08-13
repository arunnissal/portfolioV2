import React from 'react';
import avatarImg from '../assets/avatar.jpeg';

export default function ThreeDPhoto({ isHovered = false }) {
  return (
    <div className="relative w-full h-full flex items-end justify-end select-none">
      {/* 
        Multiply blend mode makes the white studio background of the portrait photo 
        completely transparent, blending it seamlessly into the light slate backdrop of the site.
      */}
      <img 
        src={avatarImg} 
        alt="Arunnissal B"
        className={`max-h-[85vh] md:max-h-[90vh] w-auto object-cover object-bottom transition-all duration-700 ease-out mix-blend-multiply ${
          isHovered ? 'scale-[1.01] brightness-105 contrast-[1.01]' : 'grayscale-[10%] brightness-100'
        }`}
        onError={(e) => {
          console.warn("Avatar image failed to load, loading fallback graphics.");
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}
