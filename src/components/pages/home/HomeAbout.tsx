import type { CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SectionHeading,
  SlashLabel,
  TOKENS,
} from "@/components/sections/framer-shared";

/** Breakpoint classes of the home template. */
const HIDE_DESKTOP = "hidden-72rtr7";
const HIDE_TABLET = "hidden-12w2mq9";
const HIDE_PHONE = "hidden-1au1vxw";

/**
 * One floating tag of the "Tabs Wrapper". `transform` is the reveal start transform of the
 * instance wrapper; when the phone layout uses a different one (`phoneTransform`), Framer
 * renders the tag twice (desktop/tablet block, phone block).
 */
interface FloatingTag {
  label: string;
  container: string;
  transform: string;
  phoneTransform?: string;
}

const TAG_SLOTS: ReadonlyArray<Omit<FloatingTag, "label">> = [
  { container: "framer-xzl3oo-container", transform: "translateX(-110px) translateY(100px)" },
  { container: "framer-1ljnof-container", transform: "translateX(-100px) translateY(-80px)" },
  {
    container: "framer-3666js-container",
    transform: "translateX(150px) translateY(-80px)",
    phoneTransform: "translateX(120px) translateY(-60px)",
  },
  {
    container: "framer-ex910o-container",
    transform: "translateY(-50%) translateX(160px) translateY(90px)",
    phoneTransform: "translateY(-50%) translateX(80px) translateY(60px)",
  },
  { container: "framer-m7zxbn-container", transform: "translateX(140px) translateY(30px)" },
  {
    container: "framer-twav1c-container",
    transform: "translateY(-50%) translateX(-110px) translateY(100px)",
  },
];

export interface HomeAboutContent {
  /** Labels of the six floating tags (Impactful, Collaborative, …). */
  tags: string[];
  label: string;
  heading: string;
  body: string;
  statValue: string;
  statLabel: string;
}

export const HOME_ABOUT: HomeAboutContent = {
  tags: ["Academia", "Technology", "Leadership", "Research", "Skills", "Tazkiyah"],
  label: "About our center",
  heading:
    "We believe in the power of community and the difference we can make when we come together to help those in need.",
  body: "Whether you're looking to volunteer, donate resources, or support local initiatives, your involvement is key to creating positive change.",
  statValue: "10,000+ hours volunteered",
  statLabel: "by our compassionate community",
};

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
const LOGO: FramerImage = {
  src: "/images/Od2skloa7zqvI6TKjYILXTmySs.svg",
  alt: "Logo Image",
  width: 200,
  height: 200,
};

/** Reveal start style with a custom entry transform. */
function reveal(transform: string): CSSProperties {
  return { willChange: "transform", opacity: "0", transform };
}

/** The floating tag component (`framer-8db7I framer-9kcbxh`). */
function Tag({ label }: { label: string }) {
  return (
    <div
      className="framer-8db7I framer-CXUbw framer-9kcbxh framer-v-9kcbxh"
      data-border="true"
      data-framer-name="Default"
      style={{
        "--border-bottom-width": "1px",
        "--border-color":
          "var(--token-cbac7c77-39a0-497d-bfeb-fc1b8d087c38, rgba(56, 116, 101, 0.2))",
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backdropFilter: "blur(10px)",
        backgroundColor:
          "var(--token-e6fcdde0-89fd-4e70-841b-aaa17ef52df0, rgba(56, 116, 101, 0.2))",
        WebkitBackdropFilter: "blur(10px)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
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

function StatText({ className, text, color }: { className: string; text: string; color: string }) {
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
        style={{ "--framer-text-color": color }}
      >
        {text}
      </p>
    </div>
  );
}

export interface HomeAboutProps {
  content?: HomeAboutContent;
}

/**
 * Home "About Us Section" (hash fe8964fc1f, section.framer-1w5quix): animated circles with
 * the floating value tags (static: no interactive state was captured for the "Tabs Wrapper",
 * the tags only animate in on scroll), "/ About our center /" label, heading, intro text and
 * the volunteering stat.
 */
export function HomeAbout({ content = HOME_ABOUT }: HomeAboutProps) {
  return (
    <section className="framer-1w5quix" data-framer-name="About Us Section">
      <div className="framer-1pjfzfg" data-framer-name="Base Container">
        <div className="framer-1b1r2pv" data-framer-name="Left Content Block">
          <div className="framer-157uwl4" data-framer-name="Tabs Wrapper">
            {content.tags.slice(0, TAG_SLOTS.length).map((label, i) => {
              const slot = TAG_SLOTS[i]!;
              if (!slot.phoneTransform) {
                return (
                  <div key={i} className="ssr-variant">
                    <div className={slot.container} style={reveal(slot.transform)}>
                      <Tag label={label} />
                    </div>
                  </div>
                );
              }
              return [
                <div key={`${i}-default`} className={`ssr-variant ${HIDE_PHONE}`}>
                  <div className={slot.container} style={reveal(slot.transform)}>
                    <Tag label={label} />
                  </div>
                </div>,
                <div key={`${i}-phone`} className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                  <div className={slot.container} style={reveal(slot.phoneTransform)}>
                    <Tag label={label} />
                  </div>
                </div>,
              ];
            })}
          </div>
          <div className="framer-1ckcmly" data-framer-name="Images Wrapper">
            <div className={`ssr-variant ${HIDE_TABLET}`}>
              <div
                className="framer-j0sx60"
                data-framer-name="Big Circle"
                style={{
                  willChange: "transform",
                  height: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translateX(180px)",
                }}
              >
                <FramerBackgroundImage image={BIG_CIRCLE} />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_DESKTOP} ${HIDE_PHONE}`}>
              <div
                className="framer-j0sx60"
                data-framer-name="Big Circle"
                style={reveal("translateX(180px)")}
              >
                <FramerBackgroundImage image={BIG_CIRCLE} />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_PHONE}`}>
              <div
                className="framer-1pccbj2"
                data-framer-name="Small Circle"
                style={{
                  willChange: "transform",
                  width: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translate(-50%, -50%) translateX(-300px)",
                }}
              >
                <FramerBackgroundImage image={SMALL_CIRCLE} loading="lazy" />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_DESKTOP} ${HIDE_PHONE}`}>
              <div
                className="framer-1pccbj2"
                data-framer-name="Small Circle"
                style={{
                  willChange: "transform",
                  width: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translate(-50%, -50%) translateX(-300px)",
                }}
              >
                <FramerBackgroundImage image={SMALL_CIRCLE} />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
              <div
                className="framer-1pccbj2"
                data-framer-name="Small Circle"
                style={reveal("translate(-50%, -50%) translateX(-250px)")}
              >
                <FramerBackgroundImage image={SMALL_CIRCLE} />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_PHONE}`}>
              <div
                className="framer-15ojy2n"
                data-framer-name="Logo Image"
                style={{
                  willChange: "transform",
                  width: "auto",
                  aspectRatio: "1",
                  opacity: "0",
                  transform: "translate(-50%, -50%) rotate(-270deg)",
                }}
              >
                <FramerBackgroundImage image={LOGO} loading="lazy" />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
              <div
                className="framer-15ojy2n"
                data-framer-name="Logo Image"
                style={reveal("translate(-50%, -50%) rotate(-270deg)")}
              >
                <FramerBackgroundImage image={LOGO} />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-g5dfsu" data-framer-name="Right Content Block">
          <div className="framer-1dekle2" data-framer-name="Top Content">
            <div className="ssr-variant">
              <div className="framer-1mgmkc0-container" style={REVEAL_STYLE}>
                <SlashLabel text={content.label} color={TOKENS.yellow} />
              </div>
            </div>
            <div className="framer-16oo9ka" data-framer-name="Text Content">
              <SectionHeading
                className="framer-lixk4u"
                text={content.heading}
                color={TOKENS.white}
              />
              <div
                className="framer-ccdyuz"
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
          </div>
          <div
            className="framer-in4gbm"
            data-border="true"
            data-framer-name="Bottom Content"
            style={REVEAL_STYLE}
          >
            <StatText className="framer-1c7xq95" text={content.statValue} color={TOKENS.yellow} />
            <StatText className="framer-448zfb" text={content.statLabel} color={TOKENS.white} />
          </div>
        </div>
      </div>
    </section>
  );
}
