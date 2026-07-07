import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, ChevronRight, X } from 'lucide-react';

export default function Writing() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const samples = [
    {
      title: "The Architecture of Silence: Narrative Voice in Brontë's Villette",
      category: "Critical Literary Essay Excerpt",
      wordCount: "420 words",
      date: "October 2024",
      excerpt: "To read Charlotte Brontë’s Villette is to enter a dialogue with a shadow. Lucy Snowe, the novel’s evasive narrator, operates not merely as a chronicler of events but as a gatekeeper of her own interiority. Brontë structures the narrative through deliberate silences—unsaid conversations, hidden letters, and delayed confessions that demand the reader read between the margins of Snowe's grief. This narrative method does not weaken Lucy's position; rather, it weaponizes silence into an act of self-preservation...",
      fullContent: (
        <div className="space-y-4 font-serif text-primary leading-relaxed text-sm md:text-base">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:lh-1">
            To read Charlotte Brontë’s <em>Villette</em> is to enter a dialogue with a shadow. Lucy Snowe, the novel’s evasive narrator, operates not merely as a chronicler of events but as a gatekeeper of her own interiority. Brontë structures the narrative through deliberate silences—unsaid conversations, hidden letters, and delayed confessions that demand the reader read between the margins of Lucy’s grief. This narrative method does not weaken Lucy's position; rather, it weaponizes silence into an act of self-preservation.
          </p>
          <p>
            In Victorian literature, female narration is frequently expected to perform total emotional disclosure. Brontë, however, resists this convention. By withholding information—most famously, Lucy's early realization that her physician, Dr. John, is her childhood acquaintance Graham Bretton—the text establishes a dual layer of consciousness. There is the Lucy who lives the events, and the Lucy who retroactively writes them, keeping secrets from both her contemporaries and her audience.
          </p>
          <p>
            This dual consciousness manifests in the physical layout of the school in Villette, particularly the walled garden of Rue Fossette. The garden, with its lonely alley and historic pear tree, functions as a geographical extension of Lucy’s mind. It is a site of confinement, yes, but also the only place where she is free to feel the weight of her solitude. Brontë’s prose in these passages becomes highly lyrical yet clinical, capturing the exact contour of depression. 
          </p>
          <p>
            Ultimately, <em>Villette</em> demonstrates that silence is not merely the absence of speech, but a structural form of expression. In analyzing Snowe's silence, we discover a critique of a society that demands women be transparent while denying them the agency of self-determination. Lucy Snowe remains untamed because she remains, in crucial ways, unread.
          </p>
        </div>
      )
    },
    {
      title: "Pedagogy of Clarity: Rhetorical Tone in Active & Passive Voice",
      category: "Secondary Curriculum Lesson Plan Excerpt",
      wordCount: "350 words",
      date: "March 2025",
      excerpt: "Objective: Students will distinguish between the active and passive voices not merely as mechanical formulas (S-V-O vs. O-Aux-V-S) but as choices that dictate authorial responsibility and tone. Using extracts from news reporting and literary fiction, the lesson traces how syntax shapes reader empathy and narrative power...",
      fullContent: (
        <div className="space-y-4 font-sans text-primary leading-relaxed text-sm md:text-base">
          <div className="border-l-4 border-accent pl-4 py-1 italic mb-6">
            <h4 className="font-serif font-bold text-lg not-italic">Lesson Unit: Syntactic Power & Style</h4>
            <p className="text-sm text-secondary">Target Audience: High School English Language Learners (Ages 14–16)</p>
          </div>
          
          <h5 className="font-bold text-accent uppercase tracking-wider text-xs">1. Learning Objectives</h5>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Identify and construct sentences in the active and passive voices.</li>
            <li>Analyze the rhetorical effect of agent-deletion (e.g., "Mistakes were made") in political and public texts.</li>
            <li>Evaluate how passive syntax shifts thematic focus onto the receiver of an action.</li>
          </ul>

          <h5 className="font-bold text-accent uppercase tracking-wider text-xs mt-4">2. Hook & Inquiry (10 mins)</h5>
          <p>
            Write two sentences on the board:
            <br />
            <span className="italic block pl-4 my-2 text-secondary font-serif">A. "The hunter shot the tiger."</span>
            <span className="italic block pl-4 my-2 text-secondary font-serif">B. "The tiger was shot by the hunter."</span>
            Ask students: <em>Who is the main character in Sentence A? Who is the main character in Sentence B? How does changing the syntax change our sympathy?</em>
          </p>

          <h5 className="font-bold text-accent uppercase tracking-wider text-xs mt-4">3. Direct Instruction: The 'By Zombies' Rule (15 mins)</h5>
          <p>
            Introduce a quick diagnostic tool: If you can add <strong>"by zombies"</strong> after the verb and the sentence still makes grammatical sense, it is in the passive voice.
            <br />
            <span className="italic block pl-4 my-2 text-secondary">Example: "The letter was mailed [by zombies]." (Passive) vs. "She mailed the letter [by zombies]." (Active - incorrect).</span>
          </p>

          <h5 className="font-bold text-accent uppercase tracking-wider text-xs mt-4">4. Application Exercise: Accountability in Media</h5>
          <p>
            Distribute excerpts from newspapers. Have students rewrite passive headlines into active headlines to identify who holds responsibility for events. (e.g., "Prices were raised" vs. "The grocery chain raised prices"). This links syntactic mechanics directly to critical thinking.
          </p>
        </div>
      )
    }
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="writing" className="py-20 md:py-28 border-b border-border-base bg-surface/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            05 / Writing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Literary & Pedagogical Samples
          </h2>
          <p className="text-xs font-sans text-secondary italic mt-1">
            "Proving the craft of language through written evidence."
          </p>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex border-b border-border-base mb-8 justify-center" role="tablist">
          {samples.map((sample, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 font-serif text-sm md:text-base border-b-2 font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? 'border-accent text-accent'
                  : 'border-transparent text-secondary hover:text-primary'
              }`}
              id={`writing-tab-${index}`}
            >
              {index === 0 ? "Literary Criticism" : "Pedagogical Planning"}
            </button>
          ))}
        </div>

        {/* Selected Sample Preview Card */}
        <div className="bg-surface border border-border-base rounded p-6 md:p-8 shadow-sm text-left transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-sans text-secondary border-b border-border-base/50 pb-4">
            <span className="bg-accent/10 border border-accent/20 px-2.5 py-1 rounded text-accent font-semibold">
              {samples[activeTab].category}
            </span>
            <div className="flex items-center gap-4">
              <span>{samples[activeTab].wordCount}</span>
              <span>{samples[activeTab].date}</span>
            </div>
          </div>

          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4 leading-snug">
            {samples[activeTab].title}
          </h3>

          <p className="font-serif italic text-secondary leading-relaxed mb-6 pl-4 border-l-2 border-border-base text-sm md:text-base">
            "{samples[activeTab].excerpt}"
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-surface font-sans text-sm font-semibold rounded transition-all duration-300 cursor-pointer"
              id="view-sample-btn"
            >
              Read Full Excerpt
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Modal Overlay for Full Text */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="bg-surface border border-border-base w-full max-w-2xl rounded-lg shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto relative animate-scale-up"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
            >
              {/* Modal Close */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full border border-border-base bg-surface text-secondary hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
                aria-label="Close modal"
                id="modal-close"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 border-b border-border-base pb-4">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
                  {samples[activeTab].category}
                </span>
                <h3 id="modal-title" className="font-serif text-xl md:text-2xl font-bold text-primary mt-1 pr-6 leading-snug">
                  {samples[activeTab].title}
                </h3>
              </div>

              {/* Modal Content */}
              <div className="prose max-w-none">
                {samples[activeTab].fullContent}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-border-base flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2 bg-accent hover:bg-accent-hover text-surface font-sans text-sm font-semibold rounded border border-accent cursor-pointer transition-colors duration-200"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
