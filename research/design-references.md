# Design References — Portfolio for an ML/SWE New Grad

Every URL below was found in live search results and verified as reachable. Ranked, opinionated, not a survey.

---

## 1. The sites worth stealing from (ranked)

### S-tier — study these first

**1. https://rauno.me/** — Design Engineer at Vercel. The reference point that most other engineer sites are copying.
*Why it looks good:* near-zero chrome, one column, huge whitespace, monochrome. Content is the only decoration.
**Steal:** the `/craft` pattern — a separate index of small interaction experiments, each with a live inline demo instead of a screenshot. Also: micro-feedback on every action (click email → "Email Copied" inline, no toast library). For an ML person the equivalent is a "notes" or "experiments" page of small technical artifacts.

**2. https://paco.me/** — Design engineer at Linear, ex-Vercel (built cmdk, next-themes).
*Why it looks good:* sections are just labeled lists — Building / Projects / Writing / Now / Connect. No cards, no borders, no shadows. Hierarchy is 100% type weight and spacing.
**Steal:** kill your project *cards* and try a **list**: title in text color, one-line descriptor in muted color, on the same line. Reads faster and looks more senior than a grid of boxes. Also steal the **"Now"** section — a 2-line current-status block dated to the month. Cheap, and it signals the site is maintained.

**3. https://emilkowal.ski/** — Design Engineer at Vercel, author of Sonner.
*Why it looks good:* light, high-contrast, inline-link-heavy. Projects are written as prose links with a descriptor appended, not as tiles.
**Steal:** every project link carries a one-clause "what it is" right next to it ("Sonner — an opinionated toast component for React"). Do the same: `Disney AI platform — inference orchestration for 40 artists`. Also: he leads with a single time-bound CTA banner at the top; yours could be "Graduating Dec 2026 — open to new grad SWE/ML roles."

**4. https://karpathy.ai/** — the single most relevant reference for you.
*Why it looks good:* it's an unstyled-feeling résumé page that is *credible*. Chronological, logo-marked, dense. His own note: "0 frameworks were used… pure HTML and CSS in two static files."
**Steal:** **company/institution logo marks inline in the timeline**. A 20px Disney / Centene mark next to each role does more for perceived credibility than any gradient. Also steal the extreme reverse-chronological density — recruiters scan, they don't scroll for pleasure.

**5. https://www.brittanychiang.com/** — the most-copied SWE portfolio on earth (v4 repo has ~8.3k stars).
*Why it looks good:* dark navy + single accent, **split layout**: left column is a sticky bio + section nav, right column scrolls through experience and projects.
**Steal:** the sticky left rail with a scroll-spy nav where the active section's line/label brightens. This is ~30 lines of CSS `position: sticky` plus an IntersectionObserver. Caveat: this design is now *extremely* recognizable — copy the layout mechanic, not the navy/green palette.

### A-tier — specific tricks

**6. https://ciechanow.ski/** (Bartosz Ciechanowski) — the gold standard for technical explainers. **Steal:** interactive canvas figures embedded *in* the text. If you have one ML project, one small live demo (a slider that changes a parameter and redraws an SVG/canvas) beats five static cards.
**7. https://wattenberger.com/** (Amelia Wattenberger) — text-forward, section headers phrased as sentences ("I'm thinking about…", "What I'm currently noodling on"). **Steal:** conversational section labels instead of ABOUT / SKILLS / CONTACT.
**8. https://antfu.me/** (Anthony Fu, Vite/Vue core) — dense OSS résumé, tiny nav, neutral palette. **Steal:** listing maintained repos with live star counts as the credential.
**9. https://nan.fyi/** (Nanda) — bespoke concept thumbnail per post. **Steal:** a **custom minimal diagram per project** instead of a screenshot.
**10. https://shud.in/** (Shu Ding, Vercel/Nextra) — document-like, prose-first. **Steal:** the confidence to have no hero at all.
**11. https://szymonkaliski.com/** and **12. https://www.steveruiz.me/** (tldraw) — good "work log" structures.
**13. https://lilianweng.github.io/** — the ML-research house style: content-only, no ornament. The register your ML audience expects.

### Curation sources actually worth browsing
- https://godly.website/?preset=Portfolios — more editorial and restrained than Awwwards; 2-3 new sites a week.
- https://www.awwwards.com/websites/portfolio/ — good for motion ideas, bad as a model (winners are agency sites that would look absurd on a new-grad résumé page).
- https://github.com/Gitstar-OC/Developer-Portfolio and https://maggieappleton.com/design-engineers — curated lists of engineer/design-engineer site URLs.

---

## 2. Design directions that suit an ML/systems engineer

**A. Editorial / typographic (STRONGEST FIT).** One or two families, a real modular scale, no decorative imagery. *Works when* you have substantive text — three internships and a CTO role qualify. *Fails when* you fake gravitas with 96px type over three sentences.

**B. Terminal / mono-accented.** Mono for labels, dates, tags; sans for prose. *Works when* mono is a ~15% accent encoding "this is data." *Fails when* the site is all-mono with a blinking cursor, fake `$ whoami`, or a typewriter hero — reads sophomore-year in 2026. **Your CSS already uses `--mono` in ~18 places: that's the ceiling. Don't add more.**

**C. Swiss grid / systematic.** Visible column rhythm, hairline rules instead of card borders, 4/8px baseline. *Works when* you hold the grid on mobile. *Fails when* you draw decorative grid overlays that align to nothing.

**D. Brutalist-minimal.** Black/white, one accent, hard edges, no shadows or radii. *Works* as a counter-move against the sea of dark-glass portfolios. *Risk:* big-company recruiters may read it as unpolished. Hedge: brutalist *structure*, normal *typography*.

**E. Soft-glass / dark gradient (WHAT YOU HAVE — the crowded lane).** *Works* only as a small accent. *Fails when* the gradient hits hero, headings, buttons, card borders and dividers. Cyan→violet is the most saturated look in dev portfolios right now.

---

## 3. Free templates worth reading (for structure, not for copying wholesale)

| Template | URL | License | Take |
|---|---|---|---|
| bchiang7/v4 | https://github.com/bchiang7/v4 | MIT (attribution requested) | ~8.3k stars. Read the scroll-spy + sticky-rail logic; it's Gatsby, so port ideas not code. |
| HTML5 UP | https://html5up.net/ (license: https://html5up.net/license) | CC BY 3.0 | Plain HTML/CSS — your exact stack. "Strongly Typed" and "Twenty" worth stripping for layout. Attribution required. |
| CommunityPro/portfolio-html | https://github.com/CommunityPro/portfolio-html | Open source, vanilla HTML/CSS/JS | Simplest structural skeleton in your stack. |
| devsyedmohsin/portfolio-template | https://github.com/devsyedmohsin/portfolio-template | Open source | Best free reference for a11y + a light/dark toggle done properly in vanilla. |

---

## 4. 2026 trends — what's live, what's dead

**Still working:** dark mode as a default expectation, not a showpiece; variable-font type scales; "liquid glass" as a thin accent layer; neo-brutalist high-contrast blocks; text-first pages with almost no imagery; subtle grain over flat backgrounds; native scroll-driven CSS animations and view transitions (no JS library needed).

**Overplayed / reads dated in 2026:**
- Cyan→purple gradient on a near-black background. The default AI-startup look; it now signals "template."
- Gradient text on the hero headline.
- Full-page glassmorphism as the design system rather than an accent.
- Typewriter/`type-it` hero effects and fake terminal prompts.
- Particle/constellation canvas backgrounds.
- Big 3D spinning objects on a résumé site (great for Bruno Simon, wrong for a new-grad application).
- Fade-up-on-scroll on *every* element — perceived as slowness, not polish.
- Skill bars ("Python 85%") — universally mocked by engineers. Use plain tag lists.
- Emoji section headers.

---

## TOP 5 RECOMMENDATIONS FOR THIS SITE
*Ranked by visual impact per unit of effort. All doable in plain HTML/CSS/JS.*

**1. Demote the cyan→violet gradient to one appearance. (30 min, highest impact.)**
`--grad` is currently the site's entire personality and it's the most generic look in the category. Keep it in exactly **one** place — the nav scroll-progress bar, or a 1px underline under your name — and swap the rest to flat `--accent`. Also consider moving `--accent` off `#38bdf8`; a warmer or odder hue (amber, lime, desaturated red) de-clones the site instantly.

**2. Add company logo marks to the experience timeline. (1 hr.)**
Disney, Centene and the startup are your strongest assets and are currently plain text. A 24px monochrome mark per timeline node (dimmed, full opacity on hover) buys more credibility than any effect on the page. This is the Karpathy move.

**3. Convert project cards to a hairline-ruled list. (1-2 hrs.)**
Replace bordered/shadowed cards with rows separated by `border-bottom: 1px solid var(--line-soft)`. Each row: name (`--text`, medium) · one-line descriptor (`--text-2`) · stack tags in `--mono` 12px, right-aligned. Hover lifts the row to `--surface-2` and shifts the name to `--accent`. Fewer boxes, more signal — the Paco/Emil pattern. Keep one full visual card for your single best project only.

**4. Sticky left rail with scroll-spy on desktop ≥1100px. (2 hrs.)**
Left column: name, one-line title, "Open to Dec 2026 new grad SWE/ML," socials, section nav. Right column scrolls. `position: sticky; top: 0; height: 100vh` plus one IntersectionObserver toggling `.active` to brighten the current nav item. Highest perceived effort on this list, ~40 lines total.

**5. Tighten motion, add grain. (45 min.)**
(a) Keep scroll-reveal on section headings only, cap it at 400ms, honor `prefers-reduced-motion`. Staggered fade-ups on every card is the #1 tell of a 2023 template.
(b) Add a fixed full-viewport `pointer-events: none` overlay with inline SVG `feTurbulence` noise at ~3% opacity. Two rules; it kills the flat plastic feel of `#0a0c10` and makes the dark theme look deliberate.

*Bonus:* a dated 2-line "Now" block above Experience, and one live interactive demo for your best ML project. The demo is the only item here that would make a reviewer forward the link to someone else.
