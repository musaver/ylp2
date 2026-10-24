import type { CSSProperties } from "react";
import { FramerBackgroundImage, REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

const DECORATION_LEFT: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
  alt: "BG Decoration",
  width: 923,
  height: 769,
};
const DECORATION_LEFT_SIZES =
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) 923px, (max-width: 991.98px) 100vw";

const DECORATION_RIGHT: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
};
const DECORATION_RIGHT_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) 1096px, (max-width: 991.98px) 100vw";

interface Decoration {
  className: string;
  aspectRatio: string;
  image: FramerImage;
  sizes: string;
}

const DECORATIONS: Decoration[] = [
  {
    className: "framer-16q74yb",
    aspectRatio: "1.200260078023407",
    image: DECORATION_LEFT,
    sizes: DECORATION_LEFT_SIZES,
  },
  {
    className: "framer-14slcxn",
    aspectRatio: "1.5546099290780142",
    image: DECORATION_RIGHT,
    sizes: DECORATION_RIGHT_SIZES,
  },
];

export interface ContactBannerProps {
  /** Page heading (h1). */
  title?: string;
}

/**
 * Framer's "Contact Us Banner Section" (hash f5f71dc593, section.framer-3awl2z) of /contact-us:
 * two background decorations (desktop/tablet and phone variants) and the centred page heading.
 */
export function ContactBanner({ title = "Contact us" }: ContactBannerProps) {
  return (
    <section className="framer-3awl2z" data-framer-name="Contact Us Banner Section">
      <div className="framer-7o2wmu" data-framer-name="BG Wrapper">
        {DECORATIONS.map((decoration) => {
          const desktopStyle: CSSProperties = {
            width: "auto",
            aspectRatio: decoration.aspectRatio,
          };
          const phoneStyle: CSSProperties = {
            height: "auto",
            aspectRatio: decoration.aspectRatio,
            transform: "translateY(-50%)",
          };
          return [
            <div key={`${decoration.className}-desktop`} className="ssr-variant hidden-ce8ap0">
              <div className={decoration.className} style={desktopStyle}>
                <FramerBackgroundImage image={decoration.image} sizes={decoration.sizes} />
              </div>
            </div>,
            <div
              key={`${decoration.className}-phone`}
              className="ssr-variant hidden-1izvhu1 hidden-175saz8"
            >
              <div className={decoration.className} style={phoneStyle}>
                <FramerBackgroundImage image={decoration.image} sizes={decoration.sizes} />
              </div>
            </div>,
          ];
        })}
      </div>
      <div className="framer-utgern" data-framer-name="Base Container">
        <div className="framer-189uxfe" data-framer-name="Text Container">
          <div
            className="framer-p50oax"
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
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
