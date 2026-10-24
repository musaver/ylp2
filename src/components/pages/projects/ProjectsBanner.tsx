import type { CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

export interface ProjectsBannerContent {
  /** Page heading (h1). */
  title: string;
  description: string;
}

/** Content of the /projects banner as exported. */
export const PROJECTS_BANNER: ProjectsBannerContent = {
  title: "Our projects",
  description:
    "Through collaboration, innovation, and compassion, we aim to empower individuals and build stronger, more resilient communities.",
};

/** Background decoration graphics of the banner (design assets). */
const DECORATION_LEFT: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
  alt: "BG Decoration",
  width: 923,
  height: 769,
};
const DECORATION_RIGHT: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
};
const DECORATION_LEFT_SIZES =
  "(min-width: 1280px) 924.2003px, (max-width: 991.98px) calc(100vw - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px)";
const DECORATION_RIGHT_SIZES =
  "(min-width: 1280px) 1096px, (max-width: 991.98px) calc(100vw - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px)";

const LEFT_RATIO = "1.200260078023407";
const RIGHT_RATIO = "1.5546099290780142";

/** Decoration wrapper styles per breakpoint, as exported. */
const LEFT_DESKTOP: CSSProperties = {
  width: "auto",
  aspectRatio: LEFT_RATIO,
  transform: "translateY(-50%)",
};
const LEFT_PHONE: CSSProperties = {
  height: "auto",
  aspectRatio: LEFT_RATIO,
  transform: "translateY(-50%)",
};
const LEFT_TABLET: CSSProperties = { height: "auto", aspectRatio: LEFT_RATIO };
const RIGHT_DESKTOP: CSSProperties = {
  width: "auto",
  aspectRatio: RIGHT_RATIO,
  transform: "translateY(-50%)",
};
const RIGHT_PHONE: CSSProperties = {
  height: "auto",
  aspectRatio: RIGHT_RATIO,
  transform: "translateY(-50%)",
};
const RIGHT_TABLET: CSSProperties = { height: "auto", aspectRatio: RIGHT_RATIO };

/** Breakpoint classes of the projects template (`hidden-*` hides that breakpoint). */
const BP = {
  desktop: "hidden-ljz9sa",
  tablet: "hidden-9ij01m",
  phone: "hidden-16ox5fh",
} as const;

export type ProjectsBannerProps = ProjectsBannerContent;

/**
 * /projects banner: dark background with decoration graphics, page heading and intro.
 * Framer "Projects Banner Section" (section.framer-t86tpr, hash b8b133ea80).
 */
export function ProjectsBanner({ title, description }: ProjectsBannerProps) {
  return (
    <section className="framer-t86tpr" data-framer-name="Projects Banner Section">
      <div className="framer-10110ne" data-framer-name="BG Wrapper">
        <div className={`ssr-variant ${BP.phone} ${BP.tablet}`}>
          <div className="framer-1vhgjyt" style={LEFT_DESKTOP}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
          <div className="framer-1vhgjyt" style={LEFT_PHONE}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
          <div className="framer-1vhgjyt" style={LEFT_TABLET}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.phone} ${BP.tablet}`}>
          <div className="framer-18kavi" style={RIGHT_DESKTOP}>
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
          <div className="framer-18kavi" style={RIGHT_PHONE}>
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
          <div className="framer-18kavi" style={RIGHT_TABLET}>
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-1keb9m7" data-framer-name="Base Container">
        <div className="framer-wck6tf" data-framer-name="Text Container">
          <div
            className="framer-1rb4kc3"
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
            className="framer-hoj1fo"
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
