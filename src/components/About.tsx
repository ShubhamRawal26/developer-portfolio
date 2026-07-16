import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, GraduationCap, MapPin, Award, ArrowDownToLine, ChevronDown, ChevronUp } from 'lucide-react';
import { developerProfile, experiences } from '../data';

export default function About() {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const toggleExpand = (id: string) => {
    if (expandedExp === id) {
      setExpandedExp(null);
    } else {
      setExpandedExp(id);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-28 relative z-10 text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white/50">Background</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white uppercase mt-2">
            About My Journey
          </h2>
          <div className="h-[1px] w-16 bg-white/40 mx-auto mt-4" />
          <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
            From styling simple mockups to shipping edge micro-services. Here is who I am and where I've worked.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Bio Story Card (Left 5-cols) */}
          <div className="lg:col-span-5 space-y-6 sm:sticky sm:top-32">
            <div className="p-6 sm:p-8 rounded-[24px] glass-panel border border-white/20 space-y-6 text-left relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] pointer-events-none" />
              
              {/* Profile Details */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center font-display font-black text-xl sm:text-2xl shadow-lg shadow-white/10">
                  AM
                </div>
                <div>
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-white">
                    {developerProfile.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/60">
                    {developerProfile.title}
                  </p>
                </div>
              </div>

              {/* Bio text */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
                {developerProfile.bio}
              </p>

              {/* Quick info list */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm font-mono text-white/60">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0" />
                  <span>San Francisco Bay Area (Hybrid / Remote)</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-white shrink-0" />
                  <span>B.S. in Computer Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-white shrink-0" />
                  <span>6+ Years of Professional Engineering</span>
                </div>
              </div>

              {/* Resume download button */}
              <div className="pt-4">
                <a
                  id="resume-download-btn"
                  href={developerProfile.resumeUrl}
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white text-black hover:bg-white/90 font-display font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>{downloading ? "Compiling PDF..." : "Download Resume"}</span>
                </a>
                {downloading && (
                  <p className="text-[10px] font-mono text-center text-white/40 mt-2 animate-pulse">
                    ✓ Simulated CV payload sent to memory buffer
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Experience Timeline (Right 7-cols) */}
          <div id="experience" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-white" />
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white">
                Work Experience
              </h3>
            </div>

            {/* Timeline wrapper */}
            <div className="relative border-l border-white/20 ml-4 pl-6 sm:pl-8 space-y-6 py-2 text-left">
              {experiences.map((exp) => {
                const isExpanded = expandedExp === exp.id;
                return (
                  <div key={exp.id} className="relative group">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-black border border-white group-hover:bg-white transition-colors duration-300 shadow-md" />

                    {/* Timeline Card */}
                    <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 space-y-3">
                      {/* Meta */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h4 className="font-display font-extrabold text-base sm:text-lg uppercase tracking-wider text-white leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-bold text-white/60">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/40 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Summary text */}
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                        {exp.description[0]}
                      </p>

                      {/* Expandable details */}
                      {isExpanded ? (
                        <div className="space-y-2 mt-2 pt-2 border-t border-white/10">
                          {exp.description.slice(1).map((desc, dIdx) => (
                            <p key={dIdx} className="text-white/70 text-xs sm:text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-white/40 font-light leading-relaxed">
                              {desc}
                            </p>
                          ))}
                        </div>
                      ) : null}

                      {/* Toggle & Skill Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-white/80 text-[10px] font-mono uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                          {exp.tags.length > 3 && (
                            <span className="text-[10px] text-white/40 font-mono uppercase self-center">
                              +{exp.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Expand Button */}
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-1 text-xs text-white hover:opacity-75 font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <span>{isExpanded ? 'Show less' : 'View more'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
