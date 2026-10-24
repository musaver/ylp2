import type { CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";

/**
 * Display data shared by the resource pages (/resources, /resources/[slug],
 * /resource-category/[slug]) that the typed content does not carry: the two decoration SVGs
 * Framer places in the "BG Wrapper" of the banners and the rich-text section.
 */

/** Light decoration SVG (`gkGh30…`, 923×769). */
export const BG_DECORATION_SMALL: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  alt: "BG Decoration",
  width: 923,
  height: 769,
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
};

/** Large decoration SVG (`BQ2qqQ…`, 1096×705). */
export const BG_DECORATION_LARGE: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
};

/** `aspect-ratio` Framer writes on the decoration wrappers. */
export const BG_SMALL_ASPECT_RATIO = "1.200260078023407";
export const BG_LARGE_ASPECT_RATIO = "1.5546099290780142";

/** Inline style variants Framer writes on the decoration wrappers (key order as exported). */
export function decorationStyle(
  sizing: "width" | "height",
  aspectRatio: string,
  centered: boolean,
): CSSProperties {
  const style: CSSProperties = { [sizing]: "auto", aspectRatio };
  if (centered) style.transform = "translateY(-50%)";
  return style;
}
