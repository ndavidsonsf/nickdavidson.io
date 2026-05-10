# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and consulting site for Nick Davidson (nickdavidson.io). Static site hosted on GitHub Pages — no build system, no dependencies, no package manager.

## File Structure

```
index.html        — markup only (~220 lines)
style.css         — all styles (~400 lines)
main.js           — scroll animations, smooth scroll, mobile nav toggle
nickheadshot.jpg  — headshot, co-located with index.html (do not move)
```

## Architecture

- **CSS custom properties** in `:root` drive the color palette: `--black`, `--white`, `--accent` cerulean `#0099CC`, `--accent2` gold `#FFD700`. Note: several rgba values in `style.css` hardcode the cerulean as `rgba(0,153,204,...)` — update these alongside `--accent` if the color changes.
- **Google Fonts** loaded via `<link>`: Bebas Neue (display/logo), DM Serif Display (italic accents), DM Mono (labels, monospace), Syne (body)
- **Section order** is consulting-first: `#hero` → `#services` → `#results` → `#experience` → `#about` → `#contact`
- **Reveal animations** use `.reveal` / `.reveal-delay-N` classes triggered by IntersectionObserver in `main.js`. Requires `body.js-loaded` to be present (set immediately on script load) — this is a progressive enhancement guard so content is visible if JS fails.
- **Mobile nav** toggles `.open` on the `<nav>` element via `.nav-toggle` button; hidden above 900px breakpoint.
- All content is hard-coded HTML — no CMS or data layer.

## Serving Locally

```bash
python3 -m http.server 8080
```

## GitHub Pages Constraints

- Static files only — no server-side code, no Jekyll (not configured)
- All assets must be relative paths from the repo root
- The `.claude/` directory is ignored by GitHub Pages
