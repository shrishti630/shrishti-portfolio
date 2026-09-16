import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold shadow-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Work Experience & Internships
          </h2>
          <p className="text-sm text-slate-600">
            Proven frontend track record across CRM platforms, localized web apps, and digital commerce integrations.
          </p>
        </motion.div>

        {/* Vertical Light Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Static Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 hidden sm:block"></div>

          {/* Dynamic Scroll-Animated Timeline Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-600 via-purple-600 to-sky-500 -translate-x-1/2 origin-top hidden sm:block shadow-xs"
          ></motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Glowing Pop Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`w-6 h-6 rounded-full border-2 ${
                        exp.current 
                          ? 'bg-indigo-600 border-white shadow-md shadow-indigo-600/30' 
                          : 'bg-white border-purple-500 shadow-sm'
                      } flex items-center justify-center`}
                    >
                      {exp.current && <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>}
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:text-left' : 'sm:text-left'
                    }`}
                  >
                    <motion.div 
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all space-y-4"
                    >
                      
                      {/* Top Header: Role & Status */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[11px] font-mono text-indigo-700 font-semibold">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                              Present Role
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500 flex items-center gap-1 font-normal">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Brief Overview */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 pt-2 border-t border-slate-100 text-left">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
