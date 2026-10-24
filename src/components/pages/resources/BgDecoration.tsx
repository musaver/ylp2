import type { CSSProperties } from "react";
import { FramerBackgroundImage } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

export interface BgDecorationProps {
  /** Classes of the `ssr-variant` breakpoint wrapper (e.g. "ssr-variant hidden-1ghes7e"). */
  wrapperClassName: string;
  /** Framer's class of the decoration element (e.g. "framer-1xyov0o"). */
  className: string;
  /** Inline style Framer writes on the decoration element for this breakpoint, if any. */
  style?: CSSProperties;
  image: FramerImage;
  /** Literal `sizes` attribute for this placement. */
  sizes: string;
}

/**
 * One breakpoint variant of a "BG Decoration" image inside a Framer "BG Wrapper"
 * (resource banners and the resource rich-text section): the `ssr-variant` wrapper, the
 * decoration element and its background image, as exported.
 */
export function BgDecoration({
  wrapperClassName,
  className,
  style,
  image,
  sizes,
}: BgDecorationProps) {
  return (
    <div className={wrapperClassName}>
      <div className={className} style={style}>
        <FramerBackgroundImage image={image} sizes={sizes} />
      </div>
    </div>
  );
}
