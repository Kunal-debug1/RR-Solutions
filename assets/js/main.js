function redirectLegacyServiceUrls() {
  const legacyServices = Object.freeze({
    ecommerce: "/ecommerce-solutions",
    software: "/custom-software-development",
    ai: "/ai-automation",
    marketing: "/digital-marketing",
    support: "/support-maintenance"
  });
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const legacyPage = currentPath === "/website-development" || currentPath === "/website-development.html";
  const requested = new URLSearchParams(window.location.search).get("service");
  if (legacyPage && requested && legacyServices[requested]) {
    window.location.replace(legacyServices[requested]);
  }
}

function setYear() {
  document.querySelectorAll("#year").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
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
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
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

redirectLegacyServiceUrls();
setYear();
setupContactForms();
setupBackToTop();
setupServiceVideo();
