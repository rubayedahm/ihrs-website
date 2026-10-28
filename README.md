# IHRS website

Website for the **International Human Rights Society** — built with Next.js 15, React 19, TypeScript, Tailwind CSS 4 and Motion.
It is exported as a fully static site (fast, secure, and cheap or free to host).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Editing content

| What | Where |
| --- | --- |
| Email, phone, location, social links, donate link, charity no. | `src/lib/site.ts` |
| Story, values, team, events, structure, departments | `src/content/data.ts` |
| Journal articles | `src/content/journal/<slug>.html` + `index.json` |
| Images | `public/images/…` (team headshots: add `photo` to a person in `data.ts`) |
| Brand colours & fonts | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |

**Add an event:** drop the image in `public/images/events/` and add an entry to `events` in `data.ts`.
**Add an article:** add `src/content/journal/my-article.html` and an entry in `index.json` (`slug`, `title`, `date`, `excerpt`).

## Contact form

Create a free form at [Formspree](https://formspree.io) (or Basin/Getform) and set
`NEXT_PUBLIC_FORM_ENDPOINT` in your host's environment variables. Without it the form opens the visitor's email app.

## Deploy & domain

**Vercel (recommended):** import the repo at vercel.com → Deploy. Then *Settings → Domains* → add `ihrsglobal.org`
and follow the DNS instructions. `vercel.json` redirects old WordPress URLs.

**Netlify / Cloudflare Pages:** build command `npm run build`, output directory `out`. `public/_redirects` handles old URLs.

Update `site.url` in `src/lib/site.ts` if the domain changes (used for SEO, sitemap and sharing).
