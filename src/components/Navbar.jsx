import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Navbar({ onOpenAestheticModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-sm shadow-slate-900/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <motion.a 
            href="#hero" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 text-lg">
                  SP
                </span>
              </div>
            </div>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-base tracking-tight block group-hover:text-indigo-600 transition-colors">
                Shrishti Pandey
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block -mt-1">
                Frontend Dev
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenAestheticModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200/80 rounded-lg transition-all shadow-xs cursor-pointer"
              title="View Design System & Aesthetic Inspiration"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Design Tokens</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry%20-%20Shrishti%20Pandey`}
              className="cyber-btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-xs tracking-wide shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenAestheticModal}
              className="p-2 text-indigo-600 bg-white border border-slate-200 rounded-lg shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="cyber-btn-primary w-full py-2.5 flex items-center justify-center gap-2 rounded-lg text-xs shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Contact & Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
