import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Private English Tutor',
      company: 'Self-employed',
      location: 'Chattogram, Bangladesh',
      period: '2018 – Present',
      description: 'One-on-one and small-group English language tutoring to school-level students.',
      highlights: [
        'Tutored 40+ students across school-level curricula, improving average test scores by 20% and strengthening core grammar, reading comprehension, and creative writing.',
        'Designed over 120 custom lesson plans and interactive materials tailored to individual learning styles, goals, and academic pace.',
        'Built and sustained trusted relationships with parents and students, with multiple client engagements spanning 3+ academic years.',
        'Balanced busy academic studies with tutoring workloads, demonstrating high self-discipline, time management, and adaptability.'
      ]
    },
    {
      role: 'Call Center & Data Collection Executive',
      company: 'Autism Society Habilitation Organization (ASHO)',
      location: 'Chattogram, Bangladesh',
      period: 'Feb 2025 – Jul 2025',
      description: 'Inbound/outbound call management and program data collection.',
      highlights: [
        'Handled 1,500+ inbound and outbound calls, updating critical beneficiary database records with a 99% data integrity rating.',
        'Communicated with high empathy, sensitivity, and professionalism to support families and community stakeholders seeking support.',
        'Maintained structured administrative files, complying with program information standards and compliance policies.',
        'Collaborated with a 5-person executive team to meet daily outreach targets and report on critical project deliverables.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-border-base transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            02 / Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Professional Chronology
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border-base pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline dot */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full border border-accent bg-background group-hover:bg-accent transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-background transition-all duration-300"></span>
              </span>

              {/* Card Container */}
              <div className="bg-surface border border-border-base hover:border-accent p-6 md:p-8 rounded shadow-sm hover:shadow-md transition-all duration-300 text-left">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-base/50 pb-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-sans font-medium text-secondary flex items-center gap-1.5 mt-1">
                      <Briefcase size={14} className="text-accent/60" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-end gap-1.5 text-xs text-secondary/80 font-sans">
                    <span className="flex items-center gap-1 bg-surface-secondary px-2.5 py-1 rounded">
                      <Calendar size={12} className="text-accent/60" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 sm:ml-2 md:ml-0">
                      <MapPin size={12} className="text-accent/60" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle/Brief */}
                <p className="font-serif italic text-sm text-primary mb-4">
                  {exp.description}
                </p>

                {/* Bullets represented as editorial paragraphs or structured lines */}
                <ul className="space-y-3 font-sans text-sm text-secondary leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-accent/70">
                      {highlight}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
