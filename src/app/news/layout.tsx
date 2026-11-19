import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom — White House Business Solutions',
  description:
    'News, case studies, product updates, and e-learning insights from White House Business Solutions — enterprise LMS, ERP, and e-learning specialists since 1999.',
  openGraph: {
    title: 'WHBS Newsroom',
    description:
      'News, case studies, and expert thinking on LMS, Moodle, e-learning, and enterprise technology from WHBS.',
    type: 'website',
    url: 'https://www.whitehouseit.com/news',
  },
  alternates: { canonical: 'https://www.whitehouseit.com/news' },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
