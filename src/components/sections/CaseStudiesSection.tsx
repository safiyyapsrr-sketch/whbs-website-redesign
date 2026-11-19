'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

function IcoGov()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/></svg> }
function IcoEdu()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 10v6M2 10l10-5 10 5M6 12v5c3 3 9 3 12 0v-5"/></svg> }
function IcoBook() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> }
function IcoIot()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> }

const CASES = [
  { id:'igot', client:'Government of India — iGOT Karmayogi', region:'India', sector:'Government', Icon:IcoGov,
    engagement:'National civil servant eLearning module development',
    outcome:'5 SCORM-compliant modules live on India\'s national civil servant training portal across Customs, Railways, Water Resources, Corporate Affairs, and Animal Husbandry.',
    metrics:[{v:'5',l:'Modules Live'},{v:'SCORM',l:'Compliant'},{v:'5+',l:'Departments'}],
    services:['eLearning Content Dev','Instructional Design','SCORM Packaging','QA Testing'],
    color:'#00A76F', bg:'#E6F7F2', border:'#B3E8D7' },
  { id:'brunei', client:'Alif Technologies & Ministry of Education', region:'Brunei Darussalam', sector:'Education', Icon:IcoEdu,
    engagement:'Moodle LMS customization & eLearning delivery',
    outcome:'Full Moodle LMS theme design, curriculum mapping by certified instructional designers, and eLearning modules delivered on schedule.',
    metrics:[{v:'On Time',l:'Delivery'},{v:'Moodle',l:'Platform'},{v:'100%',l:'Curriculum'}],
    services:['Moodle LMS','Curriculum Mapping','eLearning Dev','Theme Design'],
    color:'#0066FF', bg:'#EBF2FF', border:'#CCE0FF' },
  { id:'cambridge', client:'Educational Publisher, Cambridge U.K.', region:'Cambridge, U.K.', sector:'Education', Icon:IcoBook,
    engagement:'Seven-year multimedia production partnership',
    outcome:'Seven consecutive years of multimedia production including interactive science simulations, data visualisations, and educational animations to UK publishing standards.',
    metrics:[{v:'7+',l:'Years'},{v:'UK',l:'Standards'},{v:'100%',l:'On-Schedule'}],
    services:['Multimedia Production','Simulations','Science Animation','Content Design'],
    color:'#6E41C0', bg:'#F0EAFB', border:'#D8C8F5' },
  { id:'iot', client:'Indian Manufacturing Enterprises', region:'India', sector:'Manufacturing', Icon:IcoIot,
    engagement:'Industrial IoT automation programme',
    outcome:'Over ten factory-grade IoT implementations connecting production machinery with real-time monitoring, predictive maintenance, and ERP integration.',
    metrics:[{v:'10+',l:'Implementations'},{v:'Live',l:'Monitoring'},{v:'ERP',l:'Integrated'}],
    services:['IoT Engineering','Edge Computing','Dashboard Dev','ERP Integration'],
    color:'#D97706', bg:'#FFFBEB', border:'#FDE68A' },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 0%,rgba(0,102,255,0.04) 0%,transparent 60%)' }} aria-hidden="true"/>
      <div className="container-xl relative z-10">
        <Reveal className="mb-14">
          <span className="eyebrow mb-4">Case Studies</span>
          <h2 className="t-h2 text-gray-900 mt-4 max-w-[580px]">Real engagements. Verifiable outcomes.</h2>
          <p className="text-lead text-gray-500 mt-4 max-w-[480px]">Every metric is drawn from actual WHBS project delivery — no placeholder numbers.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((cs, ci) => (
            <motion.article key={`cs-${ci}`}
              whileHover={{ y: -5, boxShadow: '0 24px 56px rgba(0,0,0,0.10)' }}
              className="bg-white rounded-[16px] border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-gray-200"
            >
              <div className="h-1 w-full" style={{ background: cs.color }} aria-hidden="true"/>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full inline-block mb-2" style={{ color: cs.color, background: cs.bg, border: `1px solid ${cs.border}` }}>{cs.sector}</span>
                    <h3 className="text-[16px] font-bold text-gray-900 leading-tight">{cs.client}</h3>
                    <p className="text-[13px] mt-0.5 font-medium" style={{ color: cs.color }}>{cs.region}</p>
                  </div>
                  <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: cs.bg, color: cs.color }}>
                    <cs.Icon />
                  </div>
                </div>
                <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-400 mb-2">{cs.engagement}</p>
                <p className="text-[14px] text-gray-600 leading-[1.75] mb-5 flex-1">{cs.outcome}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {cs.metrics.map((m, mi) => (
                    <div key={`m-${ci}-${mi}`} className="flex flex-col items-center px-4 py-2.5 rounded-[10px]" style={{ background: cs.bg, border: `1px solid ${cs.border}` }}>
                      <span className="text-[18px] font-extrabold tracking-tight" style={{ color: cs.color }}>{m.v}</span>
                      <span className="text-[10px] font-bold tracking-wide uppercase text-gray-500 mt-0.5">{m.l}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                  {cs.services.map((s, si) => <span key={`s-${ci}-${si}`} className="tag text-[11px]">{s}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/news" className="btn btn-secondary no-underline">
            View All Case Studies
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
