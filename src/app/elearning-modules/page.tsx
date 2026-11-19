'use client'

import Image from 'next/image'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

// ── iGOT external URL (never modify) ──────────────────────────────────────
const IGOT_URL = 'https://portal.igotkarmayogi.gov.in/auth/realms/sunbird/protocol/openid-connect/auth?client_id=portal&state=1f1d20e0-2d7f-40ce-bd47-902b4338288f&redirect_uri=https%3A%2F%2Fportal.igotkarmayogi.gov.in%2Fprotected%2Fv8%2Fresource%2F%3Fredirect_uri%3D%252Fapp%252Ftoc%252Fdo_1141108111275704321384%252Foverview%26auth_callback%3D1&scope=openid&response_type=code'

type Category =
  | 'Tax & GST'
  | 'Government & Civil Service'
  | 'Banking & Finance'
  | 'Corporate Compliance'
  | 'Manufacturing & Safety'
  | 'IT & Cybersecurity'
  | 'Leadership & HR'
  | 'Healthcare'

interface Module { id: number; title: string; duration: string; category: Category; desc: string }

// 97 modules — descriptions added for the card body
const MODULES: Module[] = [
  // Tax & GST (16)
  { id: 1,  category: 'Tax & GST',                  duration: '45 min',  title: 'GST Introduction & Overview',                desc: 'Foundational overview of India\'s Goods and Services Tax structure, objectives, and key terminology for practitioners.' },
  { id: 2,  category: 'Tax & GST',                  duration: '60 min',  title: 'GST Basics & Core Concepts',                  desc: 'Supply, value of supply, taxable events, and the dual GST model covering CGST, SGST, and IGST framework.' },
  { id: 3,  category: 'Tax & GST',                  duration: '50 min',  title: 'GST Registration Process',                    desc: 'Step-by-step GST registration for businesses — threshold limits, mandatory fields, and document requirements.' },
  { id: 4,  category: 'Tax & GST',                  duration: '45 min',  title: 'GST Payments & Challan Generation',           desc: 'Electronic cash/credit ledger management, challan creation, and payment mechanisms under the GST portal.' },
  { id: 5,  category: 'Tax & GST',                  duration: '55 min',  title: 'GST Compliance Calendar',                     desc: 'Monthly, quarterly, and annual return filing deadlines with due date tracking and penalty avoidance strategies.' },
  { id: 6,  category: 'Tax & GST',                  duration: '70 min',  title: 'GST Return Filing (GSTR-1, GSTR-3B)',         desc: 'Practical walkthrough of outward supply statements, summary returns, and reconciliation requirements.' },
  { id: 7,  category: 'Tax & GST',                  duration: '40 min',  title: 'IGST — Inter-State Transactions',              desc: 'Integrated GST applicability on interstate trade, import/export of goods and services, and place of supply rules.' },
  { id: 8,  category: 'Tax & GST',                  duration: '50 min',  title: 'Input Tax Credit (ITC) Mechanism',             desc: 'Eligibility, conditions, restrictions, and reversal rules for claiming ITC under CGST/SGST/IGST.' },
  { id: 9,  category: 'Tax & GST',                  duration: '60 min',  title: 'GST Audit & Departmental Scrutiny',           desc: 'GST audit process, departmental notices, adjudication, and handling tax demands and appeals.' },
  { id: 10, category: 'Tax & GST',                  duration: '45 min',  title: 'GST Refunds & Claims',                        desc: 'Refund eligibility for exporters, inverted duty structure, and online refund application procedures.' },
  { id: 11, category: 'Tax & GST',                  duration: '40 min',  title: 'E-Way Bill System',                           desc: 'Generation, modification, and cancellation of e-way bills for goods movement exceeding ₹50,000.' },
  { id: 12, category: 'Tax & GST',                  duration: '45 min',  title: 'GST Annual Return (GSTR-9)',                  desc: 'Preparation, reconciliation, and filing of the annual consolidated GST return including GSTR-9C.' },
  { id: 13, category: 'Tax & GST',                  duration: '35 min',  title: 'CGST — Central Goods & Services Tax',         desc: 'Central GST levy, collection authority, ITC flow on central tax, and compliance obligations for central supplies.' },
  { id: 14, category: 'Tax & GST',                  duration: '35 min',  title: 'SGST — State Goods & Services Tax',           desc: 'State-level GST provisions, state-specific compliance, and state government revenue allocation mechanisms.' },
  { id: 15, category: 'Tax & GST',                  duration: '50 min',  title: 'GST for E-Commerce Operators',                desc: 'TCS obligations, marketplace liability, GSTR-8 filing, and compliance for online aggregators and sellers.' },
  { id: 16, category: 'Tax & GST',                  duration: '45 min',  title: 'GST Anti-Profiteering Provisions',            desc: 'Anti-profiteering rules, National Anti-Profiteering Authority, and passing of ITC benefits to end consumers.' },

  // Government & Civil Service (20)
  { id: 17, category: 'Government & Civil Service',  duration: '90 min',  title: 'Prosecution in Customs',                      desc: 'Live on iGOT Karmayogi — customs adjudication procedures, penalty provisions, and prosecution guidelines for officers.' },
  { id: 18, category: 'Government & Civil Service',  duration: '90 min',  title: 'Performance Appraisal in Indian Railways',    desc: 'Live on iGOT — APAR system, KRA setting, performance review cycles, and promotion implications in Railway service.' },
  { id: 19, category: 'Government & Civil Service',  duration: '90 min',  title: 'Department of Water Resources',               desc: 'Live on iGOT — water resource management, dam safety, irrigation policy, and regulatory frameworks for civil servants.' },
  { id: 20, category: 'Government & Civil Service',  duration: '90 min',  title: 'Know Your Company (Corporate Affairs)',       desc: 'Live on iGOT — Ministry of Corporate Affairs compliance framework and company law for regulatory officers.' },
  { id: 21, category: 'Government & Civil Service',  duration: '90 min',  title: 'Dept. of Animal Husbandry & Dairying',       desc: 'Live on iGOT — policies, schemes, and compliance for the Ministry of Fisheries, Animal Husbandry, and Dairying.' },
  { id: 22, category: 'Government & Civil Service',  duration: '4 hrs',   title: 'Civil Services Conduct Rules & Ethics',      desc: 'CCS Conduct Rules, AIS Conduct Rules, and All India Services norms for government officers and civil servants.' },
  { id: 23, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'RTI Act — Right to Information',              desc: 'Obligations of public authorities, PIOs, exemptions, appeals, and practical case studies under the RTI Act 2005.' },
  { id: 24, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'Prevention of Corruption Act',                desc: 'Provisions, offences, penalties, and preventive vigilance measures under the Prevention of Corruption Act 1988.' },
  { id: 25, category: 'Government & Civil Service',  duration: '4 hrs',   title: 'Public Procurement & GFR',                   desc: 'General Financial Rules, procurement procedures, tendering, and e-procurement for government officers.' },
  { id: 26, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'Service Rules — Leave & Pension',            desc: 'CCS Leave Rules, Pension Rules, and service entitlements for central government employees.' },
  { id: 27, category: 'Government & Civil Service',  duration: '2 hrs',   title: 'Disaster Management Act & DM Plans',         desc: 'National, state, and district disaster management plans and roles of civil servants during emergencies.' },
  { id: 28, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'e-Governance Initiatives in India',          desc: 'Digital India, MeitY initiatives, GeM, UMANG, and citizen-centric digital public service delivery.' },
  { id: 29, category: 'Government & Civil Service',  duration: '4 hrs',   title: 'Budget Preparation & Expenditure Management', desc: 'Annual Budget cycle, expenditure management, treasury, and role of PAC and CAG in public finance.' },
  { id: 30, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'Central Vigilance Commission',               desc: 'CVC constitution, jurisdiction, investigation procedures, and departmental action against government servants.' },
  { id: 31, category: 'Government & Civil Service',  duration: '2 hrs',   title: 'Office Procedure — Government of India',     desc: 'Swamy\'s manual compliance, noting, drafting, file movement, and correspondence norms for government offices.' },
  { id: 32, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'Citizen Charter & Service Delivery',         desc: 'Citizen Charter development, service standards, redressal mechanisms, and CPGrams for central government offices.' },
  { id: 33, category: 'Government & Civil Service',  duration: '2 hrs',   title: 'Gender Sensitisation & POSH Act',            desc: 'Prevention of Sexual Harassment at Workplace — committee constitution, complaint process, and reporting norms.' },
  { id: 34, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'Comptroller & Auditor General (CAG)',         desc: 'Role of CAG, types of audit, audit reports, and responses to audit objections by government departments.' },
  { id: 35, category: 'Government & Civil Service',  duration: '2 hrs',   title: 'Public Service Values & Ethics',             desc: 'Constitutional values, integrity, impartiality, and ethical frameworks for civil service conduct.' },
  { id: 36, category: 'Government & Civil Service',  duration: '3 hrs',   title: 'PFMS & Public Financial Management',         desc: 'Public Financial Management System, plan fund releases, DBT tracking, and real-time treasury integration.' },

  // Banking & Finance (12)
  { id: 37, category: 'Banking & Finance',           duration: '4 hrs',   title: 'Banking Regulations & RBI Guidelines',       desc: 'RBI\'s regulatory framework, banking licence conditions, SLR/CRR requirements, and compliance obligations.' },
  { id: 38, category: 'Banking & Finance',           duration: '3 hrs',   title: 'KYC & AML Compliance',                       desc: 'Know Your Customer procedures, anti-money laundering rules, STR/CTR filing, and PMLA compliance.' },
  { id: 39, category: 'Banking & Finance',           duration: '3 hrs',   title: 'Credit Risk Management',                     desc: 'Credit appraisal, exposure norms, NPA classification, and Basel III capital adequacy framework.' },
  { id: 40, category: 'Banking & Finance',           duration: '4 hrs',   title: 'Treasury & Forex Operations',               desc: 'Money market instruments, forex market, FEMA compliance, and hedging strategies for banking professionals.' },
  { id: 41, category: 'Banking & Finance',           duration: '3 hrs',   title: 'NBFC Regulatory Framework',                  desc: 'RBI guidelines for NBFCs, licensing categories, prudential norms, and fair practices code compliance.' },
  { id: 42, category: 'Banking & Finance',           duration: '3 hrs',   title: 'Insurance Regulations (IRDAI)',               desc: 'Insurance Act provisions, IRDAI guidelines, product filing, and claims management compliance.' },
  { id: 43, category: 'Banking & Finance',           duration: '4 hrs',   title: 'Securities Market & SEBI Compliance',        desc: 'SEBI regulations, listing obligations, disclosure requirements, and corporate governance for public companies.' },
  { id: 44, category: 'Banking & Finance',           duration: '2 hrs',   title: 'Financial Inclusion & Jan Dhan',             desc: 'PMJDY, Aadhaar-linked banking, PM-Kisan, and last-mile financial inclusion service delivery for bank officers.' },
  { id: 45, category: 'Banking & Finance',           duration: '3 hrs',   title: 'Loan Documentation & Legal Aspects',         desc: 'Mortgage documents, hypothecation, SARFAESI Act provisions, and DRT proceedings for lending staff.' },
  { id: 46, category: 'Banking & Finance',           duration: '3 hrs',   title: 'Digital Banking & Fintech Compliance',       desc: 'UPI, IMPS, NEFT/RTGS, net banking compliance, and cybersecurity obligations for digital banking operations.' },
  { id: 47, category: 'Banking & Finance',           duration: '2 hrs',   title: 'Priority Sector Lending (PSL)',              desc: 'PSL targets, eligible categories, PSLC certificates, and RIDF contribution rules for scheduled commercial banks.' },
  { id: 48, category: 'Banking & Finance',           duration: '2 hrs',   title: 'Fraud Risk Management in Banks',             desc: 'Internal controls, early warning signals, CBI/ED referrals, and fraud reporting to RBI.' },

  // Corporate Compliance (14)
  { id: 49, category: 'Corporate Compliance',        duration: '3 hrs',   title: 'Companies Act 2013 — Director Obligations',  desc: 'Duties and liabilities of directors, board meetings, DIN requirements, and disclosure obligations.' },
  { id: 50, category: 'Corporate Compliance',        duration: '2 hrs',   title: 'Sexual Harassment Prevention (POSH)',         desc: 'POSH Act 2013 provisions, ICC constitution, complaint handling, annual reporting, and management obligations.' },
  { id: 51, category: 'Corporate Compliance',        duration: '3.5 hrs', title: 'Labour Laws — Factories Act',               desc: 'Health, safety, and welfare provisions of the Factories Act 1948 for manufacturing units and HR managers.' },
  { id: 52, category: 'Corporate Compliance',        duration: '4 hrs',   title: 'Environment Health & Safety (EHS)',          desc: 'EHS management systems, regulatory compliance, incident reporting, and ISO 14001 audit readiness.' },
  { id: 53, category: 'Corporate Compliance',        duration: '3 hrs',   title: 'Data Privacy & GDPR Compliance',             desc: 'GDPR principles, data subject rights, DPA obligations, consent management, and breach notification protocols.' },
  { id: 54, category: 'Corporate Compliance',        duration: '2.5 hrs', title: 'Code of Business Conduct & Ethics',         desc: 'Conflict of interest, gift policy, anti-corruption, and internal reporting channels for corporate employees.' },
  { id: 55, category: 'Corporate Compliance',        duration: '3 hrs',   title: 'Contracts Law for Business Managers',        desc: 'Contract formation, performance, breach, remedies, and key clauses for commercial agreements.' },
  { id: 56, category: 'Corporate Compliance',        duration: '3.5 hrs', title: 'Companies Act 2013 — Key Provisions',       desc: 'Company formation, share capital, annual compliances, penalties, and MCA21 portal requirements.' },
  { id: 57, category: 'Corporate Compliance',        duration: '2 hrs',   title: 'CSR — Corporate Social Responsibility',     desc: 'Section 135 obligations, CSR Committee, eligible activities, spending norms, and annual reporting under Companies Act.' },
  { id: 58, category: 'Corporate Compliance',        duration: '2 hrs',   title: 'Trade Secrets & Confidentiality',            desc: 'IP protection strategies, confidentiality agreements, non-disclosure obligations, and remedies for misappropriation.' },
  { id: 59, category: 'Corporate Compliance',        duration: '2.5 hrs', title: 'Anti-Bribery & Corruption (ABC)',            desc: 'FCPA and Bribery Act 2010 applicability, due diligence, compliance programme design, and enforcement cases.' },
  { id: 60, category: 'Corporate Compliance',        duration: '1.5 hrs', title: 'Whistleblower Policy & Reporting',           desc: 'Whistleblower protection frameworks, anonymous reporting channels, and SEBI LODR whistleblower requirements.' },
  { id: 61, category: 'Corporate Compliance',        duration: '3 hrs',   title: 'SEBI Regulations for Listed Companies',     desc: 'LODR compliance, related party transactions, insider trading policy, and corporate governance for listed entities.' },
  { id: 62, category: 'Corporate Compliance',        duration: '2 hrs',   title: 'Insider Trading Prevention',                 desc: 'SEBI PIT Regulations 2015 — trading window, preclearance, Chinese wall, and compliance officer obligations.' },

  // Manufacturing & Safety (12)
  { id: 63, category: 'Manufacturing & Safety',      duration: '6 hrs',   title: 'Workplace Safety — HSE Fundamentals',       desc: 'Hazard identification, risk assessment, safety induction, and occupational health fundamentals for production teams.' },
  { id: 64, category: 'Manufacturing & Safety',      duration: '3 hrs',   title: 'Fire Safety & Emergency Evacuation',        desc: 'Fire triangle, extinguisher selection, assembly points, and emergency response coordination on factory floors.' },
  { id: 65, category: 'Manufacturing & Safety',      duration: '4 hrs',   title: 'Chemical Handling & MSDS',                  desc: 'GHS classification, SDS interpretation, PPE selection, and emergency response for chemical incidents.' },
  { id: 66, category: 'Manufacturing & Safety',      duration: '3 hrs',   title: 'PPE Selection & Usage',                    desc: 'Standards for head, eye, hearing, hand, foot, and respiratory protection — selection criteria and maintenance.' },
  { id: 67, category: 'Manufacturing & Safety',      duration: '3 hrs',   title: 'Electrical Safety in Industry',             desc: 'Isolation, lockout/tagout, arc flash prevention, and safe working practices with industrial electrical systems.' },
  { id: 68, category: 'Manufacturing & Safety',      duration: '3 hrs',   title: 'Incident Investigation & Reporting',        desc: 'Root cause analysis, 5-Why method, near-miss reporting, and corrective action tracking for safety teams.' },
  { id: 69, category: 'Manufacturing & Safety',      duration: '4 hrs',   title: 'Risk Assessment & Job Safety Analysis',     desc: 'JSA methodology, HAZOP, FMEA principles, and risk matrix development for manufacturing environments.' },
  { id: 70, category: 'Manufacturing & Safety',      duration: '4 hrs',   title: 'ISO 14001 — Environmental Management',     desc: 'Environmental management system requirements, legal register, aspect impact assessment, and audit readiness.' },
  { id: 71, category: 'Manufacturing & Safety',      duration: '4 hrs',   title: 'ISO 45001 — Occupational Health & Safety',  desc: 'OH&S management system transition from OHSAS 18001 and implementation of ISO 45001 requirements.' },
  { id: 72, category: 'Manufacturing & Safety',      duration: '2.5 hrs', title: 'Confined Space Entry Procedures',           desc: 'Permit-to-work systems, atmospheric testing, rescue planning, and confined space entry legislation compliance.' },
  { id: 73, category: 'Manufacturing & Safety',      duration: '2 hrs',   title: 'Material Handling & Ergonomics',            desc: 'Manual handling regulations, ergonomic risk factors, and equipment selection for warehouse and production roles.' },
  { id: 74, category: 'Manufacturing & Safety',      duration: '8 hrs',   title: 'IoT Operator Training for Shop Floor',      desc: 'Industrial IoT device operation, dashboard reading, predictive maintenance alerts, and safety protocols for operators.' },

  // IT & Cybersecurity (10)
  { id: 75, category: 'IT & Cybersecurity',          duration: '4 hrs',   title: 'Cyber Security Awareness Essentials',       desc: 'Threat landscape, social engineering, safe browsing, and basic incident response for all enterprise employees.' },
  { id: 76, category: 'IT & Cybersecurity',          duration: '3 hrs',   title: 'Phishing & Social Engineering Defense',     desc: 'Email phishing recognition, vishing, pretexting, and practical simulations for employee defence training.' },
  { id: 77, category: 'IT & Cybersecurity',          duration: '2 hrs',   title: 'Password Management & MFA',                 desc: 'Password hygiene, password manager usage, multi-factor authentication setup, and account recovery procedures.' },
  { id: 78, category: 'IT & Cybersecurity',          duration: '3 hrs',   title: 'Data Classification & Protection',          desc: 'Information classification schemes, DLP policy implementation, and handling PII and sensitive business data.' },
  { id: 79, category: 'IT & Cybersecurity',          duration: '6 hrs',   title: 'SCORM & xAPI Content Development',          desc: 'eLearning standards, content packaging, LRS integration, and SCORM/xAPI authoring tool configuration.' },
  { id: 80, category: 'IT & Cybersecurity',          duration: '8 hrs',   title: 'Moodle LMS Administration',                 desc: 'Moodle installation, user management, course creation, plugin configuration, and performance tuning.' },
  { id: 81, category: 'IT & Cybersecurity',          duration: '4 hrs',   title: 'Cloud Computing Fundamentals',              desc: 'IaaS, PaaS, SaaS models, cloud security shared responsibility, and enterprise cloud migration strategies.' },
  { id: 82, category: 'IT & Cybersecurity',          duration: '4 hrs',   title: 'IT Governance — COBIT Essentials',          desc: 'COBIT 2019 framework, IT governance objectives, risk and compliance integration for IT managers.' },
  { id: 83, category: 'IT & Cybersecurity',          duration: '2 hrs',   title: 'Remote Work Security Practices',            desc: 'Secure remote access, VPN usage, home network security, and endpoint protection for hybrid workers.' },
  { id: 84, category: 'IT & Cybersecurity',          duration: '3 hrs',   title: 'Business Continuity & Disaster Recovery',   desc: 'BCP/DRP development, RTO/RPO planning, crisis communication, and tabletop exercise frameworks.' },

  // Leadership & HR (10)
  { id: 85, category: 'Leadership & HR',             duration: '12 hrs',  title: 'Leadership Essentials for Managers',        desc: 'Situational leadership, team motivation, decision-making frameworks, and leading through organisational change.' },
  { id: 86, category: 'Leadership & HR',             duration: '10 hrs',  title: 'Instructional Design — ADDIE & SAM',        desc: 'Needs analysis, learning objective design, prototype development, and formative evaluation for L&D professionals.' },
  { id: 87, category: 'Leadership & HR',             duration: '4 hrs',   title: 'Effective Communication in the Workplace',  desc: 'Active listening, presentation skills, written communication, and feedback delivery for professionals.' },
  { id: 88, category: 'Leadership & HR',             duration: '3 hrs',   title: 'Team Building & Collaboration',             desc: 'Tuckman model, psychological safety, cross-functional team dynamics, and virtual collaboration best practices.' },
  { id: 89, category: 'Leadership & HR',             duration: '4 hrs',   title: 'Performance Management & Appraisal',        desc: 'Goal setting, continuous feedback culture, performance improvement plans, and appraisal conversation techniques.' },
  { id: 90, category: 'Leadership & HR',             duration: '3 hrs',   title: 'Change Management Fundamentals',            desc: 'ADKAR and Kotter models, stakeholder engagement, resistance management, and change communication strategy.' },
  { id: 91, category: 'Leadership & HR',             duration: '3 hrs',   title: 'Diversity, Equity & Inclusion',             desc: 'Unconscious bias, inclusive hiring practices, ERG development, and creating equitable workplace cultures.' },
  { id: 92, category: 'Leadership & HR',             duration: '4 hrs',   title: 'Negotiation & Conflict Resolution',         desc: 'Interest-based negotiation, BATNA preparation, mediation techniques, and de-escalation strategies.' },
  { id: 93, category: 'Leadership & HR',             duration: '3 hrs',   title: 'Emotional Intelligence at Work',            desc: 'EQ competency model, self-awareness, empathy, and emotional regulation in high-pressure work environments.' },
  { id: 94, category: 'Leadership & HR',             duration: '8 hrs',   title: 'Project Management — PMP Foundations',      desc: 'PMBOK guide alignment, project lifecycle, scope/schedule/cost management, and stakeholder communication.' },

  // Healthcare (3)
  { id: 95, category: 'Healthcare',                  duration: '5 hrs',   title: 'Patient Safety & Clinical Governance',      desc: 'WHO patient safety goals, incident reporting, root cause analysis, and safe care protocols for clinical teams.' },
  { id: 96, category: 'Healthcare',                  duration: '4 hrs',   title: 'Infection Control & Hospital Hygiene',      desc: 'HAI prevention, hand hygiene compliance, isolation precautions, and decontamination for healthcare workers.' },
  { id: 97, category: 'Healthcare',                  duration: '3 hrs',   title: 'Medical Compliance & Documentation',         desc: 'Clinical documentation standards, record-keeping obligations, consent forms, and medico-legal requirements.' },
]

const ALL_CATEGORIES: Category[] = [
  'Tax & GST', 'Government & Civil Service', 'Banking & Finance', 'Corporate Compliance',
  'Manufacturing & Safety', 'IT & Cybersecurity', 'Leadership & HR', 'Healthcare',
]

const CAT_COLOR: Record<Category, string> = {
  'Tax & GST':                  '#0066FF',
  'Government & Civil Service': '#00A76F',
  'Banking & Finance':          '#0891B2',
  'Corporate Compliance':       '#6E41C0',
  'Manufacturing & Safety':     '#DC2626',
  'IT & Cybersecurity':         '#0891B2',
  'Leadership & HR':            '#4F46E5',
  'Healthcare':                 '#BE185D',
}

const ITEMS_PER_PAGE = 30

// ── Module Card — clean text card per spec ─────────────────────────────────
function ModuleCard({ mod, index }: { mod: Module; index: number }) {
  const color = CAT_COLOR[mod.category]
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.025, 0.35), duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[12px] border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-250 flex flex-col"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full rounded-t-[12px]" style={{ background: color }} aria-hidden="true" />
      <div className="p-5 flex flex-col flex-1">
        {/* Category + duration row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="text-[10px] font-bold tracking-[0.07em] uppercase px-2.5 py-1 rounded-full"
            style={{ color, background: `${color}12`, border: `1px solid ${color}22` }}
          >
            {mod.category}
          </span>
          <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1 flex-shrink-0">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {mod.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[14px] font-bold text-gray-900 leading-[1.45] mb-2.5 group-hover:text-[#0066FF] transition-colors">
          {mod.title}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-gray-500 leading-[1.65] flex-1 mb-4 line-clamp-3">
          {mod.desc}
        </p>

        {/* CTA */}
        <a
          href={IGOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold no-underline transition-all duration-200"
          style={{ color }}
          aria-label={`Learn more about ${mod.title} on iGOT Karmayogi`}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.2} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true"><path d="M7 1h4v4M11 1L5 7M3 3H1v8h8V9"/></svg>
        </a>
      </div>
    </motion.article>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function ElearningModulesPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let mods = MODULES
    if (activeCategory !== 'All') mods = mods.filter(m => m.category === activeCategory)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      mods = mods.filter(m => m.title.toLowerCase().includes(q) || m.category.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q))
    }
    return mods
  }, [activeCategory, searchQuery])

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE)
  const hasMore = paginated.length < filtered.length

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: MODULES.length }
    ALL_CATEGORIES.forEach(cat => { c[cat] = MODULES.filter(m => m.category === cat).length })
    return c
  }, [])

  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveCategory(cat)
    setPage(1)
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/elearning-library-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(6,13,31,0.92) 0%,rgba(13,20,37,0.88) 55%,rgba(7,22,53,0.90) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.04) 1px,transparent 0)', backgroundSize: '100px 100px' }} aria-hidden="true"/>
        </div>

        <div className="container-xl relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[12px] text-white/35 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <span className="text-white/60 font-medium">eLearning Module Library</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"/>
            <span className="text-[11px] font-semibold text-white/55 tracking-wide uppercase">iGOT Karmayogi — Approved Developer</span>
          </div>

          <h1 className="t-h1 font-extrabold text-white mb-5 max-w-[680px] mx-auto">
            Professional eLearning Module Library
          </h1>
          <p className="text-lead text-white/50 max-w-[520px] mx-auto mb-10">
            SCORM-compliant, WCAG 2.1 accessible courseware across tax, government, compliance, safety, cybersecurity, and leadership — built by certified instructional designers.
          </p>

          {/* Search */}
          <div className="max-w-[460px] mx-auto mb-8">
            <div className="relative">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={2} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="search"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setPage(1) }}
                className="w-full pl-10 pr-4 py-3.5 rounded-[10px] text-[14px] font-medium text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-white/20 shadow-lg"
              />
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6">
            {[['97', 'Modules'], ['8', 'Sectors'], ['SCORM 1.2/2004', 'Standard'], ['WCAG 2.1 AA', 'Accessible']].map(([v, l], i) => (
              <div key={`qs-${i}`} className="text-center px-4 py-2 rounded-[8px] border border-white/[0.08] bg-white/[0.04]">
                <div className="text-[20px] font-extrabold text-white leading-none">{v}</div>
                <div className="text-[10px] text-white/40 font-medium mt-0.5 uppercase tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────────────────────────── */}
      <div className="sticky top-[64px] lg:top-[100px] z-30 bg-white/96 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container-xl py-3.5">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {(['All', ...ALL_CATEGORIES] as const).map(cat => {
              const isActive = activeCategory === cat
              const color = cat === 'All' ? '#0066FF' : CAT_COLOR[cat as Category]
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat as Category | 'All')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[7px] text-[12px] font-semibold border cursor-pointer transition-all duration-150 whitespace-nowrap"
                  style={{
                    background: isActive ? color : 'transparent',
                    color: isActive ? '#fff' : '#6B7280',
                    borderColor: isActive ? color : '#E5E7EB',
                  }}
                >
                  {cat}
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold" style={{ background: isActive ? 'rgba(255,255,255,0.2)' : '#F3F4F6', color: isActive ? '#fff' : '#9CA3AF' }}>
                    {counts[cat] ?? 0}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── MODULE GRID ─────────────────────────────────────────────────────── */}
      <section className="px-6 bg-gray-50" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container-xl">
          <div className="flex items-center justify-between gap-4 mb-7 flex-wrap">
            <div>
              <h2 className="text-[18px] font-bold text-gray-900">
                {activeCategory === 'All' ? 'All Modules' : activeCategory}
              </h2>
              <p className="text-[13px] text-gray-500 mt-0.5">{filtered.length} module{filtered.length !== 1 ? 's' : ''}</p>
            </div>
            {(activeCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPage(1) }}
                className="text-[13px] font-semibold text-[#0066FF] bg-[#EBF2FF] border border-blue-100 px-4 py-2 rounded-[7px] cursor-pointer hover:bg-blue-100 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {paginated.map((mod, i) => <ModuleCard key={mod.id} mod={mod} index={i} />)}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth={1.5} className="mx-auto mb-4" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <p className="text-[15px] font-semibold text-gray-700 mb-1">No modules match</p>
              <p className="text-[13px] text-gray-500 mb-4">Try adjusting your search or category</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All') }} className="text-[13px] font-semibold text-[#0066FF] hover:underline bg-transparent border-none cursor-pointer">Clear filters</button>
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-10">
              <button onClick={() => setPage(p => p + 1)} className="btn btn-outline btn-lg">
                Load More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M7 1v12M1 7l6 6 6-6"/></svg>
              </button>
              <p className="text-[12px] text-gray-400 mt-3">Showing {paginated.length} of {filtered.length}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── STANDARDS STRIP ─────────────────────────────────────────────────── */}
      <section className="px-6 bg-white border-y border-gray-100 py-8">
        <div className="container-xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-2 hidden sm:inline">Every module:</span>
            {[['SCORM 1.2','#0066FF'],['SCORM 2004','#0066FF'],['xAPI Ready','#0891B2'],['WCAG 2.1 AA','#6E41C0'],['iGOT Approved','#00A76F'],['Multilingual','#D97706']].map(([t, c], i) => (
              <span key={`bs-${i}`} className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border" style={{ color: c, background: `${c}0D`, borderColor: `${c}30` }}>
                <svg width="9" height="9" viewBox="0 0 12 12" fill={c} aria-hidden="true"><path d="M2 6l3 3 5-5"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="section-py bg-gray-50">
        <div className="container-xl">
          <Reveal>
            <div className="max-w-[780px] mx-auto text-center rounded-[20px] px-8 py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#003DA6 0%,#0066FF 55%,#0891B2 100%)' }}>
              <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.6) 1px,transparent 0)', backgroundSize: '28px 28px' }} aria-hidden="true"/>
              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-200 mb-3">Custom Development</p>
                <h2 className="text-[28px] md:text-[34px] font-extrabold text-white tracking-tight mb-4">Need a module built for your organisation?</h2>
                <p className="text-[15px] text-blue-200 mb-8 leading-relaxed max-w-[500px] mx-auto">WHBS builds bespoke eLearning for any industry, LMS, and language — SCORM-compliant and WCAG 2.1 accessible as standard.</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/contact" className="btn btn-dark no-underline">Request Custom Module</Link>
                  <Link href="/services/elearning-development" className="btn btn-white-outline no-underline">Our eLearning Services</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
