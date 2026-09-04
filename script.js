// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close the menu after tapping a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Newsletter form — show success state, no backend
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');

if (newsletterForm && newsletterSuccess) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    newsletterSuccess.classList.add('show');
    newsletterForm.reset();
  });
}
