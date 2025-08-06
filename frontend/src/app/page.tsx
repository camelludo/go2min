import { Hero } from "@/components/sections/hero"
import { MineralShowcase } from "@/components/sections/mineral-showcase"
import { TrustIndicators } from "@/components/sections/trust-indicators"
import { LeadFormSection } from "@/components/sections/lead-form-section"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

// Force dynamic rendering to avoid SSR issues with animations
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <MineralShowcase />
      <LeadFormSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}