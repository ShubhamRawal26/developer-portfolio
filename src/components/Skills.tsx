import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Laptop, Database, Cpu, HardDrive, ShieldCheck } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'Specialized'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Laptop className="w-5 h-5 text-black dark:text-white" />;
      case 'Backend':
        return <Database className="w-5 h-5 text-black dark:text-white" />;
      case 'DevOps & Tools':
        return <Cpu className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <HardDrive className="w-5 h-5 text-black dark:text-white" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#fafafa] dark:bg-[#050505] text-black dark:text-white border-t border-black/10 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">Expertise</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-black dark:text-white uppercase mt-2">
            Technical Superpowers
          </h2>
          <div className="h-1 w-16 bg-black dark:bg-white mx-auto mt-4" />
          <p className="mt-4 text-black/60 dark:text-white/60 text-sm sm:text-base leading-relaxed">
            I am dedicated to writing clean code, designing solid backend systems, and crafting responsive user flows.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white font-bold'
                  : 'bg-transparent text-black/60 dark:text-white/60 border-black/15 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-6 rounded-none bg-white dark:bg-[#121212] border border-black/15 dark:border-white/10 shadow-none hover:border-black dark:hover:border-white transition-all group"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-none bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-black dark:text-white uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-black dark:text-white">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Progress Bar Container */}
              <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-none overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-black dark:bg-white rounded-none"
                />
              </div>

              {/* Sub-label for category badge inside card */}
              <div className="mt-2.5 flex justify-between items-center">
                <span className="text-[10px] text-black/40 dark:text-white/40 font-mono tracking-wider uppercase">
                  {skill.category}
                </span>
                <span className="text-[10px] text-black/40 dark:text-white/40 font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Advanced Competency
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Stats Footer Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-none border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider">Looking for a specific tech stack?</h4>
            <p className="opacity-80 text-xs sm:text-sm max-w-xl">
              I love picking up new libraries, architectural paradigms, or server tooling. Let's talk about your company's workflow.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-4 rounded-none bg-white dark:bg-black text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-white font-display font-bold text-xs uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>

      </div>
    </section>
  );
}
