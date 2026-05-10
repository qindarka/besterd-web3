# Besterd Mechanical — Website

Static, mobile-first marketing website for Besterd Mechanical (London, ON).
Built as plain HTML / CSS / vanilla JS — no build step required — and ready
to deploy to **Cloudflare Pages**.

## Deploy to Cloudflare Pages

1. Sign in to the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Select this GitHub repository and the branch you want to publish.
3. Build settings:
   - **Framework preset:** *None*
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` *(repo root)*
4. Save & deploy. Cloudflare will serve the site from the repo root and rebuild on every push.

`_headers` and `_redirects` are picked up automatically by Cloudflare Pages.

## Local preview

No tooling required. From the project root:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Project structure

```
.
├── index.html              # Single-page site
│                           #   Hero / Trust / Services / About / Industries
│                           #   Projects / Process / Qualifications / Contact
├── 404.html                # Custom not-found page
├── _headers                # Cloudflare Pages security & caching headers
├── _redirects              # Cloudflare Pages redirects
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        └── bm_logo.gif     # The official BM logo, used as-is
```

## Editing content

Everything is in `index.html`. Common updates:

| What                       | Where to edit                                     |
| -------------------------- | ------------------------------------------------- |
| Phone number               | Search `519` — appears in header CTA, hero, footer, schema |
| Email address              | Search `info@besterdmechanical.ca`                |
| Address                    | Search `1070 Wilton Grove`                        |
| Leadership                 | Search `Ian Roff`                                 |
| Services list              | `<section id="services">`                         |
| About copy                 | `<section id="about">`                            |
| Industries served          | `<section id="sectors">`                          |
| Projects                   | `<section id="projects">`                         |
| Affiliations               | `<section id="qualifications">`                   |
| Map                        | The `<iframe>` near the bottom of `#contact`      |

## Branding

The logo at `assets/img/bm_logo.gif` is the official Besterd Mechanical
mark and is used as-is — do not redraw or substitute.

Palette (CSS custom properties at the top of `assets/css/styles.css`):

| Role            | Hex        |
| --------------- | ---------- |
| Black (primary) | `#0a0a0a`  |
| Steel           | `#4b5563`  |
| Silver / chrome | `#d1d5db`  |
| Canadian red    | `#d52b1e`  |
| Page background | `#ffffff` / `#f6f7f8` |

To change the accent across the site, update `--red` in `assets/css/styles.css`.

## Contact form

The form uses a `mailto:` handoff (no backend) so it works on any static host.
To upgrade to a real form endpoint, replace the submit handler in
`assets/js/main.js` with a `fetch()` POST to your provider of choice
(Cloudflare Pages Functions, Formspree, Web3Forms, Basin, etc.).
