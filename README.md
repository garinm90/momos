# Momo's Pretzels Site

Static Astro marketing site for Momo's Pretzels, deployed from GitHub to Cloudflare.

## Content Editing

This project now uses Astro content collections for business-managed content:

- `src/content/site-settings/` for shared business contact and social links
- `src/content/media/` for sitewide and page-level images
- `src/content/homepage/` for homepage copy and featured content references
- `src/content/locations/` for the `find-us` schedule
- `src/content/menu/` for menu items and pricing
- `src/content/reviews/` for testimonials
- `src/content/faqs/` for the contact page FAQ list

The non-technical editor UI is scaffolded at `/admin` using Decap CMS.
Decap uploads originals into `public/images/`, and `npm run images:optimize` generates matching WebP variants used by the site templates.

## Cloudflare / GitHub Publishing Flow

1. An editor updates content in `/admin`.
2. Decap CMS commits the content change to GitHub.
3. Cloudflare rebuilds and republishes the static site from GitHub.

For production login, Decap CMS still needs a GitHub OAuth bridge. The CMS config is prepared for a Cloudflare Worker endpoint:

```yml
backend:
  name: github
  repo: garinm90/momos
  branch: main
  # base_url: https://your-auth-worker.your-subdomain.workers.dev
  # auth_endpoint: /auth
```

After the Worker is configured with the GitHub OAuth app credentials, uncomment `base_url` and `auth_endpoint` in `public/admin/config.yml`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run images:optimize` | Regenerates optimized WebP variants for uploads  |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
