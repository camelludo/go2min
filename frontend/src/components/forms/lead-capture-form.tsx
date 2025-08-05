"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, CheckCircle2 } from "lucide-react"
import {
  leadFormSchema,
  type LeadFormData,
} from "@/lib/validations/lead-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { analytics } from "@/lib/analytics"

const minerals = [
  "Chromite",
  "Magnetite", 
  "Copper Ore",
  "Lead-Zinc Ore",
  "Barite",
  "Talc",
  "Bentonite",
  "Kaolin",
  "Feldspar",
  "Quartz",
  "Marble",
  "Travertine",
]

const certifications = [
  "ISO 9001",
  "SGS Analysis",
  "Chemical Analysis Report",
  "Mineral Content Certificate",
  "Export License",
  "Origin Certificate",
]

const steps = [
  { title: "Product Selection", description: "What minerals do you need?" },
  { title: "Technical Requirements", description: "Tell us your specifications" },
  { title: "Contact Information", description: "How can we reach you?" },
]

export function LeadCaptureForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [leadId, setLeadId] = useState("")
  const { toast } = useToast()

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      interestedMinerals: [],
      quantity: 20,
      quantityUnit: "MT" as const,
      qualityCertificatesRequired: [],
      newsletter: false,
    },
  })

  const validateStep = async () => {
    let fields: (keyof LeadFormData)[]

    switch (currentStep) {
      case 1:
        fields = ["interestedMinerals", "quantity", "quantityUnit"]
        break
      case 2:
        fields = ["applicationUse", "specifications", "qualityCertificatesRequired", "targetDate", "deliveryPort"]
        break
      case 3:
        fields = ["companyName", "contactPerson", "email", "phone", "whatsapp", "country", "source", "message", "newsletter"]
        break
      default:
        return false
    }

    const result = await form.trigger(fields)
    return result
  }

  const handleNext = async () => {
    const isValid = await validateStep()
    if (isValid && currentStep < 3) {
      analytics.trackFormStep(currentStep)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (data: LeadFormData) => {
    setSubmitting(true)
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }
      
      // Track successful submission
      analytics.trackFormSubmission("lead_capture", data)
      
      // Store lead ID and show success dialog
      setLeadId(result.leadId)
      setShowSuccess(true)
      
      // Reset form after a delay
      setTimeout(() => {
        form.reset()
        setCurrentStep(1)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      
      // Track error
      analytics.trackFormError(
        error instanceof Error ? error.message : "Form submission failed",
        currentStep
      )
      
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const progressValue = (currentStep / 3) * 100

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index + 1 === currentStep
                  ? "text-primary font-medium"
                  : index + 1 < currentStep
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  index + 1 === currentStep
                    ? "bg-primary text-primary-foreground"
                    : index + 1 < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-muted"
                }`}
              >
                {index + 1 < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="hidden sm:inline">{step.title}</span>
            </div>
          ))}
        </div>
        <Progress value={progressValue} className="h-2" />
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {/* Step 1: Product Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Minerals of Interest</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {minerals.map((mineral) => (
                  <div key={mineral} className="flex items-center space-x-2">
                    <Checkbox
                      id={mineral}
                      checked={form.watch("interestedMinerals")?.includes(mineral)}
                      onCheckedChange={(checked) => {
                        const current = form.getValues("interestedMinerals") || []
                        if (checked) {
                          form.setValue("interestedMinerals", [...current, mineral])
                        } else {
                          form.setValue(
                            "interestedMinerals",
                            current.filter((m) => m !== mineral)
                          )
                        }
                      }}
                    />
                    <Label
                      htmlFor={mineral}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {mineral}
                    </Label>
                  </div>
                ))}
              </div>
              {form.formState.errors.interestedMinerals && (
                <p className="text-sm text-destructive mt-2">
                  {form.formState.errors.interestedMinerals.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="quantity">Quantity Required</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="quantity"
                    type="number"
                    {...form.register("quantity", { valueAsNumber: true })}
                    className="flex-1"
                  />
                  <Select
                    value={form.watch("quantityUnit")}
                    onValueChange={(value: "MT" | "kg") =>
                      form.setValue("quantityUnit", value)
                    }
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MT">MT</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {form.formState.errors.quantity && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.quantity.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Technical Requirements */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="applicationUse">Application/End Use</Label>
              <Textarea
                id="applicationUse"
                {...form.register("applicationUse")}
                placeholder="Please describe how you plan to use these minerals..."
                className="mt-1"
              />
              {form.formState.errors.applicationUse && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.applicationUse.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="specifications">Technical Specifications (Optional)</Label>
              <Textarea
                id="specifications"
                {...form.register("specifications")}
                placeholder="Any specific purity requirements, particle size, etc..."
                className="mt-1"
              />
            </div>

            <div>
              <Label>Quality Certificates Required</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox
                      id={cert}
                      checked={form.watch("qualityCertificatesRequired")?.includes(cert)}
                      onCheckedChange={(checked) => {
                        const current = form.getValues("qualityCertificatesRequired") || []
                        if (checked) {
                          form.setValue("qualityCertificatesRequired", [...current, cert])
                        } else {
                          form.setValue(
                            "qualityCertificatesRequired",
                            current.filter((c) => c !== cert)
                          )
                        }
                      }}
                    />
                    <Label htmlFor={cert} className="text-sm font-normal cursor-pointer">
                      {cert}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="targetDate">Target Delivery Date</Label>
                <Input
                  id="targetDate"
                  type="date"
                  {...form.register("targetDate")}
                  className="mt-1"
                />
                {form.formState.errors.targetDate && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.targetDate.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="deliveryPort">Delivery Port/Location</Label>
                <Input
                  id="deliveryPort"
                  {...form.register("deliveryPort")}
                  placeholder="e.g., Shanghai Port"
                  className="mt-1"
                />
                {form.formState.errors.deliveryPort && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.deliveryPort.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  {...form.register("companyName")}
                  className="mt-1"
                />
                {form.formState.errors.companyName && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  {...form.register("contactPerson")}
                  className="mt-1"
                />
                {form.formState.errors.contactPerson && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.contactPerson.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="mt-1"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  {...form.register("phone")}
                  placeholder="+1234567890"
                  className="mt-1"
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
                <Input
                  id="whatsapp"
                  {...form.register("whatsapp")}
                  placeholder="+1234567890"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  {...form.register("country")}
                  className="mt-1"
                />
                {form.formState.errors.country && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                {...form.register("message")}
                placeholder="Any additional information or requirements..."
                className="mt-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={form.watch("newsletter")}
                onCheckedChange={(checked) => form.setValue("newsletter", !!checked)}
              />
              <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
                Subscribe to our newsletter for market updates and special offers
              </Label>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </Button>

        {currentStep < 3 ? (
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        )}
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Your inquiry has been successfully submitted. Our mineral experts will review your requirements and contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 p-4 bg-copper-50 rounded-lg">
            <p className="text-sm text-center">
              <span className="font-medium">Reference Number:</span>
              <br />
              <span className="font-mono text-copper-700">{leadId}</span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <Button onClick={() => setShowSuccess(false)} className="btn-mineral">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  )
}