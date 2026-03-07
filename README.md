# SiteForge — Landing Page

Built with Astro + Tailwind CSS. 100% static output.

## Setup

```bash
npm install
npm run dev      # development server
npm run build    # production build → dist/
```

## Deployment (Vercel)
1. Push to GitHub
2. Connect repo on vercel.com
3. Framework preset: Astro
4. Build command: `npm run build`
5. Output directory: `dist`

## Updating content (Filipino builder)
Open ONE file only: `src/data/content.json`

- Stripe payment link: change `stripePaymentUrl`
- Form email: change `formEndpoint`
- Add demo: add object to `demos` array
- Logo: replace `/public/images/logo-placeholder.svg`

## Change accent color
Open `tailwind.config.mjs` → change `brand.DEFAULT` hex value.
