# Vijay Surisetty — Portfolio

Plain HTML/CSS/JS, no build step. Structure:

```
index.html        Home (hero + three pathways)
journey.html       My Journey (horizontal career pathway)
work.html          Work I'm Proud Of (overview, all 7 initiatives)
work/*.html        The 7 individual case-study pages
thoughts.html      Intentionally empty until you have real posts
subscribe.html     Email capture UI (see "Making Subscribe actually work" below)
css/style.css      All styling
js/main.js         Mobile nav + subscribe form handling
```

## Before you publish

1. **Email address** — replace `you@example.com` (footer of every page, and the subscribe mailto).
2. **Logos** — every "logo" right now is a styled lettermark (TCS / WI / EY / CE / SK), not a real company logo. These enterprise brands aren't available through any free, rights-cleared icon library, so I couldn't legitimately embed the real ones. Each company publishes brand/logo assets on their own site (search "[Company] press kit" or "[Company] brand assets") — drop the SVGs into a new `assets/logos/` folder and swap the `<div class="logo-badge">` elements in `journey.html` for `<img>` tags pointing at them.
3. **Aris** — when you join in October 2026, add a new milestone to `journey.html` (copy an existing `.milestone` block) and update the SKAN AI entry's end date.

## Making Subscribe actually work

A static site has no backend, so the current form can't collect emails — it just shows a message on submit. Two free options to wire it up properly:

- **Buttondown** (buttondown.email) — built for exactly this (writer newsletters), free up to a few hundred subscribers. Gives you a form action URL to drop into `subscribe.html`.
- **Formspree** (formspree.io) — more generic form backend, free tier included, works for any static form.

Once you pick one, replace `action="#"` in `subscribe.html` with the URL they give you.

## Deploying

Same as before — GitHub Pages, Netlify, or Cloudflare Pages all work free with this folder as-is. If you're using the GitHub Pages repo from earlier, just replace its contents with this folder.

## Content notes for you

- The Thoughts page is deliberately empty per your brief — nothing published there. Your two article ideas (Process Intelligence as AI's contextual layer; India's women's safety, including the Jatayu concept) aren't on the site anywhere — they're just noted here for when you're ready to write them.
- No confidential SKAN AI customer names are used anywhere, per your instruction — only generic descriptors (major healthcare / financial-services enterprises).
- Every number on the case-study pages ($5M+ ACV, ~$500K renewal, ~$1M TCV, 800–1,000 people, ~10 consultants, 6+ accounts) came directly from what you provided — nothing was invented or rounded up.
