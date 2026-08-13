import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Clock, Phone, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import emailjs from '@emailjs/browser';
import useTilt from '../hooks/useTilt';

// EmailJS Configuration Keys
const EMAILJS_SERVICE_ID = "service_yhipdig";
const EMAILJS_TEMPLATE_ID = "template_zp01d4f";
const EMAILJS_PUBLIC_KEY = "RKmqmsTQ5Z-NwcSeb";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formTilt = useTilt({ max: 5, scale: 1.01 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    // Fallback: If EmailJS keys are unconfigured, simulate transmission
    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1200);
      return;
    }

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Arunnissal B",
      },
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, (error) => {
      setIsSubmitting(false);
      setErrorMessage(`Transmission failure: ${error.text || 'Connection failed.'}`);
      console.error("EmailJS Error:", error);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signatureWords = ['IDEAS', 'CODE', 'SYSTEMS', 'IMPACT'];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 w-full relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
          {/* Left Column: Headline, Subtitle, Quick Channels, & System Status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
                <Mail size={12} className="animate-pulse" />
                <span>Secure Channels</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">
                LET'S BUILD <span className="text-gradient">SOMETHING USEFUL.</span>
              </h3>
              
              <p className="text-text-muted leading-relaxed text-sm font-sans">
                Have an idea, opportunity, or systems engineering problem worth solving? Drop a line to open communication channels.
              </p>
            </div>

            {/* Quick Action Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a 
                href="mailto:arunnissal45@gmail.com"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-accent-blue text-text-light hover:text-accent-blue text-xs font-bold font-mono transition-all duration-300"
              >
                <Mail size={12} />
                <span>EMAIL</span>
              </a>
              <a 
                href="https://linkedin.com/in/arunnissal-b-3a8a33328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-accent-blue text-text-light hover:text-accent-blue text-xs font-bold font-mono transition-all duration-300"
              >
                <Linkedin size={12} />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://github.com/arunnissal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-accent-blue text-text-light hover:text-accent-blue text-xs font-bold font-mono transition-all duration-300"
              >
                <Github size={12} />
                <span>GITHUB</span>
              </a>
            </div>

            {/* Visual Signature: SYSTEM STATUS */}
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/10 backdrop-blur-md space-y-2">
              <span className="text-[9px] font-mono font-bold text-accent-gold uppercase tracking-widest block">[SYSTEM.STATUS]</span>
              <div className="flex items-center justify-between gap-1.5 pt-1">
                {signatureWords.map((word, idx) => (
                  <React.Fragment key={word}>
                    <motion.div
                      animate={{ borderColor: ['rgba(6,182,212,0.15)', 'rgba(6,182,212,0.6)', 'rgba(6,182,212,0.15)'] }}
                      transition={{ repeat: Infinity, duration: 2, delay: idx * 0.4 }}
                      className="px-2 py-1 rounded border border-white/5 text-[9px] font-mono font-bold text-text-light bg-slate-900/30"
                    >
                      {word}
                    </motion.div>
                    {idx < signatureWords.length - 1 && (
                      <span className="text-[10px] text-text-muted">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Footer rights note */}
            <div className="text-[10px] text-text-muted font-mono pt-2">
              © {new Date().getFullYear()} Arunnissal B. Systems Engineer.
            </div>
          </div>

          {/* Right Column: Message Form with 3D Mouse Tilt */}
          <div 
            ref={formTilt.ref}
            style={formTilt.style}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-xl flex flex-col justify-center border border-white/5 group shadow-2xl relative"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <h4 className="text-text-light font-bold text-base mb-2 flex items-center gap-2">
                    <span className="text-accent-blue font-mono text-xs">[SECURE_CHANNEL]</span>
                    <span>Send system logs</span>
                  </h4>

                  {errorMessage && (
                    <div className="text-xs text-red-400 bg-red-950/20 border border-red-900/50 p-3 rounded font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-text-muted uppercase mb-1.5 font-mono">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/40 border border-slate-800 rounded px-4 py-2.5 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono placeholder-slate-600"
                      placeholder="Ident Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-text-muted uppercase mb-1.5 font-mono">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/40 border border-slate-800 rounded px-4 py-2.5 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono placeholder-slate-600"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-text-muted uppercase mb-1.5 font-mono">Message Logs</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900/40 border border-slate-800 rounded px-4 py-2.5 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono resize-none placeholder-slate-600"
                      placeholder="Enter details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold font-mono transition-all duration-300 shadow-md shadow-accent-blue/15 hover:shadow-accent-blue-hover/30 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT LOGS'}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="space-y-4 text-center py-8"
                >
                  <div className="w-12 h-12 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <CheckCircle size={24} className="animate-bounce" />
                  </div>
                  <h4 className="text-text-light font-bold text-lg uppercase tracking-wider font-mono">[TRANSMISSION_COMPLETE]</h4>
                  <p className="text-text-muted text-xs max-w-sm mx-auto leading-relaxed">
                    Data packets received successfully. Connection channel is open. I will reply shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
