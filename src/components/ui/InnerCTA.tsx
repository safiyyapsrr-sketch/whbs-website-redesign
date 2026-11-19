import Link from 'next/link'
import Image from 'next/image'

interface Props {
  heading?: string
  body?: string
  sub?: string
  primaryLabel?: string
  primaryHref?: string
  cta?: string
  href?: string
  secondaryLabel?: string
  secondaryHref?: string
  accentColor?: string
}

export default function InnerCTA({
  heading = 'Ready to get started?',
  body,
  sub,
  primaryLabel,
  cta,
  primaryHref,
  href,
  secondaryLabel = 'All Services',
  secondaryHref = '/services',
  accentColor = '#0066FF',
}: Props) {
  const bodyText = body ?? sub ?? 'Talk to a WHBS solutions architect about your requirements.'
  const btnLabel = primaryLabel ?? cta ?? 'Book a Demo'
  const btnHref = primaryHref ?? href ?? '/contact'

  return (
    <section className="relative overflow-hidden py-20 px-6" aria-label="Call to action">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/contact-cta-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Overlay tinted to accentColor */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg,rgba(5,10,30,0.90) 0%,rgba(5,10,30,0.85) 55%,rgba(5,10,30,0.90) 100%)` }}
          aria-hidden="true"
        />
        {/* Accent glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: `radial-gradient(circle,${accentColor}18 0%,transparent 65%)` }}
          aria-hidden="true"
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: accentColor }}>
            Let&rsquo;s Talk
          </p>
          <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            {heading}
          </h2>
          <p className="text-[16px] text-white/55 mb-8 leading-relaxed max-w-[580px] mx-auto">
            {bodyText}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={btnHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[14px] font-bold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: accentColor }}
            >
              {btnLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[14px] font-semibold text-white/70 no-underline border border-white/20 hover:border-white/40 hover:text-white transition-all"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
