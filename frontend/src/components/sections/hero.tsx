"use client"

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
    <section className="relative overflow-hidden crystal-pattern min-h-screen flex items-center py-16 sm:py-24 lg:py-32">
      {/* Magnificent Background Effects */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-50 via-stone-50 to-copper-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper-200/20 rounded-full blur-3xl animate-geological-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-stone-200/30 rounded-full blur-3xl animate-geological-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-copper-300/10 rounded-full blur-2xl animate-geological-float animation-delay-2000"></div>
      </div>

      {/* Geological Pattern Overlay */}
      <div className="absolute inset-0 -z-10 mineral-texture opacity-30"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Stunning Main Headline */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Premium Turkish
              <span className="block text-gradient-copper bg-crystal-gradient bg-clip-text text-transparent">
                Minerals
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mt-4">
                Delivered Direct to Your Facility
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subheadline */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl max-w-4xl mx-auto">
              ISO-certified <span className="text-mineral-accent font-semibold">boron, feldspar, pumice, bentonite & magnesite</span> from Turkey&apos;s 
              richest geological deposits. Get instant quotes with guaranteed specifications.
            </p>
          </div>

          {/* Stunning CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="btn-mineral hover-mineral-shine w-full sm:w-auto text-lg px-8 py-4 h-14"
              onClick={() => {
                document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 h-14 border-2 border-copper-200 hover:border-copper-400 hover:bg-copper-50 hover-crystallize">
              Download Specifications
            </Button>
          </div>

          {/* Beautiful Trust Indicators */}
          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="group">
                  <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-copper-100 shadow-mineral hover-crystallize hover:shadow-crystal transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crystal-gradient flex items-center justify-center shadow-crystal">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-copper-700 transition-colors">
                      {indicator}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Magnificent Industries Section */}
        <div className="mt-20 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-copper-600 tracking-widest uppercase mb-2">
              Trusted by Leading Manufacturers
            </p>
            <div className="w-24 h-1 bg-crystal-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { icon: "🏭", name: "Ceramics", color: "text-mineral-boron" },
              { icon: "🏗️", name: "Construction", color: "text-stone-600" },
              { icon: "🧪", name: "Chemicals", color: "text-mineral-bentonite" },
              { icon: "🌱", name: "Agriculture", color: "text-mineral-magnesite" },
              { icon: "🔧", name: "Steel & Foundry", color: "text-mineral-pumice" }
            ].map((industry) => (
              <div key={industry.name} className="group hover-geological-float">
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-stone-200 hover:border-copper-300 hover:bg-white/60 transition-all duration-300 hover:shadow-crystal">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </span>
                  <span className={`text-sm font-bold ${industry.color} group-hover:text-copper-600 transition-colors`}>
                    {industry.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spectacular Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-copper-400 rounded-full animate-geological-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-stone-400 rounded-full animate-geological-float opacity-40 animation-delay-1500"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-copper-500 rounded-full animate-geological-float opacity-50 animation-delay-3000"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-stone-500 rounded-full animate-geological-float opacity-30 animation-delay-2500"></div>
    </section>
  )
}