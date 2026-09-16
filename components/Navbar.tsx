'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'services', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'glass-navbar-scrolled' : 'glass-navbar'
        }`}
      >
        {}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase flex items-center gap-1.5 group py-0.5 shrink-0"
        >
          <span>WEBOIN</span>
        </a>

        {}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative py-1 flex items-center gap-2 group/link ${
                  isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" />
                )}
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {}
        <div className="hidden md:block shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>

        {}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full bg-zinc-900/80 border border-white/10 shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] sm:top-[80px] z-40 bg-mono-black/95 backdrop-blur-2xl md:hidden px-6 py-8 flex flex-col justify-between border-b border-white/10 animate-fade-in pointer-events-auto max-h-[calc(100dvh-70px)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-4 pt-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xl sm:text-2xl font-heading font-bold flex items-center justify-between transition-colors py-3 border-b border-white/10 min-h-[48px] ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                </a>
              );
            })}
          </div>

          <div className="pt-8 pb-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3.5 rounded-full text-center font-heading font-semibold text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 min-h-[48px] uppercase tracking-wider text-xs"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
