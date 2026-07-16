import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar: string }) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill out all credentials');
      return;
    }

    if (!email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }

    setLoading(true);

    // Simulate safe API authentication delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Pass the simulated authenticated user up to the main app container
      setTimeout(() => {
        onLoginSuccess({
          name: email.split('@')[0].toUpperCase(),
          email: email,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
        });
        setEmail('');
        setPassword('');
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-md glass-panel p-6 sm:p-8 rounded-2xl relative border border-white/25 text-white overflow-hidden shadow-2xl"
            >
              {/* Corner specular glint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-xl rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="login-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">Membership</span>
                      <h3 className="font-display font-black text-2xl uppercase tracking-wider">
                        Access O2® Studio
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Log in to track custom orders, access high-resolution collectibles, and sync configurations.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {error && (
                        <div className="p-3.5 bg-rose-500/20 border border-rose-500/30 rounded-lg flex items-center gap-2 text-xs font-mono text-rose-300">
                          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                          <span>{error}</span>
                        </div>
                      )}

                      {/* Email field */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            placeholder="member@o2.studio"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-black/20 border border-white/20 hover:border-white/40 focus:border-white rounded-xl text-sm transition-all focus:outline-none placeholder-white/30"
                          />
                        </div>
                      </div>

                      {/* Password field */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                          Secure Key / Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-black/20 border border-white/20 hover:border-white/40 focus:border-white rounded-xl text-sm transition-all focus:outline-none placeholder-white/30"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-black hover:bg-white/95 font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                      >
                        {loading ? 'Authenticating...' : 'Establish Session'}
                      </button>
                    </form>

                    {/* Footer note */}
                    <div className="text-[10px] font-mono text-white/30 text-center uppercase tracking-wider border-t border-white/5 pt-4">
                      Security Level: Sandbox Certified
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-lg shadow-white/10">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-black text-xl uppercase tracking-wider">
                        Session Established!
                      </h3>
                      <p className="text-xs text-white/60">
                        Welcome back to O2® Studio. Syncing user configurations...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
