'use client';

import { useState } from 'react';

const RECIPIENT = 'info.rrsolutionsofficial@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = ['Hello RR Solutions,', '', `Name: ${name}`, `Email: ${email}`, message ? `Project details: ${message}` : '']
      .filter(Boolean).join('\n');
    const query = new URLSearchParams({ subject: 'Free consultation request', body }).toString();
    setStatus('Opening your email app with a pre-filled draft.');
    window.location.href = `mailto:${RECIPIENT}?${query}`;
    form.reset();
  }

  return (
    <form className="quick-form" onSubmit={handleSubmit} data-contact-form>
      <div className="row g-2">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="contact-name">Your name</label>
          <input className="form-control" id="contact-name" name="name" type="text" autoComplete="name" maxLength={80} placeholder="Your name" required />
        </div>
        <div className="col-sm-7">
          <label className="visually-hidden" htmlFor="contact-email">Email address</label>
          <input className="form-control" id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="Email address" required />
        </div>
        <div className="col-sm-5">
          <button className="btn btn-accent w-100" type="submit">
            Email us <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-12">
          <label className="visually-hidden" htmlFor="contact-message">Project details</label>
          <textarea className="form-control" id="contact-message" name="message" rows={3} maxLength={1500} placeholder="Tell us a little about your project (optional)"></textarea>
        </div>
      </div>
      <p className="form-disclosure">Submitting opens your email app; we do not store this form data on the website.</p>
      <p className="form-message mb-0" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
