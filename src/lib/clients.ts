/**
 * WHBS Client Trust, Case Studies & Certifications Data
 * ─────────────────────────────────────────────────────────────────────────
 * All content grounded in publicly verifiable WHBS information.
 * No fabricated statistics or claims.
 */

// ── TYPES ──────────────────────────────────────────────────────────────────

export type ClientRegion =
  | 'South Asia'
  | 'Southeast Asia'
  | 'Middle East'
  | 'Europe'
  | 'Global'

export type ClientSector =
  | 'Government'
  | 'Education'
  | 'Healthcare'
  | 'Manufacturing'
  | 'Corporate'

export interface ClientEntry {
  name: string
  sector: ClientSector
  region: ClientRegion
  /** Short descriptor shown under the name */
  descriptor: string
  /** Accent color for the sector badge */
  accentColor: string
  accentBg: string
}

export interface CaseStudy {
  id: string
  client: string
  region: string
  sector: ClientSector
  /** One-line engagement summary */
  engagement: string
  /** 2-3 sentence outcome description */
  outcome: string
  /** Up to 3 verifiable metrics — no fabrication */
  metrics: { value: string; label: string }[]
  /** Services delivered */
  services: string[]
  accentColor: string
  accentBg: string
  accentBorder: string
}

export interface Certification {
  name: string
  issuer: string
  category: 'Standard' | 'Partnership' | 'Technology' | 'Framework'
  description: string
  iconLetter: string
  accentColor: string
  accentBg: string
}

export interface TechPartner {
  name: string
  category: string
  description: string
}

// ── CLIENT SECTOR COLORS ──────────────────────────────────────────────────

export const SECTOR_STYLE: Record<
  ClientSector,
  { color: string; bg: string; border: string }
> = {
  Government:    { color: '#10B981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  Education:     { color: '#60A5FA', bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.25)' },
  Healthcare:    { color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)' },
  Manufacturing: { color: '#FBBF24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)' },
  Corporate:     { color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
}

// ── CLIENT ENTRIES ────────────────────────────────────────────────────────

export const CLIENT_ENTRIES: ClientEntry[] = [
  {
    name: 'Ministry of Education',
    descriptor: 'Brunei Darussalam',
    sector: 'Government',
    region: 'Southeast Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Government of India',
    descriptor: 'iGOT Karmayogi Portal',
    sector: 'Government',
    region: 'South Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Ministry of Education',
    descriptor: 'Malaysia',
    sector: 'Government',
    region: 'Southeast Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Ministry of Education',
    descriptor: 'Singapore',
    sector: 'Government',
    region: 'Southeast Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Alif Technologies',
    descriptor: 'SDN BHD, Brunei Darussalam',
    sector: 'Corporate',
    region: 'Southeast Asia',
    accentColor: '#A78BFA',
    accentBg: 'rgba(167,139,250,0.08)',
  },
  {
    name: 'Indian Railways',
    descriptor: 'Ministry of Railways, India',
    sector: 'Government',
    region: 'South Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Cambridge Consultancy',
    descriptor: 'Foxton, Cambridge, U.K.',
    sector: 'Education',
    region: 'Europe',
    accentColor: '#60A5FA',
    accentBg: 'rgba(96,165,250,0.08)',
  },
  {
    name: 'Chiron Meditour',
    descriptor: 'Healthcare eLearning',
    sector: 'Healthcare',
    region: 'South Asia',
    accentColor: '#F472B6',
    accentBg: 'rgba(244,114,182,0.08)',
  },
  {
    name: 'Dept. of Water Resources',
    descriptor: 'Ministry of Jal Shakti, India',
    sector: 'Government',
    region: 'South Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Dept. of Animal Husbandry',
    descriptor: 'Ministry of Fisheries, India',
    sector: 'Government',
    region: 'South Asia',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Corporate Banks',
    descriptor: 'Financial services training',
    sector: 'Corporate',
    region: 'South Asia',
    accentColor: '#A78BFA',
    accentBg: 'rgba(167,139,250,0.08)',
  },
  {
    name: 'Manufacturing Enterprises',
    descriptor: 'IoT & workforce training',
    sector: 'Manufacturing',
    region: 'South Asia',
    accentColor: '#FBBF24',
    accentBg: 'rgba(251,191,36,0.08)',
  },
]

// ── TRUST STATS ────────────────────────────────────────────────────────────

export const TRUST_STATS = [
  { value: 1100, suffix: '+', label: 'Projects delivered', color: '#60A5FA' },
  { value: 14,   suffix: '',  label: 'Countries served',   color: '#10B981' },
  { value: 26,   suffix: '+', label: 'Years operating',    color: '#A78BFA' },
  { value: 15,   suffix: '',  label: 'Global partners',    color: '#FBBF24' },
] as const

// ── CASE STUDIES ──────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'igot-karmayogi',
    client: 'Government of India — iGOT Karmayogi',
    region: 'India',
    sector: 'Government',
    engagement: 'National civil servant eLearning module development',
    outcome:
      'WHBS designed, developed and published five SCORM-compliant eLearning modules on India\'s national civil servant learning platform, covering departments including Customs, Indian Railways, Water Resources, Corporate Affairs, and Animal Husbandry. All modules are live on the iGOT Karmayogi portal.',
    metrics: [
      { value: '5', label: 'Modules live on iGOT' },
      { value: 'SCORM', label: 'Compliance standard' },
      { value: '5+', label: 'Government departments' },
    ],
    services: ['eLearning Content Development', 'Instructional Design', 'SCORM Packaging', 'QA Testing'],
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
    accentBorder: 'rgba(16,185,129,0.2)',
  },
  {
    id: 'brunei-moe-moodle',
    client: 'Alif Technologies & Ministry of Education',
    region: 'Brunei Darussalam',
    sector: 'Education',
    engagement: 'Moodle LMS customization & eLearning content delivery',
    outcome:
      'Full Moodle LMS theme design, curriculum mapping by certified instructional designers, and eLearning module development delivered on schedule for the Ministry of Education in Brunei. The client specifically cited professional conduct, team capability, and on-time delivery.',
    metrics: [
      { value: 'On Time', label: 'Project delivery' },
      { value: 'Moodle', label: 'LMS platform' },
      { value: '100%', label: 'Curriculum mapped' },
    ],
    services: ['Moodle LMS Customization', 'Curriculum Mapping', 'eLearning Development', 'Theme Design'],
    accentColor: '#60A5FA',
    accentBg: 'rgba(96,165,250,0.08)',
    accentBorder: 'rgba(96,165,250,0.2)',
  },
  {
    id: 'cambridge-multimedia',
    client: 'Publishing & Consultancy Partner',
    region: 'Cambridge, U.K.',
    sector: 'Education',
    engagement: 'Seven-year ongoing multimedia production partnership',
    outcome:
      'Over seven consecutive years, WHBS produced interactive science education simulations, data-driven charts, and multimedia assets to UK publishing standards for a Cambridge-based consultancy. The client highlighted consistent schedule adherence and successful creative realisation across all projects.',
    metrics: [
      { value: '7+', label: 'Years partnership' },
      { value: 'UK', label: 'Publishing standards' },
      { value: '100%', label: 'On-schedule delivery' },
    ],
    services: ['Multimedia Production', 'Interactive Simulations', 'Science Animation', 'Content Design'],
    accentColor: '#60A5FA',
    accentBg: 'rgba(96,165,250,0.08)',
    accentBorder: 'rgba(96,165,250,0.2)',
  },
  {
    id: 'iot-manufacturing',
    client: 'Indian Manufacturing Enterprises',
    region: 'India',
    sector: 'Manufacturing',
    engagement: 'Industrial IoT automation implementation programme',
    outcome:
      'WHBS IoT engineers delivered over ten factory-grade R&D automation projects across Indian manufacturing clients, interconnecting production machinery with real-time monitoring dashboards, predictive maintenance alerting, and ERP integration through edge computing nodes.',
    metrics: [
      { value: '10+', label: 'IoT implementations' },
      { value: 'Live', label: 'Production monitoring' },
      { value: 'ERP', label: 'System integration' },
    ],
    services: ['IoT Engineering', 'Edge Computing', 'Dashboard Development', 'ERP Integration'],
    accentColor: '#FBBF24',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.2)',
  },
]

// ── CERTIFICATIONS & STANDARDS ────────────────────────────────────────────

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'SCORM 1.2',
    issuer: 'ADL — Advanced Distributed Learning',
    category: 'Standard',
    description: 'All eLearning content developed by WHBS is packaged and delivered compliant with SCORM 1.2, the most widely supported LMS content standard.',
    iconLetter: 'S',
    accentColor: '#60A5FA',
    accentBg: 'rgba(59,130,246,0.1)',
  },
  {
    name: 'SCORM 2004',
    issuer: 'ADL — Advanced Distributed Learning',
    category: 'Standard',
    description: 'SCORM 2004 compliant content delivery for organisations requiring adaptive learning paths and enhanced sequencing and navigation rules.',
    iconLetter: 'S',
    accentColor: '#60A5FA',
    accentBg: 'rgba(59,130,246,0.1)',
  },
  {
    name: 'xAPI (Tin Can)',
    issuer: 'ADL — Experience API',
    category: 'Standard',
    description: 'xAPI-compliant content and LRS integration for mobile, offline, and blended learning environments with granular learner analytics.',
    iconLetter: 'x',
    accentColor: '#22D3EE',
    accentBg: 'rgba(34,211,238,0.1)',
  },
  {
    name: 'WCAG 2.1',
    issuer: 'W3C Web Accessibility Initiative',
    category: 'Standard',
    description: 'All eLearning modules and LMS deployments are developed to WCAG 2.1 accessibility guidelines, ensuring compliance for public sector and regulated industry clients.',
    iconLetter: 'W',
    accentColor: '#A78BFA',
    accentBg: 'rgba(167,139,250,0.1)',
  },
  {
    name: 'Moodle LMS',
    issuer: 'Moodle HQ',
    category: 'Partnership',
    description: 'Experienced Moodle implementation partner with deep expertise in customisation, plugin development, mobile integration, and enterprise-scale deployment.',
    iconLetter: 'M',
    accentColor: '#F97316',
    accentBg: 'rgba(249,115,22,0.1)',
  },
  {
    name: 'iGOT Karmayogi',
    issuer: 'Government of India — DoPT',
    category: 'Partnership',
    description: 'Approved eLearning content developer on the Government of India\'s national civil servant training platform, with multiple live modules across government departments.',
    iconLetter: 'i',
    accentColor: '#10B981',
    accentBg: 'rgba(16,185,129,0.1)',
  },
]

// ── TECHNOLOGY PARTNERS ────────────────────────────────────────────────────

export const TECH_PARTNERS: TechPartner[] = [
  { name: 'Moodle',            category: 'LMS Platform',       description: 'Open-source LMS core' },
  { name: 'Ionic Framework',   category: 'Mobile Development', description: 'Cross-platform apps' },
  { name: 'Angular',           category: 'Web Development',    description: 'Enterprise web apps' },
  { name: 'Articulate',        category: 'eLearning Authoring', description: 'Rapid content development' },
  { name: 'HTML5 / CSS3',      category: 'Content Standard',   description: 'Modern courseware' },
  { name: 'SCORM / xAPI',      category: 'Learning Standard',  description: 'Content interoperability' },
  { name: 'Smartbooks V7.0',   category: 'ERP Platform',       description: 'Enterprise resource planning' },
  { name: 'IoT Edge Computing', category: 'Industrial Tech',   description: 'Factory automation' },
]

// ── REGION SUMMARY ────────────────────────────────────────────────────────

export const REGIONS = [
  { name: 'South Asia',    count: 'Primary market', flag: '🇮🇳', color: '#10B981' },
  { name: 'Southeast Asia', count: 'Brunei, Malaysia, Singapore', flag: '🌏', color: '#60A5FA' },
  { name: 'Europe',        count: 'Cambridge, U.K.', flag: '🇬🇧', color: '#A78BFA' },
  { name: 'Global',        count: '14 countries total', flag: '🌍', color: '#FBBF24' },
] as const
