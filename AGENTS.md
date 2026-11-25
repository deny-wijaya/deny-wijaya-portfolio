# AGENTS.md

Personal portfolio site for Deny Wijaya. Single page, built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 4. Deployed on Vercel. The full spec is `docs/prd/PRD.md`; follow it for any visual or content change.

## Commands

```bash
yarn dev     # dev server at http://localhost:3000
yarn build   # production build, run this to verify changes compile
yarn lint    # eslint (eslint-config-next core-web-vitals + typescript)
```

There are no tests. Verify changes with `yarn build` and by checking the page in the browser in both light and dark mode.

## UI check (required for every UI change)

Any change that affects what the page shows (components, CSS, copy, images) must be checked on phone and desktop before you call it done. Take screenshots with Playwright and look at each one. Fix the problem first, then take new screenshots.

```bash
yarn dev   # keep it running; if it exits with a Next.js upgrade notice, start it again

# phone (390px) and desktop (1440px), light and dark, one section per shot
for c in light dark; do
  npx -y playwright screenshot --channel chrome --viewport-size=390,844  --color-scheme=$c --wait-for-timeout=800 "http://localhost:3000/#experience" /tmp/phone-$c.png
  npx -y playwright screenshot --channel chrome --viewport-size=1440,900 --color-scheme=$c --wait-for-timeout=800 "http://localhost:3000/#experience" /tmp/desktop-$c.png
done
```

- Change `#experience` to the section you touched (`#work`, `#about`, `#contact`, or no anchor for the hero). Also check 360px when the change affects small phones (`max-[420px]:`).
- `--channel chrome` uses the Google Chrome already installed, so nothing has to be downloaded. Run Playwright with `npx`; do not add it to `package.json`.
- Use one viewport shot per section. A `--full-page` shot of the whole site is too tall to read.
- In each screenshot, look for: text you cannot read (low contrast, text over an image, text that is cut off or overflows its box), horizontal scroll, overlapping or squeezed components, broken images, and anything that looks different between light and dark.
- Content inside a tab or menu that is closed is not in the screenshot. If you changed it, open it in the browser and check it.
- In your report, name the sections and widths you checked, and say what you did not check.

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
- Project images in the Work section are showcase collages built from real screenshots. Before making or changing one, read `docs/preference/README.md` and follow its house style, patterns, and checklist. Put the result in `public/images/` as `<id>-showcase.jpg` and set `image` on that project (16:10 ratio). For the About portrait, set `profile.aboutPhoto` (3:4 ratio).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
