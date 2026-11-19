import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — White House Business Solutions',
  description: 'Founded in 1999 and operating across 14 countries, WHBS delivers LMS, eLearning, ERP, mobile apps, and IoT solutions to governments and enterprises.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
