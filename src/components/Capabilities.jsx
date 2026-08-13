import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, BookOpen } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function Capabilities() {
  const [activeDsaTopic, setActiveDsaTopic] = useState(null);
  const [activeCourseNode, setActiveCourseNode] = useState(null);

  const dsaTilt = useTilt({ max: 5, scale: 1.01 });
  const nodeTilt = useTilt({ max: 5, scale: 1.01 });

  const skillGroups = [
    {
      title: 'Languages & Core',
      icon: <Terminal size={14} className="text-accent-blue" />,
      skills: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web Frameworks',
      icon: <Database size={14} className="text-accent-blue" />,
      skills: ['Django', 'Django REST Framework', 'React', 'Vite', 'React Native', 'Expo', 'Spring Boot'],
    },
    {
      title: 'Databases & Cloud',
      icon: <Database size={14} className="text-accent-teal" />,
      skills: ['PostgreSQL', 'Neon PostgreSQL', 'SQLite', 'Vercel', 'Render', 'Cloudinary'],
    },
    {
      title: 'AI & Tools',
      icon: <Cpu size={14} className="text-accent-blue-hover" />,
      skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'LLMs', 'Sarvam AI', 'Git', 'GitHub'],
    }
  ];

  const dsaDetails = [
    {
      topic: 'HashTables (Map & Set)',
      summary: 'Strong grasp of key hashing patterns and hash-based searches.',
      details: 'Implemented LeetCode checks using HashMap (put, get, containsKey, remove, size) and HashSet (add, contains, remove, size) to reduce search runtimes from O(N²) to O(N).'
    },
    {
      topic: 'Linked Lists',
      summary: 'Experienced with pointer manip, cycle locks, and reversions.',
      details: 'Solved LeetCode list problems (reversing lists, cycle detection via slow/fast pointers, rotates, duplicate filters, and LRU Cache structures).'
    },
    {
      topic: 'Trees & Graphs',
      summary: 'Familiar with tree layouts and graph traversals.',
      details: 'Traversed BFS and DFS, reviewed binary tree properties, tree height formulas, and graph complexity analyses for MCQs.'
    }
  ];

  const courseNodes = [
    { id: 'py', title: 'Python & DRF', desc: 'Learned Django REST Framework, MVC architectures, CRUD views, file routing via Cloudinary, and role-based JWT authentications.' },
    { id: 'java', title: 'Java & DSA', desc: 'Practiced HashMap/HashSet operations, fast/slow pointer algorithms, tree traversals (BFS, DFS), and solving LeetCode problems.' },
    { id: 'db', title: 'DB Architecture', desc: 'Studied PostgreSQL and SQLite schema, designing database locks to avoid overlapping double-bookings, and geocoding coordinates.' },
    { id: 'cloud', title: 'Cloud & System', desc: 'Explored environment config controls, deploying APIs to Render, hosting web interfaces on Vercel, and Cloud Computing models.' }
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Tech Stack & DSA Milestones */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between max-h-[80vh] overflow-y-auto scrollbar-none pr-1 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue uppercase tracking-wider w-fit">
              <Cpu size={12} className="animate-pulse" />
              <span>Capabilities</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-text-light leading-tight uppercase tracking-tight">Core Competencies</h3>
            
            {/* Tech Stack categorizations */}
            <div className="space-y-4 pt-2">
              {skillGroups.map((group, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-1.5 text-text-light font-bold text-xs md:text-sm font-mono uppercase tracking-wider">
                    {group.icon}
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded bg-slate-200/70 border border-slate-300/35 text-text-light font-mono hover:border-accent-blue-hover/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: DSA Dashboard & Interactive Learnings Node Matrix */}
        <div className="lg:col-span-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto scrollbar-none justify-center">
          
          {/* DSA Panel with 3D Mouse Tilt */}
          <div 
            ref={dsaTilt.ref}
            style={dsaTilt.style}
            className="glass-card p-4 rounded-xl text-left border border-slate-200/50 shadow-sm"
          >
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 border border-slate-200/40 mb-3">
              <div>
                <h4 className="text-text-light text-sm font-bold font-mono">LeetCode Preparation</h4>
                <p className="text-text-muted text-xs mt-0.5">Focusing on Array manipulation and algorithms</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent-blue/15 border border-accent-blue/30 text-accent-blue font-bold">
                200+ SOLVED
              </span>
            </div>

            <div className="space-y-1.5">
              {dsaDetails.map((item, idx) => {
                const isOpened = activeDsaTopic === idx;
                return (
                  <div key={idx} className="border border-slate-200/50 rounded-lg overflow-hidden bg-white/40">
                    <div 
                      onClick={() => setActiveDsaTopic(isOpened ? null : idx)}
                      className="p-2.5 flex justify-between items-center cursor-pointer hover:bg-slate-100/50 transition-colors"
                    >
                      <div>
                        <h6 className="text-text-light text-xs md:text-sm font-bold font-mono">{item.topic}</h6>
                        <p className="text-text-muted text-xs mt-0.5">{item.summary}</p>
                      </div>
                      <span className="text-accent-blue text-xs font-mono">{isOpened ? '▲ Close' : '▼ Details'}</span>
                    </div>
                    <AnimatePresence>
                      {isOpened && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-2.5 pb-2.5 pt-1 border-t border-slate-200/50 text-xs text-text-muted leading-relaxed font-mono overflow-hidden"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Coursework Node Matrix (Separate Box) with 3D Mouse Tilt */}
          <div 
            ref={nodeTilt.ref}
            style={nodeTilt.style}
            className="glass-card p-4 rounded-xl text-left border border-slate-200/50 space-y-3 shadow-sm"
          >
            <div>
              <h5 className="text-xs font-bold text-text-light uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen size={14} className="text-accent-teal" />
                <span>Interactive Coursework Node Matrix</span>
              </h5>
              <p className="text-text-muted text-xs mt-0.5">Click a category node to display key concepts learned</p>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-2 gap-2">
              {courseNodes.map((node) => {
                const isNodeSelected = activeCourseNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveCourseNode(isNodeSelected ? null : node.id)}
                    className={`p-2.5 rounded-lg text-center cursor-pointer border text-xs md:text-sm font-mono transition-all duration-300 ${
                      isNodeSelected 
                        ? 'bg-accent-blue/15 border-accent-blue/40 text-text-light shadow-[0_0_8px_rgba(2,132,199,0.15)]'
                        : 'bg-white/40 border-slate-200/50 text-text-muted hover:text-text-light hover:border-slate-300'
                    }`}
                  >
                    {node.title}
                  </div>
                );
              })}
            </div>

            {/* Details Console Box */}
            <div className="min-h-[85px] p-3 rounded-lg bg-slate-100/50 border border-slate-200/50 font-mono text-xs md:text-sm leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 text-[8px] bg-slate-200/60 text-accent-blue border-l border-b border-slate-300/30">
                [ACADEMIC_DECK]
              </div>
              {activeCourseNode ? (
                <p className="text-text-light text-left">
                  {courseNodes.find(n => n.id === activeCourseNode)?.desc}
                </p>
              ) : (
                <p className="text-text-muted text-center pt-3 font-mono">
                  // Select a node to initiate data stream...
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
