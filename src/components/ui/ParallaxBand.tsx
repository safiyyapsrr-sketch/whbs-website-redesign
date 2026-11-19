'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  /** Path to the background image — must exist in /public */
  imageSrc: string
  /** 0–1 overlay opacity, default 0.45 */
  overlayOpacity?: number
  /** px of vertical padding, default 64 */
  py?: number
}

export default function ParallaxBand({
  children,
  imageSrc,
  overlayOpacity = 0.45,
  py = 64,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId = 0

    function onScroll() {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const vh   = window.innerHeight
        // visible fraction: -1 (above viewport) → 0 (center) → 1 (below)
        const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2)
        // shift bg by ±30px
        const shift = progress * 30
        el.style.backgroundPositionY = `calc(50% + ${shift}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        willChange: 'background-position',
        padding: `${py}px 32px`,
      }}
    >
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(8,10,20,${overlayOpacity})`,
          pointerEvents: 'none',
        }}
      />
      {/* Decorative grid — 140px, full width */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '140px 140px',
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
