import type { CSSProperties } from "react";
import type { Achievement, FramerImage } from "@/lib/types";
import { AchievementCards } from "@/components/sections/AchievementsSection";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/** Background decoration graphics of the banner (design assets, identical on every banner). */
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
  "(min-width: 1280px) 924.2003px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";
const DECORATION_RIGHT_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";

const LEFT_RATIO = "1.200260078023407";
const RIGHT_RATIO = "1.5546099290780142";

const LEFT_DESKTOP: CSSProperties = {
  width: "auto",
  aspectRatio: LEFT_RATIO,
  transform: "translateY(-50%)",
};
const LEFT_TABLET: CSSProperties = { height: "auto", aspectRatio: LEFT_RATIO };
const LEFT_PHONE: CSSProperties = {
  height: "auto",
  aspectRatio: LEFT_RATIO,
  transform: "translateY(-50%)",
};
const RIGHT_DESKTOP: CSSProperties = {
  width: "auto",
  aspectRatio: RIGHT_RATIO,
  transform: "translateY(-50%)",
};
const RIGHT_TABLET_PHONE: CSSProperties = { height: "auto", aspectRatio: RIGHT_RATIO };

export interface CausesBannerProps {
  /** Page heading (h1). */
  title: string;
  description: string;
  /** The four numbers of the "Achievement Card Wrapper". */
  achievements: Achievement[];
}

/**
 * /causes banner: dark background with decoration graphics, page heading and intro, and the
 * embedded achievement cards (shared `AchievementCards`, variant "causes").
 * Framer "Causes Banner Section" (section.framer-zzmxap, hash 1104a356c5).
 */
export function CausesBanner({ title, description, achievements }: CausesBannerProps) {
  return (
    <section className="framer-zzmxap" data-framer-name="Causes Banner Section">
      <div className="framer-1a4aaqc" data-framer-name="BG Wrapper">
        <div className="ssr-variant hidden-vnme09 hidden-vgkzoy">
          <div className="framer-n57xh3" style={LEFT_DESKTOP}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-vgkzoy hidden-1v1u7jl">
          <div className="framer-n57xh3" style={LEFT_TABLET}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-vnme09 hidden-1v1u7jl">
          <div className="framer-n57xh3" style={LEFT_PHONE}>
            <FramerBackgroundImage image={DECORATION_LEFT} sizes={DECORATION_LEFT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-vnme09 hidden-vgkzoy">
          <div className="framer-17a5r93" style={RIGHT_DESKTOP}>
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-1v1u7jl">
          <div className="framer-17a5r93" style={RIGHT_TABLET_PHONE}>
            <FramerBackgroundImage image={DECORATION_RIGHT} sizes={DECORATION_RIGHT_SIZES} />
          </div>
        </div>
        <div className="framer-rwudfu"></div>
      </div>
      <div className="framer-ae0rwe" data-framer-name="Base Container">
        <div className="framer-1v0sp6t" data-framer-name="Text Container">
          <div
            className="framer-afvgg1"
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
              {title}
            </h1>
          </div>
          <div
            className="framer-1e2esj5"
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
        <AchievementCards items={achievements} variant="causes" />
      </div>
    </section>
  );
}
