import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Cpu, Terminal as TermIcon, Compass } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import SystemCoreCanvas from './SystemCoreCanvas';
import useTilt from '../hooks/useTilt';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const consoleTilt = useTilt({ max: 6, scale: 1.01 });

  // Interactive CLI Terminal Console State
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initializing secure portfolio shell v2.0...' },
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Commands: [about], [skills], [cgpa], [projects], [contact], [clear], [sudo]' }
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

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

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();
    let response = '';

    switch (lowerCmd) {
      case 'help':
        response = 'Commands: [about], [skills], [cgpa], [projects], [contact], [clear], [sudo]';
        break;
      case 'about':
        response = 'Arunnissal B - B.E. Computer Science student & Backend Engineer. Focus on Python, Django, PostgreSQL, and building production-ready systems.';
        break;
      case 'skills':
        response = 'Languages: Python, Java, JavaScript. Web: Django REST, React, React Native, Spring Boot. DB: PostgreSQL, SQLite.';
        break;
      case 'cgpa':
        response = 'College: Dr. NGP Institute of Technology | Current CGPA: 8.49 | History of Arrears: None';
        break;
      case 'projects':
        response = 'Completed: [JeevanSetu AI], [Seminar Booking System], [UrbanEye], [Nexus AI], [Dry-Fruits Store]';
        break;
      case 'contact':
        response = 'Email: arunnissal45@gmail.com | Phone: +91 9361572429 | Tamil Nadu, India';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'sudo':
      case 'sudo hack':
      case 'secret':
        response = '[ACCESS GRANTED] Deploying Avengers tech protocol... Arunnissal B is ready for full-stack deployment!';
        break;
      default:
        response = `bash: command not found: "${cmd}". Type "help" for active links.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: response }
    ]);
    setInputVal('');
  };

  // Auto-scroll terminal logs to the bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const focusTerminalInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-start relative pt-24 pb-8 px-6 md:pt-28 overflow-hidden w-screen">
      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Column: Heading, Bio, CTAs, Terminal & Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 w-fit">
            <Cpu className="text-accent-blue animate-pulse" size={12} />
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent-blue font-mono">Software Engineer × AI Engineer</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-text-light leading-tight">
            I build systems that <span className="text-gradient font-black">turn ideas into real products.</span>
          </motion.h1>

          {/* Supporting paragraph explaining full-stack, AI-powered and production-oriented apps */}
          <motion.p variants={itemVariants} className="text-text-muted max-w-xl text-sm md:text-base leading-relaxed font-sans">
            I specialize in full-stack engineering, production AI integration, and robust database architectures. I focus on writing clean, scalable backend code and building deployment pipelines.
          </motion.p>

          {/* Animated Skills/Technologies Metadata Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1 pb-2">
            {['PYTHON', 'DJANGO', 'REACT', 'AI', 'SYSTEMS', 'POSTGRESQL'].map((tag) => (
              <span key={tag} className="text-[9px] font-mono font-bold tracking-widest text-text-muted bg-slate-900 border border-slate-800 px-2 py-0.5 rounded shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons & Social Icons inline */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-accent-blue/15 hover:shadow-accent-blue-hover/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass size={14} />
              <span>Explore My Work</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-700 hover:border-accent-blue text-text-light hover:text-accent-blue bg-white/5 hover:bg-accent-blue/5 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-700 hover:border-accent-gold text-text-light hover:text-accent-gold bg-white/5 hover:bg-accent-gold/5 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Me</span>
            </a>

            {/* Inline Social Icons */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800 h-6">
              <a 
                href="https://github.com/arunnissal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full border border-slate-800 bg-white/5 hover:bg-accent-blue/10 hover:text-accent-blue transition-all duration-300 shadow-sm hover:shadow-accent-blue/10 cursor-pointer"
                title="GitHub"
              >
                <Github size={14} />
              </a>
              <a 
                href="https://linkedin.com/in/arunnissal-b-3a8a33328" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full border border-slate-800 bg-white/5 hover:bg-accent-blue/10 hover:text-accent-blue transition-all duration-300 shadow-sm hover:shadow-accent-blue/10 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </motion.div>

          {/* Interactive Typing CLI Terminal Widget */}
          <motion.div 
            ref={consoleTilt.ref}
            style={consoleTilt.style}
            variants={itemVariants}
            onClick={focusTerminalInput}
            className="w-full max-w-xl font-mono text-[11px] md:text-[12px] text-text-muted glass-card rounded-lg overflow-hidden shadow-md mt-1 select-none cursor-text"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900/50 border-b border-slate-850">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-blue-hover/80 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent-blue/60" />
                <span className="w-2 h-2 rounded-full bg-accent-gold/60" />
              </div>
              <span className="text-[9px] text-accent-blue font-bold font-mono tracking-widest">[SYSTEM.ENV_BOOT]</span>
              <span className="text-[9px] text-accent-blue-hover font-mono font-bold">INTERACTIVE SHELL</span>
            </div>
            
            {/* Terminal History Display */}
            <div className="p-3 h-[120px] md:h-[135px] overflow-y-auto scrollbar-none space-y-1.5 text-left leading-relaxed">
              {history.map((log, idx) => (
                <div key={idx}>
                  {log.type === 'system' && (
                    <span className="text-slate-500 font-bold">{log.text}</span>
                  )}
                  {log.type === 'input' && (
                    <div>
                      <span className="text-accent-blue font-bold">arunnissal@portfolio:~$</span>{' '}
                      <span className="text-text-light">{log.text}</span>
                    </div>
                  )}
                  {log.type === 'output' && (
                    <span className="text-slate-400 font-semibold">{log.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Form Prompt */}
            <form onSubmit={handleCommand} className="flex border-t border-slate-800 bg-slate-900/20 px-3 py-2 items-center">
              <span className="text-accent-blue font-bold mr-2">arunnissal@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none text-text-light font-mono text-[11px] md:text-[12px] p-0"
                placeholder="Type 'help' and press Enter..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </form>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D System Core visualization */}
        <div className="lg:col-span-5 hidden lg:block h-[400px]">
          <SystemCoreCanvas />
        </div>

      </div>

      {/* Subtle floating scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 pointer-events-none z-20">
        <span className="text-[8px] font-mono tracking-widest text-text-muted">SCROLL TO EXPLORE</span>
        <div className="w-[16px] h-[26px] rounded-full border border-text-muted/30 p-[3px] flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
          />
        </div>
      </div>
    </section>
  );
}
