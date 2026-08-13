import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cpu, Compass, BookOpen, Layers, CheckCircle } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function BuildLog() {
  const exploringTilt = useTilt({ max: 5, scale: 1.01 });

  const logEntries = [
    {
      date: 'January 2026',
      title: 'JeevanSetu AI & HackHazards',
      desc: 'Coded health companion app. Integrated Sarvam translation API for Tamil medical logs. Won 3rd prize at HackHazards regional hackathon.'
    },
    {
      date: 'October 2025',
      title: 'Pinesphere Intern Completion',
      desc: 'Completed full-stack internship. Refactored DRF serializers to improve serialization payload response times.'
    },
    {
      date: 'August 2025',
      title: 'Pinesphere Backend Internship',
      desc: 'Started as Django intern. Structured relational Postgres tables, draft endpoints, and set up schema validations.'
    },
    {
      date: 'May 2025',
      title: 'Seminar Hall Database Engine',
      desc: 'Designed Dr. NGP IT space reserve calendar portal. Implemented row locking to prevent overlapping reservations.'
    }
  ];

  const exploringTopics = [
    { name: 'Artificial Intelligence', progress: 'Evolving Area', note: 'Integrating regional API translation models.' },
    { name: 'Machine Learning', progress: 'Foundations', note: 'Exploring predictive datasets classification.' },
    { name: 'Deep Learning / LLMs', progress: 'Foundations', note: 'Configuring custom prompt blocks and contextual text logic.' },
    { name: 'DevOps & Pipelines', progress: 'Evolving Area', note: 'Structuring automatic Vercel releases and GitHub actions workflows.' }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Build Log Timeline (Journal) */}
        <div className="lg:col-span-7 space-y-4 text-left pr-2 max-h-[80vh] overflow-y-auto scrollbar-none">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Calendar size={12} className="animate-pulse" />
              <span>Engineering Journal</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Build <span className="text-gradient">Log</span></h3>
            <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans">
              A chronological log of my development builds, code milestones, and system deployments.
            </p>
          </div>

          <div className="space-y-3.5 pl-3 border-l border-slate-800 relative">
            {logEntries.map((entry, idx) => (
              <div key={idx} className="relative group text-left">
                {/* Connector bullet */}
                <div className="absolute left-[-17.5px] top-1.5 w-2 h-2 rounded-full bg-accent-blue border border-[#050508]" />
                <span className="text-[10px] font-mono font-bold text-accent-blue bg-accent-blue/5 border border-accent-blue/20 px-1.5 py-0.5 rounded">{entry.date}</span>
                <h4 className="text-sm font-bold text-text-light mt-1.5 font-sans group-hover:text-accent-blue transition-colors duration-300">{entry.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed font-sans mt-0.5">{entry.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Currently Exploring */}
        <div 
          ref={exploringTilt.ref}
          style={exploringTilt.style}
          className="lg:col-span-5 w-full glass-card p-5 rounded-xl border border-white/5 shadow-2xl relative group text-left"
        >
          <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="space-y-4">
            <div className="space-y-1.5 border-b border-slate-850 pb-2.5">
              <span className="text-[10px] font-bold text-accent-gold font-mono tracking-widest block uppercase">[RESEARCH_FOCUS]</span>
              <h4 className="text-xl font-black text-text-light">Currently Exploring</h4>
              <p className="text-text-muted text-xs font-sans">
                Evolving research areas and technical concepts I am actively experimenting with.
              </p>
            </div>

            <div className="space-y-3">
              {exploringTopics.map((topic, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/40 border border-slate-850/50 space-y-1 hover:border-accent-gold/20 transition-all duration-300 shadow-sm">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-text-light font-sans">{topic.name}</span>
                    <span className="text-[9px] font-mono bg-accent-gold/10 text-accent-gold border border-accent-gold/20 px-1.5 py-0.5 rounded font-bold uppercase">{topic.progress}</span>
                  </div>
                  <p className="text-[11px] text-text-muted leading-snug font-sans pl-1.5 border-l border-slate-800">{topic.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
