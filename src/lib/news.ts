/**
 * WHBS News Data Layer — v2
 * Expanded category system, SEO fields, CTA routing, archive support.
 * Swap NEWS_ARTICLES for a CMS fetch without changing any component API.
 */

// ── TYPES ──────────────────────────────────────────────────────────────────

export type NewsCategory =
  | 'Product Updates'
  | 'E-Learning Insights'
  | 'LMS / Moodle'
  | 'Case Studies'
  | 'Training & Development'
  | 'Announcements'
  | 'Compliance'
  | 'Industry News'

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  category: NewsCategory
  date: string
  readTime: number
  featured: boolean
  tags: string[]
  author: string
  authorTitle: string
  /** SEO <title> tag — max 60 chars */
  seoTitle: string
  /** meta description — max 155 chars */
  seoDescription: string
  /** Where the article-end CTA should point */
  ctaHref: string
  ctaLabel: string
  body: ArticleBlock[]
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; style: 'bullet' | 'numbered'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'callout'; text: string }

// ── CATEGORY METADATA ─────────────────────────────────────────────────────

export const CATEGORY_META: Record<
  NewsCategory,
  { color: string; bg: string; border: string; icon: string }
> = {
  'Product Updates':       { color: '#0066FF', bg: '#EBF2FF', border: '#CCE0FF', icon: 'refresh' },
  'E-Learning Insights':   { color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', icon: 'bulb' },
  'LMS / Moodle':          { color: '#6E41C0', bg: '#F0EAFB', border: '#D8C8F5', icon: 'book' },
  'Case Studies':          { color: '#0891B2', bg: '#E0F7FA', border: '#99E8F5', icon: 'chart-bar' },
  'Training & Development':{ color: '#059669', bg: '#ECFDF5', border: '#A7F3D0', icon: 'users' },
  'Announcements':         { color: '#E11D48', bg: '#FFF1F2', border: '#FECDD3', icon: 'speakerphone' },
  'Compliance':            { color: '#374151', bg: '#F9FAFB', border: '#E5E7EB', icon: 'shield-check' },
  'Industry News':         { color: '#0F766E', bg: '#F0FDFA', border: '#99F6E4', icon: 'world' },
}

export const ALL_CATEGORIES: NewsCategory[] = [
  'Case Studies',
  'E-Learning Insights',
  'LMS / Moodle',
  'Product Updates',
  'Training & Development',
  'Announcements',
  'Compliance',
  'Industry News',
]

// ── ARTICLES ──────────────────────────────────────────────────────────────

export const NEWS_ARTICLES: NewsArticle[] = [
  // ── 1 · FEATURED ──────────────────────────────────────────────────────
  {
    slug: 'whbs-igot-karmayogi-elearning-modules',
    title: 'How WHBS delivered five iGOT Karmayogi modules for India\'s national civil servant training platform',
    excerpt: 'White House Business Solutions developed and published SCORM-compliant e-learning modules now live on the Government of India\'s iGOT Karmayogi portal — covering Customs, Railways, Water Resources, Corporate Affairs, and Animal Husbandry.',
    category: 'Case Studies',
    date: '2024-11-12',
    readTime: 6,
    featured: true,
    tags: ['iGOT', 'Government', 'SCORM', 'India', 'Civil services', 'Instructional design'],
    author: 'WHBS Editorial',
    authorTitle: 'Communications Team',
    seoTitle: 'WHBS Delivers iGOT Karmayogi eLearning Modules — WHBS',
    seoDescription: 'WHBS developed 5 SCORM-compliant government e-learning modules now live on India\'s national civil servant training platform, iGOT Karmayogi.',
    ctaHref: '/services/elearning-development',
    ctaLabel: 'Explore our e-learning services',
    body: [
      { type: 'paragraph', text: 'White House Business Solutions (WHBS) has reached a significant milestone by delivering multiple e-learning courseware modules that are now live on the iGOT Karmayogi portal — the Government of India\'s flagship digital learning platform for civil servants, operated under the Department of Personnel and Training (DoPT).' },
      { type: 'heading', level: 2, text: 'Modules published on the national platform' },
      { type: 'paragraph', text: 'The WHBS instructional design and content development teams collaborated with government subject matter experts to produce SCORM-compliant, fully accessible learning modules across key public sector domains.' },
      { type: 'list', style: 'bullet', items: [
        'Prosecution in Customs — Department of Revenue, Ministry of Finance',
        'Performance Appraisal in Indian Railways — Ministry of Railways',
        'Department of Water Resources — Ministry of Jal Shakti',
        'Know Your Company — Ministry of Corporate Affairs',
        'Department of Animal Husbandry and Dairying — Ministry of Fisheries',
      ]},
      { type: 'heading', level: 2, text: 'Instructional design approach' },
      { type: 'paragraph', text: 'Each module was built with a structured instructional design process: subject matter workshops with government officials, storyboarding, graphic and animation production, SCORM packaging, and multi-round quality assurance. All modules comply with SCORM 1.2 and WCAG 2.1 accessibility guidelines.' },
      { type: 'quote', text: 'The project was completed on time, and throughout the project duration, we found the WHBS team to be highly professional and hardworking.', attribution: 'Pengiran Mohammed bin Pengiran Haji Kamaluddin, Alif Technologies SDN BHD' },
      { type: 'heading', level: 2, text: 'What this means for enterprise clients' },
      { type: 'paragraph', text: 'Government-scale content delivery requires stringent quality, compliance, and accessibility standards. WHBS\'s proven track record on national platforms reinforces its ability to serve large enterprise clients with equivalent demands for auditability, scalability, and instructional rigour.' },
      { type: 'callout', text: 'All five modules are publicly accessible on the iGOT Karmayogi portal at portal.igotkarmayogi.gov.in.' },
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────────────────
  {
    slug: 'smartbooks-v7-erp-cloud-onpremise',
    title: 'Smartbooks V7.0 ERP now available as cloud-hosted and on-premise deployment',
    excerpt: 'WHBS confirms full deployment flexibility for Smartbooks V7.0 — its integrated ERP platform covering e-commerce, inventory, order management, and accounting — in both cloud SaaS and fully on-premise configurations.',
    category: 'Product Updates',
    date: '2024-09-03',
    readTime: 4,
    featured: false,
    tags: ['ERP', 'Smartbooks', 'Cloud', 'On-premise', 'Enterprise software'],
    author: 'WHBS Product Team',
    authorTitle: 'Product Engineering',
    seoTitle: 'Smartbooks V7.0 ERP: Cloud & On-Premise — WHBS',
    seoDescription: 'WHBS Smartbooks V7.0 ERP is now available in cloud-hosted SaaS and fully on-premise deployments. Integrated inventory, orders, e-commerce, and accounting.',
    ctaHref: '/products',
    ctaLabel: 'See Smartbooks V7.0 features',
    body: [
      { type: 'paragraph', text: 'WHBS has confirmed that Smartbooks V7.0 ERP is available in both cloud-hosted SaaS and fully on-premise configurations, giving enterprise clients the flexibility to deploy according to their data governance, compliance, and infrastructure requirements.' },
      { type: 'heading', level: 2, text: 'Platform capabilities' },
      { type: 'list', style: 'bullet', items: [
        'Integrated e-commerce order pipeline with real-time warehouse sync',
        'Stock and inventory control with batch tracking and reorder automation',
        'Multi-channel order and invoice management dashboard',
        'Custom accounting modules: tax, payroll, and audit reporting',
        'Role-based access controls and enterprise SSO integration',
      ]},
      { type: 'heading', level: 2, text: 'Deployment options' },
      { type: 'paragraph', text: 'The cloud-hosted version runs on high-availability infrastructure with automated backups, patch management, and a 99.9% uptime SLA. The on-premise version is deployable entirely behind a corporate firewall, suitable for regulated industries including banking, government, and healthcare.' },
      { type: 'callout', text: 'Request a Smartbooks V7.0 demo by contacting info@whitehouseit.com or calling +91-44-2561 9113.' },
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────────────────
  {
    slug: 'moodle-lms-brunei-ministry-education',
    title: 'Moodle LMS implementation for Alif Technologies and the Brunei Ministry of Education',
    excerpt: 'A multi-phase Moodle LMS customisation and e-learning content development engagement for Alif Technologies SDN BHD, serving the Ministry of Education in Brunei Darussalam, has been successfully delivered on schedule.',
    category: 'Case Studies',
    date: '2024-07-18',
    readTime: 6,
    featured: false,
    tags: ['Moodle', 'LMS', 'Brunei', 'Ministry of Education', 'Government e-learning'],
    author: 'WHBS Editorial',
    authorTitle: 'Communications Team',
    seoTitle: 'Moodle LMS for Brunei Ministry of Education — WHBS',
    seoDescription: 'WHBS delivered a Moodle LMS customisation and e-learning content project for Alif Technologies, serving Brunei\'s Ministry of Education — on time and on spec.',
    ctaHref: '/services/lms-development',
    ctaLabel: 'Talk to our LMS team',
    body: [
      { type: 'paragraph', text: 'WHBS completed a comprehensive Moodle LMS customisation and e-learning content development project for Alif Technologies SDN BHD in Brunei Darussalam, a technology partner serving the Ministry of Education.' },
      { type: 'heading', level: 2, text: 'Project scope' },
      { type: 'list', style: 'bullet', items: [
        'Custom Moodle theme design aligned to institutional branding guidelines',
        'Curriculum mapping by certified instructional designers',
        'E-learning module development by the WHBS graphic designer team',
        'SCORM packaging and LMS integration testing',
        'End-user training and technical handover documentation',
      ]},
      { type: 'heading', level: 2, text: 'Client outcome' },
      { type: 'quote', text: 'The content was developed and mapped to the curriculum by Instructional Designers of WHBS, and the eLearning modules were developed by the WHBS Graphic Designer team. The project was completed on time, and throughout the project duration, we found the WHBS team to be highly professional and hardworking.', attribution: 'Pengiran Mohammed bin Pengiran Haji Kamaluddin, Chairman — Alif Technologies SDN BHD, Brunei Darussalam' },
      { type: 'paragraph', text: 'The project represents WHBS\'s expanding footprint in Southeast Asian government and education sectors, following similar engagements with the Ministries of Education in Malaysia and Singapore.' },
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────────────────
  {
    slug: 'flash-to-html5-content-transformation-guide',
    title: 'Modernising legacy Flash courseware: the four-stage HTML5 transformation roadmap',
    excerpt: 'With Adobe Flash end-of-life several years past, many organisations still hold large libraries of legacy CBT and WBT content. WHBS outlines the transformation roadmap it uses for enterprise-scale Flash-to-HTML5 migration projects.',
    category: 'E-Learning Insights',
    date: '2024-06-05',
    readTime: 7,
    featured: false,
    tags: ['Flash to HTML5', 'Content transformation', 'SCORM', 'Legacy e-learning', 'HTML5'],
    author: 'WHBS Content Team',
    authorTitle: 'Instructional Design Lead',
    seoTitle: 'Flash to HTML5 Migration: Enterprise Roadmap — WHBS',
    seoDescription: 'How enterprises modernise legacy Flash courseware with HTML5 in 4 stages — from content audit to SCORM repackaging. By WHBS content experts.',
    ctaHref: '/services/content-transformation',
    ctaLabel: 'See our content transformation service',
    body: [
      { type: 'paragraph', text: 'Adobe Flash reached end-of-life in December 2020, but enterprise training libraries built between 1998 and 2017 still contain tens of thousands of Flash-based WBT and CBT modules. Inaccessible on modern browsers and mobile devices, these assets represent both a compliance risk and a wasted investment.' },
      { type: 'heading', level: 2, text: 'The four-stage transformation roadmap' },
      { type: 'list', style: 'numbered', items: [
        'Content audit — inventory all .swf and .flv assets, catalogue by business unit, assess instructional currency',
        'Prioritisation matrix — rank by regulatory compliance criticality, learner audience size, and content shelf-life',
        'Rebuild or rescript — high-value modules are rebuilt natively in HTML5; lower-priority content is rescripted into microlearning formats',
        'QA and LMS deployment — SCORM 2004 / xAPI packaging, cross-browser testing, and LMS re-upload with tracking validation',
      ]},
      { type: 'heading', level: 2, text: 'Tools and standards used' },
      { type: 'paragraph', text: 'WHBS uses a combination of Articulate Storyline, Adobe Captivate, and custom HTML5/CSS3/JavaScript development depending on interaction complexity. All outputs are packaged to SCORM 1.2, SCORM 2004, or xAPI and tested across Chrome, Firefox, Safari, and Edge, as well as iOS and Android devices.' },
      { type: 'callout', text: 'WHBS has completed Flash-to-HTML5 transformation projects for clients across healthcare, banking, manufacturing, and government sectors.' },
      { type: 'heading', level: 2, text: 'ILT to e-learning conversion' },
      { type: 'paragraph', text: 'Many enterprises are simultaneously converting instructor-led training (ILT) materials — slide decks, facilitator guides, printed workbooks — into self-paced e-learning. WHBS handles this by working directly with internal subject matter experts to preserve knowledge accuracy while applying instructional design principles for asynchronous delivery.' },
    ],
  },

  // ── 5 ─────────────────────────────────────────────────────────────────
  {
    slug: 'whbs-iot-manufacturing-automation-india',
    title: 'WHBS IoT team completes 10+ industrial automation implementations across Indian manufacturing',
    excerpt: 'The WHBS IoT division has delivered more than ten factory-grade R&D manufacturing automation projects, interconnecting industrial processes with real-time monitoring, alerting, and ERP integration.',
    category: 'Case Studies',
    date: '2024-04-22',
    readTime: 4,
    featured: false,
    tags: ['IoT', 'Manufacturing', 'Industrial automation', 'Industry 4.0', 'ERP integration'],
    author: 'WHBS Editorial',
    authorTitle: 'Communications Team',
    seoTitle: 'WHBS Completes 10+ Industrial IoT Deployments — WHBS',
    seoDescription: 'WHBS\'s IoT team delivered more than 10 factory-grade automation projects across Indian manufacturing — real-time monitoring, edge computing, and ERP integration.',
    ctaHref: '/services/iot-solutions',
    ctaLabel: 'Learn about our IoT solutions',
    body: [
      { type: 'paragraph', text: 'The Internet of Things (IoT) division at White House Business Solutions has crossed a significant delivery milestone: more than ten factory-grade R&D manufacturing automation implementations completed for industrial clients across India.' },
      { type: 'heading', level: 2, text: 'Implementation scope' },
      { type: 'list', style: 'bullet', items: [
        'Sensor network design and installation across production floors',
        'Edge computing nodes for low-latency local decision-making',
        'Central dashboard with real-time KPI visualisation',
        'Predictive maintenance alerting using time-series anomaly detection',
        'Integration with existing Smartbooks ERP for cost and output reconciliation',
      ]},
      { type: 'heading', level: 2, text: 'Industry 4.0 readiness' },
      { type: 'paragraph', text: 'These implementations are part of a broader Industry 4.0 transition that Indian manufacturers are undertaking. WHBS provides not only the technical infrastructure but also operator training using its own e-learning platforms, creating a fully integrated digital transformation solution from factory floor to learning management system.' },
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────────────────
  {
    slug: 'corporate-moodle-lms-vs-custom-lms-2024',
    title: 'Custom Moodle LMS vs off-the-shelf platforms: what enterprise training managers need to know',
    excerpt: 'As enterprise L&D budgets face scrutiny, choosing between a customised open-source LMS and a proprietary platform has significant long-term cost and flexibility implications. A practical breakdown.',
    category: 'LMS / Moodle',
    date: '2024-03-14',
    readTime: 8,
    featured: false,
    tags: ['Moodle', 'LMS comparison', 'Enterprise L&D', 'Learning technology', 'TCO'],
    author: 'WHBS Content Team',
    authorTitle: 'LMS Solutions Architect',
    seoTitle: 'Custom Moodle vs Off-the-Shelf LMS Platforms — WHBS',
    seoDescription: 'A practical comparison of Moodle customisation vs proprietary LMS platforms — total cost of ownership, data ownership, and integration depth for enterprise L&D.',
    ctaHref: '/contact',
    ctaLabel: 'Talk to an LMS specialist',
    body: [
      { type: 'paragraph', text: 'Enterprise Learning & Development teams evaluating their LMS strategy face a complex market: dozens of proprietary platforms with varying pricing models, and the mature open-source alternative in Moodle — which powers over 400 million users across 250 countries.' },
      { type: 'heading', level: 2, text: 'Total cost of ownership' },
      { type: 'paragraph', text: 'Proprietary LMS platforms typically charge per-user or per-active-learner licence fees that scale steeply as organisations grow. A custom Moodle deployment eliminates per-seat licensing entirely. The investment is in implementation, customisation, and ongoing maintenance — costs that scale favourably at enterprise volumes.' },
      { type: 'heading', level: 2, text: 'Key comparison dimensions' },
      { type: 'list', style: 'bullet', items: [
        'Customisation depth: Moodle allows full theme, plugin, and workflow customisation; proprietary platforms vary',
        'Data ownership: self-hosted Moodle keeps learner data inside your infrastructure',
        'Integration: Moodle\'s open API supports SCORM, xAPI, LTI, LDAP/SAML SSO, and custom ERP connections',
        'Community and plugins: 1,700+ free plugins in the Moodle plugin directory',
        'Support model: community-backed plus certified Moodle Partners like WHBS',
      ]},
      { type: 'heading', level: 2, text: 'When off-the-shelf makes sense' },
      { type: 'paragraph', text: 'Smaller organisations with fewer than 500 learners and limited IT resources may find a hosted proprietary platform more practical. However, for enterprises with 1,000+ learners, complex compliance requirements, multi-language curricula, or a need for ERP integration, a custom Moodle deployment typically delivers superior outcomes and long-term cost efficiency.' },
      { type: 'callout', text: 'WHBS has deployed Moodle LMS for organisations ranging from 200 to 50,000+ users across 14 countries.' },
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────────────────
  {
    slug: 'whbs-cambridge-uk-seven-year-partnership',
    title: 'Seven-year content production partnership with Cambridge, UK consultancy renewed',
    excerpt: 'WHBS has maintained a multi-year multimedia production relationship with a Cambridge, UK-based educational publishing and consultancy firm — reflecting the company\'s consistency in long-term international engagements.',
    category: 'Announcements',
    date: '2024-02-01',
    readTime: 3,
    featured: false,
    tags: ['Partnership', 'UK', 'Cambridge', 'Multimedia production', 'Educational content'],
    author: 'WHBS Editorial',
    authorTitle: 'Communications Team',
    seoTitle: '7-Year UK Content Partnership Renewed — WHBS',
    seoDescription: 'WHBS maintains a 7-year multimedia production partnership with a Cambridge, UK educational publisher — science simulations, data charts, and educational animation.',
    ctaHref: '/about',
    ctaLabel: 'Read about WHBS history',
    body: [
      { type: 'paragraph', text: 'White House Business Solutions has maintained an active multimedia production partnership with a publishing and consultancy firm based in Foxton, Cambridge, United Kingdom, spanning more than seven years of continuous collaboration.' },
      { type: 'heading', level: 2, text: 'Nature of the engagement' },
      { type: 'paragraph', text: 'The engagement involves ongoing multimedia development — including interactive simulations, data-driven charts, and science education animations — produced to UK educational publishing standards and managed remotely across international time zones.' },
      { type: 'quote', text: 'I have worked closely with the Multimedia team of WHBS to manage several projects over a period of seven years and have always found them working hard to achieve the best result. They have reliably kept to the production schedule and successfully realized my ideas.', attribution: 'Roger Frost, Publishing & Consultancy — Foxton, Cambridge, U.K.' },
    ],
  },

  // ── 8 ─────────────────────────────────────────────────────────────────
  {
    slug: 'mobile-elearning-offline-support-moodle',
    title: 'Deploying offline-first mobile e-learning: WHBS implementation notes for Moodle',
    excerpt: 'Learners in bandwidth-constrained environments need offline learning capability. WHBS outlines its technical approach to mobile-first, offline-capable Moodle deployments using the Ionic framework.',
    category: 'LMS / Moodle',
    date: '2023-12-08',
    readTime: 5,
    featured: false,
    tags: ['Mobile LMS', 'Offline learning', 'Moodle', 'Ionic', 'App development'],
    author: 'WHBS Product Team',
    authorTitle: 'Mobile Engineering',
    seoTitle: 'Offline-First Mobile Moodle Deployment — WHBS',
    seoDescription: 'WHBS explains the technical architecture for offline-capable Moodle LMS apps using Ionic — for field teams and bandwidth-constrained environments.',
    ctaHref: '/services/mobile-app-development',
    ctaLabel: 'Explore mobile app development',
    body: [
      { type: 'paragraph', text: 'A significant proportion of enterprise learners access training content from mobile devices in environments with intermittent or no network connectivity — factory floors, field operations, rural government offices, and international locations with limited bandwidth. WHBS addresses this with a structured offline-first deployment architecture for Moodle.' },
      { type: 'heading', level: 2, text: 'Technical architecture' },
      { type: 'list', style: 'bullet', items: [
        'Moodle Mobile app configured with your organisation\'s Moodle instance URL',
        'Course content pre-downloaded to device storage for offline consumption',
        'Quiz and assessment responses stored locally and synced on reconnection',
        'Completion tracking written to Moodle gradebook on next sync event',
        'Custom push notification strategy for completion reminders',
      ]},
      { type: 'heading', level: 2, text: 'Custom native app option' },
      { type: 'paragraph', text: 'For organisations requiring white-label mobile apps with custom branding, deep-link behaviour, and biometric authentication, WHBS develops custom native wrappers using the Ionic framework around the Moodle Mobile API. These are available for both iOS and Android and can be published to the App Store and Google Play under the client\'s developer account.' },
      { type: 'callout', text: 'WHBS mobile LMS applications are built using Ionic and Angular, with deep integration into Moodle\'s REST API.' },
    ],
  },

  // ── 9 ─────────────────────────────────────────────────────────────────
  {
    slug: 'scorm-xapi-compliance-enterprise-lms',
    title: 'SCORM 1.2, SCORM 2004, and xAPI: which standard should your enterprise LMS use?',
    excerpt: 'Understanding the differences between e-learning content standards is essential for any enterprise LMS evaluation. A practical breakdown for L&D decision-makers — from tracking capability to mobile support.',
    category: 'E-Learning Insights',
    date: '2023-10-19',
    readTime: 6,
    featured: false,
    tags: ['SCORM', 'xAPI', 'LMS standards', 'Compliance training', 'E-learning standards'],
    author: 'WHBS Content Team',
    authorTitle: 'Instructional Design Lead',
    seoTitle: 'SCORM 1.2 vs SCORM 2004 vs xAPI: Which Standard? — WHBS',
    seoDescription: 'A decision guide for enterprise L&D: compare SCORM 1.2, SCORM 2004, and xAPI on tracking capability, LMS compatibility, and mobile support.',
    ctaHref: '/contact',
    ctaLabel: 'Discuss your content standards requirements',
    body: [
      { type: 'paragraph', text: 'When procuring or building e-learning content, the choice of packaging and tracking standard determines what data your LMS can capture, how portable your content is, and what learner analytics are available. The three dominant standards are SCORM 1.2, SCORM 2004, and xAPI (Tin Can).' },
      { type: 'heading', level: 2, text: 'SCORM 1.2' },
      { type: 'paragraph', text: 'Released in 2001 and still the most widely supported standard, SCORM 1.2 tracks completion status, score, and time-on-module. It communicates via JavaScript to the LMS API. Almost every LMS supports it. Limitation: binary pass/fail tracking, no granular statement-level data.' },
      { type: 'heading', level: 2, text: 'SCORM 2004' },
      { type: 'paragraph', text: 'SCORM 2004 introduced sequencing and navigation rules, allowing content authors to define adaptive learning paths. More powerful than SCORM 1.2 but also more complex to implement and with more inconsistent LMS support. Best for structured curricula with conditional branching.' },
      { type: 'heading', level: 2, text: 'xAPI (Experience API)' },
      { type: 'paragraph', text: 'xAPI moves tracking beyond the browser. Statements can be sent from mobile apps, simulations, and real-world events to a Learning Record Store (LRS). Statements use a subject-verb-object syntax: "Learner completed Module 3". Ideal for blended learning programmes and performance analytics.' },
      { type: 'list', style: 'bullet', items: [
        'SCORM 1.2: maximum LMS compatibility, simple implementation, sufficient for most corporate training',
        'SCORM 2004: adaptive paths, richer sequencing, best for curriculum-mapped programmes',
        'xAPI: rich analytics, offline and mobile support, requires an LRS alongside your LMS',
      ]},
      { type: 'callout', text: 'All e-learning content developed by WHBS is delivered in the standard specified by the client — SCORM 1.2, SCORM 2004, or xAPI.' },
    ],
  },
]

// ── UTILITY FUNCTIONS ─────────────────────────────────────────────────────

export function getAllArticles(): NewsArticle[] {
  return [...NEWS_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getFeaturedArticle(): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.featured)
}

export function getNonFeaturedArticles(): NewsArticle[] {
  return getAllArticles().filter((a) => !a.featured)
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return NEWS_ARTICLES.map((a) => a.slug)
}

export function getArticlesByCategory(category: NewsCategory): NewsArticle[] {
  return getAllArticles().filter((a) => a.category === category)
}

export function getArticlesByTag(tag: string): NewsArticle[] {
  const q = tag.toLowerCase()
  return getAllArticles().filter((a) =>
    a.tags.some((t) => t.toLowerCase() === q)
  )
}

export function getRelatedArticles(slug: string, limit = 3): NewsArticle[] {
  const article = getArticleBySlug(slug)
  if (!article) return []
  return getAllArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit)
}

export function getAllTags(): { tag: string; count: number }[] {
  const map = new Map<string, number>()
  NEWS_ARTICLES.forEach((a) =>
    a.tags.forEach((t) => map.set(t, (map.get(t) ?? 0) + 1))
  )
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function getArchiveYears(): { year: number; count: number }[] {
  const map = new Map<number, number>()
  NEWS_ARTICLES.forEach((a) => {
    const y = new Date(a.date).getFullYear()
    map.set(y, (map.get(y) ?? 0) + 1)
  })
  return [...map.entries()]
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year - a.year)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
