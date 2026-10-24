import type { CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/** Copy and photos of the section as exported. */
export const HELPED_NUMBERS = {
  heading:
    "Every life touched is a step toward a brighter future, and we’re proud to continue making a difference together.",
  /** The trailing space is part of the export. */
  value: "344,600+ ",
  label: "people we helped",
  images: [
    {
      src: "/images/ZriFwNESHD2yzXCPyKx6faXIMzw.jpg",
      alt: "Helped Image",
      width: 8192,
      height: 5462,
      srcSet:
        "/images/ZriFwNESHD2yzXCPyKx6faXIMzw-1.jpg 512w, /images/ZriFwNESHD2yzXCPyKx6faXIMzw-2.jpg 1024w, /images/ZriFwNESHD2yzXCPyKx6faXIMzw-3.jpg 2048w, /images/ZriFwNESHD2yzXCPyKx6faXIMzw-4.jpg 4096w, /images/ZriFwNESHD2yzXCPyKx6faXIMzw.jpg 8192w",
    },
    {
      src: "/images/chqZxiAob5ktjgtJPe7w0Rok6k.jpg",
      alt: "Helped Image",
      width: 5281,
      height: 3521,
      srcSet:
        "/images/chqZxiAob5ktjgtJPe7w0Rok6k-1.jpg 512w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-2.jpg 1024w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-3.jpg 2048w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-4.jpg 4096w, /images/chqZxiAob5ktjgtJPe7w0Rok6k.jpg 5281w",
    },
  ] satisfies [FramerImage, FramerImage],
} as const;

/** "Circle Center BG" decoration (design asset, not content). */
const BACKGROUND: FramerImage = {
  src: "/images/4pWchYERZ5PQruOMbK5CTWxqxU.svg",
  alt: "Circle Center BG",
  width: 1300,
  height: 667,
  srcSet:
    "/images/4pWchYERZ5PQruOMbK5CTWxqxU-1.svg 512w, /images/4pWchYERZ5PQruOMbK5CTWxqxU-2.svg 1024w, /images/4pWchYERZ5PQruOMbK5CTWxqxU.svg 1300w",
};
const BACKGROUND_SIZES =
  "(min-width: 1280px) calc(100vw - 160px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 80px), (max-width: 991.98px) 100vw";

const PHOTO_SIZES =
  "(min-width: 1280px) min(max((min(max(min(max(100vw, 1px), 1340px) - 40px, 1px), 980px) - 10px) / 2, 1px), 270px), (min-width: 992px) and (max-width: 1279.98px) min(max((min(max(min(max(100vw, 1px), 1340px) - 40px, 1px), 900px) - 10px) / 2, 1px), 250px), (max-width: 991.98px) min(max((min(max(min(max(100vw, 1px), 1340px) - 40px, 1px), 980px) - 20px) / 2, 1px), 270px)";

/**
 * Scroll-reveal start states of the two tilted photos (left / right, desktop+tablet / phone)
 * exactly as exported; `ScrollReveal` animates them into place.
 */
function photoReveal(transform: string, transformOrigin: string): CSSProperties {
  return { willChange: "transform", opacity: "0", transform, transformOrigin };
}

const LEFT_REVEAL = {
  default: photoReveal(
    "perspective(700px) translateX(-210px) scale(0.5) rotate(-10deg) rotateY(30deg)",
    "70% 70% 0",
  ),
  phone: photoReveal(
    "perspective(700px) translateX(-120px) scale(0.5) rotate(-10deg) rotateY(30deg)",
    "70% 70% 0",
  ),
};
const RIGHT_REVEAL = {
  default: photoReveal(
    "perspective(700px) translateX(210px) scale(0.5) rotate(10deg) rotateY(-30deg)",
    "30% 70% 0",
  ),
  phone: photoReveal(
    "perspective(700px) translateX(120px) scale(0.5) rotate(10deg) rotateY(-30deg)",
    "30% 70% 0",
  ),
};

export interface HelpedNumbersProps {
  heading?: string;
  value?: string;
  label?: string;
  images?: readonly [FramerImage, FramerImage];
}

/**
 * "Helped Numbers Section" of /why-choose-us (hash e2cd728b99, section.framer-tkua5): circle
 * background (desktop / tablet / phone placements), white heading, the two tilted photos and
 * the "344,600+ people we helped" counter.
 */
export function HelpedNumbers({
  heading = HELPED_NUMBERS.heading,
  value = HELPED_NUMBERS.value,
  label = HELPED_NUMBERS.label,
  images = HELPED_NUMBERS.images,
}: HelpedNumbersProps) {
  const [left, right] = images;
  return (
    <section className="framer-tkua5" data-framer-name="Helped Numbers Section">
      <div className="framer-1yznkun" data-framer-name="BG Wrapper">
        <div className="ssr-variant hidden-1ksiir2 hidden-e3ad3z">
          <div className="framer-ysiqgc">
            <FramerBackgroundImage image={BACKGROUND} sizes={BACKGROUND_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-7xpbrn hidden-e3ad3z">
          <div
            className="framer-ysiqgc"
            style={{ height: "auto", aspectRatio: "1.949025487256372" }}
          >
            <FramerBackgroundImage image={BACKGROUND} sizes={BACKGROUND_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
          <div className="framer-ysiqgc" style={{ transform: "translateY(-50%)" }}>
            <FramerBackgroundImage image={BACKGROUND} sizes={BACKGROUND_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-1jkyqx3" data-framer-name="Base Container">
        <div className="framer-1efjk70" data-framer-name="Content Block Wrapper">
          <div
            className="framer-hd3syv"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <h2
              className="framer-text framer-styles-preset-dghseo"
              data-styles-preset="ZIAYgZ0hD"
              dir="auto"
              style={{ "--framer-text-alignment": "center", "--framer-text-color": TOKENS.white }}
            >
              {heading}
            </h2>
          </div>
          <div className="framer-1v6hln5" data-framer-name="Text Container Wrapper ">
            <div className="framer-1a02lu4" data-framer-name="Imaged Wrapper">
              <div className="ssr-variant hidden-e3ad3z">
                <div className="framer-1h31x9c" style={LEFT_REVEAL.default}>
                  <FramerBackgroundImage image={left} sizes={PHOTO_SIZES} />
                </div>
              </div>
              <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
                <div className="framer-1h31x9c" style={LEFT_REVEAL.phone}>
                  <FramerBackgroundImage image={left} sizes={PHOTO_SIZES} />
                </div>
              </div>
              <div className="ssr-variant hidden-e3ad3z">
                <div className="framer-r9g6s" style={RIGHT_REVEAL.default}>
                  <FramerBackgroundImage image={right} sizes={PHOTO_SIZES} />
                </div>
              </div>
              <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
                <div className="framer-r9g6s" style={RIGHT_REVEAL.phone}>
                  <FramerBackgroundImage image={right} sizes={PHOTO_SIZES} />
                </div>
              </div>
            </div>
            <div className="framer-1t8uimv" data-framer-name="Text Container">
              <div
                className="framer-1ec2x72"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={REVEAL_STYLE}
              >
                <div
                  className="framer-text framer-styles-preset-1pxpx6j"
                  data-styles-preset="LMwGokzrb"
                  dir="auto"
                  style={{
                    "--framer-text-alignment": "center",
                    "--framer-text-color": TOKENS.yellow,
                  }}
                >
                  {value}
                </div>
              </div>
              <div
                className="framer-1s19ydc"
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
                  {label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
