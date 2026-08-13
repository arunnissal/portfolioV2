import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Check, Target } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function Experience() {
  const internshipTilt = useTilt({ max: 5, scale: 1.01 });
  const achievementsTilt = useTilt({ max: 5, scale: 1.01 });

  const internships = [
    {
      company: 'Pinesphere Solutions',
      role: 'Full Stack Developer Intern',
      duration: '04 August 2025 – 11 October 2025',
      points: [
        'Developed full-stack application modules using Python & Django.',
        'Structured databases and configured REST API communication payloads.',
        'Refined software production features and fixed debugging bottlenecks.'
      ],
    },
    {
      company: 'EliteCrows',
      role: 'Software Development Intern',
      duration: '15 May 2026 – 31 May 2026',
      points: [
        'Gained practical training in software build cycles.',
        'Analyzed and debugged operational workflow scripts.'
      ],
    },
  ];

  const achievements = [
    { title: 'IIT Bombay Finalist', text: 'Reached the finalist stage at an IIT Bombay event.' },
    { title: 'Hackathon 3rd Prize', text: 'Won 3rd prize in a regional competitive hackathon.' },
    { title: 'Competition Rank #29', text: 'Ranked 29th among 4,000+ competing engineering teams.' },
  ];

  const certifications = [
    { name: 'NPTEL Cloud Computing Course', provider: 'SWAYAM / NPTEL' },
    { name: 'College Placement Training', provider: 'Aptitude, Verbal, DSA & coding preparation' }
  ];

  const hackathons = [
    'HackHazards \'26', 'HackDevengers', 'HackWithAmypo', 
    'Rathinam College Hackathon', 'Samsung Solve for Tomorrow', 'IdeaForge'
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Section Title & Mission statement */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto scrollbar-none pr-2 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/35 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Briefcase size={12} className="animate-pulse text-accent-blue-hover" />
              <span>Career Progress</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight">Work &amp; Awards</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Demonstrated ability in building responsive software architectures, setting up relational schemas, and participating in engineering hackathons.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Always eager to contribute to production environments, troubleshoot bottlenecks, and work under deadlines.
            </p>
          </div>
        </div>

        {/* Right Column: Experience and Achievements cards */}
        <div className="lg:col-span-7 flex flex-col gap-6 max-h-[80vh] overflow-y-auto pr-2 scrollbar-none">
          
          {/* Timeline Experience Card */}
          <div 
            ref={internshipTilt.ref}
            style={internshipTilt.style}
            className="glass-card p-5 rounded-xl border border-white/50 relative overflow-hidden group shadow-sm text-left"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h4 className="text-text-light font-bold text-base mb-4 flex items-center gap-2 border-b border-slate-200/80 pb-2">
              <Briefcase size={16} className="text-accent-blue" />
              <span>Professional Internships</span>
            </h4>

            <div className="relative pl-4 border-l border-slate-300/40 space-y-5">
              {internships.map((job, idx) => (
                <div key={idx} className="relative font-mono">
                  <div className="absolute left-[-21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-blue border-2 border-primary-dark" />
                  <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-text-muted mb-0.5 gap-2 font-mono">
                    <span className="font-semibold text-accent-blue-hover">{job.company}</span>
                    <span>{job.duration}</span>
                  </div>
                  <h5 className="text-text-light font-extrabold text-sm md:text-base font-sans">{job.role}</h5>
                  <ul className="list-disc list-outside pl-4 space-y-1 mt-1.5 text-text-muted text-xs md:text-sm leading-relaxed font-sans">
                    {job.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div 
            ref={achievementsTilt.ref}
            style={achievementsTilt.style}
            className="glass-card p-5 rounded-xl border border-white/50 relative overflow-hidden group shadow-sm text-left"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h4 className="text-text-light font-bold text-base mb-4 flex items-center gap-2 border-b border-slate-200/80 pb-2">
              <Award size={18} className="text-accent-blue" />
              <span>Hackathon Milestones &amp; Credentials</span>
            </h4>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {achievements.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/40 border border-slate-200/50 flex gap-2 items-start hover:border-accent-blue-hover/30 transition-colors duration-350 shadow-sm">
                    <Award size={16} className="text-accent-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-text-light font-bold text-xs md:text-sm leading-tight">{item.title}</h5>
                      <p className="text-text-muted text-[10px] md:text-[11px] mt-1 leading-snug font-sans">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certs List */}
              <div className="pt-3 border-t border-slate-200/80">
                <h5 className="text-[11px] md:text-xs font-bold text-text-light uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Check size={14} className="text-accent-blue" />
                  <span>Certifications &amp; Training</span>
                </h5>
                <div className="space-y-1.5 pl-1">
                  {certifications.map((c, i) => (
                    <div key={i} className="flex gap-2 items-center text-xs md:text-sm">
                      <Check size={14} className="text-accent-blue" />
                      <span className="text-text-light font-medium">{c.name}</span>
                      <span className="text-text-muted text-[10px] md:text-[11px] font-mono">({c.provider})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hackathon labels */}
              <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                <h5 className="text-[11px] md:text-xs font-bold text-text-light uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Target size={14} className="text-accent-blue" />
                  <span>Hackathons Participated</span>
                </h5>
                <div className="flex flex-wrap gap-1">
                  {hackathons.map((h) => (
                    <span key={h} className="text-[10px] px-2 py-0.5 rounded bg-slate-200 border border-slate-300/30 text-text-muted font-mono">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
