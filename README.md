<div align="center">

<img src="public/images/dw-pixel.png" alt="Pixel-art portrait of Deny Wijaya" width="128" />

# Deny Wijaya

**Front-End & Mobile Developer · Denpasar, Bali**

The source for my personal portfolio: a single page that shows my work, experience, and how to reach me.

[denywijaya.com](https://denywijaya.com) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/denywijaya14/) &nbsp;·&nbsp; [GitHub](https://github.com/deny-wijaya) &nbsp;·&nbsp; [Email](mailto:denyekayana@gmail.com)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

<br />

## Overview

The site is one page with four sections: **Work**, **Experience**, **About**, and **Contact**. Featured projects include Karna, Bali Coast Trail, Bali Trail Running, and Bali Bird Park, each shown with a showcase collage made from real screenshots.

A few details worth knowing:

- Light and dark themes. The site follows the OS setting until you pick one, and the choice is saved in `localStorage`. An inline script in `<head>` applies the theme before the first paint, so there is no flash.
- All copy and data live in one file, `content/site.ts`. Components only render it.
- No runtime dependencies beyond Next.js, React, and the Geist font. Icons are inline SVG, and there is no animation or theme library.
- SEO basics are built in: metadata, a generated Open Graph image, a favicon, and a JSON-LD `Person` schema.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript in strict mode |
| Styling | Tailwind CSS 4 with CSS color tokens |
| Typography | Geist Sans and Geist Mono |
| Hosting | Vercel, Node.js 24.x |

## Getting started

You need Node.js 24.x and Yarn 1.

```bash
yarn install
yarn dev      # http://localhost:3000
```

Other scripts:

```bash
yarn build    # production build, use it to check that everything compiles
yarn start    # serve the production build
yarn lint     # ESLint (core-web-vitals + typescript)
```

There are no automated tests. To check a change, run `yarn build` and look at the page in the browser in both light and dark mode.

## Project structure

```text
app/
  layout.tsx              fonts, metadata, anti-flash theme script
  page.tsx                composes the sections, renders JSON-LD
  globals.css             color tokens (light/dark), @theme mapping, keyframes
  icon.svg                favicon
  opengraph-image.tsx     generated OG image
components/               one file per section, plus Nav, ThemeToggle, SideRails, ...
content/site.ts           all copy and data
public/images/            portrait and project showcase images
public/cv/                CV as PDF
docs/prd/                 product spec (PRD.md) and design references
docs/preference/          house style for project showcase images
```

## Editing content

- **Copy and links.** Edit `content/site.ts`. The text must match `docs/prd/PRD.md`.
- **Project images.** Read `docs/preference/README.md` first. Save the result as `public/images/<id>-showcase.jpg` (16:10) and set `image` on that project.
- **CV.** Replace the file in `public/cv/` and update `profile.resumeUrl`. Set it to `null` to hide the Resume link.
- **Colors.** Use the tokens (`bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `bg-surface`, `bg-glass`). They switch with `data-theme` on `<html>`, so `dark:` is not used for colors.

## Deployment

The site is hosted on Vercel and runs on Node.js 24.x, which is pinned in `package.json`. The site URL comes from `NEXT_PUBLIC_SITE_URL` and falls back to `https://denywijaya.com`.

<br />

<div align="center">

<sub>Built by Deny Wijaya in Bali.</sub>

</div>
