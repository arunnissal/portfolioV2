import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('DEFAULT'); // 'DEFAULT', 'LINK', 'PROJECT', '3D_OBJECT'
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.35 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable completely on touch screen mobiles
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
      if (!target) return;

      const isLink = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('.cursor-pointer');

      const isProjectCard = target.closest('#projects') && target.closest('.glass-card');
      const isCanvas = target.closest('canvas');

      if (isProjectCard) {
        setCursorState('PROJECT');
      } else if (isCanvas) {
        setCursorState('3D_OBJECT');
      } else if (isLink) {
        setCursorState('LINK');
      } else {
        setCursorState('DEFAULT');
      }
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
        Outer Trailing HUD Reticle 
      */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          scale: cursorState === 'PROJECT' ? 1.6 : cursorState === 'LINK' ? 1.4 : cursorState === '3D_OBJECT' ? 1.2 : 0.8,
          borderColor: cursorState === 'PROJECT' ? 'var(--color-accent-gold)' : cursorState === '3D_OBJECT' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)',
          backgroundColor: cursorState === 'PROJECT' ? 'rgba(202, 138, 4, 0.05)' : 'rgba(6, 182, 212, 0.01)',
          borderStyle: cursorState === '3D_OBJECT' ? 'dashed' : 'solid',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {/* Render crosshair ticks only for Link and 3D states */}
        {cursorState === 'LINK' && (
          <div className="absolute inset-[3px] rounded-full border border-dashed border-accent-blue/30" />
        )}
      </motion.div>

      {/* 
        Inner Pointer Point
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block flex items-center justify-center font-mono text-[9px] font-bold"
        style={{
          x: cursorX,
          y: cursorY,
          color: cursorState === 'PROJECT' ? 'var(--color-accent-gold)' : cursorState === '3D_OBJECT' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)',
        }}
      >
        {cursorState === 'PROJECT' ? '•' : '+'}
      </motion.div>

      {/* 
        Floating Status Text Display adjacent to reticle
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block font-mono text-[7px] tracking-widest pl-5 pt-5"
        style={{
          x: cursorX,
          y: cursorY,
          color: cursorState === 'PROJECT' ? 'var(--color-accent-gold)' : cursorState === '3D_OBJECT' ? 'var(--color-accent-teal)' : 'var(--color-accent-blue)',
        }}
      >
        {cursorState === 'PROJECT' && <span>[VIEW_CASE_STUDY]</span>}
        {cursorState === '3D_OBJECT' && <span>[3D_COORDINATE_ACTIVE]</span>}
        {cursorState === 'LINK' && <span>[SYS.NAVIGATE]</span>}
      </motion.div>
    </>
  );
}
