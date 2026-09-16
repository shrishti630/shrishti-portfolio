import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AestheticModal from './components/AestheticModal';

export default function App() {
  const [isAestheticModalOpen, setIsAestheticModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-500/20 selection:text-indigo-600 relative overflow-x-hidden">
      
      {/* Sticky Navigation */}
      <Navbar onOpenAestheticModal={() => setIsAestheticModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationAchievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenAestheticModal={() => setIsAestheticModalOpen(true)} />

      {/* Aesthetic & Design Tokens Modal */}
      <AestheticModal 
        isOpen={isAestheticModalOpen} 
        onClose={() => setIsAestheticModalOpen(false)} 
      />

    </div>
  );
}
