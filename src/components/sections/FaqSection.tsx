"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { FaqItem } from "@/lib/types";
import {
  TOKENS,
  REVEAL_STYLE,
  SlashLabel,
  SectionHeading,
  type BreakpointClasses,
} from "./framer-shared";

/**
 * Framer's FAQ accordion section, converted from the "FAQ Section" of:
 * - the cause detail template (hash 84eb90f334, section.framer-rzdwas) – /causes/[slug]
 * - the event detail template (hash c94a31edfe, section.framer-1buqy30) – /events/[slug]
 * - the home page (hash d06f79029e, section.framer-s4ksjy) – /
 *
 * The three exports share the accordion component (`framer-AQzEV`) and item component
 * (`framer-RAAsg`) verbatim; they differ in the instance classes of the base container,
 * text container, label, heading and accordion wrapper, and in the breakpoint split: the
 * cause template renders a single accordion in a bare `ssr-variant`, while the event and
 * home templates render it twice (desktop/tablet block with `max-width:100%;width:100%`,
 * phone block with `width:100%`). `variant` selects those.
 *
 * Open state (from the captured snapshots): one item open at a time, clicking the open
 * item closes it. The opened item switches to the "Opened" variant (`framer-v-yj0fc2`),
 * its heading and icon take the blue token, the icon rotates -45deg and the "Body" block
 * with the answer is appended; the accordion wrapper itself switches to the
 * "1st Item" … "6th Item" variant classes. Items are keyboard operable (Enter / Space) and
 * expose `aria-expanded`.
 */
export type FaqVariant = "cause" | "event" | "home";

export interface FaqSectionProps {
  /** Framer's section class, e.g. "framer-rzdwas". */
  className: string;
  items: FaqItem[];
  variant: FaqVariant;
  /** Text of the "/ … /" label. */
  label?: string;
  heading?: string;
}

interface FaqLayout {
  base: string;
  text: string;
  label: string;
  heading: string;
  list: string;
  /** Breakpoint classes of the template, or null when the accordion is not split. */
  bp: BreakpointClasses | null;
}

const VARIANTS: Record<FaqVariant, FaqLayout> = {
  cause: {
    base: "framer-16v18zh",
    text: "framer-4xvual",
    label: "framer-nw1m3a-container",
    heading: "framer-12h3qfe",
    list: "framer-azin0u-container",
    bp: null,
  },
  event: {
    base: "framer-z6erh7",
    text: "framer-1c9zcg1",
    label: "framer-nbzbw3-container",
    heading: "framer-7czqp5",
    list: "framer-u0i1tj-container",
    bp: { desktop: "hidden-1dxg8n1", tablet: "hidden-18x9pee", phone: "hidden-9tyw03" },
  },
  home: {
    base: "framer-n5khg3",
    text: "framer-1xalep9",
    label: "framer-nvdt75-container",
    heading: "framer-1qv9opa",
    list: "framer-vauupw-container",
    bp: { desktop: "hidden-72rtr7", tablet: "hidden-12w2mq9", phone: "hidden-1au1vxw" },
  },
};

/** Instance classes of the six accordion items in the export (reused for longer lists). */
const ITEM_CONTAINERS = [
  "framer-1sujp7z-container",
  "framer-1gfw4vj-container",
  "framer-14wbfcx-container",
  "framer-1xfkirn-container",
  "framer-1gppxiw-container",
  "framer-88kxj7-container",
];

/** Accordion wrapper variant per opened item (snapshots 4-0 … 9-0 of the home page). */
const OPEN_VARIANTS: ReadonlyArray<readonly [string, string]> = [
  ["framer-v-x7kl0y", "1st Item"],
  ["framer-v-yhkd6p", "2nd Item"],
  ["framer-v-abows2", "3rd Item"],
  ["framer-v-g3yw9s", "4th Item"],
  ["framer-v-qefav4", "5th Item"],
  ["framer-v-10i3cbs", "6th Item"],
];

const DESKTOP_LIST_STYLE: CSSProperties = { maxWidth: "100%", width: "100%" };
const PHONE_LIST_STYLE: CSSProperties = { width: "100%" };

interface FaqItemViewProps {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}

/** One accordion item (`framer-RAAsg framer-14u1o6f`), default or "Opened" variant. */
function FaqItemView({ item, open, onToggle }: FaqItemViewProps) {
  const color = open ? TOKENS.blue : TOKENS.dark;
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };
  return (
    <div
      className={`framer-RAAsg framer-Ce2Wk framer-cYxwf framer-14u1o6f ${open ? "framer-v-yj0fc2" : "framer-v-14u1o6f"}`}
      data-framer-name={open ? "Opened" : "Default"}
      data-highlight="true"
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      style={{
        backgroundColor: TOKENS.surface,
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div className="framer-88nxbd" data-framer-name="Heading Wrapper">
        <div
          className="framer-1a9zrru"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={{
            "--extracted-1w1cjl5": color,
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
          }}
        >
          <h6
            className="framer-text framer-styles-preset-gxiq03"
            data-styles-preset="dxFp5uY4y"
            dir="auto"
            style={{ "--framer-text-color": `var(--extracted-1w1cjl5, ${color})` }}
          >
            {item.question}
          </h6>
        </div>
        <div className="framer-1tsovnt" data-framer-name="Icon Wrapper">
          <div
            data-framer-name="Icon"
            className="framer-CVQoz framer-1a5qrp3"
            style={{ "--1afajen": color, transform: open ? "rotate(-45deg)" : "none" }}
          ></div>
        </div>
      </div>
      {open ? (
        <div
          className="framer-1hxta21"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
          }}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            {item.answer}
          </p>
        </div>
      ) : null}
    </div>
  );
}

interface FaqListProps {
  items: FaqItem[];
  open: number | null;
  onToggle: (index: number) => void;
  style: CSSProperties;
}

/** The accordion component (`framer-AQzEV framer-jjk0k4`) with its items. */
function FaqList({ items, open, onToggle, style }: FaqListProps) {
  const openVariant = open !== null ? OPEN_VARIANTS[open] : undefined;
  return (
    <div
      className={`framer-AQzEV framer-jjk0k4 ${openVariant ? openVariant[0] : "framer-v-jjk0k4"}`}
      data-framer-name={openVariant ? openVariant[1] : "Default"}
      style={style}
    >
      {items.map((item, i) => (
        <div key={i} className={ITEM_CONTAINERS[i % ITEM_CONTAINERS.length]} style={REVEAL_STYLE}>
          <FaqItemView item={item} open={open === i} onToggle={() => onToggle(i)} />
        </div>
      ))}
      <div className="framer-gm6p6g-container" style={{ transform: "translate(-50%, -50%)" }}>
        <div></div>
      </div>
    </div>
  );
}

export function FaqSection({
  className,
  items,
  variant,
  label = "FAQ",
  heading = "Frequently asked questions",
}: FaqSectionProps) {
  const v = VARIANTS[variant];
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number) => setOpen((current) => (current === index ? null : index));

  return (
    <section className={className} data-framer-name="FAQ Section">
      <div className={v.base} data-framer-name="Base Container">
        <div className={v.text} data-framer-name="Text Container">
          <div className="ssr-variant">
            <div className={v.label} style={REVEAL_STYLE}>
              <SlashLabel text={label} />
            </div>
          </div>
          <SectionHeading className={v.heading} text={heading} centered />
        </div>
        {v.bp ? (
          <>
            <div className={`ssr-variant ${v.bp.phone}`}>
              <div className={v.list}>
                <FaqList items={items} open={open} onToggle={toggle} style={DESKTOP_LIST_STYLE} />
              </div>
            </div>
            <div className={`ssr-variant ${v.bp.desktop} ${v.bp.tablet}`}>
              <div className={v.list}>
                <FaqList items={items} open={open} onToggle={toggle} style={PHONE_LIST_STYLE} />
              </div>
            </div>
          </>
        ) : (
          <div className="ssr-variant">
            <div className={v.list}>
              <FaqList items={items} open={open} onToggle={toggle} style={DESKTOP_LIST_STYLE} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
