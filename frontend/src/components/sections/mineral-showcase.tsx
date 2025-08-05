import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, Mountain, Flame, Layers, Sparkles } from "lucide-react"

const minerals = [
  {
    id: "boron",
    name: "Boron",
    slug: "boron",
    description: "High-grade borate minerals for glass, ceramics, and agriculture",
    applications: ["Glass Manufacturing", "Ceramics", "Agriculture", "Detergents"],
    icon: Beaker,
    specs: "35-48% B2O3 Content",
    color: "text-mineral-boron",
    bgColor: "bg-mineral-boron/10",
    gradient: "from-mineral-boron/20 to-mineral-boron/5",
    shadowColor: "shadow-[0_8px_30px_rgb(59,130,246,0.12)]"
  },
  {
    id: "feldspar",
    name: "Feldspar", 
    slug: "feldspar",
    description: "Premium sodium and potassium feldspar for ceramics and glass",
    applications: ["Ceramics", "Glass", "Paints", "Plastics"],
    icon: Mountain,
    specs: "K2O: 11-13%, Na2O: 2-4%",
    color: "text-mineral-feldspar",
    bgColor: "bg-mineral-feldspar/10",
    gradient: "from-mineral-feldspar/20 to-mineral-feldspar/5",
    shadowColor: "shadow-[0_8px_30px_rgb(236,72,153,0.12)]"
  },
  {
    id: "pumice-perlite",
    name: "Pumice & Perlite",
    slug: "pumice-perlite", 
    description: "Lightweight volcanic minerals for construction and filtration",
    applications: ["Construction", "Filtration", "Horticulture", "Cosmetics"],
    icon: Layers,
    specs: "Expanded & Raw Forms",
    color: "text-mineral-pumice",
    bgColor: "bg-mineral-pumice/10",
    gradient: "from-mineral-pumice/20 to-mineral-pumice/5",
    shadowColor: "shadow-[0_8px_30px_rgb(107,114,128,0.12)]"
  },
  {
    id: "bentonite",
    name: "Bentonite",
    slug: "bentonite",
    description: "High swelling bentonite for drilling, foundry, and civil works",
    applications: ["Drilling Mud", "Foundry", "Cat Litter", "Civil Engineering"],
    icon: Flame,
    specs: "Swelling Index: 24-30 ml/2g",
    color: "text-mineral-bentonite",
    bgColor: "bg-mineral-bentonite/10",
    gradient: "from-mineral-bentonite/20 to-mineral-bentonite/5",
    shadowColor: "shadow-[0_8px_30px_rgb(245,158,11,0.12)]"
  },
  {
    id: "magnesite",
    name: "Magnesite",
    slug: "magnesite",
    description: "Refractory grade magnesite for steel and cement industries",
    applications: ["Refractories", "Steel Making", "Cement", "Chemicals"],
    icon: Sparkles,
    specs: "MgO: 45-47%",
    color: "text-mineral-magnesite",
    bgColor: "bg-mineral-magnesite/10",
    gradient: "from-mineral-magnesite/20 to-mineral-magnesite/5",
    shadowColor: "shadow-[0_8px_30px_rgb(22,163,74,0.12)]"
  }
]

export function MineralShowcase() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-stone-50 to-copper-50/30 crystal-pattern">
      {/* Beautiful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-copper-200/10 rounded-full blur-3xl animate-geological-float"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-stone-300/15 rounded-full blur-3xl animate-geological-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stunning Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-100/60 border border-copper-200/60 mb-6">
              <Sparkles className="h-4 w-4 text-copper-600" />
              <span className="text-sm font-semibold text-copper-700 tracking-wide">GEOLOGICAL EXCELLENCE</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Premium Turkish
              <span className="block text-gradient-copper">Minerals</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Direct from Turkey's richest geological deposits. ISO-certified quality 
              <span className="text-mineral-accent font-semibold"> engineered for your industrial excellence.</span>
            </p>
          </div>
        </div>

        {/* Spectacular Mineral Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {minerals.map((mineral, index) => {
            const Icon = mineral.icon
            return (
              <div 
                key={mineral.id} 
                className="animate-fade-in-up hover-crystallize"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-mineral hover:shadow-crystal transition-all duration-500 ${mineral.shadowColor}`}>
                  {/* Mineral-specific gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mineral.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
                  
                  <CardHeader className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`relative p-4 rounded-2xl ${mineral.bgColor} border border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${mineral.color} group-hover:animate-geological-float`} />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-copper-100/80 text-copper-800 backdrop-blur-sm border border-copper-200/60">
                          {mineral.specs}
                        </span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-copper-700 transition-colors">
                      {mineral.name}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {mineral.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 p-8 pt-0">
                    <div className="mb-6">
                      <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <Beaker className="h-4 w-4 text-copper-600" />
                        Key Applications:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mineral.applications.slice(0, 3).map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center rounded-lg bg-stone-100/80 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-stone-700 border border-stone-200/60 hover:bg-copper-100/60 hover:text-copper-800 hover:border-copper-200 transition-all duration-200"
                          >
                            {app}
                          </span>
                        ))}
                        {mineral.applications.length > 3 && (
                          <span className="inline-flex items-center text-xs text-muted-foreground font-medium px-2">
                            +{mineral.applications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild className="flex-1 hover:border-copper-300 hover:bg-copper-50 hover:text-copper-700 transition-all duration-200 font-semibold">
                        <Link href={`/minerals/${mineral.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                      <Button size="sm" className="flex-1 btn-mineral hover-mineral-shine font-semibold">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            )
          })}
        </div>

        {/* Spectacular CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="mx-auto max-w-2xl">
            <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-copper-200/60 shadow-crystal">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-copper-50/50 to-stone-50/50"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-mineral-boron flex items-center justify-center shadow-lg">
                      <Beaker className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-mineral-feldspar flex items-center justify-center shadow-lg">
                      <Mountain className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-mineral-bentonite flex items-center justify-center shadow-lg">
                      <Flame className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground mb-6">
                  Need help choosing the right mineral for your application?
                </p>
                <Button size="lg" className="btn-mineral hover-mineral-shine px-8 py-4 text-lg font-bold">
                  Download Complete Specifications PDF
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Geological Elements */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-copper-400 rounded-full animate-geological-float opacity-40"></div>
      <div className="absolute top-64 right-32 w-2 h-2 bg-stone-500 rounded-full animate-geological-float opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-copper-300 rounded-full animate-geological-float opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}