'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const MILESTONES = [
  { year: '1999', icon: '🏢', title: 'Founded', body: 'Incorporated in Chennai. First CBT and multimedia production contracts.', color: '#0066FF' },
  { year: '2004', icon: '📚', title: 'eLearning', body: 'Instructional design team formed. First government LMS deployment.', color: '#00A76F' },
  { year: '2010', icon: '🌏', title: 'Global', body: 'Brunei & Malaysia Ministry of Education partnerships. 14 countries reached.', color: '#6E41C0' },
  { year: '2015', icon: '🔧', title: 'ERP & IoT', body: 'Smartbooks ERP launched. Industrial IoT division established.', color: '#D97706' },
  { year: '2021', icon: '🇮🇳', title: 'iGOT Live', body: 'Approved developer on India\'s national civil service platform.', color: '#0891B2' },
  { year: 'Now',  icon: '🚀', title: '1,100+ Projects', body: '26+ years. 56+ clients. One partner for learning & enterprise tech.', color: '#E11D48' },
]

const PILLARS = [
  { title: 'Full-stack team', body: 'Instructional designers, Moodle engineers, graphic designers, and DevOps — in-house.' },
  { title: 'On-time delivery', body: 'Cambridge to Brunei commend WHBS for keeping production schedules without compromise.' },
  { title: 'Domain depth',    body: 'Government, education, healthcare, manufacturing — not generalist IT consulting.' },
  { title: 'One partner',     body: 'LMS + ERP + IoT + content under a single SLA. No coordination overhead.' },
]

// Stagger containers — each child animates in sequence (card 1 → 2 → 3 → 4…)
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhySection() {
  return (
    <section className="section-py bg-white border-y border-gray-100" aria-labelledby="why-heading">
      <div className="container-xl">

        {/* Header */}
        <Reveal className="text-center mb-8">
          <span className="eyebrow mb-4">Why WHBS</span>
          <h2 id="why-heading" className="t-h2 text-gray-900 mt-4 max-w-[560px] mx-auto">Built on two decades of real delivery</h2>
          <p className="text-lead text-gray-500 mt-4 max-w-[420px] mx-auto">Since 1999, WHBS has navigated every digital era without a single operational gap.</p>
        </Reveal>

        {/* Scroll cue — one elegant mouse + animated dot, echoing the reference's
            "style #10" indicator, adapted as a small in-page accent rather than
            a full-screen scroll-down control */}
        <div className="flex justify-center mb-10" aria-hidden="true">
          <div className="w-[26px] h-[42px] rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#0066FF' }}
              animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Journey timeline */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* Desktop: horizontal path */}
          <div className="hidden lg:block relative px-4">
            {/* Connecting line — draws itself in on scroll-into-view */}
            <motion.div
              className="absolute top-[28px] left-[calc(1/12*100%+20px)] right-[calc(1/12*100%+20px)] h-[2px] origin-left"
              style={{ background: 'linear-gradient(90deg,#0066FF,#00A76F,#6E41C0,#D97706,#0891B2,#E11D48)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-6 gap-3 relative z-10">
              {MILESTONES.map((m, i) => (
                <motion.div key={i} variants={item} className="flex flex-col items-center text-center group cursor-default">
                  {/* Node */}
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[18px] mb-4 border-4 border-white shadow-md flex-shrink-0"
                    style={{ background: m.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                  >
                    {m.icon}
                  </motion.div>
                  <div className="text-[13px] font-extrabold mb-0.5" style={{ color: m.color }}>{m.year}</div>
                  <div className="text-[12px] font-bold text-gray-800 mb-1">{m.title}</div>
                  <p className="text-[11px] text-gray-500 leading-[1.55]">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: compact vertical */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
            {MILESTONES.map((m, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-3 p-3.5 rounded-[12px] bg-gray-50 border border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                  style={{ background: m.color }}
                  aria-hidden="true"
                >
                  {m.icon}
                </div>
                <div>
                  <div className="text-[11px] font-bold" style={{ color: m.color }}>{m.year}</div>
                  <div className="text-[12px] font-bold text-gray-800">{m.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pillars grid + CTA */}
        <Reveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4, scale: 1.02, boxShadow: '0 14px 28px rgba(0,0,0,0.09)' }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-[12px] bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 cursor-default"
              >
                <div className="w-1 h-5 rounded-full mb-3" style={{ background: ['#0066FF','#00A76F','#6E41C0','#D97706'][i] }} aria-hidden="true" />
                <h3 className="text-[14px] font-bold text-gray-900 mb-1.5">{p.title}</h3>
                <p className="text-[12.5px] text-gray-500 leading-[1.65]">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Link href="/about" className="btn btn-secondary">
              Our Full Story
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
