# RR Solutions Website (Next.js 15 App Router)

Production-ready modern website for RR Solutions built with **Next.js 15 (App Router)**, React Server Components, and Bootstrap 5.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI & Styling**: Bootstrap 5 + Font Awesome 6
- **Typography**: Google Fonts (`DM Sans` & `Manrope`) via `next/font/google`
- **Deployment**: Vercel / Node.js / Docker / any cloud host

## Project Structure

```
.
├── public/                  # Static assets (images, videos, icons, robots, sitemap)
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── videos/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout with fonts, metadata, JSON-LD
│   │   ├── globals.css      # Design tokens and custom styles
│   │   ├── page.js          # Homepage
│   │   ├── not-found.js     # Custom 404 page
│   │   ├── blog/page.js     # Insights & topic clusters
│   │   ├── privacy/page.js  # Privacy notice
│   │   ├── terms/page.js    # Terms of use
│   │   └── [service]/page.js# Dynamic SSG service pages (11 services)
│   ├── components/
│   │   ├── Topbar.js        # Topbar with contact info
│   │   ├── Navbar.js        # Responsive mobile-friendly navbar
│   │   ├── Footer.js        # Footer with dynamic year
│   │   ├── BackToTop.js     # Scroll-to-top button
│   │   ├── ContactForm.js   # Fast client-side contact form
│   │   ├── FAQAccordion.js  # Interactive FAQ accordion
│   │   └── ServiceVideoModal.js # Lazy-loaded video player
│   └── data/
│       └── services.js      # Central service definitions & SEO data
├── next.config.js           # Redirects, security headers & image config
├── package.json
└── jsconfig.json
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and configure build settings.
4. Deploy!

### Other Hosts (Node.js Server)

Run `npm run build` followed by `npm start` to run on any Node.js 20+ server.
