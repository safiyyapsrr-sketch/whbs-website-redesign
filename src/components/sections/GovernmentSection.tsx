'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GOV_MODULES } from '@/lib/data'

export default function GovernmentSection() {
  const modules = GOV_MODULES.filter(m => !m.highlight)
  return (
    <section className="relative overflow-hidden" aria-label="Government of India — iGOT Karmayogi">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-enterprise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(5,10,25,0.88) 0%,rgba(4,27,60,0.82) 55%,rgba(0,55,30,0.80) 100%)' }} aria-hidden="true" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-xl section-py">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: headline + credentials */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-green-300">Government of India — iGOT Karmayogi</span>
            </div>
            <h2 className="t-h2 text-white mb-5 max-w-[520px]">
              eLearning for India's national civil service platform
            </h2>
            <p className="text-lead text-white/55 max-w-[460px] mb-8">
              WHBS is an approved eLearning developer on the iGOT Karmayogi portal — delivering SCORM-compliant, WCAG 2.1 AA accessible modules across key Government of India ministries.
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-3 mb-9">
              {['SCORM 1.2 Compliant', 'WCAG 2.1 AA', 'iGOT Approved Developer', 'Hindi / English'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="7" fill="#00A76F"/>
                    <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12px] font-medium text-white/75">{t}</span>
                </div>
              ))}
            </div>

            <Link
              href="/solutions/government"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[10px] text-[14px] font-bold text-[#0A0F1E] bg-white hover:bg-gray-100 no-underline transition-colors"
            >
              View all government work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.3} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
            </Link>
          </div>

          {/* Right: module list */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-green-400 mb-5">Modules live on portal.igotkarmayogi.gov.in</p>
            <div className="flex flex-col gap-2.5">
              {modules.map((mod, i) => (
                <a
                  key={i}
                  href={mod.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 rounded-[12px] border border-white/10 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/20 no-underline transition-all duration-200"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-8 h-8 rounded-[7px] flex items-center justify-center flex-shrink-0 bg-green-500/15 text-green-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width="15" height="15" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-green-400 mb-0.5">{mod.tag}</div>
                      <div className="text-[13.5px] font-semibold text-white leading-tight truncate group-hover:text-green-200 transition-colors">{mod.title}</div>
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={2} className="flex-shrink-0 group-hover:stroke-green-400 transition-colors" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
