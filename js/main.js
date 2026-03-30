// =============================================
// DATA — Edit these arrays to update content
// =============================================

const projects = [
  {
    title: "Taxation Map",
    description:
      "Aplikasi pemetaan perpajakan interaktif yang dibangun untuk proyek kolaborasi dengan pemerintah. Menampilkan visualisasi data geospasial pajak daerah secara real-time.",
    techStack: ["React", "JavaScript", "API Integration", "Leaflet"],
    githubUrl: "https://github.com/rafly/taxation-map",
    featured: true,
  },
  {
    title: "Automation Pipeline",
    description:
      "Proyek DevOps automation menggunakan Python dan Docker untuk menyederhanakan alur deployment. Mengintegrasikan CI/CD pipeline dengan GitHub Actions.",
    techStack: ["Python", "Docker", "CI/CD", "GitHub Actions"],
    githubUrl: "https://github.com/rafly/automation-pipeline",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce fullstack dengan fitur cart, payment gateway, dan admin dashboard. Dibangun dengan arsitektur MVC yang clean.",
    techStack: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/rafly/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas real-time dengan fitur kolaborasi tim, drag-and-drop kanban board, dan notifikasi.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/rafly/task-manager",
  },
];

const experiences = [
  {
    company: "Government Collaboration Project",
    role: "DevOps & Automation Intern",
    period: "2024 — 2025",
    description: [
      "Merancang dan mengembangkan automation pipeline menggunakan Python dan Docker untuk efisiensi proses deployment",
      "Membangun aplikasi Taxation Map berbasis React untuk visualisasi data perpajakan daerah",
      "Berkolaborasi langsung dengan stakeholder pemerintah dalam delivery proyek dan iterasi feedback",
    ],
    techStack: ["Python", "Docker", "React", "JavaScript", "Git"],
  },
  {
    company: "Freelance & Personal Projects",
    role: "Fullstack Web Developer",
    period: "2023 — Present",
    description: [
      "Mengembangkan berbagai aplikasi web menggunakan Laravel dan React untuk klien lokal",
      "Mengimplementasikan CI/CD pipeline dengan GitHub Actions untuk automated testing dan deployment",
      "Menerapkan best practices dalam code review, version control, dan documentation",
    ],
    techStack: ["Laravel", "React", "TypeScript", "GitHub Actions", "Docker"],
  },
];

const skills = {
  languages: [
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
  ],
  frameworks: [
    { name: "Laravel", icon: "devicon-laravel-original" },
    { name: "React", icon: "devicon-react-original" },
    { name: "CodeIgniter", icon: "devicon-codeigniter-plain" },
    { name: "Livewire", icon: "devicon-livewire-original" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  ],
  tools: [
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub Actions", icon: "devicon-githubactions-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
  ],
};

// =============================================
// TYPING EFFECT
// =============================================

const typingPhrases = [
  "Fullstack Web Developer",
  "DevOps Enthusiast",
  "Problem Solver",
];

class TypingEffect {
  constructor(element, phrases, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
    this.element = element;
    this.phrases = phrases;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.pauseTime = pauseTime;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    // Build visible text + cursor
    const visibleText = currentPhrase.substring(0, this.charIndex);
    this.element.innerHTML = `${visibleText}<span class="typing-cursor"></span>`;

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 400;
    }

    setTimeout(() => this.tick(), delay);
  }
}

// =============================================
// SCROLL REVEAL (Intersection Observer)
// =============================================

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

// =============================================
// NAVBAR
// =============================================

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu on link click
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileMenu.classList.add("hidden");
    });
  });
}

// =============================================
// RENDER SKILLS
// =============================================

function renderSkills() {
  const containers = {
    languages: document.getElementById("skills-languages"),
    frameworks: document.getElementById("skills-frameworks"),
    tools: document.getElementById("skills-tools"),
  };

  Object.entries(skills).forEach(([category, items]) => {
    const container = containers[category];
    if (!container) return;

    items.forEach((skill, i) => {
      const el = document.createElement("div");
      el.className = `skill-item flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-light/10 bg-slate-mid/20 reveal-delay-${Math.min(i + 1, 6)}`;
      el.innerHTML = `
        <i class="${skill.icon} text-3xl text-text-secondary"></i>
        <span class="text-xs font-mono text-text-muted">${skill.name}</span>
      `;
      container.appendChild(el);
    });
  });
}

// =============================================
// RENDER PROJECTS
// =============================================

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach((project, i) => {
    const card = document.createElement("article");
    card.className = `glass-card rounded-xl p-6 flex flex-col justify-between reveal reveal-delay-${Math.min(i + 1, 4)}`;

    const badges = project.techStack
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    card.innerHTML = `
      <div>
        <div class="flex items-start justify-between mb-4">
          <h3 class="font-heading text-xl font-semibold text-text-primary">${project.title}</h3>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-accent transition-colors flex-shrink-0 ml-4" aria-label="View ${project.title} on GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <p class="text-text-secondary text-sm leading-relaxed mb-5">${project.description}</p>
      </div>
      <div class="flex flex-wrap gap-2">${badges}</div>
    `;

    grid.appendChild(card);
  });
}

// =============================================
// RENDER EXPERIENCE (Timeline)
// =============================================

function renderExperience() {
  const timeline = document.getElementById("experience-timeline");

  // Add the vertical line
  const line = document.createElement("div");
  line.className = "timeline-line";
  timeline.classList.add("relative");
  timeline.appendChild(line);

  experiences.forEach((exp, i) => {
    const isEven = i % 2 === 0;
    const entry = document.createElement("div");
    entry.className = `relative pl-12 md:pl-0 pb-14 last:pb-0 reveal reveal-delay-${Math.min(i + 1, 4)}`;

    const techBadges = exp.techStack
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    const bullets = exp.description
      .map(
        (desc) =>
          `<li class="flex items-start gap-2">
            <span class="text-accent mt-1.5 flex-shrink-0">&#8250;</span>
            <span>${desc}</span>
          </li>`
      )
      .join("");

    entry.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="md:w-[45%] ${isEven ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"}">
        <div class="glass-card rounded-xl p-6">
          <span class="font-mono text-xs text-accent">${exp.period}</span>
          <h3 class="font-heading text-lg font-semibold text-text-primary mt-1">${exp.role}</h3>
          <p class="text-text-muted text-sm mb-3">${exp.company}</p>
          <ul class="text-text-secondary text-sm space-y-2 mb-4">${bullets}</ul>
          <div class="flex flex-wrap gap-2">${techBadges}</div>
        </div>
      </div>
    `;

    timeline.appendChild(entry);
  });
}

// =============================================
// INIT
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const typedEl = document.getElementById("typed-text");
  if (typedEl) {
    new TypingEffect(typedEl, typingPhrases);
  }

  // Render dynamic content
  renderSkills();
  renderProjects();
  renderExperience();

  // Init interactions
  initNavbar();
  initScrollReveal();
});
