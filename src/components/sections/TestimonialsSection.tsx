'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'
import Reveal from '@/components/ui/Reveal'

const COLORS = ['#0066FF', '#00A76F', '#6E41C0']
// Easy-revert toggle: set CARD_DARK_BG to false to restore the original white card style
const CARD_DARK_BG = true
const CARD_BG_COLOR = '#3A3A3A'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-py relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/backgrounds/testimonials-section-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'rgba(248,250,252,0.92)' }} aria-hidden="true" />
      </div>

      <div className="container-xl relative z-10">
        <Reveal className="text-center mb-14">
          <span className="eyebrow mb-4">Client Testimonials</span>
          <h2 className="text-clamp-section font-extrabold text-gray-900 tracking-tight mb-4">
            What our clients say
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[460px] mx-auto leading-[1.65]">
            Real feedback from organisations across government, education, and enterprise sectors.
          </p>
        </Reveal>

        {/* Featured testimonial */}
        <div className="max-w-[820px] mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div key={`testi-${active}`}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-200 shadow-lg relative">
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-[72px] leading-none font-extrabold select-none pointer-events-none"
                style={{ color: COLORS[active], opacity: 0.12 }} aria-hidden="true">&ldquo;</div>

              {/* Client photo — circular, centered */}
              <div className="flex justify-center mb-5">
                <div
                  className="relative rounded-full overflow-hidden flex-shrink-0"
                  style={{ width: 92, height: 92 }}
                >
                  <Image
                    src={TESTIMONIALS[active].photo}
                    alt={TESTIMONIALS[active].name}
                    fill
                    sizes="92px"
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-[17px] md:text-[19px] text-gray-700 leading-[1.8] mb-8 relative z-10 italic text-center">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-1 pt-6 border-t border-gray-100 text-center">
                <p className="text-[15px] font-bold text-gray-900">{TESTIMONIALS[active].name}</p>
                <p className="text-[13px] text-gray-500">{TESTIMONIALS[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mb-8">
          {TESTIMONIALS.map((_, ti) => (
            <button key={`tdot-${ti}`} onClick={() => setActive(ti)} aria-label={`View testimonial ${ti + 1}`}
              className="transition-all duration-300 rounded-full cursor-pointer border-none"
              style={{
                width: active === ti ? 28 : 10,
                height: 10,
                background: active === ti ? COLORS[ti] : '#CBD5E1',
              }} />
          ))}
        </div>

        {/* All testimonials — photo-centered card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, ti) => (
            <button
              key={`tcard-${ti}`}
              onClick={() => setActive(ti)}
              className="flex flex-col items-center text-center rounded-[18px] p-7 border cursor-pointer transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl"
              style={
                CARD_DARK_BG
                  ? {
                      background: CARD_BG_COLOR,
                      borderColor: active === ti ? COLORS[ti] : '#4A4A4A',
                      boxShadow: active === ti ? `0 8px 24px ${COLORS[ti]}33` : '0 2px 8px rgba(0,0,0,0.18)',
                    }
                  : {
                      background: active === ti ? '#EBF2FF' : '#fff',
                      borderColor: active === ti ? '#93C5FD' : '#E5E7EB',
                      boxShadow: active === ti ? '0 8px 24px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
                    }
              }
            >
              {/* Circular photo */}
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0 mb-4"
                style={{ width: 88, height: 88 }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  sizes="88px"
                  className="object-cover"
                />
              </div>

              <p className={`text-[13px] leading-relaxed mb-4 flex-1 ${CARD_DARK_BG ? "text-gray-300" : "text-gray-600"}`}>
                &ldquo;{t.quote.substring(0, 100)}...&rdquo;
              </p>

              <div className="mt-auto">
                <p className={`text-[14px] font-bold ${CARD_DARK_BG ? "text-white" : "text-gray-900"}`}>{t.name}</p>
                <p className={`text-[12px] mt-0.5 ${CARD_DARK_BG ? "text-gray-400" : "text-gray-500"}`}>{t.role.split('—')[1]?.trim() || t.role.split(',')[0]}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
