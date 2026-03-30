// =============================================
// DATA — Edit these arrays to update content
// =============================================

const projects = [
  {
    title: "Taxation Map",
    description:
      "Aplikasi pemetaan perpajakan interaktif yang dibangun untuk proyek kolaborasi dengan pemerintah. Menampilkan visualisasi data geospasial pajak daerah secara real-time.",
    techStack: ["React", "JavaScript", "API Integration"],
    githubUrl: "https://github.com/Nieruuu/react-map-cartenz",
    liveUrl: "",
    previewImage: "assets/projects/taxmap.png",
    featured: true,
  },
  {
    title: "Automation Pipeline",
    description:
      "Proyek DevOps automation menggunakan Python dan Docker untuk menyederhanakan alur deployment. (Proyek ini tidak bisa dishare karena ada ketentuan kerahasiaan dengan perusahaan magang saya, tapi saya bisa jelaskan detail teknisnya saat wawancara).",
    techStack: ["Python", "Docker"],
    githubUrl: "",
    liveUrl: "",
    previewImage: "assets/projects/automation.png",
    featured: true,
  },
  {
    title: "Blog Post Laravel",
    description:
      "Aplikasi blog sederhana yang memungkinkan pengguna untuk membuat, mengedit, dan menghapus postingan. Dibangun dengan Laravel dan Breeze untuk pengalaman interaktif tanpa reload halaman.",
    techStack: ["Laravel", "Breeze", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Nieruuu/blogwpu-belajarlaravel",
    liveUrl: "https://raflyblog.free.laravel.cloud",
    previewImage: "assets/projects/laravelblog.png",
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas real-time dengan fitur kolaborasi tim, drag-and-drop kanban board, dan notifikasi.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/rafly/task-manager",
    liveUrl: "",
    previewImage: "assets/projects/task-manager.png",
  },
];

const experiences = [
  {
    company: "Cartenz Technology Indonesia",
    role: "Fullstack Developer",
    period: "Agustus 2025 - November 2025",
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
    period: "2024 — Sekarang",
    description: [
      "Mengembangkan berbagai aplikasi web menggunakan Laravel dan React",
      "Mengimplementasikan CI/CD pipeline dengan GitHub Actions untuk automated testing dan deployment",
      "Menerapkan best practices dalam code review, version control, dan documentation",
    ],
    techStack: ["Laravel", "Livewire", "TypeScript", "Docker"],
  },
];

const skills = {
  languages: [
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
  ],
  frameworks: [
    { name: "Laravel", icon: "devicon-laravel-original colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "CodeIgniter", icon: "devicon-codeigniter-plain colored" },
    {
      name: "Livewire",
      icon: "svg",
      svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5z" fill="#fb503b"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fb503b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
  ],
  tools: [
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
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
  constructor(
    element,
    phrases,
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseTime = 2000,
  ) {
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
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
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

      // Check if skill uses inline SVG or Devicon
      const iconHtml = skill.svg
        ? skill.svg
        : `<i class="${skill.icon} text-3xl"></i>`;

      el.innerHTML = `
        ${iconHtml}
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
    card.className = `glass-card rounded-xl overflow-hidden flex flex-col justify-between reveal reveal-delay-${Math.min(i + 1, 4)}`;

    const badges = project.techStack
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    const githubBtn = project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-4 py-2 bg-slate-mid/50 hover:bg-slate-mid border border-slate-light/20 rounded-lg text-text-secondary hover:text-accent transition-all duration-200 text-sm font-medium"
           aria-label="View ${project.title} on GitHub">
           <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           <span>Buka di GitHub</span>
         </a>`
      : `<span class="inline-flex items-center gap-2 px-4 py-2 bg-slate-mid/30 border border-slate-light/10 rounded-lg text-text-muted/50 text-sm font-medium cursor-not-allowed">
           <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           <span>Private</span>
         </span>`;

    const websiteBtn = project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent-bright hover:text-accent transition-all duration-200 text-sm font-medium"
           aria-label="Visit website for ${project.title}">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 11-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 115.656 5.656l-1.5 1.5"/>
           </svg>
           <span>Visit Website</span>
         </a>`
      : "";

    const previewSection = `
      <div class="project-preview">
        <img
          src="${project.previewImage}"
          alt="Preview ${project.title}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.querySelector('.project-preview-placeholder').style.display='flex';"
        >
        <div class="project-preview-placeholder" style="display:none;">
          <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>preview coming soon</span>
        </div>
      </div>`;

    card.innerHTML = `
      ${previewSection}
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 class="font-heading text-lg font-semibold text-text-primary mb-3">${project.title}</h3>
          <p class="text-text-secondary text-sm leading-relaxed mb-5">${project.description}</p>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-wrap gap-2">${badges}</div>
          <div class="flex justify-end gap-3 flex-wrap">
            ${websiteBtn}
            ${githubBtn}
          </div>
        </div>
      </div>
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
          </li>`,
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
// PARTICLE CANVAS BACKGROUND
// =============================================

function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const PARTICLE_COUNT = 75;
  const MAX_DIST = 130;
  const SPEED = 0.28;
  const DOT_RADIUS = 1.4;
  // teal accent RGB
  const R = 20,
    G = 184,
    B = 166;

  let particles = [];
  let raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function spawn() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = SPEED * (0.5 + Math.random() * 0.8);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update positions & wrap
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      else if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      else if (p.y > canvas.height) p.y = 0;
    }

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.13;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw dots
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${R},${G},${B},0.28)`;
      ctx.fill();
    }

    raf = requestAnimationFrame(tick);
  }

  function start() {
    cancelAnimationFrame(raf);
    resize();
    spawn();
    tick();
  }

  start();
  window.addEventListener("resize", start);
}

// =============================================
// INIT
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // Particle background
  initParticleCanvas();

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
