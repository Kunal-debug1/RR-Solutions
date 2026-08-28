import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Digital Growth Insights | RR Solutions',
  description: 'Practical digital growth topics from RR Solutions: websites, custom software, AI automation, CRM, ERP, cloud and SEO.',
  alternates: { canonical: 'https://rrsolutionsofficials.in/blog' },
  openGraph: {
    type: 'website',
    siteName: 'RR Solutions',
    locale: 'en_IN',
    title: 'Digital Growth Insights | RR Solutions',
    description: 'Practical topics for website development, custom software, AI automation, CRM, ERP, cloud and SEO.',
    url: 'https://rrsolutionsofficials.in/blog',
    images: [{ url: 'https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Insights | RR Solutions',
    description: 'Practical planning topics for your next website, software or automation project.',
    images: ['https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg'],
  },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://rrsolutionsofficials.in/blog#webpage',
  url: 'https://rrsolutionsofficials.in/blog',
  name: 'Digital Growth Insights | RR Solutions',
  description: 'Practical planning topics for website development, software, AI automation, CRM, ERP, cloud and digital growth.',
  isPartOf: { '@id': 'https://rrsolutionsofficials.in/#website' },
  inLanguage: 'en-IN',
};

const topicGroups = [
  {
    title: 'AI and automation',
    topics: [
      'How AI Automation Can Reduce Repetitive Work in Small Businesses',
      'AI Chatbots for Customer Support: What to Plan Before You Launch',
      'Business Automation Ideas for Restaurants and Clinics',
      'How to Connect AI Workflows to Your CRM',
      'Human Handoffs in AI Chatbots: A Practical Guide',
      'AI Automation vs Traditional Workflow Automation',
      'How to Audit a Process for Automation Opportunities',
      'Data and Privacy Considerations for Business AI',
    ],
  },
  {
    title: 'Website development',
    topics: [
      'How to Choose a Website Development Company in India',
      'What Should a Small Business Website Include?',
      'Website Redesign Checklist for Growing Businesses',
      'How Fast Should a Business Website Load?',
      'Website Accessibility Basics for Indian Businesses',
      'Service Page SEO: How to Turn Visits into Enquiries',
      'Website Design for Hospitals, Clinics and Healthcare Teams',
      'E-Commerce Website Checklist Before Launch',
      'How to Write Website Content That Answers Buyer Questions',
      'When Does a Business Need a Custom Website?',
    ],
  },
  {
    title: 'Custom software',
    topics: [
      'Signs Your Business Has Outgrown Spreadsheets',
      'Custom Software vs Off-the-Shelf Tools: How to Decide',
      'How to Scope a Custom Software Project',
      'How to Build Software Around a Real Workflow',
      'The Role of APIs in Custom Business Software',
      'How to Plan a Software MVP',
      'Business Software Security Basics for Decision-Makers',
      'How to Improve Team Adoption of New Software',
      'What Makes a Software Dashboard Useful',
      'How to Plan a Phased Software Rollout',
    ],
  },
  {
    title: 'CRM, ERP and cloud',
    topics: [
      'How a CRM Can Improve Lead Follow-Up',
      'CRM Data Fields That Sales Teams Actually Need',
      'When Does a Growing Business Need ERP Software?',
      'ERP Implementation Phases Explained',
      'How CRM and ERP Systems Work Together',
      'Cloud Migration Checklist for Small Businesses',
      'Cloud Security Questions to Ask Before a Migration',
      'How to Improve Reporting with Connected Business Systems',
    ],
  },
  {
    title: 'Mobile apps and UX',
    topics: [
      'How to Validate a Mobile App Idea Before Development',
      'Mobile App Features to Prioritise in Version One',
      'UI UX Design Principles for Business Applications',
      'How to Reduce Drop-Off in a Mobile App Journey',
      'Website vs Mobile App: Which Does Your Business Need?',
      'How to Test a Digital Product with Real Users',
      'Design System Basics for Growing Digital Products',
    ],
  },
  {
    title: 'SEO and digital growth',
    topics: [
      'Technical SEO Checklist for a New Business Website',
      'How Local SEO Helps Service Businesses in India',
      'How to Create a Content Cluster Around a Core Service',
      'What Is a Canonical URL and Why Does It Matter?',
      'How Schema Markup Helps Search Engines Understand a Website',
      'Core Web Vitals Explained for Business Owners',
      'How to Plan a B2B Content Calendar',
      'How to Measure Website Leads Without Guesswork',
      'SEO Content Brief Template for Service Pages',
    ],
  },
];

const allServices = [
  { name: 'Website Development', href: '/website-development' },
  { name: 'Custom Software Development', href: '/custom-software-development' },
  { name: 'Mobile App Development', href: '/mobile-app-development' },
  { name: 'AI Automation', href: '/ai-automation' },
  { name: 'API Development', href: '/api-development' },
  { name: 'CRM Development', href: '/crm-development' },
  { name: 'ERP Development', href: '/erp-development' },
  { name: 'Cloud Solutions', href: '/cloud-solutions' },
  { name: 'UI/UX Design', href: '/ui-ux-design' },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Topbar />
      <Navbar activeSection="blog" />

      <main id="main-content" tabIndex={-1}>
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="mx-2">/</span>
              <span>Insights</span>
            </nav>
            <span className="eyebrow"><span></span> Digital growth insights</span>
            <h1>Useful topics for your next <em>digital decision.</em></h1>
            <p className="lead mt-3">A structured editorial plan for business leaders exploring website development, custom software, AI automation and connected operations.</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <span className="eyebrow"><span></span> Content architecture</span>
                <h2>Six pillar clusters. Fifty focused <em>articles.</em></h2>
                <p className="text-secondary mt-3">Publish each topic as a dedicated, expert-reviewed article with a clear author, date, table of contents, related posts and article schema. Keep only genuinely published articles in the sitemap and RSS feed.</p>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className="blog-topic-grid">
                  {topicGroups.map((g) => (
                    <section className="blog-topic-group" key={g.title}>
                      <h2>{g.title}</h2>
                      <ol>
                        {g.topics.map((t) => <li key={t}>{t}</li>)}
                      </ol>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="related-services section-pad">
          <div className="container">
            <span className="eyebrow"><span></span> Explore the services behind the topics</span>
            <h2>Turn research into a practical <em>next step.</em></h2>
            <ul>
              {allServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.name} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/#contact">
              Discuss your project with RR Solutions <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
      <BackToTop />
    </>
  );
}
