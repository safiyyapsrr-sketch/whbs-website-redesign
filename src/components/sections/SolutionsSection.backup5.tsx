'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
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
    <section className="bg-gray-50 pb-20 lg:pb-28">
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

      <ScrollStory />
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   Scroll-driven scenes — NOT a carousel, NOT pinned, NOT sticky.

   The section is a normal ~720px element in normal document flow.
   There is no artificial tall driver, no `position: sticky`, no
   preventDefault, no wheel listener of any kind. The browser scrolls
   exactly as it always does.

   useScroll tracks how far this element has passed through the
   viewport (offset: ["start end", "end start"] — the standard
   "progress while visible" range, which spans a bit more scroll
   distance than the element's own height, giving each of the 6 scenes
   a reasonable, natural window without inflating the section's actual
   height). That progress is only ever *read* — via
   useMotionValueEvent — to pick which scene's content is shown.
   Content changes with opacity/translateY/scale crossfades; the
   section itself never moves, locks, or resizes.
   ──────────────────────────────────────────────────────────────────── */

function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)))
    setIndex((prev) => (prev === next ? prev : next))
  })

  // Gentle continuous parallax drift on the image as the section passes
  // through the viewport — subtle, not scene-specific.
  const imgY = useTransform(scrollYProgress, [0, 1], [-18, 18])

  const active = SERVICES[index]

  return (
    <div ref={sectionRef} className="container-xl">
      <div className="relative w-full h-[560px] sm:h-[600px] md:h-[660px] lg:h-[720px] rounded-[20px] overflow-hidden shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.02 }}>
              <Image
                src={active.img}
                alt={active.label}
                fill
                priority={index === 0}
                quality={100}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.08) 70%, transparent 100%)' }}
            />

            <Link href={active.href} className="absolute inset-0 z-0" aria-label={active.label} />

            {/* Content — the focus of the section, nothing competing for attention */}
            <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-12 lg:p-16">
              <motion.p
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[13px] font-semibold mb-2"
                style={{ color: '#93B4FF' }}
              >
                {active.place}
              </motion.p>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-extrabold leading-[1.08] text-[28px] md:text-[38px] lg:text-[46px] mb-4 max-w-[480px]"
              >
                {active.title}
              </motion.h3>
              <motion.p
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/80 text-[14px] md:text-[15px] leading-[1.65] max-w-[440px] mb-7 line-clamp-2"
              >
                {active.desc}
              </motion.p>
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={active.href}
                  className="btn btn-primary inline-flex items-center gap-2 no-underline relative z-20"
                >
                  Explore Service
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                </Link>
              </motion.div>
            </div>

            {/* Minimal, non-interactive progress indicator — informational
                only, not a control. Small and quiet by design. */}
            <div className="absolute top-6 right-7 md:top-8 md:right-9 z-20 flex items-center gap-1.5">
              {SERVICES.map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 14 : 5,
                    height: 5,
                    background: i === index ? '#ffffff' : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
