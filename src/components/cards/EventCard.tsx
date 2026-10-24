import Link from "next/link";
import type { EventItem } from "@/lib/types";
import { formatDayMonth } from "@/lib/format";
import {
  TOKENS,
  FramerBackgroundImage,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's event card (`framer-s5OSr framer-1sm9vg0`), converted from the "Events Section"
 * ("Latest happenings") of the event detail template (hash 73f8e7a367), used on
 * /events/[slug]. Renders the component root (`<a>`) only; `EventsSection` places the
 * instance wrapper and the `ssr-variant` breakpoint wrappers.
 *
 * The exported markup reads "Locarion:" (a typo in the template); it is rendered as
 * "Location:" here, see `LOCATION_LABEL`.
 */
export interface EventCardProps {
  event: EventItem;
  variant: CardVariant;
  /** Literal `sizes` attribute of the thumbnail for this placement. */
  sizes: string;
  /** Framer lazy-loads the third card's thumbnail on desktop/tablet. */
  loading?: "lazy";
}

const LOCATION_LABEL = "Location:";

const VARIANT_CLASS: Record<CardVariant, string> = {
  desktop: "framer-v-1sm9vg0",
  tablet: "framer-v-8aeufs",
  phone: "framer-v-ww0kup",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

const BODY_TEXT_STYLE = { "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.lightGrey})` };

export function EventCard({ event, variant, sizes, loading }: EventCardProps) {
  return (
    <Link
      className={`framer-s5OSr framer-dVXc9 framer-CEbeQ framer-cYxwf framer-1sm9vg0 ${VARIANT_CLASS[variant]} framer-141677r`}
      data-border="true"
      data-framer-name={VARIANT_NAME[variant]}
      href={`/events/${event.slug}`}
      style={{
        "--border-bottom-width": variant === "phone" ? "0px" : "1px",
        "--border-color": TOKENS.borderDark,
        "--border-left-width": "0px",
        "--border-right-width": "0px",
        "--border-style": "solid",
        "--border-top-width": "0px",
        width: "100%",
      }}
    >
      <div
        className="framer-bk09vq"
        data-framer-name="Image Wrapper"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div
          className="framer-15srhzg"
          data-framer-name="Date Block Wrapper"
          style={{
            backgroundColor: TOKENS.yellow,
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <div
            className="framer-1yhz70v"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{
              "--extracted-r6o4lv": TOKENS.dark,
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              transform: "none",
            }}
          >
            <p
              className="framer-text framer-styles-preset-1u0xujd"
              data-styles-preset="QZ8HlqCwU"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
            >
              <time dateTime={event.date}>{formatDayMonth(event.date)}</time>
            </p>
          </div>
        </div>
        <div
          className="framer-ap5vbx"
          data-framer-name="Overlay"
          style={{
            background:
              "linear-gradient(297deg, var(--token-962b08ec-1191-4463-bda2-ee2e93c272db, rgba(0, 0, 0, 0)) 33%, var(--token-f6ce2c03-f877-4ebf-b404-354ae1e46aaf, rgba(0, 0, 0, 0.6)) 115.00000000000001%)",
          }}
        ></div>
        <div className="framer-byqhbj" style={{ transform: "none" }}>
          <FramerBackgroundImage image={event.image} sizes={sizes} loading={loading} />
        </div>
      </div>
      <div className="framer-115d5xp" data-framer-name="Text Block Wrapper">
        <div className="framer-a83b8d" data-framer-name="Text Container Wrapper">
          <div className="framer-csfpod" data-framer-name="Text Container">
            <div
              className="framer-1970zel"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-a0htzi": TOKENS.white, transform: "none" }}
            >
              <h3
                className="framer-text framer-styles-preset-4q0qmc"
                data-styles-preset="NoGrMSthx"
                dir="auto"
                style={{ "--framer-text-color": `var(--extracted-a0htzi, ${TOKENS.white})` }}
              >
                {event.title}
              </h3>
            </div>
            <div
              className="framer-10iwzdl"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.lightGrey, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
                style={BODY_TEXT_STYLE}
              >
                {event.excerpt}
              </p>
            </div>
          </div>
          <div className="framer-1d6ucto" data-framer-name="Text Info Wrapper">
            <div
              className="framer-1qgf8en"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.lightGrey, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
                style={BODY_TEXT_STYLE}
              >
                {LOCATION_LABEL}
              </p>
            </div>
            <div
              className="framer-9b9p4t"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.lightGrey, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
                style={BODY_TEXT_STYLE}
              >
                {event.location}
              </p>
            </div>
          </div>
        </div>
        <div className="framer-19uu8nw-container">
          <button
            className="framer-fDqp7 framer-5BI2U framer-1ewyu2v framer-v-1ewyu2v"
            data-border="true"
            data-framer-name="Default"
            data-highlight="true"
            data-reset="button"
            tabIndex={0}
            style={{
              "--bcqgbe": "0px",
              "--border-bottom-width": "1px",
              "--border-color": TOKENS.borderWhite,
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: TOKENS.yellowTransparent,
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
                "--variable-reference-tCAxAvg0r-fSqWqWBvS": TOKENS.white,
                "--variable-reference-ytYBNYwN5-fSqWqWBvS": TOKENS.yellow,
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
                Learn more
              </p>
            </div>
            <div
              data-framer-name="Icon"
              className="framer-vCDm1 framer-1i9f037"
              style={{ "--1afajen": TOKENS.yellow }}
            ></div>
          </button>
        </div>
      </div>
    </Link>
  );
}
