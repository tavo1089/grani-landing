// Modo noche
(function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  });
})();

// Comprime .logo-sub para que no sobrepase el ancho de .logo-main
function fitLogoSub() {
  var main = document.querySelector('.logo-main');
  var sub = document.querySelector('.logo-sub');
  if (main && sub) {
    sub.style.transform = '';
    var mainWidth = main.offsetWidth;
    var subWidth = sub.scrollWidth;
    if (subWidth > mainWidth) {
      var scale = mainWidth / subWidth;
      sub.style.transform = 'scaleX(' + scale + ')';
      sub.style.transformOrigin = 'left center';
    }
  }
}
window.addEventListener('DOMContentLoaded', fitLogoSub);
window.addEventListener('resize', fitLogoSub);
// Carousel
const cs = {};
function moveSlide(uid, dir) {
  const w = document.getElementById(uid);
  const sl = w.querySelectorAll('img'), dt = w.querySelectorAll('.c-dot');
  let c = cs[uid] || 0;
  sl[c].classList.remove('active'); dt[c].classList.remove('active');
  c = (c + dir + sl.length) % sl.length;
  cs[uid] = c;
  sl[c].classList.add('active'); dt[c].classList.add('active');
}
function setSlide(uid, i) {
  const w = document.getElementById(uid);
  const sl = w.querySelectorAll('img'), dt = w.querySelectorAll('.c-dot');
  let c = cs[uid] || 0;
  sl[c].classList.remove('active'); dt[c].classList.remove('active');
  cs[uid] = i; sl[i].classList.add('active'); dt[i].classList.add('active');
}
setInterval(() => {
  ['carousel-clasica','carousel-prote','carousel-choco','carousel-mantequilla'].forEach(id => {
    if(document.getElementById(id)) moveSlide(id,1);
  });
}, 3800);

// Ingredients
function toggleIng(btn) {
  const list = btn.nextElementSibling;
  const open = btn.classList.toggle('open');
  list.classList.toggle('show');
  btn.querySelector('.arr').textContent = open ? '×' : '+';
}

// Lightbox
function openLb(s) {
  document.getElementById('lb-img').src = s;
  document.getElementById('lb').classList.add('open');
}
function closeLb() { document.getElementById('lb').classList.remove('open'); }

function bindLightbox() {
  const lightbox = document.getElementById('lb');
  const closeButton = lightbox ? lightbox.querySelector('.lb-close') : null;

  document.querySelectorAll('.lb-trigger[data-lb-src]').forEach(item => {
    item.addEventListener('click', () => openLb(item.dataset.lbSrc));
  });

  if (closeButton) {
    closeButton.addEventListener('click', event => {
      event.stopPropagation();
      closeLb();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) closeLb();
    });
  }
}

// Mobile nav
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

function setNavOpen(isOpen) {
  if (!navToggle || !navMobile) return;
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  navMobile.classList.toggle('is-open', isOpen);
  navMobile.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  document.body.classList.toggle('nav-menu-open', isOpen);
}

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    setNavOpen(!navMobile.classList.contains('is-open'));
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setNavOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setNavOpen(false);
  });
}

bindLightbox();

// Scroll animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
  });
}, {threshold:0.08});
document.querySelectorAll('.product-card,.loc,.contact-card,.aval,.gi').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(16px)';
  el.style.transition='opacity 0.6s ease, transform 0.6s ease';
  obs.observe(el);
});
