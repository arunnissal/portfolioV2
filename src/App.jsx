import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene3D from './components/Scene3D';

export default function App() {
  const containerRef = useRef(null);

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
      className="relative bg-primary-dark text-text-light selection:bg-accent-blue/30 selection:text-white transition-colors duration-300 min-h-screen"
    >
      {/* Background WebGL Particle Field (stays fixed behind sections) */}
      <Scene3D />

      {/* Mouse Spotlight follower */}
      <div className="spotlight-overlay" />

      {/* Holographic Age of Ultron Crimson progress rail */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[60] pointer-events-none">
        <motion.div 
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
          className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Vertical Section Slides with Snap Points (5 sections) */}
      <main className="w-full">
        {/* Section 1: Home */}
        <section id="home" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
          <Hero />
        </section>

        {/* Section 2: About / Professional Profile */}
        <section id="about" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
          <About />
        </section>

        {/* Section 3: Technical Capabilities & DSA Matrix */}
        <section id="capabilities" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
          <Capabilities />
        </section>

        {/* Section 4: Featured Projects */}
        <section id="projects" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
          <Projects />
        </section>

        {/* Section 5: Contact Comms */}
        <section id="contact" className="w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden snap-start relative">
          <Contact />
        </section>
      </main>
    </div>
  );
}
