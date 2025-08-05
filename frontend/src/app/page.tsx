import { Hero } from "@/components/sections/hero"
import { MineralShowcase } from "@/components/sections/mineral-showcase"
import { CTA } from "@/components/sections/cta"

// Force dynamic rendering to avoid SSR issues with animations
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <MineralShowcase />
      <CTA />
    </>
  )
}