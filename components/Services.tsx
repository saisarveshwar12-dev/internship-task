'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '@/lib/data';
import { Service } from '@/lib/types';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 sm:py-32 relative bg-white text-zinc-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              01 / SERVICES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Simple and <br />
              <span className="text-zinc-500">Logical Solutions.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We combine strategic design, modern engineering, and brand positioning to craft digital products that help ambitious companies stand out.
            </p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(srv) => setSelectedService(srv)}
            />
          ))}
        </div>
      </div>

      {}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
