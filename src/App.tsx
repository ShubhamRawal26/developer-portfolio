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
    <div className="min-h-screen relative text-white transition-colors duration-300 antialiased overflow-x-hidden">
      
      {/* 100% Immersive Pure CSS Mesh Backdrop Overlay (No physical image files) */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-[1500ms] overflow-hidden"
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at 15% 20%, rgba(218, 140, 92, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(94, 161, 141, 0.1) 0%, transparent 50%), #050507'
            : 'radial-gradient(circle at 15% 20%, rgba(218, 140, 92, 0.2) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(94, 161, 141, 0.12) 0%, transparent 50%), #0c0d11',
          transform: 'scale(1.02)'
        }}
      />

      {/* Dynamic Floating Glass Particles Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 sm:opacity-50">
        <div className="absolute w-[20vw] h-[20vw] rounded-full bg-white/5 blur-xl top-10 left-[10%] animate-bubble-slow" />
        <div className="absolute w-[15vw] h-[15vw] rounded-full bg-white/3 blur-xl bottom-20 right-[5%] animate-bubble-medium" />
        <div className="absolute w-[8vw] h-[8vw] rounded-full bg-white/4 blur-lg top-1/2 left-[45%] animate-bubble-fast" />
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


