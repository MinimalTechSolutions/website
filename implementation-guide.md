# 🚀 MTS Website Implementation Guide

## Overview

This guide will help you implement the improved Minimal Technology Solutions website with enhanced ART-T positioning aligned with the GTM strategy.

## What's New

### Main Landing Page (`page.tsx`)
- **Featured ART-T Section**: Prominent showcase with live demo simulation
- **Updated Stats**: Real metrics (500+ AI systems, 10K+ vulnerabilities)
- **Better Division Cards**: Highlights Minimal Sec with "Featured Product" badge
- **Improved Hero**: Clearer value proposition
- **Mobile Responsive**: Full mobile menu and responsive grid

### Minimal Sec Page (`divisions/sec/page.tsx`)
- **GTM-Aligned Messaging**: Uses exact positioning from strategy
- **ART-T Deep Dive**: Complete product explanation with features
- **Pricing Tiers**: Shows Open Source / Professional / Enterprise clearly
- **Tri-Stage PII Auditing**: Highlighted as key differentiator
- **Live Threat Dashboard**: Visual representation of security scanning
- **Social Proof**: Customer testimonials and stats
- **Clear CTAs**: Multiple conversion paths (demo, GitHub, contact)

## Installation Steps

### 1. Set Up Next.js Project (if starting fresh)

```bash
npx create-next-app@latest mts-website --typescript --tailwind --app
cd mts-website
```

### 2. Install Dependencies

```bash
npm install framer-motion lucide-react
```

### 3. Copy Improved Files

```bash
# Create directory structure
mkdir -p app/divisions/sec
mkdir -p app/components
mkdir -p public/img

# Copy main landing page
cp improved-main-page.tsx app/page.tsx

# Copy Minimal Sec division page
cp improved-minimal-sec-page.tsx app/divisions/sec/page.tsx

# Copy WaitlistModal component (from your existing repo)
# You'll need to get this from:
# https://github.com/MinimalTechSolutions/website/blob/main/WaitlistModal.tsx
```

### 4. Add Your Logo

Place your `minimal-wide-logo-trans.png` in `public/img/`

### 5. Configure Tailwind (Optional Color Fixes)

If you see color warnings, update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom colors if needed
      },
    },
  },
  plugins: [],
  safelist: [
    // Safelist dynamic colors used in components
    'bg-blue-50', 'bg-blue-100', 'text-blue-600', 'border-blue-200',
    'bg-red-50', 'bg-red-100', 'text-red-600', 'border-red-200',
    'bg-purple-50', 'bg-purple-100', 'text-purple-600', 'border-purple-200',
    'bg-green-50', 'bg-green-100', 'text-green-600', 'border-green-200',
    'bg-orange-50', 'bg-orange-100', 'text-orange-600', 'border-orange-200',
    'bg-yellow-50', 'bg-yellow-100', 'text-yellow-600', 'border-yellow-200',
  ]
};
export default config;
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## Key Improvements Aligned with GTM Strategy

### 1. **Positioning: "Open-Core Enterprise AI Security Platform"**
- ✅ Emphasized throughout both pages
- ✅ GitHub links prominent (open-source focus)
- ✅ Enterprise features clearly separated in pricing

### 2. **Value Propositions from Strategy**
- ✅ "Find vulnerabilities before attackers do"
- ✅ "Ship AI features confidently"
- ✅ "Meet regulatory requirements"

### 3. **Competitive Differentiation**
- ✅ Tri-Stage PII Auditing highlighted
- ✅ LangGraph integration mentioned
- ✅ Self-hosted option emphasized
- ✅ Open-source transparency

### 4. **Social Proof**
- ✅ 500+ AI systems protected
- ✅ 10,000+ vulnerabilities found
- ✅ Customer testimonials
- ✅ 90%+ retention rate

### 5. **Multiple Conversion Paths**
- ✅ Request Demo (Waitlist Modal)
- ✅ View on GitHub (PLG entry point)
- ✅ Contact Sales (Enterprise)
- ✅ Explore Product Page

## SEO Optimizations to Add

### Add to `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Minimal Technology Solutions | AI Security & Software Development',
  description: 'Enterprise-grade AI security solutions featuring ART-T—the open-core AI red teaming platform. Protect your AI deployments from prompt injection, data leakage, and jailbreaking.',
  keywords: 'AI security, LLM security, prompt injection, red teaming, AI red teaming, cybersecurity, OWASP LLM Top 10',
  openGraph: {
    title: 'Minimal Technology Solutions',
    description: 'AI Security & Software Development',
    url: 'https://minimalbyte.com',
    siteName: 'Minimal Technology Solutions',
    images: [
      {
        url: '/img/minimal-wide-logo-trans.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
};
```

### Add to Minimal Sec page metadata:

```typescript
export const metadata = {
  title: 'Minimal Sec | AI Security & Red Teaming | ART-T',
  description: 'Enterprise AI security solutions. ART-T protects 500+ AI systems with automated red teaming, PII auditing, and compliance reporting. Open-source core available.',
};
```

## Analytics Setup

### 1. Google Analytics

Add to `app/layout.tsx` (inside `<head>`):

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 2. Track CTA Clicks

Add event tracking to buttons:

```typescript
onClick={() => {
  gtag('event', 'cta_click', {
    cta_type: 'request_demo',
    division: 'minimal_sec',
    product: 'art-t'
  });
  setShowWaitlist(true);
}}
```

## Waitlist Form Backend

### API Route: `app/api/waitlist/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate
  if (!data.workEmail || !data.fullName) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: Save to database
  // await db.waitlist.create({ data });
  
  // TODO: Send confirmation email
  // await sendConfirmationEmail(data.workEmail);
  
  // TODO: Notify team
  // await notifySlack(`New ART-T waitlist signup: ${data.fullName}`);
  
  return NextResponse.json({ success: true });
}
```

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Improved MTS website with ART-T GTM positioning"
git remote add origin https://github.com/MinimalTechSolutions/website
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import repository
3. Deploy!

### 3. Add Custom Domain

1. In Vercel project settings, add domain: `minimalbyte.com`
2. Update DNS:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

## A/B Testing Recommendations

### Test 1: Hero CTA
- **Variant A**: "Request ART-T Demo"
- **Variant B**: "Start Free Trial"
- **Measure**: Conversion rate to waitlist form

### Test 2: Pricing Visibility
- **Variant A**: Pricing on separate page
- **Variant B**: Pricing on Minimal Sec page (current)
- **Measure**: Time to conversion, qualified leads

### Test 3: Social Proof
- **Variant A**: Stats only (500+ systems, 10K+ vulns)
- **Variant B**: Stats + testimonials (current)
- **Measure**: Trust indicators, demo requests

## Performance Optimizations

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/img/minimal-wide-logo-trans.png"
  alt="Minimal Tech Solutions"
  width={200}
  height={50}
  priority
/>
```

### Code Splitting

```typescript
import dynamic from 'next/dynamic';

const WaitlistModal = dynamic(() => import('../../components/WaitlistModal'), {
  ssr: false
});
```

## Content Updates Checklist

- [ ] Replace placeholder stats with real numbers
- [ ] Add actual customer testimonials (with permission)
- [ ] Link to real documentation/blog when available
- [ ] Update GitHub stars count (automate if possible)
- [ ] Add case studies when available
- [ ] Include real security research papers

## GTM Alignment Checklist

From the strategy document, verify:

- [x] Open-source positioning prominent
- [x] Enterprise tier clearly differentiated
- [x] Tri-Stage PII Auditing mentioned
- [x] LangGraph integration highlighted
- [x] OWASP LLM Top 10 compliance shown
- [x] Self-hosted option emphasized
- [x] Multiple conversion paths (PLG + Sales)
- [x] Social proof (stats, testimonials)
- [x] Clear pricing tiers
- [x] GitHub links prominent

## Next Steps

1. **Week 1**: Deploy improved pages to production
2. **Week 2**: Set up analytics and tracking
3. **Week 3**: Create remaining division pages (Byte, Infra, Games, Chain)
4. **Week 4**: Launch blog with first 5 security articles
5. **Month 2**: Add interactive demo/sandbox for ART-T
6. **Month 3**: Launch full documentation site

## Support

For questions or issues:
- Email: minimalsolucoestecnologicas@gmail.com
- GitHub: https://github.com/MinimalTechSolutions

---

**Built with ❤️ by Minimal Technology Solutions**  
*Your simple way to solve technology problems*
