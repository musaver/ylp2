import { EventCard } from "@/components/cards/EventCard";
import { FramerBackgroundImage, REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { EventItem, FramerImage } from "@/lib/types";

/** `hidden-*` classes of the events template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-mnx0x7", tablet: "hidden-1ijr1ci", phone: "hidden-14562o0" } as const;

const BG_DECORATION: FramerImage = {
  src: "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg",
  alt: "BG Decoration",
  width: 1096,
  height: 705,
  srcSet:
    "/images/BQ2qqQrvDfkmLJlJwoB4sV1R0-1.svg 512w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0-2.svg 1024w, /images/BQ2qqQrvDfkmLJlJwoB4sV1R0.svg 1096w",
};

const BG_SIZES =
  "(min-width: 1280px) 1096px, (min-width: 992px) and (max-width: 1279.98px) 992px, (max-width: 991.98px) calc(100vw - 40px)";

const BG_ASPECT_RATIO = "1.5546099290780142";

/** Literal `sizes` of the card thumbnails on /events (identical for every card and variant). */
const CARD_SIZES =
  "(min-width: 1280px) max(min(max((calc(min(100vw - 40px, 1340px) - 40px) - 30px) / 2, 1px), 300px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((calc(min(100vw - 40px, 1340px) - 40px) - 24px) / 2, 1px), 300px), 1px), (max-width: 991.98px) max(max(max(min(100vw - 40px, 1340px) - 40px, 280px), 280px), 1px)";

/** Card breakpoint variants in export order, with the classes that hide the other two. */
const CARD_VARIANTS = [
  { variant: "desktop", hidden: `${BP.tablet} ${BP.phone}` },
  { variant: "tablet", hidden: `${BP.phone} ${BP.desktop}` },
  { variant: "phone", hidden: `${BP.tablet} ${BP.desktop}` },
] as const;

export interface EventsGridProps {
  events: EventItem[];
}

/**
 * Framer's "Events Section" of /events (hash 479592711a, section.framer-c8m0qh): background
 * decoration and every event as a card (Desktop, Tablet and Phone variant per event, each in
 * its own `ssr-variant` wrapper), followed by Framer's empty "Button Wrapper".
 */
export function EventsGrid({ events }: EventsGridProps) {
  return (
    <section className="framer-c8m0qh" data-framer-name="Events Section">
      <div className="framer-sruvx7" data-framer-name="BG Wrapper">
        <div className={`ssr-variant ${BP.tablet} ${BP.phone}`}>
          <div className="framer-1w60vpw" style={{ width: "auto", aspectRatio: BG_ASPECT_RATIO }}>
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
          <div className="framer-1w60vpw">
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
        <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
          <div
            className="framer-1w60vpw"
            style={{ height: "auto", aspectRatio: BG_ASPECT_RATIO, transform: "translateY(-50%)" }}
          >
            <FramerBackgroundImage image={BG_DECORATION} sizes={BG_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-e8f0hj" data-framer-name="Base Container">
        <div className="framer-7yhwn6">
          {events.flatMap((event) =>
            CARD_VARIANTS.map(({ variant, hidden }) => (
              <div key={`${event.slug}-${variant}`} className={`ssr-variant ${hidden}`}>
                <div className="framer-1jap2u-container" style={REVEAL_STYLE}>
                  <EventCard event={event} variant={variant} sizes={CARD_SIZES} />
                </div>
              </div>
            )),
          )}
          <div className="framer-1lnts66" data-framer-name="Button Wrapper">
            <div className="ssr-variant">
              <div className="framer-1cm2skn-container" style={REVEAL_STYLE}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
