import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { developerProfile } from '../data';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display font-black text-lg sm:text-xl tracking-[0.15em] text-black dark:text-white flex items-center gap-2.5 group uppercase"
        >
          <span className="bg-black dark:bg-white text-white dark:text-black w-8 h-8 rounded-none flex items-center justify-center font-black text-sm tracking-tighter">
            AM
          </span>
          <span className="hidden sm:inline font-bold">
            {developerProfile.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 font-display font-bold text-xs tracking-widest uppercase text-black/60 dark:text-white/60">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-black dark:hover:text-white transition-colors relative py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10" />

          {/* Social Icons (Desktop) */}
          <div className="flex items-center gap-3">
            <a
              id="header-github"
              href={developerProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="header-linkedin"
              href={developerProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10" />

          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle-desktop"
            onClick={toggleDarkMode}
            className="p-2 rounded-none border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors relative"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ y: -10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Controls (Dark Mode + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="dark-mode-toggle-mobile"
            onClick={toggleDarkMode}
            className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-[#050505] border-b border-black/10 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      id={`mobile-nav-link-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block py-2.5 px-3 font-display font-bold text-xs tracking-widest uppercase text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-black/10 dark:bg-white/10 mx-3" />

              {/* Social Links & Resume inside Mobile Drawer */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs font-bold tracking-widest uppercase text-black/40 dark:text-white/40">Connect:</span>
                <div className="flex gap-4">
                  <a
                    id="mobile-github"
                    href={developerProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    id="mobile-linkedin"
                    href={developerProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    id="mobile-email"
                    href={`mailto:${developerProfile.email}`}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
