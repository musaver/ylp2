import Link from "next/link";
import {
  FramerBackgroundImage,
  OutlineButtonLink,
  REVEAL_STYLE,
  TOKENS,
} from "@/components/sections/framer-shared";
import type { FramerImage, NavLink } from "@/lib/types";

export interface LeadershipBannerContent {
  /** H1 split around the blue highlighted word: "Our " + "lovely" + " team". */
  heading: { before: string; highlight: string; after: string };
  description: string;
  /** Yellow primary button (`framer-u1OFg`). */
  primaryLink: NavLink;
  /** Outline button (`framer-f1FWS`). */
  secondaryLink: NavLink;
  image: FramerImage;
}

/** Content of the leadership banner as exported. */
export const LEADERSHIP_BANNER: LeadershipBannerContent = {
  heading: { before: "Our ", highlight: "lovely", after: " team" },
  description:
    "Join us in our mission to empower individuals, uplift families, and transform communities through acts of kindness, compassion, and service.",
  primaryLink: { label: "Join our organization", href: "/career" },
  secondaryLink: { label: "Support", href: "/contact-us" },
  image: {
    src: "/images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg",
    alt: "Leadership Banner Image",
    width: 4000,
    height: 6000,
    srcSet:
      "/images/d2Ta00IrAO1lr0SXmjl5xPo58-1.jpg 682w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-2.jpg 1365w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-3.jpg 2730w, /images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg 4000w",
  },
};

const BANNER_IMAGE_SIZES =
  "(min-width: 1280px) min(max((min(max(100vw, 1px), 1340px) - 100px) / 2, 1px), 520px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 80px) / 2, 1px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

/** Yellow primary button with arrow icon (`framer-u1OFg` component instance). */
function PrimaryButton({ link, phone }: { link: NavLink; phone: boolean }) {
  return (
    <Link
      className={`framer-u1OFg framer-5BI2U framer-gqm115 ${phone ? "framer-v-hry1d3" : "framer-v-gqm115"} framer-dall63`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      href={link.href}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": TOKENS.yellowTransparent,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: TOKENS.yellow,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div
        className="framer-1uyh8kc"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-u2DVngPhu-fffJ5YP8D)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-Oqx4iaqOk-fffJ5YP8D": TOKENS.white,
          "--variable-reference-u2DVngPhu-fffJ5YP8D": TOKENS.dark,
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--variable-reference-u2DVngPhu-fffJ5YP8D))",
          }}
        >
          {link.label}
        </p>
      </div>
      <div
        className="framer-mkgslb"
        data-framer-name="Icon Wrapper"
        style={{
          backgroundColor: TOKENS.dark,
          borderBottomLeftRadius: "2px",
          borderBottomRightRadius: "2px",
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
          transform: "none",
        }}
      >
        <div
          data-framer-name="Icon"
          className="framer-vCDm1 framer-7hc1b8"
          style={{ "--1afajen": TOKENS.white }}
        ></div>
      </div>
    </Link>
  );
}

function Heading({
  heading,
  centered,
}: {
  heading: LeadershipBannerContent["heading"];
  centered: boolean;
}) {
  return (
    <div
      className="framer-wnq0gg"
      data-framer-name="Heading"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <h1
        className="framer-text framer-styles-preset-lo4ujp"
        data-styles-preset="aeh2bjTr3"
        dir="auto"
        style={centered ? { "--framer-text-alignment": "center" } : undefined}
      >
        {heading.before}
        <span style={{ "--framer-text-color": TOKENS.blue }} className="framer-text">
          {heading.highlight}
        </span>
        {heading.after}
      </h1>
    </div>
  );
}

function Body({ text, centered }: { text: string; centered: boolean }) {
  return (
    <div
      className="framer-ekrii2"
      data-framer-name="Body"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <p
        className="framer-text framer-styles-preset-184kbjj"
        data-styles-preset="jo34BIwbe"
        dir="auto"
        style={
          centered
            ? { "--framer-text-alignment": "center", "--framer-text-color": TOKENS.grey }
            : { "--framer-text-color": TOKENS.grey }
        }
      >
        {text}
      </p>
    </div>
  );
}

/**
 * Framer "Leadership Banner Section" (`section.framer-10f0c0r`, hash c277809bd8): H1 with a
 * highlighted word, intro text, primary + outline buttons and the banner image.
 */
export function LeadershipBanner({
  content = LEADERSHIP_BANNER,
}: {
  content?: LeadershipBannerContent;
}) {
  return (
    <section className="framer-10f0c0r" data-framer-name="Leadership Banner Section">
      <div className="framer-1hfwv4e" data-framer-name="Base Container">
        <div className="framer-6fog5w" data-framer-name="Text Content Wrapper">
          <div className="framer-nzp57r" data-framer-name="Text Content">
            <div className="ssr-variant hidden-1t6nr2y">
              <Heading heading={content.heading} centered={false} />
            </div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">
              <Heading heading={content.heading} centered />
            </div>
            <div className="ssr-variant hidden-1t6nr2y">
              <Body text={content.description} centered={false} />
            </div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">
              <Body text={content.description} centered />
            </div>
          </div>
          <div className="framer-1qjw5di" data-framer-name="Buttons Wrapper">
            <div className="ssr-variant hidden-1t6nr2y">
              <div className="framer-uaz9dz-container" style={REVEAL_STYLE}>
                <PrimaryButton link={content.primaryLink} phone={false} />
              </div>
            </div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">
              <div className="framer-uaz9dz-container" style={REVEAL_STYLE}>
                <PrimaryButton link={content.primaryLink} phone />
              </div>
            </div>
            <div className="ssr-variant hidden-1t6nr2y">
              <div className="framer-1c03fyt-container" style={REVEAL_STYLE}>
                <OutlineButtonLink
                  href={content.secondaryLink.href}
                  label={content.secondaryLink.label}
                  variant="desktop"
                />
              </div>
            </div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">
              <div className="framer-1c03fyt-container" style={REVEAL_STYLE}>
                <OutlineButtonLink
                  href={content.secondaryLink.href}
                  label={content.secondaryLink.label}
                  variant="phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-1smm8u1" style={REVEAL_STYLE}>
            <FramerBackgroundImage image={content.image} sizes={BANNER_IMAGE_SIZES} />
          </div>
        </div>
      </div>
    </section>
  );
}
