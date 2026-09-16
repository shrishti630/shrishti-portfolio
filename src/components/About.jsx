import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code2, 
  GraduationCap, 
  Download, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, education } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="light-section py-20 md:py-28 bg-[#fbfbfc] relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Centered Header Divider */}
        <div className="header-center">
          <h3>About me</h3>
        </div>

        {/* Dual Identity Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: The Designer in Me */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  The Designer in Me
                </h4>
                <p className="text-xs text-purple-700 font-medium font-mono">
                  UI Craftsman &amp; Design Systems
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I believe that great software starts with empathy and thoughtful visual design. Whether architecting clean multi-tenant CRM interfaces at <strong className="text-slate-900">iBraine Digital</strong> or implementing full Marathi language localization for NGO platforms at <strong className="text-slate-900">AIVOT AI</strong>, my focus is always on clarity, accessibility, and intuitive interactions.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Scalable Design Systems &amp; 8pt Grid Discipline</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Intuitive Component Reusability &amp; Micro-animations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Localization &amp; Accessible User Journeys</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Coder in Me */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  The Coder in Me
                </h4>
                <p className="text-xs text-indigo-700 font-medium font-mono">
                  Frontend Engineer &amp; API Integrator
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Clean code is my craft. With a solid computer engineering foundation (CGPA 7.88) and distinction in science and mathematics (91.50%), I translate visual ideas into robust, modular React.js code. I specialize in REST API integrations, state handling, FastAPI authentication workflows, and high-performance Tailwind styling.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>React.js, Vite &amp; Modern ES6+ JavaScript</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>REST APIs, FastAPI &amp; Express Integration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Smart India Hackathon 2024 Grand Finalist</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Education Highlight Row */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans'] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Education &amp; Academic Excellence</span>
            </h4>
            <span className="text-xs font-mono text-slate-500">Computer Engineering</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-700 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <h5 className="text-base font-bold text-slate-900 pt-1">
                    {edu.degree}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Shrishti%20Pandey`}
            className="btn-adham btn-adham-primary text-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Resume</span>
          </a>
          <a
            href="#contact"
            className="btn-adham btn-adham-secondary text-xs"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
