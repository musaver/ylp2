import type { FramerImage } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/** Banner copy as exported (also used for the page metadata). */
export const WHY_BANNER = {
  heading: "Why choose us",
  body: "We are committed to making a real difference by providing support where it’s needed most. Every contribution directly impacts lives, creating hope and opportunity.",
} as const;

/** The two background decorations of the banner (design assets, not content). */
const DECORATION_LEFT: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  alt: "BG Decoration",
  width: 923,
  height: 769,
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
};
const DECORATION_LEFT_SIZES =
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) 923px, (max-width: 991.98px) 100vw";

const DECORATION_RIGHT: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
};
const DECORATION_RIGHT_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) 1096px, (max-width: 991.98px) 100vw";

export interface WhyBannerProps {
  heading?: string;
  body?: string;
}

/**
 * "Why Choose Us Banner Section" of /why-choose-us (hash 8c392f086e, section.framer-kmf7iy):
 * two background decorations (desktop/tablet and phone placements) and the centred H1 + intro.
 */
export function WhyBanner({
  heading = WHY_BANNER.heading,
  body = WHY_BANNER.body,
}: WhyBannerProps) {
  return (
    <section className="framer-kmf7iy" data-framer-name="Why Choose Us Banner Section">
      <div className="framer-1ye1u5e" data-framer-name="BG Wrapper">
        <div className="ssr-variant hidden-e3ad3z">
          <div
            className="framer-1wsig75"
            style={{ width: "auto", aspectRatio: "1.200260078023407" }}
          >
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
          <div
            className="framer-1wsig75"
            style={{
              height: "auto",
              aspectRatio: "1.200260078023407",
              transform: "translateY(-50%)",
            }}
          >
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-e3ad3z">
          <div
            className="framer-qpq5rk"
            style={{ width: "auto", aspectRatio: "1.5546099290780142" }}
          >
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
          <div
            className="framer-qpq5rk"
            style={{
              height: "auto",
              aspectRatio: "1.5546099290780142",
              transform: "translateY(-50%)",
            }}
          >
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-ub3l7m" data-framer-name="Base Container">
        <div className="framer-1b3ex7n" data-framer-name="Text Content">
          <div
            className="framer-yjpjw3"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <h1
              className="framer-text framer-styles-preset-lo4ujp"
              data-styles-preset="aeh2bjTr3"
              dir="auto"
              style={{ "--framer-text-alignment": "center" }}
            >
              {heading}
            </h1>
          </div>
          <div
            className="framer-sw0txy"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <p
              className="framer-text framer-styles-preset-184kbjj"
              data-styles-preset="jo34BIwbe"
              dir="auto"
              style={{ "--framer-text-alignment": "center", "--framer-text-color": TOKENS.grey }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
