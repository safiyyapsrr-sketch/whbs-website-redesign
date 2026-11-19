'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

const SOLUTIONS = [
  {
    title: 'Corporate LMS Implementation',
    body: 'Moodle deployed for enterprise training providers — branded portals, HR system integration, automated enrolment, and completion reporting for line managers.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  },
  {
    title: 'Onboarding Automation',
    body: 'Structured new-hire learning journeys with mandatory completion gates, manager notifications, progress dashboards, and digital certificate issuance.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  },
  {
    title: 'Compliance Training',
    body: 'Regulatory compliance programmes with mandatory completion tracking, expiry-based re-enrolment, audit-trail reporting, and certificate archives.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Sales & Product Training',
    body: 'Product knowledge libraries, sales playbooks, and certification programmes deployed globally to distributed sales forces via mobile-optimised LMS.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  },
  {
    title: 'Leadership Development',
    body: 'Blended leadership programmes combining self-paced eLearning modules, webinar integrations, reflection exercises, and 360-degree feedback workflows.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: 'Training ROI Measurement',
    body: 'Kirkpatrick Level 1–4 measurement frameworks configured in Moodle. Completion data piped to HR dashboards to demonstrate business impact.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
]

const CLIENTS = ['Banking & Financial Services', 'Manufacturing & Industrial', 'Healthcare & Pharma', 'IT & Technology', 'Retail & FMCG', 'Professional Services']

function AccordionItem({ sol, idx, open, onToggle }: {
  sol: typeof SOLUTIONS[0], idx: number, open: boolean, onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-4 px-2 text-left cursor-pointer bg-transparent hover:bg-gray-50 rounded-[8px] transition-colors"
        aria-expanded={open}
      >
        <div
          className="w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors duration-200"
          style={{ background: open ? 'rgba(109,64,192,0.15)' : 'rgba(109,64,192,0.08)', color: '#6E41C0' }}
          aria-hidden="true"
        >
          {sol.icon}
        </div>
        <span className="flex-1 text-[14px] font-semibold text-gray-900">{sol.title}</span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          stroke="#6E41C0" strokeWidth={2}
          className="flex-shrink-0 transition-transform duration-250"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <p className="text-[13px] text-gray-600 leading-[1.7] pl-[52px] pr-2 pb-4">{sol.body}</p>
      </div>
    </div>
  )
}

export default function CorporateLearningPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/home/hero-enterprise.jpg" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(20,5,50,0.88) 0%,rgba(20,5,50,0.82) 55%,rgba(20,5,50,0.78) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
            aria-hidden="true"
          />
        </div>
        <div className="container-xl relative z-10 py-24 px-6">
          <nav className="mb-8 flex items-center gap-2 text-[12px] text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white no-underline">Home</Link>
            <span>›</span>
            <Link href="/solutions" className="transition-colors hover:text-white no-underline">Solutions</Link>
            <span>›</span>
            <span className="text-white/70">Corporate Learning</span>
          </nav>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#A78BFA' }}>
            Corporate Learning
          </span>
          <h1 className="mb-5 mt-2 max-w-[680px] text-h1 font-extrabold text-white">
            Enterprise learning that scales with your workforce
          </h1>
          <p className="max-w-[560px] text-lead text-white/55">
            WHBS builds and manages corporate learning platforms for enterprises across banking, manufacturing, healthcare, and IT — from initial LMS deployment to long-term managed content production.
          </p>
        </div>
      </section>

      {/* CAPABILITIES — center image + accordion */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/backgrounds/capabilities-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'rgba(248,250,252,0.95)' }} aria-hidden="true" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{ backgroundImage: 'linear-gradient(rgba(109,64,192,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(109,64,192,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-purple-600">Capabilities</span>
            </span>
            <h2 className="text-[30px] font-extrabold tracking-tight text-gray-900 mb-3">Enterprise learning capabilities</h2>
            <p className="text-[15px] text-gray-500 max-w-[420px] mx-auto leading-[1.7]">
              Click any capability to expand details. Tap on mobile to explore.
            </p>
          </Reveal>

          {/* Desktop: center image + accordion split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Center image — fixed */}
            <Reveal>
              <div className="sticky top-[120px] relative rounded-[20px] overflow-hidden border border-gray-200 shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/corporate-learning/capabilities-center.png"
                  alt="Corporate learning platform capabilities"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(109,64,192,0.35),rgba(0,0,0,0.3))' }} aria-hidden="true" />
                {/* Stats overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[['1,100+','Modules'],['14','Countries'],['26+','Years']].map(([n, l], i) => (
                      <div key={i} className="p-3 rounded-[10px] bg-black/50 backdrop-blur-sm border border-white/10 text-center">
                        <div className="text-[16px] font-extrabold text-white leading-none">{n}</div>
                        <div className="text-[9px] text-white/50 uppercase tracking-wide mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Accordion */}
            <Reveal delay={0.1}>
              <div className="rounded-[16px] bg-white border border-gray-200 shadow-sm p-6">
                {SOLUTIONS.map((sol, idx) => (
                  <AccordionItem
                    key={idx}
                    sol={sol}
                    idx={idx}
                    open={openIdx === idx}
                    onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Industries served */}
          <Reveal className="mt-12 pt-10 border-t border-gray-200">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">Industries served</p>
            <div className="flex flex-wrap gap-2">
              {CLIENTS.map((cl, ci) => (
                <span key={ci} className="text-[12px] font-medium px-3 py-1.5 rounded-full text-gray-600 bg-gray-50 border border-gray-200">
                  {cl}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA
        heading="Build your enterprise learning ecosystem"
        body="From LMS selection to content production to managed hosting — WHBS is your end-to-end L&D technology partner."
        primaryLabel="Talk to an L&D Expert"
        primaryHref="/contact"
        secondaryLabel="LMS Development"
        secondaryHref="/services/lms-development"
        accentColor="#A78BFA"
      />
    </>
  )
}
