import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
<<<<<<< HEAD
const site = "https://rrsolutionsofficials.in";
const publicPages = [
  ["index.html", ""],
  ["website-development.html", "website-development"],
  ["custom-software-development.html", "custom-software-development"],
  ["mobile-app-development.html", "mobile-app-development"],
  ["ai-automation.html", "ai-automation"],
  ["api-development.html", "api-development"],
  ["crm-development.html", "crm-development"],
  ["erp-development.html", "erp-development"],
  ["cloud-solutions.html", "cloud-solutions"],
  ["ui-ux-design.html", "ui-ux-design"],
  ["ecommerce-solutions.html", "ecommerce-solutions"],
  ["digital-marketing.html", "digital-marketing"],
  ["support-maintenance.html", "support-maintenance"],
  ["blog.html", "blog"]
];
const servicePages = publicPages.slice(1, 13).map(([file]) => file);
const requiredFiles = [
  "404.html", "privacy.html", "terms.html", "robots.txt", "sitemap.xml", "manifest.json", "site.webmanifest",
  "humans.txt", "llms.txt", "security.txt", "browserconfig.xml", "rss.xml", "_headers", "vercel.json",
  "assets/css/style.css", "assets/css/site.css", "assets/js/main.js", "assets/icons/favicon-32.png",
  "assets/icons/icon-192.png", "assets/icons/icon-512.png", "assets/images/rr-solutions-logo.webp",
  "assets/images/rr-solutions-social.jpg"
=======
const requiredFiles = [
  "index.html",
  "404.html",
  "privacy.html",
  "terms.html",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "_headers",
  "vercel.json",
  "assets/css/style.css",
  "assets/css/site.css",
  "assets/js/main.js",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

const requiredHomeMetadata = [
  /<title>[^<]+<\/title>/i,
  /<meta name="description" content="[^"]+"/i,
  /<link rel="canonical" href="https:\/\/rrsolutionsofficials\.in\/"/i,
  /<meta property="og:title" content="[^"]+"/i,
  /<meta name="twitter:card" content="summary_large_image"/i,
  /application\/ld\+json/i
>>>>>>> 4c317426d684bae14ee571a720536a0f0e3b071a
];

async function assertExists(path) {
  try {
    await access(resolve(root, path));
  } catch {
    throw new Error("Missing required file: " + path);
  }
}

<<<<<<< HEAD
function getAttribute(source, name) {
  const expression = new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]+)"`, "i");
  return source.match(expression)?.[1] || "";
}

function getCanonical(source) {
  return source.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] || "";
}

function countMatches(source, expression) {
  return [...source.matchAll(expression)].length;
}

async function assertLocalReferences(file, source) {
  const references = [...source.matchAll(/(?:href|src)="([^"]+)"/gi)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|#|javascript:|data:)/i.test(reference)) continue;
    const localPath = reference.split(/[?#]/, 1)[0];
    if (!localPath || localPath === "/") continue;
    const relativePath = localPath.replace(/^\//, "");
    try {
      await assertExists(relativePath);
    } catch {
      if (!relativePath.includes(".")) {
        await assertExists(relativePath + ".html");
      } else {
        throw new Error(`Broken local reference in ${file}: ${reference}`);
      }
    }
  }
}

for (const file of [...requiredFiles, ...publicPages.map(([file]) => file), "custom-software.html"]) {
  await assertExists(file);
}

const [siteCss, mainScript, sitemap, vercelRaw, manifestRaw] = await Promise.all([
  readFile(resolve(root, "assets/css/site.css"), "utf8"),
  readFile(resolve(root, "assets/js/main.js"), "utf8"),
  readFile(resolve(root, "sitemap.xml"), "utf8"),
  readFile(resolve(root, "vercel.json"), "utf8"),
  readFile(resolve(root, "manifest.json"), "utf8")
]);

JSON.parse(vercelRaw);
JSON.parse(manifestRaw);

if (mainScript.includes(".innerHTML")) throw new Error("Unsafe dynamic HTML insertion remains in main.js.");
if (!siteCss.includes(":focus-visible") || !siteCss.includes("prefers-reduced-motion")) {
  throw new Error("Accessibility CSS safeguards are missing.");
}
if (!vercelRaw.includes("Strict-Transport-Security") || !vercelRaw.includes("Content-Security-Policy")) {
  throw new Error("Required security headers are missing from Vercel configuration.");
}

const seenTitles = new Set();
for (const [file, slug] of publicPages) {
  const source = await readFile(resolve(root, file), "utf8");
  const title = source.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
  const description = getAttribute(source, "description");
  const canonical = getCanonical(source);
  const expectedCanonical = slug ? `${site}/${slug}` : `${site}/`;

  if (!/<html\s+lang="en-IN"/i.test(source)) throw new Error("Missing en-IN language declaration: " + file);
  if (!/<meta\s+charset="utf-8"/i.test(source)) throw new Error("Missing UTF-8 charset: " + file);
  if (!/<meta\s+name="viewport"/i.test(source)) throw new Error("Missing viewport tag: " + file);
  if (!/<meta\s+name="robots"\s+content="index,follow/i.test(source)) throw new Error("Missing indexing directive: " + file);
  if (!title || title.length > 60) throw new Error("Missing or overlong title tag: " + file);
  if (seenTitles.has(title)) throw new Error("Duplicate title tag: " + title);
  seenTitles.add(title);
  if (description.length < 70 || description.length > 160) throw new Error("Meta description is outside 70-160 characters: " + file);
  if (canonical !== expectedCanonical) throw new Error(`Canonical mismatch in ${file}: ${canonical}`);
  if (!/<meta\s+property="og:title"/i.test(source) || !/<meta\s+property="og:description"/i.test(source)) {
    throw new Error("Open Graph metadata is incomplete: " + file);
  }
  if (!/<meta\s+name="twitter:card"\s+content="summary_large_image"/i.test(source)) {
    throw new Error("Twitter card metadata is incomplete: " + file);
  }
  if (countMatches(source, /<h1(?:\s|>)/gi) !== 1) throw new Error("Page must have exactly one H1: " + file);
  if (!/<main(?:\s|>)/i.test(source)) throw new Error("Missing main landmark: " + file);
  if (countMatches(source, /<img\b(?![^>]*\balt=)[^>]*>/gi) > 0) throw new Error("Image missing alt text: " + file);
  const schemaBlocks = [...source.matchAll(/<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/gi)];
  if (!schemaBlocks.length) throw new Error("Missing structured data: " + file);
  for (const block of schemaBlocks) JSON.parse(block[1]);
  await assertLocalReferences(file, source);
}

for (const file of servicePages) {
  const source = await readFile(resolve(root, file), "utf8");
  for (const schemaType of ["Service", "FAQPage", "BreadcrumbList"]) {
    if (!source.includes(`"@type":"${schemaType}"`) && !source.includes(`"@type": "${schemaType}"`)) {
      throw new Error(`Missing ${schemaType} schema: ${file}`);
    }
  }
  if (countMatches(source, /<li><a href="\/?[a-z0-9-]+(?:\.html)?">/gi) < 5) {
    throw new Error("Insufficient contextual service links: " + file);
  }
}

for (const [, slug] of publicPages) {
  const url = slug ? `${site}/${slug}` : `${site}/`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) throw new Error("Missing sitemap URL: " + url);
}

const legacy = await readFile(resolve(root, "custom-software.html"), "utf8");
if (!/noindex,follow/i.test(legacy) || !/custom-software-development/i.test(legacy)) {
  throw new Error("Legacy custom-software redirect is invalid.");
}

const htmlFiles = (await readdir(root)).filter((file) => file.endsWith(".html"));
console.log(`SEO validation passed for ${publicPages.length} indexable pages and ${htmlFiles.length} HTML documents.`);
=======
for (const file of requiredFiles) await assertExists(file);

const [home, servicePage, siteCss, mainScript] = await Promise.all([
  readFile(resolve(root, "index.html"), "utf8"),
  readFile(resolve(root, "website-development.html"), "utf8"),
  readFile(resolve(root, "assets/css/site.css"), "utf8"),
  readFile(resolve(root, "assets/js/main.js"), "utf8")
]);

for (const pattern of requiredHomeMetadata) {
  if (!pattern.test(home)) throw new Error("Homepage metadata check failed: " + pattern);
}

if (home.includes("logo-fix.css") || servicePage.includes("logo-fix.css")) {
  throw new Error("Found stale stylesheet reference.");
}

if (mainScript.includes(".innerHTML")) {
  throw new Error("Unsafe dynamic HTML insertion remains in main.js.");
}

if (!siteCss.includes(":focus-visible") || !siteCss.includes("prefers-reduced-motion")) {
  throw new Error("Accessibility CSS safeguards are missing.");
}

const htmlFiles = (await readdir(root)).filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const source = await readFile(resolve(root, file), "utf8");
  if (!/<meta name="viewport"/i.test(source)) throw new Error("Missing viewport tag: " + file);
  if (file !== "404.html" && !/<main(?:\s|>)/i.test(source)) throw new Error("Missing main landmark: " + file);
}

console.log("Static validation passed for " + htmlFiles.length + " HTML documents.");
>>>>>>> 4c317426d684bae14ee571a720536a0f0e3b071a
