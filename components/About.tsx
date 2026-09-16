import React from 'react';
import { Target, Cpu, ShieldCheck } from 'lucide-react';

const AGENCY_PILLARS = [
  {
    icon: Target,
    title: 'Strategy & Research',
    description: 'Deep audience discovery, competitor mapping, and product positioning designed for real commercial impact.',
  },
  {
    icon: Cpu,
    title: 'Craft & Engineering',
    description: 'Performance-first code, modern Next.js component architectures, and responsive pixel perfection.',
  },
  {
    icon: ShieldCheck,
    title: 'Scale & Growth',
    description: 'Extensible design systems and robust platforms engineered for sustained long-term performance.',
  },
];

const METRICS = [
  { value: '100+', label: 'Digital Products Launched' },
  { value: '99%', label: 'Client Satisfaction Rate' },
  { value: '8+', label: 'Years Studio Excellence' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative bg-mono-black text-white border-t border-white/10 overflow-hidden">
      {}
      <div className="aria-hidden:true absolute top-1/2 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              03 / ABOUT WEBOIN
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Where Ideas <br />
              <span className="text-zinc-400">Meet Digital Craft.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              WEBOIN brings strategy, design, and technology together to create digital experiences people remember.
            </p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {AGENCY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-white/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                {metric.value}
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
