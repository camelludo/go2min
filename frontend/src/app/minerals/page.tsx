import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic'

const minerals = [
  {
    id: "boron",
    name: "Boron",
    slug: "boron",
    description: "High-grade borate minerals for glass, ceramics, and agriculture",
    applications: ["Glass Manufacturing", "Ceramics", "Agriculture", "Detergents"],
    specs: "35-48% B2O3 Content",
    image: "/api/placeholder/400/300"
  },
  {
    id: "feldspar",
    name: "Feldspar",
    slug: "feldspar",
    description: "Premium sodium and potassium feldspar for ceramics and glass",
    applications: ["Ceramics", "Glass", "Paints", "Plastics"],
    specs: "K2O: 11-13%, Na2O: 2-4%",
    image: "/api/placeholder/400/300"
  },
  {
    id: "pumice-perlite",
    name: "Pumice & Perlite",
    slug: "pumice-perlite",
    description: "Lightweight volcanic minerals for construction and filtration",
    applications: ["Construction", "Filtration", "Horticulture", "Cosmetics"],
    specs: "Expanded & Raw Forms",
    image: "/api/placeholder/400/300"
  },
  {
    id: "bentonite",
    name: "Bentonite",
    slug: "bentonite",
    description: "High swelling bentonite for drilling, foundry, and civil works",
    applications: ["Drilling Mud", "Foundry", "Cat Litter", "Civil Engineering"],
    specs: "Swelling Index: 24-30 ml/2g",
    image: "/api/placeholder/400/300"
  },
  {
    id: "magnesite",
    name: "Magnesite",
    slug: "magnesite",
    description: "Refractory grade magnesite for steel and cement industries",
    applications: ["Refractories", "Steel Making", "Cement", "Chemicals"],
    specs: "MgO: 45-47%",
    image: "/api/placeholder/400/300"
  }
]

export default function MineralsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Mineral Products
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Premium quality Turkish minerals for global industries. ISO-certified, reliable supply.
            </p>
          </div>
        </div>
      </section>

      {/* Minerals Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {minerals.map((mineral) => (
              <Card key={mineral.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Placeholder for image */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{mineral.name} Image</span>
                </div>
                
                <CardHeader>
                  <CardTitle>{mineral.name}</CardTitle>
                  <CardDescription>{mineral.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Technical Specs:</p>
                    <p className="text-sm text-gray-600">{mineral.specs}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {mineral.applications.slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={`/minerals/${mineral.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1">
                      Get Quote
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Contact our experts for custom mineral solutions and technical support
          </p>
          <Button size="lg" variant="secondary">
            Contact Our Experts
          </Button>
        </div>
      </section>
    </div>
  )
}