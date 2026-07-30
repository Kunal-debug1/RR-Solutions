const serviceData = Object.freeze({
  website: {
    label: "Website Development",
    seoTitle: "Website Development Company in Hyderabad | RR Solutions",
    seoDescription: "RR Solutions builds fast, responsive, SEO-ready websites for businesses in Hyderabad, across India, and worldwide.",
    title: "Your website should be your hardest-working <em>salesperson.</em>",
    intro: "We create modern, fast, mobile-first websites that make a memorable first impression and guide the right visitors toward action.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/website-development.mp4",
    benefits: [["Brand-led design", "A distinctive online presence shaped around your business and your customers."], ["Built for every screen", "Responsive layouts that feel effortless on mobile, tablet, and desktop."], ["Found by the right people", "SEO-friendly foundations, clear calls-to-action, and fast load times."]],
    deliverables: ["Custom website design", "Responsive development", "SEO-ready structure", "Contact & lead forms", "Analytics setup", "Launch support"]
  },
  ecommerce: {
    label: "E-Commerce Solutions",
    seoTitle: "E-Commerce Website Development Company | RR Solutions",
    seoDescription: "RR Solutions designs secure, mobile-friendly e-commerce websites that make online shopping and order management simple.",
    title: "Make buying from you feel <em>effortless.</em>",
    intro: "We build polished online stores that move customers from discovery to checkout with confidence, on every device.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/ecommerce-solutions.mp4",
    benefits: [["A store built to convert", "Clear product journeys and intuitive checkout flows designed around real shoppers."], ["Payments your customers trust", "Secure UPI, card, wallet, and payment-gateway integrations."], ["Simple to run every day", "Easy catalog, inventory, order, and customer management for your team."]],
    deliverables: ["Product catalog setup", "Secure payment integration", "Order management", "Mobile shopping UX", "Inventory configuration", "Store launch support"]
  },
  software: {
    label: "Custom Software",
    seoTitle: "Custom Software Development Company in Hyderabad | RR Solutions",
    seoDescription: "RR Solutions develops custom software and web applications around the real workflows of growing businesses in Hyderabad and across India.",
    title: "Software that fits your work - <em>not the other way around.</em>",
    intro: "When off-the-shelf tools create more friction than progress, we design systems around your workflow, team, and goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/custom-software.mp4",
    benefits: [["Built around your reality", "We map the way you work before we design the technology that supports it."], ["Ready to grow with you", "Scalable foundations that can evolve as your people, process, and ambition expand."], ["Connected where it counts", "Practical integrations with the tools and data your team already uses."]],
    deliverables: ["Workflow discovery", "Custom web applications", "System integrations", "Role-based access", "Scalable architecture", "Ongoing enhancements"]
  },
  ai: {
    label: "AI & Business Automation",
    seoTitle: "AI Automation Company in Hyderabad | RR Solutions",
    seoDescription: "RR Solutions creates AI assistants and business automation workflows that reduce repetitive work and help teams move faster.",
    title: "Give your team more time for <em>high-value work.</em>",
    intro: "We connect intelligent workflows that reduce repetitive work, improve consistency, and help your business respond faster.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/ai-automation.mp4",
    benefits: [["Always-on customer help", "Automate answers to common queries so customers can get support when they need it."], ["Fewer manual handoffs", "Connect your tools to trigger updates, reminders, invoices, and follow-ups automatically."], ["A smarter operating rhythm", "Make routine work more consistent, visible, and less prone to human error."]],
    deliverables: ["AI assistant design", "Customer FAQ flows", "Invoice & reminder automation", "Workflow integrations", "Process documentation", "Automation monitoring"]
  },
  marketing: {
    label: "Digital Marketing",
    seoTitle: "Digital Marketing & SEO Agency in Hyderabad | RR Solutions",
    seoDescription: "RR Solutions provides practical SEO, social media, Google Ads, and digital marketing services for businesses ready to grow.",
    title: "Be easy to find. Impossible to <em>overlook.</em>",
    intro: "Great work deserves attention. We bring your brand in front of the people most likely to become your next customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/digital-marketing.mp4",
    benefits: [["Visibility with intent", "SEO strategy that helps customers discover you when they are ready to act."], ["Campaigns that feel relevant", "Social and paid campaigns shaped around clear audiences and business goals."], ["A consistent brand voice", "Content direction that keeps your message recognizable across the channels that matter."]],
    deliverables: ["SEO foundations", "Social media strategy", "Google Ads campaigns", "Content planning", "Performance reporting", "Campaign optimization"]
  },
  support: {
    label: "Support & Maintenance",
    seoTitle: "Website & Software Maintenance Services | RR Solutions",
    seoDescription: "RR Solutions keeps websites, software, and digital tools secure, current, and dependable with practical ongoing support.",
    title: "Launch is not the finish line. It is the <em>starting point.</em>",
    intro: "Technology works best when it is cared for. We keep your website, software, and digital tools secure, current, and ready for business.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/support-maintenance.mp4",
    benefits: [["Protect what you have built", "Regular security patches and essential updates keep your platforms dependable."], ["Quick help when it matters", "A direct support path when you need a fix, a change, or a reliable second opinion."], ["Improvement never stops", "Ongoing reviews and enhancements so your investment stays useful as your business changes."]],
    deliverables: ["Regular updates", "Security monitoring", "Bug fixes", "Performance reviews", "Content support", "Dedicated contact"]
  }
});

const deliverableIcons = ["fa-pen-ruler", "fa-gears", "fa-bolt", "fa-shield-halved", "fa-chart-simple", "fa-handshake"];

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const recipient = form.dataset.recipient;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const status = form.querySelector(".form-message");
      const body = ["Hello RR Solutions,", "", "Name: " + name, "Email: " + email, message ? "Project details: " + message : ""].filter(Boolean).join("\n");
      const query = new URLSearchParams({ subject: "Free consultation request", body }).toString();

      if (status) status.textContent = "Opening your email app with a pre-filled draft.";
      window.location.href = "mailto:" + recipient + "?" + query;
      form.reset();
    });
  });
}

function setupBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  const updateVisibility = () => button.classList.toggle("visible", window.scrollY > 450);
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
}

function setMeta(selector, content) {
  const meta = document.querySelector(selector);
  if (meta) meta.setAttribute("content", content);
}

function updateServiceSeo(key, data) {
  const path = key === "website" ? "website-development.html" : "website-development.html?service=" + key;
  const canonical = "https://rrsolutionsofficials.in/" + path;
  document.title = data.seoTitle;
  setMeta('meta[name="description"]', data.seoDescription);
  setMeta('meta[property="og:title"]', data.seoTitle);
  setMeta('meta[property="og:description"]', data.seoDescription);
  setMeta('meta[property="og:url"]', canonical);
  setMeta('meta[name="twitter:title"]', data.seoTitle);
  setMeta('meta[name="twitter:description"]', data.seoDescription);

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) canonicalLink.setAttribute("href", canonical);

  const serviceSchema = document.getElementById("serviceSchema");
  if (serviceSchema) {
    serviceSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.label,
      description: data.seoDescription,
      url: canonical,
      provider: {
        "@type": "ProfessionalService",
        name: "RR Solutions",
        url: "https://rrsolutionsofficials.in/",
        telephone: "+91-98233-726865",
        email: "info.rrsolutionsofficial@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" }
      },
      areaServed: ["Hyderabad", "India"]
    });
  }
}

function setHighlightedHeading(element, value) {
  const match = value.match(/^(.*)<em>(.*)<\/em>(.*)$/);
  if (!match) {
    element.textContent = value;
    return;
  }

  const emphasis = document.createElement("em");
  emphasis.textContent = match[2];
  element.replaceChildren(document.createTextNode(match[1]), emphasis, document.createTextNode(match[3]));
}

function renderBenefits(container, benefits) {
  const fragment = document.createDocumentFragment();
  benefits.forEach(([title, description], index) => {
    const card = document.createElement("div");
    card.className = "benefit-card";
    const eyebrow = document.createElement("span");
    eyebrow.className = "eyebrow";
    const line = document.createElement("span");
    line.setAttribute("aria-hidden", "true");
    eyebrow.append(line, document.createTextNode(" 0" + (index + 1)));
    const heading = document.createElement("h3");
    heading.textContent = title;
    const text = document.createElement("p");
    text.textContent = description;
    card.append(eyebrow, heading, text);
    fragment.append(card);
  });
  container.replaceChildren(fragment);
}

function renderDeliverables(container, deliverables) {
  const fragment = document.createDocumentFragment();
  deliverables.forEach((label, index) => {
    const column = document.createElement("div");
    column.className = "col-sm-6";
    const item = document.createElement("div");
    item.className = "deliverable";
    const icon = document.createElement("i");
    icon.className = "fa-solid " + deliverableIcons[index];
    icon.setAttribute("aria-hidden", "true");
    item.append(icon, document.createTextNode(label));
    column.append(item);
    fragment.append(column);
  });
  container.replaceChildren(fragment);
}

function renderService() {
  const page = document.querySelector("[data-service]");
  if (!page) return;
  const requestedService = new URLSearchParams(window.location.search).get("service");
  if (requestedService && serviceData[requestedService]) page.dataset.service = requestedService;
  const data = serviceData[page.dataset.service];
  if (!data) return;

  updateServiceSeo(page.dataset.service, data);
  document.querySelectorAll("[data-label]").forEach((element) => { element.textContent = data.label; });
  const title = document.querySelector("[data-title]");
  if (title) setHighlightedHeading(title, data.title);
  const intro = document.querySelector("[data-intro]");
  if (intro) intro.textContent = data.intro;

  const heroImage = document.querySelector("[data-hero-image]");
  if (heroImage) {
    heroImage.src = data.image;
    heroImage.alt = data.label + " by RR Solutions";
  }

  const video = document.querySelector("[data-video]");
  if (video) {
    video.dataset.src = data.video;
    video.poster = data.image;
  }

  const benefits = document.querySelector("[data-benefits]");
  if (benefits) renderBenefits(benefits, data.benefits);
  const deliverables = document.querySelector("[data-deliverables]");
  if (deliverables) renderDeliverables(deliverables, data.deliverables);
  document.querySelectorAll("[data-service-name]").forEach((element) => { element.textContent = data.label; });
}

function setupServiceVideo() {
  const trigger = document.querySelector("[data-video-trigger]");
  const modalElement = document.getElementById("watch");
  const video = document.querySelector("[data-video]");
  if (!trigger || !modalElement || !video || !window.bootstrap) return;

  const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
  trigger.addEventListener("click", () => {
    if (!video.getAttribute("src")) {
      video.src = video.dataset.src;
      video.load();
    }
    modal.show();
  });
  modalElement.addEventListener("hidden.bs.modal", () => {
    video.pause();
    video.currentTime = 0;
  });
}

setYear();
setupContactForms();
setupBackToTop();
renderService();
setupServiceVideo();
