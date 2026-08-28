/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/custom-software',
        destination: '/custom-software-development',
        permanent: true,
      },
      {
        source: '/website-development.html',
        destination: '/website-development',
        permanent: true,
      },
      {
        source: '/ecommerce-solutions.html',
        destination: '/ecommerce-solutions',
        permanent: true,
      },
      {
        source: '/custom-software-development.html',
        destination: '/custom-software-development',
        permanent: true,
      },
      {
        source: '/ai-automation.html',
        destination: '/ai-automation',
        permanent: true,
      },
      {
        source: '/digital-marketing.html',
        destination: '/digital-marketing',
        permanent: true,
      },
      {
        source: '/support-maintenance.html',
        destination: '/support-maintenance',
        permanent: true,
      },
      {
        source: '/mobile-app-development.html',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/api-development.html',
        destination: '/api-development',
        permanent: true,
      },
      {
        source: '/crm-development.html',
        destination: '/crm-development',
        permanent: true,
      },
      {
        source: '/erp-development.html',
        destination: '/erp-development',
        permanent: true,
      },
      {
        source: '/cloud-solutions.html',
        destination: '/cloud-solutions',
        permanent: true,
      },
      {
        source: '/ui-ux-design.html',
        destination: '/ui-ux-design',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/privacy.html',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms.html',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'accelerometer=(), autoplay=(self), camera=(), display-capture=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
