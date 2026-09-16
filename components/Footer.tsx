import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-mono-black text-white border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="font-heading font-extrabold text-2xl tracking-wider text-white uppercase inline-block">
              WEBOIN
            </a>
            <p className="text-sm text-zinc-400 max-w-sm font-normal leading-relaxed">
              A premier digital design studio crafting high-impact web applications, digital products, and brand identities.
            </p>
            <div className="text-xs font-mono text-zinc-500 pt-2">
              Strategy. Design. Technology.
            </div>
          </div>

          {}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Branding</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>

        {}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} WEBOIN. All rights reserved.
          </div>
          <div>
            Chennai, India · Digital Design Agency
          </div>
        </div>
      </div>
    </footer>
  );
}
