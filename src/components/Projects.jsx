import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, Settings } from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showWorkings, setShowWorkings] = useState(false);
  const [direction, setDirection] = useState(0); // For slide animations direction: -1 (left), 1 (right)

  const projectsList = [
    {
      title: 'JeevanSetu AI',
      tagline: 'AI-Powered Personal Health Companion designed to compile scattered records.',
      description: 'JeevanSetu AI integrates local machine learning capabilities and Sarvam AI APIs to parse physical medical reports, extract vital diagnostic metrics, and chart lab values.',
      tags: ['React Native', 'Expo', 'Django REST', 'PostgreSQL', 'Sarvam AI', 'Cloudinary'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: true,
      features: [
        'Health Vault: Dynamic index of past doctor visits, reports, and lab details.',
        'Emergency Medical Card: QR-accessible critical health data for emergency responders.',
        'AI Insights: Automatic extraction and charting of vitals from uploaded PDFs.',
        'Cloud Storage: Report backups utilizing Cloudinary storage integration.'
      ],
      working: 'React Native posts PDFs to Render Django servers. The backend backups to Cloudinary, extracts key health matrices via Sarvam AI parsing, and records structured charts in Neon PostgreSQL.'
    },
    {
      title: 'Seminar Hall Booking System',
      tagline: 'Dr. NGP Event Approval & Space Booking Manager with multi-tier workflow logic.',
      description: 'Digitizes booking approvals, event scheduling, and computing resource distribution inside college campuses.',
      tags: ['React', 'Vite', 'Django REST', 'PostgreSQL', 'SQLite'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Approval Chain: Faculty → HOD → Dean of Computing → AO → Principal.',
        'Double-Booking Prevention: Transactional locks preventing overlapping schedules.',
        'Approval Logs: Tracks revisions, status rollbacks, and department routings.'
      ],
      working: 'Utilizes Django database transaction locks to block overlapping date inputs. React fetches schedules using query layers to render a real-time responsive booking grid.'
    },
    {
      title: 'UrbanEye',
      tagline: 'Civic-Tech Citizen Reporting Platform for reporting road & infrastructure issues.',
      description: 'Civic engagement tool for citizens to log regional public issues across Tamil Nadu with automated validation overlays.',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Java', 'Nominatim API'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'GPS Geocoding: Captures map bounds and addresses via Nominatim reverse API.',
        'Duplicate Lock: Automatically flags duplicate reports within a 50-meter radius.',
        'Leaderboards: Encourages civic activity via profile reputation score multipliers.'
      ],
      working: 'React captures user geolocation maps. Spring Boot posts points to Nominatim API to fetch street names and executes radius distance queries in PostgreSQL to prevent duplicate tickets.'
    },
    {
      title: 'Nexus AI',
      tagline: 'Football Stadium Control System with gate automation and flow monitor nodes.',
      description: 'Futuristic stadium coordination sandbox managing spectator checks, gate triggers, and HVAC load balancing.',
      tags: ['React', 'Django REST', 'PostgreSQL', 'Computer Vision', 'WebSockets'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Gate Automation: Smart validation check-ins triggering door release nodes.',
        'Flow Analytics: AI camera tracking to spot gate bottlenecks in real-time.',
        'Load Balancer: Automates stadium lights and ventilation controls dynamically.'
      ],
      working: 'Processes simulated camera feeds to gauge density curves. The Django server broadcasts check-in notifications and environmental triggers to dashboard controls via WebSockets.'
    },
    {
      title: 'Dry-Fruits E-Commerce',
      tagline: 'Full-Stack storefront with custom shopping cart core and invoices.',
      description: 'E-commerce web portal for Dry-Fruits complete with dynamically updated item grids and order checkouts.',
      tags: ['React', 'Django', 'PostgreSQL', 'Redux', 'JWT Auth'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Dynamic Catalog: Filterable, searchable catalog grid of dried-fruit products.',
        'Redux Cart: Redux state handles quantities, prices, and stock validations.',
        'Invoicing: Automated PDF invoice generation using backend engines.'
      ],
      working: 'Django processes order tables, verifies cart quantities against Postgres records, generates invoice PDFs, and logs transactions. React manages user session states using JWT logs.'
    },
    {
      title: 'Task Manager App',
      tagline: 'Client-side Kanban board built using frontend-only local state.',
      description: 'Clean productivity dashboard for dragging and managing project workflows and tasks offline.',
      tags: ['React', 'Framer Motion', 'LocalStorage', 'Tailwind CSS'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Drag & Drop: Drag-and-drop workflow lanes using Framer Motion.',
        'Offline Cache: Syncs board elements to window LocalStorage.',
        'Progress Index: Interactive visual dials showing completion percentages.'
      ],
      working: 'Operations are local. React states are mapped directly to browser LocalStorage hooks, providing offline persistence and immediate updates with zero backend overhead.'
    },
    {
      title: 'Note Taking App',
      tagline: 'College productivity note board with subject filters.',
      description: 'Productivity application created for managing college lectures, class schedules, and attachments.',
      tags: ['React', 'Markdown Editor', 'LocalStorage', 'CSS Grid'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Markdown Core: Live side-by-side markdown text converter.',
        'Fuzzy Search: Instantly query words across titles or notes contents.',
        'Attachment Bind: Converts note attachments into Base64 binaries.'
      ],
      working: 'Runs full client-side markdown compilation. Search utilizes regex filters on the notes array, and files are stored as string binaries inside LocalStorage.'
    },
    {
      title: 'ULTRON',
      tagline: 'Long-term Sunday AI sandbox exploring machine learning models.',
      description: 'A sandbox workspace dedicated to building Python-based data modeling automation.',
      tags: ['Python', 'Machine Learning', 'Deep Learning', 'Data Pipelines'],
      github: 'https://github.com/arunnissal',
      isAwardWinner: false,
      features: [
        'Script Hub: Python automations processing files and scheduling tasks.',
        'Predictive Models: Machine learning code testing regressions and categorizations.',
        'Pipeline Automation: Automated data cleaning scripts for quick dataset reviews.'
      ],
      working: 'A local development playground run every Sunday to execute test scripts, construct machine learning model files, and study deep learning frameworks.'
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);
  };

  // Reset accordion states when cycling active projects
  useEffect(() => {
    setShowFeatures(false);
    setShowWorkings(false);
  }, [currentIndex]);

  const activeProject = projectsList[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    }),
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 w-full relative h-[85vh] flex flex-col justify-between">
        
        {/* Section Heading */}
        <div className="text-center mb-2 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">Featured Projects</h2>
          </div>
          <div className="w-16 h-[2px] bg-accent-blue mx-auto rounded-full" />
          <p className="text-text-muted text-[11px] mt-1">Cycle through project decks using the chevron controls</p>
        </div>

        {/* 1-by-1 Project Slider Carousel */}
        <div className="flex-grow flex flex-col justify-center gap-4 overflow-hidden py-2 relative">
          
          {/* Main Card Slider Body */}
          <div className="flex items-center justify-between gap-4 w-full relative">
            
            {/* Left Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/5 hover:border-accent-blue/30 bg-[#080713]/60 hover:bg-black text-white hover:text-accent-blue-hover transition-all duration-300 cursor-pointer shadow-[0_0_8px_rgba(0,0,0,0.4)]"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Slider Active Card Container */}
            <div className="flex-grow relative h-[250px] md:h-[220px] overflow-hidden flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full h-full glass-card p-5 rounded-xl flex flex-col justify-between text-left group overflow-hidden"
                >
                  <div className="absolute inset-0 card-glare opacity-20 pointer-events-none" />
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[9px] font-mono text-accent-blue-hover uppercase tracking-widest font-bold">
                          [PROJECT_{String(currentIndex + 1).padStart(2, '0')}/{String(projectsList.length).padStart(2, '0')}]
                        </span>
                        <h3 className="text-white font-black text-lg md:text-xl mt-0.5">{activeProject.title}</h3>
                      </div>
                      {activeProject.isAwardWinner && (
                        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-accent-blue/15 border border-accent-blue/30 text-accent-blue font-bold animate-pulse">
                          [AWARD_WINNER]
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="text-accent-gold text-[10px] font-mono uppercase tracking-wider mb-2 font-medium">{activeProject.tagline}</p>

                    {/* Overview */}
                    <p className="text-text-muted text-xs leading-relaxed line-clamp-3 md:line-clamp-4">{activeProject.description}</p>
                  </div>

                  {/* Badges footer */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5 mt-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-[8px] font-mono px-2 py-0.5 rounded bg-[#080713] border border-white/5 text-text-light">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-white/5 hover:border-accent-blue/30 bg-[#080713]/60 hover:bg-black text-white hover:text-accent-blue-hover transition-all duration-300 cursor-pointer shadow-[0_0_8px_rgba(0,0,0,0.4)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators dots */}
          <div className="flex justify-center gap-1.5 mt-1 select-none">
            {projectsList.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? 'w-6 bg-accent-blue shadow-[0_0_6px_#ec4899]' : 'w-2 bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Interactive Collapsible Features/Workings Dashboard for Active Slide */}
          <div className="space-y-2 mt-2 select-none">
            
            {/* Features Bar */}
            <div className="space-y-1">
              <div 
                onClick={() => setShowFeatures(!showFeatures)} 
                className="p-2.5 bg-black/40 hover:bg-black/60 border border-white/5 rounded-lg cursor-pointer flex justify-between items-center transition-colors"
              >
                <span className="text-white text-[10px] font-bold font-mono tracking-wider uppercase flex items-center gap-2">
                  <CheckCircle size={12} className="text-accent-blue" />
                  <span>🛠️ Core Features ({activeProject.features.length})</span>
                </span>
                <span className="text-accent-blue text-[10px] font-mono">{showFeatures ? '▲ Collapse' : '▼ Expand'}</span>
              </div>
              <AnimatePresence>
                {showFeatures && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="list-disc list-outside text-text-muted text-xs pl-5 space-y-1 py-1.5 text-left bg-black/20 rounded-lg p-3 border border-white/5">
                      {activeProject.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Workings Bar */}
            <div className="space-y-1">
              <div 
                onClick={() => setShowWorkings(!showWorkings)} 
                className="p-2.5 bg-black/40 hover:bg-black/60 border border-white/5 rounded-lg cursor-pointer flex justify-between items-center transition-colors"
              >
                <span className="text-white text-[10px] font-bold font-mono tracking-wider uppercase flex items-center gap-2">
                  <Settings size={12} className="text-accent-blue" />
                  <span>⚡ Tech Workflow &amp; Architecture</span>
                </span>
                <span className="text-accent-blue text-[10px] font-mono">{showWorkings ? '▲ Collapse' : '▼ Expand'}</span>
              </div>
              <AnimatePresence>
                {showWorkings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-muted text-[11px] leading-relaxed bg-black/45 p-3.5 rounded-lg border border-white/5 font-mono text-left py-2.5">
                      {activeProject.working}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>

          {/* Links Footer */}
          <div className="flex justify-end pt-2 border-t border-white/5 mt-2">
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-white font-semibold text-[10px] border border-white/10 transition-colors"
            >
              <Github size={12} />
              <span>Codebase</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
