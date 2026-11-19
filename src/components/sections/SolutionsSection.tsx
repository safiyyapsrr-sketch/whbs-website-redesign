'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

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
    place: 'Custom Content & Courses',
    title: 'ELEARNING DEVELOPMENT',
    label: 'eLearning Development',
    desc: 'Instructionally designed courseware, interactive simulations, video production, and multilingual localisation for enterprise and government.',
    href: '/services/elearning-development',
    img: '/images/services/elearning-banner.jpg',
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

const n = SERVICES.length

export default function SolutionsSection() {
  return (
    <section className="bg-gray-50">
      <div className="container-xl pt-[112px] lg:pt-28 pb-8">
        <Reveal>
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
      </div>

      <FullBleedShowcase />
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   True full-bleed scrollytelling — the slide IS the page, edge to
   edge, 100vh below the navbar. No container, no card, no rounded
   box, no sidebar competing for space.

   Mechanism (unchanged from proven approach, only the visual framing
   changed): a tall driver div (SERVICES.length * 100vh) wraps a
   `position: sticky` full-width/full-height panel. Native CSS sticky
   keeps it pinned directly below the fixed navbar for as long as the
   driver is scrolling past. No JS scroll-lock, no preventDefault, no
   wheel listener anywhere in this file — the browser's own scroll
   physics drive the whole thing.

   useScroll reads the driver's scroll progress; useMotionValueEvent
   quantizes it into a discrete slide index (0..5), purely to choose
   which slide's content is rendered. Once the driver's height is
   exhausted, the sticky panel detaches on its own — inherent to CSS
   sticky against its parent's height — and the page continues
   straight into "Why WHBS".
   ──────────────────────────────────────────────────────────────────── */

function FullBleedShowcase() {
  const driverRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: driverRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)))
    setIndex((prev) => (prev === next ? prev : next))
  })

  const active = SERVICES[index]

  return (
    <div ref={driverRef} style={{ height: `${n * 100}vh` }} className="relative">
      <div className="sticky top-[64px] lg:top-[100px] h-[calc(100vh-64px)] lg:h-[calc(100vh-100px)] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, scale: 1.03 }}
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
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 32%, rgba(0,0,0,0.1) 58%, transparent 78%)' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 35%)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Whole slide is clickable through to the active service */}
        <Link href={active.href} className="absolute inset-0 z-0" aria-label={active.label} />

        {/* Text — bottom-left, page-level padding, no card/box around it */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-16 md:pb-20 lg:pb-24">
          <AnimatePresence mode="wait">
            <motion.div key={active.title}>
              <motion.p
                initial={{ x: -28, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[13px] md:text-[14px] font-semibold mb-3"
                style={{ color: '#93B4FF' }}
              >
                {active.place}
              </motion.p>
              <motion.h3
                initial={{ x: -28, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-extrabold leading-[1.02] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] mb-6 max-w-[900px]"
              >
                {active.title}
              </motion.h3>
              <motion.p
                initial={{ x: -28, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/85 text-[15px] md:text-[17px] leading-[1.65] max-w-[520px] mb-9"
              >
                {active.desc}
              </motion.p>
              <motion.div
                initial={{ x: -28, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={active.href}
                  className="btn btn-primary inline-flex items-center gap-2 no-underline relative z-20"
                >
                  Explore Service
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal, non-interactive progress dots — top-right, informational only */}
        <div className="absolute top-8 right-8 md:top-10 md:right-12 z-20 flex items-center gap-2">
          <span className="text-white/60 text-[12px] font-semibold tabular-nums mr-1">
            {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          {SERVICES.map((_, i) => (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === index ? 16 : 5,
                height: 5,
                background: i === index ? '#ffffff' : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
