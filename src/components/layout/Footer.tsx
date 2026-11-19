import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_COMPANY, FOOTER_SOLUTIONS, FOOTER_CONTACT } from '@/lib/data'

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/whbschennai/', svg: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>' },
  { label: 'X / Twitter', href: 'https://x.com/whbslearning', svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/user/Whitehousechennai', svg: '<path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/whitehouseit/', svg: '<path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>' },
]

const CERTS = [
  { name: 'SCORM 1.2', c: '#0066FF' }, { name: 'SCORM 2004', c: '#0066FF' },
  { name: 'xAPI', c: '#0891B2' }, { name: 'WCAG 2.1 AA', c: '#7C3AED' },
  { name: 'LTI 1.3', c: '#D97706' }, { name: 'iGOT Approved', c: '#059669' },
]

function FooterCol({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-5">{heading}</h4>
      <ul className="flex flex-col gap-3 list-none m-0 p-0">
        {links.map((l, li) => {
          const ext = l.href.startsWith('http') || l.href.startsWith('mailto') || l.href.startsWith('tel')
          return (
            <li key={`fc-${heading}-${li}`}>
              {ext ? (
                <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[14px] text-gray-400 no-underline hover:text-white transition-colors duration-200">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="text-[14px] text-gray-400 no-underline hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0A0F1E" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.6) 30%,rgba(52,211,153,0.5) 60%,transparent)' }} aria-hidden="true" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} aria-hidden="true" />
      {/* Glow orbs */}
      <div className="absolute top-12 -right-32 w-96 h-96 rounded-full opacity-[0.06] blur-3xl" style={{ background: 'radial-gradient(circle,#3385FF,transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-12 -left-32 w-80 h-80 rounded-full opacity-[0.05] blur-3xl" style={{ background: 'radial-gradient(circle,#6366F1,transparent)' }} aria-hidden="true" />

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.06] py-12 px-6">
        <div className="container-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-[24px] font-extrabold text-white tracking-tight mb-1.5">Ready to transform your enterprise?</h3>
            <p className="text-gray-400 text-[15px]">Our solutions architects respond within 24 business hours.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-dark no-underline">Book a Demo</Link>
            <a href="tel:+914425619113" className="btn btn-white-outline no-underline">+91-44-2561 9113</a>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────────────── */}
      <div className="relative container-xl py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand — spans 2 */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <div className="bg-white rounded-[12px] inline-block px-4 py-3">
                <Image src="/logo.png" alt="White House Business Solutions" width={180} height={48} className="h-10 w-auto object-contain" />
              </div>
            </div>

            <p className="text-[14px] text-gray-400 leading-[1.8] mb-6 max-w-[300px]">
              Enterprise technology company delivering LMS, eLearning, ERP, and IoT solutions since 1999. Trusted across 14 countries with 26+ years of expertise.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2 mb-7">
              {SOCIAL.map((s, si) => (
                <a key={`fs-${si}`} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-[8px] border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:bg-[#0066FF] hover:border-blue-500 hover:text-white transition-all duration-200 no-underline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" dangerouslySetInnerHTML={{ __html: s.svg }} />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-600 mb-3">Standards & Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {CERTS.map((c, ci) => (
                  <span key={`fc-${ci}`} className="text-[10px] font-semibold px-2 py-1 rounded-[5px] border"
                    style={{ color: c.c, background: `${c.c}12`, borderColor: `${c.c}30` }}>{c.name}</span>
                ))}
              </div>
            </div>
          </div>

          <FooterCol heading="Company" links={FOOTER_COMPANY} />
          <FooterCol heading="Services" links={FOOTER_SOLUTIONS} />
          <FooterCol heading="Contact" links={FOOTER_CONTACT} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-4">
          <p className="text-[12px] text-gray-600">© 2026 White House Business Solutions Pvt Ltd. All rights reserved. | Fax: +91-44-25619100</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'pulseDot 2s infinite' }} aria-hidden="true" />
            <span className="text-[11px] text-gray-600 uppercase tracking-widest font-semibold">Enterprise Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
