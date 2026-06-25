// S&S design-system verification.
// Renders every component preview (components/**/<Name>.html) in headless Chromium and
// writes a screenshot to _preview/<Name>.png — the "ability to verify" every card looks
// right before it ships to Claude Design. Run: node verify.mjs
import { chromium } from "playwright-core";
import { readdirSync, statSync, mkdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = dirname(new URL(import.meta.url).pathname);
const COMPONENTS = join(ROOT, "components");
const OUT = join(ROOT, "_preview");
mkdirSync(OUT, { recursive: true });

function findHtml(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...findHtml(p));
    else if (e.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = findHtml(COMPONENTS).sort();
const CHROMIUM = process.env.SS_CHROMIUM || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const browser = await chromium.launch({ executablePath: CHROMIUM });
const page = await browser.newPage({ viewport: { width: 1000, height: 720 }, deviceScaleFactor: 2 });
const results = [];
for (const f of files) {
  const name = basename(f, ".html");
  const errors = [];
  page.removeAllListeners("pageerror");
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(pathToFileURL(f).href, { waitUntil: "networkidle" });
  const out = join(OUT, `${name}.png`);
  await page.screenshot({ path: out, fullPage: true });
  results.push({ name, ok: errors.length === 0, errors });
  console.log(`${errors.length ? "✗" : "✓"} ${name}`);
}
await browser.close();
const bad = results.filter((r) => !r.ok);
console.log(`\n${results.length} previews rendered, ${bad.length} with JS errors.`);
if (bad.length) { for (const b of bad) console.log(`  ${b.name}: ${b.errors.join("; ")}`); process.exit(1); }
