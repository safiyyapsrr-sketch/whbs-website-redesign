import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import ClientLogoGrid from '@/components/ui/ClientLogoGrid'
import InnerCTA from '@/components/ui/InnerCTA'

export const metadata: Metadata = {
  title: 'Clients & Partners — White House Business Solutions',
  description: 'WHBS serves 56+ clients and maintains 5 strategic technology partnerships across 14 countries.',
}

// Partners: partner1.png through partner5.png from /public/images/partners/
const PARTNER_COUNT = 5

export default function PartnersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/clients-partners-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg,rgba(6,13,31,0.92) 0%,rgba(13,20,37,0.88) 55%,rgba(7,22,53,0.90) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.04) 1px,transparent 0)', backgroundSize: '100px 100px' }} aria-hidden="true" />
        </div>

        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/35 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <span className="text-white/60 font-medium">Clients &amp; Partners</span>
          </nav>

          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true"/>
              <span className="text-[11px] font-semibold text-white/55 tracking-wide uppercase">14 Countries · 26 Years</span>
            </div>
            <h1 className="t-h1 font-extrabold text-white mb-5">
              Clients &amp; Partners
            </h1>
            <p className="text-lead text-white/50 max-w-[520px]">
              Governments, education ministries, and enterprises across South Asia, Southeast Asia, the Middle East, and the United Kingdom.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[['56+','Clients'],['14','Countries'],['5','Partners'],['26+','Years']].map(([n,l],i)=>(
              <div key={i} className="text-center px-5 py-3.5 rounded-[10px] border border-white/10 bg-white/[0.05]">
                <div className="text-[26px] font-extrabold text-white leading-none">{n}</div>
                <div className="text-[11px] text-white/40 font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL CLIENTS GRID ─────────────────────────────────────────── */}
      <section className="section-py-lg bg-gray-50">
        <div className="container-xl">
          <Reveal className="mb-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="eyebrow mb-4">Our Clients</span>
                <h2 className="t-h2 text-gray-900 mt-4">56+ organisations worldwide</h2>
                <p className="text-lead text-gray-500 mt-3 max-w-[460px]">
                  Governments, ministries of education, and enterprises that have trusted WHBS for technology delivery.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ClientLogoGrid count={56} cols={{ mobile: 2, tablet: 4, desktop: 8 }} />
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-py">
        <div className="absolute inset-0 z-0">
          <Image src="/images/testimonials/brunei-testimonial-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(2,8,30,0.88) 0%,rgba(5,15,45,0.85) 55%,rgba(2,8,30,0.88) 100%)' }} aria-hidden="true" />
        </div>
        <div className="container-xl">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_,i)=>(
                  <svg key={i} width="20" height="20" viewBox="0 0 18 18" fill="#FFB020" aria-hidden="true">
                    <path d="M9 1.5l2.09 4.26L16 6.62l-3.5 3.41.83 4.82L9 12.27l-4.33 2.58.83-4.82L2 6.62l4.91-.86z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-[19px] lg:text-[22px] font-semibold text-white leading-[1.55] mb-6">
                &ldquo;WHBS demonstrated a high level of professionalism, knowledge, and team capability. The team was very prompt and the project was delivered on time.&rdquo;
              </blockquote>
              <div>
                <div className="text-[14px] font-bold text-white">Pengiran Mohammed bin Pengiran Haji Kamaluddin</div>
                <div className="text-[13px] text-white/60 mt-0.5">Chairman, Alif Technologies SDN BHD · Ministry of Education, Brunei Darussalam</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TECHNOLOGY & STRATEGIC PARTNERS ─────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow mb-4">Technology &amp; Strategic Partners</span>
            <h2 className="t-h2 text-gray-900 mt-4">Our technology alliances</h2>
            <p className="text-lead text-gray-500 mt-3 max-w-[400px] mx-auto">
              Platforms and frameworks powering WHBS client engagements.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1).map(n => (
                <div
                  key={n}
                  className="flex items-center justify-center rounded-[14px] bg-white border border-gray-150 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
                  style={{ padding: '28px 20px', minHeight: 140, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                >
                  <div
                    className="relative group-hover:scale-108 transition-transform duration-300"
                    style={{ width: 160, height: 92 }}
                  >
                    <Image
                      src={`/images/partners/partner${n}.png`}
                      alt={`Technology partner ${n}`}
                      fill
                      sizes="160px"
                      className="object-contain"
                      style={{ filter: 'grayscale(20%)', transition: 'filter 0.3s' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InnerCTA
        heading="Work with a proven partner"
        sub="1,100+ projects delivered across 14 countries. Book a discovery call to discuss your requirements."
        cta="Book a Discovery Call"
        href="/contact"
        accentColor="#0066FF"
      />
    </>
  )
}
