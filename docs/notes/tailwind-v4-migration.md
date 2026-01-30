# Tailwind CSS v4 Implementation Note

**Date:** 2026-01-30
**Status:** Active Decision

## Decision

This project uses **Tailwind CSS v4** instead of v3, which was originally specified in CLAUDE.md.

## Key Differences

### Tailwind v3 (Original Plan)
- Configuration via `tailwind.config.ts` TypeScript file
- Traditional approach with exported config object
- PostCSS configuration required

### Tailwind v4 (Current Implementation)
- Configuration via CSS using `@import "tailwindcss"`
- Theme customization using `@theme inline` blocks in CSS
- No `tailwind.config.ts` file
- Built-in PostCSS support (no separate config needed)

## Impact on Future Tasks

### Task 2: Design System Setup (Colors)
**Original Plan:** Edit `tailwind.config.ts` to add custom colors
**v4 Approach:** Use `@theme` directive in `app/globals.css`

Example v4 configuration:
```css
@import "tailwindcss";

@theme inline {
  --color-charcoal: #1a1a1a;
  --color-cream: #f5f2eb;
  --color-terracotta: #c4704f;
  --color-gold: #d4af37;
}
```

### Task 3: Typography Setup (Fonts)
**Original Plan:** Configure fonts in `tailwind.config.ts`
**v4 Approach:** Use `@theme` directive for font families, load fonts via `next/font` in `layout.tsx`

Example v4 configuration:
```css
@theme inline {
  --font-family-serif: "Cormorant Garamond", Georgia, serif;
  --font-family-sans: "DM Sans", system-ui, sans-serif;
}
```

## Design System Requirements (Unchanged)

All design system requirements from CLAUDE.md remain the same:
- Color palette (charcoal, cream, terracotta, gold, stone scale)
- Typography (Cormorant Garamond for display, DM Sans for body)
- Spacing scale
- Animation conventions
- Component patterns

Only the **implementation method** changes from TS config to CSS config.

## Benefits of v4

- Modern CSS-native approach
- Better performance (smaller runtime)
- Improved type safety with CSS variables
- Simpler setup (no PostCSS config needed)

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Tailwind v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)

---

**Note for AI Assistants:** When implementing Tasks 2-3, use CSS-based configuration instead of `tailwind.config.ts`. All design tokens and values remain identical to CLAUDE.md specifications.
