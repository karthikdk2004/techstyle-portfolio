import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const URL = 'https://karthikreddy-techstyle-portfolio.vercel.app/';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

async function run() {
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });

    // Force all scroll-reveal elements visible
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible')));
    await page.waitForTimeout(800);

    // 1. Full-page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-fullpage.png`), fullPage: true });
    console.log(`Saved: ${vp.name}-fullpage.png`);

    // 2. Hero (viewport, top of page)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-hero.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-hero.png`);

    // 3. Nav scrolled state (scroll 400px down)
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-nav-scrolled.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-nav-scrolled.png`);

    // 4. Projects section
    const proj = page.locator('#projects').first();
    if (await proj.count() > 0) {
      await proj.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await proj.screenshot({ path: path.join(OUT, `${vp.name}-projects.png`) });
      console.log(`Saved: ${vp.name}-projects.png`);
    }

    // 5. Contact section
    const contact = page.locator('#contact').first();
    if (await contact.count() > 0) {
      await contact.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await contact.screenshot({ path: path.join(OUT, `${vp.name}-contact.png`) });
      console.log(`Saved: ${vp.name}-contact.png`);
    }

    // 6. Resume modal — top (shows header)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.locator('button:has-text("View Resume")').first().click();
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-modal-top.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-modal-top.png`);

    // 7. Resume modal — scrolled to bottom (shows Skills section)
    await page.evaluate(() => {
      const scrollable = document.querySelector('[role="dialog"] .overflow-y-auto');
      if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
    });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-modal-bottom.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-modal-bottom.png`);

    await ctx.close();
  }

  await browser.close();
  console.log('\nAll done.');
}

run().catch(err => { console.error(err); process.exit(1); });
