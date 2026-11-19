interface SvgIconProps {
  pathData: string
  strokeWidth?: number
  className?: string
  size?: number
}

/**
 * Renders an inline SVG icon from a path string.
 * Supports special prefixes:
 *   "circle:cx,cy,r"        → <circle>
 *   "rect:x,y,w,h,rx"      → <rect>
 *   "polyline:x1,y1,..."    → <polyline>
 * Multiple shapes separated by "|"
 */
export default function SvgIcon({
  pathData,
  strokeWidth = 1.8,
  className = '',
  size = 22,
}: SvgIconProps) {
  const parts = pathData.split('|')

  const renderPart = (part: string, i: number) => {
    if (part.startsWith('circle:')) {
      const [cx, cy, r] = part.replace('circle:', '').split(',')
      return (
        <circle key={i} cx={cx} cy={cy} r={r} />
      )
    }
    if (part.startsWith('rect:')) {
      const [x, y, w, h, rx] = part.replace('rect:', '').split(',')
      return (
        <rect key={i} x={x} y={y} width={w} height={h} rx={rx} />
      )
    }
    if (part.startsWith('polyline:')) {
      const pts = part.replace('polyline:', '').replaceAll(',', ' ')
      return <polyline key={i} points={pts} />
    }
    return <path key={i} d={part} />
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {parts.map(renderPart)}
    </svg>
  )
}
