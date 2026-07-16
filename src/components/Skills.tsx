import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Laptop, Database, Cpu, HardDrive, Sparkles } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'Specialized'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Laptop className="w-4 h-4 text-white" />;
      case 'Backend':
        return <Database className="w-4 h-4 text-white" />;
      case 'DevOps & Tools':
        return <Cpu className="w-4 h-4 text-white" />;
      default:
        return <HardDrive className="w-4 h-4 text-white" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 relative z-10 text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white/50">Expertise</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white uppercase mt-2">
            Technical Superpowers
          </h2>
          <div className="h-[1px] w-16 bg-white/40 mx-auto mt-4" />
          <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
            I am dedicated to writing clean code, designing solid backend systems, and crafting responsive user flows.
          </p>
        </div>

        {/* Category Tabs / Filters with Glass Capsules */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-white text-black border-white font-bold shadow-md shadow-white/10'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid in Glass style */}
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
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 hover:border-white/25 transition-all group text-left relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="font-display font-black text-sm sm:text-base text-white uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-white">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Progress Bar Container */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
              </div>

              {/* Sub-label for category badge inside card */}
              <div className="mt-2.5 flex justify-between items-center">
                <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase">
                  {skill.category}
                </span>
                <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Advanced Competency
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Stats Glass Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-white/20 glass-panel text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span>Looking for a specific tech stack?</span>
            </h4>
            <p className="opacity-80 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
              I love picking up new libraries, architectural paradigms, or server tooling. Let's talk about your company's workflow.
            </p>
          </div>
          
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-4 rounded-xl bg-white text-black hover:bg-white/90 font-display font-bold text-xs uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap relative z-10 shadow-md"
          >
            Contact Now
          </button>
        </div>

      </div>
    </section>
  );
}
