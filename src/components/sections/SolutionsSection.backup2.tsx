'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const ACCENT = '#0066FF' // site primary blue

const SERVICES = [
  {
    sub: 'Learning Management Systems',
    title: 'LMS Development',
    desc: 'Custom Moodle LMS implementation, theme development, plugin engineering, and enterprise deployment for government and corporate clients.',
    href: '/services/lms-development',
    img: '/images/services/lms-banner.jpg',
  },
  {
    sub: 'Smartbooks V7.0',
    title: 'ERP Solutions',
    desc: 'Cloud and on-premise Smartbooks ERP covering inventory, orders, e-commerce integration, and financial accounting for mid-market enterprises.',
    href: '/services/erp-solutions',
    img: '/images/services/erp-banner.jpg',
  },
  {
    sub: 'iOS & Android Enterprise Apps',
    title: 'Mobile App Development',
    desc: 'White-label mobile learning apps and enterprise applications built with Ionic and Angular for iOS and Android.',
    href: '/services/mobile-app-development',
    img: '/images/services/mobile-banner.jpg',
  },
  {
    sub: 'Industrial Automation',
    title: 'IoT Solutions',
    desc: 'Factory-grade IoT connecting production machinery to real-time dashboards with predictive maintenance and ERP integration.',
    href: '/services/iot-solutions',
    img: '/images/services/iot-banner.jpg',
  },
  {
    sub: 'Flash → HTML5 Migration',
    title: 'Content Transformation',
    desc: 'Legacy Flash migration, PDF digitisation, and AI-assisted content conversion to modern accessible digital formats.',
    href: '/services/content-transformation',
    img: '/images/services/content-banner.jpg',
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
   Three-column showcase: text panel (left) — large service image
   (center) — vertical numbered card list (right). One consistent
   brand-blue accent. React state + Framer Motion only.
   Bounded to 620-720px tall.
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

  return (
    <div
      ref={containerRef}
      className="relative w-full h-auto md:h-[640px] lg:h-[720px] rounded-[20px] overflow-hidden shadow-md select-none bg-[#0B1220] flex flex-col md:flex-row"
    >
      {/* Left — text panel */}
      <div className="relative z-20 flex-shrink-0 w-full md:w-[280px] lg:w-[340px] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[13px] font-semibold mb-3" style={{ color: ACCENT }}>{active.sub}</p>
            <h3 className="text-white font-extrabold leading-[1.08] text-[28px] md:text-[34px] mb-4">
              {active.title}
            </h3>
            <p className="text-white/70 text-[14px] leading-[1.65] mb-7 line-clamp-3">
              {active.desc}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={active.href}
                className="btn btn-primary inline-flex items-center gap-2 no-underline"
                style={{ background: ACCENT }}
              >
                Explore Service
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
              </Link>
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/70 flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd"/></svg>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination — arrows + counter + progress bar */}
        <div className="flex items-center gap-3 mt-8 md:mt-0">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous service"
            className="w-9 h-9 rounded-full border border-white/25 text-white/70 hover:text-white hover:border-white flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next service"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
            style={{ background: ACCENT }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </button>
          <span className="text-white text-[13px] font-semibold tabular-nums flex-shrink-0">
            {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <div className="flex-1 h-[3px] rounded-full bg-white/15 overflow-hidden min-w-[60px]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: ACCENT }}
              animate={{ width: `${((index + 1) / n) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Center — large service image */}
      <div className="relative flex-1 h-[220px] md:h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Link href={active.href} className="absolute inset-0 block" aria-label={active.title}>
              <Image
                src={active.img}
                alt={active.title}
                fill
                priority={index === 0}
                quality={100}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient blending the image into the left text panel */}
        <div
          className="absolute inset-y-0 left-0 w-[120px] pointer-events-none hidden md:block"
          style={{ background: 'linear-gradient(90deg, #0B1220 0%, rgba(11,18,32,0) 100%)' }}
        />
      </div>

      {/* Right — vertical numbered card list */}
      <div className="relative z-20 flex-shrink-0 w-full md:w-[210px] lg:w-[240px] h-[140px] md:h-full p-3 md:p-4 flex md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
        {SERVICES.map((svc, i) => {
          const isActive = i === index
          return (
            <motion.div
              key={svc.title}
              animate={{ scale: isActive ? 1 : 0.97, opacity: isActive ? 1 : 0.7 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0 md:flex-1 w-[220px] md:w-full h-full md:h-auto min-h-[64px] rounded-[12px] overflow-hidden"
              style={{
                border: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
              }}
            >
              <Link href={svc.href} className="absolute inset-0 block" aria-label={svc.title}>
                <Image src={svc.img} alt={svc.title} fill sizes="240px" style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 p-3 flex flex-col justify-center">
                  <span className="text-white/60 text-[11px] font-bold mb-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white text-[13px] font-bold leading-tight">{svc.title}</span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
