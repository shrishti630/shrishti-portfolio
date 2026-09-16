import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Ambient Mesh */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>// INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm text-slate-600">
            Available for full-time frontend engineering roles, commercial web applications, and collaborative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Copy Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase block">Direct Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              {copiedEmail && (
                <span className="text-[10px] font-mono text-emerald-600 font-semibold block">✓ Email address copied to clipboard!</span>
              )}
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase block">Phone / WhatsApp</span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              {copiedPhone && (
                <span className="text-[10px] font-mono text-emerald-600 font-semibold block">✓ Phone number copied to clipboard!</span>
              )}
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase block">Location & Mobility</span>
                  <span className="text-xs font-semibold text-slate-900">{personalInfo.location}</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">Open to Remote & Hybrid Roles Worldwide</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Contact Message Form with Slide Up & Bouncy Submit Button */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Send Me a Message
                </h3>
                <p className="text-xs text-slate-600">
                  Fill out the form below to initiate direct email correspondence.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
                >
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">Message Received!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you for reaching out. Shrishti will reply to your email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-semibold">Your Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-semibold">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Frontend Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-semibold">Message *</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hello Shrishti, I would love to discuss a frontend role..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    type="submit"
                    className="cyber-btn-primary w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
