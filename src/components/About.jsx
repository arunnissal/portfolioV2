import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Terminal as TermIcon, Award, Cpu, BookOpen, Layers } from 'lucide-react';
import useTilt from '../hooks/useTilt';

function CountUp({ to, duration = 1.2 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(to);
    if (isNaN(end) || end <= 0) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16); // cap to at least 1 frame duration (16ms)
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, to, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function About() {
  const containerTilt = useTilt({ max: 4, scale: 1.01 });

  const stats = [
    { label: 'Projects Built', value: '8', icon: <Layers size={18} className="text-accent-blue" /> },
    { label: 'Technologies', value: '15', suffix: '+', icon: <Cpu size={18} className="text-accent-gold" /> },
    { label: 'Hackathons Joined', value: '6', icon: <Award size={18} className="text-accent-purple" /> },
    { label: 'Software Internships', value: '2', icon: <TermIcon size={18} className="text-accent-teal" /> },
    { label: 'Certifications', value: '2', icon: <BookOpen size={18} className="text-accent-blue" /> }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Short introduction, Education & Developer Philosophy */}
        <div className="lg:col-span-6 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Cpu size={12} className="animate-pulse" />
              <span>Developer Profile</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light tracking-tight">
              I Engineer Experiences &amp; <span className="text-gradient">Build Real Software.</span>
            </h3>
          </div>

          <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
            I'm Arunnissal B, a Computer Science and Engineering student at Dr. NGP Institute of Technology (CGPA: 8.49). I prefer building things, breaking them, deploying them, and understanding how they work.
          </p>

          <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
            My strongest focus is backend logic and systems engineering, especially designing APIs, validating workflows, and optimizing PostgreSQL databases.
          </p>

          {/* Dev Philosophy Box */}
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/10 backdrop-blur-md space-y-2">
            <h4 className="text-xs font-mono font-bold text-accent-blue flex items-center gap-1.5 uppercase tracking-widest">
              <Target size={14} className="text-accent-teal" />
              <span>Core Philosophy</span>
            </h4>
            <p className="text-text-light font-mono text-sm leading-relaxed italic pl-5 border-l-2 border-accent-blue/50">
              "Learn → Build → Deploy → Understand."
            </p>
          </div>
        </div>

        {/* Right Column: Interactive 3D/CSS stats grid & rotating nodes visualization */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-center justify-center">
          
          {/* Holographic Stats Grid Card */}
          <div 
            ref={containerTilt.ref}
            style={containerTilt.style}
            className="w-full glass-card p-5 rounded-2xl border border-white/5 shadow-2xl relative group"
          >
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h4 className="text-text-light font-bold text-sm font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
              <Cpu size={16} className="text-accent-blue" />
              <span>Telemetry Statistics</span>
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40 hover:border-slate-700/50 transition-all duration-300 shadow-sm text-center flex flex-col justify-between items-center h-28"
                >
                  <div className="p-2 rounded-lg bg-white/5 mb-1 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-text-light font-mono">
                    <CountUp to={stat.value} />
                    {stat.suffix && <span className="text-accent-blue">{stat.suffix}</span>}
                  </div>
                  <div className="text-[10px] text-text-muted font-sans font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Glowing orbital background visual node representation */}
          <div className="w-full h-16 flex items-center justify-center gap-6 opacity-30 select-none pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-accent-blue to-accent-gold" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-pulse" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-accent-gold to-accent-purple" />
            <div className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
          </div>

        </div>

      </div>
    </section>
  );
}
