'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';
import { galleryImages } from '@/lib/constants';
import { Lightbox } from '@/components/ui/Lightbox';

export function Space() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // First 5 images for the bento grid
  const bentoImages = galleryImages.slice(0, 5);

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
          <motion.p
            className="text-stone-600 text-lg mt-6 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Click any image to explore our full gallery
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Large featured image - top left, spans 2 rows */}
          <motion.button
            onClick={() => openLightbox(0)}
            className="lg:row-span-2 rounded-lg aspect-[4/5] lg:aspect-auto overflow-hidden relative group cursor-pointer"
            variants={scaleIn}
            aria-label={`View ${bentoImages[0].alt}`}
          >
            <Image
              src={bentoImages[0].src}
              alt={bentoImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gold/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-charcoal text-sm font-sans tracking-wider uppercase">
                  View Gallery
                </p>
              </div>
            </div>
          </motion.button>

          {/* Top right */}
          <motion.button
            onClick={() => openLightbox(1)}
            className="rounded-lg aspect-[3/2] overflow-hidden relative group cursor-pointer"
            variants={scaleIn}
            aria-label={`View ${bentoImages[1].alt}`}
          >
            <Image
              src={bentoImages[1].src}
              alt={bentoImages[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>

          {/* Middle right */}
          <motion.button
            onClick={() => openLightbox(2)}
            className="rounded-lg aspect-[3/2] overflow-hidden relative group cursor-pointer"
            variants={scaleIn}
            aria-label={`View ${bentoImages[2].alt}`}
          >
            <Image
              src={bentoImages[2].src}
              alt={bentoImages[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>

          {/* Bottom left */}
          <motion.button
            onClick={() => openLightbox(3)}
            className="rounded-lg aspect-[3/2] overflow-hidden relative group cursor-pointer"
            variants={scaleIn}
            aria-label={`View ${bentoImages[3].alt}`}
          >
            <Image
              src={bentoImages[3].src}
              alt={bentoImages[3].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>

          {/* Bottom right */}
          <motion.button
            onClick={() => openLightbox(4)}
            className="rounded-lg aspect-[3/2] overflow-hidden relative group cursor-pointer"
            variants={scaleIn}
            aria-label={`View ${bentoImages[4].alt}`}
          >
            <Image
              src={bentoImages[4].src}
              alt={bentoImages[4].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </section>
  );
}
