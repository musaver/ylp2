import Link from "next/link";
import type { Job } from "@/lib/types";
import {
  TOKENS,
  FramerBackgroundImage,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's job card (`framer-YFH5W framer-1wz58l1`), converted from the "Career Section"
 * ("More opportunities / Join our mission") of the career detail template (hash 8933cb7fb2),
 * used on /career/[slug]. Shows location (with pin icon), employment type ("Full time"),
 * title, excerpt and an "Apply now" button. Renders the component root (`<a>`) only;
 * `CareersSection` places the instance wrapper and the `ssr-variant` breakpoint wrappers.
 */
export interface JobCardProps {
  job: Job;
  variant: CardVariant;
}

const VARIANT_CLASS: Record<CardVariant, string> = {
  desktop: "framer-v-1wz58l1",
  tablet: "framer-v-1hcysp7",
  phone: "framer-v-hzfnx5",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

/** The location pin icon Framer exported as a remote SVG (same on every card). */
const PIN_ICON = {
  src: "/images/remote/DkwFWSfxOGrjeGDrGCLmAU3v7g.svg",
  alt: "",
  width: 80,
  height: 80,
};

export function JobCard({ job, variant }: JobCardProps) {
  return (
    <Link
      className={`framer-YFH5W framer-cYxwf framer-dVXc9 framer-Ryh7E framer-1wz58l1 ${VARIANT_CLASS[variant]} framer-x07bw`}
      data-framer-name={VARIANT_NAME[variant]}
      href={`/career/${job.slug}`}
      style={{
        backgroundColor: TOKENS.surface,
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div className="framer-1vcph2y" data-framer-name="Text Container Wrapper">
        <div className="framer-bzwtu1" data-framer-name="Text Container">
          <div className="framer-m5v5md" data-framer-name="Location Wrapper">
            <div
              className="framer-661r0y"
              data-framer-name="Icon"
              style={{
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
              }}
            >
              <FramerBackgroundImage
                image={PIN_ICON}
                loading={variant === "phone" ? undefined : "lazy"}
              />
            </div>
            <div
              className="framer-hs3gxj"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.dark, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
                style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
              >
                {job.location}
              </p>
            </div>
          </div>
          <div
            className="framer-7m8osc"
            data-framer-name="Schedule Label"
            style={{
              backgroundColor: TOKENS.white,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <div
              className="framer-yg9k59"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.dark, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1u0xujd"
                data-styles-preset="QZ8HlqCwU"
                dir="auto"
                style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
              >
                {job.employmentType}
              </p>
            </div>
          </div>
        </div>
        <div
          className="framer-3rtdox"
          data-framer-name="Divider"
          style={{ backgroundColor: TOKENS.borderLight }}
        ></div>
        <div className="framer-iyqj28" data-framer-name="Text Content">
          <div
            className="framer-1m9hq6x"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{ "--extracted-1eung3n": TOKENS.dark, transform: "none" }}
          >
            <h4
              className="framer-text framer-styles-preset-2jjc1m"
              data-styles-preset="xxONqHW3X"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-1eung3n, ${TOKENS.dark})` }}
            >
              {job.title}
            </h4>
          </div>
          <div
            className="framer-dpw7q9"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <p
              className="framer-text framer-styles-preset-1dpgexf"
              data-styles-preset="wUYf66_Db"
              dir="auto"
            >
              {job.excerpt}
            </p>
          </div>
        </div>
      </div>
      <div className="framer-yl3y35-container">
        <button
          className="framer-fDqp7 framer-5BI2U framer-1ewyu2v framer-v-1ewyu2v"
          data-border="true"
          data-framer-name="Default"
          data-highlight="true"
          data-reset="button"
          tabIndex={0}
          style={{
            "--bcqgbe": "15px 20px 15px 20px",
            "--border-bottom-width": "1px",
            "--border-color": TOKENS.borderWhite,
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
            className="framer-1duhuzz"
            data-framer-name="CTA Text"
            data-framer-component-type="RichTextContainer"
            style={{
              "--extracted-r6o4lv": "var(--variable-reference-tCAxAvg0r-fSqWqWBvS)",
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              "--variable-reference-tCAxAvg0r-fSqWqWBvS": TOKENS.dark,
              "--variable-reference-ytYBNYwN5-fSqWqWBvS": TOKENS.white,
              transform: "none",
            }}
          >
            <p
              className="framer-text framer-styles-preset-o266m6"
              data-styles-preset="XE418oX5i"
              dir="auto"
              style={{
                "--framer-text-color":
                  "var(--extracted-r6o4lv, var(--variable-reference-tCAxAvg0r-fSqWqWBvS))",
              }}
            >
              Apply now
            </p>
          </div>
          <div
            data-framer-name="Icon"
            className="framer-vCDm1 framer-1i9f037"
            style={{ "--1afajen": TOKENS.dark }}
          ></div>
        </button>
      </div>
    </Link>
  );
}
