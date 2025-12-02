// Detect mobile device
const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;

// Particles Background - fewer particles on mobile for performance
particlesJS('particles', {
  particles: {
    number: { value: isMobile ? 40 : 80, density: { enable: true, value_area: 800 } },
    color: { value: '#a855f7' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: isMobile ? 2 : 3, random: true },
    line_linked: { enable: true, distance: isMobile ? 120 : 150, color: '#a855f7', opacity: 0.3, width: 1 },
    move: { enable: true, speed: isMobile ? 1.5 : 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { 
      onhover: { enable: !isMobile, mode: 'repulse' }, 
      onclick: { enable: true, mode: 'push' } 
    },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: isMobile ? 2 : 4 } }
  },
  retina_detect: true
});

// Glowing Cursor Follower - only on desktop
const cursor = document.querySelector('.cursor');
if (cursor && !isMobile) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.setProperty('--scroll-width', scrolled + '%');
  }
});

// Smooth Reveal Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('li').forEach((li, i) => {
  li.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(li);
});

// Remove typing cursor after animation
setTimeout(() => {
  const title = document.querySelector('.title');
  if (title) {
    title.style.borderRight = 'none';
  }
}, 4500);
