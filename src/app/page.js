import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'AI Automation & Web Development Company | RR Solutions',
  description: 'RR Solutions delivers website development, custom software and AI automation for growing Indian businesses. Discuss your project today.',
  alternates: { canonical: 'https://rrsolutionsofficials.in/' },
  openGraph: {
    type: 'website',
    siteName: 'RR Solutions',
    locale: 'en_IN',
    title: 'AI Automation & Web Development Company | RR Solutions',
    description: 'Website development, custom software and AI automation for growing businesses across India.',
    url: 'https://rrsolutionsofficials.in/',
    images: [{ url: 'https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & Web Development Company | RR Solutions',
    description: 'Website development, custom software and AI automation for growing businesses across India.',
    images: ['https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg'],
  },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://rrsolutionsofficials.in/#webpage',
  url: 'https://rrsolutionsofficials.in/',
  name: 'AI Automation and Web Development Company | RR Solutions',
  description: 'Website development, custom software and AI automation for growing businesses in India.',
  about: { '@id': 'https://rrsolutionsofficials.in/#organization' },
  inLanguage: 'en-IN',
};

const services = [
  { num: '01', icon: 'fa-window-maximize', title: 'Website Development', desc: 'Fast, responsive, SEO-ready websites that turn curious visitors into confident customers.', href: '/website-development' },
  { num: '02', icon: 'fa-bag-shopping', title: 'E-Commerce Solutions', desc: 'Effortless shopping experiences that make it simple for customers to find, buy, and return.', href: '/ecommerce-solutions' },
  { num: '03', icon: 'fa-code', title: 'Custom Software', desc: 'Purpose-built tools that streamline your workflow and grow alongside your operations.', href: '/custom-software-development' },
  { num: '04', icon: 'fa-wand-magic-sparkles', title: 'AI & Business Automation', desc: 'Intelligent workflows that give your team more time for the work that matters most.', href: '/ai-automation', featured: true },
  { num: '05', icon: 'fa-bullhorn', title: 'Digital Marketing', desc: 'SEO, social, and campaigns that make sure the right people can find your business.', href: '/digital-marketing' },
  { num: '06', icon: 'fa-headset', title: 'Support & Maintenance', desc: 'Reliable post-launch care to keep your technology secure, current, and working hard.', href: '/support-maintenance' },
];

const moreServices = [
  { name: 'Mobile App Development', href: '/mobile-app-development' },
  { name: 'API Development', href: '/api-development' },
  { name: 'CRM Development', href: '/crm-development' },
  { name: 'ERP Development', href: '/erp-development' },
  { name: 'Cloud Solutions', href: '/cloud-solutions' },
  { name: 'UI/UX Design', href: '/ui-ux-design' },
];

const impactCards = [
  { num: '01', title: 'Customized, not copied', body: 'Every project is tailored around your goals, customers, and real workflow.' },
  { num: '02', title: 'Clear from day one', body: 'Practical proposals, honest guidance, and regular updates at every milestone.' },
  { num: '03', title: 'Built for value', body: 'Enterprise-grade thinking with pricing designed for growing businesses.' },
  { num: '04', title: 'Here beyond launch', body: 'A long-term partner for the updates, improvements, and ideas ahead.' },
];

const processSteps = [
  { num: '01', icon: 'fa-regular fa-comments', title: 'Discover', body: 'We learn your business, challenges, and what success should look like.' },
  { num: '02', icon: 'fa-regular fa-compass', title: 'Plan', body: 'You get a focused, tailored roadmap with clear priorities and pricing.' },
  { num: '03', icon: 'fa-solid fa-cubes', title: 'Build', body: 'We design and develop in partnership, keeping you close to every milestone.' },
  { num: '04', icon: 'fa-solid fa-rocket', title: 'Launch & grow', body: 'We go live, measure what matters, and stay ready for what comes next.' },
];

const industries = [
  { icon: 'fa-rocket', name: 'Startups' },
  { icon: 'fa-utensils', name: 'Restaurants' },
  { icon: 'fa-hospital', name: 'Hospitals & Clinics' },
  { icon: 'fa-graduation-cap', name: 'Education' },
  { icon: 'fa-building', name: 'Real Estate' },
  { icon: 'fa-store', name: 'Retail' },
  { icon: 'fa-industry', name: 'Manufacturing' },
  { icon: 'fa-plus', name: 'And more' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Topbar />
      <Navbar activeSection="home" />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ── */}
        <section className="hero section-pad" id="home">
          <div className="container position-relative">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 hero-copy">
                <span className="eyebrow"><span></span> Your technology growth partner</span>
                <h1>Build smarter.<br /><em>Grow faster.</em></h1>
                <p className="lead">We turn ambitious business ideas into high-performing websites, software, AI systems, and automations that make growth feel possible.</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link className="btn btn-primary btn-lg" href="#contact">
                    Book a free consultation <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                  <Link className="btn btn-link btn-lg" href="#services">
                    Explore services <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
                  </Link>
                </div>
                <div className="hero-proof">
                  <div className="avatar-stack">
                    <span>R</span><span>S</span><span>A</span>
                  </div>
                  <p><strong>Built for real businesses</strong><br />Strategy-first, not template-first.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-visual">
                  <div className="hero-image">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                      alt="Team collaborating on a digital solution"
                      width={1200}
                      height={800}
                      priority
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="floating-card card-insight">
                    <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                    <div><b>Growth-ready systems</b><span>Built to scale with you</span></div>
                  </div>
                  <div className="floating-card card-automation">
                    <span className="pulse-dot"></span>
                    <div><b>Automation active</b><span>Your operations, simplified</span></div>
                  </div>
                  <div className="orbit orbit-one"></div>
                  <div className="orbit orbit-two"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trusted Bar ── */}
        <section className="trusted py-4">
          <div className="container">
            <p>ONE PARTNER. SIX POWERFUL WAYS TO GROW.</p>
            <div className="trusted-items">
              <span>WEBSITES</span><i></i>
              <span>SOFTWARE</span><i></i>
              <span>AI</span><i></i>
              <span>AUTOMATION</span><i></i>
              <span>MARKETING</span>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="section-pad" id="services">
          <div className="container">
            <div className="section-heading row align-items-end mb-5">
              <div className="col-lg-7">
                <span className="eyebrow"><span></span> What we build</span>
                <h2>Technology shaped around <em>your business.</em></h2>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <p>From your first digital impression to the systems behind the scenes, we build practical tools that help you move with confidence.</p>
              </div>
            </div>
            <div className="row g-4 services-grid">
              {services.map((s) => (
                <div className="col-md-6 col-lg-4" key={s.num}>
                  <Link className={`service-card${s.featured ? ' service-featured' : ''}`} href={s.href}>
                    <div className="service-icon"><i className={`fa-solid ${s.icon}`} aria-hidden="true"></i></div>
                    <span>{s.num}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <b>Discover more <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></b>
                  </Link>
                </div>
              ))}
            </div>
            <div className="service-links" aria-label="More RR Solutions services">
              {moreServices.map((s) => (
                <Link key={s.href} href={s.href}>{s.name}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact ── */}
        <section className="impact-section section-pad">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <span className="eyebrow eyebrow-light"><span></span> Why RR Solutions</span>
                <h2>Big business thinking. <em>Built for your next move.</em></h2>
                <p>We work closely with founders and business owners to understand what is really getting in the way - then make technology feel clear, useful, and achievable.</p>
                <Link className="btn btn-light mt-3" href="#about">
                  Why work with us <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="row g-3">
                  {impactCards.map((c, i) => (
                    <div className="col-sm-6" key={c.num}>
                      <div className={`impact-card${i % 2 === 1 ? ' impact-offset' : ''}`}>
                        <strong>{c.num}</strong>
                        <h3>{c.title}</h3>
                        <p>{c.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="section-pad process-section" id="process">
          <div className="container">
            <div className="section-heading text-center mx-auto">
              <span className="eyebrow justify-content-center"><span></span> A clear way forward</span>
              <h2>From first conversation<br />to <em>real momentum.</em></h2>
            </div>
            <div className="process-line">
              {processSteps.map((s) => (
                <div className="process-step" key={s.num}>
                  <div className="step-number">{s.num}</div>
                  <i className={s.icon} aria-hidden="true"></i>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="industries section-pad" id="industries">
          <div className="container">
            <div className="row align-items-end mb-5">
              <div className="col-lg-7">
                <span className="eyebrow"><span></span> Industries we serve</span>
                <h2>Every business has a challenge.<br /><em>We build the answer.</em></h2>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <p>Our approach adapts to the way your industry operates - so your solution feels useful from day one.</p>
              </div>
            </div>
            <div className="industry-list">
              {industries.map((ind) => (
                <span key={ind.name}>
                  <i className={`fa-solid ${ind.icon}`} aria-hidden="true"></i> {ind.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="about-slice section-pad" id="about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="about-visual">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
                    alt="RR Solutions team planning a project"
                    width={1100}
                    height={825}
                    loading="lazy"
                    style={{ width: '100%', height: '370px', objectFit: 'cover', borderRadius: '22px' }}
                  />
                  <div className="about-stamp">
                    <b>6</b>
                    <span>core services<br />one focused partner</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <span className="eyebrow"><span></span> Built with purpose</span>
                <h2>Technology should feel like an <em>advantage.</em></h2>
                <p>RR Solutions is an early-stage technology company based in Hyderabad, founded on a simple belief: businesses of every size deserve technology that helps them compete and grow.</p>
                <p>We skip generic templates and build around how your business actually works - with the personal attention to stay involved long after launch day.</p>
                <Link className="text-link" href="#contact">
                  Meet your technology partner <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <span className="eyebrow eyebrow-light"><span></span> Let&apos;s build your next advantage</span>
                  <h2>Ready to make your business <em>move smarter?</em></h2>
                  <p>Tell us where you want to grow. Your first consultation is on us.</p>
                </div>
                <div className="col-lg-5">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="full" />
      <BackToTop />
    </>
  );
}
