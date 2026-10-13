# AGENTS.md

Personal portfolio site for Deny Wijaya. Single page, built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 4. Deployed on Vercel. The full spec is `docs/prd/PRD.md`; follow it for any visual or content change.

## Commands

```bash
yarn dev     # dev server at http://localhost:3000
yarn build   # production build, run this to verify changes compile
yarn lint    # eslint (eslint-config-next core-web-vitals + typescript)
```

There are no tests. Verify changes with `yarn build` and by checking the page in the browser in both light and dark mode.

Use yarn so `yarn.lock` stays the only lockfile.

## Structure

- `app/layout.tsx` loads the Geist fonts (npm `geist`), metadata, and the inline anti-flash theme script.
- `app/page.tsx` composes the sections and renders the JSON-LD `Person`.
- `app/globals.css` holds the color tokens for light and dark, the `@theme inline` mapping, small component classes, and keyframes.
- `app/icon.svg` is the favicon, `app/opengraph-image.tsx` generates the OG image.
- `components/` has one file per section (`Hero`, `Work`, `Experience`, `About`, `Skills`, `Contact`) plus `Nav`, `ThemeToggle`, `SideRails`, `SectionHeading`, `ProjectVisual`, `ProjectNotes`.
- `content/site.ts` holds all copy and data. Components only render it.
- `public/images/` and `public/cv/` hold the portrait and the CV PDF.
- `docs/prd/` holds the PRD and the design references (`prd-kit/reference/*.dc.html`). These are design canvas files, not code to copy.

## Conventions

- Import with the `@/` alias, which points to the project root (`@/components/Hero`, `@/content/site`).
- Only `Nav`, `ThemeToggle`, `Experience`, and `ProjectNotes` are client components. Keep everything else as Server Components.
- Colors always go through the tokens (`bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `bg-surface`, `bg-glass`). Do not use `dark:` for colors; the tokens switch with `data-theme` on `<html>`. `dark:` is only used to swap the sun and moon icons.
- Breakpoints are overridden: `md:` is 860px and up, `lg:` is 1100px and up. Use `min-[1500px]:` for the side rails and `max-[420px]:` for small phones.
- Theme is stored in `localStorage.theme` (`light` or `dark`). Without a saved choice it follows the OS.
- No extra dependencies (no icon library, no animation library, no `next-themes`). Icons are inline SVG.

## Content

- Edit copy in `content/site.ts`. Site copy is in English and must match the PRD; do not add metrics or claims that are not in it.
- To replace a project placeholder with a real screenshot, put the image in `public/images/` and set `image` on that project (16:10 ratio). For the About portrait, set `profile.aboutPhoto` (3:4 ratio).
