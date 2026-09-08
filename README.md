# Vijay Surisetty — Portfolio

Plain HTML/CSS/JS, no build step.

## Structure

```
index.html          Single scrolling page: Home, Journey, Work overview, Thoughts, Subscribe
work/*.html          5 individual case-study "deep dive" pages (still separate pages)
css/style.css        All styling
js/main.js           Sticky nav, mobile menu, anchor-jump behaviour, subscribe form handling
assets/logos/        Real logo images (IIT Kharagpur, TCS, Wipro, EY, Celonis, SKAN AI)
```

## What changed in this pass

- **Palette**: black + dark navy only (no red, no light-blue secondary).
- **Hero**: centered, tinted background band, name in uppercase, two CTA buttons (My Journey / Work I'm Proud Of) replacing the old 3-card "pathways" section, which added no value once the nav already did that job.
- **Journey**: rebuilt as 7 clean uniform cards (logo, year, role only, no extra tagline per card). Order: TCS 2015, IIT Kharagpur 2018 (MBA), Wipro 2019 (internship/PPO), Wipro 2020 (Presales Consultant), EY 2021, Celonis 2023, SKAN AI 2025. Fixed a real alignment bug where the old connecting-line timeline design (built for small lettermark badges) was visually colliding with the bigger real logos.
- **Work I'm Proud Of**: trimmed from 7 stories to 5. Dropped "Winning a $1M Engagement Against an Incumbent" and "Learning to Sell Process Mining" per your call, and deleted their case-study files (`work/million-dollar-engagement.html`, `work/selling-process-mining.html`) since nothing links to them anymore. Renumbered 01–05 across Professional + MBA. New order: Partner Ecosystems (01), AI POC to Production (02), Executive Diagnostics (03), Niine (04), Pink Cab (05).
- **Niine case study**: the placeholder "I plan to add LinkedIn posts" line is now replaced with your two actual LinkedIn post links as a "Supporting material" block.
- **Copy pass**: removed em dashes throughout (titles, hero copy, all 5 case studies) in favor of periods/commas, per your note about it reading as AI-generated.
- **Logo ribbon**: real logos in a continuously auto-scrolling horizontal ribbon, positioned just above the footer's LinkedIn/Email row, with a soft fade at both edges. Pauses on hover.

## Before you publish

1. **Email address**: replace `you@example.com` (footer).
2. **Aris**: when you join in October 2026, copy an existing `.milestone` block in the Journey section of `index.html` for the new role, and update the SKAN AI card if its dates change.

## Making Subscribe actually work

A static site has no backend, so the current form can't collect emails; it just shows a message on submit. Two free options:

- **Buttondown** (buttondown.email): built for writer newsletters, free up to a few hundred subscribers.
- **Formspree** (formspree.io): generic form backend, free tier included.

Replace `action="#"` in the subscribe `<form>` in `index.html` with the URL your chosen provider gives you.

## Deploying

Since files were both added and removed in this pass, the safest approach is to delete everything in your repo except `CNAME`, then upload this folder's contents fresh, keeping the structure intact.
