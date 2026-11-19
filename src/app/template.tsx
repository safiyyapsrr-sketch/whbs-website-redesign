'use client'

import { motion } from 'framer-motion'
import { PAGE_ENTER } from '@/lib/motion'

/**
 * Next.js Template component — runs on every route change.
 * Fast, GPU-compositable fade + lift entrance (opacity/transform only —
 * see PAGE_ENTER in lib/motion.ts for why the previous blur-filter
 * version was replaced; it was the main cause of navigation feeling slow).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={PAGE_ENTER}
      initial="initial"
      animate="animate"
      exit="exit"
      // Ensure the motion div doesn't break flex/grid layouts
      style={{ width: '100%', minHeight: '100%' }}
    >
      {children}
    </motion.div>
  )
}
