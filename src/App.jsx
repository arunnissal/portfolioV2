import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene3D from './components/Scene3D';
import Preloader from './components/Preloader';

export default function App() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Track document vertical scroll progress for the top progress rail
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-transparent text-text-light selection:bg-accent-blue/30 selection:text-white transition-colors duration-300 min-h-screen"
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="preloader" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <Preloader onComplete={() => setLoading(false)} />
          </motion.div>
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            className="w-full relative"
          >
            {/* Background WebGL Particle Field */}
            <Scene3D />

            {/* Mouse Spotlight follower */}
            <div className="spotlight-overlay" />

            {/* Progress rail */}
            <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-200/50 z-[60] pointer-events-none">
              <motion.div 
                style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                className="h-full bg-gradient-to-r from-accent-blue via-accent-blue-hover to-accent-gold shadow-[0_0_8px_rgba(2,132,199,0.4)]"
              />
            </div>

            {/* Navigation Bar */}
            <Navbar />

            {/* Vertical Section Slides (6 sections) */}
            <main className="w-full">
              {/* Section 1: Home */}
              <section id="home" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <Hero />
              </section>

              {/* Section 2: About / Profile */}
              <section id="about" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <About />
              </section>

              {/* Section 3: Experience / Work & Awards */}
              <section id="experience" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <Experience />
              </section>

              {/* Section 4: Technical Capabilities */}
              <section id="capabilities" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <Capabilities />
              </section>

              {/* Section 5: Featured Projects */}
              <section id="projects" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <Projects />
              </section>

              {/* Section 6: Contact Comms */}
              <section id="contact" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
                <Contact />
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
