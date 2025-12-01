// Particles Background
particlesJS('particles', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#a855f7' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#a855f7', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Glowing Cursor Follower
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.querySelector('.scroll-progress::after').style.width = scrolled + '%';
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
  document.querySelector('.title').style.borderRight = 'none';
}, 4500);
