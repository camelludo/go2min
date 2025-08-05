import { z } from "zod"

export const leadFormSchema = z.object({
  // Step 1: Product Selection
  interestedMinerals: z.array(z.string()).min(1, "Please select at least one mineral"),
  quantity: z.number().min(20, "Minimum order quantity is 20 MT"),
  quantityUnit: z.enum(["MT", "kg"]),
  
  // Step 2: Technical Requirements
  applicationUse: z.string().min(10, "Please describe your application in at least 10 characters"),
  specifications: z.string().optional(),
  qualityCertificatesRequired: z.array(z.string()).optional(),
  targetDate: z.string().min(1, "Please select a target date"),
  deliveryPort: z.string().min(2, "Please specify delivery port"),
  
  // Step 3: Contact Information
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  whatsapp: z.string().optional(),
  country: z.string().min(2, "Please select your country"),
  
  // Marketing
  source: z.string().optional(),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

// Step schemas for validation
export const step1Schema = leadFormSchema.pick({
  interestedMinerals: true,
  quantity: true,
  quantityUnit: true,
})

export const step2Schema = leadFormSchema.pick({
  applicationUse: true,
  specifications: true,
  qualityCertificatesRequired: true,
  targetDate: true,
  deliveryPort: true,
})

export const step3Schema = leadFormSchema.pick({
  companyName: true,
  contactPerson: true,
  email: true,
  phone: true,
  whatsapp: true,
  country: true,
  source: true,
  message: true,
  newsletter: true,
})