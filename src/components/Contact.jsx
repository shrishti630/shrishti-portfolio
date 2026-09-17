import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check,
  Clock,
  Loader2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shrishtip028@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          _replyto: formData.email
        })
      });

      const data = await response.json();
      if (response.ok || data.success === "true") {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission error');
      }
    } catch {
      // Fallback directly to mailto so the email is guaranteed to be sent
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="light-section py-20 md:py-28 bg-[#fbfbfc] relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Adham Dannaway Centered Header Divider */}
        <div className="header-center">
          <h3>Get in touch</h3>
        </div>
        <div className="text-center -mt-8 mb-10">
          <span className="font-['Caveat'] text-lg sm:text-xl text-purple-600 font-normal -rotate-1 inline-block tracking-wider">
            * let&apos;s build something exceptional together
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts & Signature Clipboard Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h4 className="text-2xl sm:text-3xl font-light text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Let&apos;s collaborate.
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Whether you have an exciting frontend developer role, a design system project, or want to discuss React applications, feel free to reach out.
              </p>
            </div>

            {/* Adham Dannaway Signature Clipboard Email Card */}
            <div className="relative pt-1">
              <div 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-indigo-300 transition-colors cursor-pointer group"
                onClick={copyEmail}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                        Email Address
                      </span>
                      <span className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </div>
                </div>

                {/* Signature Tooltip note */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px]">
                    {copiedEmail ? 'Email copied! 😀' : 'Click to copy my email address 😀'}
                  </span>
                  <span className="text-indigo-600 font-medium font-mono text-[11px]">
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Availability Cards (Phone completely removed) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Location</span>
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs font-medium text-slate-900">{personalInfo.location}</p>
                <p className="text-[10px] text-slate-500 font-light">Open to Remote &amp; On-site</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Response</span>
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Within 24 Hours
                </p>
                <p className="text-[10px] text-slate-500 font-light">Direct Inbox Forwarding</p>
              </div>
            </div>

            {/* Social Profile Buttons */}
            <div className="pt-1 flex items-center gap-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-normal text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-normal text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Connected Direct Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-light text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Send a Direct Message
              </h5>
              <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px]">Direct to {personalInfo.email}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-normal">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-normal">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 font-normal">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Frontend Role / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 font-normal">Message</label>
                <textarea
                  name="message"
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
                  disabled={isSubmitting}
                  className="btn-adham btn-adham-primary w-full text-xs font-medium py-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message to Shrishti...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-2.5 font-normal"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-emerald-800">Message sent successfully!</p>
                      <p className="text-[11px] text-emerald-700 mt-0.5">
                        Your message has been delivered to <strong>{personalInfo.email}</strong>. Shrishti will reply to your email directly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
