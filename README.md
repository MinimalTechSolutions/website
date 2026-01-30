# Minimal Technology Solutions - Complete Website

The official website for **Minimal Technology Solutions (MTS)** - showcasing all five divisions and their specialized services.

## 🏢 Organization Structure

**Minimal Technology Solutions** is a cutting-edge technology provider with five specialized divisions:

1. **Minimal Byte** - SaaS & Software Development
2. **Minimal Sec** - Cybersecurity Consulting (featuring ART-T)
3. **Minimal Infra** - Infrastructure as a Service
4. **Minimal Games** - Game Development
5. **Minimal Chain** - Decentralized Autonomous Organizations

## 🎯 What This Repository Contains

### Main Landing Page (`page.tsx`)
- Hero section introducing MTS
- All 5 divisions showcased in clean grid layout
- Company stats and mission statement
- GitHub integration
- Responsive navigation

### Division Pages

#### Minimal Sec (`divisions/sec/page.tsx`)
- Overview of cybersecurity services
- ART-T flagship product highlight
- Service offerings: Security Audits, Penetration Testing, Incident Response, Web3 Security
- Stats and testimonials
- Direct link to detailed ART-T page

#### ART-T Product Page (`divisions/sec/art-t/page.tsx`)
- Full enterprise security product showcase
- Live threat monitoring dashboard
- Animated risk score visualization
- Real-time threat feed simulation
- Research citations (arXiv papers, MCP Protocol)
- Waitlist modal integration

### Components
- `WaitlistModal.tsx` - Reusable form with business email validation

## 📁 Project Structure

```
mts-complete/
├── page.tsx                          # Main landing page
├── components/
│   └── WaitlistModal.tsx            # Waitlist form modal
├── divisions/
│   ├── sec/
│   │   ├── page.tsx                 # Minimal Sec division page
│   │   └── art-t/
│   │       └── page.tsx             # ART-T product page
│   ├── byte/
│   │   └── page.tsx                 # Minimal Byte (template)
│   ├── infra/
│   │   └── page.tsx                 # Minimal Infra (template)
│   ├── games/
│   │   └── page.tsx                 # Minimal Games (template)
│   └── chain/
│       └── page.tsx                 # Minimal Chain (template)
└── public/
    └── img/
        └── minimal-wide-logo-trans.png
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Create Next.js project:**
```bash
npx create-next-app@latest mts-website --typescript --tailwind --app
cd mts-website
```

2. **Install dependencies:**
```bash
npm install framer-motion lucide-react
```

3. **Copy project files:**
```bash
# Copy main landing page
cp page.tsx app/page.tsx

# Create directory structure
mkdir -p app/components
mkdir -p app/divisions/sec/art-t
mkdir -p app/divisions/byte
mkdir -p app/divisions/infra
mkdir -p app/divisions/games
mkdir -p app/divisions/chain

# Copy components
cp components/WaitlistModal.tsx app/components/

# Copy division pages
cp divisions/sec/page.tsx app/divisions/sec/
cp divisions/sec/art-t/page.tsx app/divisions/sec/art-t/
```

4. **Add your logo:**
```bash
mkdir -p public/img
# Add your minimal-wide-logo-trans.png to public/img/
```

5. **Run development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 🎨 Design System

### Color Palette
```css
/* Division Colors */
Minimal Byte:  #3b82f6 (Blue)
Minimal Sec:   #ef4444 (Red)
Minimal Infra: #8b5cf6 (Purple)
Minimal Games: #10b981 (Green)
Minimal Chain: #f59e0b (Amber)

/* Base Colors */
Background:    #FFFFFF (White)
Text Primary:  #111827 (Gray-900)
Text Secondary:#6B7280 (Gray-600)
Borders:       #E5E7EB (Gray-200)
```

### Typography
- **Font Family**: System fonts (sans-serif)
- **Headings**: Font-light for main headers, font-semibold for emphasis
- **Body**: text-base (16px)
- **Scale**: text-sm, text-base, text-lg, text-xl, text-2xl, text-4xl, text-5xl, text-7xl

## 🔧 Customization Guide

### Update Company Information

#### Edit Main Landing Page
Find the `divisions` array in `page.tsx` (around line 25):

```typescript
const divisions = [
  {
    id: 1,
    name: 'Minimal Byte',
    tagline: 'SaaS & Software Development',
    description: 'Your description...',
    icon: Code,
    color: '#3b82f6',
    status: 'Active',
    link: '/divisions/byte',
    features: [...]
  },
  // ... other divisions
];
```

#### Update Contact Information
Search and replace throughout:
- Email: `minimalsolucoestecnologicas@gmail.com`
- GitHub: `https://github.com/MinimalTechSolutions`
- Leadership: Update in footer

### Create Additional Division Pages

Use the Minimal Sec page as a template:

```bash
cp app/divisions/sec/page.tsx app/divisions/YOUR-DIVISION/page.tsx
```

Then customize:
1. Change hero icon and colors
2. Update services/features list
3. Modify stats
4. Update CTA links

## 📊 Features by Page

### Main Landing
- ✅ All 5 divisions displayed
- ✅ GitHub integration
- ✅ Responsive navigation
- ✅ Mission statement
- ✅ Company stats
- ✅ "Coming Soon" placeholder for expansion

### Minimal Sec Division
- ✅ Service offerings overview
- ✅ ART-T flagship product highlight
- ✅ Stats dashboard
- ✅ "Why Choose Us" section
- ✅ Direct email CTA

### ART-T Product Page
- ✅ Live threat feed (simulated)
- ✅ Risk score gauge animation
- ✅ Research citations
- ✅ Waitlist modal
- ✅ Feature highlights

## 🔌 API Integration

### Backend Setup

Create API routes for the waitlist form:

#### `/app/api/waitlist/route.ts`
```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  // Save to database
  // await db.waitlist.create({ data });
  
  // Send confirmation email
  await resend.emails.send({
    from: 'hello@minimaltechsolutions.com',
    to: data.workEmail,
    subject: 'ART-T Beta Access Request Received',
    html: `<p>Thanks for your interest in ART-T...</p>`
  });
  
  // Notify team
  await resend.emails.send({
    from: 'waitlist@minimaltechsolutions.com',
    to: 'minimalsolucoestecnologicas@gmail.com',
    subject: 'New Beta Request',
    html: `<p>New request from ${data.fullName} at ${data.workEmail}</p>`
  });
  
  return NextResponse.json({ success: true });
}
```

### Environment Variables
Create `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
DATABASE_URL=your_database_url
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📈 Analytics

### Google Analytics Setup

Add to `app/layout.tsx`:
```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Track Events
```typescript
// Track division page views
gtag('event', 'page_view', {
  division: 'Minimal Sec'
});

// Track CTA clicks
gtag('event', 'cta_click', {
  division: 'Minimal Sec',
  action: 'request_consultation'
});

// Track waitlist signups
gtag('event', 'waitlist_signup', {
  product: 'ART-T',
  company_size: formData.companySize
});
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/MinimalTechSolutions/website
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Next.js
- Add environment variables
- Deploy!

### Custom Domain Setup
1. Add domain in Vercel project settings
2. Update DNS records:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

### Environment Variables on Vercel
Add in Project Settings → Environment Variables:
- `RESEND_API_KEY`
- `DATABASE_URL`
- `NEXT_PUBLIC_GA_ID`

## 🔒 Security Best Practices

1. **Email Validation**: Business domains only (built-in)
2. **Rate Limiting**: Implement on API routes
3. **CSRF Protection**: Next.js built-in
4. **Environment Variables**: Never commit `.env.local`
5. **HTTPS**: Enforced by Vercel

## 📝 Content Guidelines

### Writing Style
- **Clear and direct** - "Make it simple and direct"
- **Professional yet approachable**
- **Benefit-focused**
- **Technically accurate**

### Division Descriptions
- **Minimal Byte**: Focus on quality and selective process
- **Minimal Sec**: Emphasize expertise and rapid response
- **Minimal Infra**: Highlight scalability and cost-effectiveness
- **Minimal Games**: Showcase immersive experiences
- **Minimal Chain**: Pioneer minimalistic decentralization

## 🤝 Contributing

### For MTS Team Members
1. Create feature branch: `git checkout -b feature/new-division-page`
2. Make changes
3. Test locally: `npm run dev`
4. Commit: `git commit -m "Add: New division page"`
5. Push: `git push origin feature/new-division-page`
6. Create Pull Request

### Coding Standards
- Use TypeScript for type safety
- Follow existing component structure
- Keep components under 500 lines
- Use Tailwind utilities (no custom CSS)
- Add comments for complex logic

## 📞 Support & Contact

- **General Inquiries**: minimalsolucoestecnologicas@gmail.com
- **GitHub**: https://github.com/MinimalTechSolutions
- **CEO**: Lucas H. Mulato

## 📄 License

© 2026 Minimal Technology Solutions. All rights reserved.

Core frameworks licensed under MIT.
ART-T Core: AGPLv3 (open-source)
ART-T Enterprise: Commercial license

## 🔗 Related Links

- [Alpha MinimalByte Site](https://alpha-minimalbyte.vercel.app/)
- [GitHub Organization](https://github.com/MinimalTechSolutions)
- [Sanctum Portal Project](https://github.com/MinimalTechSolutions/sanctum-portal)

## 🎯 Roadmap

### Q1 2026
- [x] Main landing page
- [x] Minimal Sec division page
- [x] ART-T product page
- [ ] Complete Minimal Byte division page
- [ ] Beta waitlist backend integration

### Q2 2026
- [ ] Minimal Infra division page
- [ ] Customer testimonials section
- [ ] Blog integration
- [ ] Case studies

### Q3 2026
- [ ] Minimal Games division page
- [ ] Minimal Chain division page
- [ ] Interactive demos
- [ ] Client portal

### Q4 2026
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Partner program portal

---

**Built with ❤️ by Minimal Technology Solutions**  
*Your simple way to solve technology problems*
