import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, getAllSlugs } from '@/data/services';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceVideoModal from '@/components/ServiceVideoModal';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const svc = getServiceBySlug(service);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: svc.canonical },
    openGraph: {
      type: 'website',
      siteName: 'RR Solutions',
      locale: 'en_IN',
      title: svc.ogTitle,
      description: svc.description,
      url: svc.canonical,
      images: [{ url: 'https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.ogTitle,
      description: svc.description,
      images: ['https://rrsolutionsofficials.in/assets/images/rr-solutions-social.jpg'],
    },
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const svc = getServiceBySlug(service);
  if (!svc) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${svc.canonical}#webpage`,
        url: svc.canonical,
        name: svc.title,
        description: svc.description,
        isPartOf: { '@id': 'https://rrsolutionsofficials.in/#website' },
        about: { '@id': `${svc.canonical}#service` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Service',
        '@id': `${svc.canonical}#service`,
        name: svc.serviceType,
        description: svc.description,
        url: svc.canonical,
        provider: { '@id': 'https://rrsolutionsofficials.in/#organization' },
        areaServed: ['Hyderabad', 'Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'India'],
        serviceType: svc.serviceType,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${svc.canonical}#breadcrumb`,
        itemListElement: svc.breadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          ...(b.href ? { item: `https://rrsolutionsofficials.in${b.href}` } : {}),
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${svc.canonical}#faq`,
        mainEntity: svc.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Topbar />
      <Navbar activeSection="services" />

      <main id="main-content" tabIndex={-1}>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              {svc.breadcrumb.map((b, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2">/</span>}
                  {b.href ? <Link href={b.href}>{b.name}</Link> : <span>{b.name}</span>}
                </span>
              ))}
            </nav>
            <span className="eyebrow"><span></span> {svc.heroEyebrow}</span>
            <h1>{svc.heroHeading}</h1>
            <p className="lead mt-3">{svc.heroLead}</p>
          </div>
        </section>

        {/* Video + Benefits */}
        <section className="section-pad">
          <div className="container">
            <div className="service-video" style={{ position: 'relative' }}>
              <Image
                src={svc.heroImage}
                alt={svc.heroImageAlt}
                width={1400}
                height={700}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.68 }}
              />
              <ServiceVideoModal videoSrc={svc.videoSrc} poster={svc.heroImage} title={svc.serviceType} />
            </div>
            <div className="row g-5 align-items-center mt-2">
              <div className="col-lg-5">
                <span className="eyebrow"><span></span> Designed for impact</span>
                <h2>A better digital experience starts with a smarter <em>foundation.</em></h2>
                <p className="mt-3 text-secondary">Every engagement is shaped around the outcome your business needs, the people using the solution and the systems that need to work together.</p>
              </div>
              <div className="col-lg-6 offset-lg-1">
                {svc.benefits.map((b) => (
                  <div className="benefit-card" key={b.num}>
                    <span className="eyebrow"><span></span> {b.num}</span>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="deliverables section-pad">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <span className="eyebrow"><span></span> What is included</span>
                <h2>A focused solution, made <em>for you.</em></h2>
                <p className="text-secondary mt-3">The final scope is tailored to your priorities. These are common elements we bring together to create a useful, maintainable result.</p>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="row g-3">
                  {svc.deliverables.map((d) => (
                    <div className="col-sm-6" key={d.text}>
                      <div className="deliverable">
                        <i className={`fa-solid ${d.icon}`} aria-hidden="true"></i>
                        {d.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copy Sections */}
        <section className="section-pad service-copy">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <span className="eyebrow"><span></span> How we help</span>
                <h2>Technology that supports the way you <em>grow.</em></h2>
                <p className="text-secondary mt-3">RR Solutions serves small businesses, startups and established teams in Hyderabad and across India with practical digital systems.</p>
              </div>
              <div className="col-lg-7 offset-lg-1">
                {svc.copySections.map((s) => (
                  <section key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section section-pad">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <span className="eyebrow"><span></span> Common questions</span>
                <h2>Plan the next step with <em>clarity.</em></h2>
                <p className="text-secondary mt-3">Every project is different. These answers cover the questions we hear most often when a team is evaluating {svc.heroEyebrow}.</p>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <FAQAccordion faqs={svc.faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="related-services section-pad">
          <div className="container">
            <span className="eyebrow"><span></span> Explore related services</span>
            <h2>Build a more connected <em>digital foundation.</em></h2>
            <ul>
              {svc.relatedServices.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    {r.name} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/blog">
              Explore our digital growth topics <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta" id="contact">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="eyebrow eyebrow-light"><span></span> Start with a free consultation</span>
                <h2>{svc.ctaHeading}</h2>
                <p>Tell us what you are working toward. We will help you identify the clearest next step.</p>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="service-contact">
                  <a href="mailto:info.rrsolutionsofficial@gmail.com">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i> info.rrsolutionsofficial@gmail.com
                  </a>
                  <a href="tel:+9198233726865">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i> +91 98233 726865
                  </a>
                  <a className="btn btn-primary mt-3 w-100" href="mailto:info.rrsolutionsofficial@gmail.com?subject=Free%20Consultation%20Request">
                    Request consultation <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
      <BackToTop />
    </>
  );
}
