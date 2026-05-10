// Scroll animations via IntersectionObserver
document.body.classList.add('js-loaded');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // Close mobile nav if open
      document.querySelector('nav').classList.remove('open');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile nav toggle
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('nav');
if (toggle) {
  toggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
}
