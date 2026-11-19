import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProcessSection from '@/components/sections/ProcessSection'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Services — White House Business Solutions',
  description: 'LMS development, eLearning content, ERP solutions, mobile apps, IoT automation — WHBS enterprise services across 14 countries.',
}

const LEARNING_SERVICES = [
  {
    title: 'LMS Development',
    sub: 'Moodle customisation, plugin engineering, multi-tenant deployment, and long-term LMS management for government and enterprise.',
    href: '/services/lms-development',
    color: '#0066FF',
    tags: ['Moodle', 'SCORM', 'LTI 1.3', 'SSO'],
    features: ['Custom theme & plugins', 'Multi-tenant setup', 'Long-term SLA support'],
  },
  {
    title: 'eLearning Development',
    sub: 'Instructionally designed courseware, interactive simulations, video production, and multilingual content for enterprise and government.',
    href: '/services/elearning-development',
    color: '#6E41C0',
    tags: ['SCORM 2004', 'xAPI', 'Articulate', 'HTML5'],
    features: ['Certified instructional design', 'Multilingual localisation', 'WCAG 2.1 AA'],
  },
  {
    title: 'Content Transformation',
    sub: 'Flash to HTML5 migration, ILT digitisation, and AI-assisted content conversion for future-proof training libraries.',
    href: '/services/content-transformation',
    color: '#E11D48',
    tags: ['Flash → HTML5', 'ILT to eLearning', 'WCAG', 'SCORM'],
    features: ['Legacy content migration', 'SCORM repackaging', 'Accessibility remediation'],
  },
]

const ENTERPRISE_SERVICES = [
  {
    title: 'ERP Solutions',
    sub: 'Smartbooks V7.0 integrates inventory, orders, e-commerce, and accounting in a unified platform — cloud SaaS or fully on-premise.',
    href: '/services/erp-solutions',
    color: '#059669',
    tags: ['Cloud ERP', 'On-Premise', 'Inventory', 'Accounting'],
    features: ['Real-time dashboards', 'GST/VAT compliant', 'Custom reporting'],
  },
  {
    title: 'Mobile App Development',
    sub: 'White-label mobile learning apps and enterprise applications built with Ionic and Angular for iOS and Android.',
    href: '/services/mobile-app-development',
    color: '#0891B2',
    tags: ['Ionic', 'Angular', 'iOS & Android', 'Offline Sync'],
    features: ['White-label branding', 'Biometric auth', 'App Store publishing'],
  },
  {
    title: 'IoT Solutions',
    sub: 'Factory-grade IoT connecting production machinery to real-time dashboards with predictive maintenance and ERP integration.',
    href: '/services/iot-solutions',
    color: '#D97706',
    tags: ['Industry 4.0', 'Edge Computing', 'SCADA', 'Predictive Maintenance'],
    features: ['Sensor network design', 'Real-time KPI dashboards', 'ERP integration'],
  },
]

function ServiceCard({ svc }: { svc: typeof LEARNING_SERVICES[0] }) {
  return (
    <Link href={svc.href} className="block no-underline group">
      <div className="rounded-[16px] bg-white/[0.07] border border-white/[0.12] p-6 hover:bg-white/[0.13] hover:border-white/20 transition-all duration-250 h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full"
            style={{ color: svc.color, background: `${svc.color}25`, border: `1px solid ${svc.color}40` }}>
            {svc.title}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2}
            className="flex-shrink-0 mt-1 group-hover:stroke-white transition-colors" aria-hidden="true">
            <path d="M1 7h12M7 1l6 6-6 6"/>
          </svg>
        </div>
        <p className="text-[14px] text-white/60 leading-[1.7] mb-5 flex-1">{svc.sub}</p>
        <ul className="space-y-1.5 mb-4">
          {svc.features.map((f, fi) => (
            <li key={fi} className="flex items-center gap-2 text-[12.5px] text-white/55">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="6" style={{ fill: svc.color }} opacity="0.25"/>
                <path d="M3.5 6l1.5 1.5 3.5-3" stroke={svc.color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
          {svc.tags.map((t, ti) => (
            <span key={ti} className="text-[10px] font-medium px-2 py-0.5 rounded text-white/40 bg-white/[0.05] border border-white/[0.08]">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(160deg,#0F172A 0%,#1E3A8A 50%,#0F172A 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
          aria-hidden="true"
        />
        <div className="container-xl relative z-10">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Technology services built for complex delivery programmes
            </h1>
            <p className="text-[17px] text-blue-100/80 leading-[1.7]">
              WHBS delivers LMS development, eLearning content, ERP solutions, mobile apps, and IoT automation with the discipline of a long-term delivery partner.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEARNING SOLUTIONS — full-width image bg ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/learning-solutions-bg.jpg"
            alt=""
            fill sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(2,8,36,0.92) 0%,rgba(10,5,40,0.88) 55%,rgba(2,8,36,0.90) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 container-xl py-20 px-6">
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.06] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-300">Learning Solutions</span>
            </div>
            <h2 className="text-[28px] md:text-[34px] font-bold text-white tracking-tight leading-[1.2] mb-3">
              LMS, eLearning &amp; Content
            </h2>
            <p className="text-[16px] text-white/55 max-w-[480px] leading-[1.7]">
              End-to-end learning technology — from Moodle LMS deployment to custom courseware creation and legacy content migration.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LEARNING_SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.08}>
                <ServiceCard svc={svc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE TECHNOLOGY — full-width image bg ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/enterprise-technology-bg.jpg"
            alt=""
            fill sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(0,12,6,0.92) 0%,rgba(5,25,15,0.88) 55%,rgba(0,12,6,0.90) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 container-xl py-20 px-6">
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.06] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-green-300">Enterprise Technology</span>
            </div>
            <h2 className="text-[28px] md:text-[34px] font-bold text-white tracking-tight leading-[1.2] mb-3">
              ERP, Mobile &amp; IoT
            </h2>
            <p className="text-[16px] text-white/55 max-w-[480px] leading-[1.7]">
              Enterprise resource planning, mobile application development, and industrial IoT automation for manufacturing and operations.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENTERPRISE_SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.08}>
                <ServiceCard svc={svc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <InnerCTA
        heading="Not sure which service fits?"
        body="Talk to a WHBS solutions architect — we'll map your requirements to the right combination of services."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  )
}
