import Image from 'next/image'
import React from 'react'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="White House Business Solutions"
        width={220}
        height={60}
        priority
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}