import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Learning Solutions — Enterprise L&D — WHBS',
  description: 'Enterprise learning management, onboarding automation, compliance training, and corporate eLearning content for global workforce development programmes.',
}

export default function CorporateLearningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
