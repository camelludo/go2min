## Custom Headless CMS Implementation Guide for Turkish Mineral Export Platform

Here's the complete technical specification to build a custom headless CMS that complements your landing page blueprint. This guide provides full context for Claude Code to build the entire system.

---

**"Build a complete headless CMS for a Turkish mineral export business using modern React/Next.js frontend with Strapi backend. This system manages 5 mineral products (boron, feldspar, pumice/perlite, bentonite, magnesite) and integrates with the SEO-optimized landing page blueprint already designed.

## 1. TECHNICAL ARCHITECTURE

### Backend: Strapi v4
```
- PostgreSQL database (production-ready)
- Cloudinary for image management
- SendGrid for email notifications
- Redis for caching
- JWT authentication
```

### Frontend: Next.js 14
```
- TypeScript for type safety
- Tailwind CSS for styling
- React Query for data fetching
- Framer Motion for animations
- Next-Auth for admin authentication
```

### Infrastructure
```
- Backend: Railway or Render ($20/month)
- Frontend: Vercel (free tier)
- Database: Supabase PostgreSQL
- CDN: Cloudflare
- File Storage: Cloudinary
```

## 2. DATABASE SCHEMA

### Minerals Collection
```javascript
{
  id: UUID,
  name: String (required),
  slug: String (unique, auto-generated),
  hsCode: String,
  category: Enum ['metallic', 'industrial', 'specialty'],
  
  // Multilingual fields
  description: {
    en: Text,
    tr: Text,
    ar: Text,
    zh: Text,
    de: Text,
    ru: Text
  },
  
  // Technical specifications
  specifications: JSON {
    chemicalComposition: Object,
    physicalProperties: Object,
    gradeVariations: Array,
    testMethods: Array
  },
  
  // Pricing tiers
  pricingTiers: [
    {
      minQuantity: Number,
      maxQuantity: Number,
      pricePerTon: Number,
      currency: String,
      validUntil: Date
    }
  ],
  
  // Media
  images: Relation (multiple) to Media,
  technicalDataSheet: Relation to Media,
  safetydataSheet: Relation to Media,
  
  // SEO
  metaTitle: String,
  metaDescription: String,
  keywords: Array,
  
  // Stock & Availability
  stockStatus: Enum ['in-stock', 'limited', 'pre-order'],
  minimumOrder: Number,
  leadTime: String,
  
  // Applications
  applications: Relation (multiple) to Applications,
  
  published: Boolean,
  featuredOrder: Number,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Leads Collection
```javascript
{
  id: UUID,
  // Contact Information
  companyName: String (required),
  contactPerson: String (required),
  email: Email (required),
  phone: String,
  whatsapp: String,
  country: String,
  
  // Inquiry Details
  interestedMinerals: Relation (multiple) to Minerals,
  quantity: Number,
  quantityUnit: Enum ['MT', 'kg'],
  deliveryPort: String,
  targetDate: Date,
  
  // Technical Requirements
  specifications: JSON,
  applicationUse: Text,
  qualityCertificatesRequired: Array,
  
  // Lead Scoring
  leadScore: Number (auto-calculated),
  scoreFactors: JSON {
    companySize: Number,
    quantityScore: Number,
    urgencyScore: Number,
    engagementScore: Number
  },
  
  // Status Tracking
  status: Enum ['new', 'contacted', 'quoted', 'negotiating', 'won', 'lost'],
  assignedTo: Relation to AdminUsers,
  
  // Communication History
  communications: [
    {
      type: Enum ['email', 'phone', 'whatsapp', 'meeting'],
      date: DateTime,
      notes: Text,
      nextAction: String
    }
  ],
  
  // Source Tracking
  source: String,
  utm_campaign: String,
  utm_medium: String,
  utm_source: String,
  
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Quotes Collection
```javascript
{
  id: UUID,
  quoteNumber: String (auto-generated),
  lead: Relation to Leads,
  
  // Quote Details
  items: [
    {
      mineral: Relation to Minerals,
      quantity: Number,
      unitPrice: Number,
      totalPrice: Number,
      specifications: JSON
    }
  ],
  
  // Commercial Terms
  currency: String,
  incoterm: Enum ['FOB', 'CIF', 'CFR', 'EXW'],
  paymentTerms: String,
  validityDays: Number,
  deliveryTime: String,
  
  // Pricing
  subtotal: Number,
  shipping: Number,
  totalAmount: Number,
  
  // Status
  status: Enum ['draft', 'sent', 'viewed', 'accepted', 'rejected', 'expired'],
  sentDate: DateTime,
  viewedDate: DateTime,
  
  // Documents
  pdfUrl: String,
  
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Applications Collection
```javascript
{
  id: UUID,
  name: String,
  slug: String,
  industry: String,
  description: Text,
  minerals: Relation (multiple) to Minerals,
  icon: String,
  order: Number
}
```

### Admin Users Collection
```javascript
{
  id: UUID,
  email: Email,
  password: String (hashed),
  name: String,
  role: Enum ['admin', 'sales', 'viewer'],
  permissions: JSON,
  lastLogin: DateTime,
  active: Boolean
}
```

## 3. API ENDPOINTS

### Public API Routes
```
GET /api/minerals - List all minerals with filtering
GET /api/minerals/:slug - Get mineral details
GET /api/applications - List applications
POST /api/leads - Submit inquiry form
GET /api/specifications/:mineralId - Download spec sheet
```

### Admin API Routes (Protected)
```
// Minerals Management
POST /api/admin/minerals
PUT /api/admin/minerals/:id
DELETE /api/admin/minerals/:id
POST /api/admin/minerals/:id/images

// Leads Management
GET /api/admin/leads
GET /api/admin/leads/:id
PUT /api/admin/leads/:id
POST /api/admin/leads/:id/communications

// Quotes Management
POST /api/admin/quotes
GET /api/admin/quotes
PUT /api/admin/quotes/:id
POST /api/admin/quotes/:id/send

// Analytics
GET /api/admin/analytics/overview
GET /api/admin/analytics/conversions
GET /api/admin/analytics/minerals
```

## 4. ADMIN DASHBOARD FEATURES

### Dashboard Overview Page
```jsx
// Components needed:
- MetricsCards (Total Leads, Active Quotes, Conversion Rate, Revenue)
- LeadsChart (7/30/90 day views)
- TopMineralsTable
- RecentActivityFeed
- ConversionFunnel visualization
```

### Minerals Management
```jsx
// Features:
- DataTable with sorting/filtering
- Bulk edit capabilities
- Image drag-and-drop upload
- Rich text editor for descriptions
- Specification builder (key-value pairs)
- Pricing tier management
- SEO preview
- Publish/Unpublish toggle
```

### Lead Management
```jsx
// Features:
- Kanban board view by status
- Lead scoring visualization
- Communication timeline
- Quick actions (Email, WhatsApp, Create Quote)
- Bulk assignment
- Export to CSV
- Advanced filtering
- Lead source analytics
```

### Quote Builder
```jsx
// Features:
- Drag minerals from catalog
- Auto-calculate pricing based on quantity
- Terms & conditions templates
- PDF preview
- Email template customization
- Quote tracking (sent, viewed, accepted)
- Version history
- Clone quote functionality
```

### Analytics Dashboard
```jsx
// Visualizations:
- Conversion funnel (Visit → Lead → Quote → Sale)
- Geographic heat map of inquiries
- Mineral popularity trends
- Lead source ROI
- Average deal size by mineral
- Quote acceptance rate
- Time to close metrics
```

## 5. FRONTEND LANDING PAGE INTEGRATION

### Dynamic Content Loading
```typescript
// Homepage hero section
const { data: featuredMinerals } = useQuery('featured-minerals', 
  () => api.getMinerals({ featured: true, limit: 5 })
);

// Mineral catalog page
const { data: minerals, isLoading } = useQuery(['minerals', filters], 
  () => api.getMinerals(filters)
);

// Technical specs modal
const { data: specs } = useQuery(['specs', mineralId], 
  () => api.getSpecifications(mineralId),
  { enabled: !!mineralId }
);
```

### Form Handling
```typescript
// Multi-step inquiry form
const { mutate: submitInquiry } = useMutation(
  (data: InquiryData) => api.submitLead(data),
  {
    onSuccess: () => {
      // Track conversion
      gtag('event', 'lead_submitted', {
        mineral_types: data.minerals,
        quantity: data.quantity
      });
      // Show success message
      // Send to WhatsApp if opted
    }
  }
);
```

### SEO Components
```jsx
// Dynamic meta tags
<MineralSEO 
  mineral={mineral}
  locale={locale}
  canonicalUrl={`${baseUrl}/minerals/${mineral.slug}`}
/>

// Structured data
<MineralStructuredData 
  mineral={mineral}
  organization={orgData}
/>
```

## 6. AUTOMATION WORKFLOWS

### Lead Scoring Algorithm
```javascript
function calculateLeadScore(lead) {
  let score = 0;
  
  // Company size (0-25 points)
  if (lead.companySize > 500) score += 25;
  else if (lead.companySize > 100) score += 15;
  else score += 5;
  
  // Quantity (0-30 points)
  if (lead.quantity > 1000) score += 30;
  else if (lead.quantity > 100) score += 20;
  else score += 10;
  
  // Urgency (0-20 points)
  const daysUntilNeeded = daysBetween(now, lead.targetDate);
  if (daysUntilNeeded < 30) score += 20;
  else if (daysUntilNeeded < 60) score += 10;
  
  // Engagement (0-25 points)
  score += lead.specificationsProvided ? 10 : 0;
  score += lead.documentsDownloaded * 5;
  score += lead.emailOpens * 2;
  
  return score;
}
```

### Email Automation
```javascript
// Triggers:
- New lead → Immediate acknowledgment
- Quote sent → Follow up after 3 days if not viewed
- Quote viewed → Follow up after 7 days if not responded
- Monthly newsletter with market updates
```

### WhatsApp Integration
```javascript
// Auto-responses:
- Lead submission confirmation
- Quote ready notification
- Shipping updates
- Document delivery (spec sheets)
```

## 7. SECURITY & PERFORMANCE

### Security Measures
```
- Rate limiting on API endpoints
- CORS configuration for specific domains
- Input sanitization
- SQL injection prevention
- JWT token rotation
- Admin action audit logs
- GDPR compliance tools
```

### Performance Optimization
```
- Redis caching for mineral data
- Image optimization pipeline
- Lazy loading for images
- API response pagination
- Database query optimization
- Static page generation for SEO pages
- CDN for all static assets
```

## 8. DEPLOYMENT INSTRUCTIONS

### Environment Variables
```env
# Backend
DATABASE_URL=postgresql://...
STRAPI_ADMIN_JWT_SECRET=...
CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
SENDGRID_API_KEY=...
REDIS_URL=...

# Frontend  
NEXT_PUBLIC_API_URL=...
NEXT_PUBLIC_GA_ID=...
NEXTAUTH_SECRET=...
NEXT_PUBLIC_WHATSAPP_NUMBER=...
```

### Docker Configuration
```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]

# Frontend Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
```

### CI/CD Pipeline
```yaml
# GitHub Actions workflow
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy Backend to Railway
        run: railway up
      - name: Deploy Frontend to Vercel
        run: vercel --prod
```

## 9. TESTING REQUIREMENTS

### Unit Tests
- Mineral data validation
- Lead scoring algorithm
- Price calculation logic
- API endpoint responses

### E2E Tests
- Complete inquiry flow
- Admin login and CRUD operations
- Multi-language switching
- Mobile responsiveness

### Performance Benchmarks
- Page load time < 3 seconds
- API response time < 200ms
- Lead form submission < 1 second
- Admin dashboard load < 2 seconds

## 10. LAUNCH CHECKLIST

### Pre-Launch
- [ ] Load initial mineral data
- [ ] Configure email templates
- [ ] Set up analytics tracking
- [ ] Test payment calculations
- [ ] Configure CDN
- [ ] Set up monitoring alerts
- [ ] Create admin accounts
- [ ] Backup procedures

### Post-Launch  
- [ ] Monitor error logs
- [ ] Track conversion metrics
- [ ] Optimize slow queries
- [ ] A/B test improvements
- [ ] Gather user feedback

Build this system with TypeScript throughout, implement comprehensive error handling, and ensure all components are fully responsive. The admin dashboard should be intuitive enough for non-technical users while providing powerful features for managing the mineral export business efficiently."**

---

This specification provides everything needed to build a complete custom headless CMS that perfectly integrates with your landing page blueprint. You can hand this directly to Claude Code or any developer to build the entire system.