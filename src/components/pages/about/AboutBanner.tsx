import type { CSSProperties } from "react";
import type { FramerImage, NavLink } from "@/lib/types";
import { TOKENS, REVEAL_STYLE, FramerBackgroundImage } from "@/components/sections/framer-shared";
import { PrimaryButtonLink } from "./PrimaryButtonLink";

/**
 * About us banner: Framer "About Us Banner Section" (hash 5e92083b94, section.framer-s9fbol)
 * of /about-us. Heading, intro text, "Our mission" button, banner image and (desktop/tablet
 * only) the decorative "Tabs Wrapper" pills over the circle graphics. The pills are static
 * labels in the export (no interactive state).
 */
export interface AboutBannerProps {
  title?: string;
  description?: string;
  button?: NavLink;
  image?: FramerImage;
  /** Labels of the three pills of the "Tabs Wrapper". */
  tabs?: readonly [string, string, string];
}

const BANNER_IMAGE: FramerImage = {
  src: "/images/HZnWRBUr8AE6TiztMetlYHvobk8.jpg",
  alt: "About Us Banner Image",
  width: 6000,
  height: 4000,
  srcSet:
    "/images/HZnWRBUr8AE6TiztMetlYHvobk8-1.jpg 512w, /images/HZnWRBUr8AE6TiztMetlYHvobk8-2.jpg 1024w, /images/HZnWRBUr8AE6TiztMetlYHvobk8-3.jpg 2048w, /images/HZnWRBUr8AE6TiztMetlYHvobk8-4.jpg 4096w, /images/HZnWRBUr8AE6TiztMetlYHvobk8.jpg 6000w",
};

const BANNER_IMAGE_SIZES =
  "(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279.98px) 100vw, (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

/** Decorative background graphic (same on every breakpoint). */
const BG_DECORATION: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  alt: "BG Decoration",
  width: 923,
  height: 769,
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
};

const BG_DECORATION_SIZES =
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) 923px, (max-width: 991.98px) 100vw";

const BIG_CIRCLE: FramerImage = {
  src: "/images/O0KxrNTKZwsNgxgJ2qHhOdqPIEQ.svg",
  alt: "Big Circle BG",
  width: 458,
  height: 458,
};

const SMALL_CIRCLE: FramerImage = {
  src: "/images/cbCOQNpNwKO9FQPwaJNnR2w4vNY.svg",
  alt: "Small Circle BG",
  width: 358,
  height: 358,
};

const LOGO_IMAGE: FramerImage = {
  src: "/images/Od2skloa7zqvI6TKjYILXTmySs.svg",
  alt: "Logo Image",
  width: 200,
  height: 200,
};

/** Instance wrapper class and scroll-reveal entry transform of each pill. */
const TAB_PLACEMENTS = [
  { className: "framer-xoepoy-container", transform: "translateX(-120px) translateY(-20px)" },
  { className: "framer-agfwz5-container", transform: "translateY(-50%) translateX(-50px)" },
  { className: "framer-ib09ec-container", transform: "translateX(-130px) translateY(20px)" },
] as const;

const TAB_STYLE: CSSProperties = {
  "--border-bottom-width": "1px",
  "--border-color": "var(--token-cbac7c77-39a0-497d-bfeb-fc1b8d087c38, rgba(56, 116, 101, 0.2))",
  "--border-left-width": "1px",
  "--border-right-width": "1px",
  "--border-style": "solid",
  "--border-top-width": "1px",
  backdropFilter: "blur(10px)",
  backgroundColor: "var(--token-e6fcdde0-89fd-4e70-841b-aaa17ef52df0, rgba(56, 116, 101, 0.2))",
  WebkitBackdropFilter: "blur(10px)",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

/** Framer's pill component (`framer-8db7I framer-9kcbxh`). */
function TabPill({ label }: { label: string }) {
  return (
    <div
      className="framer-8db7I framer-CXUbw framer-9kcbxh framer-v-9kcbxh"
      data-border="true"
      data-framer-name="Default"
      style={TAB_STYLE}
    >
      <div
        className="framer-1k02d4q"
        data-framer-name="Body"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": TOKENS.yellow,
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-184kbjj"
          data-styles-preset="jo34BIwbe"
          dir="auto"
          style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.yellow})` }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export function AboutBanner({
  title = "About us",
  description = "Founded on the principles of compassion and inclusivity, we bring together partners, donors, and volunteers to collectively make a lasting and meaningful impact.",
  button = { label: "Our mission", href: "/our-mission" },
  image = BANNER_IMAGE,
  tabs = ["Collaborative", "Supportive", "Impactful"],
}: AboutBannerProps) {
  const heading = (alignment: "left" | "center") => (
    <div
      className="framer-177swso"
      data-framer-name="Heading"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <h1
        className="framer-text framer-styles-preset-lo4ujp"
        data-styles-preset="aeh2bjTr3"
        dir="auto"
        style={{ "--framer-text-alignment": alignment, "--framer-text-color": TOKENS.white }}
      >
        {title}
      </h1>
    </div>
  );

  const body = (alignment: "left" | "center") => (
    <div
      className="framer-kvt3km"
      data-framer-name="Body"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <p
        className="framer-text framer-styles-preset-184kbjj"
        data-styles-preset="jo34BIwbe"
        dir="auto"
        style={{ "--framer-text-alignment": alignment }}
      >
        {description}
      </p>
    </div>
  );

  const bannerImage = (
    <div className="framer-9ownv2 hidden-1ys3drf hidden-1v22ssx" style={REVEAL_STYLE}>
      <FramerBackgroundImage image={image} sizes={BANNER_IMAGE_SIZES} />
    </div>
  );

  return (
    <section className="framer-s9fbol" data-framer-name="About Us Banner Section">
      <div className="framer-1q57pnp" data-framer-name="BG Wrapper">
        <div className="ssr-variant hidden-tenz1j">
          <div
            className="framer-2r3bgd"
            style={{ width: "auto", aspectRatio: "1.200260078023407" }}
          >
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_DECORATION_SIZES} />
          </div>
        </div>
        <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
          <div className="framer-2r3bgd">
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_DECORATION_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-ptgwol" data-framer-name="Base Container">
        <div className="framer-1nlgue3" data-framer-name="Left Content Block">
          <div className="framer-en61b7" data-framer-name="Text Container">
            <div className="ssr-variant hidden-tenz1j">{heading("left")}</div>
            <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">{heading("center")}</div>
            <div className="ssr-variant hidden-tenz1j">{body("left")}</div>
            <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">{body("center")}</div>
          </div>
          <div className="ssr-variant hidden-tenz1j">
            <div className="framer-1too91-container" style={REVEAL_STYLE}>
              <PrimaryButtonLink href={button.href} label={button.label} variant="desktop" />
            </div>
          </div>
          <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
            <div className="framer-1too91-container" style={REVEAL_STYLE}>
              <PrimaryButtonLink href={button.href} label={button.label} variant="phone" />
            </div>
          </div>
        </div>
        <div className="ssr-variant hidden-tenz1j">{bannerImage}</div>
        <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">{bannerImage}</div>
        <div className="framer-19jwft3 hidden-tenz1j" data-framer-name="Right Content Block">
          <div className="framer-1t1f7d8" data-framer-name="Tabs Wrapper">
            {TAB_PLACEMENTS.map((placement, i) => (
              <div key={placement.className} className="ssr-variant">
                <div
                  className={placement.className}
                  style={{ willChange: "transform", opacity: "0", transform: placement.transform }}
                >
                  <TabPill label={tabs[i] ?? ""} />
                </div>
              </div>
            ))}
          </div>
          <div className="framer-3m7euc" data-framer-name="Images Wrapper">
            <div className="ssr-variant">
              <div
                className="framer-rusj0c"
                data-framer-name="Big Circle"
                style={{ willChange: "transform", opacity: "0", transform: "translateX(80px)" }}
              >
                <FramerBackgroundImage image={BIG_CIRCLE} />
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-1r9vc1j"
                data-framer-name="Small Circle"
                style={{
                  willChange: "transform",
                  width: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translate(-50%, -50%) translateX(-60px)",
                }}
              >
                <FramerBackgroundImage image={SMALL_CIRCLE} />
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-12fh1pj"
                data-framer-name="Logo Image"
                style={{
                  willChange: "transform",
                  width: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translate(-50%, -50%) scale(3)",
                }}
              >
                <FramerBackgroundImage image={LOGO_IMAGE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
