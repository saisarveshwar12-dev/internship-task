'use client';

import React, { useEffect, useState } from 'react';
import { Service } from '@/lib/types';
import { X, CheckCircle2 } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (service) {
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

    if (service) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className={`bg-white text-zinc-900 border border-zinc-200 shadow-2xl w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative overflow-hidden max-h-[90dvh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-black hover:text-white transition-colors text-zinc-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 mb-4">
          <span>SERVICE {service.number}</span>
        </div>

        {}
        <h2 id="service-modal-title" className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-black">
          {service.title}
        </h2>

        {}
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
          {service.detailedOverview}
        </p>

        {}
        <div className="space-y-4 pt-4 border-t border-zinc-100">
          <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-zinc-400">
            Core Capabilities & Deliverables
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-black text-white font-heading text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
