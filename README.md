# RR Solutions website

Production-ready static marketing site for RR Solutions. It uses plain HTML, CSS, and browser JavaScript, so there is no framework build step or production dependency tree to maintain.

## Structure

- index.html — homepage
- website-development.html — service-page template populated from assets/js/main.js
- assets/css — base design system and site-level accessibility/responsive enhancements
- assets/images and assets/videos — optimized logo assets and locally hosted service videos
- assets/js/main.js — safe client-side rendering, contact email-draft flow, and video modal behavior
- 404.html, privacy.html, terms.html — supporting production pages
- _headers and vercel.json — security and caching headers for Cloudflare Pages/Netlify and Vercel

<<<<<<< HEAD
## Generate and validate before deployment

Use Node.js 20 or newer, then run:

    node scripts/generate-service-pages.mjs
    npm run validate

The generator writes the 12 static service pages and the Insights hub from a single source. The validator checks required deployment files, unique SEO metadata, canonical URLs, one H1 per indexable page, JSON-LD parseability, local references, sitemap coverage, accessibility safeguards, and security-header configuration.
=======
## Validate before deployment

Use Node.js 20 or newer, then run:

    npm run validate

The validator checks required deployment files, key SEO metadata, document landmarks, stale CSS references, and disallows dynamic HTML insertion in the site script.
>>>>>>> 4c317426d684bae14ee571a720536a0f0e3b071a

## Deploy

No install or build command is required for static hosting. Publish the repository root.

- Vercel: import the repository and use the default static configuration.
- Netlify / Cloudflare Pages: publish the repository root; the _headers file is automatically picked up.
- AWS / other hosts: upload the repository contents and translate _headers into the platform's response-header configuration.

## Pre-launch checklist

1. Run npm run validate.
2. Confirm the final production domain remains https://rrsolutionsofficials.in.
3. Check every service video and social link on the deployed domain.
4. Submit https://rrsolutionsofficials.in/sitemap.xml to Google Search Console and Bing Webmaster Tools.
5. Validate Open Graph/Twitter previews after deployment.
6. Run Lighthouse on the deployed site at mobile and desktop widths.
7. Have the privacy notice and terms reviewed against the business's actual practices and applicable law.
