import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { education, achievements } from '../data/resumeData';

export default function EducationAchievements() {
  return (
    <section id="education" className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-mono text-purple-700 font-semibold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>// ACADEMICS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Education & National Honors
          </h2>
          <p className="text-sm text-slate-600">
            Academic performance combined with national hackathon grand finalist recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Education Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>Academic Credentials</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all space-y-2 relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-bold">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">{edu.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans'] pt-1">
                    {edu.degree}
                  </h4>

                  <p className="text-xs font-semibold text-purple-700">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Achievements & Honors Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Key Achievements</span>
            </h3>

            <div className="space-y-4">
              
              {/* Smart India Hackathon Card */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-6 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white space-y-3 relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Trophy className="w-24 h-24 text-amber-600" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>NATIONAL FINALIST</span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Smart India Hackathon 2024 Grand Finalist
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Selected among top engineering teams across India for designing an AI Streamlit drone road construction surveillance platform.
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Ministry of Education Recognition</span>
                </div>
              </motion.div>

              {/* Research Paper Card */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-6 rounded-2xl border border-purple-200/90 bg-gradient-to-br from-purple-50/80 via-indigo-50/40 to-white space-y-3 shadow-sm hover:shadow-md"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-100 text-purple-900 text-xs font-mono font-bold">
                  <Award className="w-3.5 h-3.5 text-purple-600" />
                  <span>PUBLISHED RESEARCH</span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Co-Authored 3D Virtual Try-On Research Paper
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Co-authored academic paper investigating 3D mannequin cloth fitting visualization based on parametric body measurements.
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-purple-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Academic Conference Publication</span>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
