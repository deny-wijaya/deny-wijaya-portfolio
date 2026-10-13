// Screenshots one Work card in light and dark mode so you can check the
// showcase next to the glass text panel, the way visitors see it.
//
// usage: node check-card.js <baseUrl> <projectId> <outDir> [--width 1440]
// e.g.   node check-card.js http://localhost:3000 bali-trail-running /tmp/check
//
// Writes <projectId>-light.png and <projectId>-dark.png (desktop width), plus
// <projectId>-mobile.png at 390px wide.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i === -1 ? fallback : process.argv[i + 1];
}

async function shot(browser, url, id, theme, width, file) {
  const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
  // The site reads localStorage.theme before first paint.
  await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
  await page.goto(url, { waitUntil: "load" });
  const card = page.locator(`#${id}`);
  await card.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500); // let reveal animations and next/image finish
  await card.screenshot({ path: file });
  await page.close();
  console.log("saved", file);
}

(async () => {
  const [base, id, outDir] = process.argv.slice(2);
  const width = +arg("--width", 1440);
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  await shot(browser, base, id, "light", width, path.join(outDir, `${id}-light.png`));
  await shot(browser, base, id, "dark", width, path.join(outDir, `${id}-dark.png`));
  await shot(browser, base, id, "dark", 390, path.join(outDir, `${id}-mobile.png`));
  await browser.close();
})();
