// Captures one element (a section, an embed) at viewport size, for content that
// renders blank in a full-page capture: maps, iframes, canvas, video.
//
// usage: node capture-element.js <url> <selector> <out.png> [--width 1440] [--height 900] [--mobile] [--settle 15000]
// e.g.   node capture-element.js https://balicoasttrail.com/categories/bct50k "section:has(iframe)" captures/bct-50k-map.png
//
// The output is a normal capture: use it in a layout with "srcW" set to the
// element's css width (printed below), and "y" measured from the element's top.
const { chromium } = require("playwright-core");

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i === -1 ? fallback : process.argv[i + 1];
}

(async () => {
  const [url, selector, out] = process.argv.slice(2);
  const mobile = process.argv.includes("--mobile");
  const width = +arg("--width", mobile ? 390 : 1440);
  const height = +arg("--height", mobile ? 844 : 900);
  const settle = +arg("--settle", 15000);

  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2,
    isMobile: mobile,
    hasTouch: mobile,
  });
  await page.goto(url, { waitUntil: "load", timeout: 60000 });
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(settle);
  // Sticky headers and floating buttons would be painted over the element.
  await el.evaluate((target) => {
    for (const node of document.querySelectorAll("body *")) {
      const pos = getComputedStyle(node).position;
      if ((pos === "fixed" || pos === "sticky") && !node.contains(target) && !target.contains(node)) {
        node.style.visibility = "hidden";
      }
    }
  });
  const box = await el.boundingBox();
  await el.screenshot({ path: out });
  console.log(`${out}  element ${Math.round(box.width)}x${Math.round(box.height)} css px`);
  await browser.close();
})();
