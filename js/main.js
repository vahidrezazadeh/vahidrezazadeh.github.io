document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  links.classList.toggle('is-open');
});

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  });
});

document.addEventListener('click', (e) => {
  if (!toggle.contains(e.target) && !links.contains(e.target)) {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  }
});
