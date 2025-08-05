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
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "feldspar",
    name: "Feldspar",
    slug: "feldspar",
    description: "Premium sodium and potassium feldspar for ceramics and glass",
    applications: ["Ceramics", "Glass", "Paints", "Plastics"],
    icon: Mountain,
    specs: "K2O: 11-13%, Na2O: 2-4%",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    id: "pumice-perlite",
    name: "Pumice & Perlite",
    slug: "pumice-perlite",
    description: "Lightweight volcanic minerals for construction and filtration",
    applications: ["Construction", "Filtration", "Horticulture", "Cosmetics"],
    icon: Layers,
    specs: "Expanded & Raw Forms",
    color: "text-gray-600",
    bgColor: "bg-gray-50"
  },
  {
    id: "bentonite",
    name: "Bentonite",
    slug: "bentonite",
    description: "High swelling bentonite for drilling, foundry, and civil works",
    applications: ["Drilling Mud", "Foundry", "Cat Litter", "Civil Engineering"],
    icon: Flame,
    specs: "Swelling Index: 24-30 ml/2g",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    id: "magnesite",
    name: "Magnesite",
    slug: "magnesite",
    description: "Refractory grade magnesite for steel and cement industries",
    applications: ["Refractories", "Steel Making", "Cement", "Chemicals"],
    icon: Sparkles,
    specs: "MgO: 45-47%",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
]

export function MineralShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Premium Turkish Minerals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Direct from Turkey's richest deposits. ISO-certified quality for your industrial needs.
          </p>
        </div>

        {/* Mineral Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {minerals.map((mineral) => {
            const Icon = mineral.icon
            return (
              <Card key={mineral.id} className="group relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-lg ${mineral.bgColor} p-3`}>
                      <Icon className={`h-6 w-6 ${mineral.color}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {mineral.specs}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{mineral.name}</CardTitle>
                  <CardDescription>{mineral.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {mineral.applications.slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                        >
                          {app}
                        </span>
                      ))}
                      {mineral.applications.length > 3 && (
                        <span className="inline-flex items-center text-xs text-gray-500">
                          +{mineral.applications.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={`/minerals/${mineral.slug}`}>
                        Learn More
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1">
                      Get Quote
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Need help choosing the right mineral for your application?
          </p>
          <Button size="lg" variant="outline">
            Download Complete Specifications PDF
          </Button>
        </div>
      </div>
    </section>
  )
}