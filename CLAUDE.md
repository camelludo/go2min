# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turkish mineral export business platform consisting of two main components:
1. A SEO-optimized landing page for lead generation
2. A headless CMS (Strapi + Next.js) for managing minerals, leads, and quotes

The platform specializes in exporting 5 mineral products: boron, feldspar, pumice/perlite, bentonite, and magnesite.

## Key Commands

### Initial Setup
```bash
# Backend (Strapi)
cd backend
npm install
npm run develop  # Development server on port 1337

# Frontend (Next.js)
cd frontend
npm install
npm run dev      # Development server on port 3000
```

### Development Commands
```bash
# Backend
npm run build    # Build Strapi admin
npm run start    # Production server
npm run strapi   # Strapi CLI commands

# Frontend
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
npm run type-check  # TypeScript validation (not configured yet)
```

### Database Commands
```bash
# Run migrations
npm run strapi migration:run

# Generate types from Strapi
npm run generate-types
```

## Current State (Day 2)

### Completed Features
1. **Landing Page Structure**
   - Hero section with Turkish mineral theme
   - Mineral showcase with 5 products
   - Individual mineral pages with dynamic routing
   - Responsive navigation with mobile menu
   - Footer with contact information

2. **Lead Capture System**
   - Multi-step form (3 steps) with validation
   - Form progress indicator
   - Success dialog with reference number
   - API endpoint for lead submission
   - Analytics tracking for form events

3. **UI Components (shadcn/ui)**
   - Button, Card, Input, Label
   - Select, Textarea, Checkbox, Progress
   - Dialog, Toast, Accordion, Badge, Tabs
   - Custom Turkish mineral color palette

4. **Visual Design**
   - Geological-themed design system
   - Custom animations (crystallize, mineral-shine, geological-float)
   - Turkish mineral color palette (copper, stone, mineral colors)
   - Placeholder SVG images for all minerals

### Pending Tasks
1. **Phase 1 Remaining**
   - Mobile optimization testing
   - Schema markup implementation
   - Environment variables setup
   - Vercel deployment
   - Email notifications (actual implementation)

2. **Phase 2 (CMS Backend)**
   - Strapi setup and configuration
   - Content models creation
   - API integration with frontend

### File Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts    # Lead submission API
│   │   ├── minerals/[slug]/       # Dynamic mineral pages
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── forms/                # Lead capture form
│   │   ├── layout/               # Navigation, Footer
│   │   ├── sections/             # Hero, CTA, Showcase
│   │   └── ui/                   # Reusable UI components
│   └── lib/
│       ├── analytics.ts          # Analytics tracking
│       └── validations/          # Form schemas
└── public/images/                # Placeholder images
```

### Testing
```bash
# Frontend tests
npm run test          # Run all tests
npm run test:watch    # Watch mode
npm run test:e2e      # E2E tests with Playwright

# Backend tests
npm run test:unit     # Unit tests
npm run test:integration  # Integration tests
```

## Architecture Overview

### Tech Stack
- **Backend**: Strapi v4 with PostgreSQL, Redis caching, Cloudinary for images
- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, shadcn/ui components, React Query, Framer Motion
- **Authentication**: JWT for API, NextAuth for admin dashboard
- **Email**: SendGrid for transactional emails
- **Analytics**: Google Analytics 4 with custom B2B tracking

### Core Data Models
1. **Minerals**: Multi-language product data with technical specs, pricing tiers, and media
2. **Leads**: Contact info, inquiry details, lead scoring, and communication history
3. **Quotes**: Commercial proposals with items, pricing, and status tracking
4. **Applications**: Industry use cases linked to minerals
5. **Admin Users**: Role-based access for sales team

### API Structure
- Public API: `/api/minerals`, `/api/leads`, `/api/specifications`
- Admin API: `/api/admin/*` (protected routes for CRUD operations)
- Analytics API: `/api/admin/analytics/*` for dashboard metrics

### Key Business Logic
1. **Lead Scoring Algorithm**: Calculates lead quality based on company size, quantity, urgency, and engagement
2. **Multi-step Forms**: Progressive profiling to increase conversion rates
3. **Quote Builder**: Drag-and-drop interface with auto-pricing calculations
4. **WhatsApp Integration**: Automated responses and document delivery

### SEO Implementation
- Schema markup for Organization, Product, and Service
- Hreflang tags for 6 languages (EN, TR, AR, ZH, DE, RU)
- Dynamic meta tags and structured data
- URL structure: `/minerals/[category]/[product]/`

### Performance Targets
- Page load: < 3 seconds
- API response: < 200ms
- Form submission: < 1 second
- Conversion rate: 4-8% for qualified traffic