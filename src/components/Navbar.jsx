import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Mail, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';

export default function Navbar({ onOpenAestheticModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'portfolio', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs' 
          : 'bg-white/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Distinct Highlighted Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                <span className="font-['Syne'] font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  SP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Syne'] font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                SHRISHTI<span className="text-indigo-600">.</span>PANDEY
              </span>
            </div>
          </a>

          {/* Desktop Lowercase Navigation (Adham Dannaway style) */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors lowercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons Right Beside Nav */}
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* Adham Dannaway Click to copy email in Navbar */}
              <button
                onClick={copyEmail}
                className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer relative group"
                title="Click to copy my email address to your clipboard 😀"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
                <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {copiedEmail ? 'Copied!' : 'Copy email'}
                </span>
              </button>
            </div>

            {/* Design System & Resume Buttons */}
            <div className="flex items-center gap-2">
              {onOpenAestheticModal && (
                <button
                  onClick={onOpenAestheticModal}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 transition-colors cursor-pointer flex items-center gap-1.5"
                  title="View Design Tokens & Reference Sites"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tokens</span>
                </button>
              )}

              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Shrishti%20Pandey`}
                className="btn-adham btn-adham-primary text-xs py-2 px-3.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="p-2 text-slate-700 bg-white border border-slate-200 rounded-lg"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 bg-white border border-slate-200 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-6 border-t border-slate-100 mt-3 space-y-3"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg lowercase"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-600 border border-slate-200 rounded-lg"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-600 border border-slate-200 rounded-lg"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Shrishti%20Pandey`}
                  className="btn-adham btn-adham-primary text-xs py-2 px-3"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
