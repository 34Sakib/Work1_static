import React from 'react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border-base bg-surface-secondary/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Editorial Section Title */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            01 / Narrative
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            The Art of Connection
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main paragraphs */}
          <div className="md:col-span-8 space-y-6 text-left font-sans text-secondary leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:lh-1">
              For me, literature is more than a field of study—it is the study of how we connect. Whether explaining a complex grammatical rule to a young student or verifying program data under tight deadlines, clarity and empathy are the core values I bring to every role.
            </p>
            <p>
              Over the past eight years, my work as a private tutor has shaped how I communicate. Teaching has taught me that information is only as good as it is understood. It requires patient observation, adaptive planning, and the ability to break down complex literary themes or grammatical concepts into relatable narratives.
            </p>
            <p>
              In my work with the Autism Society Habilitation Organization (ASHO), I brought this same dedication to precision and human-centric care. Managing calls and verifying critical program data required both detail-driven execution and active, empathetic listening to support families within the autism community. I aim to bring this synthesis of clear writing, organizational rigor, and strong interpersonal skills to a growth-oriented organization.
            </p>
          </div>

          {/* Pull Quote Column */}
          <div className="md:col-span-4 mt-8 md:mt-0 bg-surface p-6 border-l-4 border-accent border-y border-r border-border-base rounded-r shadow-sm text-left">
            <Quote className="text-accent/20 mb-3" size={32} />
            <p className="font-serif italic text-primary leading-relaxed text-sm">
              "We teach to connect, and we write to clarify. Behind every data point is a human story, and behind every lesson plan is a path to understanding."
            </p>
            <div className="mt-4 text-xs uppercase tracking-wider text-accent font-semibold font-sans">
              — Narrative Core
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
