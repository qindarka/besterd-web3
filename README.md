# Besterd Mechanical — Website

Static, mobile-first marketing website for Besterd Mechanical (London, ON).
Built as plain HTML / CSS / vanilla JS — no build step required — and ready
to deploy to **Cloudflare Pages**.

## Deploy to Cloudflare Pages

1. Sign in to the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Select this GitHub repository and the branch you want to publish (e.g. `main` for production, or this feature branch for a preview).
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
├── index.html              # Single-page site (Hero / Services / About / Industries / Process / Contact)
├── 404.html                # Custom not-found page
├── _headers                # Cloudflare Pages security & caching headers
├── _redirects              # Cloudflare Pages redirects
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        ├── logo.svg        # Wordmark + monogram (dark text — for light backgrounds)
        ├── logo-light.svg  # Wordmark + monogram (white text — for dark backgrounds)
        ├── logomark.svg    # Square BM badge only
        └── favicon.svg
```

## Editing content

Everything is in `index.html`. Common updates:

| What                       | Where to edit                                     |
| -------------------------- | ------------------------------------------------- |
| Phone number               | Search `519` — appears in header CTA, hero, footer, schema |
| Email address              | Search `info@besterdmechanical.ca`                |
| Address                    | Search `1070 Wilton Grove`                        |
| Services list              | `<section id="services">` in `index.html`         |
| About copy                 | `<section id="about">`                            |
| Industries served          | `<section id="sectors">`                          |
| Map                        | The `<iframe>` near the bottom of `#contact`      |

## Branding

The logo files in `assets/img/` are clean SVG re-interpretations of the original
Besterd "BM" mark. Colors used throughout the site:

| Role          | Hex        |
| ------------- | ---------- |
| Primary navy  | `#0f2a47`  |
| Steel blue    | `#1d4f8a`  |
| Amber accent  | `#f59e0b`  |
| Page bg       | `#ffffff` / `#f7f9fc` |

If the client wants different brand colors, swap the CSS custom properties at
the top of `assets/css/styles.css` (`--navy`, `--navy-600`, `--amber`) and the
fills inside the SVG logos.

## Contact form

The form uses a `mailto:` handoff (no backend) so it works on any static host.
To upgrade to a real form endpoint, replace the submit handler in
`assets/js/main.js` with a `fetch()` POST to your provider of choice
(Cloudflare Pages Functions, Formspree, Web3Forms, Basin, etc.).
