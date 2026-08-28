import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Use | RR Solutions',
  description: 'Website terms of use for RR Solutions.',
  alternates: { canonical: 'https://rrsolutionsofficials.in/terms' },
  robots: 'noindex,follow',
};

export default function TermsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header>
        <nav className="navbar bg-white" aria-label="Main navigation">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src="/assets/images/rr-solutions-logo.webp" alt="RR Solutions" width={58} height={58} />
              <span className="brand-name"><span>RR</span> Solutions</span>
            </Link>
            <Link className="btn btn-primary btn-sm" href="/#contact">Start a project</Link>
          </div>
        </nav>
      </header>
      <main className="legal-page" id="main-content" tabIndex={-1}>
        <article className="container legal-content">
          <p className="eyebrow"><span></span> Terms</p>
          <h1>Terms of Use</h1>
          <p>Last updated: July 30, 2026</p>
          <p>By using this website, you agree to use it lawfully and in a way that does not interfere with its operation or the experience of other visitors.</p>
          <h2>Website information</h2>
          <p>The website presents general information about RR Solutions and its services. It is not a binding offer, technical guarantee, legal advice, or a promise that a particular result will be achieved. Project scope, deliverables, prices, timelines, and responsibilities are agreed separately in writing.</p>
          <h2>Intellectual property</h2>
          <p>Unless otherwise stated, the website&apos;s branding, copy, design, and original materials belong to RR Solutions. You may not copy, reproduce, or use them commercially without prior written permission.</p>
          <h2>Third-party services</h2>
          <p>The website may link to third-party websites and services. RR Solutions does not control their content, availability, or privacy practices. Review their terms and policies before using them.</p>
          <h2>Availability and changes</h2>
          <p>We may update, suspend, or remove website content without notice. We aim to keep the website accurate and available, but do not guarantee uninterrupted or error-free operation.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:info.rrsolutionsofficial@gmail.com">info.rrsolutionsofficial@gmail.com</a>.</p>
        </article>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
