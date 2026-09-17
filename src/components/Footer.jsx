import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const handleNav = (e, path, sectionId) => {
    e.preventDefault();
    if (path === '/') {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', path);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'about', path: '/about', sectionId: 'about' },
    { name: 'skills', path: '/skills', sectionId: 'skills' },
    { name: 'portfolio', path: '/portfolio', sectionId: 'projects' },
    { name: 'experience', path: '/experience', sectionId: 'experience' },
    { name: 'contact', path: '/contact', sectionId: 'contact' }
  ];

  return (
    <footer className="bg-[#16181b] border-t border-slate-800 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Row: Brand & Nav Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Subtitle */}
          <div className="text-center md:text-left space-y-1">
            <a 
              href="/"
              onClick={(e) => handleNav(e, '/', 'hero')}
              className="text-base font-normal text-white hover:text-indigo-400 transition-colors font-['Plus_Jakarta_Sans'] tracking-wider"
            >
              © 2026 {personalInfo.name}
            </a>
            <p className="text-xs text-slate-500 font-light">
              Product designer &amp; front end developer
            </p>
          </div>

          {/* Lowercase Nav Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 list-none m-0 p-0 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path, link.sectionId)}
                  className="text-slate-400 hover:text-white transition-colors lowercase font-light tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#22252a] text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#22252a] text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#22252a] text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Row: Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Designed &amp; engineered with React.js &amp; Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
