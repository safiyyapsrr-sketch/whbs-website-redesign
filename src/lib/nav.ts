/**
 * Navigation configuration — mega menu structure.
 * Single source of truth for all nav items, dropdowns, and routes.
 */

export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export interface NavEntry {
  label: string
  href?: string          // top-level link (no dropdown)
  groups?: NavGroup[]    // mega-menu groups
}

export const MEGA_NAV: NavEntry[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    groups: [
      {
        label: 'Learning Solutions',
        items: [
          { label: 'LMS Development', href: '/services/lms-development', description: 'Moodle customization & enterprise LMS deployment' },
          { label: 'Moodle Customization', href: '/services/moodle-customization', description: 'Tailored Moodle theming, plugins, and platform configuration' },
          { label: 'eLearning Development', href: '/services/elearning-development', description: 'Custom courseware, SCORM, and microlearning content' },
          { label: 'Content Transformation', href: '/services/content-transformation', description: 'Flash to HTML5, ILT to eLearning conversion' },
          { label: 'Coursera Course Development', href: '/services/coursera-course-development', description: 'Course design and production for the Coursera platform' },
        ],
      },
      {
        label: 'Enterprise Technology',
        items: [
          { label: 'ERP Solutions', href: '/services/erp-solutions', description: 'Smartbooks V7.0 cloud & on-premise ERP' },
          { label: 'Mobile App Development', href: '/services/mobile-app-development', description: 'iOS & Android apps with Ionic & Angular' },
          { label: 'IoT Solutions', href: '/services/iot-solutions', description: 'Industrial automation & factory IoT systems' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    groups: [
      {
        label: 'By Industry',
        items: [
          { label: 'Government', href: '/solutions/government', description: 'National training platforms & civil service eLearning' },
          { label: 'Education', href: '/solutions/education', description: 'Universities, colleges & K-12 institutions' },
          { label: 'Corporate Learning', href: '/solutions/corporate-learning', description: 'Enterprise L&D, onboarding & compliance training' },
          { label: 'Manufacturing', href: '/solutions/manufacturing', description: 'IoT automation, workforce & safety training' },
        ],
      },
    ],
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Company',
    groups: [
      {
        label: 'About WHBS',
        items: [
          { label: 'About Us', href: '/about', description: '26+ years of enterprise technology delivery' },
          { label: 'Why Choose WHBS', href: '/why-choose-whbs', description: 'Enterprise-grade by default, not by upsell' },
          { label: 'Awards & Recognition', href: '/awards', description: 'Industry accolades and achievements' },
          { label: 'Clients & Partners', href: '/partners', description: 'Our clients and global technology alliances' },
        ],
      },
      {
        label: 'Connect',
        items: [
          { label: 'News & Insights', href: '/news', description: 'Case studies, updates & industry thinking' },
          { label: 'eLearning Modules', href: '/elearning-modules', description: 'Browse our course library' },
          { label: 'Careers', href: '/careers', description: 'Join the WHBS team' },
          { label: 'Contact Us', href: '/contact', description: 'Talk to a solutions architect' },
        ],
      },
    ],
  },
]

// Flat list of all internal routes — used for link validation
export const ALL_INTERNAL_ROUTES = [
  '/',
  '/about',
  '/why-choose-whbs',
  '/services',
  '/services/lms-development',
  '/services/elearning-development',
  '/services/erp-solutions',
  '/services/mobile-app-development',
  '/services/iot-solutions',
  '/services/content-transformation',
  '/services/moodle-customization',
  '/services/coursera-course-development',
  '/solutions/government',
  '/solutions/education',
  '/solutions/corporate-learning',
  '/solutions/manufacturing',
  '/products',
  '/awards',
  '/partners',
  '/news',
  '/careers',
  '/contact',
] as const
