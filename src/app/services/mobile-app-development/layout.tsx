import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development — WHBS',
  description: 'Cross-platform iOS and Android app development using Ionic and Angular. White-label learning apps, enterprise mobility solutions, and offline-capable mobile platforms.',
  openGraph: { title: 'Mobile App Development — White House Business Solutions', description: 'Ionic and Angular mobile apps for enterprise learning and business operations.' },
}

export default function MobileAppDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
