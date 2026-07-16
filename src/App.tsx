import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import LoginModal from './components/LoginModal';
import { CartItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('o2_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('o2_user');
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('o2_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('o2_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('o2_user');
    }
  }, [user]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Automatically open the shopping cart to give the user immediate interactive confirmation
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleLoginSuccess = (userData: { name: string; email: string; avatar: string }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen relative text-slate-900 dark:text-white transition-colors duration-300 antialiased overflow-x-hidden">
      
      {/* 100% Immersive Pure CSS Mesh Backdrop Overlay (No physical image files) */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-[1500ms] overflow-hidden"
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at 15% 20%, rgba(218, 140, 92, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(94, 161, 141, 0.1) 0%, transparent 50%), #050507'
            : 'radial-gradient(circle at 15% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(14, 165, 233, 0.12) 0%, transparent 50%), #f8f9fc',
          transform: 'scale(1.02)'
        }}
      />

      {/* Floating Monospace Code Backdrop Lines to Highlight Glass */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03] dark:opacity-[0.06] font-mono text-[10px] sm:text-xs leading-relaxed select-none p-10 transition-opacity duration-300">
        <div className="space-y-6">
          <p className="text-amber-500 dark:text-[#ffd369]">import {'{'} useState, useEffect, useMemo {'}'} from 'react';</p>
          <p className="pl-4 text-emerald-500 dark:text-emerald-400">const AM_CreativeDeveloperPortfolio = {'{'} version: '4.2', engine: 'Vite' {'}'};</p>
          <p className="pl-4 text-blue-500 dark:text-blue-300">function useSpringPhysics(coordinates) {'{'}</p>
          <p className="pl-8 text-slate-500">const [tension, setTension] = useState(240);</p>
          <p className="pl-8 text-slate-500">const [friction, setFriction] = useState(26);</p>
          <p className="pl-8 text-purple-500">return useMemo(() =&gt; calculateSpring(tension, friction), [tension, friction]);</p>
          <p className="pl-4 text-blue-500">{'}'}</p>
          <p className="text-amber-500 dark:text-[#ffd369]">const liquidThemeEngine = (darkMode) =&gt; {'{'}</p>
          <p className="pl-4 text-slate-500">if (darkMode) return {'{'} bg: '#050507', text: '#ffffff', saturation: 1.2 {'}'};</p>
          <p className="pl-4 text-slate-500">return {'{'} bg: '#f8f9fc', text: '#0f172a', saturation: 1.6 {'}'};</p>
          <p className="text-amber-500 dark:text-[#ffd369]">{'}'};</p>
          <p className="text-sky-500">export const animateLiquidText = (character) =&gt; {'{'}</p>
          <p className="pl-4 text-pink-500">return char.morph().skew(-12).scale(1.2).shiftY(-12);</p>
          <p className="text-sky-500">{'}'};</p>
          <p className="text-slate-400">// Rendering high-fidelity glass refraction meshes...</p>
          <p className="text-slate-400">const glassProperties = {'{'} blur: '28px', saturation: '140%', border: 'rgba(255,255,255,0.16)' {'}'};</p>
        </div>
        <div className="absolute right-10 bottom-10 space-y-4 text-right">
          <p className="text-purple-500">const systemStats = () =&gt; console.log("CORE_NODE_ONLINE");</p>
          <p className="text-emerald-500">export default AM_CreativeDeveloperPortfolio;</p>
        </div>
      </div>

      {/* Dynamic Floating Glass Particles Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="absolute w-[20vw] h-[20vw] rounded-full bg-white/5 dark:bg-white/3 blur-xl top-10 left-[10%] animate-bubble-slow" />
        <div className="absolute w-[15vw] h-[15vw] rounded-full bg-white/3 dark:bg-white/2 blur-xl bottom-20 right-[5%] animate-bubble-medium" />
        <div className="absolute w-[8vw] h-[8vw] rounded-full bg-white/4 dark:bg-white/3 blur-lg top-1/2 left-[45%] animate-bubble-fast" />
        {/* Subtle glass grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.15)_100%)]" />
      </div>

      {/* Main Content Scaffold */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          user={user}
          onLogout={handleLogout}
          onCartClick={() => setCartOpen(true)}
          onLoginClick={() => setLoginOpen(true)}
          cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
        />
        
        <main id="portfolio-main-content" className="flex-grow">
          <Hero onAddToCart={handleAddToCart} />
          
          {/* Integrated Developer Portfolio Sections beautifully layered with glassmorphic cards */}
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Modular Interactivity Layers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}


