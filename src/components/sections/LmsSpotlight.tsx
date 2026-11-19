import { LMS_FEATURES } from '@/lib/data'
import { SectionLabel, SectionTitle, SectionSub } from '@/components/ui/SectionHeader'
import { CheckIcon } from '@/components/ui/Icons'
import LmsMockup from './LmsMockup'
import Reveal from '@/components/ui/Reveal'

export default function LmsSpotlight() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-6" id="lms">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          {/* Left — copy + features */}
          <Reveal>
            <SectionLabel>Moodle LMS</SectionLabel>
            <SectionTitle>
              Enterprise LMS, built around your workflow
            </SectionTitle>
            <SectionSub>
              WHBS specializes in Moodle LMS customization, development, and enterprise
              implementation for corporate training providers, educational institutions,
              and organizations worldwide.
            </SectionSub>

            {/* Feature list */}
            <div className="flex flex-col gap-4 mt-8">
              {LMS_FEATURES.map((feature, fIdx) => (
                <div
                  key={`lf-${fIdx}`}
                  className="flex items-start gap-[14px] px-4 py-4 rounded-[12px]
                    transition-colors duration-[220ms] hover:bg-green-light"
                >
                  {/* Check */}
                  <div
                    className="w-[22px] h-[22px] rounded-full bg-green-light
                      border border-green/25 flex items-center justify-center
                      flex-shrink-0 mt-px text-green"
                  >
                    <CheckIcon />
                  </div>
                  {/* Text */}
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">
                      {feature.title}
                    </div>
                    <div className="text-[13px] text-[#475569] mt-0.5">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — mockup */}
          <Reveal delay={0.15}>
            <LmsMockup />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
