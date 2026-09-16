'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export default function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`,
      transition: 'transform 0.15s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className="group relative cursor-pointer rounded-2xl overflow-hidden border border-zinc-200 hover:border-black transition-all duration-500 bg-white flex flex-col shadow-sm hover:shadow-lg will-change-transform"
    >
      {}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={`WEBOIN Case Study: ${project.title}`}
          fill
          priority={project.number === '01' || project.number === '02'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />

        {}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

        {}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-xs font-mono font-semibold text-black">
          {project.number}
        </div>
      </div>

      {}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
            {project.category}
          </span>
          <h3 className="font-heading text-xl font-bold text-black mb-2 group-hover:text-zinc-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>
        </div>

        {}
        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider text-black group-hover:text-zinc-600 transition-colors">
          <span>View Case Study</span>
          <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
