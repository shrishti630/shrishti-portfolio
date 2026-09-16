import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo, aestheticReferences } from '../data/resumeData';

export default function Footer({ onOpenAestheticModal }) {
  const iconVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 p-[1px]">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center font-bold text-indigo-600 text-sm">
                  SP
                </div>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-lg">
                Shrishti Pandey
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Frontend Developer & UI Specialist crafting responsive React.js web apps with modular component architecture and high-performance user interfaces.
            </p>

            {/* Social Icons with Staggered Fade-In & Hover Nudge */}
            <div className="flex items-center gap-3 pt-1">
              <motion.a 
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-colors shadow-xs"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>

              <motion.a 
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 transition-colors shadow-xs"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>

              <motion.a 
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-colors shadow-xs"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-900 uppercase tracking-wider font-bold">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-indigo-600 transition-colors">About & Persona</a></li>
              <li><a href="#skills" className="hover:text-indigo-600 transition-colors">Skills Arsenal</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 transition-colors">Featured Projects</a></li>
              <li><a href="#education" className="hover:text-indigo-600 transition-colors">Education & SIH 2024</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Aesthetic References Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono text-purple-700 uppercase tracking-wider font-bold">Design Tokens</h4>
              <button 
                onClick={onOpenAestheticModal}
                className="text-[10px] font-mono text-indigo-600 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                <Sparkles className="w-3 h-3 text-indigo-600" />
                <span>Tokens Modal</span>
              </button>
            </div>
            <ul className="space-y-1.5 text-xs font-medium">
              {aestheticReferences.map((ref, idx) => (
                <li key={idx}>
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-indigo-600 transition-colors flex items-center justify-between text-[11px]"
                  >
                    <span>{ref.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{ref.url.replace('https://www.', '')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 Shrishti Pandey. Built with React & Tailwind.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Clean Light Theme • Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
