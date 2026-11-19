'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden section-py" aria-label="Get in touch">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/enterprise-transform-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(0,20,60,0.92) 0%,rgba(0,50,150,0.85) 50%,rgba(0,30,80,0.90) 100%)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.7) 1px,transparent 0)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
      </div>

      <div className="container-xl relative z-10">
        <Reveal>
          <div className="text-center max-w-[680px] mx-auto">
            <h2 className="t-h1 text-white mb-5">Ready to transform your enterprise?</h2>
            <p className="text-lead text-white/65 mb-10">Book a no-obligation discovery call. Our team will assess your requirements and propose a solution within 48 hours.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact" className="btn btn-dark btn-lg">
                Book a Discovery Call
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M3 7.5h9M7.5 3l4.5 4.5-4.5 4.5"/></svg>
              </Link>
              <a href="mailto:info@whitehouseit.com" className="btn btn-white-outline btn-lg">info@whitehouseit.com</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/15">
              {[
                { text:'No spam, ever', icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                { text:'24hr response',  icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
                { text:'14 countries',   icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
                { text:'Free call',      icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> },
              ].map(({ text, icon }, i) => (
                <div key={`tr-${i}`} className="flex items-center gap-2 text-[13px] text-blue-100">
                  <span className="text-blue-200 opacity-80">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
