/**
 * WHBS Motion Design System
 * Shared Framer Motion variants and spring configs.
 * Import into any 'use client' component.
 */
import type { Variants, Transition } from 'framer-motion'

// ─── EASING CURVES ────────────────────────────────────────────────────────
// Expo ease-out — fast start, graceful landing (Linear/Vercel style)
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

// Standard ease — Stripe-style smooth
export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const

// Spring — snappy but not bouncy (good for cards)
export const SPRING_SNAPPY: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
  mass: 1,
}

// Spring — soft (good for page transitions, large elements)
export const SPRING_SOFT: Transition = {
  type: 'spring',
  stiffness: 180,
  damping: 28,
  mass: 1,
}

// ─── PAGE TRANSITION ──────────────────────────────────────────────────────
// Used in template.tsx — fast, GPU-compositable fade + lift entrance.
// NOTE: previously used `filter: blur()`, which forces an expensive
// non-compositable repaint of the whole page on every navigation and was
// the main cause of navigation feeling slow. Opacity/transform only now —
// both are compositor-only properties, so this runs at 60fps with no
// visible delay, while still preserving the wipe-in feel.
export const PAGE_ENTER: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.12,
      ease: EASE_STANDARD,
    },
  },
}

// ─── FADE UP ──────────────────────────────────────────────────────────────
// Standard scroll-reveal and stagger child
export const FADE_UP: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT_EXPO,
    },
  },
}

// ─── FADE IN ──────────────────────────────────────────────────────────────
export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_STANDARD },
  },
}

// ─── BLUR IN ──────────────────────────────────────────────────────────────
// Premium entrance — blur clears as element rises
export const BLUR_IN: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
    },
  },
}

// ─── SCALE IN ─────────────────────────────────────────────────────────────
// Card / modal entrance
export const SCALE_IN: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: EASE_OUT_EXPO,
    },
  },
}

// ─── SLIDE FROM LEFT ──────────────────────────────────────────────────────
export const SLIDE_LEFT: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
    },
  },
}

// ─── SLIDE FROM RIGHT ─────────────────────────────────────────────────────
export const SLIDE_RIGHT: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
    },
  },
}

// ─── STAGGER CONTAINER ────────────────────────────────────────────────────
// Wrap children with this to stagger their entrance
export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// ─── STAGGER CONTAINER — FAST ─────────────────────────────────────────────
export const STAGGER_FAST: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// ─── HERO STAGGER ─────────────────────────────────────────────────────────
// Slower, more cinematic — for hero section
export const HERO_STAGGER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

// ─── CARD HOVER ───────────────────────────────────────────────────────────
// whileHover target for cards — use directly in motion props
export const CARD_HOVER = {
  y: -4,
  transition: SPRING_SNAPPY,
}

// ─── BUTTON PRESS ─────────────────────────────────────────────────────────
export const BUTTON_TAP = {
  scale: 0.97,
  transition: { duration: 0.1, ease: EASE_STANDARD },
}

// ─── NAV LINK HOVER ───────────────────────────────────────────────────────
export const NAV_HOVER = {
  y: -1,
  transition: SPRING_SNAPPY,
}
