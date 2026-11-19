'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { STAGGER_CONTAINER, SCALE_IN } from '@/lib/motion'

function IconGov()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/></svg> }
function IconEdu()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M22 10v6M2 10l10-5 10 5M6 12v5c3 3 9 3 12 0v-5"/></svg> }
function IconCorp() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function IconHealth(){ return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> }
function IconMfg()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> }
function IconGlobe(){ return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }

const INDUSTRIES = [
  { title: 'Government',        sub: 'Civil service & ministries',  Icon: IconGov,    color: '#059669', bg: '#ECFDF5', href: '/solutions/government' },
  { title: 'Education',         sub: 'Universities & colleges',      Icon: IconEdu,    color: '#0066FF', bg: '#EFF6FF', href: '/solutions/education' },
  { title: 'Corporate Training',sub: 'Enterprise workforce',         Icon: IconCorp,   color: '#7C3AED', bg: '#F5F3FF', href: '/solutions/corporate-learning' },
  { title: 'Healthcare',        sub: 'Medical & clinical training',  Icon: IconHealth, color: '#BE185D', bg: '#FDF2F8', href: '/services/elearning-development' },
  { title: 'Manufacturing',     sub: 'Production & IoT systems',     Icon: IconMfg,    color: '#C2410C', bg: '#FFF7ED', href: '/solutions/manufacturing' },
  { title: 'International',     sub: '14 countries worldwide',       Icon: IconGlobe,  color: '#0891B2', bg: '#ECFEFF', href: '/about' },
]

export default function IndustriesSection() {
  return (
    <section className="section-py bg-gray-50 border-y border-gray-200">
      <div className="container-xl">
        <Reveal className="text-center mb-14">
          <span className="eyebrow mb-4">Industry Applications</span>
          <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4 max-w-[540px] mx-auto">
            Solutions built for every sector
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[480px] mx-auto leading-[1.65]">
            WHBS solutions are deployed across diverse industries, each with distinct requirements for learning and enterprise technology.
          </p>
        </Reveal>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {INDUSTRIES.map((ind, ii) => (
            <motion.div key={`ind-${ii}`} variants={SCALE_IN}>
              <Link
                href={ind.href}
                className="group flex flex-col items-center text-center px-4 py-7 rounded-[16px] bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#CCE0FF] hover:-translate-y-2 transition-all duration-300 no-underline block"
              >
                <div
                  className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: ind.bg, color: ind.color }}
                >
                  <ind.Icon />
                </div>
                <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors">{ind.title}</h4>
                <p className="text-[12px] text-gray-500 mt-1">{ind.sub}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
