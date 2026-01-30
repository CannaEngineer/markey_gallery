# Next.js 14 Initial Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up Next.js 14 project with App Router, TypeScript, Tailwind CSS, custom design system, and foundational component structure.

**Architecture:** Next.js 14 App Router with TypeScript, Tailwind CSS for styling with custom color palette, Framer Motion for animations, Google Fonts via next/font for typography, component-based architecture following atomic design principles.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, clsx, tailwind-merge, next/font (Cormorant Garamond, DM Sans)

---

## Task 1: Initialize Next.js 14 Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `.gitignore`
- Create: `.env.example`

**Step 1: Create Next.js 14 project with TypeScript**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src --import-alias "@/*"
```

Expected: Prompts answered, project scaffolded in current directory

**Step 2: Install required dependencies**

Run:
```bash
npm install framer-motion clsx tailwind-merge
```

Expected: Dependencies installed successfully

**Step 3: Verify installation**

Run:
```bash
npm list framer-motion clsx tailwind-merge
```

Expected: All packages listed with versions

**Step 4: Create environment template**

```bash
cat > .env.example << 'EOF'
NEXT_PUBLIC_FORMSPREE_ID=
NEXT_PUBLIC_SITE_URL=
EOF
```

**Step 5: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js 14 project with TypeScript and Tailwind"
```

---

## Task 2: Configure Tailwind with Custom Design System

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Update Tailwind configuration with custom colors and fonts**

Replace entire `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        cream: '#f5f2eb',
        terracotta: '#c4704f',
        gold: '#d4af37',
        background: {
          dark: '#0c0a09',
          light: '#f5f5f4',
        },
        text: {
          primary: '#f5f2eb',
          secondary: '#a8a29e',
          muted: '#78716c',
          dark: '#1c1917',
        },
        border: {
          subtle: '#292524',
          default: '#44403c',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        '0.3em': '0.3em',
        '0.4em': '0.4em',
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Verify Tailwind config syntax**

Run:
```bash
npx tsc --noEmit tailwind.config.ts
```

Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: configure Tailwind with custom color palette and fonts"
```

---

## Task 3: Set Up Google Fonts and Global Styles

**Files:**
- Create: `lib/fonts.ts`
- Modify: `app/globals.css`

**Step 1: Create fonts configuration**

Create `lib/fonts.ts`:

```typescript
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});
```

**Step 2: Update global styles with custom CSS**

Replace entire `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Base resets */
  * {
    @apply border-border-default;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-background-dark text-text-primary font-sans antialiased;
  }

  /* Custom selection colors with gold tint */
  ::selection {
    @apply bg-gold/30 text-charcoal;
  }

  ::-moz-selection {
    @apply bg-gold/30 text-charcoal;
  }

  /* Headings use serif font */
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }

  /* Focus visible styles for accessibility */
  :focus-visible {
    @apply outline-2 outline-offset-2 outline-gold;
  }
}

@layer utilities {
  /* Custom spacing utilities */
  .section-padding {
    @apply py-32;
  }

  .container-padding {
    @apply px-6;
  }

  /* Shadow utilities */
  .shadow-gold {
    box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
  }

  .shadow-subtle {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  /* Backdrop blur for header */
  .backdrop-blur-header {
    backdrop-filter: blur(12px);
  }

  /* Noise texture overlay */
  .noise-overlay {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.3;
    pointer-events: none;
  }
}
```

**Step 3: Commit**

```bash
git add lib/fonts.ts app/globals.css
git commit -m "feat: add Google Fonts configuration and global styles"
```

---

## Task 4: Create Utility Functions

**Files:**
- Create: `lib/utils.ts`
- Create: `lib/constants.ts`

**Step 1: Create utility functions**

Create `lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Step 2: Create constants file**

Create `lib/constants.ts`:

```typescript
export const eventTypes = [
  {
    id: 'celebrations',
    value: 'birthday',
    label: 'Birthday/Celebration',
    title: 'Celebrations',
    description: 'Milestone birthdays. Engagement parties. The moments worth remembering.',
  },
  {
    id: 'corporate',
    value: 'corporate',
    label: 'Corporate Event',
    title: 'Corporate',
    description: "Team gatherings that don't feel corporate. Mixers with actual mixing.",
  },
  {
    id: 'creative',
    value: 'creative',
    label: 'Creative/Art Event',
    title: 'Creative',
    description: 'Art openings. Workshops. Film screenings. If you can dream it, we can host it.',
  },
  {
    id: 'private',
    value: 'private',
    label: 'Private Gathering',
    title: 'Private',
    description: 'Intimate dinners. Anniversary celebrations. Moments meant just for you.',
  },
];

export const venueDetails = {
  capacity: 70,
  location: 'Hell\'s Kitchen, NYC',
  priceRange: '$200-400/hour',
  byob: true,
};
```

**Step 3: Commit**

```bash
git add lib/utils.ts lib/constants.ts
git commit -m "feat: add utility functions and constants"
```

---

## Task 5: Create Framer Motion Animation Variants

**Files:**
- Create: `lib/animations.ts`

**Step 1: Create animation variants**

Create `lib/animations.ts`:

```typescript
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
```

**Step 2: Commit**

```bash
git add lib/animations.ts
git commit -m "feat: add Framer Motion animation variants"
```

---

## Task 6: Create Root Layout

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update root layout with fonts and metadata**

Replace entire `app/layout.tsx` with:

```typescript
import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
  description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome. Perfect for celebrations, corporate events, and creative gatherings.",
  keywords: ["event space", "NYC", "Hell's Kitchen", "private events", "BYOB venue", "Manhattan"],
  authors: [{ name: "Markey Gallery" }],
  openGraph: {
    title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
    description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome.",
    url: "https://markeygallery.com",
    siteName: "Markey Gallery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markey Gallery | Event Space in Hell's Kitchen, NYC",
    description: "Intimate event space in Hell's Kitchen. 70 guests. BYOB welcome.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: configure root layout with fonts and metadata"
```

---

## Task 7: Create Component Directory Structure

**Files:**
- Create: `components/sections/.gitkeep`
- Create: `components/layout/.gitkeep`
- Create: `components/ui/.gitkeep`

**Step 1: Create component directories**

Run:
```bash
mkdir -p components/sections components/layout components/ui
touch components/sections/.gitkeep components/layout/.gitkeep components/ui/.gitkeep
```

Expected: Directories created successfully

**Step 2: Commit**

```bash
git add components/
git commit -m "feat: create component directory structure"
```

---

## Task 8: Create Header Component

**Files:**
- Create: `components/layout/Header.tsx`

**Step 1: Create header component**

Create `components/layout/Header.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
        <a
          href="#"
          className="text-xl font-serif text-cream hover:text-gold transition-colors duration-300"
        >
          Markey Gallery
        </a>

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
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-3 bg-gold text-charcoal text-sm uppercase tracking-widest font-medium hover:bg-gold/90 hover:shadow-gold transition-all duration-300"
        >
          Book Now
        </a>
      </nav>
    </motion.header>
  );
}
```

**Step 2: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: create responsive header with scroll effect"
```

---

## Task 9: Create Footer Component

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create footer component**

Create `components/layout/Footer.tsx`:

```typescript
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-serif text-cream mb-3">
              Markey Gallery
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              An intimate event space in the heart of Hell's Kitchen, NYC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#space"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  The Space
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#details"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Details
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-3">
              Get in Touch
            </h4>
            <p className="text-sm text-text-secondary">
              Hell's Kitchen, NYC
            </p>
            <p className="text-sm text-text-secondary mt-4">
              <a
                href="#contact"
                className="hover:text-gold transition-colors duration-300"
              >
                Send us an inquiry →
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border-subtle text-center">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Markey Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: create footer with links and contact info"
```

---

## Task 10: Create Section Component Stubs

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/Space.tsx`
- Create: `components/sections/Events.tsx`
- Create: `components/sections/Details.tsx`
- Create: `components/sections/Contact.tsx`

**Step 1: Create Hero section stub**

Create `components/sections/Hero.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-charcoal via-stone-900 to-charcoal flex items-center justify-center relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-terracotta tracking-[0.3em] text-sm uppercase mb-6"
          variants={staggerItem}
        >
          Hell's Kitchen, NYC
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
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12"
          variants={staggerItem}
        >
          Seventy guests. Infinite possibilities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={staggerItem}
        >
          <a
            href="#space"
            className="px-8 py-4 bg-gold text-charcoal text-sm uppercase tracking-widest font-medium hover:bg-gold/90 hover:shadow-gold transition-all duration-300"
          >
            See the Space
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-cream/30 text-cream text-sm uppercase tracking-widest font-medium hover:bg-cream/10 hover:border-cream/50 transition-all duration-300"
          >
            Plan Your Event
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Create Space section stub**

Create `components/sections/Space.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function Space() {
  return (
    <section id="space" className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-terracotta tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            The Space
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-text-dark"
            variants={staggerItem}
          >
            A Canvas for Your Vision
          </motion.h2>
        </motion.div>

        {/* Placeholder for gallery grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px] bg-stone-200 rounded-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center text-text-muted">
            Gallery Grid Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 3: Create Events section stub**

Create `components/sections/Events.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { eventTypes } from '@/lib/constants';

export function Events() {
  return (
    <section id="events" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-terracotta tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            Possibilities
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-cream"
            variants={staggerItem}
          >
            What Will Yours Be?
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {eventTypes.map((event) => (
            <motion.div
              key={event.id}
              className="p-8 bg-stone-900/50 border border-border-subtle hover:border-gold/50 transition-all duration-300"
              variants={staggerItem}
            >
              <h3 className="font-serif text-3xl text-gold mb-4">
                {event.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 4: Create Details section stub**

Create `components/sections/Details.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { venueDetails } from '@/lib/constants';

export function Details() {
  const details = [
    { label: 'Capacity', value: `${venueDetails.capacity} guests` },
    { label: 'Location', value: venueDetails.location },
    { label: 'Pricing', value: venueDetails.priceRange },
    { label: 'BYOB', value: venueDetails.byob ? 'Yes, always' : 'No' },
  ];

  return (
    <section id="details" className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-terracotta tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            Details
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-text-dark"
            variants={staggerItem}
          >
            The Essentials
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {details.map((detail) => (
            <motion.div
              key={detail.label}
              className="text-center"
              variants={staggerItem}
            >
              <p className="text-sm uppercase tracking-widest text-text-muted mb-2">
                {detail.label}
              </p>
              <p className="text-2xl font-serif text-text-dark">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 5: Create Contact section stub**

Create `components/sections/Contact.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="max-w-3xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-terracotta tracking-[0.3em] text-sm uppercase mb-4"
            variants={staggerItem}
          >
            Contact
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-6xl text-cream"
            variants={staggerItem}
          >
            Let's Make It Happen
          </motion.h2>
        </motion.div>

        <motion.div
          className="bg-stone-900/50 border border-border-subtle p-8 min-h-[400px] flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerItem}
        >
          <p className="text-text-muted">Form Placeholder</p>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 6: Commit**

```bash
git add components/sections/
git commit -m "feat: create section component stubs with animations"
```

---

## Task 11: Create Main Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update main page to assemble all sections**

Replace entire `app/page.tsx` with:

```typescript
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Space } from '@/components/sections/Space';
import { Events } from '@/components/sections/Events';
import { Details } from '@/components/sections/Details';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Space />
        <Events />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble main page with all sections"
```

---

## Task 12: Verify Build and Development Server

**Files:**
- None (verification only)

**Step 1: Run TypeScript type check**

Run:
```bash
npx tsc --noEmit
```

Expected: No type errors

**Step 2: Build the project**

Run:
```bash
npm run build
```

Expected: Build completes successfully with no errors

**Step 3: Start development server**

Run:
```bash
npm run dev
```

Expected: Server starts at http://localhost:3000, page loads successfully

**Step 4: Manual verification checklist**

Open http://localhost:3000 and verify:
- [ ] Page loads without errors
- [ ] Header is fixed at top
- [ ] Smooth scroll works when clicking nav links
- [ ] All sections render in correct order
- [ ] Fonts (Cormorant Garamond, DM Sans) load correctly
- [ ] Custom colors appear (gold, terracotta, cream, charcoal)
- [ ] Animations trigger on scroll
- [ ] Text selection shows gold tint
- [ ] Mobile responsive layout works

**Step 5: Final commit**

```bash
git add .
git commit -m "chore: verify build and development setup"
```

---

## Post-Implementation Notes

### What Was Built
- Complete Next.js 14 project with App Router and TypeScript
- Tailwind CSS with custom design system (charcoal, cream, terracotta, gold)
- Google Fonts integration (Cormorant Garamond, DM Sans)
- Framer Motion animation system with reusable variants
- Full component structure (Header, Footer, 5 sections)
- Smooth scroll, custom selection colors, accessibility features
- Responsive layout with mobile-first approach

### What's Still Needed (Future Tasks)
1. Real image gallery in Space section (replace placeholder)
2. Contact form with Formspree integration
3. Event type cards with hover effects
4. Map integration in Details section
5. Mobile hamburger menu in Header
6. OpenGraph images and favicons
7. Performance optimization (image loading, etc.)
8. SEO enhancements
9. Analytics integration
10. Testing setup

### Key Files Reference
- Design tokens: `tailwind.config.ts`, `app/globals.css`
- Animations: `lib/animations.ts`
- Fonts: `lib/fonts.ts`
- Utilities: `lib/utils.ts`, `lib/constants.ts`
- Layout: `components/layout/Header.tsx`, `Footer.tsx`
- Sections: `components/sections/Hero.tsx`, etc.
- Entry: `app/page.tsx`, `app/layout.tsx`

### Development Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```
