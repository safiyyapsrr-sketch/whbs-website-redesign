// ─── NAVIGATION ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
] as const

// ─── HERO STATS ────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { num: '1100', suffix: '+', label: 'Projects Delivered' },
  { num: '14', suffix: '', label: 'Countries Served' },
  { num: '15', suffix: '', label: 'Global Partners' },
  { num: '26', suffix: '+', label: 'Years Experience' },
] as const

// ─── TRUST LOGOS ───────────────────────────────────────────────────────────
export const TRUST_LOGOS = [
  'Ministry of Education, Brunei',
  'Government of India (iGOT)',
  'Ministry of Education, Malaysia',
  'Alif Technologies, SDN BHD',
  'Chiron Meditour',
  'Cambridge Consultancy',
  'Healthcare Institutions',
  'Corporate Banks',
  'Universities Worldwide',
  'Manufacturing Enterprises',
  'Ministry of Education, Singapore',
  'Department of Animal Husbandry',
  'Indian Railways',
  'Department of Water Resources',
] as const

// ─── SOLUTIONS ─────────────────────────────────────────────────────────────
export interface Solution {
  title: string
  description: string
  tags: string[]
  href: string
  delay: number
  iconPath: string
}

export const SOLUTIONS: Solution[] = [
  {
    title: 'LMS Solutions',
    description:
      'End-to-end learning management system implementation, customization, and support. Designed for corporate training providers, educational institutions, and large enterprises worldwide.',
    tags: ['Moodle LMS', 'MOOC', 'SCORM'],
    href: '/services/lms-development',
    delay: 0,
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'eLearning Solutions',
    description:
      'Custom eLearning content development — from tailored courseware and microlearning modules to Flash-to-HTML5 content transformation — mapped precisely to your curriculum and goals.',
    tags: ['Content Dev', 'Microlearning', 'HTML5'],
    href: '/services/elearning-development',
    delay: 0.08,
    iconPath: 'rect:2,3,20,14,2|M8 21h8M12 17v4',
  },
  {
    title: 'ERP Solutions',
    description:
      'Smartbooks V7.0 — our cloud or on-premise ERP system integrates e-commerce, inventory, and order management. Break down information silos with fully integrated data systems.',
    tags: ['Cloud / On-Premise', 'Inventory', 'E-Commerce'],
    href: '/services/erp-solutions',
    delay: 0.16,
    iconPath: 'circle:12,12,3|M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41',
  },
  {
    title: 'Application Development',
    description:
      'Web and mobile application development built for reliability and integration. We use technologies like Ionic and Angular, with deep domain expertise in manufacturing, healthcare, and education.',
    tags: ['Mobile Apps', 'Open Source', 'Custom Dev'],
    href: '/services/mobile-app-development',
    delay: 0.24,
    iconPath: 'rect:5,2,14,20,2|M12 18h.01',
  },
  {
    title: 'IoT Solutions',
    description:
      'Factory-grade IoT environments where development and innovation never stops. We interconnect industrial processes using IoT technology, with 10+ R&D manufacturing automation implementations.',
    tags: ['Industrial IoT', 'Automation', 'R&D'],
    href: '/services/iot-solutions',
    delay: 0.32,
    iconPath:
      'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  },
  {
    title: 'Content Transformation',
    description:
      'Modernize legacy training assets. Convert Flash-based courseware to HTML5, restructure ILT materials for digital delivery, and future-proof your existing content library for any device.',
    tags: ['Flash→HTML5', 'ILT to eLearning', 'Multi-device'],
    href: '/services/content-transformation',
    delay: 0.4,
    iconPath:
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
]

// ─── LMS FEATURES ──────────────────────────────────────────────────────────
export const LMS_FEATURES = [
  {
    title: 'Custom Moodle Theme Design',
    desc: "Branded, responsive themes that reflect your organization's identity",
  },
  {
    title: 'Plugin Development & Integration',
    desc: 'Custom plugins and seamless integrations with third-party systems',
  },
  {
    title: 'Advanced Reporting & Analytics',
    desc: 'Granular learner progress tracking and completion dashboards',
  },
  {
    title: 'Mobile & Offline Support',
    desc: 'Native mobile apps with offline learning capabilities',
  },
  {
    title: 'Corporate LMS Implementation',
    desc: 'End-to-end deployment from installation through ongoing maintenance',
  },
] as const

// ─── LMS COURSES (UI MOCKUP) ────────────────────────────────────────────────
export const LMS_COURSES = [
  {
    title: 'Prosecution in Customs — iGOT',
    progress: 87,
    iconBg: '#EEF2FF',
    iconColor: '#4F46E5',
    iconPath:
      'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5',
  },
  {
    title: 'Performance Appraisal — Indian Railways',
    progress: 64,
    iconBg: '#FFF7ED',
    iconColor: '#EA580C',
    iconPath: 'circle:12,12,10|M12 8v4l3 3',
  },
  {
    title: 'Department of Water Resources',
    progress: 42,
    iconBg: '#F0FDF4',
    iconColor: '#16A34A',
    iconPath:
      'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
] as const

// ─── GOVERNMENT MODULES ─────────────────────────────────────────────────────
export interface GovModule {
  tag: string
  title: string
  href: string
  highlight?: boolean
}

export const GOV_MODULES: GovModule[] = [
  {
    tag: 'Custom Judiciary',
    title: 'Prosecution in Customs',
    href: 'https://portal.igotkarmayogi.gov.in/app/toc/do_114280681394692096139/overview',
  },
  {
    tag: 'Agriculture Ministry',
    title: 'Dept. of Animal Husbandry & Dairying',
    href: 'https://portal.igotkarmayogi.gov.in/app/toc/do_1143471187692175361851/overview',
  },
  {
    tag: 'Corporate Affairs',
    title: 'Know Your Company',
    href: 'https://portal.igotkarmayogi.gov.in/app/toc/do_114373273189482496192/overview',
  },
  {
    tag: 'Indian Railways',
    title: 'Performance Appraisal in Indian Railways',
    href: 'https://portal.igotkarmayogi.gov.in/app/toc/do_1142594610714214401145/overview',
  },
  {
    tag: 'Water Resources',
    title: 'Department of Water Resources',
    href: 'https://portal.igotkarmayogi.gov.in/app/toc/do_1142897209840680961518/overview',
  },
  {
    tag: '& More',
    title: 'View all eLearning modules developed by WHBS',
    href: '/solutions/government',
    highlight: true,
  },
]

// ─── WHY WHBS ──────────────────────────────────────────────────────────────
export const WHY_CELLS = [
  {
    num: '01',
    title: 'Founded 1999',
    body: 'Incorporated in August 1999, WHBS has navigated every era of digital learning — from the dot-com boom to modern AI-driven platforms.',
  },
  {
    num: '02',
    title: 'Global Reach',
    body: 'Delivered solutions for ministries of education in Malaysia, Singapore, and Brunei. Active across 14 countries with 15 technology partners.',
  },
  {
    num: '03',
    title: 'Full-Stack eLearning',
    body: 'Nearly 20 years of eLearning experience. A skilled team of instructional designers, graphic designers, developers, and LMS engineers working together.',
  },
  {
    num: '04',
    title: 'On-Time Delivery',
    body: 'Clients across the world — from Brunei to Cambridge — specifically commend WHBS for keeping to production schedules without compromising quality.',
  },
  {
    num: '05',
    title: 'Domain Depth',
    body: 'Deep expertise across manufacturing, healthcare, education, government, and large corporate enterprises — not generalist IT support.',
  },
  {
    num: '06',
    title: 'One-Stop Partner',
    body: 'From LMS installation and maintenance to mobile apps, ERP, IoT, and content development — WHBS covers the full technology stack.',
  },
] as const

// ─── INDUSTRIES ─────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  {
    title: 'Education',
    sub: 'Universities & colleges',
    delay: 0,
    iconPath: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z|M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  },
  {
    title: 'Government',
    sub: 'Public sector agencies',
    delay: 0.06,
    iconPath: 'rect:3,3,18,18,2|M3 9h18M9 21V9',
  },
  {
    title: 'Corporate Training',
    sub: 'Enterprise workforce',
    delay: 0.12,
    iconPath: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|circle:9,7,4|M22 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    title: 'Healthcare',
    sub: 'Medical training platforms',
    delay: 0.18,
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
  {
    title: 'Manufacturing',
    sub: 'Production & IoT systems',
    delay: 0.24,
    iconPath: 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-5H4a2 2 0 0 0-2 2v15z|M14 2v6h6',
  },
  {
    title: 'International',
    sub: 'Southeast Asia & beyond',
    delay: 0.3,
    iconPath: 'circle:12,12,10|M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z|M2 12h20',
  },
] as const

// ─── PROCESS STEPS ─────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: 'Step 01',
    title: 'Discovery',
    body: 'We deeply understand your requirements, learning objectives, technical constraints, and business goals — before a single line of code is written.',
    iconPath: 'circle:11,11,8|M21 21l-4.35-4.35',
  },
  {
    step: 'Step 02',
    title: 'Strategy',
    body: 'We develop options for presentation and review. Content is mapped to curriculum, systems are architected, and a production schedule is locked.',
    iconPath: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|M14 2v6h6M16 13H8M16 17H8M10 9H8',
  },
  {
    step: 'Step 03',
    title: 'Implementation',
    body: 'Development, customization, and content production — handled by qualified instructional designers, developers, and graphic designers working as a unified team.',
    iconPath: 'polyline:16,18,22,12,16,6|polyline:8,6,2,12,8,18',
  },
  {
    step: 'Step 04',
    title: 'Support',
    body: 'Long-term partnership. From ongoing Moodle maintenance to system updates and expansions — we remain your technical partner well beyond go-live.',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
] as const

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      'The content was developed and mapped to the curriculum by Instructional Designers of WHBS, and the eLearning modules were developed by the WHBS Graphic Designer team. The project was completed on time, and throughout the project duration, we found the WHBS team to be highly professional and hardworking.',
    name: 'Pengiran Mohammed bin Pengiran Haji Kamaluddin',
    role: 'Chairman, Alif Technologies, SDN BHD — Brunei Darussalam',
    initials: 'PK',
    photo: '/images/testimonials/pengiran-kamaluddin.jpg',
    delay: 0,
  },
  {
    quote:
      'They were quite patient and diligent in understanding our requirements, developed options for presentation for our review and approval, and provided the final CBT as per schedule. We would recommend them to any organisation undertaking the development of training software.',
    name: 'Ashok Laguduva',
    role: 'Founder & CEO, Chiron Meditour',
    initials: 'AL',
    photo: '/images/testimonials/ashok-laguduva.jpg',
    delay: 0.1,
  },
  {
    quote:
      'I have worked closely with the Multimedia team of WHBS to manage several projects over a period of seven years and have always found them working hard to achieve the best result. They have reliably kept to the production schedule and successfully realized my ideas.',
    name: 'Roger Frost',
    role: 'Publishing & Consultancy, Foxton, Cambridge, U.K.',
    initials: 'RF',
    photo: '/images/testimonials/roger-frost.jpg',
    delay: 0.2,
  },
] as const

// ─── FOOTER LINKS ───────────────────────────────────────────────────────────
export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Awards', href: '/awards' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
]

export const FOOTER_SOLUTIONS = [
  { label: 'LMS Solutions', href: '/services/lms-development' },
  { label: 'Moodle Customization', href: '/services/lms-development' },
  { label: 'MOOC', href: '/services/elearning-development' },
  { label: 'ERP Solutions', href: '/services/erp-solutions' },
  { label: 'IoT Solutions', href: '/services/iot-solutions' },
]

export const FOOTER_CONTACT = [
  { label: 'info@whitehouseit.com', href: 'mailto:info@whitehouseit.com' },
  { label: '+91-44-2561 9113', href: 'tel:+914425619113' },
  { label: '+91-44-2561 9110', href: 'tel:+914425619110' },
  { label: '+91 70100 37016', href: 'tel:+917010037016' },
  { label: 'Contact Form', href: '/contact' },
]

// ─── SOCIAL MEDIA LINKS ────────────────────────────────────────────────────
export interface SocialLink {
  label: string
  href: string
  icon: string
  ariaLabel: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X',
    href: 'https://x.com/whbslearning',
    icon: 'XIcon',
    ariaLabel: 'Follow us on X (Twitter)',
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/whitehouseit/',
    icon: 'FaPinterest',
    ariaLabel: 'Follow us on Pinterest',
  },
  {
    label: 'Flickr',
    href: 'https://www.flickr.com/people/126872683@N02/',
    icon: 'FaFlickr',
    ariaLabel: 'Follow us on Flickr',
  },
  {
    label: 'Delicious',
    href: 'https://delicious.com/whitehouse_it',
    icon: 'FaLink',
    ariaLabel: 'Follow us on Delicious',
  },
  {
    label: 'WordPress',
    href: 'https://whbsit.wordpress.com/',
    icon: 'FaWordpress',
    ariaLabel: 'Visit our WordPress blog',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/whbschennai/',
    icon: 'FaLinkedin',
    ariaLabel: 'Follow us on LinkedIn',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/Whitehousechennai',
    icon: 'FaYoutube',
    ariaLabel: 'Subscribe to our YouTube channel',
  },
]

export const FOOTER_SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/whbschennai',
  },
  { label: 'Twitter', href: 'https://x.com/whbslearning' },
  { label: 'YouTube', href: 'https://www.youtube.com/user/Whitehousechennai' },
]
