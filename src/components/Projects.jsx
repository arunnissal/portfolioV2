import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, X, Layers, Target, Cpu, CheckCircle } from 'lucide-react';
import { Github } from './BrandIcons';
import useTilt from '../hooks/useTilt';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('01'); // Case study tabs: 01 to 06

  const projects = [
    {
      num: '01',
      title: 'JeevanSetu AI',
      subtitle: 'AI-Powered Health Companion',
      valueProp: 'AI-Powered clinical advisor translating Tamil dialects into diagnostic telemetry.',
      tech: ['React Native', 'Django REST', 'PostgreSQL', 'Sarvam AI', 'Cloudinary'],
      github: 'https://github.com/arunnissal/JeevanSetu-AI',
      live: null,
      archFlow: ['React Native / Expo', 'Django REST Core', 'PostgreSQL (Atomic)', 'Sarvam AI Endpoints', 'Cloudinary Media'],
      caseStudy: {
        '01': { title: 'Problem', text: 'Lack of clinical resources in rural regions. Rural patients report conditions in colloquial Tamil dialects which remote doctors or standard English-only medical portals fail to process accurately.' },
        '02': { title: 'Solution', text: 'Created an offline-first clinical assistant app using Expo and Django REST, connecting rural users to dialect translation engines.' },
        '03': { title: 'Architecture', text: 'Expo client sends Tamil voice files -> HTTPS gateway -> Django REST Framework -> Sarvam AI translate endpoint. Confirmed data saves to PostgreSQL, media goes to Cloudinary.' },
        '04': { title: 'Technology', text: 'Developed with React Native, Python, Django, PostgreSQL, and Sarvam AI text translation REST interfaces.' },
        '05': { title: 'Key Decisions', text: 'Implemented tenacity-based exponential retry algorithms on translations calls to prevent data drops during weak network states.' },
        '06': { title: 'Result', text: 'Won 3rd prize in regional HackHazards \'26 competition and reached the national finals of IIT Bombay e-Yantra challenge.' }
      }
    },
    {
      num: '02',
      title: 'Seminar Hall Booking System',
      subtitle: 'Dr.NGPIT Booking Space Manager',
      valueProp: 'Centralized room reservation engine resolving calendar booking intersections.',
      tech: ['React', 'Vite', 'Django REST', 'PostgreSQL'],
      github: 'https://github.com/arunnissal/seminar-booking',
      live: null,
      archFlow: ['React Web UI', 'Django API gateway', 'PostgreSQL (Row Locking)'],
      caseStudy: {
        '01': { title: 'Problem', text: 'Colliding dates and double-booked halls for student hackathons, leading to room reservation disputes.' },
        '02': { title: 'Solution', text: 'Built a room reservation scheduler with automatic time-overlap validation routines.' },
        '03': { title: 'Architecture', text: 'React Vite SPA -> Django backend check logic -> PostgreSQL database.' },
        '04': { title: 'Technology', text: 'Coded using React, Django REST Framework, Python, and PostgreSQL.' },
        '05': { title: 'Key Decisions', text: 'Used SELECT FOR UPDATE row-level locks on tables to block double bookings under concurrent booking submissions.' },
        '06': { title: 'Result', text: 'Successfully deployed locally at NGPIT campus departments, reducing hall schedule conflicts to zero.' }
      }
    },
    {
      num: '03',
      title: 'UrbanEye',
      subtitle: 'Tamil Nadu Civic Reporting Hub',
      valueProp: 'Geospatial complaints manager mapping civic issues in Tamil Nadu.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Nominatim API'],
      github: 'https://github.com/arunnissal/UrbanEye',
      live: null,
      archFlow: ['React Dashboard', 'Spring Boot API', 'PostgreSQL', 'Nominatim Geocoding'],
      caseStudy: {
        '01': { title: 'Problem', text: 'Lagging civic complaint routing. Citizens fail to tag accurate geographical coordinates when report issues, leading to duplicate tickets.' },
        '02': { title: 'Solution', text: 'Developed a map-based dashboard utilizing reverse geocoding to automatically resolve user addresses.' },
        '03': { title: 'Architecture', text: 'React dashboard -> Java Spring Boot API -> PostgreSQL database -> OSM Nominatim geocoder.' },
        '04': { title: 'Technology', text: 'Integrated React, Leaflet Maps, Spring Boot, Java, and PostgreSQL.' },
        '05': { title: 'Key Decisions', text: 'Programmed radial coordinate offset checks checking duplicate ticket submissions within a 50m radius.' },
        '06': { title: 'Result', text: 'Winner of regional project design accolades; duplicate entries fell by 40% in dry runs.' }
      }
    },
    {
      num: '04',
      title: 'Nexus AI',
      subtitle: 'Football Stadium Space Control',
      valueProp: 'Stadium cooling manager tracking crowd density and seat occupancy.',
      tech: ['React', 'Django REST', 'PostgreSQL', 'OpenCV', 'WebSockets'],
      github: 'https://github.com/arunnissal/NexusAI',
      live: null,
      archFlow: ['React dashboard', 'WebSockets', 'Django backend core', 'OpenCV feeds'],
      caseStudy: {
        '01': { title: 'Problem', text: 'Excessive energy drain in sport venues. HVAC cooling is left running at full power irrespective of local seat occupancy.' },
        '02': { title: 'Solution', text: 'Linked computer vision streams to automate HVAC ventilation threshold cycles based on audience logs.' },
        '03': { title: 'Architecture', text: 'React UI dashboard -> WebSocket server -> Django backend core. OpenCV feeds analyze simulated gate streams.' },
        '04': { title: 'Technology', text: 'Developed using React, Django, Python, PostgreSQL, OpenCV, and WebSockets.' },
        '05': { title: 'Key Decisions', text: 'Configured sliding-window threshold averages to prevent rapid HVAC power cycles on minor crowd shifts.' },
        '06': { title: 'Result', text: 'Achieved top-grade marks in stadium simulation evaluations. Decreased simulated energy drain by 18%.' }
      }
    },
    {
      num: '05',
      title: 'E-Commerce Dry Fruits Store',
      subtitle: 'Redux Dry Fruits Shop',
      valueProp: 'High-performance storefront with synchronized client states.',
      tech: ['Django', 'React', 'Redux Toolkit', 'JWT'],
      github: 'https://github.com/arunnissal/dry-fruits-store',
      live: null,
      archFlow: ['React Client', 'Redux Toolkit Store', 'Django REST', 'JWT Token auth'],
      caseStudy: {
        '01': { title: 'Problem', text: 'Sluggish shopping carts, layout delays, and insecure session data on client e-commerce platforms during purchase funnels.' },
        '02': { title: 'Solution', text: 'Built a responsive React shopfront utilizing Redux Toolkit to maintain secure, synchronized browser states.' },
        '03': { title: 'Architecture', text: 'React Single Page App -> Django REST API -> Database. Session validation is secured via JWT tokens.' },
        '04': { title: 'Technology', text: 'Implemented with React, Redux Toolkit, Python, Django, and JWT authentication.' },
        '05': { title: 'Key Decisions', text: 'Designed cart synchronization routines and JWT local token refresh timers with Redux RTK stores.' },
        '06': { title: 'Result', text: 'Built a highly scalable, secure, and production-ready e-commerce checkout sandbox.' }
      }
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openCaseStudy = (proj) => {
    setSelectedProject(proj);
    setActiveTab('01');
  };

  const activeProj = projects[activeIndex];
  const activeCardTilt = useTilt({ max: 4, scale: 1.01 });

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Heading & Carousel Indicators */}
        <div className="lg:col-span-5 space-y-5 text-left pr-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Layers size={12} className="animate-pulse" />
              <span>Project Showroom</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Featured <span className="text-gradient">Case Studies</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans font-medium">
              Browse through my real-world engineering project systems. Click the active card to inspect the structural blueprint case study.
            </p>
          </div>

          {/* Indicator slider controller */}
          <div className="flex items-center gap-4 pt-4">
            <button 
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-800 hover:border-accent-blue bg-slate-900/40 text-text-muted hover:text-accent-blue transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="font-mono text-xs text-text-muted tracking-widest">
              {(activeIndex + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
            </span>
            <button 
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-800 hover:border-accent-blue bg-slate-900/40 text-text-muted hover:text-accent-blue transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Premium Active Project Card with shared-element layoutId */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              layoutId={`project-card-${activeProj.title}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              ref={activeCardTilt.ref}
              style={activeCardTilt.style}
              onClick={() => openCaseStudy(activeProj)}
              className="w-full glass-card p-6 rounded-xl border border-white/5 shadow-2xl relative group cursor-pointer text-left"
            >
              {/* Card Glare */}
              <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold text-accent-blue font-mono tracking-widest uppercase">
                  <span>[PROJECT_DOCK]</span>
                  <span>NO.{activeProj.num}</span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-black text-text-light group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                    {activeProj.title}
                  </h4>
                  <p className="text-xs font-semibold text-accent-gold font-mono uppercase tracking-wider">{activeProj.valueProp}</p>
                </div>

                <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans h-[60px] overflow-hidden">
                  {activeProj.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-850">
                  {activeProj.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-text-muted font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-blue group-hover:text-accent-gold transition-colors duration-300 pt-2">
                  <span>EXPLORE SYSTEMS BLUEPRINT</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* 
        Full-Screen Case-Study Modal: Morphing shared-element transition
      */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/95 backdrop-blur-xl z-[999] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              layoutId={`project-card-${selectedProject.title}`}
              className="w-full max-w-4xl glass-card rounded-xl border border-white/10 shadow-2xl p-6 md:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-slate-800 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-accent-blue font-mono tracking-widest">
                    <span>[SYSTEM.CASE_STUDY]</span>
                    <span>NO.{selectedProject.num}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-text-light">{selectedProject.title}</h4>
                  <p className="text-xs font-semibold text-accent-gold font-mono uppercase tracking-wider">{selectedProject.valueProp}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-slate-850 hover:border-accent-gold hover:text-accent-gold text-text-muted bg-slate-900/40 transition-colors duration-300 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Architecture Blueprint Visualization Track */}
              <div className="py-3 px-4 my-3 rounded-lg bg-slate-950/60 border border-slate-900 text-left">
                <span className="text-[8px] font-mono font-bold text-accent-blue tracking-widest uppercase block mb-2">[3D.PIPELINE_FLOW]</span>
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5 text-[9px] md:text-[10px] font-mono text-slate-400">
                  {selectedProject.archFlow.map((flowStep, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-text-light font-medium">{flowStep}</span>
                      {idx < selectedProject.archFlow.length - 1 && (
                        <span className="text-accent-blue font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Case Study Steps Navigation */}
              <div className="flex items-center gap-1.5 md:gap-3 py-3 border-b border-slate-850 overflow-x-auto scrollbar-none">
                {Object.keys(selectedProject.caseStudy).map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveTab(num)}
                    className={`px-3 py-1.5 rounded font-mono text-[10px] md:text-xs font-semibold border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeTab === num 
                        ? 'border-accent-blue bg-accent-blue/10 text-accent-blue' 
                        : 'border-slate-850 text-text-muted hover:border-slate-750 hover:text-text-light'
                    }`}
                  >
                    {num} — {selectedProject.caseStudy[num].title}
                  </button>
                ))}
              </div>

              {/* Tab Content details view */}
              <div className="py-5 flex-grow text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="flex gap-2 items-center text-xs font-mono font-bold text-accent-gold uppercase tracking-widest">
                      <Target size={14} />
                      <span>{selectedProject.caseStudy[activeTab].title} logs</span>
                    </div>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans pl-2 border-l-2 border-accent-blue/40">
                      {selectedProject.caseStudy[activeTab].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-text-muted font-mono">{t}</span>
                  ))}
                </div>

                {/* Git/Live Links */}
                <div className="flex items-center gap-3">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-800 hover:border-accent-blue text-text-light hover:text-accent-blue bg-slate-900/40 text-xs font-semibold font-mono transition-all duration-300"
                  >
                    <Github size={12} />
                    <span>GITHUB REPO</span>
                  </a>
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-semibold font-mono transition-all duration-300"
                    >
                      <ExternalLink size={12} />
                      <span>LIVE PREVIEW</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
