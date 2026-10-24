import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

/** Content of the /events banner as exported. */
export const EVENTS_BANNER = {
  heading: "Our events",
  description:
    "These events help us provide essential support to individuals and families in need, and we invite you to be part of these impactful moments.",
} as const;

/** `hidden-*` classes of the events template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-mnx0x7", tablet: "hidden-1ijr1ci", phone: "hidden-14562o0" } as const;

const BG_DECORATION: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  alt: "BG Decoration",
  width: 923,
  height: 769,
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
};

const BG_SIZES =
  "(min-width: 1280px) 924.2003px, (min-width: 992px) and (max-width: 1279.98px) 992px, (max-width: 991.98px) calc(100vw - 40px)";

const BG_ASPECT_RATIO = "1.200260078023407";

export interface EventsBannerProps {
  heading?: string;
  description?: string;
}

/**
 * Framer's "Events Banner Section" of /events (hash f3d4edcb40, section.framer-lqc8a5):
 * background decoration (one variant per breakpoint), centred white H1 and intro text.
 */
export function EventsBanner({
  heading = EVENTS_BANNER.heading,
  description = EVENTS_BANNER.description,
}: EventsBannerProps) {
  return (
    <section className="framer-lqc8a5" data-framer-name="Events Banner Section">
      <div className="framer-1t6ed5p" data-framer-name="BG Wrapper">
        <div className={`ssr-variant ${BP.tablet} ${BP.phone}`}>
          <div
            className="framer-u0sepk"
            style={{ width: "auto", aspectRatio: BG_ASPECT_RATIO, transform: "translateY(-50%)" }}
          >
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
          <div className="framer-u0sepk">
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
          <div
            className="framer-u0sepk"
            style={{ height: "auto", aspectRatio: BG_ASPECT_RATIO, transform: "translateY(-50%)" }}
          >
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-1d2b567" data-framer-name="Base Container">
        <div className="framer-1b5iyf" data-framer-name="Text Container">
          <div
            className="framer-1y9sgm3"
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
              {heading}
            </h1>
          </div>
          <div
            className="framer-1wv44ej"
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
