import React from 'react';
import { Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor in English Language & Literature',
      institution: 'Port City International University, Bangladesh',
      period: 'Jan 2022 – Nov 2025',
      gradeLabel: 'CGPA',
      gradeValue: '3.86 / 4.00',
      details: 'Specialized in Language Acquisition, Creative Writing, and Literary Criticism. Graduated with Honors.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Bepza Public High School & College',
      period: 'Jun 2018 – Mar 2020',
      gradeLabel: 'GPA',
      gradeValue: '5.00 / 5.00',
      details: 'Humanities Group. Achieved a perfect GPA scorecard.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Eastern Refinery Model High School',
      period: 'Jan 2016 – Feb 2018',
      gradeLabel: 'GPA',
      gradeValue: '4.67 / 5.00',
      details: 'Humanities Group. Formative academic years focused on core arts and letters.'
    },
    {
      degree: 'IELTS Academic Certification',
      institution: 'International English Language Testing System',
      period: 'January 2025',
      gradeLabel: 'Band',
      gradeValue: '6.0',
      details: 'Validated fluent English proficiency in Listening, Reading, Writing, and Speaking (Executive Care).'
    }
  ];

  return (
    <section id="education" className="py-20 md:py-28 border-b border-border-base bg-surface-secondary/20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            03 / Education
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Academic Foundation
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-surface border border-border-base hover:border-accent p-6 md:p-8 rounded shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Degree / Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-sans text-secondary font-medium">
                      {item.institution}
                    </p>
                  </div>
                  <div className="p-2 rounded bg-surface-secondary border border-border-base text-accent shrink-0">
                    <BookOpen size={18} />
                  </div>
                </div>

                {/* Details */}
                <p className="text-sm font-sans text-secondary/90 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Period & Grade Badge */}
              <div className="flex items-center justify-between border-t border-border-base/50 pt-4 mt-6">
                <div className="flex items-center gap-1.5 text-xs text-secondary/70 font-sans">
                  <Calendar size={12} className="text-accent/60" />
                  <span>{item.period}</span>
                </div>
                
                {/* Grade Badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold font-sans rounded bg-accent/10 border border-accent/25 text-accent dark:bg-accent/20 dark:text-accent">
                  <Award size={12} />
                  <span>{item.gradeLabel}: {item.gradeValue}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
