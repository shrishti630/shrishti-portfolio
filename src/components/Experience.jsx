import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="light-section py-20 md:py-28 bg-[#fbfbfc] relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Centered Header Divider */}
        <div className="header-center">
          <h3>Work Experience</h3>
        </div>

        {/* Clean Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Top Row: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono text-indigo-600 font-semibold tracking-wide">
                    {exp.company}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    {exp.role}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Present
                    </span>
                  )}
                </div>
              </div>

              {/* Description & Key Highlights */}
              <div className="pt-4 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
