import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        
        {/* Literary Quote */}
        <div className="max-w-md mx-auto space-y-2">
          <p className="font-serif italic text-secondary text-sm leading-relaxed">
            "A word after a word after a word is power."
          </p>
          <p className="text-xs uppercase tracking-wider text-accent font-semibold font-sans">
            — Margaret Atwood
          </p>
        </div>

        {/* Separator line */}
        <div className="w-12 h-[1px] bg-border-base mx-auto"></div>

        {/* Copyright info */}
        <div className="font-sans text-xs text-secondary/60 space-y-1">
          <p>
            &copy; {currentYear} Nodee Shankar. All rights reserved.
          </p>
          <p className="italic">
            Designed with an editorial and literary aesthetic. Built with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}
