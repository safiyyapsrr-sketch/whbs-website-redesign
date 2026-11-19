import Link from 'next/link'

interface Breadcrumb { label: string; href?: string }
interface Props {
  eyebrow: string; title: string; subtitle: string
  accentColor?: string; breadcrumbs?: Breadcrumb[]
  stats?: { value: string; label: string }[]
}

export default function PageHero({ eyebrow, title, subtitle, accentColor = '#0066FF', breadcrumbs, stats }: Props) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-gray-200">
      <div className="absolute inset-0 pointer-events-none bg-mesh opacity-60" aria-hidden="true" />
      <div className="container-xl relative z-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0066FF] transition-colors no-underline">Home</Link>
            {breadcrumbs.map((bc, bi) => (
              <span key={`bc-${bi}`} className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-[#0066FF] transition-colors no-underline">{bc.label}</Link>
                ) : (
                  <span className="font-semibold" style={{ color: accentColor }}>{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow mb-5" style={{ color: accentColor, background: `${accentColor}10`, borderColor: `${accentColor}25` }}>
          {eyebrow}
        </span>
        <h1 className="text-clamp-hero font-extrabold tracking-[-0.04em] text-gray-900 leading-[1.1] mb-5 max-w-[760px]"
          dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-[18px] text-gray-600 leading-[1.7] max-w-[600px]">{subtitle}</p>
        {stats && (
          <div className="flex gap-10 mt-10 pt-8 flex-wrap border-t border-gray-200">
            {stats.map((s, si) => (
              <div key={`phstat-${si}`}>
                <div className="text-[28px] font-extrabold tracking-tight" style={{ color: accentColor }}>{s.value}</div>
                <div className="text-[12px] text-gray-500 mt-0.5 uppercase tracking-wide font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
