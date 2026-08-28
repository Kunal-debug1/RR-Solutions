import { DM_Sans, Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport = {
  themeColor: '#061b39',
};

export const metadata = {
  metadataBase: new URL('https://rrsolutionsofficials.in'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/icons/icon-192.png',
  },
  manifest: '/manifest.json',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://rrsolutionsofficials.in/#organization',
      name: 'RR Solutions',
      alternateName: 'RR Solutions India',
      url: 'https://rrsolutionsofficials.in/',
      logo: 'https://rrsolutionsofficials.in/assets/images/rr-solutions-logo.webp',
      image: 'https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg',
      description: 'Website development, custom software and AI automation for growing businesses in India.',
      email: 'info.rrsolutionsofficial@gmail.com',
      telephone: '+91-98233-726865',
      address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'IN' },
      areaServed: ['Hyderabad', 'Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'India'],
      sameAs: [
        'https://www.linkedin.com/company/rr-solutions-india',
        'https://www.instagram.com/rrsolutionsofficial/',
        'https://www.facebook.com/people/RR-Solutions/61592745657174/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Development' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rrsolutionsofficials.in/#website',
      url: 'https://rrsolutionsofficials.in/',
      name: 'RR Solutions',
      publisher: { '@id': 'https://rrsolutionsofficials.in/#organization' },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${dmSans.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
