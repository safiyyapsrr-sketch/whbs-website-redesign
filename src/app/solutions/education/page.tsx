import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Education Solutions — Universities & Colleges — WHBS',
  description: 'Moodle LMS for universities, colleges, and K-12 institutions. eLearning content, blended learning platforms, and student engagement tools across 14 countries.',
}

const SOLUTIONS = [
  { title: 'University LMS Deployment', body: 'Enterprise Moodle for large-scale university environments — multi-department, multi-faculty, multi-campus. Student enrolment via LDAP/Active Directory integration.' },
  { title: 'Blended Learning Design', body: 'Combine face-to-face instruction with asynchronous online content, discussion forums, collaborative activities, and virtual classroom integrations.' },
  { title: 'Course Content Production', body: 'Academically rigorous eLearning modules produced with faculty subject matter experts. SCORM-packaged and tracked via Moodle Gradebook.' },
  { title: 'Student Assessment Systems', body: 'Secure online examinations, adaptive quizzes, peer assessment workflows, and automated grading with Moodle\'s assignment and quiz engines.' },
  { title: 'Publisher Integration', body: 'Connect institutional LMS with textbook publisher platforms via LTI 1.3. WHBS has seven-year multimedia production experience with Cambridge-based educational publishers.' },
  { title: 'Multilingual Campus', body: 'Multilingual Moodle interfaces, RTL support, and localised content for international student bodies and global campuses.' },
]

export default function EducationSolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ minHeight: 380 }}>
        {/* Full-width background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-digital-learning.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(5,15,40,0.88) 0%,rgba(5,15,40,0.75) 55%,rgba(5,15,40,0.70) 100%)' }} aria-hidden="true" />
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
            <span className="text-white/70">Education Solutions</span>
          </nav>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#60A5FA' }}>
            Education Solutions
          </span>
          <h1 className="mb-5 mt-2 max-w-[680px] text-h1 font-extrabold text-white">
            Learning platforms for universities, colleges &amp; schools
          </h1>
          <p className="max-w-[560px] text-lead text-white/55">
            WHBS has delivered Moodle LMS and eLearning content for ministries of education across Brunei, Malaysia, and Singapore, and maintained a seven-year content production partnership with a Cambridge, UK educational publisher.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <h2 className="text-[32px] font-extrabold tracking-tight text-gray-900 mb-3">Education technology solutions</h2>
                <p className="text-[16px] text-gray-500 leading-[1.7] max-w-[460px]">Purpose-built platforms and content for universities, colleges, and education ministries.</p>
              </div>
              <div className="hidden lg:block">
                <div className="relative rounded-[12px] overflow-hidden border border-gray-200 shadow-sm" style={{ aspectRatio: '16/6' }}>
                  <Image src="/images/home/hero-digital-learning.jpg" alt="Education technology solutions" fill sizes="50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={`item-title-${i}`} delay={i * 0.05}>
                <div className="h-full rounded-[16px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[9px] text-[13px] font-extrabold flex-shrink-0" style={{ background: 'rgba(96,165,250,0.1)', color: '#60A5FA' }}>{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-[15px] font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-gray-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA heading="Transform your institution's digital learning" body="From single-campus Moodle to multi-country education authority deployments — WHBS scales to your requirements." primaryLabel="Book a Consultation" primaryHref="/contact" secondaryLabel="LMS Development" secondaryHref="/services/lms-development" accentColor="#60A5FA" />
    </>
  )
}
