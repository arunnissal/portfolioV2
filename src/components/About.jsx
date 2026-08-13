import React from 'react';
import { GraduationCap, Flame } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function About() {
  const educationTilt = useTilt({ max: 5, scale: 1.01 });

  const education = [
    {
      institution: 'Dr. NGP Institute of Technology',
      degree: 'B.E. Computer Science and Engineering',
      duration: '2024 - 2028',
      grade: 'CGPA: 8.49 | No History of Arrears',
    }
  ];

  const focusPath = [
    'Python', 'Backend Engineering', 'Django & APIs', 
    'Databases & System Design', 'Artificial Intelligence', 
    'LLMs & Production AI'
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Summary & Focus */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-center text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/35 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Flame size={12} className="animate-pulse text-accent-blue-hover" />
              <span>Professional Profile</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight font-sans">My Journey &amp; Focus</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              I'm Arunnissal B, a Computer Science and Engineering student at Dr. NGP Institute of Technology. I prefer building things, breaking them, deploying them, and understanding how they work.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              My strongest focus is backend logic and systems engineering, especially designing APIs, validating workflows, and optimizing PostgreSQL databases.
            </p>
          </div>

          {/* Focus Path */}
          <div className="space-y-2 pt-2">
            <h4 className="text-text-light text-[11px] font-bold uppercase tracking-wider font-mono">Current Focus Path</h4>
            <div className="flex flex-wrap gap-1">
              {focusPath.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[10px] md:text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-200/70 border border-slate-300/40 text-text-light font-mono hover:border-accent-blue-hover/30 transition-colors">
                    {step}
                  </span>
                  {idx < focusPath.length - 1 && <span className="text-accent-blue text-[10px] font-mono">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Academic Foundation card */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div 
            ref={educationTilt.ref}
            style={educationTilt.style}
            className="glass-card p-6 rounded-xl border border-white/50 relative overflow-hidden group shadow-sm text-left w-full"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h4 className="text-text-light font-bold text-lg mb-4 flex items-center gap-2 border-b border-slate-200/80 pb-2">
              <GraduationCap size={20} className="text-accent-blue" />
              <span>Academic Foundation</span>
            </h4>

            <div className="relative pl-4 border-l border-slate-300/40 space-y-4 font-mono">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute left-[-25px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-blue border-2 border-primary-dark" />
                  <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-text-muted mb-0.5 gap-2 font-mono">
                    <span className="font-bold text-text-light">{edu.institution}</span>
                    <span>{edu.duration}</span>
                  </div>
                  <h5 className="text-text-light font-extrabold text-sm md:text-base font-sans">{edu.degree}</h5>
                  <div className="text-accent-blue-hover text-xs md:text-sm font-mono mt-1.5 font-bold">{edu.grade}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
