'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';
import { eventTypes } from '@/lib/constants';

export function Events() {
  return (
    <section id="events" className="py-32 bg-stone-950">
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
            Possibilities
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream"
            variants={staggerItem}
          >
            What Will Yours Be?
          </motion.h2>
        </motion.div>

        {/* Event Type Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {eventTypes.map((event) => (
            <motion.div
              key={event.id}
              className="p-8 border border-stone-800 bg-stone-900/50 hover:bg-stone-900 hover:border-stone-700 transition-all duration-300"
              variants={scaleIn}
            >
              <h3 className="font-serif text-3xl text-cream mb-4">
                {event.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
