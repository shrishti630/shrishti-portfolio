import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AmbientBackground from './components/AmbientBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AestheticModal from './components/AestheticModal';

const ROUTE_SECTIONS = [
  { path: '/', id: 'hero' },
  { path: '/portfolio', id: 'projects' },
  { path: '/about', id: 'about' },
  { path: '/skills', id: 'skills' },
  { path: '/experience', id: 'experience' },
  { path: '/contact', id: 'contact' },
];

export default function App() {
  const [isAestheticModalOpen, setIsAestheticModalOpen] = useState(false);

  useEffect(() => {
    // 1. Initial route check on page load / reload
    const currentPath = window.location.pathname;
    const initialTarget = ROUTE_SECTIONS.find(
      (r) => r.path === currentPath || (r.path === '/portfolio' && currentPath === '/projects')
    );

    if (initialTarget) {
      if (initialTarget.path === '/') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(initialTarget.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }

    // 2. Handle browser Back and Forward navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      const target = ROUTE_SECTIONS.find(
        (r) => r.path === path || (r.path === '/portfolio' && path === '/projects')
      );
      if (target) {
        if (target.path === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(target.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('popstate', handlePopState);

    // 3. Scroll sync: dynamically keep URL bar updated without any '#'
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY < 140) {
          if (window.location.pathname !== '/') {
            window.history.replaceState(null, '', '/');
          }
          return;
        }

        for (let i = ROUTE_SECTIONS.length - 1; i >= 0; i--) {
          const item = ROUTE_SECTIONS[i];
          if (item.path === '/') continue;
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.45 && rect.bottom > 100) {
              if (window.location.pathname !== item.path) {
                window.history.replaceState(null, '', item.path);
              }
              break;
            }
          }
        }
      }, 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#fbfbfc] text-[#222222] min-h-screen selection:bg-indigo-500/20 selection:text-indigo-600 relative overflow-x-hidden">
      
      {/* Continuously Moving Ambient Background: Drifting Grid, Aurora Glow Blobs & Particle Constellation */}
      <AmbientBackground />

      {/* Adham Dannaway Top Navigation */}
      <Navbar onOpenAestheticModal={() => setIsAestheticModalOpen(true)} />

      {/* Main Content: Alternating Light & Dark Rhythm */}
      <main>
        {/* 1. Signature Split Hero: designer vs <coder> */}
        <Hero />

        {/* 2. Dark Section: Some of my latest work (.thumbs) */}
        <Projects />

        {/* 3. Light Section: About me (Dual identity & Education) */}
        <About />

        {/* 4. Dark Section: Skills & Tools (Designer vs Coder) */}
        <Skills />

        {/* 5. Light Section: Work Experience Timeline */}
        <Experience />

        {/* 6. Dark Section: Achievements & Research */}
        <EducationAchievements />

        {/* 7. Light Section: Get in touch & Email Copy Tooltip */}
        <Contact />
      </main>

      {/* 8. Adham Dannaway Minimal Footer */}
      <Footer onOpenAestheticModal={() => setIsAestheticModalOpen(true)} />

      {/* Optional Design System Modal */}
      <AestheticModal 
        isOpen={isAestheticModalOpen} 
        onClose={() => setIsAestheticModalOpen(false)} 
      />

    </div>
  );
}
