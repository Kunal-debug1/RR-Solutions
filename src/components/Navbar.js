'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ activeSection = '' }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/assets/images/rr-solutions-logo.webp"
            alt="RR Solutions"
            width={58}
            height={58}
            decoding="async"
            priority
          />
          <span className="brand-name"><span>RR</span> Solutions</span>
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-controls="mainNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars-staggered" aria-hidden="true"></i>
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'home' ? ' active' : ''}`} href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'services' ? ' active' : ''}`} href="/#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'process' ? ' active' : ''}`} href="/#process">Process</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'industries' ? ' active' : ''}`} href="/#industries">Industries</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'blog' ? ' active' : ''}`} href="/blog">Insights</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${activeSection === 'about' ? ' active' : ''}`} href="/#about">About</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-primary btn-sm" href="/#contact">
                Start a project <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
