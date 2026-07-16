import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, FolderKanban, X, Trophy, Sparkles } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import LiquidText from './LiquidText';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Frontend', 'Fullstack', 'AI & Data'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 relative z-10 text-slate-900 dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-slate-500 dark:text-white/50">Portfolio</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white uppercase mt-2">
            <LiquidText text="Featured Projects" />
          </h2>
          <div className="h-[1px] w-16 bg-slate-300 dark:bg-white/40 mx-auto mt-4" />
          <p className="mt-4 text-slate-600 dark:text-white/60 text-sm sm:text-base leading-relaxed">
            A hand-picked collection of software products I have designed, engineered, and shipped. Click on any card to dive deep.
          </p>
        </div>

        {/* Project Filters in Glass capsules */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white font-bold shadow-md shadow-slate-900/10 dark:shadow-white/10'
                  : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-white/70 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with Glass Panels */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl overflow-hidden glass-panel border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                {/* Card Header Illustration/Gradient */}
                <div className={`h-48 ${project.image} relative overflow-hidden flex items-center justify-center p-6 text-white`}>
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.04] bg-[radial-gradient(#888_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Floating category badge */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-slate-900/80 dark:bg-black/60 border border-black/10 dark:border-white/15 text-white text-[9px] font-mono tracking-widest uppercase">
                    {project.category}
                  </span>

                  {/* Icon Representation */}
                  <FolderKanban className="w-14 h-14 opacity-30 group-hover:scale-110 transition-transform duration-300" />

                  {/* Highlights Metric Pill */}
                  {project.metrics && (
                    <div className="absolute bottom-4 left-4 right-4 px-3 py-1.5 rounded-xl bg-slate-900/80 dark:bg-black/60 border border-black/10 dark:border-white/10 text-white text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Info Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {project.featured && (
                      <div className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-slate-500 dark:text-white/50 uppercase font-mono">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured Creation</span>
                      </div>
                    )}
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-slate-900 dark:text-white leading-tight group-hover:opacity-75 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/70 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-white/70 text-[9px] font-mono uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal Overlay with Glass Panel HUD */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 dark:bg-black/80 backdrop-blur-lg overflow-y-auto">
              {/* Dismiss Area */}
              <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl rounded-3xl glass-panel border border-black/10 dark:border-white/25 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header Graphic */}
                <div className={`h-40 ${selectedProject.image} relative flex items-center justify-center text-white shrink-0`}>
                  <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <FolderKanban className="w-16 h-16 opacity-30" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-slate-900 dark:bg-white/10 dark:hover:bg-white text-slate-800 dark:text-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Info Area */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left">
                  
                  {/* Title & Category */}
                  <div className="space-y-1">
                    <span className="px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-800 dark:text-white text-[10px] font-mono tracking-widest uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-wider text-slate-900 dark:text-white pt-2">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Highlights Banner */}
                  {selectedProject.metrics && (
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-slate-800 dark:text-white shrink-0" />
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white font-mono">
                        {selectedProject.metrics}
                      </div>
                    </div>
                  )}

                  {/* Narrative description */}
                  <div className="space-y-3">
                    <h4 className="font-display font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">
                      Project Overview
                    </h4>
                    <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-white/70 text-xs font-mono uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions bar */}
                  <div className="flex gap-4 pt-4 border-t border-black/10 dark:border-white/10 shrink-0">
                    <a
                      id="modal-github"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-black/5 hover:bg-slate-900 hover:text-white dark:bg-transparent dark:hover:bg-white/5 text-slate-800 dark:text-white font-display font-bold text-xs uppercase tracking-widest border border-black/15 dark:border-white/20 hover:border-black dark:hover:border-white transition-all text-center cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                    <a
                      id="modal-live"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-white/90 transition-all text-center cursor-pointer shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Site</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
