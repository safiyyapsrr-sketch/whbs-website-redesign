'use client'

/**
 * AnimatedCounter
 * Counts up from 0 (or a start value) to `to` when the element enters the viewport.
 * Uses Framer Motion useMotionValue + useSpring for smooth, physics-based counting.
 */
import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  /** Target number to count up to */
  to: number
  /** Optional suffix rendered after the number (e.g. "+", "%") */
  suffix?: string
  /** Optional prefix rendered before the number (e.g. "$") */
  prefix?: string
  /** Number of decimal places to show. Default: 0 */
  decimals?: number
  /** Duration hint in seconds (approximate — spring physics governs actual speed) */
  duration?: number
  /** Additional className for the wrapper span */
  className?: string
  /** Stiffness of the spring. Higher = faster. Default: 60 */
  stiffness?: number
  /** Damping of the spring. Higher = less bounce. Default: 15 */
  damping?: number
}

export default function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  stiffness = 60,
  damping = 15,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  // Display value state — updated every RAF frame from the spring
  const [display, setDisplay] = useState('0')

  // Motion value drives the spring
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness, damping, restDelta: 0.001 })

  useEffect(() => {
    if (!isInView) return
    mv.set(to)
  }, [isInView, to, mv])

  useEffect(() => {
    // Subscribe to spring output and update display string
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(
        decimals > 0
          ? latest.toFixed(decimals)
          : Math.round(latest).toLocaleString()
      )
    })
    return unsubscribe
  }, [spring, decimals])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}
      {display}
      {suffix && (
        <span className="text-[#3385FF]">{suffix}</span>
      )}
    </span>
  )
}
