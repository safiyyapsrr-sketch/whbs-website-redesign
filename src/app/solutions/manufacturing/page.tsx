import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'
import InfoTile from '@/components/ui/InfoTile'
import { FiActivity, FiTool, FiDatabase, FiShield, FiAward, FiCheckSquare } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Manufacturing Solutions — IoT & Workforce Training — WHBS',
  description: 'Industry 4.0 IoT automation, production monitoring, predictive maintenance, and workforce safety training for Indian manufacturing enterprises.',
}

const SOLUTIONS = [
  { title: 'IoT Production Monitoring', body: 'Real-time OEE, throughput, and downtime dashboards across production lines. Sensor networks, edge nodes, and central control rooms built and commissioned by WHBS engineers.', icon: <FiActivity size={18} />, color: '#2563EB' },
  { title: 'Predictive Maintenance', body: 'Machine learning-assisted anomaly detection on vibration, thermal, and electrical signals. Maintenance work orders triggered before failures — reducing unplanned downtime.', icon: <FiTool size={18} />, color: '#059669' },
  { title: 'ERP Integration', body: 'Live production data fed into Smartbooks or third-party ERP for accurate cost-per-unit, WIP tracking, material consumption, and inventory reconciliation.', icon: <FiDatabase size={18} />, color: '#0D9488' },
  { title: 'Safety & Compliance Training', body: 'SCORM-packaged HSE training modules, equipment SOPs, and ISO compliance programmes delivered through an on-premise or cloud LMS accessible on the shop floor.', icon: <FiShield size={18} />, color: '#DC2626' },
  { title: 'Operator Certification', body: 'Equipment-specific certification programmes with mandatory periodic re-assessment. Digital certificates stored in the LMS with expiry-based re-enrolment automation.', icon: <FiAward size={18} />, color: '#D97706' },
  { title: 'Quality Management', body: 'Digital quality checklists, defect logging, root-cause analysis workflows, and corrective action tracking integrated with IoT sensor data and ERP.', icon: <FiCheckSquare size={18} />, color: '#DB2777' },
]

export default function ManufacturingSolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        {/* Full-width background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-it-solutions.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(30,15,5,0.78) 0%,rgba(30,15,5,0.78) 55%,rgba(30,15,5,0.78) 100%)' }} aria-hidden="true" />
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
            <span className="text-white/70">Manufacturing Solutions</span>
          </nav>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#FBBF24' }}>
            Manufacturing Solutions
          </span>
          <h1 className="mb-5 mt-2 max-w-[680px] text-h1 font-extrabold text-white">
            Industry 4.0 transformation for manufacturing enterprises
          </h1>
          <p className="max-w-[560px] text-lead text-white/55">
            WHBS delivers end-to-end Industry 4.0 transformation — IoT production monitoring, predictive maintenance, ERP integration, and workforce training — as a single integrated programme.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal><h2 className="mb-12 text-[32px] font-extrabold tracking-tight text-gray-900">Manufacturing capabilities</h2></Reveal>
          <div className="grid grid-cols-1 gap-5">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={`item-title-${i}`} delay={i * 0.05}>
                <InfoTile index={i} title={s.title} body={s.body} icon={s.icon} color={s.color} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA heading="Modernise your manufacturing operation" body="IoT infrastructure, ERP integration, and workforce training delivered as one complete Industry 4.0 programme." primaryLabel="Request IoT Assessment" primaryHref="/contact" secondaryLabel="IoT Solutions" secondaryHref="/services/iot-solutions" accentColor="#FBBF24" />
    </>
  )
}
