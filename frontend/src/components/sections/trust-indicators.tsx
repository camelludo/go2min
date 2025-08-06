"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Award,
  Users,
  Truck,
  Globe2,
  Clock,
  CheckCircle2,
  Factory,
} from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    description: "International quality management standards",
    badge: "Verified",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of mineral export excellence",
    badge: "Established 2003",
    color: "text-copper-600",
    bgColor: "bg-copper-50",
  },
  {
    icon: Users,
    title: "500+ Global Clients",
    description: "Trusted by industry leaders worldwide",
    badge: "B2B Focus",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "98% shipments delivered as scheduled",
    badge: "Guaranteed",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Globe2,
    title: "40+ Countries Served",
    description: "Global reach with local expertise",
    badge: "Worldwide",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Clock,
    title: "24-Hour Response",
    description: "Quick quotes and technical support",
    badge: "Fast Service",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: CheckCircle2,
    title: "Quality Guaranteed",
    description: "Every batch tested and certified",
    badge: "Lab Tested",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Factory,
    title: "Direct From Source",
    description: "No middlemen, best prices guaranteed",
    badge: "Factory Direct",
    color: "text-stone-600",
    bgColor: "bg-stone-50",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-100/60 border border-copper-200/60 mb-6">
              <Shield className="h-4 w-4 text-copper-600" />
              <span className="text-sm font-semibold text-copper-700 tracking-wide">WHY CHOOSE GO2MINERAL</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Trusted Partner for
              <span className="block text-gradient-copper">Global Industries</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Reliability, quality, and expertise that sets us apart in the mineral export industry
            </p>
          </div>
        </div>

        {/* Trust Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`animate-fade-in-up ${
                  index === 0 ? "animation-delay-0" :
                  index === 1 ? "animation-delay-100" :
                  index === 2 ? "animation-delay-200" :
                  index === 3 ? "animation-delay-300" :
                  index === 4 ? "animation-delay-400" :
                  index === 5 ? "animation-delay-500" :
                  index === 6 ? "animation-delay-600" :
                  "animation-delay-700"
                }`}
              >
                <Card className="h-full hover:shadow-crystal transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-stone-200/60 group">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Badge */}
                    <Badge variant="outline" className="text-xs">
                      {item.badge}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Certifications Row */}
        <div className="mt-20 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Certifications & Memberships
            </h3>
            <p className="text-muted-foreground">
              Recognized by international quality and trade organizations
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { name: "ISO 9001:2015", type: "Quality Management" },
              { name: "Turkish Exporters Assembly", type: "Member" },
              { name: "Mining Association", type: "Certified Member" },
              { name: "Chamber of Commerce", type: "Registered" },
              { name: "SGS Verified", type: "Lab Partner" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="text-center p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-stone-200/60 hover:border-copper-200 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-copper-100 to-stone-100 flex items-center justify-center">
                  <Award className="w-10 h-10 text-copper-600" />
                </div>
                <div className="font-semibold text-sm text-foreground">{cert.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{cert.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}