import Reveal from '@/components/ui/Reveal'

const CERTS = [
  { name: 'SCORM 1.2',    color: '#0066FF' },
  { name: 'SCORM 2004',   color: '#0066FF' },
  { name: 'xAPI',         color: '#0891B2' },
  { name: 'WCAG 2.1 AA',  color: '#6E41C0' },
  { name: 'LTI 1.3',      color: '#D97706' },
  { name: 'iGOT Approved',color: '#00A76F' },
]

export default function CertificationsSection() {
  return (
    <section className="section-py bg-gray-50 border-y border-gray-100">
      <div className="container-xl">
        <Reveal className="text-center mb-10">
          <span className="eyebrow mb-5">Compliance & Standards</span>
          <h2 className="t-h2 text-gray-900 mt-4">Built to recognised standards</h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTS.map((c, ci) => (
              <div key={`cert-${ci}`} className="flex items-center gap-2.5 px-5 py-3 rounded-[10px] bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-default">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: c.color }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[13px] font-semibold text-gray-800">{c.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
