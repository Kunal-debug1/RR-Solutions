'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion" id="service-faq">
      {faqs.map((faq, i) => (
        <div className="accordion-item" key={i}>
          <h3 className="accordion-header" id={`faq-heading-${i}`}>
            <button
              className={`accordion-button${openIndex === i ? '' : ' collapsed'}`}
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-${i}`}
            >
              {faq.question}
            </button>
          </h3>
          <div
            id={`faq-${i}`}
            className={`accordion-collapse collapse${openIndex === i ? ' show' : ''}`}
            aria-labelledby={`faq-heading-${i}`}
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
