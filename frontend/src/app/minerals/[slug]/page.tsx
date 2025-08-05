import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

// Temporary static data - will be replaced with CMS data
const mineralsData = {
  boron: {
    name: "Boron",
    description: "Premium grade Turkish boron minerals for global industries",
    longDescription: "Turkey holds 73% of the world's boron reserves. Our boron products are sourced directly from the world's largest deposits, ensuring consistent quality and supply reliability for your industrial applications.",
    hsCode: "2528.10.00",
    category: "Industrial Mineral",
    specifications: {
      "Chemical Composition": {
        "B2O3 Content": "35-48%",
        "Moisture": "< 1.0%",
        "SiO2": "< 4.0%",
        "Fe2O3": "< 0.08%"
      },
      "Physical Properties": {
        "Appearance": "White crystalline powder",
        "Particle Size": "90% passing 200 mesh",
        "Bulk Density": "0.85-1.05 g/cm³",
        "pH (10% solution)": "9.2-9.5"
      }
    },
    grades: [
      { name: "Boric Acid Technical", b2o3: "56.3%", application: "Glass, Ceramics" },
      { name: "Borax Pentahydrate", b2o3: "48%", application: "Detergents, Agriculture" },
      { name: "Borax Decahydrate", b2o3: "36.5%", application: "Glass, Metallurgy" },
    ],
    applications: [
      "Glass Manufacturing",
      "Ceramic & Enamel Production",
      "Agriculture (Micronutrients)",
      "Detergents & Cleaners",
      "Flame Retardants",
      "Nuclear Applications"
    ],
    packaging: "25kg bags, 1000kg big bags, bulk",
    minimumOrder: "20 MT",
    leadTime: "2-3 weeks"
  },
  feldspar: {
    name: "Feldspar",
    description: "High-quality sodium and potassium feldspar for ceramics and glass",
    longDescription: "Our feldspar deposits in Western Turkey provide consistent quality minerals essential for ceramic and glass manufacturing. With low iron content and stable alkali ratios, our feldspar ensures superior product quality.",
    hsCode: "2529.10.00",
    category: "Industrial Mineral",
    specifications: {
      "Chemical Composition": {
        "K2O": "11-13%",
        "Na2O": "2-4%",
        "Fe2O3": "< 0.1%",
        "SiO2": "65-68%",
        "Al2O3": "17-19%"
      },
      "Physical Properties": {
        "Appearance": "White to pink granular",
        "Particle Size": "Various mesh sizes available",
        "Specific Gravity": "2.56-2.58",
        "Melting Point": "1150-1250°C"
      }
    },
    grades: [
      { name: "Potassium Feldspar", k2o: "12%", application: "Ceramics, Sanitaryware" },
      { name: "Sodium Feldspar", na2o: "10%", application: "Glass, Ceramics" },
      { name: "Mixed Feldspar", alkali: "14%", application: "Tiles, Porcelain" },
    ],
    applications: [
      "Ceramic Tiles & Sanitaryware",
      "Glass Manufacturing",
      "Paints & Coatings",
      "Plastics & Rubber",
      "Welding Electrodes",
      "Abrasives"
    ],
    packaging: "25kg bags, 1000kg big bags, bulk",
    minimumOrder: "20 MT",
    leadTime: "2-3 weeks"
  },
  // Add other minerals here...
}

export default async function MineralPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const mineral = mineralsData[slug as keyof typeof mineralsData]

  if (!mineral) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/minerals" className="text-gray-500 hover:text-gray-700">
              Minerals
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{mineral.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/minerals">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Minerals
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{mineral.name}</h1>
              <p className="mt-4 text-xl text-gray-600">{mineral.description}</p>
              <p className="mt-4 text-gray-700">{mineral.longDescription}</p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">HS Code</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{mineral.hsCode}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{mineral.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Min. Order</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{mineral.minimumOrder}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Lead Time</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">{mineral.leadTime}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="flex-1">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download Specs
                </Button>
              </div>
            </div>

            {/* Placeholder for image */}
            <div className="rounded-lg bg-gray-200 h-96 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(mineral.specifications).map(([category, specs]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b last:border-0">
                        <dt className="text-sm text-gray-600">{key}</dt>
                        <dd className="text-sm font-medium text-gray-900">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grades */}
      {mineral.grades && (
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Grades</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              {mineral.grades.map((grade) => (
                <Card key={grade.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{grade.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {Object.entries(grade).filter(([key]) => key !== 'name' && key !== 'application').map(([key, value]) => (
                        <span key={key}>{key.toUpperCase()}: {value}</span>
                      ))}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {grade.application}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industrial Applications</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mineral.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need {mineral.name} for Your Production?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Get competitive quotes and technical support from our experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}