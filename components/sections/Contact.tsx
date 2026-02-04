'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { eventTypes } from '@/lib/constants';

export function Contact() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ''
  );

  // Track conversion in Google Analytics on successful submission
  if (state.succeeded && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      event_category: 'Contact',
      event_label: 'inquiry',
      value: 1,
    });
  }

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
          >
            <div className="mb-8 text-6xl">✓</div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
              Thank You!
            </h2>
            <p className="text-stone-400 text-lg mb-8">
              We've received your inquiry and will respond within 24 hours.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans tracking-widest uppercase border border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 transition-all duration-300"
            >
              Send Another Inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-amber-400 tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            Get in Touch
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6"
            variants={staggerItem}
          >
            Let's Make It Happen
          </motion.h2>
          <motion.p
            className="text-stone-400 text-lg max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Tell us about your event and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {state.errors && state.errors.length > 0 && (
              <div className="p-4 bg-red-900/20 border border-red-900/50 rounded">
                <p className="text-red-400 text-sm">
                  Failed to send message. Please try again or email us directly.
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors"
                disabled={state.submitting}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors"
                disabled={state.submitting}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-red-400 text-sm"
              />
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors"
                disabled={state.submitting}
              >
                <option value="">Select an event type</option>
                {eventTypes.map((event) => (
                  <option key={event.id} value={event.value}>
                    {event.label}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors"
                disabled={state.submitting}
              />
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Number of Guests
              </label>
              <input
                id="guests"
                type="number"
                name="guests"
                min="1"
                max="70"
                placeholder="1-70"
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors"
                disabled={state.submitting}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-sans tracking-widest uppercase text-stone-400 mb-2"
              >
                Tell Us About Your Event
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-cream focus:outline-none focus:border-amber-600 transition-colors resize-none"
                disabled={state.submitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-8 py-4 text-sm font-sans tracking-widest uppercase bg-amber-600 text-stone-950 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
