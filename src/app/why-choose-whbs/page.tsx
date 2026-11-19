import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import InnerCTA from '@/components/ui/InnerCTA'

// Content moved verbatim from the former Products page "Why Choose WHBS" section.

const BENEFIT_ICONS = [
  <svg key="bi0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  <svg key="bi1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/></svg>,
  <svg key="bi2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  <svg key="bi3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="bi4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="bi5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="20 6 9 17 4 12"/></svg>,
]

const BENEFITS = [
  { icon: 'lock', title: 'Enterprise Security', body: 'Role-based access, SSO (SAML/LDAP/OAuth 2.0), data encryption at rest and in transit, audit logs, and GDPR-compliant data handling.', color: '#0052CC' },
  { icon: 'refresh', title: 'Seamless Integration', body: 'Open REST API, LTI 1.3, SCORM, xAPI, and webhooks. Connect HR systems, CRMs, payment gateways, video platforms, and BI tools without custom middleware.', color: '#7C3AED' },
  { icon: 'trend', title: 'Built to Scale', body: 'From 200 learners to 500,000+ concurrent users. Horizontal scaling, CDN delivery, and performance tuning ensure consistent experience at any volume.', color: '#059669' },
  { icon: 'globe', title: 'Global Deployment', body: 'Multi-language interfaces, right-to-left layout support, timezone-aware scheduling, and localised compliance for 14+ country contexts.', color: '#B45309' },
  { icon: 'shield', title: 'Long-term Support', body: 'Annual SLA packages covering platform upgrades, plugin compatibility, security patches, performance reviews, and dedicated technical account management.', color: '#DC2626' },
  { icon: 'check', title: 'Proven Track Record', body: '1,100+ projects across 14 countries. Government-approved developer on India\'s iGOT Karmayogi national platform. 26 years in operation.', color: '#059669' },
]

export default function WhyChooseWhbsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/company/why-choose-whbs.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,rgba(5,10,30,0.93) 0%,rgba(8,15,40,0.88) 55%,rgba(5,20,50,0.90) 100%)' }}
            aria-hidden="true"
          />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/about" className="hover:text-white transition-colors no-underline">Company</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/65 font-medium">Why Choose WHBS</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-bold tracking-[0.1em] uppercase text-blue-300 mb-6">
            Why Choose WHBS
          </span>
          <h1
            className="font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-5 max-w-[640px]"
            style={{ fontSize: 'clamp(34px,4.5vw,56px)' }}
          >
            Enterprise-grade by default, not by upsell
          </h1>
          <p className="text-[17px] text-white/55 max-w-[520px] leading-[1.65]">
            Every WHBS deployment includes security, scalability, and long-term support as standard.
          </p>
        </div>
      </section>

      {/* ── BENEFITS — infographic layout, content unchanged ────────────── */}
      <section className="relative overflow-hidden py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

            {/* Left benefits */}
            <div className="flex flex-col gap-5">
              {BENEFITS.slice(0, 3).map((b, bIdx) => (
                <Reveal key={`bl-${bIdx}`} delay={bIdx * 0.07}>
                  <div className="flex items-start gap-4 p-5 rounded-[14px] bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-gray-100/60 transition-colors duration-200">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: `${b.color}10`, color: b.color }}
                      aria-hidden="true"
                    >
                      {BENEFIT_ICONS[bIdx]}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-gray-900 mb-1">{b.title}</h3>
                      <p className="text-[12px] text-gray-500 leading-[1.65]">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Center image */}
            <Reveal delay={0.1}>
              <div className="relative flex items-center justify-center">
                <div
                  className="relative w-full rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl"
                  style={{ aspectRatio: '1/1', maxWidth: 320, margin: '0 auto' }}
                >
                  <Image
                    src="/images/why-whbs/center-image.png"
                    alt="WHBS enterprise platform capabilities"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg,rgba(0,102,255,0.25),transparent)' }}
                    aria-hidden="true"
                  />
                  {/* Centre overlay badge */}
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="w-full p-4 rounded-[10px] bg-black/50 backdrop-blur-sm border border-white/10">
                      <div className="text-[22px] font-extrabold text-white leading-none mb-1">26+</div>
                      <div className="text-[11px] text-white/50 font-medium uppercase tracking-wide">Years delivering excellence</div>
                    </div>
                  </div>
                </div>
                {/* Connecting lines decoration */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-8 border-t border-dashed border-gray-200" aria-hidden="true" />
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-8 border-t border-dashed border-gray-200" aria-hidden="true" />
              </div>
            </Reveal>

            {/* Right benefits */}
            <div className="flex flex-col gap-5">
              {BENEFITS.slice(3).map((b, bIdx) => (
                <Reveal key={`br-${bIdx}`} delay={bIdx * 0.07}>
                  <div className="flex items-start gap-4 p-5 rounded-[14px] bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-gray-100/60 transition-colors duration-200">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: `${b.color}10`, color: b.color }}
                      aria-hidden="true"
                    >
                      {BENEFIT_ICONS[bIdx + 3]}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-gray-900 mb-1">{b.title}</h3>
                      <p className="text-[12px] text-gray-500 leading-[1.65]">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InnerCTA
        heading="See why enterprises choose WHBS"
        sub="Book a discovery call and see how WHBS's standard-by-default approach applies to your project."
        cta="Start the Conversation"
        href="/contact"
        accentColor="#0066FF"
      />
    </>
  )
}
