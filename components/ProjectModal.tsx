'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { X, Calendar, Layers, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className={`bg-white text-zinc-900 border border-zinc-200 shadow-2xl w-full max-w-4xl rounded-2xl p-5 sm:p-8 relative overflow-hidden max-h-[92dvh] overflow-y-auto my-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-black hover:text-white transition-colors text-zinc-600 min-w-[44px] min-h-[44px] flex items-center justify-center z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {}
        <div className="flex items-center gap-2.5 mb-3 pr-12">
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-mono text-zinc-800 font-semibold">
            {project.number}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider truncate">
            {project.category}
          </span>
        </div>

        {}
        <h2 id="project-modal-title" className="font-heading text-2xl sm:text-4xl font-extrabold mb-5 tracking-tight text-black pr-8">
          {project.title}
        </h2>

        {}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 mb-6 bg-zinc-100 shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover object-center"
          />
        </div>

        {}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-6 bg-zinc-50 border border-zinc-200 rounded-xl mb-8">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1 text-center sm:text-left">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-black">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div className="space-y-3 bg-zinc-50/70 p-5 rounded-xl border border-zinc-100">
            <h3 className="font-heading text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-black" />
              <span>The Client Challenge</span>
            </h3>
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-3 bg-zinc-50/70 p-5 rounded-xl border border-zinc-100">
            <h3 className="font-heading text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>The Strategic Solution</span>
            </h3>
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-8 space-y-3">
            <h3 className="font-heading text-xs uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-black" />
              <span>Technology & Architecture</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono font-medium text-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-zinc-100">
          <div className="flex items-start gap-3">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0 mt-0.5" />
            <div>
              <span className="block text-[11px] font-mono text-zinc-400 uppercase">Capabilities Delivered</span>
              <span className="text-xs sm:text-sm font-medium text-zinc-900">
                {project.services.join(' · ')}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0 mt-0.5" />
            <div>
              <span className="block text-[11px] font-mono text-zinc-400 uppercase">Year Completed</span>
              <span className="text-xs sm:text-sm font-medium text-zinc-900">{project.year}</span>
            </div>
          </div>
        </div>

        {}
        <div className="mt-6 pt-5 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-black text-white font-heading text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors min-h-[44px]"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
