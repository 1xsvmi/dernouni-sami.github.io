// Particles
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80},
    "color": {"value": "#a855f7"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5},
    "size": {"value": 3},
    "line_linked": {"enable": true, "distance": 150, "color": "#a855f7", "opacity": 0.4, "width": 1},
    "move": {"enable": true, "speed": 2}
  },
  "interactivity": {
    "events": {"onhover": {"enable": true, "mode": "repulse"}}
  }
});

// Glowing Cursor
document.addEventListener('mousemove', (e) => {
  document.querySelector('.cursor').style.left = e.clientX + 'px';
  document.querySelector('.cursor').style.top = e.clientY + 'px';
});
