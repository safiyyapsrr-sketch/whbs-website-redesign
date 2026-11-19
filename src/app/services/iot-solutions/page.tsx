import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'
import InfoTile from '@/components/ui/InfoTile'
import { FiRadio, FiCpu, FiBarChart2, FiActivity, FiDatabase, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'IoT Solutions & Industrial Automation — WHBS',
  description: 'Factory-grade IoT implementations, real-time production monitoring, predictive maintenance, and edge computing for Indian manufacturing enterprises.',
  openGraph: { title: 'IoT Solutions — White House Business Solutions', description: '10+ industrial automation implementations across Indian manufacturing.' },
}

const CAPABILITIES = [
  { title: 'Sensor Network Design', body: 'End-to-end sensor selection, placement engineering, wiring, and commissioning across production floors. Supports temperature, vibration, pressure, flow, and proximity sensors.', icon: <FiRadio size={18} />, color: '#DB2777' },
  { title: 'Edge Computing Nodes', body: 'Low-latency local processing at the factory floor level. Edge nodes run WHBS firmware for real-time decision logic without cloud round-trips.', icon: <FiCpu size={18} />, color: '#D97706' },
  { title: 'Real-Time Dashboards', body: 'Live KPI visualisation — OEE, throughput, downtime, energy consumption — on web and mobile dashboards accessible by operators, supervisors, and management.', icon: <FiBarChart2 size={18} />, color: '#2563EB' },
  { title: 'Predictive Maintenance', body: 'Time-series anomaly detection using vibration and thermal signatures to flag equipment degradation before failure. Maintenance work orders triggered automatically.', icon: <FiActivity size={18} />, color: '#059669' },
  { title: 'ERP Integration', body: 'Production output data fed directly into Smartbooks or third-party ERP systems for accurate cost-per-unit, WIP tracking, and inventory reconciliation.', icon: <FiDatabase size={18} />, color: '#0D9488' },
  { title: 'Workforce Training', body: 'IoT operator training programmes delivered via the WHBS LMS — safety procedures, machine operation SOPs, and equipment-specific maintenance training.', icon: <FiUsers size={18} />, color: '#DC2626' },
]

export default function IotSolutionsPage() {
  return (
    <>
      {/* ANIMATED HERO */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/iot-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(25,12,0,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(252,211,77,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(252,211,77,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#FCD34D',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#D97706,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#FCD34D' }}>IoT Solutions</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#FCD34D' }}>
            IoT Solutions
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Factory-grade IoT for<br />Indian manufacturing
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">WHBS has delivered over ten R&D industrial automation projects — real-time monitoring, predictive maintenance, and ERP integration across Indian manufacturing.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <Reveal><h2 className="text-[32px] font-extrabold tracking-tight text-gray-900 mb-12">Capabilities delivered</h2></Reveal>
          <div className="grid grid-cols-1 gap-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={`item-title-${i}`} delay={i * 0.05}>
                <InfoTile index={i} title={c.title} body={c.body} icon={c.icon} color={c.color} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="rounded-[16px] p-8" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <h3 className="text-[20px] font-extrabold text-gray-900 mb-3">The WHBS Industry 4.0 approach</h3>
              <p className="text-[15px] text-gray-600 leading-[1.75]">WHBS provides not only the IoT technical infrastructure but also operator training delivered through our own LMS platforms — creating a fully integrated digital transformation solution from factory floor to learning management system. Every implementation includes stakeholder dashboards, maintenance team training, and ongoing technical support.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA heading="Modernise your manufacturing operation" body="Tell us about your production environment — we'll scope an IoT implementation roadmap with clear ROI milestones." primaryLabel="Request IoT Consultation" primaryHref="/contact" secondaryLabel="Solutions Overview" secondaryHref="/solutions/manufacturing" accentColor="#FBBF24" />
    </>
  )
}
