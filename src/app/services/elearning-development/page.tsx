'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import InnerCTA from '@/components/ui/InnerCTA'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const DELIVERABLE_ICONS = [
  <svg key="d1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  <svg key="d2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>,
  <svg key="d3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/></svg>,
  <svg key="d4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  <svg key="d5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  <svg key="d6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
]

const DELIVERABLES = [
  {
    num: '01', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    title: 'Custom Courseware Design',
    body: 'Storyboarded, instructionally designed modules built by certified IDs. Every screen mapped to learning objectives with scenario-based interactivity and branching logic.',
    img: '/images/services/cards/custom-courseware.jpg',
  },
  {
    num: '02', color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
    title: 'Microlearning Modules',
    body: '3–7 minute focused learning assets for mobile deployment. Ideal for performance support, onboarding checklists, compliance reminders, and spaced repetition programmes.',
    img: '/images/services/cards/microlearning.jpg',
  },
  {
    num: '03', color: '#059669', bg: '#ECFDF5', border: '#A7F3D0',
    title: 'Government eLearning',
    body: 'Modules meeting public sector accessibility and compliance requirements. WHBS is an approved developer on India\'s iGOT Karmayogi national civil servant training platform.',
    img: '/images/services/cards/government-elearning.jpg',
  },
  {
    num: '04', color: '#BE185D', bg: '#FDF2F8', border: '#FBCFE8',
    title: 'Video & Animation',
    body: 'Explainer videos, motion graphics, talking-head recordings, and 2D animation produced in-house by WHBS\'s graphic design and multimedia team.',
    img: '/images/services/cards/video-animation.jpg',
  },
  {
    num: '05', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    title: 'Assessment & Quiz Design',
    body: 'Knowledge checks, branching scenarios, drag-and-drop interactions, and scored assessments with automated certificate triggers on completion.',
    img: '/images/services/cards/assessment-quiz.jpg',
  },
  {
    num: '06', color: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE',
    title: 'Multilingual Localisation',
    body: 'Audio dubbing, on-screen text translation, and culturally adapted imagery for content deployment across multiple geographies and language groups.',
    img: '/images/services/cards/multilingual.jpg',
  },
]

const SECTOR_ICONS = [
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/></svg>,
  <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>,
  <svg key="s4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
  <svg key="s5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  <svg key="s6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5M6 12v5c3 3 9 3 12 0v-5"/></svg>,
]

const SECTORS = [
  { name: 'Government & Civil Service', detail: 'iGOT Karmayogi (India), Ministry of Education (Brunei, Malaysia, Singapore)', color: '#059669', bg: '#ECFDF5', border: '#A7F3D0' },
  { name: 'Healthcare & Medical', detail: 'Medical compliance, clinical procedure training, patient safety modules', color: '#BE185D', bg: '#FDF2F8', border: '#FBCFE8' },
  { name: 'Manufacturing & Safety', detail: 'HSE training, SOPs, equipment operation, ISO compliance', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
  { name: 'Banking & Financial Services', detail: 'Regulatory compliance, anti-money laundering, products training', color: '#0F766E', bg: '#F0FDFA', border: '#99F6E4' },
  { name: 'Corporate & L&D', detail: 'Onboarding, leadership, soft skills, performance management', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  { name: 'Higher Education', detail: 'University course content, blended learning, student assessments', color: '#0066FF', bg: '#EFF6FF', border: '#BFDBFE' },
]

const FORMATS = [
  'SCORM 1.2', 'SCORM 2004', 'xAPI / Tin Can', 'HTML5',
  'PDF Job Aids', 'VILT Materials', 'Video (MP4)', 'Articulate Storyline',
  'Adobe Captivate', 'H5P',
]

export default function ElearningDevelopmentPage() {
  return (
    <>
      {/* ── ANIMATED HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/elearning-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(20,5,50,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(167,139,250,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#A78BFA',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#7C3AED,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#A78BFA' }}>eLearning Development</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#A78BFA' }}>
            eLearning Development
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Courseware designed to<br />drive measurable outcomes
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">WHBS produces custom eLearning content — from government-approved civil service modules to corporate microlearning — built by certified instructional designers and multimedia specialists.</p>
        </div>
      </section>

      {/* ── WHAT WHBS PRODUCES — infographic with center image ── */}
      <section className="relative overflow-hidden px-6 bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-xl relative z-10">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-purple-600">What We Produce</span>
            </span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4 max-w-[520px] mx-auto">
              What WHBS produces for you
            </h2>
            <p className="text-[16px] text-gray-500 max-w-[480px] mx-auto leading-[1.7]">
              Every deliverable built with an instructional design framework — not a template.
            </p>
          </Reveal>

          {/* Infographic: left 3 items | center image | right 3 items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left column */}
            <div className="flex flex-col gap-5">
              {DELIVERABLES.slice(0, 3).map((d, i) => (
                <Reveal key={`dl-${i}`} delay={i * 0.07}>
                  <div className="relative overflow-hidden rounded-[14px] p-5 min-h-[120px] flex items-start gap-4">
                    <div className="absolute inset-0 z-0">
                      <Image src={d.img} alt="" fill sizes="400px" className="object-cover" aria-hidden="true" />
                      <div className="absolute inset-0" style={{ background: 'rgba(10,5,25,0.62)' }} aria-hidden="true" />
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                      {DELIVERABLE_ICONS[i]}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[13px] font-bold text-white mb-1">{d.title}</h3>
                      <p className="text-[11.5px] text-white/75 leading-[1.6]">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Center image */}
            <Reveal delay={0.1}>
              <div className="flex items-center justify-center">
                <div className="relative rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl" style={{ width: '100%', maxWidth: 320, aspectRatio: '1/1' }}>
                  <Image
                    src="/images/elearning/elearning-center.png"
                    alt="WHBS eLearning production capabilities"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(109,64,192,0.3),transparent)' }} aria-hidden="true" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="w-full p-4 rounded-[10px] bg-black/50 backdrop-blur-sm border border-white/10">
                      <div className="text-[20px] font-extrabold text-white leading-none mb-1">1,100+</div>
                      <div className="text-[10px] text-white/50 font-medium uppercase tracking-wide">eLearning modules delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right column */}
            <div className="flex flex-col gap-5">
              {DELIVERABLES.slice(3).map((d, i) => (
                <Reveal key={`dr-${i}`} delay={i * 0.07}>
                  <div className="relative overflow-hidden rounded-[14px] p-5 min-h-[120px] flex items-start gap-4">
                    <div className="absolute inset-0 z-0">
                      <Image src={d.img} alt="" fill sizes="400px" className="object-cover" aria-hidden="true" />
                      <div className="absolute inset-0" style={{ background: 'rgba(10,5,25,0.62)' }} aria-hidden="true" />
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                      {DELIVERABLE_ICONS[i + 3]}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[13px] font-bold text-white mb-1">{d.title}</h3>
                      <p className="text-[11.5px] text-white/75 leading-[1.6]">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS SERVED — modern industry cards ───────────────────── */}
      <section className="px-6 bg-white" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="container-xl">
          <Reveal className="mb-10">
            <span className="eyebrow-indigo mb-4">Industry Coverage</span>
            <h2 className="text-[26px] font-extrabold text-gray-900 tracking-tight">Sectors served</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {SECTORS.map((s, i) => (
              <Reveal key={`sec-${i}`} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 12px 32px ${s.color}18` }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex gap-4 p-5 rounded-[16px] bg-white border border-gray-200 cursor-default transition-all duration-200"
                  style={{ borderColor: s.border, boxShadow: '0 1px 4px rgba(15,23,42,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: s.bg, color: s.color }}>
                    {SECTOR_ICONS[i]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-bold mb-1 transition-colors" style={{ color: s.color }}>{s.name}</h3>
                    <p className="text-[12px] text-gray-500 leading-snug">{s.detail}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Output formats */}
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-4">Output Formats</p>
            <div className="flex flex-wrap gap-2">
              {FORMATS.map((f, fi) => (
                <span key={`fmt-${fi}`}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                  style={{ color: '#7C3AED', background: '#F5F3FF', border: '1px solid #DDD6FE' }}>
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA
        heading="Let's build your next training programme"
        body="Share your curriculum, compliance requirements, or existing content library — we'll scope a custom development plan."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/news"
        accentColor="#7C3AED"
      />
    </>
  )
}
