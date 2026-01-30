# CLAUDE.md
## Markey Gallery — AI Development Context

> This file provides comprehensive context for AI assistants (Claude, Cursor, Copilot, etc.) working on the Markey Gallery codebase. Read this file at the start of every session.

---

## PROJECT OVERVIEW

**Markey Gallery** is a single-page web application for an intimate event space in Hell's Kitchen, NYC. The site functions as a high-converting booking inquiry page wrapped in award-winning design.

### Business Context
- **What:** Mixed-use event venue (gallery space)
- **Where:** Hell's Kitchen, Manhattan, NYC
- **Capacity:** 70 guests standing
- **Pricing:** $200-400/hour
- **Unique Selling Point:** BYOB allowed for free/private events
- **Target Events:** Milestone birthdays (30th/40th), corporate mixers (25-50 people), creative gatherings, private celebrations

### Target Audience
1. **Milestone Maven** (40%) — Ages 28-45 celebrating birthdays/engagements, budget $1,500-3,000
2. **Corporate Connector** (35%) — HR/Admin at 25-100 person companies, budget $2,000-5,000
3. **Creative Curator** (25%) — Artists, entrepreneurs, community organizers, budget $800-1,500

### Competitive Position
Markey Gallery occupies the "accessible premium" tier — more intimate than warehouse spaces, more flexible than restaurants, priced below luxury venues. The website must reflect this positioning: sophisticated but not pretentious, premium but not exclusionary.

---

## TECH STACK

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript
Styling:        Tailwind CSS
Animations:     Framer Motion
Deployment:     Vercel
Image Storage:  Cloudflare R2
Form Handling:  Formspree
Database:       None (MVP) / Turso (future)
```

### Key Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "framer-motion": "^11.0.0",
  "@formspree/react": "^2.5.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Why This Stack
- **Next.js 14:** Server components for fast initial load, built-in image optimization, seamless Vercel deployment
- **Framer Motion:** Best-in-class React animation library, scroll-triggered animations, gesture support
- **Tailwind:** Rapid iteration, consistent spacing, responsive utilities
- **Formspree:** No backend needed, reliable form delivery, spam protection included
- **Cloudflare R2:** No egress fees, global CDN, cost-effective image hosting

---

## FILE STRUCTURE

```
markey-gallery/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, providers
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Base styles, CSS variables, utilities
│   └── api/                # API routes (if needed)
│
├── components/
│   ├── sections/           # Page sections (one component per section)
│   │   ├── Hero.tsx
│   │   ├── Space.tsx
│   │   ├── Possibilities.tsx
│   │   ├── Details.tsx
│   │   └── Contact.tsx
│   │
│   ├── layout/             # Persistent layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/                 # Reusable UI primitives
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       └── AnimatedText.tsx
│
├── lib/
│   ├── animations.ts       # Framer Motion variants and hooks
│   ├── utils.ts            # Helper functions (cn, formatters)
│   ├── fonts.ts            # Font configurations
│   └── constants.ts        # Static data (event types, details)
│
├── hooks/
│   ├── useInView.ts        # Intersection Observer hook
│   ├── useScrollPosition.ts # Scroll tracking
│   └── useReducedMotion.ts # Accessibility preference
│
├── public/
│   ├── images/             # Local images (prefer Cloudflare R2)
│   ├── favicon.ico
│   └── og-image.jpg        # OpenGraph image
│
├── styles/                 # Additional style modules (if needed)
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
├── .env.local              # Environment variables (not committed)
├── .env.example            # Environment variable template
├── CLAUDE.md               # This file
└── README.md
```

---

## DESIGN SYSTEM

### Color Palette

```typescript
// tailwind.config.ts colors
const colors = {
  // Primary palette
  charcoal: '#1a1a1a',      // Deep backgrounds, sophistication
  cream: '#f5f2eb',         // Light backgrounds, primary text on dark
  terracotta: '#c4704f',    // Warm accent, eyebrow text, secondary CTA
  gold: '#d4af37',          // Premium accent, primary CTA, highlights

  // Stone scale (Tailwind defaults, but for reference)
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',         // Light section backgrounds
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',         // Secondary text on dark
    500: '#78716c',         // Muted text
    600: '#57534e',         // Footer text
    700: '#44403c',         // Borders on dark
    800: '#292524',         // Subtle borders
    900: '#1c1917',         // Near-black
    950: '#0c0a09',         // True dark background
  },

  // Semantic aliases
  background: {
    dark: '#0c0a09',        // stone-950
    light: '#f5f5f4',       // stone-100
  },
  text: {
    primary: '#f5f2eb',     // cream (on dark)
    secondary: '#a8a29e',   // stone-400
    muted: '#78716c',       // stone-500
    dark: '#1c1917',        // stone-900 (on light)
  },
  border: {
    subtle: '#292524',      // stone-800
    default: '#44403c',     // stone-700
    accent: 'rgba(196, 112, 79, 0.5)', // terracotta/50
  },
}
```

### Typography

```typescript
// Font families
const fonts = {
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],    // Display, headlines
  sans: ['DM Sans', 'system-ui', 'sans-serif'],        // Body, UI
  mono: ['JetBrains Mono', 'monospace'],               // Code, data (optional)
}

// Font weights used
// Cormorant Garamond: 400, 500, 600
// DM Sans: 300, 400, 500
```

**Typography Rules:**
- Headlines: Serif (Cormorant Garamond), larger sizes (text-5xl to text-9xl)
- Body text: Sans (DM Sans), comfortable reading sizes (text-base to text-xl)
- Labels/Eyebrows: Sans, uppercase, wide tracking (tracking-[0.3em] to tracking-[0.4em])
- Never use Inter, Roboto, or Arial

### Spacing

```typescript
// Standard spacing scale
const spacing = {
  section: 'py-32',           // 128px vertical padding
  container: 'max-w-7xl',     // 80rem max width
  containerPadding: 'px-6',   // 24px horizontal padding
  componentGap: 'gap-8',      // 32px between components
  elementGap: 'gap-4',        // 16px between elements
}
```

### Shadows & Effects

```css
/* Subtle elevation */
.shadow-subtle {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Gold glow for CTAs */
.shadow-gold {
  box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
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
```

---

## ANIMATION CONVENTIONS

### Framer Motion Variants

```typescript
// lib/animations.ts

// Standard fade up (most common)
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
}

// Stagger container
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Stagger item (use as child of staggerContainer)
export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

// Scale in (for images, cards)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
}
```

### Animation Timing Guidelines

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Micro-interactions (hover, focus) | 200-300ms | ease-out |
| Element reveals | 600-800ms | [0.22, 1, 0.36, 1] |
| Page transitions | 400-600ms | ease-in-out |
| Stagger delay | 100ms | — |
| Initial page load delay | 300-500ms | — |

### Performance Rules

1. **Only animate `transform` and `opacity`** — These are GPU-accelerated
2. **Avoid animating:** width, height, padding, margin, top/left/right/bottom
3. **Use `will-change` sparingly** — Only on elements about to animate
4. **Respect `prefers-reduced-motion`** — Check with `useReducedMotion` hook
5. **Target 60fps** — Test on mid-range mobile devices

### Scroll-Triggered Animations

```typescript
// Using Intersection Observer
const [ref, isInView] = useInView({ threshold: 0.1 });

// Using Framer Motion
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUp}
>
```

---

## COMPONENT PATTERNS

### Section Component Template

```typescript
// components/sections/ExampleSection.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ExampleSectionProps {
  id?: string;
}

export function ExampleSection({ id }: ExampleSectionProps) {
  return (
    <section 
      id={id}
      className="py-32 bg-stone-950" // or bg-stone-100 for light
    >
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
            Eyebrow Text
          </motion.p>
          <motion.h2 
            className="font-serif text-5xl md:text-6xl text-amber-50"
            variants={staggerItem}
          >
            Section Headline
          </motion.h2>
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Content here */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Button Component

```typescript
// components/ui/Button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center gap-2',
        'font-sans tracking-widest uppercase',
        'transition-all duration-300',
        
        // Size variants
        size === 'sm' && 'px-4 py-2 text-xs',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-sm',
        
        // Style variants
        variant === 'primary' && [
          'bg-amber-600 text-stone-950',
          'hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/20',
        ],
        variant === 'secondary' && [
          'bg-cream text-stone-950',
          'hover:bg-amber-200',
        ],
        variant === 'outline' && [
          'border border-amber-50/30 text-amber-50',
          'hover:bg-amber-50/10 hover:border-amber-50/50',
        ],
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Utility Function

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## PAGE STRUCTURE

The single page consists of these sections in order:

```
┌────────────────────────────────────────┐
│  HEADER (fixed, transparent → solid)   │
├────────────────────────────────────────┤
│  HERO                                  │
│  - Full viewport height                │
│  - Dark background with gradient       │
│  - "Your Story. Our Space."            │
│  - Two CTAs                            │
├────────────────────────────────────────┤
│  SPACE (#space)                        │
│  - Light background                    │
│  - "A Canvas for Your Vision"          │
│  - Bento grid image gallery            │
├────────────────────────────────────────┤
│  POSSIBILITIES (#events)               │
│  - Dark background                     │
│  - "What Will Yours Be?"               │
│  - 4 event type cards                  │
├────────────────────────────────────────┤
│  DETAILS (#details)                    │
│  - Light background                    │
│  - "The Essentials"                    │
│  - Stats grid + map placeholder        │
├────────────────────────────────────────┤
│  CONTACT (#contact)                    │
│  - Dark background                     │
│  - "Let's Make It Happen"              │
│  - Inquiry form                        │
├────────────────────────────────────────┤
│  FOOTER                                │
│  - Dark background                     │
│  - Logo, social, copyright             │
└────────────────────────────────────────┘
```

**Color Rhythm:** Dark → Light → Dark → Light → Dark → Dark

This creates visual breathing room and clear section boundaries.

---

## COPY & CONTENT GUIDELINES

### Voice & Tone
- **Confident, not arrogant** — We know we're good, no need to brag
- **Warm, not casual** — Professional but approachable
- **Clear, not clinical** — Human, not corporate-speak
- **Inviting, not salesy** — Draw them in, don't push

### Writing Rules
1. Lead with benefits, not features
2. Use "you/your" more than "we/our"
3. Short sentences. Punchy paragraphs.
4. Numbers build credibility (70 guests, $200/hr, 24-hour response)
5. Every word earns its place

### Key Copy Elements

**Hero:**
```
Eyebrow: "Hell's Kitchen, NYC"
Headline: "Your Story." / "Our Space."
Subheadline: "Seventy guests. Infinite possibilities."
CTA Primary: "See the Space"
CTA Secondary: "Plan Your Event"
```

**Section Headers:**
```
Space: "A Canvas for Your Vision"
Possibilities: "What Will Yours Be?"
Details: "The Essentials"
Contact: "Let's Make It Happen"
```

**Event Types:**
```
Celebrations: "Milestone birthdays. Engagement parties. The moments worth remembering."
Corporate: "Team gatherings that don't feel corporate. Mixers with actual mixing."
Creative: "Art openings. Workshops. Film screenings. If you can dream it, we can host it."
Private: "Intimate dinners. Anniversary celebrations. Moments meant just for you."
```

---

## FORMS & DATA

### Contact Form Fields

```typescript
interface ContactFormData {
  name: string;        // Required
  email: string;       // Required, validated
  eventType: string;   // Required, select dropdown
  date?: string;       // Optional, date picker
  guests?: number;     // Optional, 1-70
  message?: string;    // Optional, textarea
}

const eventTypes = [
  { value: 'birthday', label: 'Birthday/Celebration' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'creative', label: 'Creative/Art Event' },
  { value: 'private', label: 'Private Gathering' },
  { value: 'other', label: 'Other' },
];
```

### Formspree Integration

```typescript
// In Contact.tsx
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  if (state.succeeded) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with name attributes */}
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {/* ... */}
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
```

---

## ENVIRONMENT VARIABLES

```bash
# .env.local (not committed)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
NEXT_PUBLIC_SITE_URL=https://markeygallery.com

# Optional future additions
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxxxx
```

```bash
# .env.example (committed)
NEXT_PUBLIC_FORMSPREE_ID=
NEXT_PUBLIC_SITE_URL=
```

---

## DEPLOYMENT

### Vercel Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.markeygallery.com', // Custom domain
      },
    ],
  },
}

module.exports = nextConfig
```

### Pre-Deployment Checklist
- [ ] All placeholder images replaced
- [ ] Formspree ID configured
- [ ] Form tested end-to-end
- [ ] Lighthouse score > 90 (all categories)
- [ ] Mobile tested on real devices (iOS Safari, Chrome Android)
- [ ] Open Graph images render correctly
- [ ] Favicon and app icons set
- [ ] 404 page designed
- [ ] Analytics configured

### Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build & Preview
npm run build        # Production build
npm run start        # Start production server locally

# Quality
npm run lint         # ESLint
npm run type-check   # TypeScript check (if configured)

# Analysis
npm run analyze      # Bundle analysis (if configured)
```

---

## COMMON TASKS

### Adding a New Section

1. Create `components/sections/NewSection.tsx`
2. Follow the section component template above
3. Import and add to `app/page.tsx` in the correct position
4. Add navigation link to `Header.tsx` if needed
5. Ensure ID matches for smooth scroll targeting

### Updating Colors

1. Edit `tailwind.config.ts` colors object
2. Update CSS variables in `globals.css` if used
3. Check all components using the changed color
4. Verify contrast ratios for accessibility

### Adding New Animation

1. Create variant in `lib/animations.ts`
2. Export from the animations module
3. Use with Framer Motion's `variants` prop
4. Test with `prefers-reduced-motion` enabled

### Replacing Placeholder Images

1. Upload images to Cloudflare R2
2. Update `next.config.js` if using new domain
3. Replace placeholder `div` with `next/image`
4. Add appropriate `alt` text
5. Set `priority` on above-fold images

---

## DO'S AND DON'TS

### ✅ DO

- Use semantic HTML (`section`, `nav`, `main`, `header`, `footer`)
- Add descriptive `alt` text to all images
- Test keyboard navigation
- Check color contrast (4.5:1 minimum for text)
- Use `loading="lazy"` for below-fold images
- Keep animations subtle and purposeful
- Mobile-first responsive design
- Cache static data where possible
- Use TypeScript strictly

### ❌ DON'T

- Use generic fonts (Inter, Roboto, Arial)
- Add purple gradients or generic AI aesthetics
- Animate width, height, or layout properties
- Forget `prefers-reduced-motion` support
- Use `any` type in TypeScript
- Leave console.logs in production
- Hardcode content that should be in constants
- Nest ternaries more than one level
- Use inline styles except for dynamic values

---

## ACCESSIBILITY REQUIREMENTS

### Minimum Standards (WCAG 2.1 AA)

1. **Color contrast:** 4.5:1 for normal text, 3:1 for large text
2. **Keyboard navigation:** All interactive elements focusable and operable
3. **Focus indicators:** Visible focus states on all focusable elements
4. **Alt text:** Descriptive alt on all meaningful images
5. **Form labels:** All inputs have associated labels
6. **Error messages:** Clear, associated with fields
7. **Motion:** Respect `prefers-reduced-motion`
8. **Heading hierarchy:** Logical h1 → h2 → h3 structure

### Testing Checklist
- [ ] Navigate entire page with keyboard only
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Check with browser zoom at 200%
- [ ] Verify with `prefers-reduced-motion: reduce`
- [ ] Run aXe or Lighthouse accessibility audit

---

## PERFORMANCE TARGETS

| Metric | Target | Priority |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | Critical |
| FID (First Input Delay) | < 100ms | High |
| CLS (Cumulative Layout Shift) | < 0.1 | High |
| Total Page Weight | < 2MB | Medium |
| Time to Interactive | < 3.5s | High |
| Lighthouse Performance | > 90 | High |

### Optimization Strategies

1. **Images:** WebP format, responsive sizes, lazy loading
2. **Fonts:** `next/font` with `display: swap`, subset if possible
3. **JavaScript:** Code split, tree shake, minimize third-party
4. **CSS:** Purge unused Tailwind classes (automatic in production)
5. **Animations:** GPU-accelerated properties only

---

## TROUBLESHOOTING

### Animation Not Triggering
- Check if `whileInView` has `viewport={{ once: true }}`
- Verify parent doesn't have `overflow: hidden` cutting off the element
- Ensure `initial` and `animate` are set on the motion component
- Check if `variants` keys match exactly

### Styles Not Applying
- Tailwind classes might be purged — ensure they're in scanned files
- Check for specificity conflicts
- Verify responsive breakpoints (mobile-first: no prefix = mobile)
- Use `!important` only as last resort (via Tailwind's `!` prefix)

### Form Not Submitting
- Check Formspree ID is correct
- Verify environment variable is loaded (`NEXT_PUBLIC_` prefix required)
- Check browser console for CORS or network errors
- Test with Formspree's test mode first

### Build Failing
- Run `npm run type-check` for TypeScript errors
- Check for missing dependencies
- Verify all imports resolve correctly
- Look for unused variables (ESLint errors)

---

## USEFUL RESOURCES

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Formspree React](https://formspree.io/docs/react)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01 | Initial CLAUDE.md created |

---

*Last updated: January 2026*
*Maintained by: Markey Gallery Development Team*
