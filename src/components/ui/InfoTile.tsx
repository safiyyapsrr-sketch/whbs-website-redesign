import type { ReactNode } from 'react'

export interface InfoTileItem {
  title: string
  body: string
  icon: ReactNode
  color: string
}

/**
 * Compact horizontal info tile:
 * left white block with a number, right colored block with
 * title + short description + icon. No hover states — always
 * shown in its colored state.
 */
export default function InfoTile({
  index,
  title,
  body,
  icon,
  color,
  label,
}: {
  index: number
  title: string
  body: string
  icon: ReactNode
  color: string
  /** Optional override for the left-block label (defaults to a zero-padded index). */
  label?: string
}) {
  return (
    <div className="group flex h-full min-h-[104px] overflow-hidden rounded-[16px] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div className="flex w-[76px] flex-shrink-0 items-center justify-center bg-white">
        <span className="text-[26px] font-extrabold text-gray-900">
          {label ?? String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div
        className="flex flex-1 items-center justify-between gap-4 px-6 py-5"
        style={{ background: color }}
      >
        <div className="min-w-0">
          <h3 className="mb-1 text-[15px] font-bold leading-snug text-white">{title}</h3>
          <p className="text-[12.5px] leading-[1.55] text-white/80">{body}</p>
        </div>
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
    </div>
  )
}
