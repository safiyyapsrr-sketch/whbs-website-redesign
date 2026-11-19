import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Government eLearning Solutions — WHBS',
  description: 'National civil servant training platforms, ministry eLearning modules, and government LMS deployments. Approved developer on India\'s iGOT Karmayogi platform.',
  openGraph: { title: 'Government Solutions — White House Business Solutions', description: 'iGOT-approved eLearning developer. Government LMS and civil service training.' },
}

const ENGAGEMENTS = [
  {
    client: 'Government of India — iGOT Karmayogi',
    scope: 'Developed 5 SCORM-compliant modules live on India\'s national civil servant training portal under DoPT.',
    departments: [
      'Prosecution in Customs — Ministry of Finance',
      'Performance Appraisal — Indian Railways',
      'Department of Water Resources — Ministry of Jal Shakti',
      'Know Your Company — Ministry of Corporate Affairs',
      'Dept. of Animal Husbandry & Dairying',
    ],
    img: '/images/government/government-01.jpg',
    color: '#00A76F',
    badge: 'India',
  },
  {
    client: 'Ministry of Education, Brunei Darussalam',
    scope: 'Moodle LMS customisation and curriculum-mapped eLearning module development via Alif Technologies SDN BHD.',
    departments: [
      'Full Moodle theme design',
      'Certified instructional design',
      'On-time delivery verified by client',
    ],
    img: '/images/government/government-02.jpg',
    color: '#0066FF',
    badge: 'Brunei',
  },
  {
    client: 'Ministry of Education, Malaysia',
    scope: 'LMS infrastructure and eLearning content for national education authority.',
    departments: [
      'Multi-language content delivery',
      'Regional compliance requirements',
    ],
    img: '/images/government/malaysia.jpg',
    color: '#6E41C0',
    badge: 'Malaysia',
  },
  {
    client: 'Ministry of Education, Singapore',
    scope: 'Enterprise LMS deployment and eLearning content development.',
    departments: [
      'Custom Moodle implementation',
      'Content production pipeline',
    ],
    img: '/images/government/government-04.jpg',
    color: '#D97706',
    badge: 'Singapore',
  },
]

const CAPABILITIES = [
  { title: 'iGOT Karmayogi Integration', body: 'Approved eLearning content developer on India\'s national civil servant training platform. Content meets DoPT compliance and accessibility requirements.' },
  { title: 'Government-Grade Security', body: 'Data sovereignty options including fully on-premise LMS deployment. Role-based access, audit trails, and encryption meeting government IT security standards.' },
  { title: 'Multilingual Content', body: 'Content developed in Hindi, English, and regional languages. RTL support and culturally adapted visual design for diverse national audiences.' },
  { title: 'WCAG 2.1 Accessibility', body: 'All content developed to Web Content Accessibility Guidelines ensuring inclusive access for public sector learners including those with disabilities.' },
  { title: 'Civil Service Curriculum Design', body: 'Certified instructional designers with government subject matter expert collaboration. Policy-accurate, audit-ready content with regulatory alignment.' },
  { title: 'Scalable National Deployment', body: 'LMS infrastructure sized for hundreds of thousands of concurrent civil service learners across national programmes.' },
]

export default function GovernmentSolutionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/home/hero-enterprise.jpg" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(0,18,10,0.88) 0%,rgba(0,18,10,0.82) 55%,rgba(0,18,10,0.76) 100%)' }} aria-hidden="true" />
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
            <span className="text-white/70">Government Solutions</span>
          </nav>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#34D399' }}>
            Government Solutions
          </span>
          <h1 className="mb-5 mt-2 max-w-[680px] text-h1 font-extrabold text-white">
            Solutions that governments trust
          </h1>
          <p className="max-w-[560px] text-lead text-white/55">
            WHBS is an approved eLearning developer on India&apos;s iGOT Karmayogi national platform. We deliver ministry eLearning, civil service LMS deployments, and government-grade content across South and Southeast Asia.
          </p>
        </div>
      </section>

      {/* COMBINED SOLUTIONS & ENGAGEMENTS — scroll-reveal storytelling */}
      <section className="bg-gray-50 px-6 py-20 border-y border-gray-200">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-green-600 mb-3 block">Track Record</span>
            <h2 className="text-[32px] font-extrabold tracking-tight text-gray-900 mb-4">Government Solutions &amp; Engagements</h2>
            <p className="text-[16px] text-gray-500 max-w-[540px] leading-[1.7]">
              From India&apos;s national civil service platform to Southeast Asian ministry deployments — WHBS delivers government-grade eLearning across borders.
            </p>
          </Reveal>

          {/* Engagement cards — scroll-reveal storytelling */}
          <div className="flex flex-col gap-10">
            {ENGAGEMENTS.map((eng, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[18px] overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image panel */}
                  <div className="lg:col-span-2 relative" style={{ minHeight: 220 }}>
                    <Image
                      src={eng.img}
                      alt={eng.client}
                      fill
                      sizes="(max-width:1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${eng.color}CC,${eng.color}88)` }} aria-hidden="true" />
                    {/* Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-white bg-black/30 border border-white/20">
                        {eng.badge}
                      </span>
                    </div>
                    {/* Number */}
                    <div className="absolute bottom-5 right-5 z-10">
                      <span className="text-[48px] font-extrabold text-white/15 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="lg:col-span-3 p-7 lg:p-9 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: eng.color }} aria-hidden="true" />
                      <h3 className="text-[18px] font-bold text-gray-900 leading-tight">{eng.client}</h3>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.75] mb-5 pl-4">{eng.scope}</p>
                    <ul className="pl-4 space-y-2">
                      {eng.departments.map((d, di) => (
                        <li key={di} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="7.5" cy="7.5" r="7.5" style={{ fill: eng.color }} opacity="0.15"/>
                            <path d="M4.5 7.5l2 2 4-4" stroke={eng.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {d}
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

      {/* CAPABILITIES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12">
            <h2 className="text-[28px] font-extrabold tracking-tight text-gray-900 mb-3">Government-specific capabilities</h2>
            <p className="text-[16px] text-gray-500 max-w-[480px] leading-[1.7]">Technical and instructional capabilities built specifically for public sector requirements.</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200">
                  <div className="w-8 h-8 rounded-[8px] flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: 'rgba(0,167,111,0.1)' }} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A76F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-gray-900">{c.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-gray-600">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA heading="Government training that meets compliance" body="WHBS works directly with ministry subject matter experts to produce SCORM-compliant, WCAG 2.1 accessible eLearning for national platforms." primaryLabel="Discuss Your Requirements" primaryHref="/contact" secondaryLabel="View Case Studies" secondaryHref="/news" accentColor="#10B981" />
    </>
  )
}
