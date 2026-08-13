import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Cpu, Terminal as TermIcon } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import ThreeDPhoto from './ThreeDPhoto';
import useTilt from '../hooks/useTilt';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const consoleTilt = useTilt({ max: 6, scale: 1.01 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-screen flex items-center justify-start relative pt-24 pb-8 px-6 md:pt-28 overflow-hidden w-screen">
      {/* 
        The main content wrapper is locked within the max-w bounds, 
        leaving the right-hand side of the page free for the full-height corner portrait.
      */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Column: Heading, Bio, CTAs, Terminal & Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center space-y-4 text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 w-fit">
            <Cpu className="text-accent-blue animate-pulse" size={12} />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-accent-blue">Developer Pipeline Active</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-light leading-none">
            Hi, I'm <span className="text-gradient font-black">Arunnissal B</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-bold text-text-muted font-mono flex items-center gap-2">
            <TermIcon className="text-accent-blue" size={22} />
            <span>&gt; Full Stack | Python Django Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-text-muted max-w-xl text-sm md:text-base leading-relaxed font-sans">
            Computer Science student passionate about building practical, user-focused software solutions. Specializing in backend databases, API development, and responsive interfaces.
          </motion.p>

          {/* CTA Buttons & Social Icons inline to save vertical space */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="/resume.pdf"
              download="Arunnissal_B_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-accent-blue/15 hover:shadow-accent-blue-hover/30 transform hover:-translate-y-0.5"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-200 hover:border-accent-blue text-text-light hover:text-accent-blue bg-white/40 hover:bg-accent-blue/5 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent-blue" />
            </a>

            {/* Inline Social Icons separator */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 h-6">
              <a 
                href="https://github.com/arunnissal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full border border-slate-200 bg-white/40 hover:bg-accent-blue/10 hover:text-accent-blue transition-all duration-300 shadow-sm hover:shadow-accent-blue/10 cursor-pointer"
                title="GitHub"
              >
                <Github size={14} />
              </a>
              <a 
                href="https://linkedin.com/in/arunnissal-b-3a8a33328" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full border border-slate-200 bg-white/40 hover:bg-accent-blue/10 hover:text-accent-blue transition-all duration-300 shadow-sm hover:shadow-accent-blue/10 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </motion.div>

          {/* Mock IDE Console - Compact light glassmorphism container */}
          <motion.div 
            ref={consoleTilt.ref}
            style={consoleTilt.style}
            variants={itemVariants}
            className="w-full max-w-xl font-mono text-[11px] md:text-[12px] text-text-muted glass-card rounded-lg overflow-hidden shadow-md mt-1 select-none"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100/50 border-b border-slate-200/55">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-blue-hover/80 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent-blue/60" />
                <span className="w-2 h-2 rounded-full bg-accent-gold/60" />
              </div>
              <span className="text-[9px] text-accent-blue font-bold font-mono tracking-widest">[SYSTEM.ENV_BOOT]</span>
              <span className="text-[9px] text-accent-blue-hover font-mono font-bold">STATUS: ONLINE</span>
            </div>
            <div className="p-3 space-y-1.5 text-left leading-relaxed">
              <div><span className="text-sky-600 font-semibold">class</span> <span className="text-sky-800 font-bold">Developer</span>:</div>
              <div className="pl-4"><span className="text-slate-800">name</span> = <span className="text-amber-800">"Arunnissal B"</span></div>
              <div className="pl-4"><span className="text-slate-800">role</span> = <span className="text-amber-800">"Full Stack Developer"</span></div>
              <div className="pl-4"><span className="text-slate-800">stack</span> = [<span className="text-amber-800">"React"</span>, <span className="text-amber-800">"Django"</span>, <span className="text-amber-800">"PostgreSQL"</span>, <span className="text-amber-800">"Spring Boot"</span>]</div>
              <div className="pl-4"><span className="text-slate-800">cgpa</span> = <span className="text-emerald-700 font-bold">8.49</span></div>
              <div className="pl-4"><span className="text-sky-600 font-semibold">def</span> <span className="text-sky-800">get_status</span>(<span className="text-orange-600">self</span>):</div>
              <div className="pl-8"><span className="text-sky-600 font-semibold">return</span> <span className="text-amber-800">"Available for Internships"</span></div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Right Column: Editorial Portrait - Placed absolutely to sit flush in the bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute right-0 bottom-0 h-[80vh] md:h-[85vh] lg:h-[90vh] w-[35%] lg:w-[30%] hidden lg:flex justify-end items-end select-none z-0 pointer-events-none"
      >
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-full flex justify-end items-end overflow-visible pointer-events-auto"
        >
          {/* Holographic HUD Overlay Indicators - Floating next to the cut-out image */}
          <div className={`absolute top-[25%] left-[-30px] text-[8px] font-mono bg-white/90 border border-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded transition-opacity duration-300 z-20 shadow-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            [SYS.ACTIVE]
          </div>
          <div className={`absolute top-[35%] left-[-30px] text-[8px] font-mono bg-white/90 border border-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded transition-opacity duration-300 z-20 shadow-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            [CGPA.8.49]
          </div>
          <div className={`absolute top-[45%] left-[-30px] text-[8px] font-mono bg-white/90 border border-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded transition-opacity duration-300 z-20 shadow-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            [LOC.INDIA]
          </div>
          <div className={`absolute top-[55%] left-[-30px] text-[8px] font-mono bg-white/90 border border-slate-200/70 text-slate-800 px-1.5 py-0.5 rounded transition-opacity duration-300 z-20 shadow-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            [DEV.READY]
          </div>

          {/* Faint ambient color backdrops */}
          <div className="absolute w-72 h-[350px] rounded-full bg-accent-blue/5 blur-[50px] -z-10 right-0 bottom-0 animate-pulse animate-glow-pulse" />
          <div className="absolute w-80 h-[400px] rounded-full bg-accent-blue-hover/5 blur-[60px] -z-10 right-0 bottom-0" style={{ animationDelay: '-2s' }} />
          
          {/* Laser Scanner Effect - Visible ONLY when hovered */}
          {isHovered && <div className="absolute right-0 w-[80%] laser-scan z-15 pointer-events-none" style={{ bottom: '10%' }} />}
          
          {/* The cut-out portrait picture inside ThreeDPhoto */}
          <ThreeDPhoto isHovered={isHovered} />
        </div>
      </motion.div>
    </section>
  );
}
