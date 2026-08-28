import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page not found | RR Solutions',
  robots: 'noindex,follow',
};

export default function NotFound() {
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
          </div>
        </nav>
      </header>
      <main className="not-found" id="main-content" tabIndex={-1}>
        <div className="container">
          <p className="eyebrow justify-content-center"><span></span> Error 404</p>
          <h1>This page is not here.</h1>
          <p className="lead mx-auto mt-3">The link may be out of date, or the page may have moved. Let&apos;s get you back to the right place.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link className="btn btn-primary" href="/">Back to home</Link>
            <a className="btn btn-link" href="mailto:info.rrsolutionsofficial@gmail.com">Contact us</a>
          </div>
        </div>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
