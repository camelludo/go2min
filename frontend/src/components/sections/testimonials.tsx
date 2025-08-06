"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Building2, MapPin } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Zhang Wei",
    position: "Procurement Director",
    company: "Ceramic Industries Co.",
    location: "Shanghai, China",
    industry: "Ceramics",
    mineral: "Feldspar",
    rating: 5,
    content: "Go2Mineral has been our trusted feldspar supplier for 3 years. Their consistent quality and competitive pricing have helped us maintain our production standards. The technical support team is exceptional.",
    highlight: "Consistent Quality",
  },
  {
    id: 2,
    name: "Michael Schmidt",
    position: "Supply Chain Manager",
    company: "EuroGlass GmbH",
    location: "Munich, Germany",
    industry: "Glass Manufacturing",
    mineral: "Boron",
    rating: 5,
    content: "The boron quality from Go2Mineral exceeds our specifications every time. Their documentation is thorough, and delivery is always on schedule. A reliable partner for our glass production needs.",
    highlight: "Exceeds Specifications",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "Operations Manager",
    company: "Construction Materials LLC",
    location: "Dubai, UAE",
    industry: "Construction",
    mineral: "Pumice",
    rating: 5,
    content: "We've sourced pumice from various suppliers, but Go2Mineral stands out with their customer service and product consistency. The lightweight aggregates have improved our concrete products significantly.",
    highlight: "Outstanding Service",
  },
  {
    id: 4,
    name: "Elena Petrova",
    position: "Technical Director",
    company: "Industrial Minerals Corp",
    location: "Moscow, Russia",
    industry: "Chemicals",
    mineral: "Bentonite",
    rating: 5,
    content: "The bentonite quality is excellent for our drilling mud applications. Go2Mineral's technical team helped us optimize our formulations. They truly understand industrial mineral applications.",
    highlight: "Technical Expertise",
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    position: "Quality Manager",
    company: "Refractories SA",
    location: "Barcelona, Spain",
    industry: "Steel & Foundry",
    mineral: "Magnesite",
    rating: 5,
    content: "Go2Mineral's magnesite has been crucial for our refractory products. The MgO content is consistently high, and they accommodate our specific particle size requirements perfectly.",
    highlight: "Custom Specifications",
  },
  {
    id: 6,
    name: "Raj Patel",
    position: "CEO",
    company: "AgriTech Solutions",
    location: "Mumbai, India",
    industry: "Agriculture",
    mineral: "Boron",
    rating: 5,
    content: "As a fertilizer manufacturer, we need reliable boron supply. Go2Mineral delivers quality products with all necessary certifications. Their pricing is competitive and payment terms are flexible.",
    highlight: "Flexible Terms",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-copper-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-stone-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-100/60 border border-copper-200/60 mb-6">
              <Star className="h-4 w-4 text-copper-600" />
              <span className="text-sm font-semibold text-copper-700 tracking-wide">CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Trusted by Global
              <span className="block text-gradient-copper">Industry Leaders</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Over 500+ satisfied customers across 40 countries rely on our Turkish minerals
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`animate-fade-in-up ${
                index === 0 ? "animation-delay-0" :
                index === 1 ? "animation-delay-100" :
                index === 2 ? "animation-delay-200" :
                index === 3 ? "animation-delay-300" :
                index === 4 ? "animation-delay-400" :
                "animation-delay-500"
              }`}
            >
              <Card className="h-full hover:shadow-crystal transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-stone-200/60">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Highlight Badge */}
                  <Badge variant="copper" className="mb-6">
                    {testimonial.highlight}
                  </Badge>

                  {/* Author Info */}
                  <div className="border-t pt-4">
                    <div className="mb-2">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        <span>{testimonial.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <Badge variant="mineral" className="text-xs">
                        {testimonial.mineral}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in-up animation-delay-800">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "40+", label: "Countries Served" },
            { value: "98%", label: "Customer Retention" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-copper-600 mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}