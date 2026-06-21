import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;
const URL = 'https://karthikreddy-techstyle-portfolio.vercel.app/';

const SECTIONS = [
  { id: 'after-hero',         scrollTo: 0,    fullVp: true },
  { id: 'after-nav-scrolled', scrollTo: 400,  fullVp: true },
  { id: 'after-projects',     selector: '#projects' },
  { id: 'after-contact',      selector: '#contact' },
];

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
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible')));
    await page.waitForTimeout(1000);

    // Hero at scroll 0
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-after-hero.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-after-hero.png`);

    // Nav when scrolled (check opacity)
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-after-nav-scrolled.png`), fullPage: false });
    console.log(`Saved: ${vp.name}-after-nav-scrolled.png`);

    // Projects section
    const proj = page.locator('#projects').first();
    if (await proj.count() > 0) {
      await proj.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await proj.screenshot({ path: path.join(OUT, `${vp.name}-after-projects.png`) });
      console.log(`Saved: ${vp.name}-after-projects.png`);
    }

    // Contact section
    const contact = page.locator('#contact').first();
    if (await contact.count() > 0) {
      await contact.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await contact.screenshot({ path: path.join(OUT, `${vp.name}-after-contact.png`) });
      console.log(`Saved: ${vp.name}-after-contact.png`);
    }

    await ctx.close();
  }

  await browser.close();
  console.log('\nDone.');
}

run().catch(err => { console.error(err); process.exit(1); });
