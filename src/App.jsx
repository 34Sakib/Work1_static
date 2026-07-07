import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Check local storage or system preference for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-300 flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      {/* Printable Resume Container wraps everything but has print rules to adjust output */}
      <div className="flex-grow">
        {/* Navigation - hidden on print */}
        <div className="print:hidden">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Portfolio Layout Sections */}
        <main id="main-content" role="main">
          <Hero />
          <About />
          
          {/* Printable Layout Page Breaks */}
          <div className="print:page-break-before">
            <Experience />
          </div>
          
          <div className="print:page-break-before">
            <Education />
          </div>

          <div className="print:hidden">
            <Skills />
            <Writing />
            <Contact />
          </div>
        </main>
      </div>

      {/* Footer - hidden on print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
