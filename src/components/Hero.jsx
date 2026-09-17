import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Sliders, 
  ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Hero() {
  // Slider position from 0 (100% coder) to 100 (100% designer)
  // Default is 50 (half & half split)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeMode, setActiveMode] = useState('split'); // 'designer' | 'split' | 'coder'
  const [hoverSide, setHoverSide] = useState(null); // 'designer' | 'coder' | null

  const heroSectionRef = useRef(null);
  const faceContainerRef = useRef(null);
  const targetPosRef = useRef(50);

  // Smooth lerp loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setSliderPos((currentPos) => {
        const diff = targetPosRef.current - currentPos;
        if (Math.abs(diff) < 0.2) {
          return targetPosRef.current;
        }
        return currentPos + diff * 0.14;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle mouse move across the hero to wipe between the two full images
  // Moving to the right opens the designer image (0% -> 100%)
  // Moving to the left opens the coder image (100% -> 0%)
  const handleMouseMove = (e) => {
    if (isDragging || !faceContainerRef.current) return;
    const rect = faceContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    targetPosRef.current = percentage;

    if (percentage > 55) {
      setHoverSide('designer');
    } else if (percentage < 45) {
      setHoverSide('coder');
    } else {
      setHoverSide(null);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      targetPosRef.current = 50;
      setHoverSide(null);
      setActiveMode('split');
    }
  };

  // Dragging support
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = useCallback((e) => {
    if (!isDragging || !faceContainerRef.current) return;
    const rect = faceContainerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    targetPosRef.current = percentage;
    setSliderPos(percentage);

    if (percentage > 65) {
      setActiveMode('designer');
      setHoverSide('designer');
    } else if (percentage < 35) {
      setActiveMode('coder');
      setHoverSide('coder');
    } else {
      setActiveMode('split');
      setHoverSide(null);
    }
  }, [isDragging]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDrag]);

  // Preset switchers:
  // 'designer' -> slider to 100% (designer image fully open)
  // 'coder' -> slider to 0% (coder image fully open)
  // 'split' -> slider to 50% (half designer, half coder)
  const setMode = (mode) => {
    setActiveMode(mode);
    if (mode === 'designer') {
      targetPosRef.current = 100;
      setHoverSide('designer');
    } else if (mode === 'coder') {
      targetPosRef.current = 0;
      setHoverSide('coder');
    } else {
      targetPosRef.current = 50;
      setHoverSide(null);
    }
  };

  // Calculate designer and coder side opacities based on hover side and slider position
  const designerOpacity = hoverSide === 'coder' || sliderPos < 35 ? 0.35 : 1;
  const coderOpacity = hoverSide === 'designer' || sliderPos > 65 ? 0.35 : 1;

  return (
    <section 
      id="hero" 
      ref={heroSectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#fbfbfc] text-[#222222] select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Adham Dannaway Preset Mode Toggle Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-12"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Interactive Split Switcher */}
          <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setMode('designer')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'designer' || sliderPos > 85
                  ? 'bg-slate-900 text-white font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Slide right to fully reveal Designer image"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>designer (100%)</span>
            </button>

            <button
              onClick={() => setMode('split')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'split' && sliderPos >= 35 && sliderPos <= 65
                  ? 'bg-slate-900 text-white font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Half Designer, Half Coder"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>half &amp; half</span>
            </button>

            <button
              onClick={() => setMode('coder')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'coder' || sliderPos < 15
                  ? 'bg-slate-900 text-white font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Slide left to fully reveal Coder image"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>&lt;coder&gt; (100%)</span>
            </button>
          </div>
        </motion.div>

        {/* Adham Dannaway Signature Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative min-h-[460px] md:min-h-[540px]">
          
          {/* Left Column: Designer Title, Description & Curved Pointer Arrow */}
          <motion.div 
            style={{ opacity: designerOpacity }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 text-center lg:text-left flex flex-col justify-center order-2 lg:order-1 transition-opacity duration-300"
          >
            <div className="space-y-4">
              <a 
                href="#projects" 
                className="group inline-block"
                title="View UI & Design Projects"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] group-hover:text-indigo-600 transition-colors">
                  designer
                </h1>
              </a>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Product designer specialising in UI design, typography, and scalable design systems.
              </p>

              {/* Designer skills pills */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start pt-1">
                {['UI/UX Systems', 'Responsive Web', 'Design Tokens', 'Accessibility'].map((item) => (
                  <span key={item} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200/80">
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Explore UI designs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hand-drawn style pointer arrow pointing towards the face (visible on desktop) */}
            <div className="hidden lg:block mt-6 ml-6 opacity-70">
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 C 40 50, 70 45, 80 15" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M72 18 L 81 12 L 85 22" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Center Column: Interactive 2-Image Wiping Container */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            
            {/* Animated Floating Container with Breathing Motion */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Floating Designer Mini Badge (Left) */}
              <motion.div 
                animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-4 -left-6 z-40 items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-purple-200 shadow-md text-[11px] font-medium text-purple-700 pointer-events-none"
              >
                <Palette className="w-3 h-3 text-purple-600" />
                <span>Full Designer Image</span>
              </motion.div>

              {/* Floating Coder Mini Badge (Right) */}
              <motion.div 
                animate={{ y: [3, -3, 3], rotate: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                className="hidden sm:flex absolute -bottom-3 -right-6 z-40 items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 shadow-md text-[11px] font-mono text-cyan-300 pointer-events-none"
              >
                <Code2 className="w-3 h-3 text-cyan-400" />
                <span>Full Coder Image</span>
              </motion.div>

              {/* Interactive Dual-Image Container:
                  - Image 1 (Bottom): Complete Full Coder Cartoon Image
                  - Image 2 (Top): Complete Full Designer Cartoon Image, revealed by sliderPos from left to right
                  - When slider is on the right (100%), Designer image is fully open!
                  - When slider is on the left (0%), Coder image is fully open!
              */}
              <div 
                ref={faceContainerRef}
                className="relative w-[320px] sm:w-[380px] md:w-[440px] lg:w-[460px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 cursor-ew-resize group"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              >
                {/* 1. Complete Full Coder Cartoon Image (Always underneath) */}
                <img 
                  src="/cartoon-coder.jpg" 
                  alt="Shrishti Pandey - Full Coder Persona" 
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="eager"
                />

                {/* 2. Complete Full Designer Cartoon Image (Clipped from 0% to sliderPos%) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none select-none transition-none"
                  style={{
                    clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)`
                  }}
                >
                  <img 
                    src="/cartoon-designer.jpg" 
                    alt="Shrishti Pandey - Full Designer Persona" 
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                    loading="eager"
                  />
                </div>

                {/* 3. Vertical Dividing Line between the 2 Images */}
                <div 
                  className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_14px_rgba(0,0,0,0.6)] pointer-events-none z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Central Drag Handle Button */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 border-2 border-slate-900/15 shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                    <div className="flex items-center gap-0.5 text-slate-800 font-bold">
                      <span className="text-[10px]">&lang;</span>
                      <span className="text-[10px]">&rang;</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Live Status */}
                <div className="absolute bottom-3 left-3 z-30 pointer-events-none">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wide transition-all ${
                    sliderPos > 50 
                      ? 'bg-purple-600/90 text-white font-bold shadow-xs' 
                      : 'bg-black/50 text-slate-300 backdrop-blur-md'
                  }`}>
                    designer {Math.round(sliderPos)}% {sliderPos >= 98 && '✓ FULL'}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 z-30 pointer-events-none">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wide transition-all ${
                    sliderPos < 50 
                      ? 'bg-indigo-600/90 text-white font-bold shadow-xs' 
                      : 'bg-black/50 text-slate-300 backdrop-blur-md'
                  }`}>
                    &lt;coder&gt; {Math.round(100 - sliderPos)}% {sliderPos <= 2 && '✓ FULL'}
                  </span>
                </div>

                {/* Hover Instructions Helper Badge */}
                <div className="absolute top-3 inset-x-0 flex justify-center z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-[11px] font-mono text-slate-200 shadow-md">
                    Move cursor right for Designer | Move left for Coder
                  </span>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Coder Title, Description & Curved Pointer Arrow */}
          <motion.div 
            style={{ opacity: coderOpacity }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 text-center lg:text-right flex flex-col justify-center order-3 transition-opacity duration-300"
          >
            <div className="space-y-4">
              <a 
                href="#projects" 
                className="group inline-block"
                title="View Code & Frontend Projects"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] group-hover:text-indigo-600 transition-colors">
                  <span className="text-indigo-600 font-mono">&lt;</span>coder<span className="text-indigo-600 font-mono">&gt;</span>
                </h1>
              </a>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Front end developer who writes clean, elegant and efficient React code.
              </p>

              {/* Coder skills pills */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-end pt-1">
                {['React.js', 'Tailwind CSS', 'REST APIs', 'FastAPI Auth'].map((item) => (
                  <span key={item} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono border border-slate-200/80">
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a 
                  href="#skills" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Explore engineering stack</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hand-drawn style pointer arrow pointing towards the face (visible on desktop) */}
            <div className="hidden lg:block mt-6 mr-6 opacity-70 flex justify-end">
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-y-180">
                <path d="M10 50 C 40 50, 70 45, 80 15" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M72 18 L 81 12 L 85 22" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
