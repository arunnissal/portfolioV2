import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Clock, Phone } from 'lucide-react';
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

    // Fallback: If you haven't configured EmailJS keys yet, run a mock submit simulation
    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      console.warn("EmailJS placeholders active. Simulating email transmission...");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1200);
      return;
    }

    // Call EmailJS to transmit message
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
      setErrorMessage(`Transmission failure: ${error.text || 'Verify your EmailJS keys or service connection'}`);
      console.error("EmailJS Error:", error);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 w-full relative">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-1">Get In Touch</h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Info & Status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text-light">Let's Connect</h3>
              <p className="text-text-muted leading-relaxed text-sm text-left">
                Whether you have a question, want to collaborate on a project, or just talk software engineering, feel free to drop a message!
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3 py-2 text-left">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-slate-200/50 hover:border-accent-blue/30 transition-all duration-300">
                <div className="p-3 rounded bg-accent-blue/10 text-accent-blue">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-text-light text-xs font-semibold">Email Me</h4>
                  <a href="mailto:arunnissal45@gmail.com" className="text-text-muted text-xs hover:text-accent-blue transition-colors">
                    arunnissal45@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-slate-200/50 hover:border-accent-blue-hover/30 transition-all duration-300">
                <div className="p-3 rounded bg-accent-blue-hover/10 text-accent-blue-hover">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-text-light text-xs font-semibold">Call Me</h4>
                  <a href="tel:+919361572429" className="text-text-muted text-xs hover:text-accent-blue-hover transition-colors">
                    +91 9361572429
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-slate-200/50 hover:border-accent-blue/30 transition-all duration-300">
                <div className="p-3 rounded bg-accent-blue/10 text-accent-blue">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-text-light text-xs font-semibold">Location</h4>
                  <p className="text-text-muted text-xs font-mono">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 border border-slate-200/50 hover:border-accent-blue/35 transition-all duration-300">
                <div className="p-3 rounded bg-accent-teal/10 text-accent-teal">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-text-light text-xs font-semibold">Developer Status</h4>
                  <p className="text-text-muted text-xs flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open for roles
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-4 items-center justify-between text-xs text-text-muted">
              <p>© {new Date().getFullYear()} Arunnissal B. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/arunnissal" target="_blank" rel="noopener noreferrer" className="hover:text-text-light transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/arunnissal-b-3a8a33328" target="_blank" rel="noopener noreferrer" className="hover:text-text-light transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container with 3D Mouse Tilt */}
          <div 
            ref={formTilt.ref}
            style={formTilt.style}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-xl flex flex-col justify-center border border-white/50"
          >
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
                  <h4 className="text-text-light font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-accent-blue font-mono text-sm">[SECURE_CHANNEL]</span>
                    <span>Send a Message</span>
                  </h4>

                  {errorMessage && (
                    <div className="text-xs text-red-600 bg-red-100 border border-red-200 p-3 rounded font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text-muted mb-2 font-mono">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-slate-200/60 rounded px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono shadow-sm"
                      placeholder="Enter name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-muted mb-2 font-mono">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-slate-200/60 rounded px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono shadow-sm"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-text-muted mb-2 font-mono">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/70 border border-slate-200/60 rounded px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all font-mono resize-none shadow-sm"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold transition-all duration-300 shadow-lg shadow-accent-blue/15 hover:shadow-accent-blue-hover/30 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
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
                  <div className="w-16 h-16 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(2,132,199,0.2)]">
                    <CheckCircle size={32} className="animate-bounce" />
                  </div>
                  <h4 className="text-text-light font-bold text-xl uppercase tracking-wider font-mono">[TRANSMISSION_COMPLETE]</h4>
                  <p className="text-text-muted text-sm max-w-sm mx-auto leading-relaxed">
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
