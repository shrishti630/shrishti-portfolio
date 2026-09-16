import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/resumeData';

export default function EducationAchievements() {
  return (
    <section id="achievements" className="dark-section py-20 md:py-28 bg-[#16181b] relative overflow-hidden text-slate-200">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Centered Header Divider */}
        <div className="header-center">
          <h3>Achievements &amp; Honors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e2229] border border-slate-700/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-indigo-500/60 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                  {index === 0 ? <Trophy className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </div>

                <div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    {item.organization}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white pt-1">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>Verified Distinction</span>
                </span>
                <span className="text-slate-500">2024 / 2025</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
