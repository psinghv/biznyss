# Biznyss Website

Production-ready Astro website for Biznyss, an AI-powered growth and innovation company.

## Stack

- Astro 6 with static output and content collections
- Tailwind CSS 4 through the Vite plugin
- React islands for case-study filtering and animated credibility metrics
- Framer Motion and Lucide React
- Sitemap, robots.txt, canonical URLs, Open Graph, Twitter cards, and JSON-LD
- Vercel deployment configuration

## Local development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Quality checks

```sh
npm run check
npm run build
```

## Content

Editorial posts live in `src/content/insights`. Capability, solution, case-study, industry, and navigation data live in `src/data/site.ts`.

## Production setup

1. Replace placeholder phone and WhatsApp values.
2. Confirm `hello@biznyss.com` and the FormSubmit activation email.
3. Set `PUBLIC_GA_ID` in Vercel to enable the built-in Google Analytics integration.
4. Deploy the repository to Vercel; Astro is detected automatically.
