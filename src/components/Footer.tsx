import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';
import { developerProfile } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="app-footer"
      className="bg-white dark:bg-[#050505] text-black dark:text-white border-t border-black/10 dark:border-white/10 transition-colors py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & copyright */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-display font-black text-lg tracking-wider uppercase">
              <span className="bg-black dark:bg-white text-white dark:text-black w-6 h-6 rounded-none flex items-center justify-center font-bold">
                AM
              </span>
              <span>{developerProfile.name}</span>
            </div>
            <p className="text-xs text-black/50 dark:text-white/50 font-mono tracking-wider uppercase">
              &copy; {new Date().getFullYear()} {developerProfile.name}. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              id="footer-github"
              href={developerProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-none bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="footer-linkedin"
              href={developerProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-none bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="footer-twitter"
              href={developerProfile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-none bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Build Info & Back to top */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-black/40 dark:text-white/40">
              <span>MADE WITH</span>
              <Heart className="w-3.5 h-3.5 text-black dark:text-white animate-pulse" />
              <span>USING REACT</span>
            </div>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-3 rounded-none border border-black/15 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
