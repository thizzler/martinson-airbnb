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
    const webp = photo.src.replace(/\.jpg$/i, '.webp');
    item.innerHTML =
      '<picture>' +
        '<source srcset="' + webp + '" type="image/webp">' +
        '<img src="' + photo.src + '" alt="' + (photo.alt || '') + '" loading="lazy">' +
      '</picture>' +
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

// Render guest reviews from the config file (content.js).
// The "X ago" text is generated from each review's stayDate.
const reviewsEl = document.querySelector('[data-reviews]');
const reviews = (window.SITE && window.SITE.reviews && Array.isArray(window.SITE.reviews.items))
  ? window.SITE.reviews.items : [];

// Turn a "YYYY-MM-DD" stay date into "1 week ago" / "3 months ago" etc.
function relativeTime(dateStr) {
  const then = new Date(dateStr);
  if (isNaN(then)) return '';
  const days = Math.floor((Date.now() - then.getTime()) / 86400000);
  if (days < 1)   return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7)   return days + ' days ago';
  if (days < 14)  return '1 week ago';
  if (days < 30)  return Math.floor(days / 7) + ' weeks ago';
  const months = Math.floor(days / 30);
  if (months < 12) return months <= 1 ? '1 month ago' : months + ' months ago';
  const years = Math.floor(days / 365);
  return years === 1 ? '1 year ago' : years + ' years ago';
}

// Build a star string like ★★★★★ / ★★★★☆ from a 1-5 rating.
function starString(n) {
  const s = Math.max(0, Math.min(5, Math.round(n || 5)));
  return '★★★★★'.slice(0, s) + '☆☆☆☆☆'.slice(0, 5 - s);
}

function escapeHTML(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

if (window.SITE && window.SITE.reviews && window.SITE.reviews.count != null) {
  document.querySelectorAll('[data-content="reviewsCount"]').forEach(el => {
    el.textContent = window.SITE.reviews.count;
  });
}

if (reviewsEl && reviews.length) {
  reviewsEl.innerHTML = '';
  reviews.forEach(r => {
    const when = relativeTime(r.stayDate);
    const meta = [when, r.location].filter(Boolean).join(' · ');
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML =
      '<div class="review-card__header">' +
        '<div class="review-card__avatar">' + escapeHTML((r.name || '?').charAt(0)) + '</div>' +
        '<div>' +
          '<div class="review-card__name">' + escapeHTML(r.name) + '</div>' +
          '<div class="review-card__meta">' + escapeHTML(meta) + '</div>' +
        '</div>' +
        '<div class="review-card__stars">' + starString(r.stars) + '</div>' +
      '</div>' +
      '<p class="review-card__text">' + escapeHTML(r.text) + '</p>';
    reviewsEl.appendChild(card);
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

// Newsletter form — posts to Mailchimp via JSONP (no backend, no redirect).
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');
const newsletterError = document.getElementById('newsletterError');

if (newsletterForm && newsletterSuccess) {
  const mc = (window.SITE && window.SITE.mailchimp) || null;
  const btn = newsletterForm.querySelector('button[type="submit"]');

  const showSuccess = () => {
    if (newsletterError) newsletterError.classList.remove('show');
    newsletterSuccess.classList.add('show');
    newsletterForm.reset();
  };
  const showError = msg => {
    if (!newsletterError) return;
    newsletterError.textContent = msg || 'Something went wrong. Please try again.';
    newsletterError.classList.add('show');
  };

  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();

    // No config yet — fall back to the optimistic success message.
    if (!mc || !mc.action) { showSuccess(); return; }

    if (btn) { btn.disabled = true; }
    if (newsletterError) newsletterError.classList.remove('show');

    const params = new URLSearchParams(new FormData(newsletterForm));
    if (mc.tag) params.append('tags', mc.tag);

    const cb = 'mcCallback_' + Date.now();
    params.append('c', cb);

    const script = document.createElement('script');
    const cleanup = () => {
      delete window[cb];
      script.remove();
      if (btn) btn.disabled = false;
    };

    window[cb] = resp => {
      cleanup();
      if (resp && resp.result === 'success') {
        showSuccess();
      } else {
        const raw = (resp && resp.msg) || '';
        if (/already subscribed|already a list member/i.test(raw)) {
          showSuccess(); // already on the list — treat as done
        } else {
          // Strip any HTML Mailchimp includes in its message.
          const clean = raw.replace(/<[^>]*>/g, '').replace(/^\d+\s*-\s*/, '').trim();
          showError(clean || 'Sorry, that didn\'t work. Please check your email and try again.');
        }
      }
    };

    script.src = mc.action.replace('/post?', '/post-json?') + '&' + params.toString();
    script.onerror = () => { cleanup(); showError(); };
    document.body.appendChild(script);
  });
}
