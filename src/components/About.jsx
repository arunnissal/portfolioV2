import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Terminal as TermIcon, Award, Cpu, BookOpen, Layers, Compass, Play } from 'lucide-react';
import useTilt from '../hooks/useTilt';
import ThreeDPhoto from './ThreeDPhoto';

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
    { label: 'Projects Built', value: '8', icon: <Layers size={14} className="text-accent-blue" /> },
    { label: 'Technologies', value: '15', suffix: '+', icon: <Cpu size={14} className="text-accent-gold" /> },
    { label: 'Hackathons Joined', value: '6', icon: <Award size={14} className="text-accent-purple" /> },
    { label: 'Software Internships', value: '2', icon: <TermIcon size={14} className="text-accent-teal" /> },
    { label: 'Certifications', value: '2', icon: <BookOpen size={14} className="text-accent-blue" /> }
  ];

  const narrative = [
    {
      title: 'WHAT I BUILD',
      desc: 'Production-oriented full-stack web platforms and backend services designed for execution speed, atomic security locks, and clean interfaces.',
      color: 'border-accent-blue'
    },
    {
      title: 'WHAT I EXPLORE',
      desc: 'Artificial Intelligence systems, regional language LLM translations, and modern cloud deployment pipelines.',
      color: 'border-accent-gold'
    },
    {
      title: 'HOW I WORK',
      desc: 'Build → Test → Deploy → Iterate. Grounded in systematic schema designs and continuous benchmarking of SQL tables.',
      color: 'border-accent-purple'
    }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Structured narrative block */}
        <div className="lg:col-span-7 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Cpu size={12} className="animate-pulse" />
              <span>Developer Profile</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light tracking-tight">
              I Engineer Experiences &amp; <span className="text-gradient">Build Real Software.</span>
            </h3>
            <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans max-w-xl">
              I'm Arunnissal B, a Computer Science and Engineering student at Dr. NGP Institute of Technology (CGPA: 8.49). I prefer building things, breaking them, deploying them, and understanding how they work.
            </p>
          </div>

          {/* Narrative sections */}
          <div className="space-y-3 pt-2">
            {narrative.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-lg border-l-2 ${item.color} bg-slate-900/30 backdrop-blur-md space-y-1`}
              >
                <h4 className="text-[10px] font-mono font-bold tracking-widest text-text-light">{item.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Combined Portrait Photo & Telemetry Stats Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4 items-center justify-center max-h-[80vh] overflow-y-auto scrollbar-none">
          
          {/* Portrait Photo Container - compact styled card */}
          <div className="relative w-full max-h-[220px] overflow-hidden rounded-xl border border-white/5 bg-slate-900/10 flex items-center justify-center p-2 group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10 pointer-events-none" />
            <ThreeDPhoto isHovered={true} />
          </div>

          {/* Telemetry Stats Grid Card with Glare */}
          <div 
            ref={containerTilt.ref}
            style={containerTilt.style}
            className="w-full glass-card p-4 rounded-xl border border-white/5 shadow-2xl relative group"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h4 className="text-text-light font-bold text-xs font-mono uppercase tracking-wider mb-3 border-b border-slate-850 pb-1.5 flex items-center gap-1.5">
              <Cpu size={14} className="text-accent-blue" />
              <span>Telemetry Statistics</span>
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-lg bg-slate-900/40 border border-slate-850/40 hover:border-slate-700/50 transition-all duration-300 shadow-sm text-center flex flex-col justify-between items-center h-22"
                >
                  <div className="p-1 rounded bg-white/5 mb-0.5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-black text-text-light font-mono leading-none">
                    <CountUp to={stat.value} />
                    {stat.suffix && <span className="text-accent-blue text-xs">{stat.suffix}</span>}
                  </div>
                  <div className="text-[8px] text-text-muted font-sans font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
