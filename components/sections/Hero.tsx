'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { venueDetails } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-amber-400 tracking-[0.3em] text-sm uppercase mb-8"
            variants={staggerItem}
          >
            {venueDetails.location}
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream mb-6"
            variants={staggerItem}
          >
            Your Story.
            <br />
            Our Space.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-stone-400 mb-12 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Seventy guests. Infinite possibilities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerItem}
          >
            <a
              href="#space"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans tracking-widest uppercase bg-amber-600 text-stone-950 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300"
            >
              See the Space
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans tracking-widest uppercase border border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 transition-all duration-300"
            >
              Plan Your Event
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
