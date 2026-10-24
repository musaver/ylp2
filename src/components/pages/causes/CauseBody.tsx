import Link from "next/link";
import type { Cause } from "@/lib/types";
import { RichText } from "@/components/sections/RichText";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

const STICKY_IMAGE_SIZES =
  "(min-width: 1280px) calc(min(max((min(100vw - 40px, 1340px) - 100px) / 2, 1px), 400px) - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(min(max((min(100vw - 40px, 1340px) - 80px) / 2, 1px), 350px) - 40px), (max-width: 991.98px) max(min(100vw - 40px, 1340px) - 60px, 280px)";

/** "Support" button of the sticky block (`framer-ofITM` component instance). */
function SupportButton({ phone }: { phone: boolean }) {
  return (
    <Link
      className={`framer-ofITM framer-5BI2U framer-ivsl9k ${phone ? "framer-v-1wzcqaj" : "framer-v-ivsl9k"} framer-3a2i7f`}
      data-framer-name={phone ? "Phone" : "Default"}
      href="/contact-us"
      style={{
        backgroundColor: TOKENS.yellow,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div
        className="framer-tpg2pm"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": TOKENS.dark,
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
        >
          Support
        </p>
      </div>
    </Link>
  );
}

export interface CauseBodyProps {
  cause: Cause;
}

/**
 * Cause detail body: the rich text (shared `RichText`, variant "cause", rendered once per
 * breakpoint block) and the "Sticky Block" with the cause's aside image, title, text and
 * label plus the "Support" button.
 * Framer "Rich Text Section" (section.framer-yxj8ce, e.g. hash 99d25cdc68).
 */
export function CauseBody({ cause }: CauseBodyProps) {
  const { aside } = cause;
  return (
    <section className="framer-yxj8ce" data-framer-name="Rich Text Section">
      <div className="framer-1ejhn7j" data-framer-name="Base Container">
        <div className="ssr-variant hidden-29zmi8">
          <div
            className="framer-1t6srgd"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={cause.body} variant="cause" breakpoint="desktop" />
          </div>
        </div>
        <div className="ssr-variant hidden-1qvxql2 hidden-9ymi93">
          <div
            className="framer-1t6srgd"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={cause.body} variant="cause" breakpoint="phone" />
          </div>
        </div>
        <div className="framer-1gxs5ga" data-framer-name="Sticky Block" style={REVEAL_STYLE}>
          <div className="ssr-variant">
            <div className="framer-3udlfl">
              <FramerBackgroundImage image={aside.image} sizes={STICKY_IMAGE_SIZES} />
            </div>
          </div>
          <div className="framer-fafa4k" data-framer-name="Text Container Wrapper">
            <div className="framer-1qm21zl" data-framer-name="Text Container">
              <div
                className="framer-1y0fqc7"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h5
                  className="framer-text framer-styles-preset-5o228f"
                  data-styles-preset="Vm6br8Jm2"
                  dir="auto"
                  style={{ "--framer-text-alignment": "left" }}
                >
                  {aside.title}
                </h5>
              </div>
              <div
                className="framer-wm1ulx"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-1dpgexf"
                  data-styles-preset="wUYf66_Db"
                  dir="auto"
                >
                  {aside.description}
                </p>
              </div>
            </div>
            <div className="framer-6w4dny" data-framer-name="Button Wrapper">
              <div className="framer-286z70" data-framer-name="Text Content">
                <div data-framer-name="Icon" className="framer-QGNNV framer-xuc1gd"></div>
                <div
                  className="framer-1vr7bki"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    className="framer-text framer-styles-preset-1u0xujd"
                    data-styles-preset="QZ8HlqCwU"
                    dir="auto"
                    style={{ "--framer-text-color": TOKENS.dark }}
                  >
                    {aside.label}
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-29zmi8">
                <div className="framer-1gwr2s1-container">
                  <SupportButton phone={false} />
                </div>
              </div>
              <div className="ssr-variant hidden-1qvxql2 hidden-9ymi93">
                <div className="framer-1gwr2s1-container">
                  <SupportButton phone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
