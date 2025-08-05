import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const minerals = [
    { name: "Boron", href: "/minerals/boron" },
    { name: "Feldspar", href: "/minerals/feldspar" },
    { name: "Pumice & Perlite", href: "/minerals/pumice-perlite" },
    { name: "Bentonite", href: "/minerals/bentonite" },
    { name: "Magnesite", href: "/minerals/magnesite" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Quality Certifications", href: "/quality" },
    { name: "Export Capabilities", href: "/logistics" },
    { name: "Contact", href: "/contact" },
  ]

  const applications = [
    { name: "Ceramics & Glass", href: "/applications/ceramics-glass" },
    { name: "Construction", href: "/applications/construction" },
    { name: "Agriculture", href: "/applications/agriculture" },
    { name: "Chemical Industry", href: "/applications/chemical" },
    { name: "Steel & Foundry", href: "/applications/steel-foundry" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Go2Mineral</span>
            </Link>
            <p className="mt-4 text-sm">
              Your trusted partner for premium Turkish minerals. 20+ years of export 
              experience delivering quality industrial minerals worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:export@go2mineral.com" className="hover:text-white">
                  export@go2mineral.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+905555555555" className="hover:text-white">
                  +90 555 555 5555
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>Istanbul, Turkey</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-6 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              asChild
            >
              <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Our Minerals */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Minerals
            </h3>
            <ul className="mt-4 space-y-2">
              {minerals.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Applications
            </h3>
            <ul className="mt-4 space-y-2">
              {applications.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">
              © {currentYear} Go2Mineral. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}