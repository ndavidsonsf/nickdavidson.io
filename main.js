// nickdavidson.io — progressive enhancement only.
// Everything below is optional; the page reads fine without it.
document.body.classList.add('js-loaded');

// Reveal on scroll
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

// Study ledger — hover (or focus/tap) a stop, the panel rewrites
var stops = Array.prototype.slice.call(document.querySelectorAll('.stop'));
var panel = document.querySelector('.panel');
if (panel && stops.length) {
  var show = function (stop) {
    stops.forEach(function (s) { s.setAttribute('aria-current', String(s === stop)); });
    panel.querySelector('.when').textContent = stop.querySelector('.when').textContent;
    panel.querySelector('h4').textContent = stop.dataset.place;
    panel.querySelector('.label').textContent = stop.dataset.label;
    panel.querySelector('p').textContent = stop.querySelector('.stop-note').textContent;
  };
  stops.forEach(function (stop) {
    stop.addEventListener('mouseenter', function () { show(stop); });
    stop.addEventListener('focus', function () { show(stop); });
    stop.addEventListener('click', function () { show(stop); });
  });
}

// Mobile index toggle
var toggle = document.querySelector('.nav-toggle');
var folio = document.querySelector('.folio');
if (toggle && folio) {
  toggle.addEventListener('click', function () {
    var open = folio.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  folio.querySelectorAll('.folio-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      folio.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
