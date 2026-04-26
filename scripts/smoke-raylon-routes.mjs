import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const appOutput = path.join(root, ".next", "server", "app");
const staticOutput = path.join(root, ".next", "static");
const publicDir = path.join(root, "public");

const routeArtifacts = new Map([
  ["/", path.join(appOutput, "page.js")],
  ["/404", path.join(appOutput, "404", "page.js")],
  ["/about-us", path.join(appOutput, "about-us", "page.js")],
  [
    "/authentication-pages/sign-up",
    path.join(appOutput, "authentication-pages", "sign-up", "page.js"),
  ],
  ["/career", path.join(appOutput, "career", "page.js")],
  ["/contact-us", path.join(appOutput, "contact-us", "page.js")],
  ["/features", path.join(appOutput, "features", "page.js")],
  ["/pricing-plan", path.join(appOutput, "pricing-plan", "page.js")],
  [
    "/utility-pages/changelog",
    path.join(appOutput, "utility-pages", "changelog", "page.js"),
  ],
]);

const bannedSourcePatterns = [
  /dangerouslySetInnerHTML/g,
  /RaylonScripts/g,
  /RaylonHtmlFragment/g,
  /RaylonSlugSection/g,
];

const bannedRuntimePatterns = [
  /\/mirrors\/raylon/g,
  /public[\\/]+mirrors/g,
  /raylon\.webflow\.io/g,
  /webflow\.com/g,
  /ajax\.googleapis\.com/g,
  /d3e54v103j8qbb\.cloudfront\.net/g,
  /cdn\.prod\.website-files\.com\/gsap/g,
  /jquery-3\.5\.1/g,
  /SplitText/g,
  /gsap\.min/g,
  /data-wf/g,
  /data-animation-type/g,
  /data-src/g,
  /data-w-id/g,
  /w-background-video/g,
  /w-commerce/g,
];

const assetRefPattern =
  /\/(?:site-assets|seo)\/[^"'`)\]\s<>,]+?\.(?:avif|png|jpe?g|svg|webp|gif|lottie|mp4|webm|css|woff2?|ttf|ico)/gi;

function walkFiles(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath, predicate));
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

const failures = [];

if (!fs.existsSync(appOutput)) {
  failures.push("Missing .next/server/app. Run `npm run build` before smoke:routes.");
}

for (const [route, artifact] of routeArtifacts) {
  if (!fs.existsSync(artifact)) {
    failures.push(`Missing static route artifact for ${route}: ${path.relative(root, artifact)}`);
  }
}

if (fs.existsSync(path.join(publicDir, "mirrors"))) {
  failures.push("Deployable public/mirrors directory still exists.");
}

const sourceFiles = walkFiles(path.join(root, "src"), (file) =>
  /\.(ts|tsx|js|jsx|css)$/.test(file),
);
const outputFiles = walkFiles(appOutput, (file) => /\.(js|json|html|rsc)$/.test(file));
const clientOutputFiles = walkFiles(staticOutput, (file) => /\.(js|css)$/.test(file));
const auditFiles = [...sourceFiles, ...outputFiles, ...clientOutputFiles];

const seenAssetRefs = new Set();

for (const filePath of auditFiles) {
  const text = readText(filePath);
  const relativePath = path.relative(root, filePath);
  const patterns =
    filePath.startsWith(path.join(root, "src")) ||
    filePath.startsWith(path.join(appOutput, "reference", "raylon"))
      ? [...bannedSourcePatterns, ...bannedRuntimePatterns]
      : bannedRuntimePatterns;

  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    if (pattern.test(text)) {
      failures.push(`Banned runtime marker ${pattern} found in ${relativePath}`);
    }
  }

  for (const match of text.matchAll(assetRefPattern)) {
    seenAssetRefs.add(match[0]);
  }
}

const missingAssets = [];
for (const ref of [...seenAssetRefs].sort()) {
  const assetPath = path.join(publicDir, decodeURIComponent(ref.slice(1)));
  if (!fs.existsSync(assetPath)) {
    missingAssets.push(ref);
  }
}

if (missingAssets.length > 0) {
  failures.push(
    `Missing local asset refs:\n${missingAssets.map((ref) => `  - ${ref}`).join("\n")}`,
  );
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Smoke passed: ${routeArtifacts.size} routes, ${seenAssetRefs.size} local asset refs.`);
