'use client'

import Image from 'next/image'

interface Props {
  count?: number
  /** 'sm' = 90px tall cards, 'lg' = 110px tall cards */
  size?: 'sm' | 'lg'
}

export default function ClientLogoGrid({ count = 56, size = 'lg' }: Props) {
  const nums = Array.from({ length: count }, (_, i) => i + 1)
  const cardH = size === 'lg' ? 110 : 88
  const imgW = size === 'lg' ? 180 : 150
  const imgH = size === 'lg' ? 80 : 64

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
      {nums.map(n => (
        <div
          key={n}
          className="flex items-center justify-center rounded-[12px] bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-250 cursor-default group"
          style={{ padding: '16px 12px', minHeight: cardH }}
        >
          <div
            className="relative group-hover:scale-105 transition-transform duration-250"
            style={{ width: imgW, height: imgH }}
          >
            <Image
              src={`/images/clients/client${n}.png`}
              alt={`Client ${n}`}
              fill
              sizes="(max-width:640px) 140px,(max-width:1024px) 150px,180px"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
