'use client'

import Link from 'next/link'
import Image from 'next/image'

const TOTAL_CLIENTS = 56
const LOGO_NUMS = Array.from({ length: TOTAL_CLIENTS }, (_, i) => i + 1)

function MarqueeLogo({ n }: { n: number }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 rounded-[10px] mx-1"
      style={{ width: 238, height: 110 }}
    >
      <div style={{ position: 'relative', width: 195, height: 88 }}>
        <Image
          src={`/images/clients/client${n}.png`}
          alt={`Client ${n}`}
          fill
          sizes="195px"
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-100" aria-label="Our clients">
      <p className="text-center text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-8 px-4">
        Trusted by governments, ministries &amp; enterprises across 14 countries
      </p>

      {/* suppressHydrationWarning prevents browser-extension-induced mismatch warnings */}
      <div className="marquee-wrap" suppressHydrationWarning style={{ paddingBottom: 2 }}>
        <div className="marquee-track" suppressHydrationWarning>
          {LOGO_NUMS.map(n => <MarqueeLogo key={`a-${n}`} n={n} />)}
          {LOGO_NUMS.map(n => <MarqueeLogo key={`b-${n}`} n={n} />)}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/company/clients-partners"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-[13px] font-semibold text-[#0066FF] border border-[#CCE0FF] bg-[#EBF2FF] hover:bg-[#CCE0FF] hover:border-[#0066FF] no-underline transition-all duration-200"
        >
          View All Clients &amp; Partners
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
