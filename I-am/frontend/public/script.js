// === Interactive Random Quote Box ===
const quotes = [
  "The best way to get started is to quit talking and begin doing. — Walt Disney",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Opportunities don't happen. You create them.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "If you want to lift yourself up, lift up someone else.",
  "The future depends on what you do today. — Mahatma Gandhi",
  "Believe you can and you're halfway there.",
  "Your time is limited, don't waste it living someone else's life. — Steve Jobs"
];

function setRandomQuote() {
  const quoteText = document.getElementById('quote-text');
  if (!quoteText) return;
  const idx = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[idx];
}

window.addEventListener('DOMContentLoaded', () => {
  setRandomQuote();
  const btn = document.getElementById('new-quote-btn');
  if (btn) btn.addEventListener('click', setRandomQuote);
});
// ===== MODERN PORTFOLIO SCRIPT =====

// Enhanced particles animation with multiple effects
function createSimpleParticles() {
  console.log('Creating particles...');
  
  // Create particles container if it doesn't exist
  let particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) {
    console.log('Creating particles container...');
    particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '10';  // Tăng z-index
    particlesContainer.style.background = 'transparent';
    document.body.appendChild(particlesContainer);
  }
  
  console.log('Particles container found/created:', particlesContainer);
  
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '10';  // Tăng z-index
  canvas.style.background = 'transparent';
  
  particlesContainer.innerHTML = '';
  particlesContainer.appendChild(canvas);
  
  console.log('Canvas created and added to container');
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: 0, y: 0 };
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.7 ? '#64ffda' : '#8892b0',
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2
    };
  }
  
  function initParticles() {
    particles = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
  }
  
  // Mouse tracking for interaction
  canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = (120 - distance) / 120 * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      // Mouse interaction
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        particle.vx += dx * force * 0.0003;
        particle.vy += dy * force * 0.0003;
      }
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Boundary collision with bounce
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
      
      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Pulsing effect
      particle.pulsePhase += particle.pulseSpeed;
      const pulseFactor = 1 + Math.sin(particle.pulsePhase) * 0.3;
      const currentSize = particle.size * pulseFactor;
      const currentOpacity = particle.opacity * (0.7 + Math.sin(particle.pulsePhase) * 0.3);
      
      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
      
      // Glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 3
      );
      gradient.addColorStop(0, particle.color === '#64ffda' 
        ? `rgba(100, 255, 218, ${currentOpacity})` 
        : `rgba(136, 146, 176, ${currentOpacity})`);
      gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Core particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = particle.color === '#64ffda' 
        ? `rgba(100, 255, 218, ${currentOpacity * 1.5})` 
        : `rgba(136, 146, 176, ${currentOpacity * 1.5})`;
      ctx.fill();
    });
    
    // Draw connections between particles
    drawConnections();
    
    requestAnimationFrame(animateParticles);
  }
  
  resizeCanvas();
  initParticles();
  animateParticles();
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
}

// Global variables
let profile = {};
let currentSection = 'hero';

// DOM elements
const elements = {
  name: document.getElementById('name'),
  typingText: document.getElementById('typing-text'),
  heroDescription: document.getElementById('hero-description'),
  profileImg: document.getElementById('profile-img'),
  githubLink: document.getElementById('github-link'),
  linkedinLink: document.getElementById('linkedin-link'),
  emailLink: document.getElementById('email-link'),
  summaryText: document.getElementById('summary-text'),
  techGrid: document.getElementById('tech-grid'),
  timeline: document.getElementById('timeline'),
  projectsGrid: document.getElementById('projects-grid'),
  contactDescription: document.getElementById('contact-description'),
  emailContact: document.getElementById('email-contact'),
  emailValue: document.getElementById('email-value'),
  footerText: document.getElementById('footer-text')
};

// Custom cursor removed for performance optimization


// Typing animation for hero section
function initTypingAnimation() {
  const words = [
    "Backend Developer",
    "Cloud Engineer", 
    "DevOps Enthusiast",
    "Electronics and Telecommunications Student"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentWord = words[wordIndex];
    const typingElement = elements.typingText;
    
    if (!typingElement) return;
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
  }
  
  typeWriter();
}

// Navigation scroll spy
function initScrollSpy() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === current) {
        item.classList.add('active');
      }
    });
    
    currentSection = current;
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

// Smooth scroll for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Reveal animation on scroll
function initRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}


// Render functions
function renderProfile(data) {
  profile = data;
  
  // Basic info
  if (elements.name) elements.name.textContent = data.name || 'Tran Tuan Tu';
  if (elements.heroDescription) {
    elements.heroDescription.textContent = data.summary || 'Building scalable backend systems and exploring cloud technologies';
  }
  
  // Avatar
  if (elements.profileImg) {
    elements.profileImg.src = 'img/avatar.png';
    elements.profileImg.alt = data.name || 'Profile Picture';
  }
  
  // Social links
  if (elements.githubLink && data.github) {
    elements.githubLink.href = `https://github.com/${data.github}`;
  }
  if (elements.linkedinLink && data.linkedin) {
    elements.linkedinLink.href = `https://www.linkedin.com/in/${data.linkedin}`;
  }
  if (elements.emailLink && data.email) {
    elements.emailLink.href = `mailto:${data.email}`;
  }
  
  // About section
  if (elements.summaryText) {
    elements.summaryText.textContent = data.summary || 'Loading...';
  }
  
  // Tech stack
  renderTechStack();
  
  // Timeline (Experience + Education)
  renderTimeline(data);
  
  // Projects
  renderProjects(data.projects || []);
  
  // Contact
  if (elements.emailContact && data.email) {
    elements.emailContact.href = `mailto:${data.email}`;
  }
  if (elements.emailValue) {
    elements.emailValue.textContent = data.email || 'Loading...';
  }
  
  // Footer
  if (elements.footerText) {
    elements.footerText.textContent = `Designed & Built by ${data.name || 'Tran Tuan Tu'}`;
  }
}

function renderTechStack() {
  const techStack = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'MongoDB', icon: 'fas fa-database' }
  ];
  
  if (elements.techGrid) {
    elements.techGrid.innerHTML = techStack.map(tech => `
      <div class="tech-item">
        <i class="${tech.icon}"></i>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }
}

function renderTimeline(data) {
  if (!elements.timeline) return;
  
  const items = [];
  
  // Add experience
  if (data.experience) {
    data.experience.forEach(exp => {
      items.push({
        type: 'experience',
        title: exp.title,
        company: exp.company,
        date: exp.date,
        details: exp.details || []
      });
    });
  }
  
  // Add education
  if (data.education) {
    data.education.forEach(edu => {
      items.push({
        type: 'education',
        title: edu.school,
        company: edu.degree,
        date: edu.date,
        details: edu.details || []
      });
    });
  }
  
  elements.timeline.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-header">
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-company">${item.company}</div>
        <span class="timeline-date">${item.date}</span>
      </div>
      ${item.details.length > 0 ? `
        <ul class="timeline-details">
          ${item.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
}

function renderProjects(projects) {
  if (!elements.projectsGrid) return;
  
  elements.projectsGrid.innerHTML = projects.map(project => {
    // Only show GitHub button if github or link is github
  let githubUrl = project.github;
  // If github is not present, do not show button (no fallback to link)
  let liveUrl = project.link && (!project.link.includes('github.com') || (project.github && project.github !== project.link)) ? project.link : '';
    return `
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-links">
          ${liveUrl ? `
            <a href="${liveUrl}" class="project-link" target="_blank" rel="noopener" title="View Live">
              <i class="fas fa-external-link-alt"></i>
            </a>
          ` : ''}
          ${githubUrl ? `
            <a href="${githubUrl}" class="project-link" target="_blank" rel="noopener" title="View on GitHub">
              <i class="fab fa-github"></i>
            </a>
          ` : ''}
        </div>
      </div>
      <p class="project-description">${project.desc || ''}</p>
      <div class="project-tech">
        ${(project.tools || []).map(tool => `<span class="tech-tag">${tool}</span>`).join('')}
      </div>
    </div>
    `;
  }).join('');
}

// Main initialization
// Run theme toggle logic as soon as possible

async function init() {
  try {
    // Initialize UI components
    createSimpleParticles();
    initTypingAnimation();
    initScrollSpy();
    initSmoothScroll();
    initRevealAnimation();
    // Fetch and render profile data
    const response = await fetch('/api/profile');
    if (response.ok) {
      const data = await response.json();
      renderProfile(data);
    } else {
      throw new Error('Failed to fetch profile data');
    }
  } catch (error) {
    console.warn('Using fallback data:', error.message);
    // Fallback data
    const fallbackData = {
      name: "Tran Tuan Tu",
      email: "trantuantu2004@gmail.com",
      github: "ngaiTu29s1",
      linkedin: "tuantu102",
      summary: "Final-year Electronics and Telecommunications Engineering student at HUST with strong academic performance and a demonstrated focus on backend software development.",
      experience: [
        {
          title: "Backend Developer Intern",
          company: "HENO TECH CORP",
          date: "Jul 2025 – Present",
          details: [
            "Developed microservices for fintech platform using NestJS and TypeScript",
            "Implemented authentication and transaction processing services",
            "Containerized services with Docker for consistent deployment"
          ]
        }
      ],
      education: [
        {
          school: "Hanoi University of Science and Technology (HUST)",
          degree: "B.Eng — Electronics & Telecommunications",
          date: "Sept 2022 – Present",
          details: ["GPA: 3.35/4.0"]
        }
      ],
      projects: [
        {
          title: "Smart Storage IoT System",
          desc: "Team backend lead for IoT system with real-time sensor processing",
          tools: ["Flask", "MQTT", "SQLAlchemy", "Docker"],
          link: "https://github.com/SIC-HUST-IOT02-Team-5/Website",
          github: "https://github.com/SIC-HUST-IOT02-Team-5/Website"
        },
        {
          title: "Self-Hosting Server (Homelab)",
          desc: "Personal server deployment with Pi-hole, Nextcloud, and Portainer",
          tools: ["Debian", "Docker", "Nginx", "SSH"],
          link: "https://github.com/ngaiTu29s1/homelab",
          github: "https://github.com/ngaiTu29s1/homelab"
        }
      ]
    };
    renderProfile(fallbackData);
  }
}

// Start when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
