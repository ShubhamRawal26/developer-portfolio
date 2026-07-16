import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, LogOut, ShoppingCart, User, Menu, X, Sun, Moon } from 'lucide-react';
import { developerProfile } from '../data';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  user: { name: string; email: string; avatar: string } | null;
  onLogout: () => void;
  onCartClick: () => void;
  onLoginClick: () => void;
  cartCount: number;
}

export default function Header({
  darkMode,
  toggleDarkMode,
  user,
  onLogout,
  onCartClick,
  onLoginClick,
  cartCount
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'AM® Lab', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Inquire', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div 
        className={`max-w-7xl mx-auto rounded-full glass-panel transition-all duration-300 ${
          scrolled 
            ? 'py-3 sm:py-3.5 px-6 sm:px-8 bg-white/10 dark:bg-black/30 shadow-lg border-white/20' 
            : 'py-4 sm:py-4.5 px-6 sm:px-8 bg-white/5 dark:bg-black/10 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo matching 02® from the mockup */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-white">
              02<span className="text-sm font-semibold align-super relative -top-1">®</span>
            </span>
            <span className="hidden lg:inline-block h-4 w-[1px] bg-white/20 mx-2" />
            <span className="hidden lg:inline-block font-mono text-[10px] tracking-widest text-white/50 uppercase">
              STUDIO
            </span>
          </a>

          {/* Desktop Navigation Links (Centered, Capsule style) */}
          <nav className="hidden md:flex items-center gap-1">
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controllers (Globe, Registered Icon, Cart, Profile, Theme) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* World Globe Status */}
            <div className="hidden lg:flex items-center gap-1.5 text-white/60">
              <Globe className="w-4 h-4 animate-spin-slow text-white" style={{ animationDuration: '20s' }} />
              <span className="text-[10px] font-mono tracking-widest uppercase">PST</span>
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-bold text-white/80">
                R
              </span>
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onCartClick}
              className="p-2 sm:px-4 sm:py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all flex items-center gap-2 relative cursor-pointer"
              aria-label="View portfolio deck"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase">DECK</span>
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold font-mono flex items-center justify-center shadow-md shadow-white/15"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* User Session Interface */}
            {user ? (
              <div className="flex items-center gap-2 pl-1 border-l border-white/10">
                <div 
                  className="w-8 h-8 rounded-full border border-white/25 overflow-hidden hidden sm:block"
                  title={`Logged in as ${user.name}`}
                >
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <span className="hidden md:inline font-mono text-[10px] tracking-wider text-white font-bold uppercase truncate max-w-[80px]">
                  {user.name}
                </span>
                <button
                  onClick={onLogout}
                  className="p-2 hover:bg-white/10 rounded-full text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                  title="Logout Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 font-display font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-white/5"
              >
                Log in
              </button>
            )}

            {/* Dark Mode Icon Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle visual mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 text-white md:hidden transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Glass Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-7xl mx-auto mt-2 p-4 rounded-3xl glass-panel text-white overflow-hidden"
          >
            <ul className="space-y-1.5 text-left">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 px-4 font-mono text-xs tracking-widest uppercase hover:bg-white/10 rounded-xl text-white/80 hover:text-white transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
