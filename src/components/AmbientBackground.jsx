import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 45 ambient floating particles
    const particleCount = Math.min(45, Math.floor(window.innerWidth / 30));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.35 + 0.15,
      isSymbol: Math.random() > 0.6,
      symbol: ['</>', '{ }', '✦', '❖', '//', 'λ'][Math.floor(Math.random() * 6)]
    }));

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective links between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Soft mouse repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 100) {
          const force = (100 - mDist) / 100;
          p.x += (mdx / mDist) * force * 1.5;
          p.y += (mdy / mDist) * force * 1.5;
        }

        if (p.isSymbol) {
          ctx.font = '11px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity * 0.8})`;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Continuously drifting graph paper grid */}
      <div className="absolute inset-0 animated-graph-grid opacity-60"></div>

      {/* 2. Floating Continuous Aurora Glowing Blobs */}
      {/* Aurora Orb 1: Indigo/Purple (Top Left) */}
      <motion.div 
        animate={{ 
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.25, 0.9, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 16, 
          ease: "easeInOut" 
        }}
        className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-500/12 via-purple-500/10 to-transparent blur-[120px]"
      />

      {/* Aurora Orb 2: Pink/Rose (Center Right) */}
      <motion.div 
        animate={{ 
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.15, 0.95, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-500/10 via-rose-400/8 to-transparent blur-[130px]"
      />

      {/* Aurora Orb 3: Cyan/Emerald (Bottom Left) */}
      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.2, 0.85, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-teal-300/8 to-transparent blur-[120px]"
      />

      {/* 3. Continuously moving floating tech/design tokens */}
      <div className="absolute top-28 left-[8%] animate-float-slow text-indigo-400/30 text-2xl font-mono">
        &lt;/&gt;
      </div>
      <div className="absolute top-[45%] left-[5%] animate-float-reverse text-purple-400/25 text-xl font-mono">
        {'{ React }'}
      </div>
      <div className="absolute top-[22%] right-[10%] animate-float-reverse text-pink-400/30 text-2xl font-['Caveat'] font-bold">
        ✦ UI/UX
      </div>
      <div className="absolute top-[65%] right-[7%] animate-float-slow text-cyan-500/25 text-xl font-mono">
        ❖ Figma
      </div>
      <div className="absolute bottom-[15%] left-[12%] animate-float-slow text-amber-500/25 text-lg font-mono">
        [ TypeScript ]
      </div>

      {/* 4. Canvas Particle Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

    </div>
  );
}
