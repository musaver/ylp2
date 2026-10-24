import { REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import { BgDecoration } from "./BgDecoration";
import {
  BG_DECORATION_LARGE,
  BG_DECORATION_SMALL,
  BG_LARGE_ASPECT_RATIO,
  BG_SMALL_ASPECT_RATIO,
  decorationStyle,
} from "./resource-display";

/** Text of the /resources banner as exported (also used for the page metadata). */
export const RESOURCES_BANNER = {
  title: "Resources",
  description:
    "Explore our curated collection of resources designed to support, educate, and empower individuals and communities in need.",
} as const;

const SMALL_SIZES =
  "(min-width: 1280px) 924.2003px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";
const LARGE_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";

export interface ResourcesBannerProps {
  title: string;
  description: string;
}

/**
 * Framer's "Resources Banner Section" of /resources (hash e98cd22105, section.framer-vtcc53):
 * decoration images per breakpoint, H1 and intro text.
 */
export function ResourcesBanner({ title, description }: ResourcesBannerProps) {
  return (
    <section className="framer-vtcc53" data-framer-name="Resources Banner Section">
      <div className="framer-lmpi2i" data-framer-name="BG Wrapper">
        <BgDecoration
          wrapperClassName="ssr-variant hidden-d3s7u0 hidden-24zs8m"
          className="framer-1xyov0o"
          style={decorationStyle("width", BG_SMALL_ASPECT_RATIO, true)}
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1owuaeu hidden-24zs8m"
          className="framer-1xyov0o"
          style={decorationStyle("height", BG_SMALL_ASPECT_RATIO, false)}
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1owuaeu hidden-d3s7u0"
          className="framer-1xyov0o"
          style={decorationStyle("height", BG_SMALL_ASPECT_RATIO, true)}
          image={BG_DECORATION_SMALL}
          sizes={SMALL_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-d3s7u0 hidden-24zs8m"
          className="framer-1xpfqzm"
          style={decorationStyle("width", BG_LARGE_ASPECT_RATIO, true)}
          image={BG_DECORATION_LARGE}
          sizes={LARGE_SIZES}
        />
        <BgDecoration
          wrapperClassName="ssr-variant hidden-1owuaeu"
          className="framer-1xpfqzm"
          style={decorationStyle("height", BG_LARGE_ASPECT_RATIO, false)}
          image={BG_DECORATION_LARGE}
          sizes={LARGE_SIZES}
        />
      </div>
      <div className="framer-51sr4a" data-framer-name="Base Container">
        <div className="framer-nunqxp" data-framer-name="Text Container">
          <div
            className="framer-v1fztp"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <h1
              className="framer-text framer-styles-preset-lo4ujp"
              data-styles-preset="aeh2bjTr3"
              dir="auto"
              style={{
                "--framer-text-alignment": "center",
                "--framer-text-color": TOKENS.white,
              }}
            >
              {title}
            </h1>
          </div>
          <div
            className="framer-1kxho3i"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <p
              className="framer-text framer-styles-preset-184kbjj"
              data-styles-preset="jo34BIwbe"
              dir="auto"
              style={{ "--framer-text-alignment": "center" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
