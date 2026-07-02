# Hamsika Rao Garugula — Portfolio

A fast, dependency-free personal portfolio site. Pure HTML/CSS/JS — no build step, no framework, deploys anywhere.

```
Portfolio/
├─ index.html      # all content + copy
├─ styles.css      # design system (dark-first, light/dark toggle)
├─ script.js       # nav, theme, scroll reveal, project expand
└─ assets/
   └─ Hamsika_Rao_Garugula_Resume.pdf
```

## Preview locally
Just open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8000    # then visit http://localhost:8000
```

## Deploy (free options)

### GitHub Pages (recommended — matches your GitHub brand)
1. Create a repo named `HamsikaRaj.github.io` (user site) or any repo (project site).
2. Push these files to the `main` branch.
3. Repo → Settings → Pages → Source: `main` / root → Save.
4. Live at `https://HamsikaRaj.github.io` in ~1 minute.

### Vercel / Netlify
Drag-and-drop the `Portfolio` folder at vercel.com/new or app.netlify.com/drop. Instant HTTPS URL; add a custom domain later.

## Customize
- **Swap the resume:** replace `assets/Hamsika_Rao_Garugula_Resume.pdf` (keep the filename, or update the two links in `index.html`).
- **Colors/fonts:** all in the `:root` block at the top of `styles.css`.
- **Custom domain:** buy one (e.g. `hamsika.ai` / `hamsikarao.com`) and point it at your host — update the `og:url` and JSON-LD `url` in `index.html`.
- **Add a real OG image:** create a 1200×630 image and add `<meta property="og:image" content="...">` so link previews look premium on LinkedIn.

## SEO notes
Meta title, description, keywords, Open Graph, and Person schema (JSON-LD) are already set for the target roles (AI/ML Engineer, Applied AI, Agentic AI). After deploying, submit the URL to Google Search Console and add the live link to your LinkedIn "Featured" section and GitHub profile.
