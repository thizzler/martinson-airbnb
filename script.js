// ============================================
// MOBILE MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ============================================
// SMOOTH SCROLL WITH NAV OFFSET
// ============================================

const NAV_HEIGHT = 64;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#top') return; // let browser handle
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ============================================
// NAV ACTIVE STATES ON SCROLL
// ============================================

const navLinks = document.querySelectorAll('.nav__links a:not(.nav__cta)');
const sections = ['about', 'amenities', 'reviews', 'location', 'book'].map(id =>
  document.getElementById(id)
).filter(Boolean);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + NAV_HEIGHT + 40;

  let current = null;
  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.style.color = href === current ? 'var(--teal-deep)' : '';
    link.style.fontWeight = href === current ? '600' : '';
  });
}, { passive: true });

// ============================================
// NEWSLETTER FORM
// ============================================

const form = document.getElementById('newsletterForm');
const successMsg = document.getElementById('newsletterSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = form.querySelector('input[name="EMAIL"]');
  const fnameInput = form.querySelector('input[name="FNAME"]');
  const btn = form.querySelector('.newsletter__btn');

  const email = emailInput.value.trim();
  const fname = fnameInput ? fnameInput.value.trim() : '';

  if (!email) return;

  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  // ----------------------------------------------------------
  // MAILCHIMP INTEGRATION
  // Replace the action URL below with your Mailchimp list's
  // form POST URL. You can find this in:
  // Mailchimp → Audience → Signup forms → Embedded forms
  // The URL looks like:
  // https://yoursite.us1.list-manage.com/subscribe/post?u=XXX&id=YYY
  //
  // For now, this simulates success after a short delay.
  // ----------------------------------------------------------

  const MAILCHIMP_URL = ''; // <-- paste your Mailchimp URL here

  if (MAILCHIMP_URL) {
    try {
      // Mailchimp requires JSONP to avoid CORS — use a hidden iframe trick
      const url = MAILCHIMP_URL
        .replace('/post?', '/post-json?')
        + `&EMAIL=${encodeURIComponent(email)}`
        + `&FNAME=${encodeURIComponent(fname)}`
        + `&c=__mailchimp_callback`;

      const script = document.createElement('script');
      window.__mailchimp_callback = (data) => {
        if (data.result === 'success') {
          showSuccess();
        } else {
          btn.textContent = 'Try again';
          btn.disabled = false;
          console.error('Mailchimp error:', data.msg);
        }
        script.remove();
      };
      script.src = url;
      document.body.appendChild(script);
    } catch (err) {
      btn.textContent = 'Subscribe';
      btn.disabled = false;
    }
  } else {
    // No URL configured — simulate success (for dev/preview)
    await new Promise(r => setTimeout(r, 600));
    showSuccess();
  }

  function showSuccess() {
    form.querySelector('.newsletter__fields').style.opacity = '0.3';
    form.querySelector('.newsletter__fields').style.pointerEvents = 'none';
    successMsg.classList.add('show');
    btn.textContent = 'Subscribed!';
  }
});

// ============================================
// LAZY IMAGE LOADING FALLBACK
// ============================================

// If an Airbnb image fails (they sometimes do), swap to a teal placeholder
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.background = 'var(--bg-tint, #E8EEEE)';
    img.removeAttribute('src');
  });
});
