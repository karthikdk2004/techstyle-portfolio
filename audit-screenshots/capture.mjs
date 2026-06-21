import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const URL = 'http://localhost:8080';

const SECTIONS = [
  { id: 'hero',         selector: null,            scrollTo: 0 },
  { id: 'about',        selector: '#about',        scrollTo: null },
  { id: 'skills',       selector: '#skills',       scrollTo: null },
  { id: 'projects',     selector: '#projects',     scrollTo: null },
  { id: 'achievements', selector: '#achievements', scrollTo: null },
  { id: 'contact',      selector: '#contact',      scrollTo: null },
  { id: 'footer',       selector: 'footer',        scrollTo: null },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

async function run() {
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();

    // Full page screenshot
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500); // let animations settle
    // Force all data-reveal elements visible for screenshots
    await page.evaluate(() => {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
    });
    await page.waitForTimeout(500);

    const fullPath = path.join(OUT, `${vp.name}-full.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved: ${fullPath}`);

    // Per-section screenshots
    for (const sec of SECTIONS) {
      if (sec.selector) {
        const el = page.locator(sec.selector).first();
        const count = await el.count();
        if (count > 0) {
          await el.scrollIntoViewIfNeeded();
          await page.waitForTimeout(300);
          const secPath = path.join(OUT, `${vp.name}-${sec.id}.png`);
          await el.screenshot({ path: secPath });
          console.log(`Saved: ${secPath}`);
        }
      }
    }

    // Nav screenshot (viewport, not full page)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);
    const navPath = path.join(OUT, `${vp.name}-nav.png`);
    await page.screenshot({ path: navPath, fullPage: false });
    console.log(`Saved: ${navPath}`);

    await ctx.close();
  }

  // OG preview simulation: 1200x630 viewport, screenshot of hero area
  const ogCtx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
  const ogPage = await ogCtx.newPage();
  await ogPage.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await ogPage.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
  });
  await ogPage.waitForTimeout(800);
  const ogPath = path.join(OUT, 'og-preview.png');
  await ogPage.screenshot({ path: ogPath, fullPage: false });
  console.log(`Saved: ${ogPath}`);
  await ogCtx.close();

  await browser.close();
  console.log('\nAll screenshots done.');
}

run().catch(err => { console.error(err); process.exit(1); });
