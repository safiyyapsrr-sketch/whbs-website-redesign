import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Content Transformation — Flash to HTML5 — WHBS',
  description: 'Convert legacy Flash courseware to HTML5, transform ILT materials to eLearning, and future-proof your training content library for all devices.',
  openGraph: { title: 'Content Transformation — White House Business Solutions', description: 'Flash to HTML5, ILT to eLearning — future-proof your content library.' },
}

const SERVICES = [
  { title: 'Flash to HTML5 Conversion', body: 'Rebuild .swf-based WBT and CBT modules as modern HTML5/CSS3/JavaScript courseware. Interactive animations, assessments, and navigation logic fully recreated.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/></svg> },
  { title: 'ILT to eLearning Conversion', body: 'Instructor-led training materials — slide decks, facilitator guides, printed workbooks — restructured for self-paced asynchronous delivery with narration and interactivity.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h7"/></svg> },
  { title: 'Legacy Content Audit', body: 'Full inventory of your content library: instructional currency assessment, compliance risk ranking, and a prioritisation matrix for conversion or retirement.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
  { title: 'SCORM Repackaging', body: 'Legacy content repackaged to SCORM 1.2, SCORM 2004, or xAPI with tracking codes validated across your target LMS platform.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg> },
  { title: 'Multi-Device Optimisation', body: 'All converted content tested across Chrome, Firefox, Safari, and Edge on desktop, tablet, and mobile — including iOS and Android native browsers.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 18h6"/></svg> },
  { title: 'Accessibility Remediation', body: 'WCAG 2.1 AA compliance review and remediation of converted assets — alt text, keyboard navigation, colour contrast, and screen reader compatibility.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M7 13c1.5 1 3.2 1.5 5 1.5s3.5-.5 5-1.5M12 14.5V20M9 20l3-3 3 3"/></svg> },
]

const PROCESS = [
  { step: '01', title: 'Content Audit', body: 'Inventory all legacy assets, assess instructional currency, rank by business criticality and compliance risk.' },
  { step: '02', title: 'Prioritisation', body: 'Build a conversion roadmap ordered by regulatory importance, audience size, and content shelf-life.' },
  { step: '03', title: 'Rebuild or Rescript', body: 'High-value modules rebuilt natively in HTML5; lower-priority content rescripted into modern microlearning formats.' },
  { step: '04', title: 'QA & Repackage', body: 'SCORM/xAPI packaging, cross-browser testing, accessibility audit, and LMS upload with tracking validation.' },
]

export default function ContentTransformationPage() {
  return (
    <>
      {/* ANIMATED HERO */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/content-transformation-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(30,0,8,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(251,113,133,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(251,113,133,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#FB7185',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#E11D48,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#FB7185' }}>Content Transformation</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#FB7185' }}>
            Content Transformation
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Future-proof your entire<br />content library
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">WHBS converts Flash courseware to HTML5, restructures ILT materials for digital delivery, and ensures every asset works on any device with full SCORM compliance.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <Reveal><h2 className="text-[32px] font-extrabold tracking-tight text-gray-900 mb-3 text-center">Transformation services</h2></Reveal>
          <Reveal>
            <p className="text-[15px] text-gray-500 max-w-[560px] mx-auto text-center mb-12">
              We bridge the gap between legacy limitations and future-ready digital learning ecosystems.
            </p>
          </Reveal>

          {/* Bento grid — image tiles + numbered service tiles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-20">

            {/* Image tile 1 — spans 2 cols */}
            <Reveal className="md:col-span-2">
              <div className="relative overflow-hidden rounded-[16px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ height: 220 }}>
                <Image src="/images/services/transformation-main.jpg" alt="WHBS content transformation team at work" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            {/* Service 01 */}
            <Reveal delay={0.05}>
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div>
                  <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#FDF2F8', color: '#F472B6' }}>{SERVICES[0].icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[0].title}</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65] line-clamp-3">{SERVICES[0].body}</p>
              </div>
            </Reveal>

            {/* Service 02 */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div>
                  <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#FCE7F3', color: '#E879A0' }}>{SERVICES[1].icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[1].title}</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65] line-clamp-3">{SERVICES[1].body}</p>
              </div>
            </Reveal>

            {/* Service 03 */}
            <Reveal delay={0.15}>
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div>
                  <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#FAE8FF', color: '#D44FA5' }}>{SERVICES[2].icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[2].title}</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65] line-clamp-3">{SERVICES[2].body}</p>
              </div>
            </Reveal>

            {/* Service 04 */}
            <Reveal delay={0.2}>
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div>
                  <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#F5D0FE', color: '#C026D3' }}>{SERVICES[3].icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[3].title}</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65] line-clamp-3">{SERVICES[3].body}</p>
              </div>
            </Reveal>

            {/* Image tile 2 — spans 2 cols */}
            <Reveal delay={0.05} className="md:col-span-2">
              <div className="relative overflow-hidden rounded-[16px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ height: 220 }}>
                <Image src="/images/services/transformation-meeting.jpg" alt="WHBS client transformation strategy session" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            {/* Service 05 */}
            <Reveal delay={0.25}>
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div>
                  <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#FDF2F8', color: '#F472B6' }}>{SERVICES[4].icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[4].title}</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65] line-clamp-3">{SERVICES[4].body}</p>
              </div>
            </Reveal>

            {/* Image tile 3 — single col */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[16px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ height: 220 }}>
                <Image src="/images/services/transformation-workspace.jpg" alt="WHBS digital workspace and content tooling" fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
              </div>
            </Reveal>

            {/* Service 06 — wider, spans 2 cols, icon top-right like reference */}
            <Reveal delay={0.3} className="md:col-span-2">
              <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between" style={{ minHeight: 220 }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-[13px] font-extrabold" style={{ background: '#F5D0FE', color: '#C026D3' }}>{SERVICES[5].icon}</div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{SERVICES[5].title}</h3>
                  </div>
                  <span className="flex-shrink-0" style={{ color: '#F472B6' }} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M7 13c1.5 1 3.2 1.5 5 1.5s3.5-.5 5-1.5M12 14.5V20M9 20l3-3 3 3"/></svg>
                  </span>
                </div>
                <p className="text-[13px] text-gray-600 leading-[1.65]">{SERVICES[5].body}</p>
              </div>
            </Reveal>

          </div>
          <Reveal>
            <h3 className="text-[22px] font-extrabold text-gray-900 mb-12 text-center">Four-stage transformation roadmap</h3>
          </Reveal>
          {/* Interactive timeline — horizontal desktop, vertical mobile */}
          <Reveal>
            <div className="relative">

              {/* ── DESKTOP: horizontal connected line ── */}
              <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] z-0" aria-hidden="true"
                style={{ background: 'linear-gradient(90deg,#F472B6 0%,#E879A0 33%,#D44FA5 66%,#C026D3 100%)' }}
              />
              {/* Animated pulse dot travelling the line */}
              <div className="hidden lg:block absolute top-[44px] h-4 w-4 rounded-full z-10 animate-pulse" aria-hidden="true"
                style={{ background: '#F472B6', left: 'calc(12.5%+8px)', boxShadow: '0 0 0 4px rgba(244,114,182,0.25)' }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">
                {PROCESS.map((p, i) => {
                  const colors = ['#F472B6','#E879A0','#D44FA5','#C026D3']
                  const bgColors = ['#FDF2F8','#FCE7F3','#FAE8FF','#F5D0FE']
                  const color = colors[i]
                  const bg = bgColors[i]
                  return (
                    <div key={`roadmap-${i}`} className="relative flex flex-col items-center lg:items-center group">
                      {/* Mobile: vertical line between nodes */}
                      {i < PROCESS.length - 1 && (
                        <div className="lg:hidden absolute left-[27px] top-[54px] bottom-0 w-[2px] z-0"
                          style={{ background: `linear-gradient(180deg, ${color} 0%, ${colors[i+1]} 100%)` }}
                          aria-hidden="true"
                        />
                      )}
                      {/* Mobile layout: horizontal */}
                      <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 w-full lg:w-auto mb-8 lg:mb-0">
                        {/* Step circle */}
                        <div className="flex-shrink-0 relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `linear-gradient(135deg,${color},${colors[Math.min(i+1,3)]})` }}
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-white/60 text-[9px] font-bold leading-none">{p.step}</span>
                            {/* Stage icon */}
                            {i === 0 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/></svg>}
                            {i === 1 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h7"/></svg>}
                            {i === 2 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                            {i === 3 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="lg:text-center lg:mt-6 flex-1">
                          <div className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-2"
                            style={{ color, background: bg, border: `1px solid ${color}30` }}
                          >
                            Stage {i + 1}
                          </div>
                          <h4 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">{p.title}</h4>
                          <p className="text-[13px] text-gray-600 leading-[1.7] max-w-[200px] lg:mx-auto">{p.body}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA heading="Modernise your legacy training library" body="Send us a sample .swf file or ILT deck — we'll provide a conversion estimate within 48 hours." primaryLabel="Request a Quote" primaryHref="/contact" secondaryLabel="eLearning Services" secondaryHref="/services/elearning-development" accentColor="#F472B6" />
    </>
  )
}
