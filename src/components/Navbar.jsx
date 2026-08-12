import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy tracking based on vertical section bounds (5 sections of 100vh)
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height * 0.5) {
        setActiveSection('home');
      } else if (scrollY >= height * 0.5 && scrollY < height * 1.5) {
        setActiveSection('about');
      } else if (scrollY >= height * 1.5 && scrollY < height * 2.5) {
        setActiveSection('capabilities');
      } else if (scrollY >= height * 2.5 && scrollY < height * 3.5) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold font-mono tracking-wider group text-text-light">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent-blue to-accent-blue-hover flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-110 transition-transform duration-300">
            <span className="text-[10px] font-black text-black font-mono">&lt;/&gt;</span>
          </div>
          <span>
            Arunnissal<span className="text-accent-blue">.B</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-colors duration-300 relative group ${
                  isActive ? 'text-accent-blue' : 'text-text-muted hover:text-text-light'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent-blue transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            );
          })}

          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-md border border-accent-blue/30 text-text-light bg-accent-blue/10 hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 shadow-md hover:shadow-accent-blue/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-light hover:text-accent-blue focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full glassmorphism border-b border-white/5 py-6 px-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-light hover:text-accent-blue text-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 rounded-md border border-accent-blue/30 text-text-light bg-accent-blue/10 hover:bg-accent-blue hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
