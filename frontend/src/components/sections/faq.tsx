"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    category: "Product & Quality",
    questions: [
      {
        question: "What minerals do you export from Turkey?",
        answer: "We specialize in exporting 5 key minerals: Boron (35-48% B2O3), Feldspar (K2O: 11-13%), Pumice & Perlite (expanded and raw forms), Bentonite (swelling index: 24-30 ml/2g), and Magnesite (MgO: 45-47%). All minerals are sourced directly from Turkey's richest geological deposits.",
      },
      {
        question: "Are your minerals ISO certified?",
        answer: "Yes, all our minerals are ISO 9001:2015 certified. We provide comprehensive quality certificates including SGS analysis, chemical analysis reports, mineral content certificates, and origin certificates with every shipment.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "Our minimum order quantity is 20 MT (Metric Tons) for most minerals. For specific minerals or custom specifications, minimum quantities may vary. Contact us for details on your specific requirements.",
      },
      {
        question: "Can you provide custom mineral specifications?",
        answer: "Absolutely! We can customize particle size, purity levels, and packaging according to your specific industrial requirements. Our technical team will work with you to ensure the minerals meet your exact specifications.",
      },
    ],
  },
  {
    category: "Shipping & Logistics",
    questions: [
      {
        question: "Which countries do you ship to?",
        answer: "We ship globally to all major ports. Our primary markets include Europe, Asia, Middle East, Africa, and the Americas. We have extensive experience with international logistics and customs procedures for mineral exports.",
      },
      {
        question: "What are your shipping terms?",
        answer: "We offer flexible shipping terms including FOB (Free on Board), CIF (Cost, Insurance, and Freight), and CFR (Cost and Freight). We work with reliable shipping partners to ensure timely delivery to your specified port.",
      },
      {
        question: "How long does delivery take?",
        answer: "Delivery times vary by destination: Europe (7-15 days), Asia (15-25 days), Americas (20-30 days), Africa (15-25 days). These are approximate transit times from Turkish ports. We provide real-time tracking for all shipments.",
      },
      {
        question: "Do you handle customs documentation?",
        answer: "Yes, we provide all necessary export documentation including commercial invoices, packing lists, bills of lading, certificates of origin, and quality certificates. Our experienced team ensures smooth customs clearance.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How do you determine pricing?",
        answer: "Pricing is based on mineral type, quantity, specifications, packaging requirements, and current market conditions. We offer competitive pricing with volume discounts. Contact us for a detailed quote based on your specific needs.",
      },
      {
        question: "What payment terms do you offer?",
        answer: "We accept Letter of Credit (L/C), Telegraphic Transfer (T/T), and for established customers, we offer 30-day payment terms. A 30% advance payment is typically required for new customers, with the balance due upon shipping.",
      },
      {
        question: "Do you offer samples?",
        answer: "Yes, we provide free samples (up to 1kg) for serious buyers. You only need to cover the shipping costs. Samples help you verify quality and suitability for your specific application before placing a bulk order.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "Do you provide technical support for mineral applications?",
        answer: "Yes, our technical team provides comprehensive support including application guidance, formulation assistance, and troubleshooting. We have extensive knowledge of how our minerals perform in various industrial applications.",
      },
      {
        question: "Can you provide Material Safety Data Sheets (MSDS)?",
        answer: "Absolutely! We provide detailed MSDS/SDS for all our minerals in multiple languages. These documents include handling instructions, safety precautions, and regulatory compliance information.",
      },
      {
        question: "How do you ensure consistent quality?",
        answer: "We maintain strict quality control through regular testing at our ISO-certified laboratories, batch tracking, and continuous monitoring. Each shipment comes with detailed analysis reports ensuring consistency.",
      },
    ],
  },
]

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-100/60 border border-copper-200/60 mb-6">
              <HelpCircle className="h-4 w-4 text-copper-600" />
              <span className="text-sm font-semibold text-copper-700 tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Everything You Need to
              <span className="block text-gradient-copper">Know About Turkish Minerals</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Find answers to common questions about our products, shipping, and services
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div
                key={category.category}
                className={`animate-fade-in-up ${
                  categoryIndex === 0 ? "animation-delay-0" :
                  categoryIndex === 1 ? "animation-delay-200" :
                  categoryIndex === 2 ? "animation-delay-400" :
                  "animation-delay-600"
                }`}
              >
                <div className="mb-4">
                  <Badge variant="mineral" className="text-sm">
                    {category.category}
                  </Badge>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border-b border-copper-100"
                    >
                      <AccordionTrigger className="text-left hover:text-copper-700 py-5">
                        <span className="text-base font-medium pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-800">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-copper-50 to-stone-50 border border-copper-100">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our mineral experts are here to help with your specific requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/905555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => {
                    document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-copper-600 text-copper-600 font-medium hover:bg-copper-50 transition-colors"
                >
                  Get Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}