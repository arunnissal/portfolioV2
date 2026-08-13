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
      title: 'JeevanSetu AI',
      subtitle: 'AI-Powered Health Companion',
      description: 'Mobile clinical companion integrating LLMs for local language diagnosis translation.',
      tech: ['React Native', 'Django REST', 'PostgreSQL', 'Sarvam AI', 'Cloudinary'],
      github: 'https://github.com/arunnissal/JeevanSetu-AI',
      live: null,
      caseStudy: {
        '01': { title: 'Problem', text: 'Lack of accessible medical consultations in rural areas of Tamil Nadu. Existing healthcare portals fail to bridge the language gap and translate local dialects into diagnostic telemetry.' },
        '02': { title: 'Solution', text: 'Constructed an offline-first mobile app using Expo and Django REST, connecting rural users to translation nodes for quick advice.' },
        '03': { title: 'Architecture', text: 'React Native mobile client -> HTTPS API Router -> Django REST Framework -> PostgreSQL relational store. Media logs are synced asynchronously via Cloudinary CDN.' },
        '04': { title: 'Technology', text: 'Developed using React Native (Expo), Python, Django REST Framework, PostgreSQL, and Sarvam AI translation API for local dialects.' },
        '05': { title: 'Implementation', text: 'Integrated SMS alert queues, geographic coordinate metadata tags, and multi-language voice dictation translate streams.' },
        '06': { title: 'Result', text: 'Won 3rd prize in the regional hackathon, finalized at IIT Bombay, and highly commended by medical professionals.' }
      }
    },
    {
      title: 'Seminar Hall Booking System',
      subtitle: 'Dr.NGPIT Booking Space Manager',
      description: 'Centralized database scheduler management system resolving event booking collisions.',
      tech: ['React', 'Vite', 'Django REST', 'PostgreSQL'],
      github: 'https://github.com/arunnissal/seminar-booking',
      live: null,
      caseStudy: {
        '01': { title: 'Problem', text: 'Frequent scheduling conflicts, double bookings, and manual paperwork overhead when allocating campus seminar halls for student hackathons and guest lectures.' },
        '02': { title: 'Solution', text: 'Created a centralized room reservation portal with dynamic check algorithms to validate schedule intersections before confirming slots.' },
        '03': { title: 'Architecture', text: 'React Vite client -> Django API handler -> PostgreSQL DB. Implemented strict row-level database locking to secure reservation sessions.' },
        '04': { title: 'Technology', text: 'Structured with React (Tailwind CSS UI), Django REST Framework, PostgreSQL, and dynamic date-time overlap checks.' },
        '05': { title: 'Implementation', text: 'Programmed calendar view, approval pipelines for college authorities, and auto-generated booking slips.' },
        '06': { title: 'Result', text: 'Deployed locally at college departments, reducing reservation disputes and timing overlaps to zero.' }
      }
    },
    {
      title: 'UrbanEye',
      subtitle: 'Tamil Nadu Civic Reporting Hub',
      description: 'Geospatial civic complaints manager with leaderboards to drive community actions.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Nominatim API'],
      github: 'https://github.com/arunnissal/UrbanEye',
      live: null,
      caseStudy: {
        '01': { title: 'Problem', text: 'Delays in civic complaint resolutions due to poor reporting mechanics. Users find it hard to tag accurate locations or track progress without transparent routing.' },
        '02': { title: 'Solution', text: 'Developed a map-based reporting system utilizing GPS reverse geocoding to auto-locate public issues.' },
        '03': { title: 'Architecture', text: 'React web interface -> Spring Boot API layers -> PostgreSQL DB -> Nominatim geocoding engine.' },
        '04': { title: 'Technology', text: 'Built using React, Spring Boot, Java, PostgreSQL, and Leaflet Maps integrations.' },
        '05': { title: 'Implementation', text: 'Created a leaderboard mechanism to gamify reports, auto-detect duplicate claims within 50 meters, and assign points to active citizens.' },
        '06': { title: 'Result', text: 'Awarded top honors at regional level. Proved that reverse geocoding prevents duplicate tickets.' }
      }
    },
    {
      title: 'Nexus AI',
      subtitle: 'Football Stadium Space Control',
      description: 'Stadium resource manager integrating computer vision flow control feeds.',
      tech: ['React', 'Django REST', 'PostgreSQL', 'OpenCV', 'WebSockets'],
      github: 'https://github.com/arunnissal/NexusAI',
      live: null,
      caseStudy: {
        '01': { title: 'Problem', text: 'Inefficient audience management and HVAC ventilation inside massive sport venues. Manual stadium gates lead to crowd congestion and energy waste.' },
        '02': { title: 'Solution', text: 'Integrated computer vision modules that track seat occupancy and crowd flows, automatically adjusting HVAC cooling output.' },
        '03': { title: 'Architecture', text: 'React UI dashboard -> WebSocket server -> Django backend core. OpenCV feeds analyze simulated gate streams.' },
        '04': { title: 'Technology', text: 'Coded with React, Python, Django, PostgreSQL, OpenCV, and WebSockets.' },
        '05': { title: 'Implementation', text: 'Structured gate check intervals, real-time WebSocket dashboard dials, and threshold automation triggers for ventilation loops.' },
        '06': { title: 'Result', text: 'Achieved top-grade marks in systems sandbox evaluation. Decreased energy drain in tests by 18%.' }
      }
    },
    {
      title: 'E-Commerce Dry Fruits Store',
      subtitle: 'Redux Dry Fruits Shop',
      description: 'High-performance storefront with JWT auth states and Redux cart sync.',
      tech: ['Django', 'React', 'Redux Toolkit', 'JWT'],
      github: 'https://github.com/arunnissal/dry-fruits-store',
      live: null,
      caseStudy: {
        '01': { title: 'Problem', text: 'Sluggish shopping carts, layout delays, and insecure session data on client e-commerce platforms during purchase funnels.' },
        '02': { title: 'Solution', text: 'Built a responsive React shopfront utilizing Redux Toolkit to maintain secure, synchronized browser states.' },
        '03': { title: 'Architecture', text: 'React Single Page App -> Django REST API -> Database. Session validation is secured via JWT tokens.' },
        '04': { title: 'Technology', text: 'Implemented with React, Redux Toolkit, Python, Django, and JWT authentication.' },
        '05': { title: 'Implementation', text: 'Coded persistent shopping carts, token refresh loops, checkout flow pages, and product searches.' },
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
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
              Click on any project to explore its 3D architecture, technical implementation challenges, and outcome metrics.
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

        {/* Right Column: Premium Active Project Card */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              ref={activeCardTilt.ref}
              style={activeCardTilt.style}
              onClick={() => openCaseStudy(activeProj)}
              className="w-full glass-card p-6 rounded-2xl border border-white/5 shadow-2xl relative group cursor-pointer text-left"
            >
              {/* Card Glare */}
              <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-accent-blue font-mono tracking-widest uppercase block">[ACTIVE.PROJECT_DOCK]</span>
                
                <div className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-black text-text-light group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                    {activeProj.title}
                  </h4>
                  <p className="text-xs font-semibold text-accent-gold font-mono">{activeProj.subtitle}</p>
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
                  <span>EXPLORE TECHNICAL CASE STUDY</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* 
        Full-Screen Premium Case-Study Overlay Modal
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
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="w-full max-w-4xl glass-card rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-slate-800 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-accent-blue font-mono tracking-widest">[SYSTEM.CASE_STUDY]</span>
                  <h4 className="text-2xl md:text-3xl font-black text-text-light">{selectedProject.title}</h4>
                  <p className="text-xs font-semibold text-accent-gold font-mono">{selectedProject.subtitle}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-slate-800 hover:border-accent-gold hover:text-accent-gold text-text-muted bg-slate-900/40 transition-colors duration-300 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Case Study Steps Navigation Selector */}
              <div className="flex items-center gap-1.5 md:gap-3 py-4 border-b border-slate-850 overflow-x-auto scrollbar-none">
                {Object.keys(selectedProject.caseStudy).map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveTab(num)}
                    className={`px-3 py-1.5 rounded font-mono text-xs font-semibold border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeTab === num 
                        ? 'border-accent-blue bg-accent-blue/10 text-accent-blue' 
                        : 'border-slate-850 text-text-muted hover:border-slate-700 hover:text-text-light'
                    }`}
                  >
                    {num} — {selectedProject.caseStudy[num].title}
                  </button>
                ))}
              </div>

              {/* Tab Case Study details view */}
              <div className="py-6 flex-grow text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex gap-2 items-center text-xs font-mono font-bold text-accent-gold uppercase tracking-widest">
                      <Target size={14} />
                      <span>{selectedProject.caseStudy[activeTab].title} Log</span>
                    </div>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans pl-2 border-l-2 border-accent-blue/40">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-slate-800 hover:border-accent-blue text-text-light hover:text-accent-blue bg-slate-900/40 text-xs font-semibold font-mono transition-all duration-300"
                  >
                    <Github size={12} />
                    <span>GITHUB REPO</span>
                  </a>
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-semibold font-mono transition-all duration-300"
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
