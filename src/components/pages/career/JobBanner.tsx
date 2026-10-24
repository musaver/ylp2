import Link from "next/link";
import { REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { Job } from "@/lib/types";

/** `hidden-*` classes of the career detail template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-6z3la4", tablet: "hidden-pi8rq8", phone: "hidden-vs04g8" } as const;

const LABEL_TEXT_STYLE = { "--framer-text-color": TOKENS.blue };

/** One blue "Label" text of the "/ London / Full time / 09:00 am - 05:00 pm /" line. */
function Label({ className, text }: { className: string; text: string }) {
  return (
    <div
      className={className}
      data-framer-name="Label"
      data-framer-component-type="RichTextContainer"
      style={{ transform: "none" }}
    >
      <p
        className="framer-text framer-styles-preset-1u0xujd"
        data-styles-preset="QZ8HlqCwU"
        dir="auto"
        style={LABEL_TEXT_STYLE}
      >
        {text}
      </p>
    </div>
  );
}

/**
 * "Apply now" button: Framer's outline button component (`framer-f1FWS framer-13ee4dt`) in the
 * yellow theme used only here (yellow background, white border, dark text turning white on
 * hover, dark arrow).
 */
function ApplyButton({ href, label, phone }: { href: string; label: string; phone: boolean }) {
  return (
    <Link
      className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-highlight="true"
      data-reset="button"
      href={href}
      tabIndex={0}
      style={{
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
        className="framer-1yej3r1"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-tCAxAvg0r-QlNMqDH3I)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-tCAxAvg0r-QlNMqDH3I": TOKENS.dark,
          "--variable-reference-ytYBNYwN5-QlNMqDH3I": TOKENS.white,
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
          {label}
        </p>
      </div>
      <div
        data-framer-name="Icon"
        className="framer-vCDm1 framer-1k0yxb8"
        style={{ "--1afajen": TOKENS.dark }}
      ></div>
    </Link>
  );
}

export interface JobBannerProps {
  job: Job;
  /** Target of the "Apply now" button. */
  applyHref?: string;
  applyLabel?: string;
}

/**
 * Career detail banner: "/ location / employment type / hours /" label line, job title (h1),
 * excerpt and the "Apply now" button (Default variant on desktop/tablet, Phone variant on
 * phone). Framer "Career Details Banner Section" (section.framer-4fjuvj, e.g. hash be692ff793).
 */
export function JobBanner({
  job,
  applyHref = "/contact-us",
  applyLabel = "Apply now",
}: JobBannerProps) {
  return (
    <section className="framer-4fjuvj" data-framer-name="Career Details Banner Section">
      <div className="framer-kedu78" data-framer-name="Base Container">
        <div
          className="framer-15g6x3m"
          data-framer-name="Career Details Block"
          style={REVEAL_STYLE}
        >
          <div className="framer-10rrzmq" data-framer-name="Text Content Wrapper">
            <div className="framer-1csae3f" data-framer-name="Text Container">
              <Label className="framer-1bffw7e" text="/" />
              <Label className="framer-oek1gd" text={job.location} />
              <Label className="framer-f1d4qb" text="/" />
              <Label className="framer-o7w1mh" text={job.employmentType} />
              <Label className="framer-uzxid2" text="/" />
              <Label className="framer-17ol5dl" text={job.hours} />
              <Label className="framer-13x3c9m" text="/" />
            </div>
            <div className="framer-3lofuv" data-framer-name="Text Content">
              <div
                className="framer-1cypel3"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h1
                  className="framer-text framer-styles-preset-1iwg8n2"
                  data-styles-preset="fFbEgCrjK"
                  dir="auto"
                  style={{ "--framer-text-alignment": "center" }}
                >
                  {job.title}
                </h1>
              </div>
              <div
                className="framer-mu197o"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-184kbjj"
                  data-styles-preset="jo34BIwbe"
                  dir="auto"
                  style={{
                    "--framer-text-alignment": "center",
                    "--framer-text-color": TOKENS.grey,
                  }}
                >
                  {job.excerpt}
                </p>
              </div>
            </div>
          </div>
          <div className={`ssr-variant ${BP.phone}`}>
            <div className="framer-1oxz96v-container">
              <ApplyButton href={applyHref} label={applyLabel} phone={false} />
            </div>
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
            <div className="framer-1oxz96v-container">
              <ApplyButton href={applyHref} label={applyLabel} phone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
