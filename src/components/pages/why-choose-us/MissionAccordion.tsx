"use client";

import { useState, type KeyboardEvent } from "react";
import type { MissionPoint } from "@/lib/types";
import { REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/**
 * The mission accordion (`framer-HlAB7 framer-1qzh2ko`) of the /why-choose-us "Our Mission
 * Section" (hash 5e7a45b374), rendered twice as exported: once for desktop + phone
 * (`hidden-1ksiir2`, 40px gaps) and once for tablet (`hidden-7xpbrn hidden-e3ad3z`, 35px gap
 * and 35px on its first item only — kept as exported).
 *
 * Open state (snapshots jsx-states/why-choose-us/*\/0-0 … 3-0): one item open at a time,
 * clicking the open item closes it again. The accordion switches to the "1st Item" … "4th
 * Item" variant, the opened item (`framer-2Z8pq`) to "Active" (`framer-v-sr8jen`): blue
 * number and divider, dark heading, and the description ("Body") appended under the heading.
 * Both instances share the state. Items are keyboard operable (Enter / Space).
 */

/** Instance classes of the four items in the export (reused for longer lists). */
const ITEM_CONTAINERS = [
  "framer-krzqlr-container",
  "framer-5h3dzs-container",
  "framer-qjwptw-container",
  "framer-lhmkkf-container",
];

/** Accordion variant per opened item. */
const OPEN_VARIANTS: ReadonlyArray<readonly [string, string]> = [
  ["framer-v-10oxv5j", "1st Item"],
  ["framer-v-154urgi", "2nd Item"],
  ["framer-v-my99zb", "3rd Item"],
  ["framer-v-owiw63", "4th Item"],
];

interface AccordionInstance {
  wrapper: string;
  /** `--6h6ln2` of the accordion and `--10eyvje` of its first item. */
  gap: string;
}

const INSTANCES: readonly AccordionInstance[] = [
  { wrapper: "ssr-variant hidden-1ksiir2", gap: "40px" },
  { wrapper: "ssr-variant hidden-7xpbrn hidden-e3ad3z", gap: "35px" },
];

const ITEM_GAP = "40px";

interface MissionItemProps {
  point: MissionPoint;
  open: boolean;
  gap: string;
  onToggle: () => void;
}

/** One accordion item (`framer-2Z8pq framer-h5bokj`), "Default" or "Active" variant. */
function MissionItem({ point, open, gap, onToggle }: MissionItemProps) {
  const numberColor = open ? TOKENS.blue : TOKENS.grey;
  const headingColor = open ? TOKENS.dark : TOKENS.grey;
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
      style={{ "--10eyvje": gap, width: "100%" }}
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
              {point.number}
            </p>
          </div>
        </div>
        <div className="framer-11fo3v4" data-framer-name="Text Container">
          <div
            className="framer-174y203"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{
              "--extracted-1eung3n": headingColor,
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              transform: "none",
            }}
          >
            <h4
              className="framer-text framer-styles-preset-1wzlm17"
              data-styles-preset="jdpfpmlt4"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-1eung3n, ${headingColor})` }}
            >
              {point.title}
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
                {point.description}
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

export interface MissionAccordionProps {
  points: MissionPoint[];
}

export function MissionAccordion({ points }: MissionAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number) => setOpen((current) => (current === index ? null : index));
  const openVariant = open !== null ? OPEN_VARIANTS[open] : undefined;

  return (
    <>
      {INSTANCES.map((instance) => (
        <div key={instance.wrapper} className={instance.wrapper}>
          <div className="framer-1ssr53c-container">
            <div
              className={`framer-HlAB7 framer-1qzh2ko ${openVariant ? openVariant[0] : "framer-v-1qzh2ko"}`}
              data-framer-name={openVariant ? openVariant[1] : "Default"}
              style={{ "--6h6ln2": instance.gap, width: "100%" }}
            >
              {points.map((point, i) => (
                <div
                  key={i}
                  className={ITEM_CONTAINERS[i % ITEM_CONTAINERS.length]}
                  style={REVEAL_STYLE}
                >
                  <MissionItem
                    point={point}
                    open={open === i}
                    gap={i === 0 ? instance.gap : ITEM_GAP}
                    onToggle={() => toggle(i)}
                  />
                </div>
              ))}
              <div
                className="framer-x0ueh4-container"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
