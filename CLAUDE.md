# CLAUDE.md - nickdavidson.io

Personal site for Nick Davidson: customer success architecture, consulting practice,
the IE Global Executive MBA, and a forthcoming writing series.

## Non-negotiables

- **Static only.** Three files at the repo root - `index.html`, `style.css`, `main.js` - plus images. No build step, no bundler, no framework, no npm. GitHub Pages serves the root of `main`.
- **No dependencies.** Fonts come from Google Fonts; everything else is hand-written. Do not add a library to solve something CSS can do.
- **JS is progressive enhancement.** `main.js` adds scroll reveals, the Study ledger panel, and the mobile nav. The page must read completely with JS off - `body:not(.js-loaded)` rules cover the fallbacks. Never move content into JS.

## Design system - broadsheet

The site is designed as a printed broadsheet, not a web page. Rules and marginalia
instead of cards; hover instead of ornament.

**Type - three faces, no more**
- Instrument Serif - masthead, headlines, section names, figures. Always weight 400.
- Archivo - body copy.
- JetBrains Mono - labels, dates, kickers, tags. Uppercase, letterspaced.

**Colour - two plus one**
- Ink `#16160F` on paper `#FAF8F3`, secondary paper `#F0EDE3`.
- One accent: green `#2E7D4F`. Used for kickers, the active state, and emphasis inside headlines. Nothing else gets a colour.
- All of it lives in `:root` in `style.css`. Change it there; never hardcode a hex in markup.

**Layout**
- Every section is a `.band`: a 200px marginalia gutter (`.marg`) plus content, separated by hairline rules. New sections reuse `.band` - do not invent new spacing systems.
- Max width 1280px with vertical rules at the edges, like a page.
- No rounded corners. No box shadows. No gradients. Borders are 1px hairlines; emphasis is a 2–3px rule.

**Interaction**
- Hover is the only ornament: figures invert to ink, engagement rows indent and shade, dispatch cells fill, tags invert, Study rows drive the side panel.
- One reveal transition, disabled under `prefers-reduced-motion`.
- Interactive elements are real `<button>`s with `aria-current`, not divs.

## Content structure

Order is deliberate - proof before biography:

masthead → statement of practice → figures → engagements → quotes → **dispatches** → the record → study → off the clock → colophon

- **Figures** are four and only four. Adding a fifth weakens all of them.
- **Engagements** - five shapes of consulting work, roman numerals, with an engagement-length tag.
- **Dispatches** - tagged posts, not fixed series slots. An archive page lives at `/dispatches/`; each post is a hand-authored page at `/dispatches/<slug>.html` using the `.article-body` pattern (serif h1, mono kicker, Archivo body, serif h2 subheads). The homepage shows only the single most recent post as a `.disp-featured` card, plus an honest `.disp-progress` line naming what's still in progress. The archive lists every post newest-first with the same kicker/h4/p pattern - adding one is a copy-paste of one `.disp` block, not a redesign. The mailto signup block stays; when a platform is chosen, replace it with a real form. Do not fake a subscribe box.
- **Study** - ASU BA (conferred Aug 2026) then the IE GXMBA residencies, sourced from the official program structure: Madrid 13–25 Sep 26 · Singapore 17–23 Jan 27 · Oxford 12–17 Apr 27 · Los Angeles 25–31 Jul 27 · Madrid 13–17 Dec 27 (finals, graduation). Course lists live in `data-courses`. Term→course mapping follows the program PDF; correct it, don't guess further.
- **Off the clock** - prose plus tags. DE&I first and filled. AFOL stays.

## Voice

Plain, specific, slightly dry. Short declaratives. Concrete numbers over adjectives.
No "passionate," no "leverage," no "thought leader," no exclamation marks, no emoji.
British-ish spelling is used consistently (`modelling`, `organisations`).
Claims are checkable: if a figure can't be sourced, cut it.

## Things not to do

- Don't add sections without asking - the page is short on purpose.
- Don't introduce a second accent colour, a fourth typeface, or card-based layout.
- Don't replace the mailto with a fake newsletter integration.
- Don't restore the previous cerulean / Bebas Neue design system; it has been retired.
