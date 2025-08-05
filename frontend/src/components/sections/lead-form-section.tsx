"use client"

import { LeadCaptureForm } from "@/components/forms/lead-capture-form"

export function LeadFormSection() {
  return (
    <section id="get-quote" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-copper-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get Your
              <span className="text-gradient-copper bg-crystal-gradient bg-clip-text text-transparent"> Custom Quote</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Tell us about your requirements and receive a detailed quote within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-copper-100 p-8 sm:p-12 animate-fade-in-up animation-delay-200">
            <LeadCaptureForm />
          </div>

          <div className="mt-8 text-center animate-fade-in-up animation-delay-400">
            <p className="text-sm text-muted-foreground">
              🔒 Your information is secure and will never be shared with third parties
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}