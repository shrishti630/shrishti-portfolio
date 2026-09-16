import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Server, 
  Terminal, 
  Database, 
  Layout, 
  Monitor, 
  Network, 
  ShieldCheck, 
  GitBranch, 
  Zap, 
  Send, 
  Cpu,
  FileCode2,
  Layers
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { skillsData } from '../data/resumeData';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Server: Server,
  Terminal: Terminal,
  Database: Database,
  Layout: Layout,
  Monitor: Monitor,
  Network: Network,
  ShieldCheck: ShieldCheck,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Zap: Zap,
  Send: Send,
  Cpu: Cpu,
  FileCode2: FileCode2
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend Architecture' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools & Workflow' }
  ];

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-50 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>// TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Skills & Core Competencies
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hands-on technical stack built through real-world CRM development, NGO web apps, and national hackathon projects.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 shadow-xs'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Frontend Section */}
            {(activeCategory === 'all' || activeCategory === 'frontend') && (
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">Frontend Engineering</h3>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">React.js & Modern UI</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {skillsData.frontend.map((skill, idx) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all group shadow-xs cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 block mt-1">{skill.level}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Backend & APIs Section */}
            {(activeCategory === 'all' || activeCategory === 'backend') && (
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">Backend & Integration</h3>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">APIs, Express & Databases</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {skillsData.backend.map((skill, idx) => {
                    const IconComp = iconMap[skill.icon] || Server;
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:bg-white transition-all group shadow-xs cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 block mt-1">{skill.level}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Languages & Workflow */}
            {(activeCategory === 'all' || activeCategory === 'languages' || activeCategory === 'tools') && (
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">Languages & Tools</h3>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">Python, Git, Vite, SQL</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[...skillsData.languages, ...skillsData.tools].slice(0, 6).map((skill, idx) => {
                    const IconComp = iconMap[skill.icon] || Terminal;
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all group shadow-xs cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 block mt-1">{skill.level}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
