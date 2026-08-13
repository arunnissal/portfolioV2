import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Cpu, Terminal as TermIcon } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import ThreeDPhoto from './ThreeDPhoto';
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

          {/* Interactive Typing CLI Terminal Widget */}
          <motion.div 
            ref={consoleTilt.ref}
            style={consoleTilt.style}
            variants={itemVariants}
            onClick={focusTerminalInput}
            className="w-full max-w-xl font-mono text-[11px] md:text-[12px] text-text-muted glass-card rounded-lg overflow-hidden shadow-md mt-1 select-none cursor-text"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100/50 border-b border-slate-200/55">
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
                    <span className="text-slate-400 font-bold">{log.text}</span>
                  )}
                  {log.type === 'input' && (
                    <div>
                      <span className="text-accent-blue font-bold">arunnissal@portfolio:~$</span>{' '}
                      <span className="text-text-light">{log.text}</span>
                    </div>
                  )}
                  {log.type === 'output' && (
                    <span className="text-slate-700 font-semibold">{log.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Form Prompt */}
            <form onSubmit={handleCommand} className="flex border-t border-slate-200/55 bg-slate-100/20 px-3 py-2 items-center">
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
          {/* Faint ambient color backdrops */}
          <div className="absolute w-72 h-[350px] rounded-full bg-accent-blue/5 blur-[50px] -z-10 right-0 bottom-0 animate-pulse animate-glow-pulse" />
          <div className="absolute w-80 h-[400px] rounded-full bg-accent-blue-hover/5 blur-[60px] -z-10 right-0 bottom-0" style={{ animationDelay: '-2s' }} />
          
          {/* The cut-out portrait picture inside ThreeDPhoto */}
          <ThreeDPhoto isHovered={isHovered} />
        </div>
      </motion.div>
    </section>
  );
}
