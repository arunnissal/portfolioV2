import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu, Award as AwardIcon, CheckCircle, GraduationCap, Star } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function Achievements() {
  const majorAwards = [
    {
      title: 'IIT Bombay e-Yantra Finalist',
      event: 'National Robotics & Backend Automation Competition',
      metric: 'Rank #29 of 4000+ Teams',
      desc: 'Coded advanced systems backend structures. Reached the final stage of e-Yantra among top engineering groups across India.',
      type: 'competition'
    },
    {
      title: 'Hackathon 3rd Prize Winner',
      event: 'Regional HackHazards \'26',
      metric: 'JeevanSetu AI Health System',
      desc: 'Developed clinical backend translators in Python/Django REST. Awarded 3rd place for community healthcare automation.',
      type: 'award'
    }
  ];

  const minorArchive = [
    {
      title: 'Cloud Computing Credential',
      event: 'SWAYAM NPTEL (Elite Category)',
      desc: 'Virtualization, network routing, and storage schemas.',
      type: 'certificate'
    },
    {
      title: 'Samsung Solve For Tomorrow',
      event: 'National Tech Entry Challenge',
      desc: 'Drafted thermal coordinate automation plans for sports venues.',
      type: 'recognition'
    },
    {
      title: 'Advanced Aptitude & DSA Program',
      event: 'Placement Training Certification',
      desc: 'Rigorous course on data structures, algorithmic complexities, and SQL queries.',
      type: 'certificate'
    }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/5 text-xs font-semibold text-accent-gold tracking-wider w-fit">
              <Award size={12} className="animate-pulse" />
              <span>Digital Archive</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Achievements &amp; <span className="text-gradient">Credentials</span></h3>
            <p className="text-text-muted text-sm leading-relaxed font-sans font-medium">
              A curated archive showcasing hackathon honors and professional course certifications. Hierarchy demonstrates major career milestones.
            </p>
          </div>
        </div>

        {/* Right Column: Hierarchical Achievement Wall */}
        <div className="lg:col-span-8 space-y-6 max-h-[80vh] overflow-y-auto pr-2 scrollbar-none">
          
          {/* Major Achievements (Hackathons/Awards - Large Cards) */}
          <div className="space-y-3 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent-gold uppercase pl-1">[MAJOR_HONORS]</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {majorAwards.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-xl border-l-4 border-accent-gold relative group flex flex-col justify-between h-48 shadow-lg bg-slate-900/40"
                >
                  <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-text-muted uppercase">
                      <span>[RANKING]</span>
                      <span className="text-accent-gold font-bold flex items-center gap-1">
                        <Star size={10} className="fill-accent-gold" />
                        {item.metric}
                      </span>
                    </div>
                    
                    <h5 className="text-text-light font-black text-base group-hover:text-accent-gold transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-text-muted text-[11px] md:text-xs leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent-blue border-t border-slate-850 pt-2.5">
                    <AwardIcon size={12} />
                    <span>{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Minor Achievements (Certifications/Recognitions - Compact Cards) */}
          <div className="space-y-3 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase pl-1">[CERTIFICATIONS_&_RECOGNITION]</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {minorArchive.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card p-4 rounded-lg border border-white/5 relative group flex flex-col justify-between h-36 shadow-sm bg-slate-900/30"
                >
                  <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono tracking-widest text-text-muted uppercase block">[{item.type}]</span>
                    <h5 className="text-text-light font-bold text-xs leading-tight group-hover:text-accent-blue transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-text-muted text-[10px] leading-snug font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] font-mono text-accent-teal border-t border-slate-850/60 pt-2 mt-1">
                    {item.type === 'certificate' ? <GraduationCap size={10} /> : <Cpu size={10} />}
                    <span className="truncate">{item.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
