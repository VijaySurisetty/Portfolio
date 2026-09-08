# Vijay Surisetty — Portfolio

Plain HTML/CSS/JS, no build step.

## Structure

```
index.html         Single scrolling page: Home, Journey, Work overview, Thoughts, Subscribe
work/*.html         The 7 individual case-study "deep dive" pages (still separate pages)
css/style.css       All styling
js/main.js          Sticky nav, mobile menu, anchor-jump behaviour, subscribe form handling
assets/logos/       Real logo images (IIT Kharagpur, TCS, Wipro, EY, Celonis, SKAN AI)
```

**Why the case studies are still separate pages:** everything else (Journey, Work overview, Thoughts, Subscribe) now lives on one scrolling page with a sticky nav that jumps between sections — no page reloads, similar to how sites like Scaler's landing pages work. The 7 case studies stay as their own pages because each is a full, long-form story — bundling all of them into the single page would make it enormous and hurt the "quick overview" feel of the homepage. Each case study's nav links back to the right anchor on the homepage (e.g. `index.html#work`).

## Before you publish

1. **Email address** — replace `you@example.com` (footer of every page).
2. **Logos** — real logos are now in place for both the homepage credibility strip and the Journey timeline, using the files you provided. If you get cleaner/transparent-background versions later, just replace the files in `assets/logos/` with the same filenames (`tcs.png`, `wipro.png`, `ey.png`, `celonis.png`, `skan.png`, `iitkgp.png`) and nothing else needs to change.
3. **Aris** — when you join in October 2026, add a new milestone to the Journey section in `index.html` (copy an existing `.milestone` block) and update the SKAN AI entry's end date.

## Making Subscribe actually work

A static site has no backend, so the current form can't collect emails — it just shows a message on submit. Two free options:

- **Buttondown** (buttondown.email) — built for writer newsletters, free up to a few hundred subscribers.
- **Formspree** (formspree.io) — generic form backend, free tier included.

Replace `action="#"` in the subscribe `<form>` in `index.html` with the URL your chosen provider gives you.

## Deploying

Same as before — upload everything (including the new `assets` folder) to your GitHub repo, keeping the folder structure intact. GitHub Pages will pick up the change automatically once committed.
