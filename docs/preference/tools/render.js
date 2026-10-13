// Renders a showcase collage from a layout JSON and full-page captures.
//
// usage: node render.js <layout.json> <out.png>
//
// The canvas is 1600x1000 css px rendered at 2x (3200x2000), which is 16:10.
// Export the PNG to a 2400x1500 JPEG for public/images/ (see README).
//
// Layout JSON:
// {
//   "srcDir": "path/to/captures",            // relative to the layout file
//   "background": "<css background>",        // one brand-color gradient, 135deg
//   "stage": "<css transform>",              // optional, e.g. "perspective(2400px) rotateX(28deg) rotateZ(-24deg)"
//   "tiles": [{
//     "src": "capture.png",                  // full-page capture in srcDir
//     "srcW": 1440,                          // css width the capture was taken at
//     "y": 0, "sx": 0,                       // crop origin in the capture, css px
//     "scale": 0.55,                         // optional, defaults to w / srcW
//     "x": 350, "top": 70, "w": 800, "h": 500, // tile box on the canvas
//     "kind": "screen" | "phone" | "chip" | "panel", // frame style, default "screen"
//     "color": "#e3f4fb",                    // panel only: fill color (a tint of the brand color)
//     "rotate": 0, "z": 1                    // optional per-tile rotation (deg) and stacking
//   }]
// }
//
// A "panel" is a colored bento cell with no image. Put phones or chips on top of
// it with a higher "z" so they sit inside the cell.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const W = 1600;
const H = 1000;

function tile(t, srcDir) {
  if (t.kind === "panel") {
    const box = `left:${t.x}px;top:${t.top}px;width:${t.w}px;height:${t.h}px;z-index:${t.z ?? 0};background:${t.color}`;
    return `<div class="tile panel" style="${box}"></div>`;
  }
  const scale = t.scale ?? t.w / t.srcW;
  const img = `width:${t.srcW * scale}px;max-width:none;transform:translate(${-(t.sx || 0) * scale}px,${-t.y * scale}px)`;
  const box = [
    `left:${t.x}px`,
    `top:${t.top}px`,
    `width:${t.w}px`,
    `height:${t.h}px`,
    `z-index:${t.z ?? 1}`,
    t.rotate ? `transform:rotate(${t.rotate}deg)` : "",
  ].join(";");
  return `<div class="tile ${t.kind || "screen"}" style="${box}"><img src="file://${path.join(srcDir, t.src)}" style="${img}"></div>`;
}

(async () => {
  const [layoutPath, out] = process.argv.slice(2);
  const cfg = JSON.parse(fs.readFileSync(layoutPath, "utf8"));
  const srcDir = path.resolve(path.dirname(layoutPath), cfg.srcDir || ".");

  const html = `<!doctype html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:${W}px;height:${H}px;overflow:hidden;background:${cfg.background}}
    .stage{position:absolute;inset:0;transform:${cfg.stage || "none"};transform-origin:50% 50%;transform-style:preserve-3d}
    .tile{position:absolute;overflow:hidden;background:#fff}
    .tile img{display:block}
    .screen{border-radius:14px;box-shadow:0 30px 60px -20px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.08)}
    .phone{border-radius:34px;box-shadow:0 30px 60px -20px rgba(0,0,0,.5),0 0 0 7px #0d0f14,0 0 0 8px rgba(255,255,255,.12)}
    .chip{border-radius:16px;box-shadow:0 24px 48px -16px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)}
    .panel{border-radius:20px}
  </style></head><body><div class="stage">${cfg.tiles.map((t) => tile(t, srcDir)).join("")}</div></body></html>`;

  const htmlPath = out.replace(/\.png$/, ".html");
  fs.writeFileSync(htmlPath, html);

  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  await page.goto("file://" + path.resolve(htmlPath));
  await page.waitForTimeout(500);
  await page.screenshot({ path: out });
  await browser.close();
  console.log("rendered", out);
})();
