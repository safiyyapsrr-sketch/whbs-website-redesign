'use client'

/**
 * SafeImage — Client Component wrapper around next/image
 * Handles onError gracefully without breaking Server Component trees.
 * Falls back to showing the inner children (fallback slot) when image fails.
 */

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'onError'> & {
  /** Content rendered when the image fails to load (e.g. a gradient div) */
  fallback?: React.ReactNode
  /** Extra class for the wrapper div when fallback is used */
  fallbackClassName?: string
}

export default function SafeImage({
  fallback,
  alt,
  className,
  ...props
}: Props) {
  const [failed, setFailed] = useState(false)

  if (failed && fallback) {
    return <>{fallback}</>
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
