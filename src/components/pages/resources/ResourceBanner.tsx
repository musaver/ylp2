import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import { formatLongDate } from "@/lib/format";
import type { Resource } from "@/lib/types";
import { BgDecoration } from "./BgDecoration";
import { BG_DECORATION_LARGE, BG_LARGE_ASPECT_RATIO, decorationStyle } from "./resource-display";

const DECORATION_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) 1096px, (max-width: 991.98px) calc(100vw - 40px)";
const IMAGE_SIZES =
  "(min-width: 1280px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px), (max-width: 991.98px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px)";

export interface ResourceBannerProps {
  resource: Resource;
}

/**
 * Framer's "Resources Details Banner Section" of the resource detail template
 * (section.framer-zn9m49, e.g. hash 6428c77baf / fd87fb40a0): date, title, excerpt and the
 * resource image.
 */
export function ResourceBanner({ resource }: ResourceBannerProps) {
  return (
    <section className="framer-zn9m49" data-framer-name="Resources Details Banner Section">
      <div className="framer-kmt1jz" data-framer-name="BG Wrapper">
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1ghes7e"
          className="framer-mvzwby"
          style={decorationStyle("width", BG_LARGE_ASPECT_RATIO, false)}
          image={BG_DECORATION_LARGE}
          sizes={DECORATION_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-nvs3ka hidden-18zn3uu"
          className="framer-mvzwby"
          style={decorationStyle("height", BG_LARGE_ASPECT_RATIO, true)}
          image={BG_DECORATION_LARGE}
          sizes={DECORATION_SIZES}
        />
      </div>
      <div className="framer-13wtrei" data-framer-name="Base Container">
        <div className="framer-1419pdc" data-framer-name="Text Container Wrapper">
          <div
            className="framer-vbg4xz"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <p
              className="framer-text framer-styles-preset-1u0xujd"
              data-styles-preset="QZ8HlqCwU"
              dir="auto"
              style={{
                "--framer-text-alignment": "center",
                "--framer-text-color": TOKENS.blue,
              }}
            >
              <time dateTime={`${resource.date}T00:00:00.000Z`}>
                {formatLongDate(resource.date)}
              </time>
            </p>
          </div>
          <div className="framer-1xwjc6q" data-framer-name="Text Container">
            <div
              className="framer-1y6ird1"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <h1
                className="framer-text framer-styles-preset-13ni59"
                data-styles-preset="ZzqLAqrO8"
                dir="auto"
                style={{ "--framer-text-alignment": "center" }}
              >
                {resource.title}
              </h1>
            </div>
            <div
              className="framer-11me3eu"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <p
                className="framer-text framer-styles-preset-184kbjj"
                data-styles-preset="jo34BIwbe"
                dir="auto"
                style={{
                  "--framer-text-alignment": "center",
                  "--framer-text-color": TOKENS.grey,
                }}
              >
                {resource.excerpt}
              </p>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-10tr2ag" style={REVEAL_STYLE}>
            <FramerBackgroundImage image={resource.image} sizes={IMAGE_SIZES} />
          </div>
        </div>
      </div>
    </section>
  );
}
