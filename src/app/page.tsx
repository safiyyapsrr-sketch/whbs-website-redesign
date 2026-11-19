import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import SolutionsSection from '@/components/sections/SolutionsSection'
import ClientTrustSection from '@/components/sections/ClientTrustSection'
import GovernmentSection from '@/components/sections/GovernmentSection'
import WhySection from '@/components/sections/WhySection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <SolutionsSection />
      <ClientTrustSection />
      <GovernmentSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
