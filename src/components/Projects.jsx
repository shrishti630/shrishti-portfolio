import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'featured', label: '⭐ Featured' },
    { id: 'react', label: 'React / Frontend' },
    { id: 'ai', label: 'AI & 3D Web' },
    { id: 'sih', label: 'SIH Hackathon' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'featured') return p.featured;
    if (activeFilter === 'react') return p.tech.some(t => t.toLowerCase().includes('react'));
    if (activeFilter === 'ai') return p.category.includes('AI') || p.id === 'virtual-tryon';
    if (activeFilter === 'sih') return p.category.includes('SIH');
    return true;
  });

  return (
    <section id="projects" className="dark-section py-20 md:py-28 bg-[#16181b] relative overflow-hidden text-slate-200">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Signature Centered Section Header */}
        <div className="header-center">
          <h3>Some of my latest work</h3>
        </div>
        <div className="text-center -mt-8 mb-10">
          <span className="font-['Caveat'] text-xl sm:text-2xl text-purple-400 font-bold -rotate-1 inline-block">
            * interactive case studies &amp; live production applications
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-white text-slate-900 font-semibold shadow-md'
                  : 'bg-[#22262d] text-slate-400 hover:text-white hover:bg-[#2c313a] border border-[#2f3540]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Adham Dannaway .thumbs Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="thumb-card group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Thumbnail Image with Subtle Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800 p-2 sm:p-2.5 pb-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-amber-400/30">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Card Description & Adham Dannaway Arrow Right (.arrow-r) */}
                <div className="p-5 flex items-center justify-between gap-4 flex-1">
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 truncate">
                      {project.type || project.category}
                    </p>
                  </div>

                  {/* Arrow Indicator Button */}
                  <div className="arrow-r-btn shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/shrishti630"
            target="_blank"
            rel="noreferrer"
            className="btn-adham btn-adham-secondary text-xs inline-flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>See more repositories on GitHub</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#1b1e24] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-200"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-900">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedProject.date}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Features &amp; Implementation
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-[#272c35] text-xs font-mono text-indigo-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-adham btn-adham-secondary text-xs flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Code on GitHub</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-adham btn-adham-accent text-xs flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Explore Repository</span>
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
