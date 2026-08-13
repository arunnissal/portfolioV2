import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, CheckCircle, Target, Compass, Sparkles } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function Experience() {
  const goalsTilt = useTilt({ max: 5, scale: 1.01 });

  const internships = [
    {
      company: 'Pinesphere Solutions',
      role: 'Full Stack Developer Intern',
      duration: '04 August 2025 – 11 October 2025',
      tech: ['Python', 'Django', 'REST Framework', 'PostgreSQL'],
      points: [
        'Structured databases and configured REST API communication payloads.',
        'Refined software production features and fixed debugging bottlenecks.'
      ],
      outcomes: 'Optimized Django query structures to reduce API payload serialization overhead.'
    },
    {
      company: 'EliteCrows',
      role: 'Software Development Intern',
      duration: '15 May 2026 – 31 May 2026',
      tech: ['Java', 'Workflow Automation', 'Git Version Control'],
      points: [
        'Gained practical training in software build cycles.',
        'Analyzed and debugged operational workflow scripts.'
      ],
      outcomes: 'Learned systematic release flows and build pipelines.'
    },
  ];

  const roadmapSteps = [
    { phase: '01 / LEARN', detail: 'Master Java/Python DSA, database indexing, and query patterns.' },
    { phase: '02 / BUILD', detail: 'Construct full-stack REST API architectures and modular interfaces.' },
    { phase: '03 / DEPLOY', detail: 'Publish APIs on Render, hosting clients on Vercel with HTTPS setups.' },
    { phase: '04 / OPTIMIZE', detail: 'Benchmark SQL database triggers, network payloads, and R3F canvases.' }
  ];

  // Animation variants
  const timelineCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Title & Career Vision Roadmap */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto scrollbar-none pr-2 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/35 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Briefcase size={12} className="animate-pulse" />
              <span>Career Roadmap</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Timeline &amp; <span className="text-gradient">Experience</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
              Practical experience working in team development environments, drafting API endpoints, and configuring database schemas.
            </p>
          </div>

          {/* Core Roadmap Steps */}
          <div 
            ref={goalsTilt.ref}
            style={goalsTilt.style}
            className="glass-card p-4 rounded-xl border border-white/5 space-y-3 mt-4 group"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h4 className="text-text-light font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
              <Compass size={14} className="text-accent-teal" />
              <span>Philosophy Roadmap</span>
            </h4>
            <div className="space-y-2">
              {roadmapSteps.map((step, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-xs font-mono">
                  <span className="text-accent-blue font-bold whitespace-nowrap">{step.phase}</span>
                  <span className="text-text-muted leading-tight font-sans text-[11px] md:text-xs">{step.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Animated Milestones Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-6 max-h-[80vh] overflow-y-auto pr-2 scrollbar-none relative pl-6 border-l border-slate-800/80">
          
          {internships.map((job, idx) => (
            <motion.div
              key={idx}
              variants={timelineCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-5 rounded-xl border border-white/5 relative overflow-hidden group shadow-sm text-left"
            >
              <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Bullet circle connection to left line */}
              <div className="absolute left-[-31px] top-6 w-3 h-3 rounded-full bg-accent-blue border-2 border-[#050508] z-20 shadow-md group-hover:scale-125 transition-transform duration-300" />
              
              <div className="flex flex-wrap items-center justify-between text-xs text-accent-blue mb-1 gap-2 font-mono">
                <span className="font-bold uppercase tracking-wider bg-accent-blue/5 border border-accent-blue/20 px-2 py-0.5 rounded">{job.company}</span>
                <span className="text-text-muted">{job.duration}</span>
              </div>
              
              <h5 className="text-text-light font-extrabold text-base md:text-lg font-sans mt-1.5">{job.role}</h5>
              
              {/* Responsibilities list */}
              <ul className="list-disc list-outside pl-4 space-y-1.5 mt-2.5 text-text-muted text-xs md:text-sm leading-relaxed font-sans">
                {job.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>

              {/* Technologies Pill Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-850">
                {job.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-text-muted font-mono">{t}</span>
                ))}
              </div>

              {/* Key outcomes detail */}
              <div className="flex gap-2 items-start mt-3 pt-2 text-xs">
                <CheckCircle size={14} className="text-accent-teal flex-shrink-0 mt-0.5" />
                <span className="text-text-light italic font-sans"><span className="text-accent-teal font-semibold font-mono not-italic uppercase text-[10px] tracking-wide mr-1">[OUTCOME]:</span>{job.outcomes}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
