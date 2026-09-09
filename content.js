/* ============================================================
   THE SUNNY NEST — SITE CONTENT CONFIG
   ------------------------------------------------------------
   This is the ONE file to edit for everyday changes.
   You don't need to touch index.html for any of the below.

   • links   -> booking URLs (Airbnb / Vrbo), used everywhere
   • gallery -> the photo wall in "The Home" section
   • copy    -> editable text for the main sections
   ============================================================ */

window.SITE = {

  /* ---- Booking / listing links -------------------------------
     Change these two URLs and every "Book" button updates.
  ------------------------------------------------------------- */
  links: {
    airbnb: "https://www.airbnb.com/rooms/1526104999250906729",
    vrbo:   "https://www.vrbo.com/5193651"
  },

  /* ---- Photo gallery (masonry wall) --------------------------
     Reorder, add, or remove photos by editing this list — the
     order here is the order shown. To add a photo, drop the file
     in the images/ folder and add a line below.
       src     = path to the image (in the images/ folder)
       alt     = short description (accessibility / SEO)
       caption = text shown on hover + in the enlarged view
  ------------------------------------------------------------- */
  gallery: [
    { src: "images/exterior-front.jpg",  alt: "Front exterior with private gate", caption: "Fully fenced & private, steps from NNU" },
    { src: "images/primary-bedroom.jpg", alt: "Primary bedroom with king bed",    caption: "King bed \u00b7 cozy linens & Pendleton blanket" },
    { src: "images/patio.jpg",           alt: "Patio seating by the entrance",    caption: "Patio seating just outside the front door" },
    { src: "images/living-room.jpg",     alt: "The Sunny Nest street view",       caption: "Clean, modern exterior on a quiet street" },
    { src: "images/bedroom-2.jpg",       alt: "Second bedroom with queen bed",    caption: "Second bedroom \u00b7 warm textures & natural light" },
    { src: "images/interior.jpg",        alt: "Covered modern entry",             caption: "Covered entry with wood accents" },
    { src: "images/bedroom.jpg",         alt: "Front doorway",                    caption: "Wood-accented front entrance" }
  ],

  /* ---- Editable copy -----------------------------------------
     Change any wording here. You can use simple tags like
     <em>italic</em> or <br> for a line break.
     (Leave a value out and the built-in default text is used.)
  ------------------------------------------------------------- */
  copy: {
    heroBadge:    "Airbnb Guest Favorite - 5.0 \u00b7 18 reviews",
    heroHeadline: "Space to<br><em>breathe.</em>",
    heroSub:      "A boho-modern home in Nampa, Idaho - thoughtfully designed, fully private, and a short walk from downtown.",
    introSub:     "The kind of place that feels like yours from the moment you arrive. Quiet, private, and designed with real care.",
    aboutP1:      "Welcome to The Sunny Nest - a serene home away from home nestled next to Northwest Nazarene University. Thoughtfully designed with calming colors, boho textures, and cozy touches, this retreat is perfect for visiting parents, professionals, or anyone who needs a quiet place to land.",
    aboutP2:      "The property is mainly a one-level single family home, with the primary bedroom and bath on the second level. The yard is fully enclosed with fencing and gated access - genuinely private in the best way. String lights, a fire pit, and outdoor seating make the patio a place you'll actually use.",
    aboutP3:      "Downtown Nampa is a short walk. Boise is 20 miles. Bogus Basin ski resort is about an hour away.",
    bookTitle:    "Ready to <em>stay?</em>",
    bookSub:      "Check availability and book directly through Airbnb or Vrbo. Hosted by Garen - Superhost, 5.0 rating, responds within the hour."
  }

};
