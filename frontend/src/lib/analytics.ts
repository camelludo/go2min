// Simple analytics tracking utility
// In production, replace with actual analytics service (Google Analytics, Mixpanel, etc.)

type AnalyticsEvent = {
  name: string
  properties?: Record<string, unknown>
  timestamp: number
}

class Analytics {
  private events: AnalyticsEvent[] = []

  track(eventName: string, properties?: Record<string, unknown>) {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now(),
    }

    // Store event locally
    this.events.push(event)

    // In production, send to analytics service
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, properties)
    }

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", event)
    }
  }

  // Track form progress
  trackFormStep(step: number, formName: string = "lead_capture") {
    this.track("form_step_completed", {
      form_name: formName,
      step_number: step,
      step_name: this.getStepName(step),
    })
  }

  // Track form submission
  trackFormSubmission(formName: string = "lead_capture", data?: Record<string, unknown>) {
    const interestedMinerals = data?.interestedMinerals as string[] | undefined
    this.track("form_submitted", {
      form_name: formName,
      minerals_selected: interestedMinerals?.length || 0,
      quantity: data?.quantity,
      country: data?.country,
    })
  }

  // Track form errors
  trackFormError(error: string, step?: number) {
    this.track("form_error", {
      error_message: error,
      step_number: step,
    })
  }

  // Track page views
  trackPageView(pageName: string, properties?: Record<string, unknown>) {
    this.track("page_view", {
      page_name: pageName,
      ...properties,
    })
  }

  // Track CTA clicks
  trackCTAClick(ctaName: string, location: string) {
    this.track("cta_click", {
      cta_name: ctaName,
      location,
    })
  }

  private getStepName(step: number): string {
    const stepNames = {
      1: "product_selection",
      2: "technical_requirements",
      3: "contact_information",
    }
    return stepNames[step as keyof typeof stepNames] || `step_${step}`
  }

  // Get all tracked events (for debugging)
  getEvents() {
    return this.events
  }

  // Clear events
  clearEvents() {
    this.events = []
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Type for window.gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
  }
}