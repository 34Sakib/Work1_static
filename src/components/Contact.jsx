import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link dynamically for static site submission
    const mailtoLink = `mailto:shankarnodee@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open in browser
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border-base bg-surface-secondary/10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-sans">
            06 / Contact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Get In Touch
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">

          {/* Coordinates Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">
                Let's start a conversation.
              </h3>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Whether you are looking to hire a patient tutor, a detailed communication specialist, or discuss potential roles in coordination and data collection, please reach out. I try to reply to all inquiries within 24 hours.
              </p>
            </div>

            {/* List of channels */}
            <div className="space-y-4 font-sans text-sm text-secondary">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-surface border border-border-base text-accent">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Email</p>
                  <a href="mailto:shankarnodee@gmail.com" className="hover:text-accent font-medium" id="contact-email">
                    shankarnodee@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-surface border border-border-base text-accent">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Phone</p>
                  <a href="tel:+8801628849132" className="hover:text-accent font-medium" id="contact-phone">
                    +880 1628-849132
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-surface border border-border-base text-accent">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Location</p>
                  <span className="font-medium">Chattogram, Bangladesh</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-surface border border-border-base text-accent">
                  <LinkedinIcon size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/nodee-shankar"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent font-medium flex items-center gap-1"
                    id="contact-linkedin"
                  >
                    Nodee Shankar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7 bg-surface border border-border-base p-6 md:p-8 rounded shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact Form">

              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
                  Your Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border-base rounded bg-background text-primary font-sans focus:outline-none focus:border-accent text-sm"
                  placeholder="Your Name"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border-base rounded bg-background text-primary font-sans focus:outline-none focus:border-accent text-sm"
                  placeholder="Your.name@example.com"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="form-subject" className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
                  Subject
                </label>
                <input
                  type="text"
                  id="form-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border-base rounded bg-background text-primary font-sans focus:outline-none focus:border-accent text-sm"
                  placeholder="Tutoring inquiry, Job opportunity, etc."
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-base rounded bg-background text-primary font-sans focus:outline-none focus:border-accent text-sm resize-none"
                  placeholder="Hello Nodee, I would like to discuss..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-surface font-sans font-semibold rounded border border-accent hover:border-accent-hover shadow-sm transition-all duration-300 cursor-pointer text-sm"
                id="form-submit-btn"
              >
                <Send size={14} />
                Send Message via Mail client
              </button>

              {submitted && (
                <p className="text-xs text-green-600 dark:text-green-400 font-sans italic text-center mt-2">
                  Mail client opened with your pre-compiled message details. Thank you!
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
