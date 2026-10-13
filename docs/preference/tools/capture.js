// Full-page capture of a live page for showcase collages.
//
// usage: node capture.js <url> <out.png> [--width 1440] [--height 900] [--mobile] [--wait 6000]
//
// Captures at 2x device scale. Scrolls the page first so scroll-reveal sections
// and lazy images render. Check every output: skeleton loaders, cookie banners,
// rate-limit pages and blank embeds (maps, iframes) must not end up in a collage.
const { chromium } = require("playwright-core");

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i === -1 ? fallback : process.argv[i + 1];
}

(async () => {
  const [url, out] = process.argv.slice(2);
  const mobile = process.argv.includes("--mobile");
  const width = +arg("--width", mobile ? 390 : 1440);
  const height = +arg("--height", mobile ? 844 : 900);
  const wait = +arg("--wait", 6000);

  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2,
    isMobile: mobile,
    hasTouch: mobile,
  });
  // "networkidle" never settles on pages that poll, so wait on load plus a fixed delay.
  await page.goto(url, { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(wait);

  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2500);

  await page.screenshot({ path: out, fullPage: true });
  console.log(`${out}  ${width}px wide, ${total}px tall (css px)`);
  await browser.close();
})();
