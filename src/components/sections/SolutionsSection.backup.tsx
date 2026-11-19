'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const SERVICES = [
  {
    place: 'Learning Management Systems',
    title1: 'LMS',
    title2: 'DEVELOPMENT',
    desc: 'Custom Moodle LMS implementation, theme development, plugin engineering, and enterprise deployment for government and corporate clients.',
    href: '/services/lms-development',
    img: '/images/services/lms-banner.jpg',
    accent: '#0066FF',
  },
  {
    place: 'Smartbooks V7.0',
    title1: 'ERP',
    title2: 'SOLUTIONS',
    desc: 'Cloud and on-premise Smartbooks ERP covering inventory, orders, e-commerce integration, and financial accounting for mid-market enterprises.',
    href: '/services/erp-solutions',
    img: '/images/services/erp-banner.jpg',
    accent: '#00A76F',
  },
  {
    place: 'iOS & Android Enterprise Apps',
    title1: 'MOBILE APP',
    title2: 'DEVELOPMENT',
    desc: 'White-label mobile learning apps and enterprise applications built with Ionic and Angular for iOS and Android.',
    href: '/services/mobile-app-development',
    img: '/images/services/mobile-banner.jpg',
    accent: '#0891B2',
  },
  {
    place: 'Industrial Automation',
    title1: 'IOT',
    title2: 'SOLUTIONS',
    desc: 'Factory-grade IoT connecting production machinery to real-time dashboards with predictive maintenance and ERP integration.',
    href: '/services/iot-solutions',
    img: '/images/services/iot-banner.jpg',
    accent: '#D97706',
  },
  {
    place: 'Flash → HTML5 Migration',
    title1: 'CONTENT',
    title2: 'TRANSFORMATION',
    desc: 'Legacy Flash migration, PDF digitisation, and AI-assisted content conversion to modern accessible digital formats.',
    href: '/services/content-transformation',
    img: '/images/services/content-banner.jpg',
    accent: '#E11D48',
  },
]

export default function SolutionsSection() {
  return (
    <section className="section-py-lg bg-gray-50">
      <div className="container-xl">
        <Reveal className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="eyebrow mb-4">What We Build</span>
              <h2 className="t-h2 text-gray-900 mt-4 max-w-[540px]">
                End-to-end technology for enterprise &amp; government
              </h2>
            </div>
            <Link href="/services" className="btn btn-secondary self-start flex-shrink-0">
              All Services
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <ServiceShowcase />
        </Reveal>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   Cinematic showcase, closely modeled on a "timed travel cards"
   reference: full-bleed background per slide, bottom-left title/desc/
   CTA panel, a stack of shrinking preview cards on the right,
   top-right pagination (arrows + progress bar + slide counter).

   Rebuilt with React state + Framer Motion only (no ScrollMagic/GSAP/
   TimelineMax/SplitText). Bounded to ~700-800px tall — never a full
   viewport takeover.
   ──────────────────────────────────────────────────────────────────── */

const STEP_COOLDOWN = 650

function ServiceShowcase() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastStepRef = useRef(0)
  const touchStartY = useRef<number | null>(null)
  const n = SERVICES.length

  const goTo = useCallback((next: number) => {
    setIndex(((next % n) + n) % n)
  }, [n])

  const step = useCallback((dir: 1 | -1) => {
    const now = Date.now()
    if (now - lastStepRef.current < STEP_COOLDOWN) return
    lastStepRef.current = now
    setIndex((prev) => ((prev + dir) % n + n) % n)
  }, [n])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function onWheel(e: WheelEvent) {
      e.preventDefault()
      if (Math.abs(e.deltaY) < 4) return
      step(e.deltaY > 0 ? 1 : -1)
    }
    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY
    }
    function onTouchEnd(e: TouchEvent) {
      if (touchStartY.current === null) return
      const dy = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(dy) > 40) step(dy > 0 ? 1 : -1)
      touchStartY.current = null
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [step])

  const active = SERVICES[index]
  const previews = SERVICES.map((_, i) => i).filter((i) => i !== index)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[600px] md:h-[680px] lg:h-[760px] rounded-[16px] overflow-hidden shadow-md select-none bg-gray-900"
    >
      {/* Background — full-bleed, crossfades between services, never blurred/filtered */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.title1}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Link href={active.href} className="absolute inset-0 block" aria-label={`${active.title1} ${active.title2}`}>
            <Image
              src={active.img}
              alt={`${active.title1} ${active.title2}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Top-left brand-style indicator bar, echoes the reference's top progress line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
        <motion.div
          className="h-full"
          style={{ background: active.accent }}
          animate={{ width: `${((index + 1) / n) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Pagination — top-right: arrows + slide counter */}
      <div className="absolute top-6 right-6 flex items-center gap-2 z-30">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous service"
          className="w-10 h-10 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors bg-black/40"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
        </button>
        <div className="px-3 h-10 rounded-full bg-black/40 border border-white/20 flex items-center">
          <span className="text-white text-[13px] font-bold tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-white/50 text-[13px] mx-1">/</span>
          <span className="text-white/60 text-[13px] tabular-nums">{String(n).padStart(2, '0')}</span>
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next service"
          className="w-10 h-10 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors bg-black/40"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
        </button>
      </div>

      {/* Bottom-left text panel — place / two-line title / description / CTA, sliding in like the reference */}
      <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 right-6 md:right-[240px] z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div key={active.title1}>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mb-1 pointer-events-auto"
            >
              <p className="text-white/80 text-[13px] md:text-[14px] font-medium">{active.place}</p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-bold leading-[1.02] text-[30px] sm:text-[38px] md:text-[46px]"
              >
                {active.title1}
              </motion.h3>
            </div>
            <div className="overflow-hidden mb-3 md:mb-4">
              <motion.h3
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-bold leading-[1.02] text-[30px] sm:text-[38px] md:text-[46px]"
              >
                {active.title2}
              </motion.h3>
            </div>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/80 text-[13px] md:text-[14px] leading-[1.6] max-w-[440px] mb-5 line-clamp-2 md:line-clamp-3 pointer-events-auto"
            >
              {active.desc}
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 pointer-events-auto"
            >
              <Link
                href={active.href}
                aria-label={`Bookmark ${active.title1} ${active.title2}`}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: active.accent }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd"/></svg>
              </Link>
              <Link
                href={active.href}
                className="btn btn-primary inline-flex items-center gap-2 no-underline"
              >
                Explore Service
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right-side preview stack — smaller cards, closer to active shown bigger, tap to jump */}
      <div className="hidden md:flex items-end gap-3 absolute right-6 md:right-8 bottom-6 md:bottom-10 z-20">
        {previews.map((i, order) => {
          const svc = SERVICES[i]
          const isNext = order === 0
          return (
            <motion.button
              key={svc.title1}
              type="button"
              layout
              onClick={() => goTo(i)}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              animate={{ width: isNext ? 96 : 72, height: isNext ? 132 : 100, opacity: isNext ? 1 : 0.75 }}
              className="relative flex-shrink-0 rounded-[10px] overflow-hidden border border-white/20 shadow-lg"
            >
              <Image src={svc.img} alt={`${svc.title1} ${svc.title2}`} fill sizes="120px" className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: svc.accent }} aria-hidden="true" />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
