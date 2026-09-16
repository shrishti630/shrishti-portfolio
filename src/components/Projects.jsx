import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Calendar, 
  ArrowUpRight, 
  X,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: '⭐ Featured' },
    { id: 'sih', label: '🏆 SIH Hackathon' },
    { id: 'react', label: 'React / Frontend' }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'featured') return p.featured;
    if (activeFilter === 'sih') return p.category.includes('SIH');
    if (activeFilter === 'react') return p.tech.some(t => t.toLowerCase().includes('react'));
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-50 overflow-hidden">
      
      {/* Background Mesh Accent */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>// CODE IN PRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Featured Projects & Innovations
          </h2>
          <p className="text-sm text-slate-600">
            From National Hackathon finalists to AI 3D virtual try-ons and real-time TMDB web applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 shadow-xs'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Staggered Reveals */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 group relative overflow-hidden transition-all"
              >
                {/* Subtle top indigo glow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-4">
                  
                  {/* Header Category & Date */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-mono text-purple-700 font-bold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans'] group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights List */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-[11px] text-slate-700 flex items-start gap-1.5 font-medium">
                        <span className="text-indigo-600 font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card Footer: Tech Chips & Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 border border-slate-200/80 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <motion.button
                      whileHover={{ x: 2 }}
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>

                    <div className="flex items-center gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors"
                        title="View GitHub Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6"
            >
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 border border-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold">
                  {selectedProject.category} • {selectedProject.date}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-indigo-600 font-semibold uppercase tracking-wider">Key Highlights & Architecture:</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Technology Stack:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-indigo-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn-secondary px-5 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-600 hover:text-slate-900 bg-slate-100 cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
