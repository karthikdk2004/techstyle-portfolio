import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const URL = 'http://localhost:8080';

const HEIGHTS = [
  { label: '768', width: 1440, height: 768 },
  { label: '900', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

async function run() {
  const browser = await chromium.launch({ headless: true });

  for (const vp of HEIGHTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible')));
    await page.waitForTimeout(800);

    // Click the "View Resume" button
    await page.locator('button:has-text("View Resume")').first().click();
    await page.waitForTimeout(600);

    // Screenshot modal at top (shows header is visible)
    await page.screenshot({ path: path.join(OUT, `modal-${vp.label}-top.png`), fullPage: false });
    console.log(`Saved: modal-${vp.label}-top.png`);

    // Scroll the modal body to the bottom
    await page.evaluate(() => {
      const scrollable = document.querySelector('[role="dialog"] .overflow-y-auto');
      if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
    });
    await page.waitForTimeout(300);

    // Screenshot modal scrolled to bottom (confirms Skills section is reachable)
    await page.screenshot({ path: path.join(OUT, `modal-${vp.label}-bottom.png`), fullPage: false });
    console.log(`Saved: modal-${vp.label}-bottom.png`);

    await ctx.close();
  }

  await browser.close();
  console.log('\nDone.');
}

run().catch(err => { console.error(err); process.exit(1); });
