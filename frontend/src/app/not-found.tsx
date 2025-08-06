import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Graphic */}
        <div className="relative mb-8">
          <div className="text-[200px] font-bold text-copper-100 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-copper-200 to-stone-200 opacity-50 animate-geological-float"></div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The mineral you&apos;re looking for seems to have been excavated. 
          Let&apos;s get you back to exploring our premium Turkish minerals.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="btn-mineral hover-mineral-shine">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
          <Link href="/minerals">
            <Button size="lg" variant="outline" className="border-2">
              <Search className="mr-2 h-4 w-4" />
              Browse Minerals
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-stone-50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">
            Need immediate assistance? Our experts are here to help:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/905555555555"
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Chat on WhatsApp
            </a>
            <span className="text-stone-300 hidden sm:inline">|</span>
            <a
              href="mailto:info@go2mineral.com"
              className="text-copper-600 hover:text-copper-700 font-medium text-sm"
            >
              info@go2mineral.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}