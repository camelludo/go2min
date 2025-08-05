import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Source Premium Turkish Minerals?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Get competitive quotes within 24 hours. Our expert team is ready to help you find 
            the perfect mineral solution for your industrial needs.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <FileText className="mr-2 h-4 w-4" />
              Request Quote Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-x-6 text-sm text-gray-100">
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓</span>
              <span>No minimum order</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓</span>
              <span>Free samples available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓</span>
              <span>Technical support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}