import { useEffect } from "react";
import { useLocation } from "wouter";
import { getRouteMeta } from "@/lib/routes";

const SITE_URL = "https://tipecpge.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const setMeta = (selector: string, attr: string, value: string, attrName = "content") => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value.replace(/\[.*?\]/, "").trim());
    document.head.appendChild(el);
  }
  el.setAttribute(attrName, value);
};

export const useSEO = () => {
  const [location] = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(location);
    const url = `${SITE_URL}${location === "/" ? "" : location}`;

    // Basic
    document.title = meta.title;
    setMeta('meta[name="description"]', "name", "description");
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);

    // Open Graph
    setMeta('meta[property="og:type"]',        "property", "og:type",        "content"); document.querySelector('meta[property="og:type"]')?.setAttribute("content", "website");
    setMeta('meta[property="og:site_name"]',   "property", "og:site_name",   "content"); document.querySelector('meta[property="og:site_name"]')?.setAttribute("content", "TIPE CPGE");
    setMeta('meta[property="og:title"]',       "property", "og:title",       "content"); document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    setMeta('meta[property="og:description"]', "property", "og:description", "content"); document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    setMeta('meta[property="og:url"]',         "property", "og:url",         "content"); document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    setMeta('meta[property="og:image"]',       "property", "og:image",       "content"); document.querySelector('meta[property="og:image"]')?.setAttribute("content", OG_IMAGE);
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "content"); document.querySelector('meta[property="og:image:width"]')?.setAttribute("content", "1200");
    setMeta('meta[property="og:image:height"]',"property", "og:image:height","content"); document.querySelector('meta[property="og:image:height"]')?.setAttribute("content", "630");

    // Twitter / X Card
    setMeta('meta[name="twitter:card"]',        "name", "twitter:card");        document.querySelector('meta[name="twitter:card"]')?.setAttribute("content", "summary_large_image");
    setMeta('meta[name="twitter:title"]',       "name", "twitter:title");       document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description"); document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
    setMeta('meta[name="twitter:image"]',       "name", "twitter:image");       document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", OG_IMAGE);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
};
