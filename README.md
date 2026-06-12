# ANGELS OATH — Brand Website

> through fashion, we rise.

Static brand site for **ANGELS OATH**, an Indonesian streetwear brand from Tapos, Depok — launched January 2025.

- Instagram: [@angelsoath](https://www.instagram.com/angelsoath)
- Tokopedia: [Angels Oath](https://www.tokopedia.com/angelsoath)

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3 (brand tokens in `tailwind.config.ts` under `colors.brand`)
- Framer Motion (hero entrance only — everything else is pure CSS)
- `next/font` — Cormorant Garamond (display) + Inter (UI)
- Static export (`output: 'export'`, `images.unoptimized: true`) — deploys free on Vercel or any static host

> Note: Next.js 14 doesn't support `next.config.ts`, so config lives in `next.config.mjs` with identical settings.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, CSS marquee ticker, THE HOODIE product section (mobile sticky buy bar), FIRST EVER DROP editorial strip, manifesto |
| `/shop` | THE DROP — featured AO SCRIPT HOODIE + blurred COMING SOON cards |
| `/about` | Full-bleed hero, origin story, FAITH / IDENTITY / QUALITY / COMMUNITY pillars, Instagram CTA |

## Before going live

1. Replace placeholder images in `public/images/` with real photos from Instagram — see `public/images/README.txt`.
2. Update product data in `data/product.ts` if price/sizes change.

## Deploy on Vercel (free)

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — the static export is detected automatically.
3. Point your domain (or use the free `.vercel.app` URL) and drop it in the Instagram bio.
