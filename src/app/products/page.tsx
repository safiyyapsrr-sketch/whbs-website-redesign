import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Our Products — iLearnBay & GANNET | WHBS',
  description: 'iLearnBay, a cloud learning management platform, and GANNET, an industrial IoT monitoring platform — both built and maintained by White House Business Solutions.',
}

const ILEARNBAY_FEATURES = [
  'Learning Management System', 'Online Courses', 'Assessments & Quizzes', 'Certifications',
  'Learner Analytics', 'Instructor Dashboard', 'Mobile Responsive', 'Discussion Forums',
  'Notifications', 'Role-based Access', 'Enterprise Integration', 'Cloud Deployment',
]

const GANNET_FEATURES = [
  'Industrial IoT Monitoring', 'Machine-to-Machine (M2M) Integration', 'Live Production Tracking',
  'Smart Factory Dashboard', 'Real-time Alerts', 'Production Analytics',
  'Manufacturing Performance Monitoring', 'Quality Control Tracking', 'Factory Automation Support',
  'Secure Cloud Connectivity', 'Data Collection from Machines', 'Centralized Monitoring',
]

const GANNET_INDUSTRIES = ['Manufacturing', 'Garments', 'Automotive', 'Healthcare', 'Industrial Automation', 'Smart Factory']

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Products built by WHBS"
        subtitle="Two platforms we've built and continue to maintain in-house — for online learning and industrial IoT monitoring."
        breadcrumbs={[{ label: 'Products' }]}
        accentColor="#0066FF"
      />

      {/* ─── iLearnBay ─────────────────────────────────────────────── */}
      <section className="section-py-lg">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <span
                className="eyebrow mb-5"
                style={{ color: '#0066FF', background: 'var(--blue-10)', borderColor: 'var(--blue-20)' }}
              >
                Modern Learning Management Platform
              </span>
              <h2 className="t-h2 text-gray-900 mt-4 mb-5">iLearnBay</h2>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-4 max-w-[540px]">
                iLearnBay is WHBS&apos;s next-generation cloud learning platform built for educational institutions, corporate training, government organizations, and professional learning providers. It enables organizations to create, manage, deliver, and monitor digital learning through one centralized platform.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-4 max-w-[540px]">
                The platform supports instructor-led learning, self-paced courses, assessments, certifications, learner analytics, discussion forums, notifications, and mobile-friendly learning experiences.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-8 max-w-[540px]">
                Designed for scalability and ease of use, iLearnBay helps organizations improve learner engagement while simplifying administration and reporting. It supports secure cloud deployment, customizable branding, multilingual learning environments, and seamless integration with existing enterprise systems.
              </p>

              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-gray-500 mb-3">Key Features</p>
              <div className="flex flex-wrap gap-2 mb-9">
                {ILEARNBAY_FEATURES.map((f) => (
                  <span key={f} className="tag" style={{ background: 'var(--blue-10)', color: '#0066FF', borderColor: 'var(--blue-20)' }}>{f}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ilearnbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2 no-underline"
                >
                  Visit iLearnBay
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="M3 10l7-7M10 3H4M10 3v6" />
                  </svg>
                </a>
                <a
                  href="https://ilearnbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline no-underline"
                >
                  Learn More
                </a>
                <Link href="/contact" className="btn btn-secondary no-underline">
                  Contact WHBS
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="/images/products/ilearnbay.jpg"
                  alt="iLearnBay learning management platform"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#0066FF' }} aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container-xl">
        <div className="divider-subtle" />
      </div>

      {/* ─── GANNET ────────────────────────────────────────────────── */}
      <section className="section-py-lg">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="md:order-2">
              <span
                className="eyebrow mb-5"
                style={{ color: '#00A76F', background: 'var(--green-10)', borderColor: 'var(--green-20)' }}
              >
                Industrial IoT Monitoring &amp; Smart Manufacturing Platform
              </span>
              <h2 className="t-h2 text-gray-900 mt-4 mb-5">GANNET</h2>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-4 max-w-[540px]">
                GANNET is WHBS&apos;s Industrial Internet of Things (IoT) platform developed to digitize manufacturing operations through real-time machine connectivity, production monitoring, and intelligent factory automation.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-4 max-w-[540px]">
                Built using IoT technologies, GANNET collects data directly from connected machines and industrial equipment, enabling organizations to monitor production activities, identify bottlenecks, improve operational efficiency, and make data-driven decisions.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-4 max-w-[540px]">
                The platform integrates physical manufacturing equipment with software systems through Machine-to-Machine (M2M) communication, allowing live production visibility, automated alerts, and centralized monitoring across manufacturing facilities.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.75] mb-8 max-w-[540px]">
                Originally developed and successfully implemented within WHBS&apos;s parent garment manufacturing company, GANNET has been used to improve production monitoring, quality tracking, and operational transparency.
              </p>

              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-gray-500 mb-3">What GANNET Provides</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {GANNET_FEATURES.map((f) => (
                  <span key={f} className="tag" style={{ background: 'var(--green-10)', color: '#00A76F', borderColor: 'var(--green-20)' }}>{f}</span>
                ))}
              </div>

              <p className="text-[12px] font-bold uppercase tracking-[0.09em] text-gray-500 mb-3">Industries</p>
              <div className="flex flex-wrap gap-2 mb-9">
                {GANNET_INDUSTRIES.map((ind) => (
                  <span key={ind} className="tag">{ind}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gannet.online/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2 no-underline"
                  style={{ background: '#00A76F', boxShadow: '0 8px 24px rgba(0,167,111,0.25)' }}
                >
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="M3 10l7-7M10 3H4M10 3v6" />
                  </svg>
                </a>
                <Link href="/contact" className="btn btn-secondary no-underline">
                  Contact WHBS
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="md:order-1">
              <GannetInfoPanel />
            </Reveal>
          </div>
        </div>
      </section>

      <InnerCTA
        heading="Want to know more about our products?"
        body="Get in touch and we'll walk you through iLearnBay and GANNET in more detail."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
      />
    </>
  )
}

/**
 * GANNET intentionally has no image, illustration, or placeholder graphic —
 * a text-only "premium information panel" instead, built from the same
 * card/typography tokens used across the rest of the site.
 */
function GannetInfoPanel() {
  const sections: { label: string; body?: string; items?: string[] }[] = [
    {
      label: 'Quick Overview',
      body: 'An Industrial IoT platform connecting factory machinery to live dashboards for real-time production visibility.',
    },
    {
      label: 'Primary Use Cases',
      items: ['Production monitoring', 'Machine-to-Machine (M2M) integration', 'Quality & performance tracking'],
    },
    {
      label: 'Key Benefits',
      items: ['Real-time visibility into operations', 'Faster identification of bottlenecks', 'Centralized, data-driven decisions'],
    },
    {
      label: 'Industries Served',
      items: GANNET_INDUSTRIES,
    },
  ]

  return (
    <div className="rounded-[16px] border border-gray-200 shadow-md overflow-hidden bg-white">
      <div className="h-1" style={{ background: '#00A76F' }} aria-hidden="true" />
      <div className="p-7 md:p-9 divide-y divide-gray-100">
        {sections.map((s) => (
          <div key={s.label} className="py-5 first:pt-0 last:pb-0">
            <p className="text-[12px] font-bold uppercase tracking-[0.09em] mb-3" style={{ color: '#00A76F' }}>
              {s.label}
            </p>
            {s.body && (
              <p className="text-[15px] text-gray-600 leading-[1.7]">{s.body}</p>
            )}
            {s.items && (
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: '#00A76F' }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
