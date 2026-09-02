// Offset anchor scrolling to account for sticky nav
document.querySelectorAll('.concept-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// Highlight active concept in nav as user scrolls
const sections = document.querySelectorAll('.concept[id]');
const navLinks = document.querySelectorAll('.concept-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#fff' : '#888';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));