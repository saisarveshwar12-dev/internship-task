'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA } from '@/lib/data';
import { Project } from '@/lib/types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 sm:py-32 relative bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              02 / SELECTED WORK
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Selected <br />
              <span className="text-zinc-500">Case Studies.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              A curated selection of digital products, brand identity systems, and platforms crafted for ambitious companies.
            </p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
