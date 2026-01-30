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

        {/* Map Placeholder */}
        <motion.div
          className="bg-stone-300 rounded-lg h-96 flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-stone-600 font-sans tracking-widest uppercase text-sm">
            Map Placeholder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
