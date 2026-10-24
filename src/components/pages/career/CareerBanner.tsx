import type { CSSProperties } from "react";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

export interface CareerBannerContent {
  /** Page heading (h1). */
  heading: string;
  /** The three "Career Images": left (tilted), centre and right (tilted). */
  images: { left: FramerImage; center: FramerImage; right: FramerImage };
}

/** Content of the /career banner as exported. */
export const CAREER_BANNER: CareerBannerContent = {
  heading: "We're looking for caring hearts to join us",
  images: {
    left: {
      src: "/images/XuxsIBAT7TablKKH8Ch5Wva9uLY.jpg",
      srcSet:
        "/images/XuxsIBAT7TablKKH8Ch5Wva9uLY-1.jpg 512w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-2.jpg 1024w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-3.jpg 2048w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-4.jpg 4096w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY.jpg 5281w",
      alt: "Career Image",
      width: 5281,
      height: 3521,
    },
    center: {
      src: "/images/lSklpgMAosmUFRq8OwnlvtAJ4zw.jpg",
      srcSet:
        "/images/lSklpgMAosmUFRq8OwnlvtAJ4zw-1.jpg 512w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-2.jpg 1024w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-3.jpg 2048w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw-4.jpg 4096w, /images/lSklpgMAosmUFRq8OwnlvtAJ4zw.jpg 7513w",
      alt: "Career Image",
      width: 7513,
      height: 5011,
    },
    right: {
      src: "/images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg",
      srcSet:
        "/images/d2Ta00IrAO1lr0SXmjl5xPo58-1.jpg 682w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-2.jpg 1365w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-3.jpg 2730w, /images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg 4000w",
      alt: "Career Image",
      width: 4000,
      height: 6000,
    },
  },
};

/** `hidden-*` classes of the careers template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-8u761u", tablet: "hidden-1qj1naa", phone: "hidden-9qtchr" } as const;

/** Literal `sizes` of the two tilted side images. */
const SIDE_SIZES =
  "(min-width: 1280px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 3, 1px), (max-width: 991.98px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 3, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 3, 1px)";

/** Literal `sizes` of the centre image. */
const CENTER_SIZES =
  "(min-width: 1280px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 3, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 3, 1px), (max-width: 991.98px) max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px)";

/** Scroll-reveal start state of the tilted side images (perspective differs per breakpoint). */
function sideRevealStyle(side: "left" | "right", perspective: string): CSSProperties {
  const left = side === "left";
  return {
    willChange: "transform",
    opacity: "0",
    transform: `perspective(${perspective}) translateX(${left ? "-210px" : "210px"}) scale(0.5) rotateY(${left ? "30deg" : "-30deg"})`,
    transformOrigin: left ? "100% 50% 0" : "0% 50% 0",
  };
}

const CENTER_REVEAL_STYLE: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateY(80px) scale(0.5)",
};

export interface CareerBannerProps {
  heading?: string;
  images?: CareerBannerContent["images"];
}

/**
 * /career banner: dark background, centred white H1 and three "Career Images" (tilted side
 * images on desktop/tablet, the centre image on every breakpoint).
 * Framer "Career Banner Section" (section.framer-xfzuss, hash c41f976e5f).
 */
export function CareerBanner({
  heading = CAREER_BANNER.heading,
  images = CAREER_BANNER.images,
}: CareerBannerProps) {
  return (
    <section className="framer-xfzuss" data-framer-name="Career Banner Section">
      <div className="framer-azoizu" data-framer-name="BG Wrapper">
        <div className="framer-3d27cm"></div>
      </div>
      <div className="framer-f3g0a7" data-framer-name="Base Container">
        <div className="framer-73c54b" data-framer-name="Text Container">
          <div
            className="framer-150t68"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <h1
              className="framer-text framer-styles-preset-lo4ujp"
              data-styles-preset="aeh2bjTr3"
              dir="auto"
              style={{ "--framer-text-alignment": "center", "--framer-text-color": TOKENS.white }}
            >
              {heading}
            </h1>
          </div>
        </div>
        <div className="framer-xghb8f" data-framer-name="Career Images">
          <div className={`ssr-variant ${BP.tablet}`}>
            <div className={`framer-1kvgj3k ${BP.phone}`} style={sideRevealStyle("left", "1500px")}>
              <FramerBackgroundImage image={images.left} sizes={SIDE_SIZES} />
            </div>
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.phone}`}>
            <div className={`framer-1kvgj3k ${BP.phone}`} style={sideRevealStyle("left", "1130px")}>
              <FramerBackgroundImage image={images.left} sizes={SIDE_SIZES} />
            </div>
          </div>
          <div className={`ssr-variant ${BP.phone}`}>
            <div className="framer-1ql8ftu" style={CENTER_REVEAL_STYLE}>
              <FramerBackgroundImage image={images.center} sizes={CENTER_SIZES} />
            </div>
          </div>
          <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
            <div className="framer-1ql8ftu" style={CENTER_REVEAL_STYLE}>
              <FramerBackgroundImage
                image={images.center}
                sizes={CENTER_SIZES}
                objectPosition="center top"
              />
            </div>
          </div>
          <div className={`ssr-variant ${BP.tablet}`}>
            <div
              className={`framer-1qqfzix ${BP.phone}`}
              style={sideRevealStyle("right", "1500px")}
            >
              <FramerBackgroundImage image={images.right} sizes={SIDE_SIZES} />
            </div>
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.phone}`}>
            <div
              className={`framer-1qqfzix ${BP.phone}`}
              style={sideRevealStyle("right", "1130px")}
            >
              <FramerBackgroundImage image={images.right} sizes={SIDE_SIZES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
