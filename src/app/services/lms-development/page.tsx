'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import InnerCTA from '@/components/ui/InnerCTA'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_CARDS = [
  {
    iconChar: '01',
    title: 'LMS Installation & Deployment',
    color: '#0066FF', bg: '#EFF6FF', border: '#BFDBFE',
    description: 'Enterprise-grade Moodle LMS setup, hosting configuration, server hardening, and performance optimisation — production-ready infrastructure from day one.',
    features: [
      'Enterprise LMS setup',
      'Hosting configuration',
      'Security hardening',
      'Performance optimisation',
    ],
  },
  {
    iconChar: '02',
    title: 'Custom LMS Development',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    description: "Bespoke LMS feature development, workflow automation, third-party integrations, and enterprise functionality built specifically for your organisation's requirements.",
    features: [
      'Bespoke LMS features',
      'Workflow automation',
      'Third-party integrations',
      'Enterprise functionality development',
    ],
  },
  {
    iconChar: '03',
    title: 'LMS Customisation & Branding',
    color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
    description: 'Custom UI/UX design, branding implementation, full theme development, and learner experience optimisation across every device and viewport.',
    features: [
      'Custom UI/UX',
      'Branding implementation',
      'Theme development',
      'Learner experience optimisation',
    ],
  },
  {
    iconChar: '04',
    title: 'Advanced Analytics & Reporting',
    color: '#059669', bg: '#ECFDF5', border: '#A7F3D0',
    description: 'Custom learning dashboards, executive reporting suites, performance analytics, and compliance reporting — delivering actionable insight at every organisational level.',
    features: [
      'Learning dashboards',
      'Executive reporting',
      'Performance analytics',
      'Compliance reporting',
    ],
  },
  {
    iconChar: '05',
    title: 'Mobile & Offline Learning',
    color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    description: 'Moodle Mobile integration, offline content access for field and remote learners, cross-device learning continuity, and mobile-first user experience design.',
    features: [
      'Moodle Mobile integration',
      'Offline content access',
      'Cross-device learning',
      'Mobile-first experience',
    ],
  },
  {
    iconChar: '06',
    title: 'Multi-Tenant & Organisation Management',
    color: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE',
    description: 'Department segregation, multiple organisation support on a single instance, role hierarchy management, and enterprise governance controls for large-scale deployments.',
    features: [
      'Department segregation',
      'Multiple organisation support',
      'Role hierarchy management',
      'Enterprise governance controls',
    ],
  },
]

const PROCESS_STEPS = [
  {
    num: '01', iconChar: 'D', color: '#0066FF', bg: '#EFF6FF',
    title: 'Project Discovery & Technical Assessment',
    summary: 'We conduct a structured technical assessment of your environment, stakeholder priorities, and integration requirements before any architecture decisions are made.',
    details: [
      'Technical infrastructure assessment and gap analysis',
      'Stakeholder interviews across IT, operations, and procurement',
      'Business requirements documentation and KPI definition',
      'Integration dependency mapping (HRMS, SSO, ERP, content libraries)',
      'Project scope, timeline, and resource planning',
    ],
  },
  {
    num: '02', iconChar: 'A', color: '#7C3AED', bg: '#F5F3FF',
    title: 'Solution Architecture & Infrastructure Design',
    summary: 'We design the hosting topology, database architecture, plugin stack, and integration plan with a clear, agreed project roadmap.',
    details: [
      'Hosting strategy selection (cloud / on-premise / hybrid)',
      'Server sizing and infrastructure design',
      'Plugin architecture and dependency specification',
      'Third-party integration design (ERP, HRMS, SSO)',
      'Production schedule and milestone agreement',
    ],
  },
  {
    num: '03', iconChar: 'C', color: '#059669', bg: '#ECFDF5',
    title: 'LMS Development & Configuration',
    summary: 'Theme build, plugin development, workflow configuration, security hardening, and integration implementation across the full stack.',
    details: [
      'Custom theme and UI component development',
      'Plugin coding, testing, and documentation',
      'Enrollment workflow and automation configuration',
      'Security hardening and access control setup',
      'Cross-browser and cross-device QA testing',
    ],
  },
  {
    num: '04', iconChar: 'T', color: '#D97706', bg: '#FFFBEB',
    title: 'UAT, Feedback & Optimisation',
    summary: 'Structured user acceptance testing with real learner groups, stakeholder reviews, issue resolution, and performance profiling.',
    details: [
      'User acceptance testing with real learner cohorts',
      'Stakeholder review sessions and formal sign-off',
      'Issue triage, resolution sprints, and regression testing',
      'Performance profiling and load testing',
      'Feedback implementation and final optimisation',
    ],
  },
  {
    num: '05', iconChar: 'G', color: '#0891B2', bg: '#ECFEFF',
    title: 'Go-Live, Training & Ongoing Support',
    summary: 'Phased deployment, administrator and super-user training, production monitoring, and annual SLA maintenance packages.',
    details: [
      'Phased go-live with hypercare support window',
      'Administrator and super-user training sessions',
      'Production monitoring and alerting configuration',
      'Annual SLA — upgrades, patches, and performance tuning',
      'Dedicated technical account management',
    ],
  },
]

const TECHNOLOGIES = [
  'Moodle 4.x', 'SCORM 1.2', 'SCORM 2004', 'xAPI / Tin Can',
  'LTI 1.3', 'SAML 2.0', 'LDAP', 'OAuth 2.0',
  'Ionic Framework', 'Angular', 'PHP', 'MySQL / PostgreSQL',
  'AWS / Azure / GCP', 'WCAG 2.1',
]

const CASE_STUDIES = [
  {
    client: 'Government of India — iGOT Karmayogi',
    color: '#059669', bg: '#ECFDF5',
    outcome: 'Developed 5 SCORM-compliant eLearning modules live on India\'s national civil servant training platform across Customs, Railways, Water Resources, Corporate Affairs, and Animal Husbandry.',
  },
  {
    client: 'Ministry of Education, Brunei Darussalam',
    color: '#0066FF', bg: '#EFF6FF',
    outcome: 'Full Moodle LMS theme design, curriculum mapping by certified instructional designers, and on-time eLearning module delivery via Alif Technologies SDN BHD.',
  },
  {
    client: 'Ministries of Education, Malaysia & Singapore',
    color: '#7C3AED', bg: '#F5F3FF',
    outcome: 'LMS infrastructure and eLearning content for national education authorities, with multilingual and regional compliance requirements delivered on schedule.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function LmsDevelopmentPage() {
  const [openStep, setOpenStep] = useState<number | null>(null)

  return (
    <>
      {/* ── ANIMATED HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/lms-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(2,8,36,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(96,165,250,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#60A5FA',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#0066FF,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#60A5FA' }}>LMS Development</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#60A5FA' }}>
            LMS Development
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Enterprise Moodle LMS Services
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">WHBS specialises in Moodle customisation, deployment, and long-term management for corporate training providers, universities, and government agencies across 14 countries.</p>
        </div>
      </section>

      {/* ── iLEARNBAY SPOTLIGHT ───────────────────────────────────────── */}
      <section className="px-6 py-14 bg-white border-b border-gray-200">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-br from-blue-50 to-white rounded-[24px] border border-blue-200 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 65%)', transform: 'translate(30%,-30%)' }} aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-[12px] bg-[#0066FF] flex items-center justify-center text-white font-extrabold text-[18px] flex-shrink-0">iL</div>
                <div>
                  <div className="text-[22px] font-extrabold text-gray-900 tracking-tight">iLearnBay</div>
                  <div className="text-[13px] text-[#0066FF] font-semibold">Advanced Tech Learning Platform</div>
                </div>
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.75] mb-6 max-w-[520px]">
                iLearnBay is a leading online learning platform offering industry-ready courses in Data Science, AI, Machine Learning, and advanced technology — delivered by working professionals and mentored by industry experts. WHBS provides LMS infrastructure and eLearning development support for next-generation learning experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {['Data Science', 'AI & ML', 'Industry Mentors', 'Job Guarantee', 'Live Projects'].map((tag, ti) => (
                  <span key={`il-${ti}`} className="text-[12px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] border border-blue-200">{tag}</span>
                ))}
              </div>
              <a href="https://ilearnbay.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-[#0066FF] text-white font-semibold text-[14px] no-underline hover:bg-[#0052CC] transition-colors shadow-md">
                Visit iLearnBay
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M7 1h5v5M12 1L5 8M3 3H1v9h9V10"/>
                </svg>
              </a>
            </div>
            <div className="flex-shrink-0 w-full lg:w-80">
              <div className="rounded-[16px] overflow-hidden border border-blue-200 shadow-xl bg-white">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 mx-3 bg-white rounded px-3 py-1 text-[10px] text-gray-400 border border-gray-200">ilearnbay.com</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-700 to-indigo-800">
                  <div className="text-white text-[11px] font-bold uppercase tracking-wider mb-3 opacity-70">iLearnBay</div>
                  <div className="text-white text-[18px] font-extrabold mb-1 leading-tight">Advance Your Tech Career</div>
                  <div className="text-blue-200 text-[12px] mb-4">Industry-ready courses with job guarantee</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Data Science', 'AI & ML', 'Python', 'Power BI'].map((c, ci) => (
                      <div key={`mc-${ci}`} className="bg-white/10 rounded-[8px] px-3 py-2 text-[11px] text-white font-semibold">{c}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full w-4/5" />
                    </div>
                    <span className="text-[10px] text-green-300 font-bold">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 SERVICE CARDS ───────────────────────────────────────────── */}
      <section className="px-6 bg-gray-50 border-b border-gray-200" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-xl">
          <Reveal className="mb-12">
            <span className="eyebrow mb-4">What We Build</span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4 max-w-[560px]">
              Every capability your LMS deployment requires
            </h2>
            <p className="text-[16px] text-gray-600 max-w-[500px] leading-[1.7]">
              From initial deployment to long-term managed support — WHBS covers the full Moodle lifecycle.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card, ci) => (
              <Reveal key={`sc-${ci}`} delay={ci * 0.07}>
                <div className="group bg-white rounded-[16px] border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-[3px]" style={{ background: card.color }} aria-hidden="true" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[28px] mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: card.bg, border: `1px solid ${card.border}` }}>
                      <span className="text-[14px] font-extrabold" style={{ color: card.color }}>{card.iconChar}</span>
                    </div>
                    <h3 className="text-[16px] font-extrabold text-gray-900 tracking-tight mb-3 group-hover:text-[#0066FF] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] text-gray-600 leading-[1.75] mb-5 flex-1">{card.description}</p>
                    <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-100">
                      {card.features.map((f, fi) => (
                        <li key={`cf-${ci}-${fi}`} className="flex items-center gap-2 text-[12px] text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: card.color }} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PROCESS TIMELINE ──────────────────────────────── */}
      <section className="px-6 bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container-xl">
          <Reveal className="mb-14">
            <span className="eyebrow mb-4">Our Process</span>
            <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4 max-w-[580px]">
              A structured delivery journey — from brief to go-live
            </h2>
            <p className="text-[16px] text-gray-600 max-w-[520px] leading-[1.7]">
              Five clearly defined phases with stakeholder checkpoints at every stage. Click any step to see the technical detail.
            </p>
          </Reveal>

          {/* Timeline with connecting line */}
          <div className="relative">
            <div className="absolute left-7 top-8 bottom-8 w-0.5 hidden md:block pointer-events-none"
              style={{ background: 'linear-gradient(to bottom,#BFDBFE,#EFF6FF 20%,#BFDBFE 40%,#A7F3D0 60%,#BFDBFE 80%,#EFF6FF)', zIndex: 0 }}
              aria-hidden="true" />

            <div className="flex flex-col gap-4">
              {PROCESS_STEPS.map((step, si) => {
                const isOpen = openStep === si
                return (
                  <Reveal key={`ps-${si}`} delay={si * 0.06}>
                    <div className="relative">
                      <button
                        onClick={() => setOpenStep(isOpen ? null : si)}
                        className="w-full flex items-start gap-5 p-5 md:p-6 bg-white rounded-[16px] border border-gray-200 shadow-sm hover:shadow-md cursor-pointer text-left transition-all duration-200 relative z-10"
                        aria-expanded={isOpen}
                        style={{ borderColor: isOpen ? `${step.color}60` : undefined, boxShadow: isOpen ? `0 0 0 1.5px ${step.color}30, 0 8px 24px rgba(15,23,42,0.08)` : undefined }}
                      >
                        {/* Step circle */}
                        <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[22px] transition-all duration-300"
                          style={{ background: isOpen ? step.color : step.bg, transform: isOpen ? 'scale(1.1)' : 'scale(1)', boxShadow: isOpen ? `0 4px 16px ${step.color}40` : undefined }}>
                          <span className="text-[13px] font-extrabold text-white">{step.iconChar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: step.color }}>
                                Phase {step.num}
                              </span>
                              <h3 className="text-[16px] font-extrabold text-gray-900 tracking-tight mt-0.5 group-hover:text-[#0066FF]">{step.title}</h3>
                            </div>
                            <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5"
                              style={{ background: isOpen ? step.bg : 'white', borderColor: isOpen ? step.color : '#E2E8F0' }}>
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={step.color} strokeWidth={2.5}
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                <path d="M2 4l4 4 4-4" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-[13.5px] text-gray-600 leading-[1.6] mt-1.5">{step.summary}</p>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden">
                            <div className="ml-5 mt-2 rounded-[12px] p-5 border"
                              style={{ background: step.bg, borderColor: `${step.color}30` }}>
                              <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: step.color }}>
                                What this phase covers
                              </p>
                              <ul className="flex flex-col gap-2">
                                {step.details.map((d, di) => (
                                  <li key={`sd-${si}-${di}`} className="flex items-start gap-2.5 text-[13.5px] text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: step.color }} aria-hidden="true" />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ──────────────────────────────────────────── */}
      <section className="px-6 bg-white border-t border-gray-200" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container-xl">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-5">Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((t, ti) => (
                <span key={`tech-${ti}`}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-full text-gray-600 bg-gray-100 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-[#0066FF] transition-colors duration-200">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA
        heading="Ready to deploy your enterprise LMS?"
        body="From discovery to go-live — WHBS manages the full Moodle lifecycle. Book a call with a solutions architect."
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
        accentColor="#0066FF"
      />
    </>
  )
}
