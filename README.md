# MINTD Card Show — website

Single-page site for MINTD Card Show, built with React 19, Vite, and Tailwind CSS v4.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Structure

- `src/data.js` — all copy, links, events, stats, partners, and image paths. Edit content here.
- `src/components/` — page sections (Header, Hero + countdown, Stats, About, Shows carousel, Vendors, Sponsors, Newsletter, Footer).
- `src/pages/Contact.jsx` — the `/contact` page.
- `public/images/` — **placeholder** SVGs. Replace them with real photos, posters, and logos (keep the filenames, or update the paths in `src/data.js`).
- Set `HIGHLIGHT_VIDEO` in `src/data.js` to an MP4 URL to enable the highlight reel.

## Hosting note

`/contact` is a client-side route. Configure your host to serve `index.html` for unknown paths (SPA fallback).
