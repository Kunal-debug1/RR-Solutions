const whatsappUrl = "https://wa.me/91YOUR_WHATSAPP_NUMBER?text=Hello%20RR%20Solutions%20I%20need%20a%20website";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");
const counterElements = document.querySelectorAll("[data-counter]");
let countersStarted = false;

const animateCounters = () => {
  if (countersStarted) return;
  countersStarted = true;

  counterElements.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const suffix = counter.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(update);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");

      if (entry.target.classList.contains("stats")) {
        animateCounters();
      }
    }
  });
}, {
  threshold: 0.16,
  rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((element) => observer.observe(element));

const stats = document.querySelector(".stats");
if (stats) {
  observer.observe(stats);
}

const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const previousButton = document.querySelector("[data-slider-prev]");
const nextButton = document.querySelector("[data-slider-next]");
let testimonialIndex = 0;
let sliderTimer;

const showTestimonial = (index) => {
  if (!testimonials.length) return;
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((testimonial, currentIndex) => {
    testimonial.classList.toggle("active", currentIndex === testimonialIndex);
  });
};

const startSlider = () => {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => {
    showTestimonial(testimonialIndex + 1);
  }, 5200);
};

if (testimonials.length) {
  showTestimonial(0);
  startSlider();
}

if (previousButton) {
  previousButton.addEventListener("click", () => {
    showTestimonial(testimonialIndex - 1);
    startSlider();
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showTestimonial(testimonialIndex + 1);
    startSlider();
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const initHero3d = async () => {
  const canvas = document.getElementById("hero3d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || reduceMotion) return;

  let THREE;
  try {
    THREE = await import("https://unpkg.com/three@0.164.1/build/three.module.js");
  } catch {
    canvas.style.display = "none";
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.2, 8.2);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const root = new THREE.Group();
  scene.add(root);

  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    emissive: 0x0b64ff,
    emissiveIntensity: 0.6,
    roughness: 0.22,
    metalness: 0.58
  });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 2), coreMaterial);
  root.add(core);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.34
  });

  const rings = [
    new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.012, 18, 160), ringMaterial),
    new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.01, 18, 180), ringMaterial.clone()),
    new THREE.Mesh(new THREE.TorusGeometry(3.72, 0.008, 18, 200), ringMaterial.clone())
  ];

  rings[0].rotation.x = Math.PI / 2.55;
  rings[1].rotation.y = Math.PI / 2.65;
  rings[2].rotation.x = Math.PI / 2.2;
  rings[2].rotation.z = Math.PI / 5;
  rings.forEach((ring, index) => {
    ring.material.opacity = 0.36 - index * 0.07;
    root.add(ring);
  });

  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.32,
    roughness: 0.38,
    metalness: 0.22
  });
  const nodeGeometry = new THREE.SphereGeometry(0.085, 18, 18);
  const nodeGroup = new THREE.Group();
  const points = [];
  const nodeCount = 34;

  for (let index = 0; index < nodeCount; index += 1) {
    const angle = (index / nodeCount) * Math.PI * 2;
    const band = index % 3;
    const radius = 2.25 + band * 0.55 + Math.sin(index * 1.7) * 0.18;
    const y = Math.sin(index * 0.92) * 1.18;
    const point = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    points.push(point);

    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.copy(point);
    nodeGroup.add(node);
  }

  const linePositions = [];
  points.forEach((point, index) => {
    const next = points[(index + 1) % points.length];
    const skip = points[(index + 7) % points.length];
    linePositions.push(point.x, point.y, point.z, next.x, next.y, next.z);
    if (index % 3 === 0) {
      linePositions.push(point.x, point.y, point.z, skip.x, skip.y, skip.z);
    }
  });

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(
    lineGeometry,
    new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.22
    })
  );
  nodeGroup.add(lines);
  root.add(nodeGroup);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlePositions = [];
  for (let index = 0; index < 110; index += 1) {
    particlePositions.push(
      (Math.random() - 0.5) * 9,
      (Math.random() - 0.5) * 5.2,
      (Math.random() - 0.5) * 5.5
    );
  }
  particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.025,
      transparent: true,
      opacity: 0.62
    })
  );
  scene.add(particles);

  scene.add(new THREE.AmbientLight(0xffffff, 1.35));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
  keyLight.position.set(3.5, 4, 5);
  scene.add(keyLight);
  const cyanLight = new THREE.PointLight(0x06b6d4, 15, 9);
  cyanLight.position.set(-3.5, 1.4, 2.5);
  scene.add(cyanLight);

  const pointer = { x: 0, y: 0 };
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.36;
    pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.28;
  }, { passive: true });

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(bounds.width));
    const height = Math.max(1, Math.floor(bounds.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    root.scale.setScalar(width < 520 ? 0.76 : 1);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });

  const clock = new THREE.Clock();
  const animate = () => {
    const elapsed = clock.getElapsedTime();
    root.rotation.y = elapsed * 0.18 + pointer.x;
    root.rotation.x = Math.sin(elapsed * 0.35) * 0.08 - pointer.y;
    core.rotation.x = elapsed * 0.38;
    core.rotation.y = elapsed * 0.52;
    nodeGroup.rotation.y = -elapsed * 0.08;
    particles.rotation.y = elapsed * 0.025;
    rings[0].rotation.z = elapsed * 0.32;
    rings[1].rotation.x = Math.PI / 2.65 + elapsed * 0.18;
    rings[2].rotation.y = elapsed * -0.22;
    renderer.render(scene, camera);
    canvas.dataset.rendered = "true";
    requestAnimationFrame(animate);
  };

  animate();
};

initHero3d();
