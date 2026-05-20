# AGENTS.md

## Overview
Personal GitHub Pages site (jorgedipra.github.io). Static Vue SPA served from `index.html`, with versioned JS/CSS assets in `/js` and `/css`.

## Key files
- `index.html` — SPA entry point
- `data.json` — portfolio items content (articulos array)
- `sitemap.xml`, `robots.txt` — SEO files

## Static assets
- Versioned JS: `js/app.[hash].js`, `js/chunk-vendors.[hash].js`
- Versioned CSS: `css/app.[hash].css`, `css/chunk-vendors.[hash].css`
- Fonts in `/fonts/`, images in `/img/`

## No build system
This repo has no package.json, no npm scripts, no CI workflows. It is a plain static site. Edit the source files (Vue components, data.json) directly — there is no compilation step to run.