'use client'

import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

const STATS = [
  { n: '26+',    label: 'Years in Operation',    desc: 'Founded August 1999 — every platform shift navigated.',           color: '#0066FF' },
  { n: '1,100+', label: 'Projects Delivered',    desc: 'Government portals to single-company LMS across 14 countries.',   color: '#00A76F' },
  { n: '14',     label: 'Countries Served',       desc: 'India, Brunei, Malaysia, Singapore, UK, and more.',               color: '#6E41C0' },
  { n: '15',     label: 'Technology Partners',   desc: 'Moodle, AWS, Google, Microsoft, and industry ecosystems.',         color: '#D97706' },
]

const TRUST = ['SCORM 1.2 & 2004', 'xAPI (Tin Can)', 'WCAG 2.1 AA', 'LTI 1.3', 'iGOT Karmayogi Approved', 'ISO 9001 Process']

export default function ClientTrustSection() {
  return (
    <section className="section-py-lg bg-white">
      <div className="container-xl">

        <Reveal className="text-center mb-16">
          <span className="eyebrow mb-5">Why Clients Choose WHBS</span>
          <h2 className="t-h2 text-gray-900 mt-4 max-w-[580px] mx-auto">Two decades of consistent delivery — no exceptions</h2>
          <p className="text-lead text-gray-500 mt-5 max-w-[480px] mx-auto">Every metric is drawn from real project records, not marketing estimates.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Stats 2×2 */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={`st-${i}`} className="p-7 rounded-[16px] bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="text-[46px] font-extrabold leading-none tracking-tight mb-2" style={{ color: s.color }}>{s.n}</div>
                  <div className="text-[14px] font-bold text-gray-800 mb-1.5">{s.label}</div>
                  <div className="text-[13px] text-gray-500 leading-[1.65]">{s.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Image + trust chips */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              {/* Image */}
              <div className="relative rounded-[14px] overflow-hidden border border-gray-100" style={{ aspectRatio: '16/8' }}>
                <Image
                  src="/images/home/hero-digital-learning.jpg"
                  alt="WHBS enterprise digital learning"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* iGOT badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"/>
                    <span className="text-[12px] font-semibold text-gray-800">iGOT Karmayogi — Approved Developer</span>
                  </div>
                </div>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2.5">
                {TRUST.map((t, ti) => (
                  <div key={`ti-${ti}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-default">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="7" fill="#00A76F"/><path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[12px] font-semibold text-gray-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Testimonial band */}
        <Reveal>
          <div className="p-8 lg:p-10 rounded-[16px] bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-[18px] lg:text-[20px] font-semibold leading-[1.6] mb-4">
                  &ldquo;WHBS demonstrated a high level of professionalism, knowledge, and team capability. The team was very prompt and the project was delivered on time.&rdquo;
                </p>
                <div className="text-[13px] text-blue-200">
                  <span className="font-semibold text-white">Alif Technologies SDN BHD</span> · Ministry of Education, Brunei Darussalam
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20">
                  <span className="text-[13px] font-semibold">Verified Client Commendation</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#FFB020" aria-hidden="true">
                      <path d="M9 1.5l2.09 4.26L16 6.62l-3.5 3.41.83 4.82L9 12.27l-4.33 2.58.83-4.82L2 6.62l4.91-.86z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
