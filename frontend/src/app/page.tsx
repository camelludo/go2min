import { Hero } from "@/components/sections/hero"
import { MineralShowcase } from "@/components/sections/mineral-showcase"
import { LeadFormSection } from "@/components/sections/lead-form-section"
import { CTA } from "@/components/sections/cta"

// Force dynamic rendering to avoid SSR issues with animations
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <MineralShowcase />
      <LeadFormSection />
      <CTA />
    </>
  )
}