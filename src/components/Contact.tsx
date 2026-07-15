import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, MessageSquare, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import { developerProfile } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = (): boolean => {
    const tempErrors: Partial<FormState> = {};
    if (!formData.name.trim()) tempErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'A subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a brief message';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Please write at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API post response
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setSubmittedName(formData.name);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setSubmittedName('');
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#fafafa] dark:bg-[#050505] text-black dark:text-white border-t border-black/10 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">Inquiries</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-black dark:text-white uppercase mt-2">
            Let's Start a Conversation
          </h2>
          <div className="h-1 w-16 bg-black dark:bg-white mx-auto mt-4" />
          <p className="mt-4 text-black/60 dark:text-white/60 text-sm sm:text-base leading-relaxed">
            Have an exciting product concept, an open engineering role, or just want to say hi? I'd love to connect.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Quick info column (Left 4-cols) */}
          <div className="lg:col-span-5 space-y-6 sm:sticky sm:top-24">
            <div className="p-6 sm:p-8 rounded-none bg-black/[0.01] dark:bg-white/[0.01] border-2 border-black dark:border-white space-y-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-black dark:text-white" />
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-black dark:text-white">
                  Contact Info
                </h3>
              </div>
              
              <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
                Fill out the secure messaging form, or email me directly. I usually respond within 24 working hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-black/10 dark:border-white/10">
                <a
                  id="direct-email-link"
                  href={`mailto:${developerProfile.email}`}
                  className="flex items-center gap-4 group cursor-pointer text-black dark:text-white hover:opacity-70 transition-colors"
                >
                  <div className="p-3 rounded-none bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <span className="block text-[10px] font-mono font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold tracking-tight font-mono break-all">
                      {developerProfile.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Decorative banner */}
              <div className="p-4 rounded-none bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 flex gap-3 text-left">
                <Sparkles className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
                <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed">
                  <strong>Local Time Context:</strong> I operate out of the PST timezone, and I am available for fully remote integrations across standard US timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Form card (Right 7-cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-none bg-black/[0.01] dark:bg-white/[0.01] border-2 border-black dark:border-white">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    id="contact-form"
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-none border-2 bg-transparent text-black dark:text-white text-sm focus:outline-none transition-all ${
                            errors.name
                              ? 'border-rose-500 focus:border-rose-600'
                              : 'border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white'
                          }`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1 text-xs text-rose-500 font-bold font-mono uppercase tracking-wider">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-none border-2 bg-transparent text-black dark:text-white text-sm focus:outline-none transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:border-rose-600'
                              : 'border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white'
                          }`}
                          placeholder="jane@example.com"
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 text-xs text-rose-500 font-bold font-mono uppercase tracking-wider">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-none border-2 bg-transparent text-black dark:text-white text-sm focus:outline-none transition-all ${
                          errors.subject
                            ? 'border-rose-500 focus:border-rose-600'
                            : 'border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white'
                        }`}
                        placeholder="Collaboration Opportunities"
                      />
                      {errors.subject && (
                        <div className="flex items-center gap-1 text-xs text-rose-500 font-bold font-mono uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 dark:text-white/40"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-none border-2 bg-transparent text-black dark:text-white text-sm focus:outline-none transition-all resize-none ${
                          errors.message
                            ? 'border-rose-500 focus:border-rose-600'
                            : 'border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white'
                        }`}
                        placeholder="Hi Alex, I would love to talk about building..."
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 text-xs text-rose-500 font-bold font-mono uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-none bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 animate-pulse" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success State Card
                  <motion.div
                    id="contact-success-card"
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-none bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white flex items-center justify-center mx-auto shadow-none">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-black dark:text-white">
                        Thank you, {submittedName}!
                      </h3>
                      <p className="text-black/60 dark:text-white/60 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Your message has been simulated and printed to local sandbox outputs successfully. I look forward to reading it!
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-4 rounded-none bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-display font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer shadow-none"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Send another message</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
