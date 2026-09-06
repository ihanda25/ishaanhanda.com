# ishaanhanda.com

Personal site — single-page, no framework, no build step. Just `index.html`, `styles.css`, `main.js`.

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

**Vercel** (you've used it before, on Chainge):
```bash
npx vercel --prod
```

**GitHub Pages:** push to a repo, then Settings → Pages → deploy from `main` / root.

**Netlify:** drag this folder onto app.netlify.com/drop.

Custom domain: buy `ishaanhanda.com`, point it in your host's domain settings. The
`og:url` / `canonical` tags in `index.html` already assume that domain — update them
if you use a different one.

---

## ⚠️ Fill these in

Everything below is either a placeholder or an educated guess. Search `data-todo`
in `index.html` to jump to each one.

### 1. GitHub username
Currently guessed as `github.com/ishaanhanda` in four places. Fix with:

```bash
# from this folder — replace YOURNAME
sed -i '' 's|github.com/ishaanhanda|github.com/YOURNAME|g' index.html
```
Also update the `sameAs` field in the JSON-LD block at the top of `index.html`.

### 2. Project links (`data-todo="link"`)
Each project card has GitHub / live-demo icon links pointing at `#` or a guessed
GitHub URL. Real repo + demo URLs needed for:
- BriefCase
- Movie Search
- Chainge STL (live site URL)
- Linux Shell

Delete any `<a>` you don't have a link for — an icon that goes nowhere is worse than
no icon.

### 3. Movie Search (`data-todo="movie-search"`)
**Written from your one-line description — the details are invented.** Needs real
content: what stack, what API (TMDB? OMDb?), what was actually hard about it, and
any numbers. Replace the `.proj-desc` paragraph and the `.chips` list.

### 4. 1904labs (`data-todo="1904labs"`)
Partly reconstructed. Confirmed from public search: multiple internship terms, and
work on **data engineering and decision science** initiatives. Still needs:
- Exact job title(s)
- Real start/end dates (currently the vague "Multiple terms")
- Actual accomplishments with metrics, in the style of your other bullets

### 5. LinkedIn extras
LinkedIn blocks automated fetching (HTTP 999 for any non-logged-in request), so
your profile couldn't be read directly. Paste the profile text and these get filled in.

Already pulled from public search results and added to the site:
- Sandia work was via **Purdue's The Data Mine** (the résumé didn't say) — and the tool
  predicts *where a flight will land* from a partial trajectory, using ML over a grid
  of historical flight data
- **1st place, JUNI Hackathon (Stanford)** — now in the Recognition block

Not added, because it looked like a different person with the same name in the search
index: a mention of "leaving Stanford and Purdue to build Phyvant full-time in San
Francisco." Confirm before it goes anywhere near the site.

Still likely on your LinkedIn and missing here: coursework detail, clubs/orgs,
volunteering, certifications, other hackathons, and any recommendations worth
pulling a pull-quote from.

---

## Structure

```
index.html   markup + content (all copy lives here)
styles.css   design tokens at :root, dark + light themes
main.js      theme toggle, mobile menu, scroll spy, reveal animations, count-up
assets/      résumé PDF
```

### Editing notes

- **Colors** — all in `:root` / `[data-theme="light"]` at the top of `styles.css`.
  Change `--accent`, `--accent-2`, and `--grad` to re-skin the whole site.
- **Adding a job** — copy an `<li class="tl-item reveal">` block in the timeline.
  Order is reverse-chronological.
- **Adding a project** — copy an `<article class="proj reveal">`. Add
  `proj-feature` to the class list to make it span two columns.
- **Stat count-up** — `data-count` is the number, `data-suffix` the unit.

### What's built in

Responsive down to 360px · dark/light with system detection and localStorage ·
keyboard accessible with skip link and focus rings · `prefers-reduced-motion`
respected · print stylesheet · Open Graph + JSON-LD `Person` schema for SEO.
