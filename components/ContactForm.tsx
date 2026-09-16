'use client';

import React, { useState } from 'react';
import { ContactFormData, FormErrors } from '@/lib/types';
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message or project brief.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-10 text-center animate-fade-in shadow-sm">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-2.5 sm:mb-3">
          Message Ready for Submission
        </h3>
        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6 sm:mb-8">
          Thanks — your inquiry details are validated and ready. We will get in touch shortly to discuss your project goals.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 rounded-full bg-black text-white font-heading text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors min-h-[44px]"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm w-full"
    >
      {}
      <div>
        <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-2">
          Your Name <span className="text-black">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          placeholder="e.g. Alex Morgan"
          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-zinc-50 border text-black placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all min-h-[46px] ${
            errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-zinc-200'
          }`}
        />
        {errors.name && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {}
      <div>
        <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-2">
          Your Email <span className="text-black">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          placeholder="e.g. alex@company.com"
          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-zinc-50 border text-black placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all min-h-[46px] ${
            errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-zinc-200'
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      {}
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-2">
          Project Details / Message <span className="text-black">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          placeholder="Tell us about your brand, goals, timeline, or idea..."
          className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-zinc-50 border text-black placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-zinc-200'
          }`}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-black hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 group min-h-[48px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Validating Inquiry...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
