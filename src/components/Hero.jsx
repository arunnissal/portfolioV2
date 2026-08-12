import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Cpu, Terminal as TermIcon } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import ThreeDPhoto from './ThreeDPhoto';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

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
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-28 pb-12 px-6 overflow-hidden w-screen">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Column: Heading, Bio, CTAs & Mock IDE Terminal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 w-fit">
            <Cpu className="text-accent-blue animate-pulse" size={14} />
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-blue">Developer Pipeline Active</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
            Hi, I'm <span className="text-gradient font-black">Arunnissal B</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-text-muted font-mono flex items-center gap-2">
            <TermIcon className="text-accent-blue-hover" size={26} />
            <span>&gt; Full Stack | Python Django Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            Computer Science student passionate about building practical, user-focused software solutions. Specializing in backend databases, API development, and responsive interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              download="Arunnissal_B_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold transition-all duration-300 shadow-lg shadow-accent-blue/15 hover:shadow-accent-blue-hover/30 transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 hover:border-accent-blue/30 text-text-light hover:text-white bg-white/5 hover:bg-accent-blue/5 font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-white" />
            </a>
          </motion.div>

          {/* Mock IDE Console - Neon Glassmorphism style */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-2xl font-mono text-[12.5px] md:text-[13.5px] text-text-muted glass-card rounded-xl overflow-hidden shadow-2xl mt-4 select-none"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-black/45 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-blue-hover/80 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-blue/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold/60" />
              </div>
              <span className="text-[10px] text-accent-blue font-bold font-mono tracking-widest">[SYSTEM.ENV_BOOT]</span>
              <span className="text-[10px] text-accent-blue-hover font-mono font-bold">STATUS: ONLINE</span>
            </div>
            <div className="p-4 space-y-2 text-left leading-relaxed">
              <div><span className="text-accent-blue-hover">class</span> <span className="text-accent-blue">Developer</span>:</div>
              <div className="pl-4"><span className="text-accent-blue">name</span> = <span className="text-amber-200">"Arunnissal B"</span></div>
              <div className="pl-4"><span className="text-accent-blue">role</span> = <span className="text-amber-200">"Full Stack Developer"</span></div>
              <div className="pl-4"><span className="text-accent-blue">stack</span> = [<span className="text-amber-200">"React"</span>, <span className="text-amber-200">"Django"</span>, <span className="text-amber-200">"PostgreSQL"</span>, <span className="text-amber-200">"Spring Boot"</span>]</div>
              <div className="pl-4"><span className="text-accent-blue">cgpa</span> = <span className="text-emerald-400">8.49</span></div>
              <div className="pl-4"><span className="text-accent-blue-hover">def</span> <span className="text-accent-blue">get_status</span>(<span className="text-orange-300">self</span>):</div>
              <div className="pl-8"><span className="text-accent-blue-hover">return</span> <span className="text-amber-200">"Available for Internships"</span></div>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2 text-text-muted">
            <a href="https://github.com/arunnissal" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/arunnissal-b-3a8a33328" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Holographic floating concentric elements & ThreeDPhoto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Floating glowing orbits in Cyan and Pink */}
          <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] border border-accent-blue/10 rounded-full pointer-events-none orbit-ring-1 -z-10 flex items-center justify-center">
            <div className="w-[95%] h-[95%] border border-dashed border-accent-blue-hover/5 rounded-full" />
          </div>
          <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] border border-dashed border-accent-teal/10 rounded-full pointer-events-none orbit-ring-2 -z-10" />
          
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-68 h-88 md:w-80 md:h-[400px] flex items-center justify-center overflow-visible group"
          >
            {/* Holographic HUD Overlay Indicators - Floating tightly around the portrait photo on hover */}
            <div className={`absolute top-[4px] left-[6%] text-[8px] font-mono bg-black/85 px-1.5 py-0.5 rounded border border-accent-blue/30 text-accent-blue transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              [SYS.ACTIVE]
            </div>
            <div className={`absolute top-[4px] right-[6%] text-[8px] font-mono bg-black/85 px-1.5 py-0.5 rounded border border-accent-blue-hover/30 text-accent-blue-hover transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              [CGPA.8.49]
            </div>
            <div className={`absolute bottom-[4px] left-[6%] text-[8px] font-mono bg-black/85 px-1.5 py-0.5 rounded border border-accent-blue-hover/30 text-accent-blue-hover transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              [LOC.INDIA]
            </div>
            <div className={`absolute bottom-[4px] right-[6%] text-[8px] font-mono bg-black/85 px-1.5 py-0.5 rounded border border-accent-blue/30 text-accent-blue transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              [DEV.READY]
            </div>

            {/* Glowing neon backdrops */}
            <div className="absolute w-60 h-[300px] rounded-full bg-accent-blue/5 blur-[40px] -z-10 animate-pulse" />
            <div className="absolute w-68 h-[340px] rounded-full bg-accent-blue-hover/5 blur-[50px] -z-10" style={{ animationDelay: '-2s' }} />
            
            {/* Laser Scanner Effect - Visible ONLY when hovered, scaled to match the portrait height/width */}
            {isHovered && <div className="absolute left-[6%] w-[calc(100%-12%)] laser-scan z-15 pointer-events-none" />}
            
            {/* ThreeDPhoto Canvas floats borderless in space */}
            <ThreeDPhoto isHovered={isHovered} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
