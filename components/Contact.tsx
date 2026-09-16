import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-white text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              04 / GET IN TOUCH
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Let&apos;s Work <br />
              <span className="text-zinc-500">Together.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Have a project in mind? Tell us a little about your goals, timeline, and budget, and let&apos;s start a conversation.
            </p>

            <div className="pt-6 sm:pt-8 space-y-4 border-t border-zinc-100 text-xs sm:text-sm font-mono text-zinc-600">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">DIRECT INQUIRIES</span>
                <a href="mailto:hello@weboin.com" className="text-black font-semibold hover:underline">
                  hello@weboin.com
                </a>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">STUDIO LOCATION</span>
                <span className="text-black font-medium">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
