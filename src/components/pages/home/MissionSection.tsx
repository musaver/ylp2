"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { FramerImage, MissionPoint } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SectionHeading,
  SlashLabel,
  TOKENS,
  revealStyle,
} from "@/components/sections/framer-shared";

/** Breakpoint classes of the home template. */
const HIDE_DESKTOP = "hidden-72rtr7";
const HIDE_TABLET = "hidden-12w2mq9";
const HIDE_PHONE = "hidden-1au1vxw";

/** Instance classes of the four accordion items in the export (reused for longer lists). */
const ITEM_CONTAINERS = [
  "framer-krzqlr-container",
  "framer-5h3dzs-container",
  "framer-qjwptw-container",
  "framer-lhmkkf-container",
];

/** Accordion wrapper variant per opened item (snapshots 0-0 … 3-0 of the home page). */
const OPEN_VARIANTS: ReadonlyArray<readonly [string, string]> = [
  ["framer-v-10oxv5j", "1st Item"],
  ["framer-v-154urgi", "2nd Item"],
  ["framer-v-my99zb", "3rd Item"],
  ["framer-v-owiw63", "4th Item"],
];

/**
 * Spacing variables of the two accordion instances: the desktop/phone instance uses 40px
 * everywhere, the tablet instance 35px for the list and its first item (40px for the rest).
 */
interface ListSpacing {
  list: string;
  firstItem: string;
  item: string;
}
const DESKTOP_PHONE_SPACING: ListSpacing = { list: "40px", firstItem: "40px", item: "40px" };
const TABLET_SPACING: ListSpacing = { list: "35px", firstItem: "35px", item: "40px" };

/*
 * Scroll-reveal choreography: label, then heading, then the numbered steps slide in from the
 * left one after another; the photo glides in from the right (rises on phone, below the list).
 */
const HEADING_DELAY_MS = 80;
const ITEM_DELAY_MS = 160;
const ITEM_STAGGER_MS = 110;
const ITEM_REVEAL_STYLE = revealStyle("translateX(-60px)");

const MISSION_IMAGE: FramerImage = {
  src: "/images/iFyDTJXYFRHxHu5NHysACVcVVHY.jpg",
  srcSet:
    "/images/iFyDTJXYFRHxHu5NHysACVcVVHY-1.jpg 682w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY-2.jpg 1365w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY-3.jpg 2730w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY.jpg 2957w",
  alt: "Our Mission Image",
  width: 2957,
  height: 4435,
};
const MISSION_IMAGE_SIZES =
  "(min-width: 1280px) min(max((min(max(100vw, 1px), 1340px) - 160px) / 2, 1px), (min(max(100vw, 1px), 1340px) - 40px) * 0.35), (min-width: 992px) and (max-width: 1279.98px) min(max((min(max(100vw, 1px), 1340px) - 90px) / 2, 1px), 440px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

interface MissionItemProps {
  item: MissionPoint;
  open: boolean;
  padding: string;
  onToggle: () => void;
}

/**
 * One accordion item (`framer-2Z8pq framer-h5bokj`), "Default" or "Active" variant. The
 * active item turns its number and divider blue, its title dark, and appends the "Body"
 * paragraph inside the text container.
 */
function MissionItem({ item, open, padding, onToggle }: MissionItemProps) {
  const numberColor = open ? TOKENS.blue : TOKENS.grey;
  const titleColor = open ? TOKENS.dark : TOKENS.grey;
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };
  return (
    <div
      className={`framer-2Z8pq framer-pnT0E framer-xgEMN framer-cYxwf framer-h5bokj ${open ? "framer-v-sr8jen" : "framer-v-h5bokj"}`}
      data-framer-name={open ? "Active" : "Default"}
      data-highlight="true"
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      style={{ "--10eyvje": padding, width: "100%" }}
    >
      <div className="framer-1o7hde4" data-framer-name="Text Container Wrapper">
        <div className="framer-1c94q51" data-framer-name="Number Wrapper">
          <div
            className="framer-1fj84hf"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{
              "--extracted-r6o4lv": numberColor,
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              transform: "none",
            }}
          >
            <p
              className="framer-text framer-styles-preset-1w4j6dx"
              data-styles-preset="UDxfPm72z"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${numberColor})` }}
            >
              {item.number}
            </p>
          </div>
        </div>
        <div className="framer-11fo3v4" data-framer-name="Text Container">
          <div
            className="framer-174y203"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{
              "--extracted-1eung3n": titleColor,
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              transform: "none",
            }}
          >
            <h4
              className="framer-text framer-styles-preset-1wzlm17"
              data-styles-preset="jdpfpmlt4"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-1eung3n, ${titleColor})` }}
            >
              {item.title}
            </h4>
          </div>
          {open ? (
            <div
              className="framer-13qp4ux"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                willChange: "transform",
                opacity: "1",
                transform: "none",
              }}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
              >
                {item.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div
        className="framer-1g0l80d"
        data-framer-name="Divider"
        style={{ backgroundColor: open ? TOKENS.blue : TOKENS.borderLight }}
      ></div>
    </div>
  );
}

interface MissionListProps {
  items: MissionPoint[];
  open: number | null;
  onToggle: (index: number) => void;
  spacing: ListSpacing;
}

/** The accordion component (`framer-HlAB7 framer-1qzh2ko`) with its items. */
function MissionList({ items, open, onToggle, spacing }: MissionListProps) {
  const openVariant = open !== null ? OPEN_VARIANTS[open] : undefined;
  const style: CSSProperties = { "--6h6ln2": spacing.list, width: "100%" };
  return (
    <div
      className={`framer-HlAB7 framer-1qzh2ko ${openVariant ? openVariant[0] : "framer-v-1qzh2ko"}`}
      data-framer-name={openVariant ? openVariant[1] : "Default"}
      style={style}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={ITEM_CONTAINERS[i % ITEM_CONTAINERS.length]}
          data-reveal-delay={ITEM_DELAY_MS + i * ITEM_STAGGER_MS}
          style={ITEM_REVEAL_STYLE}
        >
          <MissionItem
            item={item}
            open={open === i}
            padding={i === 0 ? spacing.firstItem : spacing.item}
            onToggle={() => onToggle(i)}
          />
        </div>
      ))}
      <div className="framer-x0ueh4-container" style={{ transform: "translate(-50%, -50%)" }}>
        <div></div>
      </div>
    </div>
  );
}

export interface MissionSectionProps {
  items: MissionPoint[];
  /** Text of the "/ … /" label. */
  label?: string;
  heading?: string;
  image?: FramerImage;
}

/**
 * Home "Our Mission Section" (hash 18a6d574b9, section.framer-jpdgiv): label, heading, the
 * numbered mission accordion and the side photo.
 *
 * Open state (from the captured snapshots jsx-states/index/{desktop,tablet,phone}/0-0 … 3-0):
 * the first item starts open; one item open at a time and clicking the open item closes it. The
 * opened item switches to the "Active" variant (`framer-v-sr8jen`) and the accordion wrapper
 * to the "1st Item" … "4th Item" variant. Framer renders the accordion twice (desktop/phone
 * block, tablet block); both share the same state. Items are keyboard operable (Enter /
 * Space) and expose `aria-expanded`.
 */
export function MissionSection({
  items,
  label = "Our mission",
  heading = "To foster a culture of care, support, and service that uplifts every person",
  image = MISSION_IMAGE,
}: MissionSectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (index: number) => setOpen((current) => (current === index ? null : index));

  return (
    <section id="member-journey" className="framer-jpdgiv" data-framer-name="Our Mission Section">
      <div className="framer-1q9tstb" data-framer-name="Base Container">
        <div className="framer-12sao83" data-framer-name="Content Wrapper">
          <div className="framer-oyrw04" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-z2ev0z-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <SectionHeading className="framer-ikw16w" text={heading} delay={HEADING_DELAY_MS} />
          </div>
          <div className={`ssr-variant ${HIDE_TABLET}`}>
            <div className="framer-1imk3ad-container">
              <MissionList
                items={items}
                open={open}
                onToggle={toggle}
                spacing={DESKTOP_PHONE_SPACING}
              />
            </div>
          </div>
          <div className={`ssr-variant ${HIDE_DESKTOP} ${HIDE_PHONE}`}>
            <div className="framer-1imk3ad-container">
              <MissionList items={items} open={open} onToggle={toggle} spacing={TABLET_SPACING} />
            </div>
          </div>
        </div>
        <div className={`ssr-variant ${HIDE_PHONE}`}>
          <div
            className="framer-17dri70"
            data-reveal-delay={200}
            style={revealStyle("translateX(80px) scale(0.96)")}
          >
            <FramerBackgroundImage
              image={{ ...image, objectPosition: "50% 30%" }}
              sizes={MISSION_IMAGE_SIZES}
            />
          </div>
        </div>
        <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
          <div className="framer-17dri70" style={REVEAL_STYLE}>
            <FramerBackgroundImage
              image={{ ...image, objectPosition: "50% 15%" }}
              sizes={MISSION_IMAGE_SIZES}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
