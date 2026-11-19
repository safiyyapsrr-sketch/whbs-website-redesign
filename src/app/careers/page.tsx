'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

// ── SVG ICON COMPONENTS — no emojis ──────────────────────────────────────
function IconGlobe() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
function IconTrend() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> }
function IconShield() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> }
function IconUsers() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
function IconBook() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> }
function IconCpu() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> }
function IconBriefcase() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg> }
function IconMapPin() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> }
function IconArrow() { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"/></svg> }
function IconCheck() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> }

const POSITIONS = [
  { title: 'eLearning Course Developer', dept: 'Content Development', location: 'Chennai, India', type: 'Full-Time', color: '#7C3AED' },
  { title: 'LMS Customization Engineer (Moodle)', dept: 'LMS Engineering', location: 'Remote / Chennai', type: 'Full-Time', color: '#0066FF' },
  { title: 'Instructional Designer (Lead)', dept: 'Instructional Design', location: 'Chennai, India', type: 'Full-Time', color: '#059669' },
  { title: 'Enterprise Account Manager', dept: 'Sales & Partners', location: 'Chennai, India', type: 'Full-Time', color: '#D97706' },
]

const BENEFITS = [
  { Icon: IconGlobe,  title: 'Global Impact',          desc: 'Work on projects that reach government ministries and enterprises across 14 countries.', color: '#0066FF' },
  { Icon: IconTrend,  title: 'Career Growth',          desc: 'Up-skill in Moodle APIs, cloud ERP systems, IoT ecosystems, and instructional design frameworks.', color: '#059669' },
  { Icon: IconShield, title: '26+ Years of Stability', desc: 'Founded in 1999 — WHBS has navigated every digital cycle with zero layoffs and continuous investment.', color: '#7C3AED' },
  { Icon: IconUsers,  title: 'Collaborative Culture',  desc: 'Work alongside instructional designers, engineers, and domain specialists operating as one unified team.', color: '#D97706' },
  { Icon: IconBook,   title: 'Learning First',         desc: 'Access to LMS platforms, eLearning authoring tools, and curated professional development resources.', color: '#0891B2' },
  { Icon: IconCpu,    title: 'Cutting-Edge Tech',      desc: 'Build with Moodle, Ionic, Angular, IoT edge computing, and Smartbooks V7.0 ERP systems.', color: '#4F46E5' },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Application Review',    desc: 'Our talent team reviews every application within 5 business days.' },
  { num: '02', title: 'Initial Screening',     desc: 'A 30-minute call with HR to discuss your background and the role.' },
  { num: '03', title: 'Technical Assessment',  desc: 'A role-specific technical exercise or portfolio review.' },
  { num: '04', title: 'Panel Interview',       desc: 'An in-depth interview with team leads and potential colleagues.' },
  { num: '05', title: 'Offer & Onboarding',   desc: 'Clear offer package with structured 30-day onboarding programme.' },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.role) { setError('Please fill in all required fields.'); return }
    setError('')
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1500)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/careers-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(2,6,23,0.92) 0%,rgba(15,23,42,0.88) 40%,rgba(30,58,138,0.85) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.4) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.07] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" aria-hidden="true" />
              {POSITIONS.length} Open Positions
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-extrabold text-white tracking-[-0.04em] leading-[1.08] mb-5 max-w-[720px] mx-auto"
            style={{ fontSize: 'clamp(32px,4.5vw,58px)' }}>
            Build Enterprise Technology<br />That Reaches 14 Countries
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }}
            className="text-[17px] text-blue-200 max-w-[540px] mx-auto leading-[1.7] mb-10">
            Join a team of engineers, instructional designers, and technology specialists working on government, education, and enterprise platforms worldwide since 1999.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center flex-wrap">
            <a href="#positions" className="btn btn-primary no-underline">View Open Roles <IconArrow /></a>
            <a href="#apply" className="btn btn-secondary no-underline">Apply Now</a>
          </motion.div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-20 px-6 bg-white">
        <div className="container-xl">
          <Reveal className="mb-12">
            <span className="eyebrow mb-4">Why WHBS</span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4 max-w-[520px]">
              Where technology meets meaningful work
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, bi) => (
              <Reveal key={`ben-${bi}`} delay={bi * 0.06}>
                <div className="flex gap-4 p-6 bg-white rounded-[16px] border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}20` }}>
                    <b.Icon />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{b.title}</h3>
                    <p className="text-[13px] text-gray-600 leading-[1.65]">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS — clean list layout */}
      <section id="positions" className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/careers-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'rgba(248,250,252,0.97)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <Reveal className="mb-10">
            <span className="eyebrow mb-4">Open Positions</span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight">Current openings</h2>
          </Reveal>
          <div className="max-w-[820px]">
            <div className="rounded-[14px] border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100 shadow-sm">
              {POSITIONS.map((pos, pi) => (
                <Reveal key={`pos-${pi}`} delay={pi * 0.04}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 hover:bg-gray-50 transition-colors group">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors">{pos.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-[12px] text-gray-500">
                        <span className="font-medium text-gray-600">{pos.dept}</span>
                        <span className="flex items-center gap-1"><IconMapPin />{pos.location}</span>
                        <span
                          className="text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full"
                          style={{ color: pos.color, background: `${pos.color}12`, border: `1px solid ${pos.color}25` }}
                        >{pos.type}</span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0066FF] hover:text-[#0052CC] no-underline transition-colors"
                    >
                      Apply Now <IconArrow />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-6">
            <p className="text-[13px] text-gray-500">Don&apos;t see your role? Send a general application — we hire on talent, not just openings.</p>
          </Reveal>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-20 px-6 bg-white">
        <div className="container-xl">
          <Reveal className="mb-12">
            <span className="eyebrow mb-4">Hiring Process</span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight max-w-[480px]">
              A clear, respectful hiring process
            </h2>
          </Reveal>
          <div className="relative max-w-[760px]">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block" aria-hidden="true" />
            <div className="flex flex-col gap-6">
              {PROCESS_STEPS.map((step, si) => (
                <Reveal key={`step-${si}`} delay={si * 0.06}>
                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0 relative z-10"
                      style={{ background: 'linear-gradient(135deg, #0066FF, #3385FF)' }}>
                      {step.num}
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="text-[15px] font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-[13px] text-gray-600 leading-[1.65]">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/apply-now-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'rgba(248,250,252,0.96)' }} aria-hidden="true" />
        </div>
        <div className="container-xl max-w-[640px] relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="eyebrow mb-4">Apply Now</span>
            <h2 className="text-[28px] font-extrabold text-gray-900 tracking-tight mb-3">Start your application</h2>
            <p className="text-[15px] text-gray-600">We review every application and respond within 5 business days.</p>
          </Reveal>
          {submitted ? (
            <div className="text-center py-14 px-8 bg-green-50 rounded-[20px] border border-green-200">
              <div className="w-14 h-14 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mx-auto mb-4 text-green-600"><IconCheck /></div>
              <h3 className="text-[20px] font-extrabold text-gray-900 mb-2">Application received</h3>
              <p className="text-[14px] text-gray-600">We will review your application and respond within 5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white rounded-[20px] p-8 border border-gray-200 shadow-sm">
              {error && <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-red-700 text-[14px]">{error}</div>}
              {[
                { label: 'Full Name *', field: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address *', field: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Role of Interest *', field: 'role', type: 'text', placeholder: 'e.g. Instructional Designer' },
              ].map(f => (
                <div key={f.field}>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={(formData as Record<string, string>)[f.field]}
                    onChange={e => setFormData(p => ({ ...p, [f.field]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                </div>
              ))}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Why WHBS? (optional)</label>
                <textarea placeholder="Tell us about yourself and why you want to join WHBS..." rows={4}
                  value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white" />
              </div>
              <button type="submit" disabled={submitting} className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Submitting...' : 'Submit Application'}
                {!submitting && <IconArrow />}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}