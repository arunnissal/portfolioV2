import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Real-time coordinates state for the floating digital display
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.35 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screens
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass-card') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 
        Outer Holographic Target Reticle
        Featuring rotating ticks and interactive crosshair corners
      */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-dashed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          scale: isHoveringClickable ? 1.4 : 1,
          rotate: isHoveringClickable ? 90 : 0,
          borderColor: isHoveringClickable ? 'var(--color-accent-gold)' : 'var(--color-accent-blue)',
          backgroundColor: isHoveringClickable ? 'rgba(202, 138, 4, 0.04)' : 'rgba(2, 132, 199, 0.01)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {/* Four tiny HUD crosshair ticks */}
        <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-current" />
        <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-current" />
        <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-current" />
        <div className="absolute right-[2px] top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-current" />
      </motion.div>

      {/* 
        Center Pointer crosshair 
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block flex items-center justify-center font-mono font-bold text-[9px]"
        style={{
          x: cursorX,
          y: cursorY,
          color: isHoveringClickable ? 'var(--color-accent-gold)' : 'var(--color-accent-blue)',
        }}
      >
        +
      </motion.div>

      {/* 
        Floating Digital Telemetry Tag (Reads cursor coordinates dynamically)
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block font-mono text-[7px] tracking-widest pl-6 pt-6"
        style={{
          x: cursorX,
          y: cursorY,
          color: isHoveringClickable ? 'var(--color-accent-gold)' : 'var(--color-accent-blue)',
        }}
      >
        {isHoveringClickable ? (
          <span className="animate-pulse">[SYS.SELECT_LINK]</span>
        ) : (
          <span>{`[X:${coords.x} Y:${coords.y}]`}</span>
        )}
      </motion.div>
    </>
  );
}
