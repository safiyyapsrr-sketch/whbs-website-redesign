'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Solution } from '@/lib/data'
import SvgIcon from '@/components/ui/SvgIcon'

const SERVICE_VISUALS: Record<
  string,
  {
    image: string
    accent: string
  }
> = {
  'LMS Solutions': {
    image: '/images/lms.jpg',
    accent: '#0066FF',
  },
  'eLearning Solutions': {
    image: '/images/elearning.jpg',
    accent: '#7C3AED',
  },
  'ERP Solutions': {
    image: '/images/erp.jpg',
    accent: '#059669',
  },
  'Application Development': {
    image: '/images/mobile-app.jpg',
    accent: '#0D9488',
  },
  'IoT Solutions': {
    image: '/images/iot.jpg',
    accent: '#D97706',
  },
  'Content Transformation': {
    image: '/images/content-transformation.jpg',
    accent: '#E11D48',
  },
}

export default function SolutionCard({
  solution,
  index = 0,
}: {
  solution: Solution
  index?: number
}) {
  const vis = SERVICE_VISUALS[solution.title] ?? {
    image: '/images/default.jpg',
    accent: '#0284C7',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="group relative bg-white rounded-[20px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#CCE0FF] transition-all duration-300 flex flex-col h-full"
    >
      {/* Hover Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          background: `linear-gradient(90deg, ${vis.accent}, ${vis.accent}80)`,
        }}
        aria-hidden="true"
      />

      {/* Image Banner */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={vis.image}
          alt={solution.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.12))',
          }}
        />

        {/* Service Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-white text-[22px] font-extrabold tracking-tight">
            {solution.title}
          </h3>
        </div>

        {/* Service Icon */}
        <div
          className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 z-10"
          style={{
            background: `${vis.accent}CC`,
            color: 'white',
          }}
        >
          <SvgIcon
            pathData={solution.iconPath}
            size={20}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[14px] text-gray-600 leading-[1.75] mb-5 flex-1">
          {solution.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-5">
          {solution.tags.map((tag, ti) => (
            <span
              key={`tag-${ti}`}
              className="text-[11px] font-medium px-3 py-1 rounded-full"
              style={{
                background: `${vis.accent}12`,
                color: vis.accent,
                border: `1px solid ${vis.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={solution.href}
          className="inline-flex items-center gap-2 text-[14px] font-semibold no-underline transition-all duration-200"
          style={{ color: vis.accent }}
        >
          Learn More

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M1 7h12M7 1l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}