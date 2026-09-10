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
    { src: "images/room-1.jpg",           alt: "King bedroom",        caption: "King bed with cozy Southwestern throw" },
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
    { src: "images/exterior-detail-1.jpg",alt: "Front entry",         caption: "Modern wood-accented entry" },
    { src: "images/room-2.jpg",           alt: "Primary bedroom",     caption: "Primary suite \u00b7 calm & uncluttered" },
    { src: "images/living-area-1.jpg",    alt: "Living area",         caption: "Bright, boho-styled living space" },
    { src: "images/terrace-patio-2.jpg",  alt: "Patio seating",       caption: "Outdoor seating under the string lights" },
    { src: "images/bathroom-1.jpg",       alt: "Bathroom",            caption: "Clean, modern full bath" },
    { src: "images/living-area-3.jpg",    alt: "Living area",         caption: "Comfortable seating & natural light" },
    { src: "images/room-4.jpg",           alt: "Bedroom detail",      caption: "Restful bedroom corner" },
    { src: "images/exterior-1.jpg",       alt: "Home exterior",       caption: "The Sunny Nest from the street" },
    { src: "images/interior-2.jpg",       alt: "Interior detail",     caption: "Warm textures & thoughtful details" },
    { src: "images/terrace-patio-4.jpg",  alt: "Backyard patio",      caption: "Private, fully fenced backyard" },
    { src: "images/living-area-4.jpg",    alt: "Living area",         caption: "Room to gather & unwind" },
    { src: "images/bathroom-3.jpg",       alt: "Bathroom",            caption: "Fresh fixtures & finishes" },
    { src: "images/exterior-2.jpg",       alt: "Home exterior",       caption: "Single-level home with second-floor suite" },
    { src: "images/living-area-6.jpg",    alt: "Living area",         caption: "Cozy nook to read & relax" },
    { src: "images/terrace-patio-5.jpg",  alt: "Fire pit",            caption: "Evenings by the fire pit" },
    { src: "images/interior-3.jpg",       alt: "Interior detail",     caption: "Boho accents throughout" },
    { src: "images/exterior-detail-2.jpg",alt: "Exterior detail",     caption: "Wood-accented architectural details" },
    { src: "images/bathroom-4.jpg",       alt: "Bathroom",            caption: "Second bath \u00b7 bright & tidy" },
    { src: "images/living-area-7.jpg",    alt: "Living area",         caption: "Open, airy common space" },
    { src: "images/terrace-patio-6.jpg",  alt: "Outdoor space",       caption: "Space to breathe, outdoors" },
    { src: "images/exterior-4.jpg",       alt: "Home exterior",       caption: "Gated access for real privacy" },
    { src: "images/property-grounds-1.jpg",alt: "Property grounds",   caption: "Green, low-key grounds" },
    { src: "images/exterior-detail-3.jpg",alt: "Exterior detail",     caption: "Curb-side charm & landscaping" },
    { src: "images/exterior-5.jpg",       alt: "Home exterior",       caption: "Quiet residential setting near NNU" },
    { src: "images/miscellaneous-1.jpg",  alt: "Home detail",         caption: "Little touches that make it feel like home" },
    { src: "images/exterior-6.jpg",       alt: "Home exterior",       caption: "A short walk from downtown Nampa" },
    { src: "images/miscellaneous-2.jpg",  alt: "Home detail",         caption: "Thoughtfully stocked for your stay" },
    { src: "images/miscellaneous-3.jpg",  alt: "Home detail",         caption: "Everything you need, ready to go" }
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
