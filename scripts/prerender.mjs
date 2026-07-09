// Prerender head-only : génère un fichier HTML statique par route avec ses
// propres balises <title>/description/OG/canonical, pour que les crawlers
// (WhatsApp, Facebook, X, Google) qui n'exécutent pas de JS lisent le bon
// aperçu. Le <body> reste la coquille SPA standard — aucune hydratation.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://tipecpge.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const routes = JSON.parse(
  readFileSync(join(ROOT, "src/lib/routes.data.json"), "utf8")
);

// Échappe le texte destiné à un attribut HTML ou au contenu de <title>.
const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

let template;
try {
  template = readFileSync(join(DIST, "index.html"), "utf8");
} catch {
  console.error("[prerender] dist/index.html introuvable — lancez `vite build` d'abord.");
  process.exit(1);
}

/** Remplace le contenu d'une balise <meta> identifiée par son attribut name/property. */
const setMeta = (html, kind, key, value) =>
  html.replace(
    new RegExp(`(<meta ${kind}="${key}" content=")[^"]*(")`),
    `$1${esc(value)}$2`
  );

const render = (route) => {
  const url = `${SITE_URL}${route.path === "/" ? "" : route.path}`;
  let html = template;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);

  // Description
  html = setMeta(html, "name", "description", route.description);

  // Open Graph
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${esc(url)}$2`
  );
  html = setMeta(html, "property", "og:image", OG_IMAGE);

  // Twitter
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);

  // Canonical
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${esc(url)}$2`
  );

  return html;
};

let count = 0;
for (const route of routes) {
  const html = render(route);
  const outPath =
    route.path === "/"
      ? join(DIST, "index.html")
      : join(DIST, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  count++;
}

console.log(`[prerender] ${count} routes générées avec méta-données statiques.`);
