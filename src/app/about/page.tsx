'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WHY_CELLS } from '@/lib/data'
import Reveal from '@/components/ui/Reveal'
import CtaSection from '@/components/sections/CtaSection'

const TIMELINE = [
  { year: '1999', event: 'Founded',    title: 'White House Business Solutions incorporated', desc: 'Founded August 1999 in Chennai. Initial focus: multimedia production, CD-ROM based training, and early eLearning content for corporate clients.', color: '#0066FF' },
  { year: '2003', evet: 'Expansion',  title: 'International client engagements begin', desc: 'First international projects across Southeast Asia. Early Moodle LMS work positions WHBS as an enterprise specialist.', color: '#00A76F' },
  { year: '2007', event: 'Capability', title: 'Mobile and ERP development added', desc: 'WHBS expands into enterprise resource planning and mobile application development, diversifying beyond eLearning.', color: '#6E41C0' },
  { year: '2012', event: 'Partnership', title: 'Cambridge, UK publishing partnership begins', desc: 'A long-term multimedia production partnership with a Cambridge-based educational publisher — sustained for seven consecutive years.', color: '#D97706' },
  { year: '2017', event: 'Innovation', title: 'Industrial IoT division established', desc: 'WHBS launches an industrial IoT practice connecting production machinery with real-time dashboards and SCADA integration.', color: '#0891B2' },
  { year: '2020', event: 'Technology', title: 'Smartbooks V7.0 ERP platform released', desc: 'Launch of Smartbooks V7.0 — integrated ERP covering e-commerce, inventory, orders, and accounting.', color: '#E11D48' },
  { year: '2023', event: 'Government', title: 'iGOT Karmayogi — Approved Developer status', desc: 'WHBS achieves approved eLearning developer status on India\'s national civil servant training platform.', color: '#00A76F' },
  { year: 'Now',  event: 'Present',    title: '14 countries, 1,100+ projects delivered', desc: 'Active across Southeast Asia, South Asia, the Middle East, and the UK. 26 years of uninterrupted operation.', color: '#0066FF' },
]

const VALUES = [
  { title: 'Work Ethics First',   body: 'We deliver what we commit to. On-time delivery is the baseline, not a differentiator.', icon: '⚡' },
  { title: 'Domain Expertise',    body: 'Deep knowledge of eLearning and enterprise software — not generalist IT consulting.', icon: '🎯' },
  { title: 'Client Transparency', body: 'Clear scope, honest timelines, and direct communication at every stage.', icon: '🔍' },
  { title: 'Technical Excellence',body: 'Accessibility compliance, performance benchmarks, and code quality are non-negotiable.', icon: '⚙️' },
]

const WHY_STORY = [
  { title: 'No year without a delivery', body: 'Since 1999 WHBS has not missed a single fiscal year without active project delivery. That consistency is not a marketing claim — it is the baseline expectation of every client engagement we accept.', label: '26+ Years' },
  { title: 'Government-grade standards on every project', body: 'WHBS is an approved eLearning developer on India\'s iGOT Karmayogi platform. The security, accessibility, and compliance standards we apply to government work are the same standards we bring to every enterprise client.', label: 'iGOT Approved' },
  { title: 'Full-stack in-house — no subcontracting', body: 'Instructional designers, Moodle engineers, graphic designers, DevOps, and mobile developers are all employees — not contractors. That means a single SLA, a single point of accountability, and no handoff gaps.', label: 'Fully In-House' },
  { title: 'Long-term relationships over project transactions', body: 'Our seven-year Cambridge partnership, our repeat Ministry of Education engagements, and our multi-year LMS SLA clients are the best evidence of what WHBS considers a successful delivery.', label: '7yr avg. tenure' },
]

export default function AboutPage() {
  const [openValue, setOpenValue] = useState<number | null>(0)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-28 px-6" style={{ background: 'linear-gradient(140deg,#060D1F 0%,#0D1425 55%,#071635 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.04) 1px,transparent 0)', backgroundSize: '100px 100px' }} aria-hidden="true"/>
        <div className="absolute pointer-events-none" style={{ top: '-8%', left: '-4%', width: '50%', height: '70%', background: 'radial-gradient(ellipse,rgba(0,102,255,0.14) 0%,transparent 65%)', filter: 'blur(40px)' }} aria-hidden="true"/>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/35 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <span className="text-white/60 font-medium">About Us</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true"/>
                <span className="text-[11px] font-semibold text-white/55 tracking-wide uppercase">Est. Chennai, 1999</span>
              </div>
              <h1 className="t-h1 font-extrabold text-white mb-5 max-w-[620px]">Pioneering digital learning &amp; enterprise systems since 1999</h1>
              <p className="text-lead text-white/55 mb-10 max-w-[520px]">For over two decades, White House Business Solutions has engineered technology infrastructure for governments and enterprises.</p>
              <div className="flex flex-wrap gap-3">
                {[['26+','Years'],['1,100+','Projects'],['14','Countries'],['15','Partners']].map(([n,l],i)=>(
                  <div key={i} className="text-center px-5 py-3.5 rounded-[10px] border border-white/10 bg-white/[0.05]">
                    <div className="text-[28px] font-extrabold text-white leading-none">{n}</div>
                    <div className="text-[11px] text-white/40 font-medium mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-[16px] overflow-hidden border border-white/10" style={{ aspectRatio: '16/10' }}>
                <Image src="/images/about/about-hero.jpg" alt="White House Business Solutions Chennai office" fill sizes="50vw" className="object-cover opacity-75"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-8 rounded-[16px] bg-blue-50 border border-blue-100 h-full">
                <div className="w-9 h-9 rounded-[8px] bg-[#0066FF] flex items-center justify-center mb-5" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-4">Mission</h2>
                <p className="text-[15px] text-gray-600 leading-[1.8]">To deliver highly customisable, robust, and scalable learning platforms and enterprise resource tools that empower organisations to streamline knowledge delivery, improve regulatory compliance, and optimise operational efficiency.</p>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="p-8 rounded-[16px] bg-green-50 border border-green-100 h-full">
                <div className="w-9 h-9 rounded-[8px] bg-[#00A76F] flex items-center justify-center mb-5" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-4">Vision</h2>
                <p className="text-[15px] text-gray-600 leading-[1.8]">To be the most trusted technology partner for digital transformation in the eLearning and enterprise software space — known for deep expertise, delivery integrity, and long-term client relationships built on results.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPANY NARRATIVE */}
      <section className="section-py bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="eyebrow mb-5">26 Years of Delivery</span>
              <h2 className="t-h2 text-gray-900 mt-4 mb-5">From a Chennai technology firm to a 14-country enterprise partner</h2>
              <p className="text-body text-gray-600 mb-5">Founded in August 1999 in Chennai, Tamil Nadu, WHBS began as a multimedia and eLearning production house. Over two decades the company grew into a full-service enterprise technology firm delivering LMS platforms, custom courseware, ERP systems, mobile applications, and industrial IoT.</p>
              <p className="text-body text-gray-600 mb-7">The company&apos;s strength lies in its commitment to domain expertise: every project is managed by specialists who understand both the technology and the industry context.</p>
              <div className="flex flex-wrap gap-2.5">
                {['Chennai HQ','No.7 Pulla Avenue, Shenoy Nagar','Incorporated August 1999','iGOT Approved Developer'].map((b,i)=>(
                  <span key={i} className="tag tag-blue">{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative rounded-[14px] overflow-hidden border border-gray-200" style={{ aspectRatio: '4/3' }}>
                <Image src="/images/about/about-team.jpg" alt="WHBS team" fill sizes="50vw" className="object-cover"/>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE — fixed: vertical line behind content, not overlapping */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow mb-5">Company History</span>
            <h2 className="t-h2 text-gray-900 mt-4">Milestones since 1999</h2>
          </Reveal>
          <div className="max-w-[820px] mx-auto">
            {/* Timeline container — vertical line is a pseudo-element via the outer div */}
            <div className="relative pl-0 md:pl-16">
              {/* Vertical line — positioned absolutely to the LEFT of content, never inside */}
              <div
                className="hidden md:block absolute top-3 bottom-3 w-[2px] z-0"
                style={{ left: 19, background: 'linear-gradient(180deg,#0066FF,#00A76F,#6E41C0,#D97706,#0891B2,#E11D48,#00A76F,#0066FF)' }}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-6">
                {TIMELINE.map((t, ti) => (
                  <Reveal key={ti} delay={ti * 0.04}>
                    <div className="relative flex items-start gap-0">
                      {/* Dot — positioned to sit ON the line (left: 19 - half of 14px dot = 12px) */}
                      <div
                        className="hidden md:block absolute z-10 flex-shrink-0"
                        style={{ left: -6, top: 18, width: 14, height: 14, borderRadius: '50%', background: t.color, border: '3px solid white', boxShadow: `0 0 0 2px ${t.color}40` }}
                        aria-hidden="true"
                      />
                      {/* Year badge — sits to the left of the line */}
                      <div
                        className="hidden md:flex flex-shrink-0 items-center justify-end pr-5"
                        style={{ width: 0, minWidth: 0, overflow: 'visible', position: 'absolute', left: -76, top: 12 }}
                      >
                        <span
                          className="text-[13px] font-extrabold tabular-nums whitespace-nowrap"
                          style={{ color: t.color }}
                        >{t.year}</span>
                      </div>
                      {/* Content card */}
                      <div className="flex-1 bg-gray-50 rounded-[12px] border border-gray-100 px-6 py-5 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                        <div className="md:hidden text-[17px] font-extrabold mb-2" style={{ color: t.color }}>{t.year}</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full"
                            style={{ color: t.color, background: `${t.color}12`, border: `1px solid ${t.color}22` }}>
                            {t.event}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-bold text-gray-900 mb-2">{t.title}</h3>
                        <p className="text-[13.5px] text-gray-600 leading-[1.72]">{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — accordion */}
      <section className="section-py bg-gray-50">
        <div className="container-xl">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow mb-5">Our Values</span>
            <h2 className="t-h2 text-gray-900 mt-4">What we stand for</h2>
          </Reveal>
          <div className="max-w-[680px] mx-auto flex flex-col gap-0 rounded-[16px] overflow-hidden border border-gray-200 bg-white shadow-sm">
            {VALUES.map((v, vi) => (
              <div key={vi} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenValue(openValue === vi ? null : vi)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer bg-transparent hover:bg-gray-50 transition-colors"
                  aria-expanded={openValue === vi}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 w-6 flex-shrink-0">
                      {String(vi + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-bold text-gray-900">{v.title}</span>
                  </div>
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    stroke={openValue === vi ? '#0066FF' : '#9CA3AF'} strokeWidth={2}
                    className="flex-shrink-0 transition-transform duration-250"
                    style={{ transform: openValue === vi ? 'rotate(180deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    <path d="M4 7l5 5 5-5"/>
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openValue === vi ? 120 : 0, opacity: openValue === vi ? 1 : 0 }}
                  aria-hidden={openValue !== vi}
                >
                  <p className="text-[14px] text-gray-600 leading-[1.75] px-7 pb-5 pt-0 ml-10">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORGANISATIONS CHOOSE WHBS — scroll storytelling */}
      {WHY_CELLS && WHY_CELLS.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-xl">
            <Reveal className="mb-14 text-center">
              <h2 className="t-h2 text-gray-900">Why organisations choose WHBS</h2>
              <p className="text-lead text-gray-500 mt-4 max-w-[420px] mx-auto">Four reasons that make WHBS the partner of choice for 56+ clients across 14 countries.</p>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: stacked story blocks */}
              <div className="flex flex-col gap-6">
                {WHY_STORY.map((s, si) => (
                  <Reveal key={si} delay={si * 0.07}>
                    <div className="flex gap-5 p-6 rounded-[14px] bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-250 group">
                      <div className="flex flex-col items-center gap-0 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          {String(si + 1).padStart(2, '0')}
                        </div>
                        {si < WHY_STORY.length - 1 && (
                          <div className="w-[1px] flex-1 mt-2" style={{ background: 'linear-gradient(180deg,#0066FF40,transparent)' }} aria-hidden="true"/>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full text-[#0066FF] bg-[#EBF2FF] border border-[#CCE0FF]">{s.label}</span>
                        </div>
                        <h3 className="text-[15px] font-bold text-gray-900 mb-2">{s.title}</h3>
                        <p className="text-[13.5px] text-gray-600 leading-[1.72]">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              {/* Right: sticky image */}
              <Reveal delay={0.1}>
                <div className="sticky top-[120px]">
                  <div className="relative rounded-[18px] overflow-hidden border border-gray-200 shadow-lg" style={{ aspectRatio: '4/5' }}>
                    <Image
                      src="/images/why-whbs/why-whbs-story.jpg"
                      alt="Why organisations choose WHBS"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(5,10,30,0.6) 0%,transparent 50%)' }} aria-hidden="true"/>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-2 gap-2">
                        {[['56+','Clients'],['26+','Years'],['14','Countries'],['1,100+','Projects']].map(([n,l],i)=>(
                          <div key={i} className="p-3 rounded-[8px] bg-black/40 backdrop-blur-sm border border-white/10 text-center">
                            <div className="text-[18px] font-extrabold text-white leading-none">{n}</div>
                            <div className="text-[9px] text-white/55 uppercase tracking-wide mt-0.5">{l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT STRIP */}
      <section className="section-py bg-gray-50 border-y border-gray-100">
        <div className="container-xl">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label:'Registered Office', value:'No.7, Pulla Avenue, Shenoy Nagar, Chennai — 600030, Tamil Nadu, India', color:'#0066FF', icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
                { label:'Contact', value:'+91-44-2561 9113 · +91 70100 37016', color:'#00A76F', icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                { label:'Business Hours', value:'Mon–Fri, 9:00 AM – 6:00 PM IST · info@whitehouseit.com', color:'#6E41C0', icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
              ].map((c,i)=>(
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-[12px] border border-gray-100">
                  <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background:`${c.color}10`, color:c.color }}>{c.icon}</div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-400 mb-1">{c.label}</div>
                    <div className="text-[14px] font-medium text-gray-800 leading-[1.6]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
