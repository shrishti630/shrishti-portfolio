import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ExternalLink } from 'lucide-react';
import { aestheticReferences } from '../data/resumeData';

export default function AestheticModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white max-w-3xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
          >
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 border border-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-700 font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STITCH MCP DESIGN SYSTEM CONTEXT</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Light Minimal-Luxe Design System
              </h3>
              <p className="text-xs text-slate-600">
                Extracted via Stitch MCP (`extract_design_context` / `generate_screen_from_text`) for Shrishti Portfolio.
              </p>
            </div>

            {/* Reference Links Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-purple-700 uppercase tracking-wider font-bold">Aesthetic Reference Inspiration Links:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aestheticReferences.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white transition-all flex items-center justify-between group shadow-xs"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block">
                        {ref.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block">{ref.description}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Color Spectrum */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-indigo-600 uppercase tracking-wider font-bold">Extracted Color Palette:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-full h-6 rounded bg-slate-50 border border-slate-300 mb-2"></div>
                  <span className="text-slate-900 block font-bold">#F8FAFC</span>
                  <span className="text-[10px] text-slate-500">Slate Canvas</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-full h-6 rounded bg-white border border-slate-300 mb-2"></div>
                  <span className="text-slate-900 block font-bold">#FFFFFF</span>
                  <span className="text-[10px] text-slate-500">Pure Surface</span>
                </div>

                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200">
                  <div className="w-full h-6 rounded bg-indigo-600 mb-2"></div>
                  <span className="text-indigo-700 block font-bold">#4F46E5</span>
                  <span className="text-[10px] text-indigo-600">Indigo Primary</span>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="w-full h-6 rounded bg-purple-600 mb-2"></div>
                  <span className="text-purple-700 block font-bold">#7C3AED</span>
                  <span className="text-[10px] text-purple-600">Violet Accent</span>
                </div>
              </div>
            </div>

            {/* Typography System */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">Typography Tokens:</h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600">Display & Headlines:</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900">Plus Jakarta Sans (56px, 40px, 28px)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600">Interface & Body:</span>
                  <span className="font-['Inter'] text-slate-900">Inter (18px, 15px, 13px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Code & Tech Badges:</span>
                  <span className="font-mono text-indigo-700 font-semibold">JetBrains Mono (14px, 12px, 11px)</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="cyber-btn-primary px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
              >
                Close Inspector
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
