# Project showcase preference

Read this before making or changing a project image for the Work section (`project.image` in `content/site.ts`). The goal is showcase images that feel alive, like the Dribbble shots below, while every project in the section still looks like part of one set.

A showcase is a collage made from real screenshots of the shipped product. It is rendered from a layout JSON with the tools in `tools/`, so it can be adjusted and regenerated instead of hand-edited.

## Folder map

| Path | What it holds | In git |
| --- | --- | --- |
| `README.md` | This guide | yes |
| `tools/capture.js` | Full-page capture of a live URL (desktop or mobile) | yes |
| `tools/render.js` | Renders a layout JSON into a 16:10 collage | yes |
| `tools/fetch-samples.sh` | Downloads the Dribbble reference shots into `samples/` | yes |
| `tools/check-card.js` | Screenshots one Work card in light, dark, and mobile to check the result on the real page | yes |
| `layouts/*.json` | Layouts for shipped showcases plus starter layouts per pattern | yes |
| `examples/*.jpg` | Small previews of our own patterns (wall, tilted grid, hero + chips) | yes |
| `captures/` | Raw full-page captures used by the layouts | no (large, regenerable) |
| `samples/` | Dribbble reference shots | no (other designers' work) |

`captures/` and `samples/` are gitignored, so a fresh clone or a git worktree starts without them. Get them in this order:

1. If you are in a worktree, copy both folders from the main checkout (`cp -R <main-checkout>/docs/preference/{captures,samples} docs/preference/`). This avoids hitting production sites again.
2. If `samples/` is still empty, run `bash docs/preference/tools/fetch-samples.sh`.
3. If `captures/` is still empty, recapture with the URLs listed in each layout's `captures` field.

## House style (always the same)

These rules keep the set consistent. Do not change them per project.

- **Canvas.** 1600×1000 css px rendered at 2x, exported as a 2400×1500 JPEG (quality 82). The card shows it at 16:10 with `object-cover`, so any other ratio gets cropped.
- **File name.** The first version is `public/images/<project-id>-showcase.jpg`. When you replace a shipped image, bump the suffix (`-showcase-v2.jpg`, `-showcase-v3.jpg`), point `content/site.ts` at the new file, and `git rm` the old one. A new name keeps the browser and the Next.js image cache from serving the old picture.
- **Background.** One brand color of the project as a 135deg linear gradient with 2 or 3 stops, dark to light. Take the color from the product itself (Bali Coast Trail navy, Bali Trail Running cyan). No photos, textures, noise, or second hue.
- **Frames.** Use only the three frame kinds in `render.js`. `screen` has a 14px radius and a soft drop shadow. `phone` has a 34px radius with a 7px `#0d0f14` bezel. `chip` has a 16px radius for small cropped UI pieces. Do not draw browser chrome, laptops, notches, or 3D devices.
- **Content.** Only real screenshots of the real product. No added headlines, slogans, logos, stats, badges, cursor arrows, or decorative props. The card already has the project name and copy next to the image, and the PRD forbids claims that are not in it.
- **Scale.** The image displays at about 840px wide. Main tiles must stay readable at that size, so the hero tile should be at least 700 canvas px wide.
- **Light and dark.** The collage sits on `bg-paper` in both themes. A saturated brand background works on both. Avoid near-white or near-black backgrounds that merge with the page.

## Composition (how to keep it from feeling rigid)

- **One focal tile.** Pick the strongest screen (usually the hero) and make it the largest tile, fully visible, near the center. Everything else supports it.
- **Bleed off the edges.** For wall, long-scroll pair, and tilted grid, at least two sides of the canvas should cut tiles in half. That makes the product feel bigger than the frame, which is what the Knaub and Luxury Property shots do. Hero + chips, phone fan, dashboard focus, and flow storyboard keep the main tiles inside the canvas, but at least one secondary tile should still run off an edge so the composition does not look boxed in.
- **Stagger, do not align.** Neighboring columns start at different `top` values (offsets of 80 to 500px). Never put tiles in a neat equal grid unless the whole stage is tilted.
- **Mix sizes and devices.** Combine one large desktop tile, several narrow desktop strips, and 2 or 3 phones. Phones read as "this also works on mobile" without any text.
- **Show different sections.** Each tile shows a different part of the product (hero, pricing cards, form, list, footer CTA). Do not repeat the same crop within 300px of itself.
- **Consistent gutters.** Keep about 30px between tiles in the same column and about 35px between columns.
- **Respect the text panel.** On desktop the glass text panel covers about the outer 22% of the image width (canvas x ≥ 1240 when `reversed: false`, x ≤ 360 when `reversed: true`) in a band from about y = 300 to y = 720. Put the focal tile and any phone fully outside that zone. Only tiles that still read when half hidden (form tops, card headers) may sit under it. On mobile, the project label and title cover about the bottom 20% of the canvas (y ≥ 800), so nothing important goes there either. Always confirm with `tools/check-card.js`.
- **Crop on meaning.** Start crops at a section heading or the top of a card, not mid-sentence. A crop that shows half a word at the top edge looks accidental.

## Patterns

Pick one pattern per project. Adjacent projects in the Work section should not use the same pattern. The references are in `samples/` (see Sources), and the starters are in `layouts/`.

| Pattern | Use it when | Dribbble reference | Starter |
| --- | --- | --- | --- |
| **Wall**: staggered columns of desktop strips and phones, edges bleeding | Marketing or event sites with many distinct sections | `knaub`, `luxury-property` | `layouts/bali-coast-trail.json`, `examples/wall.jpg` |
| **Long-scroll pair**: two tall page captures side by side, one desktop and one mobile or two desktop pages | Sites where the scroll story is the point (landing pages, content sites) | `taraq`, `aerium` | build from the wall layout with 2 tall tiles |
| **Hero + chips**: one large screen with 2 or 3 real UI pieces floating over its corners, slightly rotated | Products with one strong screen and a few key components (forms, cards, a price list) | `auto-sharks` | `layouts/example-hero-chips.json`, `examples/hero-chips.jpg` |
| **Tilted grid**: many phone screens in staggered columns, whole stage tilted with `perspective` | Mobile apps (Flutter staff app, guide rewards app) | `kaiikit` | `layouts/example-tilted-grid.json`, `examples/tilted-grid.jpg` |
| **Phone fan**: 3 to 4 phones overlapping in a row, the center one larger and in front | Mobile apps with few but strong screens | `finora` (only the phone arrangement, not the props) | build with `phone` tiles, `rotate` and `z` |
| **Dashboard focus**: one large admin screen with 2 cropped panels of the same app floating at the edges | Web admin and dashboards (Karna web admin) | `tickettool` (only the screen, not the text column) | build from the hero + chips layout |
| **Flow storyboard**: 3 to 4 screens of one flow in order, each on its own tinted panel | Multi-step flows such as registration, checkout, onboarding | `careora` | build with `screen` tiles in a 2×2 offset |

Avoid these even though they look good on Dribbble:

- `unseen` and `taskflow` depend on photographed laptops, people, or AI scenes. That cannot be made from our screenshots and reads as stock.
- The coins, piggy banks, and 3D props in `finora` and `charity`, and the headline columns in `tickettool` and `charity`. Our card already carries the text.

## Workflow

The tools use `playwright-core` with the installed Chrome. Install it outside the project so it never lands in `package.json`:

```bash
npm install --prefix /tmp/showcase-pw playwright-core@1.48.2
export NODE_PATH=/tmp/showcase-pw/node_modules
```

1. **Capture.** One command per URL in the layout's `captures` field. Desktop captures at 1440 wide, mobile at 390 wide.

   ```bash
   node docs/preference/tools/capture.js https://balicoasttrail.com docs/preference/captures/bct-home.png
   node docs/preference/tools/capture.js https://balicoasttrail.com docs/preference/captures/bct-home-m.png --mobile
   ```

   Open every capture before using it. Skeleton loaders, cookie banners, rate-limit pages, and blank maps or iframes must not reach the collage. Production sites can rate limit: capture each URL once, and wait a few minutes before retrying.

2. **Find crop offsets.** Downscale a capture to see where sections start (`sips --resampleWidth 500 in.png --out thumb.png`). Convert thumbnail pixels to css px with `cssY = thumbY × (captureCssWidth / 500)`.

3. **Write the layout.** Copy the closest starter in `layouts/`, set `background`, `captures`, `output`, and the tiles. Tile fields are documented at the top of `tools/render.js`.

4. **Render and review.**

   ```bash
   node docs/preference/tools/render.js docs/preference/layouts/<id>.json /tmp/<id>.png
   ```

   Look at the PNG and run the checklist below. Adjust `y`, `top`, and `x` and render again until it passes.

5. **Export and wire up.**

   ```bash
   sips -s format jpeg -s formatOptions 82 --resampleWidth 2400 /tmp/<id>.png --out public/images/<id>-showcase.jpg
   ```

   Set `image` on the project in `content/site.ts` to the new file (see the file name rule under House style).

6. **Check it on the real page.** The text panel and the mobile title change what is visible, and that only shows on the page itself.

   ```bash
   yarn build && yarn start -p 3124        # in a second terminal
   node docs/preference/tools/check-card.js http://localhost:3124 <id> /tmp/check
   ```

   Open `<id>-light.png`, `<id>-dark.png`, and `<id>-mobile.png`. If a key tile hides under the panel or the mobile title, move it in the layout and repeat from step 4. If you overwrite an image without renaming it during iteration, delete `.next/cache/images` and restart the server, or you will keep seeing the old picture.

## Checklist before shipping

- The focal tile and every phone are fully visible on the `check-card.js` screenshots (desktop panel and mobile title included).
- Edges bleed as the pattern requires (see Bleed off the edges).
- No tile shows a loader, an error, an empty area larger than about a third of the tile, or a black footer as its main content.
- No crop starts or ends in the middle of a heading.
- No identical crop appears twice next to each other.
- The background is one hue and matches the product.
- No text, logo, or prop was added on top of the screenshots.
- The pattern differs from the neighboring projects in the Work section.
- The file is 2400×1500, under about 1MB, named per the file name rule, and the old version is removed.

## Current assignments

| Project | `reversed` | Pattern | Layout and image |
| --- | --- | --- | --- |
| Karna | false | Dashboard focus (web admin) with phones from the staff app, not made yet | none yet |
| Bali Coast Trail | true | Wall | `layouts/bali-coast-trail.json`, `bali-coast-trail-showcase.jpg` |
| Bali Trail Running | false | Hero + chips | `layouts/bali-trail-running.json`, `bali-trail-running-showcase-v2.jpg` |
| Bali Bird Park | true | Tilted grid or phone fan (mobile app), not made yet | none yet |

## Sources

Reference shots from Dribbble, used only as layout references. All rights belong to their authors. Do not copy assets from them.

| Sample | Shot | Author |
| --- | --- | --- |
| `knaub` | [Knaub Home Solutions Marketing Website Showcase](https://dribbble.com/shots/15471312-Knaub-Home-Solutions-Marketing-Website-Showcase) | Matt Olpinski |
| `luxury-property` | [Luxury Property Website Showcase](https://dribbble.com/shots/27564996-Luxury-Property-Website-Showcase) | UI Wiki Studio |
| `taraq` | [TARAQ Coffee Shop Website Design](https://dribbble.com/shots/27632426-TARAQ-Coffee-Shop-Website-Design-Coffee-Brand-Ecommerce) | Jabel, Trexa Lab |
| `aerium` | [Aerium Smart Home Mobile App Showcase Website](https://dribbble.com/shots/27026810-Aerium-Smart-Home-Mobile-App-Showcase-Website-Contact-Page) | see shot |
| `auto-sharks` | [Auto Sharks Mobile Car Detailing Website Showcase](https://dribbble.com/shots/27517158-Auto-Sharks-Mobile-Car-Detailing-Website-Showcase) | Alexandru, Drawncodes |
| `tickettool` | [TicketTool Platform Admin Dashboard Showcase](https://dribbble.com/shots/27517145-TicketTool-Platform-Admin-Dashboard-Showcase) | Alexandru, Drawncodes |
| `charity` | [Muslim Charity Website Showcase](https://dribbble.com/shots/27517152-Muslim-Charity-Website-Showcase) | Alexandru, Drawncodes |
| `kaiikit` | [Kaiik'it Language learning mobile app showcase](https://dribbble.com/shots/19266970-Kaiik-it-Language-learning-mobile-app-showcase) | see shot |
| `finora` | [Finora Personal Wealth and Budgeting Mobile App Showcase](https://dribbble.com/shots/27726280-Finora-Personal-Wealth-Budgeting-Mobile-App-Showcase) | see shot |
| `careora` | [Careora Guided Onboarding for Healthcare Dashboard Showcase](https://dribbble.com/shots/26295741-Careora-Guided-Onboarding-for-Healthcare-Dashboard-Showcase) | see shot |
| `unseen` | [Unseen Studio Website Showcase](https://dribbble.com/shots/20408624-Unseen-Studio-Website-Showcase) (avoid pattern) | Unseen Studio |
| `taskflow` | [TaskFlow Smart Task Management App Showcase](https://dribbble.com/shots/27726349-TaskFlow-Smart-Task-Management-Productivity-App-Showcase) (avoid pattern) | see shot |
