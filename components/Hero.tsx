'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between overflow-hidden bg-mono-black text-white"
    >
      {}
      <div className="aria-hidden:true absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {}
          <div className="order-1 lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>DESIGN • DEVELOP • ELEVATE</span>
            </div>

            {}
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white">
              Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Extraordinary
              </span> <br />
              Experiences.
            </h1>

            {}
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl font-normal leading-relaxed">
              WEBOIN is a premier digital design studio crafting high-impact web applications, digital products, and distinctive brand identities.
            </p>

            {}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="px-7 py-4 rounded-full bg-white text-black font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-zinc-200 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="px-7 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center min-h-[48px]"
              >
                <span>View Our Work</span>
              </a>
            </div>
          </div>

          {}
          <div className="order-2 lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/60 shadow-2xl group">
              <Image
                src="/images/hero/hero.jpg"
                alt="WEBOIN Laptop Digital Product Mockup Presentation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mono-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-4 h-7 rounded-full border border-zinc-700 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
          </div>
          <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE</span>
        </div>

        <div className="hidden sm:block uppercase tracking-widest text-[10px]">
          DIGITAL DESIGN & DEVELOPMENT STUDIO
        </div>
      </div>
    </section>
  );
}
