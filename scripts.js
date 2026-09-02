// Small progressive enhancements only. This page works with JS disabled too.
// No external dependencies

// Auto-update the footer copyright year.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const README = `Portfolio source — retune guide
================================

Files
  index.html   — all markup and sections
  styles.css   — all styles; the brand palette is the :root variables at the top
  scripts.js   — small enhancements plus the "Download source" zip builder
  assets/      — your own files (cv.pdf, poster.jpg, showreel.mp4)

Brand palette (styles.css :root)
  --accent        #6A86BD   primary steel/periwinkle blue
  --accent-deep   #3A4A68   deep navy — text accents and hovers
  --accent-soft   #EDF0F7   airy tint — light backgrounds
  --gold          #C99836   complementary warm gold
  --bg            #FAF9F6   page background
  --fg            #1A1A1A   body text
  --muted         #6B6B6B   secondary text
  --line          #E5E2DA   hairline borders

Edit any --* value to retune. Every element references these variables,
so the whole site re-themes from a single place.
`;

}
