'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'
import InfoTile from '@/components/ui/InfoTile'
import { FiTrendingUp } from 'react-icons/fi'

const CAPABILITIES = [
  { title: 'Cross-Platform Development', body: 'Ionic and Angular-based apps targeting iOS and Android simultaneously. Single codebase with native-quality performance and device API access.' },
  { title: 'White-Label Learning Apps', body: 'Branded Moodle Mobile wrappers published under your developer accounts on the App Store and Google Play. Custom splash screens, icons, and deep-link behaviour.' },
  { title: 'Offline Learning Capability', body: 'Course content pre-downloaded to device storage. Quiz responses and completion data stored locally and synced to the LMS on next network connection.' },
  { title: 'Enterprise Integrations', body: 'Connect to ERP, CRM, HRMS, and learning management systems via REST API. Biometric authentication, SSO, and enterprise MDM enrolment support.' },
  { title: 'Push Notifications', body: 'Targeted learner engagement through scheduled and event-triggered push campaigns. Completion reminders, new course alerts, and deadline notifications.' },
  { title: 'App Store Publishing', body: 'End-to-end management of App Store Connect and Google Play Console submissions, including review process navigation and release management.' },
]

const TECH = ['Ionic Framework', 'Angular', 'TypeScript', 'Capacitor', 'iOS (Swift)', 'Android (Kotlin)', 'REST API', 'OAuth 2.0', 'Moodle Mobile API', 'SQLite (Offline)']

function CapabilityAccordion({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof CAPABILITIES)[0]
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border transition-all duration-300 rounded-[14px] overflow-hidden"
      style={{
        background: open ? '#F8FAFC' : '#FFFFFF',
        borderColor: open ? '#22D3EE55' : '#E5E7EB',
        boxShadow: open ? '0 8px 24px -8px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent"
        aria-expanded={open}
      >
        <div className="flex items-center gap-5 min-w-0">
          <span
            className="text-[13px] font-bold flex-shrink-0 transition-colors duration-200"
            style={{ color: open ? '#0891B2' : '#9CA3AF' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-[16px] font-bold text-gray-900 leading-snug">{item.title}</h3>
        </div>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          stroke={open ? '#0891B2' : '#9CA3AF'} strokeWidth={2}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
          aria-hidden="true"
        >
          <path d="M4.5 7l4.5 4.5L13.5 7" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <p className="text-[14px] text-gray-600 leading-[1.75] px-6 pb-6 md:pl-[68px] max-w-2xl">
          {item.body}
        </p>
      </div>
    </div>
  )
}

export default function MobileAppDevelopmentPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <>
      {/* ── ANIMATED HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/mobile-app-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(0,15,25,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#38BDF8',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#0891B2,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#38BDF8' }}>Mobile App Development</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#38BDF8' }}>
            Mobile App Development
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Enterprise mobile apps<br />built with Ionic &amp; Angular
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">WHBS develops cross-platform iOS and Android applications for enterprise learning, business operations, and offline-capable field deployments.</p>
        </div>
      </section>

      {/* ── BENTO CONTENT GRID ── */}
      <section className="w-full container-xl py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Left: featured dark card */}
          <Reveal className="md:col-span-5 lg:col-span-4">
            <div
              className="h-full p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden rounded-[20px]"
              style={{ background: '#0A0F1E', minHeight: 360 }}
            >
              <div className="relative z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase block mb-4" style={{ color: '#38BDF8' }}>
                  Strategic Mobility
                </span>
                <h2 className="text-[26px] md:text-[28px] font-extrabold text-white leading-[1.25] mb-5 tracking-tight">
                  Agile systems for complex environments
                </h2>
                <p className="text-white/60 text-[14px] leading-[1.7] mb-8">
                  Bridging the gap between legacy corporate infrastructure and modern mobile-first demands.
                </p>
              </div>
              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#0A0F1E] transition-all duration-250 no-underline"
                  aria-label="Discuss your mobile app project"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M3 9h12M9 3l6 6-6 6" />
                  </svg>
                </Link>
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ border: '40px solid rgba(34,211,238,0.08)' }}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Right: image strip + stat card + accordion */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5">

            {/* Image + stat tile row */}
            <Reveal delay={0.05}>
              <div className="grid grid-cols-2 gap-5" style={{ height: 'clamp(180px, 22vw, 256px)' }}>
                <div className="relative overflow-hidden rounded-[16px] group">
                  <Image
                    src="/images/services/mobile/mobile-showcase.jpg"
                    alt="WHBS mobile app development showcase"
                    fill
                    sizes="(max-width:768px) 50vw, 33vw"
                    className="object-cover transition-all duration-700"
                  />
                </div>
                <InfoTile
                  index={0}
                  label="65%"
                  title="Retention increase"
                  body="via mobile learning deployment."
                  icon={<FiTrendingUp size={18} />}
                  color="#0891B2"
                />
              </div>
            </Reveal>

            {/* Accordion — capability list, content unchanged */}
            <div className="flex flex-col gap-3">
              {CAPABILITIES.map((c, i) => (
                <Reveal key={`cap-${i}`} delay={0.08 + i * 0.04}>
                  <CapabilityAccordion
                    item={c}
                    index={i}
                    open={openIdx === i}
                    onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Technology stack — unchanged content, integrated into the bento layout */}
        <Reveal delay={0.1} className="mt-12 pt-10 border-t border-gray-100">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-4">Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t, tIdx) => (
              <span
                key={`tech-${tIdx}`}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full text-gray-600"
                style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.18)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <InnerCTA heading="Build your enterprise mobile app" body="From white-label LMS apps to custom enterprise mobility — WHBS handles design, development, and App Store publishing." primaryLabel="Discuss Your App" primaryHref="/contact" secondaryLabel="All Services" secondaryHref="/services" accentColor="#22D3EE" />
    </>
  )
}
