# Victory Social Club — Website

Marketing site for **Victory Social Club**, a refined social house / restaurant / sports
bar in Cedar Rapids, IA. Static Astro build, deployed to Cloudflare Pages (production) with
a noindex'd GitHub Pages staging previewer.

## Business facts (verified Aug 2026)
- **Name:** Victory Social Club
- **Address:** 3707 1st Avenue SE, Cedar Rapids, IA 52402
- **Phone:** (319) 403-6064
- **Rating:** 4.9★
- **Owner:** John Lillibridge (also Goldfinch Tap + Eatery, Marion)
- **Concept:** elevated sports-bar fare, raw bar, dry-aged steaks, craft cocktails; "social hub"
- **Existing site:** victory-social.com (Toast template — replaced by this build)
- **Socials:** Instagram [@_victorysocialclub](https://www.instagram.com/_victorysocialclub) ·
  [Facebook](https://www.facebook.com/61590946788004)
- **Online ordering:** Toast (linked out from the Menu section)

### ⚠️ To confirm with the client before launch
- **Exact per-day hours** — the live Toast site + Google only expose "closes 10PM" behind
  JS. The site currently shows "Open seven days a week · Kitchen closes 10 PM" with a
  "call ahead" note as a safe placeholder. Replace with real hours once confirmed.

## Design
- **Direction:** "Aplós" old-world apothecary reference (refero), reskinned to VSC's
  copper/bronze-on-near-black brand (sampled from the logo: copper `#b5652e`,
  bronze `#dca05c`, ember `#a83000`, cream `#f2ece1`).
- **Type:** Cormorant Garamond (display) + Jost (body) — both Google Fonts, commercial-safe.
- Single-page: hero · marquee · about · menu · visit · contact.

## Dev
```bash
npm install
npm run dev      # local dev
npm run build    # -> dist/
```
`PAGES_BASE` env var sets the base path for GitHub Pages staging (empty on Cloudflare prod).

## Deploy
- **Production:** Cloudflare Pages (`victory-social-club`).
- **Staging:** push to `staging` branch → GitHub Pages (noindex'd), at
  `https://welbinator.github.io/victory-social-club/`.

## Contact form
Front-end posts to `/api/contact` with a Cloudflare Turnstile widget (currently the test
sitekey `1x00000000000000000000AA`). Wire the real backend + sitekey at deploy time.
