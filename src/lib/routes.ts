import type { HeaderVariant } from "@/components/layout/Header";

/**
 * Pages that use Framer's dark, transparent header (it turns solid once the page scrolls).
 * Every other page uses the white "solid" header. Detail pages are matched by prefix.
 */
const TRANSPARENT_EXACT = new Set([
  "/",
  "/about-us",
  "/our-mission",
  "/career",
  "/causes",
  "/events",
  "/projects",
  "/resources",
]);
const TRANSPARENT_PREFIXES = ["/causes/", "/resource-category/"];

export function headerVariantFor(pathname: string): HeaderVariant {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (TRANSPARENT_EXACT.has(path)) return "transparent";
  return TRANSPARENT_PREFIXES.some((prefix) => path.startsWith(prefix)) ? "transparent" : "solid";
}
