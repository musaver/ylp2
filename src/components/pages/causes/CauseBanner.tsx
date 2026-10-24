import type { CSSProperties } from "react";
import Link from "next/link";
import type { Cause, FramerImage } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/** Background decoration graphics of the banner (design assets, identical on every cause). */
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
  "(min-width: 1280px) 923px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";
const DECORATION_RIGHT_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) calc(100vw - 40px), (max-width: 991.98px) calc(100vw - 40px)";

/** One decoration graphic in its desktop / tablet / phone `ssr-variant` wrappers. */
const DECORATIONS = [
  {
    className: "framer-1kjnyf4",
    image: DECORATION_LEFT,
    sizes: DECORATION_LEFT_SIZES,
    ratio: "1.200260078023407",
  },
  {
    className: "framer-c8biz4",
    image: DECORATION_RIGHT,
    sizes: DECORATION_RIGHT_SIZES,
    ratio: "1.5546099290780142",
  },
] as const;

function decorationStyles(ratio: string): Array<[string, CSSProperties]> {
  return [
    ["ssr-variant hidden-1qvxql2 hidden-29zmi8", { width: "auto", aspectRatio: ratio }],
    ["ssr-variant hidden-9ymi93 hidden-29zmi8", { height: "auto", aspectRatio: ratio }],
    [
      "ssr-variant hidden-1qvxql2 hidden-9ymi93",
      { height: "auto", aspectRatio: ratio, transform: "translateY(-50%)" },
    ],
  ];
}

/** "Contribute" button (`framer-u1OFg` component instance), Default or Phone variant. */
function ContributeButton({ phone }: { phone: boolean }) {
  return (
    <Link
      className={`framer-u1OFg framer-5BI2U framer-gqm115 ${phone ? "framer-v-hry1d3" : "framer-v-gqm115"} framer-dall63`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      href="/contact-us"
      style={{
        "--border-bottom-width": "1px",
        "--border-color":
          "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgba(255, 255, 255, 0))",
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
          Contribute
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

export interface CauseBannerProps {
  cause: Cause;
}

/**
 * Cause detail banner: dark background with decoration graphics, the cause title (h1),
 * excerpt and the "Contribute" button.
 * Framer "Causes Details Banner Section" (section.framer-1r32zo7, e.g. hash 947187c88b).
 */
export function CauseBanner({ cause }: CauseBannerProps) {
  return (
    <section className="framer-1r32zo7" data-framer-name="Causes Details Banner Section">
      <div className="framer-1xsgpmu" data-framer-name="BG Wrapper">
        {DECORATIONS.map((decoration) =>
          decorationStyles(decoration.ratio).map(([wrapper, style]) => (
            <div key={`${decoration.className} ${wrapper}`} className={wrapper}>
              <div className={decoration.className} style={style}>
                <FramerBackgroundImage image={decoration.image} sizes={decoration.sizes} />
              </div>
            </div>
          )),
        )}
      </div>
      <div className="framer-1b1t71a" data-framer-name="Base Container">
        <div className="framer-pffsq3" data-framer-name="Text Container Wrapper">
          <div className="framer-h4sd12" data-framer-name="Text Container">
            <div
              className="framer-m5aj5a"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <h1
                className="framer-text framer-styles-preset-1358caa"
                data-styles-preset="v66W57sgg"
                dir="auto"
                style={{ "--framer-text-alignment": "center", "--framer-text-color": TOKENS.white }}
              >
                {cause.title}
              </h1>
            </div>
            <div
              className="framer-11j5z86"
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
                {cause.excerpt}
              </p>
            </div>
          </div>
          <div className="ssr-variant hidden-29zmi8">
            <div className="framer-1qq90qy-container" style={REVEAL_STYLE}>
              <ContributeButton phone={false} />
            </div>
          </div>
          <div className="ssr-variant hidden-1qvxql2 hidden-9ymi93">
            <div className="framer-1qq90qy-container" style={REVEAL_STYLE}>
              <ContributeButton phone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
