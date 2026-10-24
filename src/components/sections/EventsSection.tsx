import { Fragment } from "react";
import type { EventItem } from "@/lib/types";
import { EventCard } from "@/components/cards/EventCard";
import {
  TOKENS,
  REVEAL_STYLE,
  SlashLabel,
  OutlineButtonLink,
  SectionHeading,
} from "./framer-shared";

/**
 * Framer's "Latest happenings" block on the dark event detail template ("Events Section",
 * hash 73f8e7a367, section.framer-u83prw), used on /events/[slug]: yellow "/ Upcoming
 * events /" label, white heading, "View all" outline button and event cards.
 *
 * Layout as exported: desktop and tablet render every event (each as Desktop + Tablet card
 * variant); the phone block renders only the first two. The third card's thumbnail is
 * lazy-loaded and its `sizes` has no phone media query, as in the export.
 */
export interface EventsSectionProps {
  /** Framer's section class ("framer-u83prw"). */
  className: string;
  events: EventItem[];
  heading?: string;
  /** Text of the "/ … /" label. */
  label?: string;
  buttonLabel?: string;
}

const BP = { desktop: "hidden-1dxg8n1", tablet: "hidden-18x9pee", phone: "hidden-9tyw03" } as const;

const SIZES_NO_PHONE =
  "(min-width: 1280px) max(min(max((calc(min(max(100vw - 40px, 1px), 1340px) - 40px) - 30px) / 2, 1px), 300px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((calc(min(max(100vw - 40px, 1px), 1340px) - 40px) - 24px) / 2, 1px), 300px), 1px)";
const SIZES = `${SIZES_NO_PHONE}, (max-width: 991.98px) max(max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 280px), 280px), 1px)`;

/** Framer renders only the first two cards in the phone block. */
const PHONE_CARD_COUNT = 2;

export function EventsSection({
  className,
  events,
  heading = "Latest happenings",
  label = "Upcoming events",
  buttonLabel = "View all",
}: EventsSectionProps) {
  return (
    <section className={className} data-framer-name="Events Section">
      <div className="framer-3kuxb1" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div
            className={`framer-rmwzh0-container ${BP.desktop} ${BP.tablet}`}
            style={REVEAL_STYLE}
          >
            <OutlineButtonLink href="/events" label={buttonLabel} variant="phone" theme="dark" />
          </div>
        </div>
        <div className="framer-oap376" data-framer-name="Text Content Wrapper">
          <div className="framer-1q0x9ab" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-kqccaa-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} color={TOKENS.yellow} />
              </div>
            </div>
            <div className={`ssr-variant ${BP.phone}`}>
              <SectionHeading className="framer-1aqra68" text={heading} color={TOKENS.white} />
            </div>
            <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
              <SectionHeading
                className="framer-1aqra68"
                text={heading}
                centered
                color={TOKENS.white}
              />
            </div>
          </div>
          <div className="ssr-variant">
            <div className={`framer-gbv1mc-container ${BP.phone}`} style={REVEAL_STYLE}>
              <OutlineButtonLink
                href="/events"
                label={buttonLabel}
                variant="desktop"
                theme="dark"
              />
            </div>
          </div>
        </div>
        <div className="framer-290yt7">
          <div className={`ssr-variant ${BP.phone}`}>
            {events.map((event, i) => {
              const belowPhone = i >= PHONE_CARD_COUNT;
              const sizes = belowPhone ? SIZES_NO_PHONE : SIZES;
              const loading = belowPhone ? "lazy" : undefined;
              return (
                <Fragment key={event.slug}>
                  <div className={`ssr-variant ${BP.tablet}`}>
                    <div className="framer-r1amfs-container" style={REVEAL_STYLE}>
                      <EventCard event={event} variant="desktop" sizes={sizes} loading={loading} />
                    </div>
                  </div>
                  <div className={`ssr-variant ${BP.desktop}`}>
                    <div className="framer-r1amfs-container" style={REVEAL_STYLE}>
                      <EventCard event={event} variant="tablet" sizes={sizes} loading={loading} />
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
            {events.slice(0, PHONE_CARD_COUNT).map((event) => (
              <div key={event.slug} className="framer-r1amfs-container" style={REVEAL_STYLE}>
                <EventCard event={event} variant="phone" sizes={SIZES} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
