import { Variants } from 'framer-motion';

/**
 * Standard fade up animation - most common
 * Duration: 800ms
 * Easing: Custom cubic bezier for smooth deceleration
 */
export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

/**
 * Stagger container - use as parent wrapper
 * Delays children by 100ms each
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item - use as child of staggerContainer
 * Shorter duration than fadeUp for quicker reveals
 */
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

/**
 * Scale in - for images and cards
 * Subtle scale from 95% to 100%
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

/**
 * Fade in - simple opacity change
 * Use for subtle reveals
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
};
