# ishaanhanda.com

My personal site. Single page, no framework, no build step — just `index.html`,
`styles.css`, and `main.js`.

## Running it locally

I open `index.html` straight in a browser, or serve it when I need real paths:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploying

The site is on Netlify, connected to this repo. Any push to `main` deploys
automatically:

```bash
git add -A
git commit -m "what changed"
git push
```

`netlify.toml` handles the config — it publishes the repo root with no build
command, so there's nothing to set up in the Netlify UI.

The `canonical` and `og:url` tags in `index.html` both point at
`https://ishaanhanda.com/`. If I ever move the site off that domain, those need
updating too.

## Still to do

The **1904labs** entry in the timeline is marked `data-todo="1904labs"` in
`index.html`. The role and location are right, but it still needs:

- Real start and end dates — it currently just says "Multiple terms"
- Accomplishments with actual numbers, matching the style of my other bullets

## Structure

```
index.html           markup + content — all the copy lives here
styles.css           design tokens at :root, dark + light themes
main.js              theme toggle, mobile menu, scroll spy, reveal animations, count-up
netlify.toml         deploy config — publish root, no build
assets/              résumé PDF + headshot
variants/            an alternate "editorial" design I tried
research/            design reference notes
index.preview.html   an earlier draft of the layout
```

`variants/`, `research/`, and `index.preview.html` are scratch work, but they do
get deployed with everything else — so `ishaanhanda.com/variants/editorial.html`
is publicly reachable. Worth deleting if I ever want them out of sight.

## Editing notes

- **Colors** — all in `:root` / `[data-theme="light"]` at the top of `styles.css`.
  Changing `--accent`, `--accent-2`, and `--grad` re-skins the whole site.
- **Adding a job** — copy an `<li class="tl-item reveal">` block in the timeline.
  Order is reverse-chronological.
- **Adding a project** — copy an `<article class="proj reveal">`. Adding
  `proj-feature` to the class list makes it span two columns.
- **Stat count-up** — `data-count` is the number, `data-suffix` the unit.

## What's built in

Responsive down to 360px · dark/light with system detection and localStorage ·
keyboard accessible with skip link and focus rings · `prefers-reduced-motion`
respected · print stylesheet · Open Graph + JSON-LD `Person` schema for SEO.
