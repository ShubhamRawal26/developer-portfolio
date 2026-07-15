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
      className="py-20 sm:py-28 bg-white dark:bg-[#050505] text-black dark:text-white border-t border-black/10 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">Background</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-black dark:text-white uppercase mt-2">
            About My Journey
          </h2>
          <div className="h-1 w-16 bg-black dark:bg-white mx-auto mt-4" />
          <p className="mt-4 text-black/60 dark:text-white/60 text-sm sm:text-base leading-relaxed">
            From styling simple mockups to shipping edge micro-services. Here is who I am and where I've worked.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Bio Story Card (Left 5-cols) */}
          <div className="lg:col-span-5 space-y-6 sm:sticky sm:top-24">
            <div className="p-6 sm:p-8 rounded-none bg-black/[0.01] dark:bg-white/[0.01] border-2 border-black dark:border-white space-y-6">
              
              {/* Profile Details */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-display font-black text-xl sm:text-2xl">
                  AM
                </div>
                <div>
                  <h3 className="font-display font-black text-lg uppercase tracking-wider text-black dark:text-white">
                    {developerProfile.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-black/55 dark:text-white/55">
                    {developerProfile.title}
                  </p>
                </div>
              </div>

              {/* Bio text */}
              <p className="text-black/70 dark:text-white/70 text-sm sm:text-base leading-relaxed">
                {developerProfile.bio}
              </p>

              {/* Quick info list */}
              <div className="space-y-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-3 text-black/60 dark:text-white/60">
                  <MapPin className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span>San Francisco Bay Area (Hybrid / Remote)</span>
                </div>
                <div className="flex items-center gap-3 text-black/60 dark:text-white/60">
                  <GraduationCap className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span>B.S. in Computer Science</span>
                </div>
                <div className="flex items-center gap-3 text-black/60 dark:text-white/60">
                  <Award className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span>6+ Years of Professional Engineering</span>
                </div>
              </div>

              {/* Resume download button */}
              <div className="pt-4">
                <a
                  id="resume-download-btn"
                  href={developerProfile.resumeUrl}
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-none bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>{downloading ? "Compiling PDF..." : "Download Resume"}</span>
                </a>
                {downloading && (
                  <p className="text-[11px] font-mono text-center text-black/50 dark:text-white/50 mt-2 animate-pulse">
                    ✓ Simulated CV payload sent to memory buffer
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Experience Timeline (Right 7-cols) */}
          <div id="experience" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-black dark:text-white" />
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-black dark:text-white">
                Work Experience
              </h3>
            </div>

            {/* Timeline wrapper */}
            <div className="relative border-l-2 border-black dark:border-white ml-4 pl-6 sm:pl-8 space-y-10 py-2">
              {experiences.map((exp, index) => {
                const isExpanded = expandedExp === exp.id;
                return (
                  <div key={exp.id} className="relative group">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-none bg-white dark:bg-[#050505] border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300" />

                    {/* Timeline Card */}
                    <div className="space-y-3">
                      {/* Meta */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h4 className="font-display font-extrabold text-base sm:text-lg uppercase tracking-wider text-black dark:text-white leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-bold text-black/60 dark:text-white/60">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-black/40 dark:text-white/40 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Summary text */}
                      <p className="text-black/70 dark:text-white/70 text-xs sm:text-sm leading-relaxed">
                        {exp.description[0]}
                      </p>

                      {/* Expandable details */}
                      {isExpanded ? (
                        <div className="space-y-2 mt-2 pt-2 border-t border-black/10 dark:border-white/10">
                          {exp.description.slice(1).map((desc, dIdx) => (
                            <p key={dIdx} className="text-black/70 dark:text-white/70 text-xs sm:text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-black dark:before:text-white">
                              {desc}
                            </p>
                          ))}
                        </div>
                      ) : null}

                      {/* Toggle & Skill Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-none border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-black/70 dark:text-white/70 text-[10px] sm:text-xs font-mono uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                          {exp.tags.length > 4 && (
                            <span className="text-[10px] sm:text-xs text-black/40 dark:text-white/40 font-mono uppercase self-center">
                              +{exp.tags.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Expand Button */}
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-1 text-xs text-black dark:text-white hover:opacity-75 font-bold uppercase tracking-wider cursor-pointer"
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
