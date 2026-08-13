import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu, Award as AwardIcon, CheckCircle, GraduationCap } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function Achievements() {
  const archiveTilt = useTilt({ max: 4, scale: 1.01 });

  const awards = [
    {
      title: 'IIT Bombay Finalist',
      event: 'IIT Bombay e-Yantra Competition',
      metric: 'Rank #29 of 4000+ Teams',
      desc: 'Finished as dynamic finalists in backend automation tasks.',
      type: 'competition'
    },
    {
      title: 'Hackathon 3rd Prize',
      event: 'Regional HackHazards \'26',
      metric: 'Health Companion AI',
      desc: 'Won 3rd prize for JeevanSetu AI regional translator client.',
      type: 'award'
    },
    {
      title: 'Cloud Computing Credential',
      event: 'SWAYAM NPTEL Certification',
      metric: 'Certified (Elite status)',
      desc: 'Completed academic courses on virtualization, storage, and cloud routing.',
      type: 'certificate'
    },
    {
      title: 'Solve For Tomorrow Participant',
      event: 'Samsung Tech Challenge',
      metric: 'National Entry',
      desc: 'Drafted community energy metrics ideas for venue space cooling.',
      type: 'competition'
    }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Heading & Digital Archives */}
        <div className="lg:col-span-4 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/5 text-xs font-semibold text-accent-gold tracking-wider w-fit">
              <Award size={12} className="animate-pulse" />
              <span>Digital Archive</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Achievements &amp; <span className="text-gradient">Credentials</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
              A futuristic archive wall cataloging certified software engineering capabilities, hackathons placement records, and technical challenges.
            </p>
          </div>
        </div>

        {/* Right Column: Grid Matrix Achievement Wall */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto pr-2 scrollbar-none">
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-5 rounded-xl border border-white/5 relative group text-left flex flex-col justify-between h-44 shadow-sm"
            >
              <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-1.5">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-text-muted uppercase">
                  <span>[TYPE.{item.type}]</span>
                  <span className="text-accent-gold font-bold">{item.metric}</span>
                </div>
                
                <h4 className="text-text-light font-black text-base group-hover:text-accent-gold transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-text-muted text-xs leading-relaxed font-sans mt-1">
                  {item.desc}
                </p>
              </div>

              {/* Tag event name */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-accent-blue border-t border-slate-850 pt-2.5">
                {item.type === 'award' && <AwardIcon size={12} />}
                {item.type === 'certificate' && <GraduationCap size={12} />}
                {item.type === 'competition' && <Cpu size={12} />}
                <span>{item.event}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
