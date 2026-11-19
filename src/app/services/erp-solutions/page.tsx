import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'ERP Solutions — Smartbooks V7.0 — WHBS',
  description: 'Smartbooks V7.0 enterprise resource planning — cloud SaaS or on-premise. Inventory, orders, e-commerce, and accounting in one integrated platform.',
  openGraph: { title: 'ERP Solutions — White House Business Solutions', description: 'Smartbooks V7.0: cloud or on-premise ERP for inventory, orders, e-commerce, and accounting.' },
}

const MODULES = [
  { title: 'Inventory & Warehouse', body: 'Real-time stock control, batch tracking, multi-location warehouses, reorder automation, GRN and inter-branch transfers. Live weighted-average and FIFO stock valuation.' },
  { title: 'Order Management', body: 'Unified pipeline for B2B, web, and phone orders. Automated invoice generation, shipping manifest creation, return authorisations, and credit note workflows.' },
  { title: 'E-Commerce Integration', body: 'Live product catalogue sync, real-time stock availability for your storefront, dynamic pricing rules, customer account portals, and automated dispatch notifications.' },
  { title: 'Accounting Suite', body: 'Chart of accounts, journal entries, bank reconciliation, GST/VAT management, P&L and balance sheet generation, accounts payable/receivable aging, and payroll integration.' },
  { title: 'Reporting & Analytics', body: 'Pre-built executive dashboards and custom report builder. Export to Excel, PDF, or pipe live data to Power BI or Tableau via the Smartbooks API.' },
  { title: 'Role-Based Access', body: 'Granular user permission profiles, department-level data isolation, full audit trail of every transaction, and enterprise SSO integration.' },
]

const DEPLOY = [
  { title: 'Cloud SaaS', items: ['Hosted on AWS / GCP / Azure', 'Automated patch management', '99.9% uptime SLA', 'Daily encrypted backups', 'Per-user monthly pricing'] },
  { title: 'On-Premise', items: ['Deploy behind your corporate firewall', 'Full data sovereignty', 'One-time licence model', 'Annual support SLA', 'Suitable for regulated industries'] },
]

export default function ErpSolutionsPage() {
  return (
    <>
      {/* ANIMATED HERO */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/service-hero/erp-hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(0,12,6,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(52,211,153,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(52,211,153,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#34D399',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#059669,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#34D399' }}>ERP Solutions</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#34D399' }}>
            ERP Solutions
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Smartbooks V7.0 ERP —<br />one system for your operation
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">Smartbooks V7.0 integrates inventory, orders, e-commerce, and accounting into a unified enterprise platform. Available as cloud SaaS or fully on-premise.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[32px] font-extrabold tracking-tight text-gray-900 mb-4 text-center">Core modules</h2>
            <p className="text-[16px] text-gray-500 text-center mb-12 max-w-[500px] mx-auto">Hover any module to learn more about its capabilities.</p>
          </Reveal>
          {/* Interactive circular pill grid */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {MODULES.map((m, i) => (
                <div
                  key={m.title}
                  className="relative group cursor-default"
                  style={{ zIndex: 1 }}
                >
                  {/* Pill */}
                  <div
                    className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-green-300 hover:-translate-y-1 transition-all duration-250 select-none"
                    style={{ minWidth: 180 }}
                  >
                    {/* Number badge */}
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                      style={{ background: 'rgba(16,185,129,0.12)', color: '#059669' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14px] font-semibold text-gray-800 whitespace-nowrap">{m.title}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} className="ml-1 flex-shrink-0 group-hover:stroke-green-500 transition-colors" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[240px] bg-gray-900 rounded-[12px] p-4 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50"
                    role="tooltip"
                  >
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent" style={{ borderTopColor: '#111827' }} aria-hidden="true" />
                    <p className="text-[12px] font-bold text-green-400 mb-1">{m.title}</p>
                    <p className="text-[12px] text-gray-300 leading-[1.6]">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deployment Options — two-column image layout */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[28px] font-extrabold tracking-tight text-gray-900 mb-4 text-center">Deployment options</h2>
            <p className="text-[16px] text-gray-500 text-center mb-12 max-w-[480px] mx-auto">
              Choose the deployment model that fits your infrastructure, compliance, and budget requirements.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEPLOY.map((d, i) => {
              const isCloud = i === 0
              const imgSrc = isCloud ? '/images/products/cloud-saas.jpg' : '/images/products/on-premise.jpg'
              const accentColor = isCloud ? '#0066FF' : '#059669'
              const accentBg = isCloud ? '#EBF2FF' : '#ECFDF5'
              const accentBorder = isCloud ? '#CCE0FF' : '#A7F3D0'
              return (
                <Reveal key={`deploy-${i}`} delay={i * 0.1}>
                  <div className="rounded-[20px] border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Image area */}
                    <div className="relative w-full overflow-hidden" style={{ height: 220, background: accentBg }}>
                      {/* We try to load the image; if missing shows tinted bg with icon */}
                      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        {isCloud ? (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth={1.2} opacity={0.2}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                        ) : (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth={1.2} opacity={0.2}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                        )}
                      </div>
                    {/* Actual image — shows if file exists, bg shows otherwise */}
                    <div className="absolute inset-0">
                      <Image
                        src={imgSrc}
                        alt={d.title}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                          style={{ color: accentColor, background: 'rgba(255,255,255,0.92)', border: `1px solid ${accentBorder}` }}
                        >
                          {d.title}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-[20px] font-bold text-gray-900 mb-3">{d.title}</h3>
                      <p className="text-[14px] text-gray-600 leading-[1.7] mb-5">
                        {isCloud
                          ? 'Managed cloud hosting with automated updates, enterprise SLAs, and zero infrastructure burden for your team.'
                          : 'Full on-premise deployment within your corporate infrastructure — complete data sovereignty and compliance control.'}
                      </p>
                      <ul className="space-y-3 mt-auto">
                        {d.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3 text-[14px] text-gray-700">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth={2.5} className="flex-shrink-0 mt-0.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-5 border-t border-gray-100">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 text-[13px] font-semibold no-underline hover:underline"
                          style={{ color: accentColor }}
                        >
                          Request a {d.title} demo
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M1 6h10M6 1l5 5-5 5"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <InnerCTA heading="See Smartbooks in action" body="Request a live walkthrough of Smartbooks V7.0 configured for your industry — inventory, orders, e-commerce, or accounting." primaryLabel="Request ERP Demo" primaryHref="/contact" secondaryLabel="View Products" secondaryHref="/products" accentColor="#10B981" />
    </>
  )
}
