import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    'INITIALIZING SYSTEM...',
    'LOADING PROJECTS...',
    'LOADING EXPERIENCE...',
    'SYSTEM READY.'
  ];

  useEffect(() => {
    // Progress counter animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500); // Small buffer before fade out
          return 100;
        }
        // Random increments for authentic loading feel
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    // Text log cycling
    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050508] flex flex-col items-center justify-center font-mono select-none">
      <div className="w-full max-w-sm px-6 space-y-6 text-left">
        
        {/* Glowing circular tech emblem */}
        <div className="flex justify-center mb-2">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Spinning Gold ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-gold/40 animate-spin" style={{ animationDuration: '6s' }} />
            {/* Reverse Spinning Cyan ring */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-accent-blue/50 animate-reverse-spin" style={{ animationDuration: '4s' }} />
            {/* Tech bracket icon */}
            <span className="text-xs font-black text-accent-blue font-mono">&lt;/&gt;</span>
          </div>
        </div>

        {/* Diagnostic Logs console */}
        <div className="p-4 rounded-xl border border-slate-800 bg-[#0e0f14]/50 backdrop-blur-md min-h-[95px] flex flex-col justify-end text-[10px] md:text-[11px] text-text-muted space-y-1 shadow-sm leading-snug">
          {logs.slice(0, logIndex + 1).map((log, i) => (
            <div key={i} className="flex gap-1.5 items-start">
              <span className="text-accent-blue">✓</span>
              <span className="text-text-light font-mono font-bold tracking-wider">{log}</span>
            </div>
          ))}
        </div>

        {/* Loading Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px] md:text-[11px] text-text-muted font-bold font-mono">
            <span>PIPELINE_INIT</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          <div className="w-full h-[3px] bg-slate-900 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent-blue via-accent-gold to-accent-purple shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
