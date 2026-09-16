import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo, statistics } from '../data/resumeData';

export default function Hero() {
  const [activePersona, setActivePersona] = useState('combined');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid radial-vignette">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-600 -ml-4"></span>
              <span className="font-mono text-xs text-indigo-700 font-semibold tracking-wide">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] leading-[1.1]">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600">Responsive & Interactive</span> Web Experiences.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong>. A {personalInfo.title} specializing in React.js, Tailwind CSS, API integration, and modular component architecture.
              </p>
            </motion.div>

            {/* Quick Tech Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Express JS', 'Vite', 'FastAPI'].map((tech) => (
                <motion.span 
                  key={tech}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-xs"
                >
                  #{tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="cyber-btn-primary px-6 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 group shadow-lg"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="cyber-btn-secondary px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200 flex items-center gap-6 text-slate-600">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Connect:</span>
              <motion.a 
                whileHover={{ scale: 1.05, y: -1 }}
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-indigo-600 transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -1 }}
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-indigo-600 transition-colors font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -1 }}
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-indigo-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Dual Persona Interactive Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden border border-slate-200/90 shadow-xl bg-white/90">
              
              {/* Top Persona Toggle Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-xs font-mono text-slate-500 font-medium">shrishti_persona.config.js</span>
              </div>

              {/* Interactive Switch Buttons */}
              <div className="my-4 p-1 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-1">
                <button
                  onClick={() => setActivePersona('coder')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activePersona === 'coder' 
                      ? 'bg-indigo-600 text-white font-bold shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Coder</span>
                </button>

                <button
                  onClick={() => setActivePersona('combined')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activePersona === 'combined' 
                      ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-bold shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Hybrid</span>
                </button>

                <button
                  onClick={() => setActivePersona('designer')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activePersona === 'designer' 
                      ? 'bg-purple-600 text-white font-bold shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>UI Craftsman</span>
                </button>
              </div>

              {/* Dynamic Content View based on Toggle */}
              <div className="space-y-4 min-h-[160px]">
                {activePersona === 'coder' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2 shadow-inner"
                  >
                    <div className="text-indigo-400">// React & State Engineering</div>
                    <div><span className="text-sky-400">const</span> developer = &#123;</div>
                    <div className="pl-4">name: <span className="text-emerald-400">'Shrishti Pandey'</span>,</div>
                    <div className="pl-4">role: <span className="text-emerald-400">'Website Developer @ iBraine'</span>,</div>
                    <div className="pl-4">stack: [<span className="text-amber-300">'React.js'</span>, <span className="text-amber-300">'Tailwind'</span>, <span className="text-amber-300">'REST API'</span>],</div>
                    <div className="pl-4">reusableComponents: <span className="text-indigo-300">true</span>,</div>
                    <div className="pl-4">marathiLocalization: <span className="text-indigo-300">true</span></div>
                    <div>&#125;;</div>
                  </motion.div>
                )}

                {activePersona === 'designer' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 p-4 rounded-xl border border-purple-200 space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-purple-700 font-semibold">
                      <span>UI & Visual System</span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-[10px] font-bold">Glassmorphism</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 shadow-xs"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-600 shadow-xs"></div>
                        <div className="w-6 h-6 rounded-full bg-sky-500 shadow-xs"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-600">Clean Slate Palette</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clean slate grid layouts, 8pt spatial padding, responsive light card structures, and high contrast typography.
                    </p>
                  </motion.div>
                )}

                {activePersona === 'combined' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-3"
                  >
                    <div className="bg-indigo-50/80 p-3.5 rounded-xl border border-indigo-200 flex items-start gap-3">
                      <Zap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 font-['Plus_Jakarta_Sans']">The Dual Advantage</h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Combining front-end React architecture with pixel-perfect UI craftsmanship.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-indigo-700 flex items-center gap-2 shadow-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Reusable Modules</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-purple-700 flex items-center gap-2 shadow-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>FastAPI & REST APIs</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>iBraine CRM Developer</span>
                </span>
                <span className="text-indigo-600 font-bold">CGPA: 7.88</span>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* Stats Highlight Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statistics.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-indigo-300 transition-all"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-['Plus_Jakarta_Sans']">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-indigo-600 uppercase tracking-wider font-semibold">{stat.detail}</span>
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
