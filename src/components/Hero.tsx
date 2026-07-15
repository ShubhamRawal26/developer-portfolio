import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code, Terminal, Sparkles, ChevronRight, Play } from 'lucide-react';
import { developerProfile } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Decorative vertical scroll hint from theme */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-30 select-none">
        <span className="rotate-[-90deg] font-display font-bold text-[10px] tracking-[0.4em] uppercase whitespace-nowrap text-black dark:text-white">Scroll for more</span>
        <div className="w-px h-24 bg-black dark:bg-white"></div>
      </div>

      {/* Absolute Watermark from theme */}
      <div className="absolute right-4 bottom-10 lg:bottom-1/4 flex flex-col items-end pointer-events-none select-none z-0">
        <span className="text-[100px] sm:text-[150px] md:text-[180px] lg:text-[220px] font-display font-black text-black/[0.04] dark:text-white/[0.04] leading-none select-none">DEV.</span>
      </div>

      {/* Ambient soft background glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-violet-400/5 dark:bg-violet-600/5 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-indigo-400/5 dark:bg-indigo-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy (Left) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10 text-xs font-bold tracking-[0.15em] uppercase"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Available for full-time opportunities</span>
            </motion.div>

            <div className="space-y-4 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-2">Portfolio / {new Date().getFullYear()}</span>
                <h1
                  id="hero-title-main"
                  className="font-display font-black text-[45px] sm:text-[75px] md:text-[95px] lg:text-[115px] xl:text-[130px] leading-[0.8] tracking-[-0.04em] uppercase text-black dark:text-white m-0"
                >
                  Creative<br/>
                  <span className="flex flex-wrap items-center gap-2 sm:gap-4">
                    Developer
                    <span className="h-[0.08em] w-[60px] sm:w-[150px] md:w-[200px] bg-black dark:bg-white inline-block mt-2 sm:mt-4"></span>
                  </span>
                </h1>
              </motion.div>
            </div>

            <motion.p
              id="hero-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-base sm:text-lg text-black/60 dark:text-white/65 font-light leading-relaxed"
            >
              Building high-performance digital interfaces with React, specializing in immersive motion design, robust state orchestration, and fluid layout typography.
            </motion.p>

            {/* CTAs */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                id="hero-btn-projects"
                onClick={() => scrollToSection('#projects')}
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-none bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs tracking-widest uppercase hover:opacity-90 hover:translate-x-1 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-none bg-transparent text-black dark:text-white font-display font-bold text-xs tracking-widest uppercase border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Interactive Code Mock (Right) */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto relative z-10">
            <motion.div
              id="hero-visual-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full rounded-none border border-black/15 dark:border-white/10 bg-white dark:bg-[#121212]/95 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/[0.03] dark:bg-black/50 border-b border-black/15 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-none bg-black dark:bg-white opacity-40" />
                  <span className="w-3 h-3 rounded-none bg-black dark:bg-white opacity-60" />
                  <span className="w-3 h-3 rounded-none bg-black dark:bg-white" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-black/50 dark:text-white/50 font-bold uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>terminal_core.sh</span>
                </div>
                <div className="w-12" /> {/* alignment spacer */}
              </div>

              {/* Terminal Content */}
              <div className="p-5 sm:p-6 space-y-4 text-left overflow-x-auto text-black dark:text-white">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-black/40 dark:text-white/40">
                    <span className="text-black dark:text-white font-bold">➜</span>
                    <span>~</span>
                    <span className="font-bold">whoami</span>
                  </div>
                  <div className="text-black/70 dark:text-white/70 pl-4 font-sans text-sm">
                    Alex Morgan — software generalist, visual detail lover, performance tinkerer.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-black/40 dark:text-white/40">
                    <span className="text-black dark:text-white font-bold">➜</span>
                    <span>~</span>
                    <span className="font-bold">cat skills.json</span>
                  </div>
                  <pre className="text-[11px] sm:text-xs text-black/60 dark:text-white/60 pl-4 font-mono leading-relaxed">
{`{
  "stack": ["React/Next.js", "TypeScript", "Node"],
  "design": ["TailwindCSS", "Framer Motion"],
  "databases": ["PostgreSQL", "Redis"],
  "philosophy": "bold_typography_first"
}`}
                  </pre>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-black/40 dark:text-white/40">
                    <span className="text-black dark:text-white font-bold">➜</span>
                    <span>~</span>
                    <span className="font-bold">npm run test:portfolio</span>
                  </div>
                  <div className="pl-4 space-y-1 font-mono text-xs">
                    <div className="text-black dark:text-white flex items-center gap-1.5 font-bold">
                      <span className="inline-block w-2 h-2 rounded-none bg-black dark:bg-white animate-pulse" />
                      <span>✓ portfolio compile success</span>
                    </div>
                    <div className="text-black/60 dark:text-white/60">✓ custom_selection synced</div>
                    <div className="text-black/60 dark:text-white/60">✓ bold_typography compiled</div>
                    <div className="font-bold mt-2 uppercase tracking-widest text-[11px] border-t border-black/15 dark:border-white/10 pt-2 text-black dark:text-white">
                      Status: Bold & Ready 🚀
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
