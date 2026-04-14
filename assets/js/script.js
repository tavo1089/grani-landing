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

// Scroll animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
  });
}, {threshold:0.08});
nt.querySelectorAll('.product-card,.loc,.contact-card,.aval,.gi').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(16px)';
  el.style.transition='opacity 0.6s ease, transform 0.6s ease';
  obs.observe(el);
});
