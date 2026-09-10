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
    { src: "images/room-1.jpg",          alt: "King bedroom",        caption: "King bed with cozy Southwestern throw" },
    { src: "images/living-area-2.jpg",    alt: "Living and kitchen",  caption: "Open-plan living & kitchen bar" },
    { src: "images/private-kitchen-1.jpg",alt: "Kitchen",             caption: "Fully equipped modern kitchen" },
    { src: "images/terrace-patio-1.jpg",  alt: "Evening patio",       caption: "Patio glow \u00b7 string lights & fire pit" },
    { src: "images/bathroom-2.jpg",       alt: "Bathroom",            caption: "Spa-style bath with soaking tub" },
    { src: "images/dining-1.jpg",         alt: "Dining nook",         caption: "Sunny dining nook & breakfast bar" },
    { src: "images/room-3.jpg",           alt: "Second bedroom",      caption: "Second bedroom \u00b7 restful & bright" },
    { src: "images/terrace-patio-3.jpg",  alt: "Fire pit lounge",     caption: "Fire pit & lounge seating" },
    { src: "images/interior-1.jpg",       alt: "Staircase",           caption: "Modern staircase to the primary suite" },
    { src: "images/living-area-5.jpg",    alt: "Living room",         caption: "Living room with smart TV" },
    { src: "images/exterior-3.jpg",       alt: "Exterior",            caption: "Fully fenced & private, steps from NNU" },
    { src: "images/exterior-detail-1.jpg",alt: "Front entry",         caption: "Modern wood-accented entry" }
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
  },

  /* ---- Guest reviews -----------------------------------------
     The overall 5.0 score + gold stars are fixed in the design.
     Everything below is editable:
       count -> the "X reviews" line under the score
       items -> each guest review card
         name     = guest's first name
         stars    = star rating 1-5 (shows filled/empty stars)
         stayDate = when they stayed, "YYYY-MM-DD".
                    The "1 week ago" text is generated from this.
         location = their hometown (optional; leave "" to hide)
         text     = the review itself
  ------------------------------------------------------------- */
  reviews: {
    count: "18 reviews \u00b7 Guest Favorite",
    items: [
      {
        name: "Jeannie",
        stars: 5,
        stayDate: "2026-09-02",
        location: "",
        text: "We came to help our daughter move into NNU and this place was just perfect - it's within walking distance of campus. Communication was terrific and the Sunny Nest was beautiful. It's good to know we have a \"home\" in Nampa when we come back to visit!"
      },
      {
        name: "Rebecca",
        stars: 5,
        stayDate: "2026-08-19",
        location: "Idaho Falls, ID",
        text: "Garen's place was beautiful! We loved that the whole property was fenced in - it felt very private. Extremely clean, beautifully decorated, and had many extras available. Comfortable bed, easy temperature control, and the ceiling fan made our night sleep perfect. Would definitely stay here again!"
      },
      {
        name: "Kathleen",
        stars: 5,
        stayDate: "2026-07-15",
        location: "Cottage Grove, OR",
        text: "The home decor is refreshing and modern with important physical as well as visual space. It's just enjoyable to be there! Garen was delightfully welcoming from the beginning of our planning, glad to help at any time!"
      },
      {
        name: "Erin",
        stars: 5,
        stayDate: "2026-06-20",
        location: "Hayden Lake, ID",
        text: "Nice place with cute decor. The fencing around the house makes the outdoor space hidden and peaceful. Has all the things you need - spices, bathroom items, and a well stocked kitchen. I would definitely recommend to others."
      }
    ]
  }

};
