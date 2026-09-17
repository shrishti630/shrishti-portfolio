import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code2 
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const designerSkills = [
    { name: "Tailwind CSS", desc: "Advanced responsive utility styling, animations, and custom theme tokens", level: "Expert" },
    { name: "UI Design Systems", desc: "Modular reusable component patterns, 8pt spatial grid, design tokens", level: "Advanced" },
    { name: "Responsive Web Design", desc: "Mobile-first layouts, multi-screen fluid adaptation, cross-browser compatibility", level: "Expert" },
    { name: "Accessible Web (a11y)", desc: "Semantic HTML5, Marathi localization, screen-reader friendly architecture", level: "Advanced" },
    { name: "Micro-interactions", desc: "CSS transforms, Framer Motion springs, state transition feedbacks", level: "Advanced" },
    { name: "Modern HTML5 & CSS3", desc: "Semantic tags, CSS Grid, Flexbox, custom variables, responsive media", level: "Expert" }
  ];

  const coderSkills = [
    { name: "React.js (v18/19)", desc: "Hooks, functional components, state architecture, custom hooks, virtual DOM", level: "Advanced" },
    { name: "JavaScript (ES6+)", desc: "Asynchronous JS, promises, async/await, DOM APIs, modern data structures", level: "Advanced" },
    { name: "REST APIs & Fetching", desc: "Endpoint consumption, error handling, debouncing, JSON serialization", level: "Advanced" },
    { name: "FastAPI & Express.js", desc: "Authentication endpoints, middleware integration, backend routing", level: "Intermediate" },
    { name: "Vite & Tooling", desc: "Lightning fast bundling, HMR, environment configurations, build optimization", level: "Advanced" },
    { name: "Git & Version Control", desc: "Branching strategies, collaborative workflows, GitHub repository hygiene", level: "Advanced" }
  ];

  return (
    <section id="skills" className="dark-section py-20 md:py-28 bg-[#16181b] relative overflow-hidden text-slate-200">
      
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Signature Centered Section Header */}
        <div className="header-center">
          <h3>Skills &amp; Tools</h3>
        </div>
        <div className="text-center -mt-8 mb-10">
          <span className="font-['Caveat'] text-lg sm:text-xl text-indigo-400 font-normal -rotate-1 inline-block tracking-wider">
            * core technology stack &amp; modern developer tools
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Dual Arsenal (Both)' },
            { id: 'designer', label: '🎨 Design & UI Crafts' },
            { id: 'coder', label: '💻 Frontend & Code' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 font-bold shadow-md'
                  : 'bg-[#22262d] text-slate-400 hover:text-white hover:bg-[#2c313a] border border-[#2f3540]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Designer Side */}
          {(activeTab === 'all' || activeTab === 'designer') && (
            <motion.div
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1c2026] rounded-2xl border border-slate-700/80 p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      designer skills
                    </h4>
                    <p className="text-xs text-purple-400 font-mono">
                      User Interface &amp; Visual Ergonomics
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                  UI Crafts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {designerSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#232830] border border-slate-700/50 hover:border-purple-500/50 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-purple-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Coder Side */}
          {(activeTab === 'all' || activeTab === 'coder') && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1c2026] rounded-2xl border border-slate-700/80 p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono">
                      &lt;coder&gt; skills
                    </h4>
                    <p className="text-xs text-indigo-400 font-mono">
                      Frontend Architecture &amp; APIs
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60">
                  Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coderSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#232830] border border-slate-700/50 hover:border-indigo-500/50 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
