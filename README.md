# IHRS website

Website for the **International Human Rights Society** — built with Next.js 15, React 19, TypeScript, Tailwind CSS 4 and Motion.
It is exported as a fully static site (fast, secure, and cheap or free to host).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Editing content (CMS)

Content is managed with **[Pages CMS](https://pagescms.org)**, a free dashboard that edits the files in this repo.

1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Install the Pages CMS GitHub app when asked and give it access to `ihrs-website`.
3. Open the repository. You'll see: **Events, Journal (blog), Leadership team, Gallery photos, About page, Site settings**.
4. Edit and click **Save**. Each save commits to `main` and the site redeploys in ~2 minutes.

To give a committee member access, add them as a collaborator on the GitHub repo
(*Settings → Collaborators*) or invite them by email from Pages CMS.

| Dashboard section | File(s) |
| --- | --- |
| Events | `content/events/*.json` |
| Journal | `content/journal/*.md` (front matter + HTML body) |
| Leadership team | `content/team.json` |
| Gallery photos | `content/gallery.json` (event photos are included automatically) |
| About page story | `content/about.json` |
| Site settings (email, links, socials, donate) | `content/settings.json` |
| Uploaded images | `public/images/…` |

Values, IHRS structure and departments rarely change and live in `src/content/data.ts`.
Brand colours and fonts are in `src/app/globals.css` (`@theme`) and `src/app/layout.tsx`.

## Contact form

Create a free form at [Formspree](https://formspree.io) (or Basin/Getform). On GitHub Pages, add its URL as a
repository variable named `FORM_ENDPOINT` (*Settings → Secrets and variables → Actions → Variables*).
Elsewhere, set `NEXT_PUBLIC_FORM_ENDPOINT`. Without it the form opens the visitor's email app.

## Deploy & domain

The site deploys to **GitHub Pages** automatically on every push to `main` (`.github/workflows/deploy.yml`).

**Custom domain (ihrsglobal.org):**
1. At your domain registrar, set these DNS records (remove any old A/AAAA/CNAME records for `@` and `www`; leave MX/email records alone):

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | rubayedahm.github.io |

2. In the repo: *Settings → Pages → Source* must be **GitHub Actions** (not "Deploy from a branch", which publishes the README instead). Then *Settings → Pages → Custom domain* → `ihrsglobal.org` → Save. Tick **Enforce HTTPS** once it becomes available.
3. Re-run the latest *Deploy to GitHub Pages* workflow (*Actions* tab) so links, sitemap and sharing previews use the new domain.

Old WordPress URLs (e.g. `/about-us/`, `/journals/`, dated article links) redirect via small pages in `public/`.
