'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
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

      <PinnedShowcase />

      <div className="h-8 lg:h-12" />
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   Immersive pinned scrollytelling — six scenes, ~95-100vh, native
   scroll only.

   Mechanism: a tall driver div (SERVICES.length * 100vh) wraps a
   `position: sticky` panel. CSS sticky keeps the panel pinned to just
   below the fixed navbar for as long as the driver is scrolling past
   — there is no JS scroll-lock, no preventDefault, no wheel listener
   anywhere in this file. The browser's native scroll physics run the
   entire interaction.

   Framer Motion's useScroll reads the driver's scroll progress and
   useMotionValueEvent quantizes it into a discrete scene index
   (0..5), purely to choose which scene's content is rendered. Once
   the driver's height is exhausted, the sticky panel detaches on its
   own — inherent to how CSS sticky works against its parent's height
   — and the page continues straight into "Why WHBS" with no visible
   seam.
   ──────────────────────────────────────────────────────────────────── */

function PinnedShowcase() {
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

  // Click a service in the right-hand nav → scroll the real page to the
  // scroll position that corresponds to that scene. Scroll position stays
  // the single source of truth; this never fakes or intercepts scrolling,
  // it just moves the native scrollbar to where that scene naturally is.
  const goTo = useCallback((target: number) => {
    const i = ((target % n) + n) % n
    const el = driverRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const driverTop = rect.top + window.scrollY
    const scrollRange = el.offsetHeight - window.innerHeight
    const progress = n <= 1 ? 0 : i / (n - 1)
    window.scrollTo({ top: driverTop + progress * scrollRange, behavior: 'smooth' })
  }, [])

  const active = SERVICES[index]

  return (
    <div ref={driverRef} style={{ height: `${n * 100}vh` }} className="relative">
      <div className="sticky top-[64px] lg:top-[100px] h-[calc(100dvh-64px)] lg:h-[calc(100dvh-100px)] flex items-center overflow-hidden">
        <div className="container-xl w-full">
          <div className="w-full h-[95vh] max-h-[calc(100dvh-64px-24px)] lg:max-h-[calc(100dvh-100px-24px)] rounded-[20px] overflow-hidden shadow-md select-none flex flex-col md:flex-row bg-gray-900">

            {/* Main area — large cinematic image + left text overlay */}
            <div className="relative flex-1 h-[42%] md:h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
                    style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.12) 62%, transparent 82%)' }}
                  />
                </motion.div>
              </AnimatePresence>

              <Link href={active.href} className="absolute inset-0 z-0" aria-label={active.label} />

              {/* Text overlay — left */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  <motion.div key={active.title}>
                    <motion.p
                      initial={{ x: -26, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[13px] font-semibold mb-2"
                      style={{ color: '#93B4FF' }}
                    >
                      {active.place}
                    </motion.p>
                    <motion.h3
                      initial={{ x: -26, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="text-white font-extrabold leading-[1.05] text-[30px] md:text-[44px] lg:text-[56px] mb-5 max-w-[560px]"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      initial={{ x: -26, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="text-white/80 text-[14px] md:text-[16px] leading-[1.65] max-w-[460px] mb-8 line-clamp-3"
                    >
                      {active.desc}
                    </motion.p>
                    <motion.div
                      initial={{ x: -26, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={active.href}
                        className="btn btn-primary inline-flex items-center gap-2 no-underline relative z-20"
                        style={{ background: PRIMARY }}
                      >
                        Explore Service
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Scene counter — small, top-left */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 text-white/70 text-[13px] font-semibold tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
              </div>
            </div>

            {/* Right — vertical service navigation. Click to jump; active
                state gets a border highlight, slight scale, and full
                opacity; inactive items sit slightly dimmer. */}
            <div className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px] h-[58%] md:h-full bg-gray-950 p-3 md:p-4 flex md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
              {SERVICES.map((svc, i) => {
                const isActive = i === index
                return (
                  <motion.button
                    key={svc.title}
                    type="button"
                    layout
                    onClick={() => goTo(i)}
                    animate={{ scale: isActive ? 1.02 : 1, opacity: isActive ? 1 : 0.65 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex-shrink-0 md:flex-1 w-[200px] md:w-full h-full md:h-auto min-h-[76px] rounded-[12px] overflow-hidden flex items-center gap-3 pl-3.5 pr-3 text-left"
                    style={{
                      background: isActive ? 'rgba(37,99,235,0.14)' : 'rgba(255,255,255,0.03)',
                      border: isActive ? `1.5px solid ${PRIMARY}` : '1.5px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-[10.5px] font-bold mb-0.5" style={{ color: isActive ? PRIMARY : 'rgba(255,255,255,0.4)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className={`text-[12.5px] font-semibold leading-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {svc.label}
                      </p>
                    </div>
                    <div className="relative w-[46px] h-[46px] flex-shrink-0 rounded-[8px] overflow-hidden">
                      <Image src={svc.img} alt={svc.label} fill quality={100} sizes="50px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                  </motion.button>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
