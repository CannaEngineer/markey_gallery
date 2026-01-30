'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { eventTypes } from '@/lib/constants';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      eventType: formData.get('eventType'),
      date: formData.get('date'),
      guests: formData.get('guests'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send message. Please try again or email us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
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
              onClick={() => {
                setIsSuccess(false);
                setError('');
              }}
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
            {error && (
              <div className="p-4 bg-red-900/20 border border-red-900/50 rounded">
                <p className="text-red-400 text-sm">{error}</p>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 text-sm font-sans tracking-widest uppercase bg-amber-600 text-stone-950 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
