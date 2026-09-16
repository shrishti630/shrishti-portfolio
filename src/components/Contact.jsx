import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="light-section py-20 md:py-28 bg-[#fbfbfc] relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Centered Header Divider */}
        <div className="header-center">
          <h3>Get in touch</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts & Adham's Signature Clipboard Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
                Let's collaborate.
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you have an exciting frontend developer role, a design system project, or want to discuss React applications, feel free to reach out.
              </p>
            </div>

            {/* Adham Dannaway Signature Clipboard Email Card */}
            <div className="relative pt-2">
              <div 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-indigo-300 transition-colors cursor-pointer group"
                onClick={copyEmail}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </div>
                </div>

                {/* Adham's Exact Signature Tooltip */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px]">
                    {copiedEmail ? 'Email copied! 😀' : 'Click to copy my email address to your clipboard 😀'}
                  </span>
                  <span className="text-indigo-600 font-medium font-mono text-[11px]">
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1 cursor-pointer hover:border-slate-300 transition-colors"
                onClick={copyPhone}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Phone</span>
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Phone className="w-3.5 h-3.5 text-slate-400" />}
                </div>
                <p className="text-xs font-bold text-slate-900">{personalInfo.phone}</p>
                <p className="text-[10px] text-slate-500">{copiedPhone ? 'Copied!' : 'Click to copy'}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Location</span>
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs font-bold text-slate-900">{personalInfo.location}</p>
                <p className="text-[10px] text-slate-500">Open to Remote &amp; On-site</p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h5 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              Send a Direct Message
            </h5>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 font-medium">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Frontend Role / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 font-medium">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Shrishti, I came across your portfolio and wanted to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-adham btn-adham-primary w-full text-xs font-semibold py-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

              {formSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been prepared and sent successfully.</span>
                </motion.div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
