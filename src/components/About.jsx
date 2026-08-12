import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Flame, Check } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');
  const [showSchooling, setShowSchooling] = useState(false);

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

  const education = [
    {
      institution: 'Dr. NGP Institute of Technology',
      degree: 'B.E. Computer Science and Engineering',
      duration: '2024 - 2028',
      grade: 'CGPA: 8.49 (Up to IV Semester) | 8.39 (Up to III Semester) | No History of Arrears',
    }
  ];

  const schoolingInfo = [
    {
      type: '12th Standard (HSC)',
      institution: 'Bannari Amman Vidya Niketan',
      grade: 'State Board | 90.6%',
      year: '2024'
    },
    {
      type: '10th Standard (SSLC)',
      institution: 'Bharathi Matriculation School',
      grade: 'State Board | 82.8%',
      year: '2022'
    }
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

  const focusPath = [
    'Python', 'Backend Engineering', 'Django & APIs', 
    'Databases & System Design', 'Artificial Intelligence', 
    'LLMs & Production AI'
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Summary & Focus (Scrollable inner) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto scrollbar-none pr-2 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/35 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Flame size={12} className="animate-pulse text-accent-blue-hover" />
              <span>Professional Profile</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">My Journey &amp; Focus</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              I'm Arunnissal B, a Computer Science and Engineering student at Dr. NGP Institute of Technology. I prefer building things, breaking them, deploying them, and understanding how they actually work.
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              My strongest focus is backend logic and systems engineering, especially designing APIs, validating workflows, and optimizing PostgreSQL databases.
            </p>
          </div>

          {/* Focus Path */}
          <div className="space-y-2 pt-2">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-wider font-mono">Current Focus Path</h4>
            <div className="flex flex-wrap gap-1">
              {focusPath.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[10px] md:text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-[#202230] border border-white/5 text-text-light font-mono hover:border-accent-blue-hover/30 transition-colors">
                    {step}
                  </span>
                  {idx < focusPath.length - 1 && <span className="text-accent-blue text-[10px] font-mono">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tabs Container */}
        <div className="lg:col-span-7 glass-card p-5 rounded-xl border border-white/5 min-h-[480px] md:min-h-[500px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Tabs Headers */}
          <div className="flex border-b border-white/10 mb-4 overflow-x-auto scrollbar-none gap-6 flex-shrink-0">
            {[
              { id: 'experience', label: 'Internships', icon: <Briefcase size={14} /> },
              { id: 'academics', label: 'Academics', icon: <GraduationCap size={14} /> },
              { id: 'achievements', label: 'Achievements', icon: <Award size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 font-bold text-sm transition-all duration-300 flex items-center gap-1.5 relative whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id ? 'text-accent-blue' : 'text-text-muted hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue" />
                )}
              </button>
            ))}
          </div>

          {/* Scrollable Tabs Content */}
          <div className="flex-grow overflow-y-auto pr-1 scrollbar-none max-h-[380px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: INTERNSHIPS */}
              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4 text-left"
                >
                  <div className="relative pl-4 border-l border-white/10 space-y-5">
                    {internships.map((job, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute left-[-21px] top-1.5 w-2 h-2 rounded-full bg-accent-blue border-2 border-primary-dark" />
                        <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-text-muted mb-0.5 gap-2 font-mono">
                          <span className="font-semibold text-accent-blue-hover">{job.company}</span>
                          <span>{job.duration}</span>
                        </div>
                        <h5 className="text-white font-extrabold text-sm md:text-base">{job.role}</h5>
                        <ul className="list-disc list-outside pl-4 space-y-1 mt-1.5 text-text-muted text-xs md:text-sm leading-relaxed">
                          {job.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ACADEMICS & TIMELINES */}
              {activeTab === 'academics' && (
                <motion.div
                  key="academics"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4 text-left"
                >
                  <div className="relative pl-4 border-l border-white/10 space-y-4">
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute left-[-21px] top-1.5 w-2 h-2 rounded-full bg-accent-blue border-2 border-primary-dark" />
                        <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-text-muted mb-0.5 gap-2 font-mono">
                          <span className="font-bold text-text-light">{edu.institution}</span>
                          <span>{edu.duration}</span>
                        </div>
                        <h5 className="text-white font-extrabold text-sm md:text-base">{edu.degree}</h5>
                        <div className="text-accent-blue-hover text-xs md:text-sm font-mono mt-1">{edu.grade}</div>
                      </div>
                    ))}
                  </div>

                  {/* Schooling dropdown */}
                  <div className="pt-2 border-t border-white/5">
                    <button 
                      onClick={() => setShowSchooling(!showSchooling)}
                      className="w-full p-2.5 bg-black/40 hover:bg-black/60 border border-white/5 rounded-lg flex justify-between items-center text-xs font-mono font-bold text-white uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      <span>🏫 Secondary Schooling Details</span>
                      <span className="text-accent-blue">{showSchooling ? '▲ Hide' : '▼ Show'}</span>
                    </button>
                    <AnimatePresence>
                      {showSchooling && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-1.5 mt-2 overflow-hidden"
                        >
                          {schoolingInfo.map((sch, i) => (
                            <div key={i} className="p-3 rounded-lg bg-[#202230]/50 border border-white/5 flex justify-between items-center text-xs md:text-sm">
                              <div>
                                <h6 className="text-white font-bold text-[11px] md:text-xs">{sch.type}</h6>
                                <p className="text-text-muted text-[10px] md:text-[11px]">{sch.institution}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-accent-blue-hover font-mono text-[10px] md:text-[11px]">{sch.grade}</span>
                                <p className="text-text-muted text-[9px] md:text-[10px] font-mono mt-0.5">{sch.year}</p>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: ACHIEVEMENTS & CERTIFICATIONS */}
              {activeTab === 'achievements' && (
                <motion.div
                  key="achievements"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {achievements.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#202230]/40 border border-white/5 flex gap-2 items-start hover:border-accent-blue-hover/30 transition-colors duration-350">
                        <Award size={16} className="text-accent-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-white font-bold text-xs md:text-sm leading-tight">{item.title}</h5>
                          <p className="text-text-muted text-[10px] md:text-[11px] mt-1 leading-snug">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Certs List */}
                  <div className="pt-3 border-t border-white/5">
                    <h5 className="text-[11px] md:text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Certifications &amp; Courses</h5>
                    <div className="space-y-1.5">
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
                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    <h5 className="text-[11px] md:text-xs font-bold text-white uppercase tracking-wider font-mono">Hackathons Participated</h5>
                    <div className="flex flex-wrap gap-1">
                      {hackathons.map((h) => (
                        <span key={h} className="text-[10px] px-2 py-0.5 rounded bg-black/45 border border-white/5 text-text-muted font-mono">{h}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
