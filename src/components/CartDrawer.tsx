import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'loading' | 'success'>('cart');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    setCheckoutStep('loading');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 2200);
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
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
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 glass-panel shadow-2xl flex flex-col text-white overflow-hidden border-l border-white/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-white" />
                <span className="font-display font-black text-lg uppercase tracking-wider">
                  Selected Deck ({cartItems.reduce((a, b) => a + b.quantity, 0)})
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Switcher */}
            <div className="flex-1 overflow-y-auto p-6">
              {checkoutStep === 'cart' && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-60">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg uppercase">Deck is Empty</h4>
                        <p className="text-sm text-white/50 max-w-xs mt-1 leading-relaxed">
                          Browse the AM® layouts and interactive laboratory configurations and collect items to build a custom brief.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="flex gap-4 p-3 bg-white/5 border border-white/15 rounded-xl relative group overflow-hidden"
                        >
                          {/* Diagonal shine reflection */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                          {/* Image box/gradient preview */}
                          <div className={`w-20 h-20 rounded-lg shrink-0 overflow-hidden flex items-center justify-center p-2 relative ${item.image.startsWith('bg-') ? item.image : 'bg-gradient-to-tr from-white/10 to-transparent'}`}>
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="w-3 h-3 rounded-full bg-white/30 absolute -top-1 -left-1 animate-pulse" />
                          </div>

                          {/* Info */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="space-y-0.5 text-left">
                              <h4 className="font-display font-black text-sm uppercase tracking-wider leading-tight">
                                {item.title}
                              </h4>
                              {item.size && (
                                <p className="text-[10px] font-mono text-white/50 uppercase">
                                  Layout: {item.size} {item.color && `/ Theme: ${item.color}`}
                                </p>
                              )}
                              <p className="text-xs font-mono font-bold mt-1 text-white/90">
                                {item.price} Scope Units
                              </p>
                            </div>

                            {/* Quantity Controllers */}
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-white/20 rounded-lg overflow-hidden bg-white/5">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, -1)}
                                  className="px-2 py-0.5 hover:bg-white/10 font-mono font-bold transition-colors text-xs"
                                >
                                  -
                                </button>
                                <span className="px-2.5 py-0.5 text-xs font-mono border-x border-white/25">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, 1)}
                                  className="px-2 py-0.5 hover:bg-white/10 font-mono font-bold transition-colors text-xs"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-white/40 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'loading' && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <Loader2 className="w-12 h-12 text-white animate-spin" />
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg uppercase tracking-wider">Compiling Spec Brief</h4>
                    <p className="text-sm text-white/50 max-w-xs leading-relaxed">
                      Bundling custom layouts and simulated integration configurations into sandbox briefing RAM...
                    </p>
                  </div>
                </div>
              )}

              {checkoutStep === 'success' && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl uppercase tracking-wider">Inquiry Brief Compiled!</h4>
                    <p className="text-xs text-white/60 max-w-xs leading-relaxed">
                      Your high-fidelity portfolio design specs brief has been simulated and printed successfully! Alex will review the compiled scope and reach back to you.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-white text-black hover:bg-white/90 font-display font-bold text-xs uppercase tracking-widest transition-all rounded-lg"
                  >
                    Close & Reset Deck
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary (Only visible in cart view with items) */}
            {checkoutStep === 'cart' && cartItems.length > 0 && (
              <div className="p-6 bg-black/40 border-t border-white/10 space-y-4">
                <div className="space-y-2 text-sm font-mono text-white/70">
                  <div className="flex justify-between">
                    <span>Base Scope Effort</span>
                    <span>{subtotal} Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>System Integration Overhead (8%)</span>
                    <span>{tax.toFixed(1)} Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deployment Setup Buffer</span>
                    <span>{shipping === 0 ? 'FREE' : `${shipping} Units`}</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between text-white text-base font-bold">
                    <span>Total Estimate Specification</span>
                    <span className="text-white">{total.toFixed(1)} Units</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-white/90 font-display font-bold text-xs uppercase tracking-widest transition-all rounded-lg cursor-pointer"
                >
                  <span>Submit Specifications Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
