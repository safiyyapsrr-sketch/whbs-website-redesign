import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <p
      className={`text-[12px] font-bold tracking-widest uppercase text-green mb-3 ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-clamp-section font-extrabold tracking-tighter text-[#0F172A] leading-[1.15] mb-4 ${className}`}
    >
      {children}
    </h2>
  )
}

export function SectionSub({ children, className = '' }: Props) {
  return (
    <p
      className={`text-[17px] text-[#475569] leading-[1.65] font-normal max-w-[520px] ${className}`}
    >
      {children}
    </p>
  )
}
