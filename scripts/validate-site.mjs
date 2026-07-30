import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
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
];

async function assertExists(path) {
  try {
    await access(resolve(root, path));
  } catch {
    throw new Error("Missing required file: " + path);
  }
}

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
