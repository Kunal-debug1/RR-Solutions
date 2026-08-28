'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// variant: 'full' (homepage) | 'simple' (service/blog) | 'minimal' (legal/404)
export default function Footer({ variant = 'full' }) {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  if (variant === 'minimal') {
    return (
      <footer>
        <div className="container">
          <div className="footer-bottom mt-0 border-0 pt-0">
            <span>&copy; {year} RR Solutions. All rights reserved.</span>
            <div className="footer-legal">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === 'simple') {
    return (
      <footer>
        <div className="container">
          <div className="footer-bottom mt-0 border-0 pt-0">
            <span>&copy; {year} RR Solutions. All rights reserved.</span>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <Link href="/">Home</Link>
              <Link href="/blog">Insights</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <nav className="social-links mt-0" aria-label="RR Solutions social links">
                <a href="https://www.linkedin.com/company/rr-solutions-india" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on LinkedIn">
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/rrsolutionsofficial/" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/people/RR-Solutions/61592745657174/" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Facebook">
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Full footer (homepage)
  return (
    <footer>
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4">
            <Link className="footer-brand" href="/" aria-label="RR Solutions home">
              <Image
                src="/assets/images/rr-solution-logo-2.webp"
                alt=""
                width={58}
                height={58}
                loading="lazy"
                decoding="async"
              />
              <span className="brand-name"><span>RR</span> Solutions</span>
            </Link>
            <p>Websites · Software · AI · Automation</p>
            <p className="footer-tagline">We build solutions,<br /><em>you grow faster.</em></p>
          </div>
          <div className="col-6 col-lg-2">
            <h3>Explore</h3>
            <Link href="/#services">Services</Link>
            <Link href="/blog">Insights</Link>
            <Link href="/#process">Our process</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#about">About us</Link>
          </div>
          <div className="col-6 col-lg-3">
            <h3>Get in touch</h3>
            <a href="mailto:info.rrsolutionsofficial@gmail.com">info.rrsolutionsofficial@gmail.com</a>
            <a href="tel:+9198233726865">+91 98233 726865</a>
            <span>Hyderabad, India</span>
            <div className="social-links" aria-label="RR Solutions social links">
              <a href="https://www.linkedin.com/company/rr-solutions-india" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/rrsolutionsofficial/" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/people/RR-Solutions/61592745657174/" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} RR Solutions. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <span>Serving businesses worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
