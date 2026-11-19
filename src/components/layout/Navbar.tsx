'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import { MEGA_NAV, type NavEntry, type NavGroup } from '@/lib/nav'

const EASE = [0.22, 1, 0.36, 1] as const

function MegaPanel({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  if (!entry.groups) return null
  const isRight = entry.label === 'Company'
  const isLeft = entry.label === 'Services' || entry.label === 'Solutions'
  const posClass = isRight ? 'right-0' : isLeft ? 'left-0' : 'left-1/2 -translate-x-1/2'

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.2, ease: EASE }}
      className={`absolute top-[calc(100%+8px)] z-50 rounded-[20px] overflow-hidden ${posClass}`}
      style={{
        minWidth: entry.groups.length > 1 ? '620px' : '280px',
        maxWidth: '720px',
        background: 'white',
        border: '1px solid #E2E8F0',
        boxShadow: '0 24px 64px rgba(15,23,42,0.14), 0 4px 8px rgba(15,23,42,0.06)',
      }}
      role="dialog" aria-label={`${entry.label} navigation`}>
      {/* Color accent bar */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg,#0066FF 0%,#06B6D4 60%,#059669 100%)' }} aria-hidden="true" />

      <div className="grid" style={{ gridTemplateColumns: `repeat(${entry.groups.length},1fr)` }}>
        {entry.groups.map((g: NavGroup, gi: number) => (
          <div key={`mpg-${gi}`} className="p-5"
            style={{ borderRight: gi < entry.groups!.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-3 px-1">{g.label}</p>
            <ul className="space-y-0.5 list-none m-0 p-0">
              {g.items.map((item, ii) => (
                <li key={`mpi-${gi}-${ii}`}>
                  <Link href={item.href} onClick={onClose}
                    className="group/item flex flex-col px-3 py-2.5 rounded-[10px] no-underline hover:bg-[#EBF2FF] transition-all duration-150">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" aria-hidden="true" />
                      <span className="text-[14px] font-semibold text-gray-800 group-hover/item:text-[#0066FF] transition-colors">{item.label}</span>
                    </div>
                    {item.description && (
                      <p className="text-[12px] text-gray-500 mt-0.5 ml-3.5 leading-snug">{item.description}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <p className="text-[11px] text-gray-400">
          <span className="font-semibold text-gray-600">26 years</span> of enterprise delivery
        </p>
        <Link href="/contact" onClick={onClose}
          className="text-[12px] font-semibold text-[#0066FF] hover:text-[#0066FF] no-underline flex items-center gap-1">
          Book a demo
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M1 5h8M5 1l4 4-4 4"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

function MobileItem({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = entry.href
    ? pathname === entry.href
    : entry.groups?.some(g => g.items.some(i => pathname.startsWith(i.href)))

  if (!entry.groups) {
    return (
      <Link href={entry.href!} onClick={onClose}
        className={`block px-4 py-3 rounded-[10px] text-[15px] font-semibold no-underline transition-colors ${isActive ? 'text-[#0066FF] bg-[#EBF2FF]' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
        {entry.label}
      </Link>
    )
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-[10px] text-[15px] font-semibold cursor-pointer border-none transition-colors ${open ? 'bg-[#EBF2FF] text-[#0066FF]' : 'bg-transparent text-gray-700 hover:bg-gray-50'}`}
        aria-expanded={open}>
        {entry.label}
        <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}
          animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden="true">
          <path d="M2 5l5 5 5-5" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: EASE }} className="overflow-hidden ml-4">
            <div className="pt-1 pb-2">
              {entry.groups!.map((g, gi) => (
                <div key={`mg-${gi}`} className="mb-2">
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 px-4 py-1">{g.label}</p>
                  {g.items.map((item, ii) => (
                    <Link key={`mi-${gi}-${ii}`} href={item.href} onClick={onClose}
                      className="block px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-[#0066FF] hover:bg-[#EBF2FF] rounded-[8px] no-underline transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMenuOpen(false); setActiveMenu(null) }, [pathname])

  const enter = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setActiveMenu(label)
  }
  const leave = () => { leaveTimer.current = setTimeout(() => setActiveMenu(null), 140) }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Top contact strip */}
      <div className="hidden lg:flex h-9 items-center bg-[#0D1425] text-white/60 text-[12px] px-12">
        <div className="flex items-center justify-between w-full max-w-[1240px] mx-auto">
          <div className="flex items-center gap-7">
            <a href="mailto:info@whitehouseit.com" className="hover:text-white transition-colors no-underline flex items-center gap-1.5">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 4l7 5 7-5"/></svg> info@whitehouseit.com
            </a>
            <a href="tel:+914425619113" className="hover:text-white transition-colors no-underline flex items-center gap-1.5">
              <span className="text-blue-400">Tel</span> +91-44-2561 9113
            </a>
            <span className="text-white/30">Mon–Fri 9:00 AM–6:00 PM IST</span>
          </div>
          <div className="flex items-center gap-5">
            {[['X', 'https://x.com/whbslearning'], ['LinkedIn', 'https://www.linkedin.com/company/whbschennai/'], ['YouTube', 'https://www.youtube.com/user/Whitehousechennai']].map(([l, h], si) => (
              <a key={`topbar-s-${si}`} href={h} target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors no-underline text-[12px] font-medium">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`h-[64px] flex items-center px-6 lg:px-12 w-full nav-glass transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
        aria-label="Main navigation">
        <div className="flex items-center justify-between w-full max-w-[1240px] mx-auto">
          <Link href="/" className="flex items-center no-underline flex-shrink-0" aria-label="WHBS Home">
            <Logo />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
            {MEGA_NAV.map((entry, ei) => {
              const hasMenu = !!entry.groups
              const isActive = entry.href
                ? pathname === entry.href
                : entry.groups?.some(g => g.items.some(i => pathname.startsWith(i.href)))
              return (
                <li key={`nav-${ei}`} className="relative"
                  onMouseEnter={() => hasMenu && enter(entry.label)}
                  onMouseLeave={() => hasMenu && leave()}>
                  {entry.href ? (
                    <Link href={entry.href}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-[8px] text-[14px] font-semibold no-underline transition-all duration-200
                        ${isActive ? 'text-[#0066FF] bg-[#EBF2FF]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
                      {entry.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[8px] text-[14px] font-semibold cursor-pointer border-none transition-all duration-200
                        ${activeMenu === entry.label ? 'bg-[#EBF2FF] text-[#0066FF]' : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'}
                        ${isActive ? '!text-[#0066FF]' : ''}`}
                      aria-expanded={activeMenu === entry.label} aria-haspopup="true"
                      onClick={() => setActiveMenu(activeMenu === entry.label ? null : entry.label)}>
                      {entry.label}
                      <motion.svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5}
                        animate={{ rotate: activeMenu === entry.label ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden="true">
                        <path d="M2 4l4 4 4-4" />
                      </motion.svg>
                    </button>
                  )}
                  <AnimatePresence>
                    {hasMenu && activeMenu === entry.label && (
                      <MegaPanel entry={entry} onClose={() => setActiveMenu(null)} />
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-flex btn btn-primary no-underline text-[14px]">
              Book a Demo
            </Link>
            <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-[8px] border border-gray-200 bg-white gap-[5px] cursor-pointer hover:bg-gray-50 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}>
              <motion.span className="block w-5 h-0.5 bg-slate-600 rounded-full origin-center"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-slate-600 rounded-full"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-slate-600 rounded-full origin-center"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div key="drawer"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute top-[100px] lg:top-[104px] left-0 right-0 lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 py-4 flex flex-col gap-1 z-40 max-h-[80vh] overflow-y-auto">
            {MEGA_NAV.map((entry, mei) => (
              <MobileItem key={`mob-${mei}`} entry={entry} onClose={() => setMenuOpen(false)} />
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link href="/contact" onClick={() => setMenuOpen(false)}
                className="btn btn-primary flex justify-center no-underline w-full">Book a Demo</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
