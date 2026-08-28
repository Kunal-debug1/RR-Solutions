import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Notice | RR Solutions',
  description: 'Privacy information for the RR Solutions website.',
  alternates: { canonical: 'https://rrsolutionsofficials.in/privacy' },
  robots: 'noindex,follow',
};

export default function PrivacyPage() {
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
          <p className="eyebrow"><span></span> Privacy</p>
          <h1>Privacy Notice</h1>
          <p>Last updated: July 30, 2026</p>
          <p>This notice describes how the RR Solutions website handles information. It applies to this website only and should be reviewed whenever the website, contact process, or business operations change.</p>
          <h2>Information you choose to provide</h2>
          <p>The consultation form prepares an email in your own email application. The website does not submit or store the form data on RR Solutions servers. Any information you send in that email is handled through your email provider and RR Solutions&apos; normal business correspondence process.</p>
          <h2>Technical services</h2>
          <p>This website uses third-party delivery services for fonts, icons, and selected images. Those providers may process technical information such as IP address, browser type, and request logs in order to deliver their resources. Service videos are hosted directly by RR Solutions and load only after you choose to play one.</p>
          <h2>Cookies and tracking</h2>
          <p>The website does not include advertising pixels, analytics scripts, account logins, or a consent-management platform. Your hosting provider or the external services listed above may still process limited technical data necessary to deliver their services.</p>
          <h2>How to contact us</h2>
          <p>For a privacy question or a request about information you have sent to RR Solutions, email <a href="mailto:info.rrsolutionsofficial@gmail.com">info.rrsolutionsofficial@gmail.com</a>.</p>
          <h2>Updates to this notice</h2>
          <p>We may update this notice when our website or information practices change. The date above indicates the latest revision.</p>
        </article>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
