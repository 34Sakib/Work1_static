import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header({ darkMode, setDarkMode }) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight text-accent transition-colors duration-300 hover:opacity-85" id="nav-brand">
          <img
            src="https://lh3.googleusercontent.com/d/1dtUlwfWqrPmcYge6cG8aZwGsMK3IByKI"
            alt="Nodee Shankar Logo"
            className="h-8 w-auto object-contain transition-all duration-300"
            id="header-logo"
            referrerPolicy="no-referrer"
          />
          <span className="hidden sm:inline">Nodee Shankar</span>
        </a>

        {/* Desktop Navigation & Toggle */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-accent transition-colors duration-200"
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-border-base bg-surface hover:bg-surface-secondary text-primary hover:text-accent transition-all duration-200 cursor-pointer"
            aria-label="Toggle light and dark themes"
            id="theme-toggle"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
