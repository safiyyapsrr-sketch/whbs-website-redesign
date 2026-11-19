import Reveal from '@/components/ui/Reveal'

const STEPS = [
  { n: '01', title: 'Discovery',      body: 'Technical assessment, stakeholder interviews, requirement documentation, integration mapping.',         color: '#0066FF' },
  { n: '02', title: 'Architecture',   body: 'Solution design, platform selection, infrastructure sizing, delivery roadmap agreement.',               color: '#00A76F' },
  { n: '03', title: 'Development',    body: 'Agile build sprints with weekly client reviews, QA testing, and milestone sign-offs.',                  color: '#6E41C0' },
  { n: '04', title: 'UAT & Feedback', body: 'Structured user acceptance testing with documented feedback loops and resolution tracking.',             color: '#D97706' },
  { n: '05', title: 'Go-Live',        body: 'Phased rollout, training delivery, hypercare support window, and ongoing SLA engagement.',              color: '#E11D48' },
]

export default function ProcessSection() {
  return (
    <section className="section-py bg-white border-y border-gray-100" id="process">
      <div className="container-xl">
        <Reveal className="text-center mb-14">
          <span className="eyebrow mb-5">How We Work</span>
          <h2 className="t-h2 text-gray-900 mt-4">Structured delivery, every engagement</h2>
          <p className="text-lead text-gray-500 mt-4 max-w-[440px] mx-auto">A proven methodology refined across 1,100+ projects over 26 years.</p>
        </Reveal>

        <Reveal>
          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[23px] left-[10%] right-[10%] h-[2px]" style={{ background: 'linear-gradient(90deg,#0066FF,#00A76F,#6E41C0,#D97706,#E11D48)' }} aria-hidden="true"/>
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {STEPS.map((s, si) => (
                <div key={`step-${si}`} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-extrabold text-white mb-7 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{ background: s.color }}>
                    {si + 1}
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: s.color }}>{s.title}</div>
                  <p className="text-[13px] text-gray-500 leading-[1.65]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden flex flex-col gap-0">
            {STEPS.map((s, si) => (
              <div key={`stepv-${si}`} className="flex gap-5 relative pb-8 last:pb-0">
                {si < STEPS.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-[2px]" style={{ background: `linear-gradient(180deg,${s.color},${STEPS[si+1].color})` }} aria-hidden="true"/>
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[14px] font-extrabold text-white flex-shrink-0 z-10 border-4 border-white shadow-md" style={{ background: s.color }}>{si+1}</div>
                <div className="pt-2">
                  <div className="text-[14px] font-bold text-gray-900 mb-1">{s.title}</div>
                  <p className="text-[13px] text-gray-500 leading-[1.65]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
