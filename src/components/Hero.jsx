import React from 'react';
import { Mail, ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center py-16 md:py-24 border-b border-border-base transition-colors duration-300">
      {/* Editorial Watermark background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none flex items-center justify-center font-serif text-[12vw] font-bold select-none">
        Literature
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Typographic Identity & Intro */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
              English Language & Literature Graduate
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Nodee Shankar
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-secondary mt-2 border-l-2 border-accent pl-4">
              "Tutor & Communication Specialist"
            </p>
          </div>

          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl font-sans">
            A patient educator, clear communicator, and detail-driven professional. Bridging the gap between the subtle arts of language and the structured rigor of data operations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-surface font-sans font-medium rounded border border-accent hover:border-accent-hover shadow-sm transition-all duration-300 cursor-pointer text-sm"
              id="hero-contact-btn"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-secondary text-primary font-sans font-medium rounded border border-border-base hover:border-accent transition-all duration-300 cursor-pointer text-sm"
              id="hero-download-cv-btn"
            >
              <FileText size={16} />
              Print CV / Resume
            </button>
          </div>
        </div>

        {/* Portait Display with Editorial Frame */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative group">
            {/* Background offset border */}
            <div className="absolute -inset-3 border border-accent/30 rounded translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            
            {/* The main image container */}
            <div className="relative bg-surface p-3 border border-border-base rounded shadow-md overflow-hidden max-w-[280px] sm:max-w-[320px]">
              <img
                src="https://lh3.googleusercontent.com/d/17xzx9BZvH2ADbj8PHtyOIUSapAcQ625T"
                alt="Portrait of Nodee Shankar"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded object-cover aspect-[4/5]"
                id="hero-profile-image"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 text-center">
                <span className="font-serif italic text-xs text-secondary">Nodee Shankar, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-secondary/40 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section" className="hover:text-accent transition-colors duration-200">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
