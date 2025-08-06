export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Go2Mineral",
    description: "Leading Turkish mineral exporter specializing in boron, feldspar, pumice, bentonite & magnesite",
    url: "https://go2mineral.com",
    logo: "https://go2mineral.com/images/go2mineral-logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-555-555-5555",
      contactType: "sales",
      availableLanguage: ["English", "Turkish", "Arabic", "Chinese", "German", "Russian"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "Istanbul",
    },
    sameAs: [
      "https://www.linkedin.com/company/go2mineral",
      "https://twitter.com/go2mineral",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Go2Mineral",
    url: "https://go2mineral.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://go2mineral.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turkish Minerals",
    description: "Premium quality minerals exported from Turkey",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Boron",
        description: "High-grade borate minerals for glass, ceramics, and agriculture",
        category: "Industrial Minerals",
        manufacturer: {
          "@type": "Organization",
          name: "Go2Mineral",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          offeredBy: {
            "@type": "Organization",
            name: "Go2Mineral",
          },
        },
      },
      {
        "@type": "Product",
        position: 2,
        name: "Feldspar",
        description: "Premium sodium and potassium feldspar for ceramics and glass",
        category: "Industrial Minerals",
        manufacturer: {
          "@type": "Organization",
          name: "Go2Mineral",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          offeredBy: {
            "@type": "Organization",
            name: "Go2Mineral",
          },
        },
      },
      {
        "@type": "Product",
        position: 3,
        name: "Pumice & Perlite",
        description: "Lightweight volcanic minerals for construction and filtration",
        category: "Industrial Minerals",
        manufacturer: {
          "@type": "Organization",
          name: "Go2Mineral",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          offeredBy: {
            "@type": "Organization",
            name: "Go2Mineral",
          },
        },
      },
      {
        "@type": "Product",
        position: 4,
        name: "Bentonite",
        description: "High swelling bentonite for drilling, foundry, and civil works",
        category: "Industrial Minerals",
        manufacturer: {
          "@type": "Organization",
          name: "Go2Mineral",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          offeredBy: {
            "@type": "Organization",
            name: "Go2Mineral",
          },
        },
      },
      {
        "@type": "Product",
        position: 5,
        name: "Magnesite",
        description: "Refractory grade magnesite for steel and cement industries",
        category: "Industrial Minerals",
        manufacturer: {
          "@type": "Organization",
          name: "Go2Mineral",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          offeredBy: {
            "@type": "Organization",
            name: "Go2Mineral",
          },
        },
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What minerals do you export from Turkey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in exporting 5 key minerals: Boron (35-48% B2O3), Feldspar (K2O: 11-13%), Pumice & Perlite (expanded and raw forms), Bentonite (swelling index: 24-30 ml/2g), and Magnesite (MgO: 45-47%). All minerals are sourced directly from Turkey's richest geological deposits.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum order quantity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our minimum order quantity is 20 MT (Metric Tons) for most minerals. For specific minerals or custom specifications, minimum quantities may vary. Contact us for details on your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries do you ship to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We ship globally to all major ports. Our primary markets include Europe, Asia, Middle East, Africa, and the Americas. We have extensive experience with international logistics and customs procedures for mineral exports.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}