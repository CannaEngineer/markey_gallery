'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#space', label: 'The Space' },
    { href: '#events', label: 'Events' },
    { href: '#details', label: 'Details' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-header shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Markey Gallery Home"
          className="text-xl font-serif text-cream hover:text-gold transition-colors duration-300"
        >
          Markey Gallery
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-text-secondary hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* TODO: Add your phone number here */}
            <a
              href="tel:+1XXXXXXXXXX"
              className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 flex items-center gap-2"
              aria-label="Call Markey Gallery"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">Call Us</span>
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          aria-label="Book your event now"
          className="hidden md:inline-flex px-6 py-3 bg-gold text-charcoal text-sm uppercase tracking-widest font-medium hover:bg-gold/90 hover:shadow-gold transition-all duration-300"
        >
          Book Now
        </a>
      </nav>
    </motion.header>
  );
}
