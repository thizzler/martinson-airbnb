// Apply editable copy from the config file (content.js).
// Any element with data-content="key" gets its text from
// window.SITE.copy[key]. The HTML keeps default text as a
// fallback, so the page still reads fine if JS is disabled.
if (window.SITE && window.SITE.copy) {
  document.querySelectorAll('[data-content]').forEach(el => {
    const val = window.SITE.copy[el.dataset.content];
    if (val != null) el.innerHTML = val;
  });
}

// Wire booking links from the config file (content.js)
// Any element with data-book="airbnb" or data-book="vrbo"
// gets its href from window.SITE.links — edit URLs in one place.
if (window.SITE && window.SITE.links) {
  document.querySelectorAll('[data-book]').forEach(a => {
    const url = window.SITE.links[a.dataset.book];
    if (url) a.setAttribute('href', url);
  });
}

// Render the photo gallery (masonry wall) from the config file.
const galleryEl = document.querySelector('[data-gallery]');
const photos = (window.SITE && Array.isArray(window.SITE.gallery)) ? window.SITE.gallery : [];

if (galleryEl && photos.length) {
  photos.forEach((photo, i) => {
    const item = document.createElement('button');
    item.className = 'gallery__item';
    item.type = 'button';
    item.setAttribute('aria-label', 'View photo: ' + (photo.caption || photo.alt || ''));
    item.dataset.index = i;
    item.innerHTML =
      '<img src="' + photo.src + '" alt="' + (photo.alt || '') + '" loading="lazy">' +
      (photo.caption ? '<span class="gallery__caption">' + photo.caption + '</span>' : '');
    galleryEl.appendChild(item);
  });

  // Lightbox behavior
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightboxImg');
  const lbCaption  = document.getElementById('lightboxCaption');
  const lbClose    = document.getElementById('lightboxClose');
  const lbPrev     = document.getElementById('lightboxPrev');
  const lbNext     = document.getElementById('lightboxNext');
  let current = 0;

  const showPhoto = i => {
    current = (i + photos.length) % photos.length;
    const p = photos[current];
    lbImg.src = p.src;
    lbImg.alt = p.alt || '';
    lbCaption.textContent = p.caption || '';
  };
  const openLightbox = i => {
    showPhoto(i);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryEl.querySelectorAll('.gallery__item').forEach(item => {
    item.addEventListener('click', () => openLightbox(Number(item.dataset.index)));
  });
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => showPhoto(current - 1));
  lbNext.addEventListener('click', () => showPhoto(current + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(current - 1);
    if (e.key === 'ArrowRight') showPhoto(current + 1);
  });
}

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
