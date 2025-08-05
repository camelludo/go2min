# Go2Mineral - Turkish Mineral Export Platform

A modern, SEO-optimized landing page and CMS for Turkish mineral export business, specializing in boron, feldspar, pumice/perlite, bentonite, and magnesite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js 14 app directory
│   │   ├── minerals/     # Mineral listing and detail pages
│   │   ├── layout.tsx    # Root layout with nav and footer
│   │   └── page.tsx      # Homepage
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Navigation, Footer
│   │   ├── sections/    # Hero, MineralShowcase, CTA
│   │   └── forms/       # Lead capture forms (coming soon)
│   └── lib/             # Utilities and helpers
├── public/              # Static assets
└── package.json
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 📱 Features Implemented

### Phase 1 - MVP (Current)
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with trust indicators
- ✅ Mineral showcase grid
- ✅ Individual mineral detail pages
- ✅ Call-to-action sections
- ✅ Footer with company info
- ✅ SEO-optimized metadata
- ✅ Mobile-responsive design

### Coming Soon
- 🔄 Multi-step lead capture form
- 🔄 API integration for lead storage
- 🔄 WhatsApp Business integration
- 🔄 Multi-language support (6 languages)
- 🔄 Strapi CMS backend
- 🔄 Admin dashboard

## 🌐 Pages

- `/` - Homepage with hero, mineral showcase, and CTA
- `/minerals` - All minerals listing
- `/minerals/[slug]` - Individual mineral details (boron, feldspar, etc.)

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css` to match your brand:

```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other variables */
}
```

### Content
Currently using placeholder content. Update the static data in:
- `src/components/sections/mineral-showcase.tsx` - Mineral cards
- `src/app/minerals/[slug]/page.tsx` - Mineral details

## 🚢 Deployment

The app is ready for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📈 Performance

- Lighthouse Score Target: 90+
- Page Load: < 3 seconds
- Mobile First: All components optimized for mobile

## 🔗 Environment Variables

Create a `.env.local` file:

```env
# Coming soon - for API integration
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_WHATSAPP_NUMBER=905555555555
```

## 📞 Support

For questions about the codebase, refer to the project documentation or create an issue.

---

Built with ❤️ for Go2Mineral

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).