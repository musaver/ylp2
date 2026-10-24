import Link from "next/link";
import { RichText } from "@/components/sections/RichText";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SlashLabel,
  TOKENS,
} from "@/components/sections/framer-shared";
import { formatShortDate } from "@/lib/format";
import type { EventItem } from "@/lib/types";

/** `hidden-*` classes of the event detail template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-1dxg8n1", tablet: "hidden-18x9pee", phone: "hidden-9tyw03" } as const;

const IMAGE_SIZES =
  "(min-width: 1280px) max((min(max(100vw - 40px, 1px), 1340px) - 100px) / 2, 1px), (max-width: 991.98px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 2, 1px)";

/**
 * Google Maps links of the "Location" block as exported. `EventItem` has no map field yet, so
 * they are kept here by slug; other events fall back to a Maps search for `event.location`.
 */
const MAP_URLS: Record<string, string> = {
  "charity-auction-and-raffle-gala": "https://maps.app.goo.gl/cPNY67nB7af4QtfG7",
  "holiday-kindness-and-giving-drive": "https://maps.app.goo.gl/8DRyMy1Bo5Pi9awB6",
  "back-to-school-supply-drive": "https://maps.app.goo.gl/baENNfHhXK28EAEU8",
  "fun-run-for-a-greater-cause": "https://maps.app.goo.gl/zvht27aYzotWLMUx7",
  "hearts-in-action-volunteer-day": "https://maps.app.goo.gl/rFyJCYhhBzmR1cpv9",
  "annual-charity-fundraising-gala": "https://maps.app.goo.gl/tiTmekyjnSxCt7v57",
};

function mapUrl(event: EventItem): string {
  return (
    MAP_URLS[event.slug] ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
  );
}

/**
 * The `datetime` Framer writes on both `<time>` elements: the event date and time as a UTC
 * ISO string, e.g. "2026-03-28" + "12:00 PM" -> "2026-03-28T12:00:00.000Z".
 */
function eventDateTime(date: string, time: string): string {
  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(time.trim());
  if (!match) return `${date}T00:00:00.000Z`;
  const [, h = "0", m = "00", meridiem = "AM"] = match;
  const hours = (Number(h) % 12) + (meridiem.toUpperCase() === "PM" ? 12 : 0);
  return `${date}T${String(hours).padStart(2, "0")}:${m}:00.000Z`;
}

const DETAIL_TEXT_STYLE = { "--framer-text-color": TOKENS.lightGrey };
const LOCATION_TEXT_STYLE = { "--framer-text-color": TOKENS.dark };

/** Framer's "Register now" button (`framer-lrAUU framer-1dpiu4j`), Default or Phone variant. */
function RegisterButton({ phone }: { phone: boolean }) {
  return (
    <div className="framer-1lnvqpr-container" style={REVEAL_STYLE}>
      <Link
        className={`framer-lrAUU framer-5BI2U framer-1dpiu4j ${phone ? "framer-v-dfphy4" : "framer-v-1dpiu4j"} framer-1b6bx9t`}
        data-framer-name={phone ? "Phone" : "Default"}
        data-highlight="true"
        data-reset="button"
        href="/contact-us"
        tabIndex={0}
        style={{
          backgroundColor: TOKENS.dark,
          width: "100%",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div
          className="framer-w8klcw"
          data-framer-name="CTA Text"
          data-framer-component-type="RichTextContainer"
          style={{
            "--extracted-r6o4lv": TOKENS.white,
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
          }}
        >
          <p
            className="framer-text framer-styles-preset-o266m6"
            data-styles-preset="XE418oX5i"
            dir="auto"
            style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.white})` }}
          >
            Register now
          </p>
        </div>
        <div
          data-framer-name="Icon"
          className="framer-vCDm1 framer-vgo4j"
          style={{ "--1afajen": TOKENS.yellow }}
        ></div>
      </Link>
    </div>
  );
}

/** "Location" body with the map link; the link preset differs between desktop/tablet and phone. */
function LocationBody({ event, phone }: { event: EventItem; phone: boolean }) {
  return (
    <div
      className="framer-1qggzzr"
      data-framer-name="Body"
      data-framer-component-type="RichTextContainer"
      style={{ transform: "none" }}
    >
      <p
        className="framer-text framer-styles-preset-1nro5il"
        data-styles-preset="yf38XfmD_"
        dir="auto"
        style={LOCATION_TEXT_STYLE}
      >
        <a
          className={`framer-text ${phone ? "framer-styles-preset-18lfnip" : "framer-styles-preset-vh6pp3"}`}
          data-styles-preset={phone ? "RaLa5DA2o" : "loEjvCaJb"}
          href={mapUrl(event)}
          target="_blank"
          rel="noopener"
        >
          {event.location}
        </a>
      </p>
    </div>
  );
}

export interface EventBannerProps {
  event: EventItem;
  /** Text of the "/ … /" label. */
  label?: string;
}

/**
 * Framer's "Event Banner Section" of the event detail template (section.framer-uojft2, e.g.
 * hash f20ba45e60 / a3612f6d2f): label, title, excerpt, image, rich-text "Content" (desktop/tablet
 * and phone blocks) and the "Sticky Block" with date & time, location and "Register now".
 *
 * The rich text uses the shared `RichText` with the `cause` variant: its text presets
 * (h2 `dghseo`, h5 `90lki2`, p `1yjqzcs`) and list gap (15px) are identical to the event
 * template. Its `hidden-*` classes are only used for image blocks, which no event body has.
 */
export function EventBanner({ event, label = "About this event" }: EventBannerProps) {
  const dateTime = eventDateTime(event.date, event.time);
  return (
    <section className="framer-uojft2" data-framer-name="Event Banner Section">
      <div className="framer-szoiu3" data-framer-name="Base Container">
        <div className="framer-15f79ub" data-framer-name="Content Block Wrapper">
          <div className="framer-1q7jwm7" data-framer-name="Text Container Wrapper">
            <div className="ssr-variant">
              <div className="framer-1jl5xsr-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <div className="framer-14u3yoi" data-framer-name="Text Container">
              <div
                className="framer-1nizn1d"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={REVEAL_STYLE}
              >
                <h1
                  className="framer-text framer-styles-preset-lo4ujp"
                  data-styles-preset="aeh2bjTr3"
                  dir="auto"
                >
                  {event.title}
                </h1>
              </div>
              <div
                className="framer-1iuq7m3"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={REVEAL_STYLE}
              >
                <p
                  className="framer-text framer-styles-preset-184kbjj"
                  data-styles-preset="jo34BIwbe"
                  dir="auto"
                  style={{ "--framer-text-color": TOKENS.grey }}
                >
                  {event.excerpt}
                </p>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-rgd84f" style={REVEAL_STYLE}>
                <FramerBackgroundImage image={event.image} sizes={IMAGE_SIZES} />
              </div>
            </div>
          </div>
          <div className={`ssr-variant ${BP.phone}`}>
            <div
              className="framer-12upk3z"
              data-framer-name="Content"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <RichText blocks={event.body} variant="cause" breakpoint="desktop" />
            </div>
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
            <div
              className="framer-12upk3z"
              data-framer-name="Content"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <RichText blocks={event.body} variant="cause" breakpoint="phone" />
            </div>
          </div>
        </div>
        <div className="framer-sjddem" data-framer-name="Sticky Block">
          <div className="framer-1fwtrr" data-framer-name="Event Date Details" style={REVEAL_STYLE}>
            <div
              className="framer-u29szt"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h5
                className="framer-text framer-styles-preset-5o228f"
                data-styles-preset="Vm6br8Jm2"
                dir="auto"
                style={{ "--framer-text-alignment": "left", "--framer-text-color": TOKENS.white }}
              >
                Date & Time
              </h5>
            </div>
            <div className="framer-e1wjcc" data-framer-name="Divider"></div>
            <div className="framer-9ub4hv" data-framer-name="Text Container">
              <div
                className="framer-e25ux7"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-1nro5il"
                  data-styles-preset="yf38XfmD_"
                  dir="auto"
                  style={DETAIL_TEXT_STYLE}
                >
                  <time dateTime={dateTime}>{formatShortDate(event.date)}</time>
                </p>
              </div>
              <div
                className="framer-199okkf"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-1nro5il"
                  data-styles-preset="yf38XfmD_"
                  dir="auto"
                  style={DETAIL_TEXT_STYLE}
                >
                  <time dateTime={dateTime}>{event.time}</time>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-z9nxsj" data-framer-name="Event Date Details" style={REVEAL_STYLE}>
            <div
              className="framer-orj4m9"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <h5
                className="framer-text framer-styles-preset-5o228f"
                data-styles-preset="Vm6br8Jm2"
                dir="auto"
                style={{ "--framer-text-alignment": "left", "--framer-text-color": TOKENS.dark }}
              >
                Location
              </h5>
            </div>
            <div className="framer-1dw2tbs" data-framer-name="Divider"></div>
            <div className={`ssr-variant ${BP.phone}`}>
              <LocationBody event={event} phone={false} />
            </div>
            <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
              <LocationBody event={event} phone />
            </div>
          </div>
          <div className={`ssr-variant ${BP.phone}`}>
            <RegisterButton phone={false} />
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
            <RegisterButton phone />
          </div>
        </div>
      </div>
    </section>
  );
}
