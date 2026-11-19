'use client'

import { motion } from 'framer-motion'

interface SplitHeadingProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  className?: string
}

export default function SplitHeading({
  children,
  as = 'h2',
  className = '',
}: SplitHeadingProps) {
  const words = children.split(' ')

  const MotionTag = motion(as)

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            display: 'inline-block',
            marginRight: '0.3em',
          }}
          variants={{
            hidden: {
              y: 35,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  )
}