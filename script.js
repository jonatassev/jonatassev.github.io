// ===== i18n Translation System =====
const translations = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Administrador de Sistemas & Entusiasta Linux",
    "hero.description": "Apaixonado por infraestrutura, automação e tecnologias open-source. Focado em soluções robustas com Red Hat, containers e cloud.",
    "hero.btnProjects": "Ver Projetos",
    "hero.btnContact": "Fale Comigo",
    "hero.certOutput": "RHCSA (em preparação)",

    // About
    "about.title": "Sobre Mim",
    "about.text1": 'Sou um profissional de TI focado em administração de sistemas Linux e infraestrutura. Atualmente me preparando para a certificação <strong>RHCSA (EX200)</strong>, aprofundando meus conhecimentos em RHEL 9, automação e boas práticas de administração.',
    "about.text2": "Acredito que a melhor forma de aprender é praticando e compartilhando conhecimento. Por isso, documento meus estudos e projetos aqui.",

    // Skills
    "skills.automation": "Automação",
    "skills.security": "Segurança",

    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "Alguns dos meus trabalhos e estudos",

    // Filters
    "filter.all": "Todos",
    "filter.study": "Estudos",
    "filter.infra": "Infraestrutura",
    "filter.automation": "Automação",

    // Project cards
    "project1.title": "Guia de Preparação RHCSA",
    "project1.desc": "Livro digital completo de estudo e preparação para a certificação Red Hat Certified System Administrator (RHCSA) — EX200, baseado no RHEL 9.",
    "project2.desc": "Configuração de laboratório doméstico para prática de administração de sistemas, virtualização e networking.",
    "project3.desc": "Coleção de playbooks Ansible para automação de tarefas comuns de administração de servidores Linux.",
    "project4.desc": "Exemplos práticos de containerização com Docker e Podman, incluindo Dockerfiles otimizados e compose files.",

    // Tags
    "tag.certification": "Certificação",
    "tag.virtualization": "Virtualização",
    "tag.automation": "Automação",

    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vamos conversar? Entre em contato comigo",
    "contact.linkedin": "Conecte-se comigo",
    "contact.email": "Envie uma mensagem",

    // Footer
    "footer.text": "© 2026 Jonatas. Feito com ☕ e Linux."
  },

  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "System Administrator & Linux Enthusiast",
    "hero.description": "Passionate about infrastructure, automation and open-source technologies. Focused on robust solutions with Red Hat, containers and cloud.",
    "hero.btnProjects": "View Projects",
    "hero.btnContact": "Get in Touch",
    "hero.certOutput": "RHCSA (in preparation)",

    // About
    "about.title": "About Me",
    "about.text1": 'I\'m an IT professional focused on Linux system administration and infrastructure. Currently preparing for the <strong>RHCSA (EX200)</strong> certification, deepening my knowledge in RHEL 9, automation and administration best practices.',
    "about.text2": "I believe the best way to learn is by practicing and sharing knowledge. That's why I document my studies and projects here.",

    // Skills
    "skills.automation": "Automation",
    "skills.security": "Security",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Some of my work and studies",

    // Filters
    "filter.all": "All",
    "filter.study": "Studies",
    "filter.infra": "Infrastructure",
    "filter.automation": "Automation",

    // Project cards
    "project1.title": "RHCSA Preparation Guide",
    "project1.desc": "Complete digital study book for the Red Hat Certified System Administrator (RHCSA) — EX200 certification, based on RHEL 9.",
    "project2.desc": "Home lab setup for practicing system administration, virtualization and networking.",
    "project3.desc": "Collection of Ansible playbooks for automating common Linux server administration tasks.",
    "project4.desc": "Practical containerization examples with Docker and Podman, including optimized Dockerfiles and compose files.",

    // Tags
    "tag.certification": "Certification",
    "tag.virtualization": "Virtualization",
    "tag.automation": "Automation",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk? Get in touch with me",
    "contact.linkedin": "Connect with me",
    "contact.email": "Send a message",

    // Footer
    "footer.text": "© 2026 Jonatas. Made with ☕ and Linux."
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update toggle button
  const flag = document.querySelector('#langToggle .lang-flag');
  const label = document.querySelector('#langToggle .lang-label');
  if (lang === 'pt') {
    flag.textContent = '🇺🇸';
    label.textContent = 'EN';
  } else {
    flag.textContent = '🇧🇷';
    label.textContent = 'PT';
  }
}

// Init language on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

// Toggle button
document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile menu toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Project filter tabs =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter cards
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== Fade-in on scroll (Intersection Observer) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe project cards and skill cards
document.querySelectorAll('.project-card, .skill-card, .contact-card').forEach(el => {
  observer.observe(el);
});
