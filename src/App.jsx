import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AestheticModal from './components/AestheticModal';

export default function App() {
  const [isAestheticModalOpen, setIsAestheticModalOpen] = useState(false);

  return (
    <div className="bg-[#fbfbfc] text-[#222222] min-h-screen selection:bg-indigo-500/20 selection:text-indigo-600 relative overflow-x-hidden">
      
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
