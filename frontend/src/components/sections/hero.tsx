import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  const trustIndicators = [
    "ISO 9001:2015 Certified",
    "20 Years Export Experience",
    "Direct From Turkish Mines",
    "Global Shipping"
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Premium Turkish Minerals
            <span className="block text-primary">Delivered Direct to Your Facility</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            ISO-certified boron, feldspar, pumice, bentonite & magnesite from Turkey's 
            leading exporters. Get instant quotes with guaranteed specifications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Instant Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Specifications
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mineral Types Preview */}
        <div className="mt-16">
          <p className="text-center text-sm font-medium text-gray-600">
            TRUSTED BY LEADING MANUFACTURERS IN
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-900">
            <span>🏭 Ceramics</span>
            <span>🏗️ Construction</span>
            <span>🧪 Chemicals</span>
            <span>🌱 Agriculture</span>
            <span>🔧 Steel & Foundry</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 h-96 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[200%] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-primary/5 to-transparent"></div>
      </div>
    </section>
  )
}