'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { venueDetails } from '@/lib/constants';

export function Details() {
  const stats = [
    {
      label: 'Capacity',
      value: `${venueDetails.capacity} guests`,
      description: 'Standing reception style',
    },
    {
      label: 'Location',
      value: venueDetails.location,
      description: 'Central Manhattan',
    },
    {
      label: 'Pricing',
      value: venueDetails.priceRange,
      description: 'Flexible packages available',
    },
    {
      label: 'BYOB',
      value: venueDetails.byob ? 'Allowed' : 'Not Allowed',
      description: 'For private events',
    },
  ];

  return (
    <section id="details" className="py-32 bg-stone-100">
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
            className="text-amber-600 tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            The Details
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900"
            variants={staggerItem}
          >
            The Essentials
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={staggerItem}
            >
              <p className="text-amber-600 text-sm uppercase tracking-[0.3em] mb-2">
                {stat.label}
              </p>
              <p className="font-serif text-3xl text-stone-900 mb-2">
                {stat.value}
              </p>
              <p className="text-stone-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Map and Address */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Address Card */}
          <motion.div
            className="lg:col-span-1 bg-charcoal rounded-lg p-8 flex flex-col justify-center"
            variants={staggerItem}
          >
            <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">
              Visit Us
            </p>
            <h3 className="font-serif text-3xl text-cream mb-6">
              Markey Gallery
            </h3>
            <address className="text-stone-400 not-italic mb-6 leading-relaxed">
              {venueDetails.address}
            </address>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueDetails.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors text-sm uppercase tracking-wider"
            >
              Get Directions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="lg:col-span-2 rounded-lg overflow-hidden h-96 lg:h-auto"
            variants={staggerItem}
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(venueDetails.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Markey Gallery Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
