'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


const E = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Subtle scroll-linked parallax — image drifts + very slightly scales
  // (well under the 1.03 ceiling), copy softly fades as the hero scrolls
  // out of view. Compositor-only properties (transform/opacity), so this
  // stays smooth at 60fps with no layout shifts.
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(140deg, #060D1F 0%, #0D1425 50%, #071635 100%)',
        minHeight: '78vh',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/home/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay + existing blue gradient, on top of the background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(140deg, rgba(6,13,31,0.92) 0%, rgba(13,20,37,0.90) 50%, rgba(7,22,53,0.92) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)', backgroundSize: '100px 100px' }} aria-hidden="true" />
      {/* Blue glow TL */}
      <div className="absolute pointer-events-none" style={{ top: '-8%', left: '-4%', width: '55%', height: '75%', background: 'radial-gradient(ellipse, rgba(0,102,255,0.18) 0%, transparent 65%)', filter: 'blur(40px)' }} aria-hidden="true" />
      {/* Green glow BR */}
      <div className="absolute pointer-events-none" style={{ bottom: '-5%', right: '-3%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(0,167,111,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }} aria-hidden="true" />

      <div className="container-xl relative z-10 w-full pt-8 pb-28 lg:pt-10 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <motion.div className="max-w-[600px]" style={{ y: contentY, opacity: contentOpacity }}>
            {/* Status pill */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: E }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-[12px] font-semibold text-white/60 tracking-wide uppercase">Enterprise Technology · Since 1999</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-display font-extrabold text-white mb-6"
              style={{ lineHeight: 1.04 }}
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: E, delay: 0.07 }}
            >
              Digital learning &amp;{' '}
              <span style={{ background: 'linear-gradient(135deg,#4DA8FF 0%,#00D896 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                enterprise systems
              </span>
              {' '}built to last
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="text-lead text-white/55 mb-10 max-w-[520px]"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: E, delay: 0.14 }}
            >
              White House Business Solutions delivers custom Moodle LMS, eLearning content, Smartbooks ERP, IoT automation, and mobile apps — serving governments and enterprises across 14 countries since 1999.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: E, delay: 0.21 }}
            >
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book a Discovery Call
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M3 7.5h9M7.5 3l4.5 4.5-4.5 4.5"/></svg>
              </Link>
              <Link href="/services" className="btn btn-white-outline btn-lg">
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: E, delay: 0.28 }}
            >
              {[
                { value: '1,100+', label: 'Projects Delivered' },
                { value: '14',     label: 'Countries Served' },
                { value: '15',     label: 'Global Partners' },
                { value: '26+',    label: 'Years Experience' },
              ].map((s, i) => (
                <div key={`hs-${i}`} className="text-center px-3 py-4 rounded-[10px] border border-white/[0.09] bg-white/[0.04]">
                  <div className="text-[28px] font-extrabold text-white leading-none tracking-tight mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-medium text-white/45 leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 28, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: E, delay: 0.18 }}
          >
            {/* Main image — scroll-linked parallax drift (compositor-only, max scale 1.03) */}
            <motion.div
              className="relative rounded-[20px] overflow-hidden"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)', aspectRatio: '4/3', y: imgY, scale: imgScale }}
            >
              <Image
                src="/images/home/hero-enterprise.jpg"
                alt="Enterprise digital learning and technology platform"
                fill
                sizes="(max-width:1024px) 0px, 560px"
                className="object-cover"
                priority
              />
              {/* Subtle overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060D1F]/30 to-transparent pointer-events-none" aria-hidden="true"/>
              {/* Fallback shown only if image fails — dark gradient */}
              <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg,#162044 0%,#0E2A5C 60%,#072A1E 100%)' }} aria-hidden="true">
                <svg viewBox="0 0 420 320" width="340" height="260" fill="none">
                  <rect x="60" y="32" width="300" height="192" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                  <rect x="76" y="48" width="268" height="160" rx="6" fill="rgba(0,102,255,0.10)"/>
                  <rect x="92" y="72" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.35)"/>
                  <rect x="92" y="87" width="140" height="5" rx="2.5" fill="rgba(255,255,255,0.18)"/>
                  {[['92','120','28','60','#0066FF'],['128','100','28','80','#00A76F'],['164','88','28','92','#0066FF'],['200','108','28','72','#60A8FF'],['236','80','28','100','#00A76F'],['272','96','28','84','#0066FF']].map(([x,y,w,h,c],i)=>(
                    <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill={c} opacity="0.65"/>
                  ))}
                  <rect x="100" y="240" width="28" height="36" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <rect x="68" y="272" width="88" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                  <rect x="16" y="90" width="88" height="56" rx="8" fill="rgba(0,102,255,0.22)" stroke="rgba(0,102,255,0.4)" strokeWidth="1"/>
                  <rect x="26" y="104" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
                  <rect x="26" y="116" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.3)"/>
                  <rect x="316" y="152" width="88" height="56" rx="8" fill="rgba(0,167,111,0.22)" stroke="rgba(0,167,111,0.4)" strokeWidth="1"/>
                  <rect x="326" y="166" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
                  <rect x="326" y="178" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="104" cy="118" r="3" fill="#0066FF" opacity="0.9"/>
                  <circle cx="316" cy="180" r="3" fill="#00A76F" opacity="0.9"/>
                  <line x1="104" y1="118" x2="210" y2="145" stroke="#0066FF" strokeWidth="1" strokeDasharray="5 4" opacity="0.35"/>
                  <line x1="316" y1="180" x2="210" y2="155" stroke="#00A76F" strokeWidth="1" strokeDasharray="5 4" opacity="0.35"/>
                </svg>
                
              </div>
            </motion.div>

            {/* Float badge TL */}
            <motion.div className="absolute -left-10 top-10 float-badge" animate={{ y: [0,-7,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="w-8 h-8 rounded-[7px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 16 16" fill="none" stroke="#0066FF" strokeWidth="2" width="14" height="14"><path d="M2 12L6 8l3 3 5-7"/></svg>
              </div>
              <div>
                <div className="text-[13px] font-bold text-gray-900">1,100+ Projects</div>
                <div className="text-[11px] text-gray-500">Globally delivered</div>
              </div>
            </motion.div>

            {/* Float badge BR */}
            <motion.div className="absolute -right-8 bottom-14 float-badge" animate={{ y: [0,7,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <div className="w-8 h-8 rounded-[7px] bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 16 16" fill="none" stroke="#00A76F" strokeWidth="2" width="14" height="14"><circle cx="8" cy="8" r="6"/><path d="M5.5 8l2 2 3-3"/></svg>
              </div>
              <div>
                <div className="text-[13px] font-bold text-gray-900">iGOT Approved</div>
                <div className="text-[11px] text-gray-500">Govt. of India</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade — premium blend into the next section. Purely decorative
          (pointer-events-none, z-[5] so it always sits below the z-10 content
          column and can never visually or functionally affect it). CSS-only,
          no JS, no opacity change on the section itself. */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[220px] z-[5] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.65) 78%, #F9FAFB 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
