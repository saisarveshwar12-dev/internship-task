import React from 'react';
import { Service } from '@/lib/types';
import { Layout, Code, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelectService: (service: Service) => void;
}

export default function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const getIcon = (iconType: Service['icon']) => {
    switch (iconType) {
      case 'layout':
        return <Layout className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />;
      case 'code':
        return <Code className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />;
      default:
        return <Layout className="w-5 h-5 transition-colors duration-300 group-hover:text-black" />;
    }
  };

  return (
    <div className="bg-white hover:bg-black border border-zinc-200 hover:border-black rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-2xl hover:-translate-y-1.5">
      <div>
        {}
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-sm">
            {getIcon(service.icon)}
          </div>
          <span className="font-mono text-sm font-semibold text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            {service.number}
          </span>
        </div>

        {}
        <h3 className="font-heading text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">
          {service.title}
        </h3>

        {}
        <p className="text-sm text-zinc-600 group-hover:text-zinc-300 leading-relaxed font-normal mb-8 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {}
      <button
        type="button"
        onClick={() => onSelectService(service)}
        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-zinc-600 group-hover:text-white transition-colors duration-300 pt-4 border-t border-zinc-100 group-hover:border-zinc-800 w-full justify-between min-h-[44px]"
      >
        <span>Learn More</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}
