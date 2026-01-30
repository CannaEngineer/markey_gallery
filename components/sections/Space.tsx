'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

export function Space() {
  return (
    <section id="space" className="py-32 bg-stone-100">
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
            The Gallery
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900"
            variants={staggerItem}
          >
            A Canvas for Your Vision
          </motion.h2>
        </motion.div>

        {/* Bento Grid - Placeholder */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Large featured image - top left, spans 2 rows */}
          <motion.div
            className="lg:row-span-2 bg-stone-300 rounded-lg aspect-[4/5] lg:aspect-auto"
            variants={scaleIn}
          />

          {/* Top right */}
          <motion.div
            className="bg-stone-300 rounded-lg aspect-[3/2]"
            variants={scaleIn}
          />

          {/* Middle right */}
          <motion.div
            className="bg-stone-300 rounded-lg aspect-[3/2]"
            variants={scaleIn}
          />

          {/* Bottom left */}
          <motion.div
            className="bg-stone-300 rounded-lg aspect-[3/2]"
            variants={scaleIn}
          />

          {/* Bottom right */}
          <motion.div
            className="bg-stone-300 rounded-lg aspect-[3/2]"
            variants={scaleIn}
          />
        </motion.div>
      </div>
    </section>
  );
}
