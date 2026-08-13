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
    { name: 'Experience', href: '#experience' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#achievements' },
    { name: 'Journal', href: '#buildlog' },
    { name: 'Architectures', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Math scroll spy indexing for 9 vertical full-screen snaps
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      
      const sections = ['home', 'about', 'experience', 'capabilities', 'projects', 'achievements', 'buildlog', 'terminal', 'contact'];
      const index = Math.min(Math.max(Math.floor((scrollY + height * 0.4) / height), 0), sections.length - 1);
      setActiveSection(sections[index]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-text-light hover:text-accent-blue transition-colors font-bold text-lg font-mono">
          <span className="p-1.5 rounded bg-accent-blue/10 text-accent-blue">
            <Terminal size={18} />
          </span>
          <span>Arunnissal.B</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 rounded text-[10px] font-semibold font-mono uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                  isActive ? 'text-accent-blue' : 'text-text-muted hover:text-text-light'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-accent-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="/resume.pdf"
            download="Arunnissal_B_Resume.pdf"
            className="ml-2 px-3 py-1.5 text-[10px] font-bold font-mono tracking-wider text-white bg-accent-blue hover:bg-accent-blue-hover rounded transition-colors duration-300"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-muted hover:text-text-light transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-850 bg-primary-dark"
          >
            <div className="px-6 py-4 flex flex-col gap-2.5 text-left">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-1.5 text-xs font-semibold font-mono uppercase tracking-wider transition-all duration-300 ${
                      isActive ? 'text-accent-blue pl-2 border-l-2 border-accent-blue' : 'text-text-muted hover:text-text-light'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="/resume.pdf"
                download="Arunnissal_B_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="py-2 text-center text-[10px] font-bold font-mono tracking-wider text-white bg-accent-blue hover:bg-accent-blue-hover rounded transition-colors"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
