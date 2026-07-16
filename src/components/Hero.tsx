import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Search, Plus, Sparkles, RefreshCw, Layers, Check, Info, Code2, Cpu, Compass, Layout } from 'lucide-react';
import { CartItem } from '../types';
import LiquidText from './LiquidText';

interface HeroProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const LAB_PRESETS = [
  {
    id: 'lab-1',
    name: 'Neural Grid Engine',
    color: 'Clay Warm / Amber Glow',
    price: 180, // represents simulated credits/hours or design value
    bgGradient: 'from-[#503a32] to-[#251815]',
    spec: 'REACTIVE CONSTANT NODES, MOTION GRAPH MATRIX',
    description: 'An interactive force-directed canvas constellation that morphs beautifully based on cursor physics.',
    svgType: 'neural'
  },
  {
    id: 'lab-2',
    name: 'Spectral Oscilloscope',
    color: 'Obsidian Black / Cyan Neon',
    price: 165,
    bgGradient: 'from-[#1e2a38] to-[#0c121a]',
    spec: 'FAST FOURIER TRANSFORM, ADAPTIVE FREQUENCY GAIN',
    description: 'A hardware-accelerated sound envelope visualizer built with clean canvas-composited shaders.',
    svgType: 'spectral'
  },
  {
    id: 'lab-3',
    name: 'Glass Spatial Dock',
    color: 'Sage Silver / Aqua Frost',
    price: 195,
    bgGradient: 'from-[#2e4040] to-[#121c1c]',
    spec: 'SPRING PHYSICS LAYOUT, METALLIC SHADOWS',
    description: 'A responsive dock component boasting fluid spring physics, dragging states, and sub-pixel alignment.',
    svgType: 'spatial'
  }
];

const MOCKUP_PRESETS = {
  id: 'am-ds-v2',
  title: 'AM® Design System v2',
  price: 120, // 120 credits/hrs estimated scope
  details: 'SPECIFICATION: COMPOSITE BENTO GRID SHELL, GLASS PANELS, THREE VIEWPORT CUSTOMIZER CHIPS',
  materials: {
    engine: 'REACT 18+, TYPESCRIPT 5',
    styles: 'TAILWIND CSS, MOTION'
  },
  themes: [
    { name: 'Clay Warm', value: '#dcd3c9', previewBg: 'from-[#63544a] to-[#2d2420]', accentColor: '#d1a884' },
    { name: 'Obsidian Dark', value: '#505052', previewBg: 'from-[#2b2b2d] to-[#111112]', accentColor: '#a1a1aa' },
    { name: 'Sage Cold', value: '#94a18d', previewBg: 'from-[#414d3f] to-[#1b221a]', accentColor: '#a7bda1' }
  ],
  grids: ['BENTO', 'COLUMN', 'FLAT']
};

export default function Hero({ onAddToCart }: HeroProps) {
  const [labIndex, setLabIndex] = useState(0);
  const [labRotating, setLabRotating] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(false);
  
  // Design system customization states
  const [selectedGrid, setSelectedGrid] = useState('BENTO');
  const [selectedThemeIdx, setSelectedThemeIdx] = useState(0);
  const [hotspotActive, setHotspotActive] = useState(true);
  const [addToCartStatus, setAddToCartStatus] = useState(false);

  const activeLab = LAB_PRESETS[labIndex];
  const activeTheme = MOCKUP_PRESETS.themes[selectedThemeIdx];

  const handleRefreshLab = () => {
    if (labRotating) return;
    setLabRotating(true);
    setTimeout(() => {
      setLabIndex((prev) => (prev + 1) % LAB_PRESETS.length);
      setLabRotating(false);
    }, 600);
  };

  const handleAddModuleToDeck = () => {
    setAddToCartStatus(true);
    onAddToCart({
      id: `${MOCKUP_PRESETS.id}-${selectedGrid.toLowerCase()}-${activeTheme.name.toLowerCase().replace(' ', '-')}`,
      title: `${MOCKUP_PRESETS.title} (${activeTheme.name})`,
      price: MOCKUP_PRESETS.price,
      image: 'bg-gradient-to-tr from-[#9e877e] to-[#604f47]', // warm aesthetic representation
      size: selectedGrid,
      color: activeTheme.name
    });
    
    setTimeout(() => {
      setAddToCartStatus(false);
    }, 1500);
  };

  const scrollToPortfolio = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to render high-end portfolio SVG animations instead of product photos
  const renderLabVisual = (type: string) => {
    switch (type) {
      case 'neural':
        return (
          <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}>
              <circle cx="50" cy="50" r="2" fill="#fff" opacity="0.9" />
              <circle cx="20" cy="30" r="3" fill="#fff" opacity="0.7" />
              <circle cx="80" cy="40" r="4" fill="#fff" opacity="0.6" />
              <circle cx="35" cy="75" r="3.5" fill="#fff" opacity="0.8" />
              <circle cx="65" cy="80" r="2.5" fill="#fff" opacity="0.7" />
              <circle cx="75" cy="20" r="3" fill="#fff" opacity="0.9" />
              
              <line x1="50" y1="50" x2="20" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="80" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
              <line x1="50" y1="50" x2="35" y2="75" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
              <line x1="50" y1="50" x2="65" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" strokeDasharray="3 1" />
              <line x1="20" y1="30" x2="35" y2="75" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
              <line x1="80" y1="40" x2="75" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
              <line x1="80" y1="40" x2="65" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
            </motion.g>
            <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        );
      case 'spectral':
        return (
          <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <motion.path
                d="M 10 50 Q 25 20, 35 50 T 60 50 T 80 50 T 90 50"
                stroke="url(#spectralGradient)"
                strokeWidth="2"
                fill="none"
                animate={{
                  d: [
                    "M 10 50 Q 25 15, 35 50 T 60 80 T 80 30 T 90 50",
                    "M 10 50 Q 25 70, 35 30 T 60 20 T 80 65 T 90 50",
                    "M 10 50 Q 25 15, 35 50 T 60 80 T 80 30 T 90 50"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              <motion.path
                d="M 10 50 Q 20 65, 40 40 T 65 60 T 85 45 T 90 50"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
                animate={{
                  d: [
                    "M 10 50 Q 20 30, 40 70 T 65 30 T 85 55 T 90 50",
                    "M 10 50 Q 20 75, 40 30 T 65 70 T 85 35 T 90 50",
                    "M 10 50 Q 20 30, 40 70 T 65 30 T 85 55 T 90 50"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="spectralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        );
      case 'spatial':
        return (
          <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              {/* Suspended wireframe browser container */}
              <rect x="15" y="25" width="70" height="50" rx="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
              <line x1="15" y1="37" x2="85" y2="37" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              
              {/* Three dots */}
              <circle cx="23" cy="31" r="1.5" fill="rgba(255,255,255,0.4)" />
              <circle cx="28" cy="31" r="1.5" fill="rgba(255,255,255,0.4)" />
              <circle cx="33" cy="31" r="1.5" fill="rgba(255,255,255,0.4)" />
              
              {/* Mock desktop dock floating below */}
              <motion.g
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <rect x="30" y="62" width="40" height="10" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                <circle cx="36" cy="67" r="2" fill="#fff" />
                <circle cx="44" cy="67" r="2" fill="#fff" opacity="0.8" />
                <circle cx="52" cy="67" r="2" fill="#fff" opacity="0.6" />
                <circle cx="60" cy="67" r="2" fill="#fff" opacity="0.4" />
              </motion.g>

              {/* Central grid cubes */}
              <motion.rect 
                x="30" y="44" width="16" height="12" rx="2" 
                fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
              <rect x="54" y="44" width="16" height="12" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  // Renders the live customizing mock browser wireframe representing the design system v2
  const renderDesignSystemWireframe = () => {
    const isCompact = selectedGrid === 'BENTO';
    const isColumn = selectedGrid === 'COLUMN';
    
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-white/50">
        {/* Mock Title bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeTheme.accentColor }} />
            <span className="text-[8px] uppercase tracking-wider text-white/70">SPECIMEN // v2.4</span>
          </div>
          <div className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Dynamic customized area */}
        <div className="flex-1 my-3 flex flex-col justify-center">
          {isCompact && (
            <div className="grid grid-cols-3 gap-1.5 h-full max-h-[110px]">
              <div className="col-span-2 rounded-lg border border-white/15 p-2 flex flex-col justify-between bg-white/[0.02]" style={{ borderColor: activeTheme.accentColor + '40' }}>
                <span className="text-[7px] text-white/40">COMP_01</span>
                <div className="h-1.5 w-8 rounded bg-white/20" />
              </div>
              <div className="col-span-1 rounded-lg border border-white/10 p-2 flex flex-col justify-between bg-white/[0.01]">
                <span className="text-[7px] text-white/30">STAT</span>
                <span className="font-bold text-white/90">98%</span>
              </div>
              <div className="col-span-1 rounded-lg border border-white/10 p-2 flex flex-col justify-between bg-white/[0.01]">
                <span className="text-[7px] text-white/30">LOG</span>
                <div className="h-1 w-4 rounded bg-white/20" />
              </div>
              <div className="col-span-2 rounded-lg border border-white/15 p-2 flex flex-col justify-between bg-white/[0.02]" style={{ borderColor: activeTheme.accentColor + '20' }}>
                <div className="h-1 w-full bg-white/10 rounded" />
                <div className="h-1 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
          )}

          {isColumn && (
            <div className="flex flex-col gap-1.5 h-full max-h-[110px] justify-between">
              <div className="rounded-lg border border-white/15 p-2 flex justify-between items-center bg-white/[0.02]" style={{ borderColor: activeTheme.accentColor + '40' }}>
                <span className="text-[7px] text-white/40">HERO_BANNER</span>
                <div className="h-1.5 w-12 rounded bg-white/20" />
              </div>
              <div className="rounded-lg border border-white/10 p-2 flex justify-between items-center bg-white/[0.01]">
                <span className="text-[7px] text-white/30">SERVICE_ROW</span>
                <div className="h-1.5 w-8 rounded bg-white/15" />
              </div>
              <div className="rounded-lg border border-white/10 p-2 flex justify-between items-center bg-white/[0.01]">
                <span className="text-[7px] text-white/30">FOOTER_SHELL</span>
                <div className="h-1 w-6 rounded bg-white/10" />
              </div>
            </div>
          )}

          {!isCompact && !isColumn && (
            <div className="grid grid-cols-2 gap-2 h-full max-h-[110px]">
              <div className="rounded-lg border border-white/15 p-2 flex flex-col justify-between bg-white/[0.02]" style={{ borderColor: activeTheme.accentColor + '40' }}>
                <span className="text-[7px] text-white/40">PANEL_LEFT</span>
                <div className="h-1.5 w-10 rounded bg-white/20" />
              </div>
              <div className="rounded-lg border border-white/10 p-2 flex flex-col justify-between bg-white/[0.01]">
                <span className="text-[7px] text-white/30">PANEL_RIGHT</span>
                <div className="h-1.5 w-10 rounded bg-white/15" />
              </div>
            </div>
          )}
        </div>

        {/* Mock status footer */}
        <div className="flex justify-between items-center text-[7px] text-white/30 border-t border-white/10 pt-2 uppercase">
          <span>LAYOUT: {selectedGrid}</span>
          <span style={{ color: activeTheme.accentColor }}>ACCENT: {activeTheme.name}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-4 sm:mt-8 space-y-8">
        
        {/* Main Floating Glass Display Board from the mockup */}
        <div className="w-full glass-panel rounded-[32px] p-6 sm:p-10 relative overflow-hidden border border-black/10 dark:border-white/20 shadow-2xl">
          
          {/* Subtle interior lighting glow */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 dark:bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
 
          {/* Grid Layout inside Main Board */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* COLUMN 1: TOP/LEFT Specifications (O2® Details re-themed for AM®) */}
            <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-black/10 dark:border-white/10 pb-8">
              
              {/* Brand block */}
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl tracking-tighter text-slate-900 dark:text-white">
                    <LiquidText text="AM®" />
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 font-mono text-[9px] tracking-widest text-slate-700 dark:text-white/80">
                    CREATIVE ENGINEERING
                  </span>
                </div>
                <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-white/50">
                  DEVELOPER & INTERACTIVE INTERFACE DESIGNS
                </h2>
              </div>
 
              {/* Giant Serial "01" and Specs text perfectly replicating the mockup */}
              <div className="flex items-start gap-6 max-w-2xl text-left">
                {/* Giant vertical serial */}
                <div className="font-display font-black text-6xl sm:text-7xl leading-none text-slate-900 dark:text-white/90 select-none tracking-tighter border-r border-black/10 dark:border-white/10 pr-6">
                  01
                </div>
 
                {/* Spec sheets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-mono text-slate-600 dark:text-white/70 leading-relaxed uppercase tracking-wider">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">AM DESIGN LAB</p>
                    <p className="text-slate-500 dark:text-white/50">BY ALEX MORGAN</p>
                    <p className="text-slate-500 dark:text-white/50">REVISION LATE 2026</p>
                    <p className="text-[9px] text-slate-500 dark:text-white/40 font-sans leading-tight normal-case mt-1 max-w-[200px]">
                      {MOCKUP_PRESETS.details}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">DEV STACK:</p>
                    <p className="text-slate-500 dark:text-white/50">{MOCKUP_PRESETS.materials.engine}</p>
                    <p className="font-bold text-slate-900 dark:text-white mt-2">STYLE COMPOSE:</p>
                    <p className="text-slate-500 dark:text-white/50">{MOCKUP_PRESETS.materials.styles}</p>
                  </div>
                </div>
              </div>
 
            </div>

            {/* COLUMN 2: LAB COMPONENT CARD (Left Side, replacing Sneakers) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Outer Card */}
              <div className="relative h-[340px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 overflow-hidden group shadow-lg text-left p-6 flex flex-col justify-between">
                
                {/* Moving Specular glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                
                {/* Floating glass bubble elements from mockup */}
                <div className="absolute w-8 h-8 rounded-full glass-bubble top-12 left-12 animate-bubble-slow opacity-80" />
                <div className="absolute w-14 h-14 rounded-full glass-bubble bottom-24 right-10 animate-bubble-medium opacity-60" />
                <div className="absolute w-6 h-6 rounded-full glass-bubble top-20 right-24 animate-bubble-fast opacity-90" />

                {/* Title info */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">CREATIVE EXPERIMENT</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-1 leading-tight">
                    LAB SHADERS
                  </h3>
                  <p className="text-[10px] font-mono text-white/40 mt-1 uppercase">
                    {activeLab.color}
                  </p>
                </div>

                {/* Main Dynamic Lab Visual with interactive rotation transition */}
                <div className="absolute inset-0 flex items-center justify-center p-6 z-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLab.id}
                      initial={{ opacity: 0, scale: 0.8, rotate: labRotating ? -180 : -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: labRotating ? 0 : 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="w-full max-w-[200px] flex items-center justify-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] cursor-pointer"
                      onClick={() => setZoomLevel(true)}
                    >
                      <div className="w-40 h-40 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-[3px] flex items-center justify-center relative group-hover:scale-105 transition-all duration-500">
                        {renderLabVisual(activeLab.svgType)}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Spec text at bottom left */}
                <div className="relative z-10 flex items-end justify-between font-mono">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-white tracking-widest uppercase">
                      {activeLab.name}
                    </p>
                    <p className="text-xs font-black text-white/80">
                      EST. {activeLab.price} CREDITS
                    </p>
                  </div>

                  {/* Magnifier glass lens details button */}
                  <button
                    onClick={() => setZoomLevel(true)}
                    className="p-3 bg-black/40 hover:bg-white text-white hover:text-black rounded-full border border-white/20 hover:border-white transition-all cursor-pointer shadow-md"
                    title="Examine Specs"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Lab preset controls */}
              <button
                onClick={handleRefreshLab}
                disabled={labRotating}
                className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-mono text-[11px] tracking-[0.25em] uppercase text-white flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-95 disabled:opacity-50 animate-pulse"
              >
                <RefreshCw className={`w-4 h-4 ${labRotating ? 'animate-spin' : ''}`} />
                <span>ROTATE ENGINE MODULE</span>
              </button>

            </div>

            {/* COLUMN 3: SYSTEM INTERACTIVE CARD (Right Side, replacing Hoodie) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Giant Rounded Card */}
              <div className="relative h-[400px] sm:h-[402px] rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden group shadow-lg text-left p-6 sm:p-8 flex flex-col justify-between">
                
                {/* Specular ambient glass rotation sphere background */}
                <div className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border border-white/15 bg-gradient-to-tr from-white/5 via-transparent to-white/10 animate-rotate-slow shadow-[inset_0_4px_24px_rgba(255,255,255,0.1)] backdrop-blur-[2px]" />
                </div>

                {/* Glass bubbles around the UI wireframe */}
                <div className="absolute w-12 h-12 rounded-full glass-bubble top-24 right-12 animate-bubble-medium opacity-70" />
                <div className="absolute w-10 h-10 rounded-full glass-bubble bottom-16 left-24 animate-bubble-slow opacity-80" />

                {/* Card Title info */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">ACTIVE BLUEPRINT</span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-white mt-1">
                      LAYOUT ENGINE
                    </h3>
                  </div>
                  <div className="bg-white/10 border border-white/10 px-3 py-1 rounded-full font-mono text-xs font-black text-white">
                    {MOCKUP_PRESETS.price} HRS
                  </div>
                </div>

                {/* Custom customized live layout preview panel */}
                <div className="absolute inset-0 flex items-center justify-center z-10 p-12 mt-4">
                  <div className={`w-[210px] h-[150px] rounded-2xl bg-gradient-to-b ${activeTheme.previewBg} border border-white/20 p-3 shadow-2xl backdrop-blur-md relative transform hover:scale-[1.03] transition-transform duration-500`}>
                    {renderDesignSystemWireframe()}
                  </div>
                </div>

                {/* Hotspot click/hover detailing popover */}
                <div className="absolute left-[54%] top-[45%] z-20">
                  <button
                    onClick={() => setHotspotActive(!hotspotActive)}
                    className="w-4 h-4 rounded-full bg-white border-2 border-black animate-hotspot cursor-pointer focus:outline-none"
                    aria-label="Component specifications"
                  />
                  
                  <AnimatePresence>
                    {hotspotActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10, x: -80 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: -80 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10, x: -80 }}
                        className="absolute bottom-6 w-44 p-3 bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-xl text-[10px] font-mono space-y-1.5 shadow-xl text-left"
                      >
                        <p className="font-bold border-b border-white/15 pb-1 uppercase tracking-wider">SYSTEM SPEC</p>
                        <p className="text-white/70">ACCENT: {activeTheme.name}</p>
                        <p className="text-white/70">LAYOUT: {selectedGrid}</p>
                        <p className="text-white/70">COMPLEXITY: ULTRA</p>
                        <p className="text-white/50 text-[9px] leading-tight">HARDWARE ACCELERATED RENDER</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom interactive customization controls */}
                <div className="relative z-20 flex flex-wrap gap-4 items-end justify-between pt-2">
                  
                  {/* Theme Selector variant chips */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">THEME SCHEME</span>
                    <div className="flex gap-2.5">
                      {MOCKUP_PRESETS.themes.map((theme, idx) => (
                        <button
                          key={theme.name}
                          onClick={() => setSelectedThemeIdx(idx)}
                          className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                            selectedThemeIdx === idx ? 'border-white scale-110' : 'border-white/20 hover:border-white/50'
                          }`}
                          style={{ backgroundColor: theme.value }}
                          title={theme.name}
                        >
                          {selectedThemeIdx === idx && (
                            <Check className="w-3.5 h-3.5 text-black filter invert" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Grid Layout Density toggles */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">GRID COMPOSITE</span>
                    <div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5">
                      {MOCKUP_PRESETS.grids.map((grid) => (
                        <button
                          key={grid}
                          onClick={() => setSelectedGrid(grid)}
                          className={`px-3 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                            selectedGrid === grid 
                              ? 'bg-white text-black shadow-sm' 
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {grid}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Deck Pill */}
                  <button
                    onClick={handleAddModuleToDeck}
                    className="px-5 py-3 rounded-xl bg-white text-black hover:bg-white/90 font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-95"
                  >
                    <span>{addToCartStatus ? 'ADDED!' : 'Collect Module'}</span>
                    <Plus className="w-4 h-4" />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FLOATING CAPSULE BAR (NEW • COSMIC© SET 23 ↗) */}
        <div className="w-full glass-panel rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/15">
          
          <div className="flex items-center gap-4">
            
            {/* Spinning mini thumbnail sphere */}
            <div className="w-12 h-12 rounded-full border border-white/20 bg-gradient-to-tr from-white/10 to-transparent flex items-center justify-center overflow-hidden relative shadow-inner shrink-0">
              <Code2 className="w-6 h-6 text-white animate-pulse" />
            </div>

            {/* Carousel title content */}
            <div className="text-left space-y-0.5">
              <h4 className="font-display font-black text-sm tracking-wider uppercase text-white flex items-center gap-1.5">
                ACTIVE PORTFOLIO CHASSIS v4.2
                <ArrowUpRight className="w-4 h-4 text-white/70" />
              </h4>
              <p className="text-[10px] font-mono tracking-widest uppercase text-white/50">
                PROPELLING WEB INTERFACES WITH REACT, TAILWIND & MOTION ENGINE
              </p>
            </div>

          </div>

          {/* Scrolling visual direction arrow link */}
          <button
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto px-6 py-3 border border-white/15 bg-white/5 hover:bg-white hover:text-black rounded-xl font-mono text-[10px] tracking-widest uppercase text-white transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>DISCOVER CREATIVE PORTFOLIO</span>
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 rotate-90" />
            </div>
          </button>

        </div>

      </div>

      {/* SNEAKER SPECTRAL ZOOM OVERLAY */}
      <AnimatePresence>
        {zoomLevel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomLevel(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg cursor-pointer"
            />
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/25 pointer-events-auto text-left relative space-y-6">
                
                {/* Close absolute */}
                <button
                  onClick={() => setZoomLevel(false)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors cursor-pointer"
                >
                  <Plus className="w-5 h-5 rotate-45" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Wireframe dynamic zoom element */}
                  <div className={`p-4 h-48 rounded-2xl bg-gradient-to-tr ${activeLab.bgGradient} border border-white/15 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                    <div className="w-36 h-36 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center scale-110">
                      {renderLabVisual(activeLab.svgType)}
                    </div>
                  </div>
                  {/* Details specs list */}
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">SPECIFICATION MATRIX</span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
                      {activeLab.name}
                    </h3>
                    <div className="h-px bg-white/10" />
                    <p className="text-[11px] text-white/60 font-light leading-relaxed">
                      {activeLab.description}
                    </p>
                    <div className="h-px bg-white/10" />
                    <ul className="space-y-3 font-mono text-[11px] text-white/70 uppercase tracking-wider">
                      <li className="flex justify-between">
                        <span className="text-white/40">COLOR SCHEME:</span>
                        <span className="text-white">{activeLab.color}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/40">SPECIFICATION:</span>
                        <span className="text-white text-right max-w-[150px] leading-tight text-[10px]">{activeLab.spec}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/40">ESTIMATED EFFORT:</span>
                        <span className="text-white font-bold">{activeLab.price} CREDITS</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onAddToCart({
                            id: activeLab.id,
                            title: activeLab.name,
                            price: activeLab.price,
                            image: activeLab.bgGradient
                          });
                          setZoomLevel(false);
                        }}
                        className="w-full py-3 bg-white text-black hover:bg-white/90 font-display font-bold text-xs tracking-widest uppercase rounded-xl transition-all cursor-pointer shadow-md"
                      >
                        Add Module To Deck
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
