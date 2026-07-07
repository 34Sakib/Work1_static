import React from 'react';
import { Languages, Users, Settings } from 'lucide-react';

export default function Skills() {
  const skillClusters = [
    {
      title: 'Language & Communication',
      icon: <Languages size={20} className="text-accent" />,
      description: 'The foundation of my training in English letters, bridging language analysis and clear client relations.',
      skills: [
        'Written & Verbal Expression',
        'English Proficiency (Fluent, IELTS 6.0)',
        'Bangla (Native Speaker)',
        'Email & Professional Correspondence',
        'Active Listening & Clarification'
      ]
    },
    {
      title: 'Teaching & Interpersonal',
      icon: <Users size={20} className="text-accent" />,
      description: 'Skills developed over eight years of academic mentoring and service in community advocacy.',
      skills: [
        'One-on-One English Tutoring',
        'Lesson Planning & Pedagogy Design',
        'Parent-Teacher Relations',
        'Student Assessment & Motivation',
        'Team Collaboration & Empathy'
      ]
    },
    {
      title: 'Tools & Digital',
      icon: <Settings size={20} className="text-accent" />,
      description: 'Practical digital tools for organizing databases, creating presentations, and handling data entry.',
      skills: [
        'MS Word (Document Layout & Reports)',
        'MS Excel (Data Entry & Verification)',
        'MS PowerPoint (Interactive Slides)',
        'Database Management Standards',
        'Inbound & Outbound Calling Tools'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border-base transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            04 / Competencies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Curated Skillsets
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        {/* 3 Clusters Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillClusters.map((cluster, index) => (
            <div
              key={index}
              className="bg-surface border border-border-base hover:border-accent p-6 md:p-8 rounded shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Cluster Header */}
                <div className="flex items-center gap-3 border-b border-border-base/50 pb-4 mb-4">
                  <div className="p-2 rounded bg-surface-secondary border border-border-base group-hover:bg-accent/10 transition-colors duration-300">
                    {cluster.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    {cluster.title}
                  </h3>
                </div>

                {/* Cluster Intro */}
                <p className="text-xs font-sans text-secondary/80 italic leading-relaxed mb-6">
                  {cluster.description}
                </p>

                {/* Skill List */}
                <ul className="space-y-3 font-sans text-sm text-secondary">
                  {cluster.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0"></span>
                      <span>{skill}</span>
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
