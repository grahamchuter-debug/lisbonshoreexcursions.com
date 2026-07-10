# Lisbon Shore Excursions

World 2.0 editorial cruise planning site for [lisbonshoreexcursions.com](https://lisbonshoreexcursions.com).

The cruise passenger's guide to discovering Portugal from Lisbon — carefully curated shore excursions with genuinely helpful local advice. Gateway to Portugal.

## Stack

- Next.js 16 (App Router, static export)
- React 19, TypeScript, Tailwind CSS v4
- Cloudflare Pages via Wrangler

## Development

```bash
npm install
npm run generate:data
npm run download:images
npm run dev
```

## Deploy

```bash
npm run pages:deploy
```

## Content

All editorial content is generated from `scripts/generate-lisbon-data.mjs`. Regenerate after changing content definitions:

```bash
npm run generate:data
```
