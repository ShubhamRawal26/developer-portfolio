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
      className="relative z-10 text-white transition-colors py-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & copyright */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 font-display font-black text-lg tracking-wider uppercase">
              <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center font-black text-sm">
                AM
              </span>
              <span className="text-white font-extrabold">{developerProfile.name}</span>
            </div>
            <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-white/50">
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
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin"
              href={developerProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-twitter"
              href={developerProfile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Build Info & Back to top */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white/40">
              <span>MADE WITH</span>
              <Heart className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>USING REACT</span>
            </div>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-white text-black hover:bg-white/80 transition-all cursor-pointer shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
