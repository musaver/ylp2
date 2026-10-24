import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import { RichText } from "@/components/sections/RichText";
import type { Resource } from "@/lib/types";
import { BgDecoration } from "./BgDecoration";
import { BG_DECORATION_SMALL, BG_SMALL_ASPECT_RATIO, decorationStyle } from "./resource-display";

const DECORATION_SIZES =
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) 923px, (max-width: 991.98px) calc(100vw - 40px)";

export interface ResourceBodyProps {
  resource: Resource;
}

/**
 * Framer's "Rich Text Section" of the resource detail template (section.framer-1catemq,
 * e.g. hash 5ed927f29e / f29c8cfeb9): decoration images and the resource body, once for
 * desktop/tablet and once for phone (see `RichText`).
 */
export function ResourceBody({ resource }: ResourceBodyProps) {
  return (
    <section className="framer-1catemq" data-framer-name="Rich Text Section">
      <div className="framer-1pjnqbw" data-framer-name="BG Wrapper">
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1ghes7e"
          className="framer-89crwf"
          style={decorationStyle("width", BG_SMALL_ASPECT_RATIO, false)}
          image={BG_DECORATION_SMALL}
          sizes={DECORATION_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-nvs3ka hidden-18zn3uu"
          className="framer-89crwf"
          style={decorationStyle("height", BG_SMALL_ASPECT_RATIO, false)}
          image={BG_DECORATION_SMALL}
          sizes={DECORATION_SIZES}
        />
      </div>
      <div className="framer-1ivvws" data-framer-name="Base Container">
        <div className="ssr-variant hidden-1ghes7e">
          <div
            className="framer-11ojody"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={resource.body} variant="resource" breakpoint="desktop" />
          </div>
        </div>
        <div className="ssr-variant hidden-nvs3ka hidden-18zn3uu">
          <div
            className="framer-11ojody"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={resource.body} variant="resource" breakpoint="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
