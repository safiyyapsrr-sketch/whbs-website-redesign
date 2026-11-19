import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose WHBS — White House Business Solutions',
  description: 'Enterprise-grade by default, not by upsell. Security, integration, scalability, global deployment, long-term support, and a proven track record — every WHBS engagement, as standard.',
}

export default function WhyChooseWhbsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
