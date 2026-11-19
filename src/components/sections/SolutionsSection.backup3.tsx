'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const PRIMARY = '#2563EB'

const SERVICES = [
  {
    place: 'Learning Management Systems',
    title: 'LMS DEVELOPMENT',
    label: 'LMS Development',
    desc: 'Custom Moodle LMS implementation, theme development, plugin engineering, and enterprise deployment for government and corporate clients.',
    href: '/services/lms-development',
    img: '/images/services/lms-banner.jpg',
  },
  {
    place: 'Smartbooks V7.0',
    title: 'ERP SOLUTIONS',
    label: 'ERP Solutions',
    desc: 'Cloud and on-premise Smartbooks ERP covering inventory, orders, e-commerce integration, and financial accounting for mid-market enterprises.',
    href: '/services/erp-solutions',
    img: '/images/services/erp-banner.jpg',
  },
  {
    place: 'iOS & Android Enterprise Apps',
    title: 'MOBILE APP DEVELOPMENT',
    label: 'Mobile App Development',
    desc: 'White-label mobile learning apps and enterprise applications built with Ionic and Angular for iOS and Android.',
    href: '/services/mobile-app-development',
    img: '/images/services/mobile-banner.jpg',
  },
  {
    place: 'Industrial Automation',
    title: 'IOT SOLUTIONS',
    label: 'IoT Solutions',
    desc: 'Factory-grade IoT connecting production machinery to real-time dashboards with predictive maintenance and ERP integration.',
    href: '/services/iot-solutions',
    img: '/images/services/iot-banner.jpg',
  },
  {
    place: 'Flash → HTML5 Migration',
    title: 'CONTENT TRANSFORMATION',
    label: 'Content Transformation',
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
   Left text-over-image panel + right vertical numbered thumbnail
   sidebar. Fixed height (620-720px), lives inside the normal page
   container — never full width, never full viewport.
   React state + Framer Motion only.
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
      className="w-full h-auto md:h-[660px] lg:h-[720px] rounded-[20px] overflow-hidden shadow-md select-none flex flex-col md:flex-row bg-gray-900"
    >
      {/* Main area — background image + left text panel */}
      <div className="relative flex-1 h-[560px] md:h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.img}
              alt={active.label}
              fill
              priority={index === 0}
              quality={100}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Dark gradient over the left only, for text readability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.15) 60%, transparent 80%)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Whole main area is clickable through to the active service (below the text, so buttons still work) */}
        <Link href={active.href} className="absolute inset-0 z-0" aria-label={active.label} />

        {/* Text panel — left side */}
        <div className="relative z-10 h-full flex flex-col justify-center md:justify-end p-6 md:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div key={active.title}>
              <motion.p
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[13px] font-semibold mb-2"
                style={{ color: '#93B4FF' }}
              >
                {active.place}
              </motion.p>
              <motion.h3
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-extrabold leading-[1.08] text-[30px] md:text-[38px] lg:text-[44px] mb-4 max-w-[420px]"
              >
                {active.title}
              </motion.h3>
              <motion.p
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/75 text-[14px] leading-[1.6] max-w-[400px] mb-7"
              >
                {active.desc}
              </motion.p>
              <motion.div
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 mb-8"
              >
                <Link
                  href={active.href}
                  className="btn btn-primary inline-flex items-center gap-2 no-underline"
                  style={{ background: PRIMARY }}
                >
                  Explore Service
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                </Link>
                <button
                  type="button"
                  aria-label="Bookmark this service"
                  className="w-11 h-11 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"/></svg>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination — arrows, counter, progress bar */}
          <div className="flex items-center gap-4 relative z-20">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next service"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ background: PRIMARY }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
            </button>
            <span className="text-white text-[13px] font-semibold tabular-nums flex-shrink-0">
              {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>
            <div className="h-[3px] flex-1 bg-white/15 rounded-full overflow-hidden max-w-[240px]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: PRIMARY }}
                animate={{ width: `${((index + 1) / n) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar — vertical numbered list of services */}
      <div className="flex-shrink-0 w-full md:w-[300px] lg:w-[320px] bg-gray-950 p-3 md:p-4 flex md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
        {SERVICES.map((svc, i) => {
          const isActive = i === index
          return (
            <motion.button
              key={svc.title}
              type="button"
              layout
              onClick={() => goTo(i)}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0 md:flex-shrink w-[220px] md:w-full h-[92px] rounded-[12px] overflow-hidden flex items-center gap-3 pl-4 pr-3 text-left transition-colors"
              style={{
                background: isActive ? 'rgba(37,99,235,0.14)' : 'rgba(255,255,255,0.03)',
                border: isActive ? `1.5px solid ${PRIMARY}` : '1.5px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold mb-0.5" style={{ color: isActive ? PRIMARY : 'rgba(255,255,255,0.4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className={`text-[13px] font-semibold leading-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {svc.label}
                </p>
              </div>
              <div className="relative w-[56px] h-[56px] flex-shrink-0 rounded-[8px] overflow-hidden">
                <Image src={svc.img} alt={svc.label} fill quality={100} sizes="60px" style={{ objectFit: 'cover' }} />
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
