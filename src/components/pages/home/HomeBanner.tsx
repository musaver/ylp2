import Link from "next/link";
import type { CSSProperties } from "react";
import type { FramerImage, NavLink } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import { PrimaryButtonLink } from "./PrimaryButtonLink";

/** Breakpoint classes of the home template. */
const HIDE_DESKTOP = "hidden-72rtr7";
const HIDE_TABLET = "hidden-12w2mq9";
const HIDE_PHONE = "hidden-1au1vxw";

const BG_DECORATION_TOP: FramerImage = {
  src: "/images/gkGh30ujoh22UwTCXcDsR41Jxc.svg",
  srcSet:
    "/images/gkGh30ujoh22UwTCXcDsR41Jxc-1.svg 512w, /images/gkGh30ujoh22UwTCXcDsR41Jxc.svg 923w",
  alt: "BG Decoration",
  width: 923,
  height: 769,
};
const BG_DECORATION_TOP_SIZES =
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) 100vw, (max-width: 991.98px) 100vw";

const BG_DECORATION_BOTTOM: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
};
const BG_DECORATION_BOTTOM_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) 100vw, (max-width: 991.98px) 100vw";

const AVATAR_SIZES =
  "(min-width: 1280px) 54px, (min-width: 992px) and (max-width: 1279.98px) 54px, (max-width: 991.98px) 54px";
const IMAGE_SIZES =
  "(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 50px) / 2, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 50px) / 2, 1px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

/** Classes of the four avatar slots (outer "Avatar" frame, inner image frame). */
const AVATAR_SLOTS: ReadonlyArray<readonly [string, string]> = [
  ["framer-nfg971", "framer-1rqkb5"],
  ["framer-1iv371k", "framer-omt0hl"],
  ["framer-ydsqqt", "framer-1bn6byy"],
  ["framer-1dqn276", "framer-si33df"],
];

export interface HomeBannerContent {
  /** First part of the H1, highlighted in yellow. */
  headingHighlight: string;
  /** Rest of the H1 (starts with a space). */
  headingRest: string;
  body: string;
  /** Yellow "About organization" button. */
  primary: NavLink;
  /** Outline "Support" button. */
  secondary: NavLink;
  /** Up to four avatars next to the stat. */
  avatars: FramerImage[];
  statValue: string;
  statLabel: string;
  image: FramerImage;
}

export const HOME_BANNER: HomeBannerContent = {
  headingHighlight: "YouthLink ",
  headingRest: "A Networking Platform",
  body: "A strong Muslim community that develops character, skills, networks and practical capacity to serve society.",
  primary: { label: "Join Youthlink", href: "/join-youthlink" },
  secondary: { label: "Our Projects", href: "/projects" },
  avatars: [
    {
      src: "/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg",
      srcSet:
        "/images/IQKddGGUVKfESbTRhHhxUrBqwQ-1.jpg 512w, /images/IQKddGGUVKfESbTRhHhxUrBqwQ-2.jpg 1024w, /images/IQKddGGUVKfESbTRhHhxUrBqwQ-3.jpg 2048w, /images/IQKddGGUVKfESbTRhHhxUrBqwQ-4.jpg 4096w, /images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg 4928w",
      alt: "Avatar Image",
      width: 4928,
      height: 3264,
    },
    {
      src: "/images/12WmprRLTu4fVOJbRtXrv06awc.jpg",
      srcSet:
        "/images/12WmprRLTu4fVOJbRtXrv06awc-1.jpg 682w, /images/12WmprRLTu4fVOJbRtXrv06awc-2.jpg 1365w, /images/12WmprRLTu4fVOJbRtXrv06awc-3.jpg 2730w, /images/12WmprRLTu4fVOJbRtXrv06awc.jpg 3840w",
      alt: "Avatar Image",
      width: 3840,
      height: 5760,
    },
    {
      src: "/images/Ob2yXfDcbD9RE20FS3pJX3sdaO8.jpg",
      srcSet:
        "/images/Ob2yXfDcbD9RE20FS3pJX3sdaO8-1.jpg 921w, /images/Ob2yXfDcbD9RE20FS3pJX3sdaO8-2.jpg 1843w, /images/Ob2yXfDcbD9RE20FS3pJX3sdaO8.jpg 3456w",
      alt: "Avatar Image",
      width: 3456,
      height: 3840,
    },
    {
      src: "/images/hMKseFGukPKk9f7zR5kGXXyfnLw.jpg",
      srcSet:
        "/images/hMKseFGukPKk9f7zR5kGXXyfnLw-1.jpg 865w, /images/hMKseFGukPKk9f7zR5kGXXyfnLw-2.jpg 1730w, /images/hMKseFGukPKk9f7zR5kGXXyfnLw.jpg 3456w",
      alt: "Avatar Image",
      width: 3456,
      height: 4089,
    },
  ],
  statValue: "5,000+ active members",
  statLabel: "come together to serve society",
  image: {
    src: "/images/DfzAH6RGbktPmaR9vLv5h70okFQ.jpg",
    srcSet:
      "/images/DfzAH6RGbktPmaR9vLv5h70okFQ-1.jpg 512w, /images/DfzAH6RGbktPmaR9vLv5h70okFQ-2.jpg 1024w, /images/DfzAH6RGbktPmaR9vLv5h70okFQ-3.jpg 2048w, /images/DfzAH6RGbktPmaR9vLv5h70okFQ-4.jpg 4096w, /images/DfzAH6RGbktPmaR9vLv5h70okFQ.jpg 8192w",
    alt: "Home Banner Image",
    width: 8192,
    height: 5462,
  },
};

/** `--border-color` of the banner's yellow button (white token, transparent fallback). */
const PRIMARY_BORDER = "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgba(255, 255, 255, 0))";

/**
 * The banner's outline "Support" button (`framer-f1FWS framer-13ee4dt`). Unlike the shared
 * `OutlineButtonLink` themes it uses a transparent dark background token and a yellow icon.
 */
function SupportButton({ link, phone }: { link: NavLink; phone: boolean }) {
  return (
    <Link
      className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-highlight="true"
      data-reset="button"
      href={link.href}
      tabIndex={0}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": TOKENS.borderDark,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: "var(--token-888a365e-211c-4a86-998f-3690b9077dab, rgba(7, 35, 47, 0))",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div
        className="framer-1yej3r1"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-tCAxAvg0r-QlNMqDH3I)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-tCAxAvg0r-QlNMqDH3I": TOKENS.white,
          "--variable-reference-ytYBNYwN5-QlNMqDH3I": TOKENS.yellow,
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--variable-reference-tCAxAvg0r-QlNMqDH3I))",
          }}
        >
          {link.label}
        </p>
      </div>
      <div
        data-framer-name="Icon"
        className="framer-vCDm1 framer-1k0yxb8"
        style={{ "--1afajen": TOKENS.yellow }}
      ></div>
    </Link>
  );
}

function StatText({
  className,
  text,
  color,
  centered,
}: {
  className: string;
  text: string;
  color: string;
  centered: boolean;
}) {
  const style: CSSProperties = centered
    ? { "--framer-text-alignment": "center", "--framer-text-color": color }
    : { "--framer-text-color": color };
  return (
    <div
      className={className}
      data-framer-name="Body"
      data-framer-component-type="RichTextContainer"
      style={{ transform: "none" }}
    >
      <p
        className="framer-text framer-styles-preset-1u0xujd"
        data-styles-preset="QZ8HlqCwU"
        dir="auto"
        style={style}
      >
        {text}
      </p>
    </div>
  );
}

function BannerHeading({ content, centered }: { content: HomeBannerContent; centered: boolean }) {
  const style: CSSProperties = centered
    ? { "--framer-text-alignment": "center", "--framer-text-color": TOKENS.white }
    : { "--framer-text-color": TOKENS.white };
  return (
    <div
      className="framer-1kus67w"
      data-framer-name="Heading"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <h1
        className="framer-text framer-styles-preset-lo4ujp"
        data-styles-preset="aeh2bjTr3"
        dir="auto"
        style={style}
      >
        <span style={{ "--framer-text-color": TOKENS.yellow }} className="framer-text">
          {content.headingHighlight}
        </span>
        {content.headingRest}
      </h1>
    </div>
  );
}

export interface HomeBannerProps {
  content?: HomeBannerContent;
}

/**
 * Home page hero ("Home Banner Section", hash b1802124ae, section.framer-1l6zbqm): background
 * decorations, H1, intro text, "About organization" / "Support" buttons, avatar stack with
 * the families stat, and the banner photo. Desktop/tablet and phone variants are rendered in
 * Framer's `ssr-variant` wrappers.
 */
export function HomeBanner({ content = HOME_BANNER }: HomeBannerProps) {
  return (
    <section className="framer-1l6zbqm" data-framer-name="Home Banner Section">
      <div className="framer-15n6t53" data-framer-name="BG Wrapper">
        <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_PHONE}`}>
          <div
            className="framer-vrd43b"
            style={{ width: "auto", aspectRatio: "1.200260078023407" }}
          >
            <FramerBackgroundImage image={BG_DECORATION_TOP} sizes={BG_DECORATION_TOP_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${HIDE_DESKTOP}`}>
          <div
            className="framer-vrd43b"
            style={{ height: "auto", aspectRatio: "1.200260078023407" }}
          >
            <FramerBackgroundImage image={BG_DECORATION_TOP} sizes={BG_DECORATION_TOP_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_PHONE}`}>
          <div
            className="framer-etijly"
            style={{
              width: "auto",
              aspectRatio: "1.5546099290780142",
              transform: "translateY(-50%)",
            }}
          >
            <FramerBackgroundImage
              image={BG_DECORATION_BOTTOM}
              sizes={BG_DECORATION_BOTTOM_SIZES}
            />
          </div>
        </div>
        <div className={`ssr-variant ${HIDE_DESKTOP}`}>
          <div
            className="framer-etijly"
            style={{ height: "auto", aspectRatio: "1.5546099290780142" }}
          >
            <FramerBackgroundImage
              image={BG_DECORATION_BOTTOM}
              sizes={BG_DECORATION_BOTTOM_SIZES}
            />
          </div>
        </div>
      </div>
      <div className="framer-1xay91s" data-framer-name="Base Container">
        <div className="framer-yfk5b6" data-framer-name="Content Block Wrapper">
          <div className="framer-1xs15oy" data-framer-name="Top Content Wrapper ">
            <div className="framer-1t5ccc3" data-framer-name="Text Conteiner">
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <BannerHeading content={content} centered={false} />
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <BannerHeading content={content} centered />
              </div>
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <div
                  className="framer-1pbs23f"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={REVEAL_STYLE}
                >
                  <p
                    className="framer-text framer-styles-preset-184kbjj"
                    data-styles-preset="jo34BIwbe"
                    dir="auto"
                  >
                    {content.body}
                  </p>
                </div>
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <div
                  className="framer-1pbs23f"
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
                    {content.body}
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-16oh915" data-framer-name="Buttons Wrapper" style={REVEAL_STYLE}>
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <div className="framer-180nzy4-container">
                  <PrimaryButtonLink
                    href={content.primary.href}
                    label={content.primary.label}
                    variant="desktop"
                    borderColor={PRIMARY_BORDER}
                  />
                </div>
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <div className="framer-180nzy4-container">
                  <PrimaryButtonLink
                    href={content.primary.href}
                    label={content.primary.label}
                    variant="phone"
                    borderColor={PRIMARY_BORDER}
                  />
                </div>
              </div>
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <div className="framer-1hfbk96-container">
                  <SupportButton link={content.secondary} phone={false} />
                </div>
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <div className="framer-1hfbk96-container">
                  <SupportButton link={content.secondary} phone />
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-153e0s6"
            data-framer-name="Bottom Content Wrapper"
            style={REVEAL_STYLE}
          >
            <div className="framer-c1cr1r" data-framer-name="Avatars Wrapper">
              {content.avatars.slice(0, AVATAR_SLOTS.length).map((avatar, i) => {
                const [outer, inner] = AVATAR_SLOTS[i]!;
                return (
                  <div key={i} className={outer} data-framer-name="Avatar">
                    <div className="ssr-variant">
                      <div className={inner}>
                        <FramerBackgroundImage image={avatar} sizes={AVATAR_SIZES} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="framer-1ysq4y7" data-framer-name="Text Content">
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <StatText
                  className="framer-qbmdo2"
                  text={content.statValue}
                  color={TOKENS.yellow}
                  centered={false}
                />
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <StatText
                  className="framer-qbmdo2"
                  text={content.statValue}
                  color={TOKENS.yellow}
                  centered
                />
              </div>
              <div className={`ssr-variant ${HIDE_PHONE}`}>
                <StatText
                  className="framer-1g0igfk"
                  text={content.statLabel}
                  color={TOKENS.white}
                  centered={false}
                />
              </div>
              <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                <StatText
                  className="framer-1g0igfk"
                  text={content.statLabel}
                  color={TOKENS.white}
                  centered
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-cu7bwf" style={REVEAL_STYLE}>
            <FramerBackgroundImage image={content.image} sizes={IMAGE_SIZES} />
          </div>
        </div>
      </div>
    </section>
  );
}
