const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});


// Make every project card clickable while keeping the arrow link accessible.
document.querySelectorAll('.project-card[data-url]').forEach(card => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
    }
  });
});
