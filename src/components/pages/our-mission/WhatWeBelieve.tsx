import { Fragment, type CSSProperties } from "react";
import type { IconFeature } from "@/lib/types";
import {
  FramerBackgroundImage,
  TOKENS,
  revealStyle,
  type CardVariant,
} from "@/components/sections/framer-shared";

/** Instance wrapper class of each card, in export order (one per card position). */
const CARD_CONTAINERS = [
  "framer-1qle0r7-container",
  "framer-1775q9q-container",
  "framer-akivbw-container",
  "framer-1m7ab2b-container",
  "framer-bvsczj-container",
  "framer-1msaojw-container",
] as const;

/** Breakpoint blocks in export order: wrapper classes and card variant. */
const BLOCKS: { variant: CardVariant; wrapper: string }[] = [
  { variant: "desktop", wrapper: "ssr-variant hidden-1kvngrp hidden-b2obmz" },
  { variant: "tablet", wrapper: "ssr-variant hidden-19wkpj4 hidden-b2obmz" },
  { variant: "phone", wrapper: "ssr-variant hidden-1kvngrp hidden-19wkpj4" },
];

const CARD_VARIANT: Record<CardVariant, { className: string; name: string }> = {
  desktop: { className: "framer-v-1m4fd2l", name: "Default" },
  tablet: { className: "framer-v-e203sc", name: "Tablet" },
  phone: { className: "framer-v-1oqfzt", name: "Phone" },
};

/*
 * Scroll-reveal choreography: each card rises in, staggered by its column so every row
 * sweeps left to right, and its icon tile spins into place just after the card.
 */
const COLUMNS: Record<CardVariant, number> = { desktop: 3, tablet: 2, phone: 1 };
const CARD_STAGGER_MS = 120;
const ICON_DELAY_MS = 220;

const ROUNDED_10: CSSProperties = {
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

const TEXT_CONTAINER_STYLE: CSSProperties = {
  "--framer-link-text-color": "rgb(0, 153, 255)",
  "--framer-link-text-decoration": "underline",
  transform: "none",
};

/**
 * Icons are lazy-loaded as exported: always in the Desktop block, from the third card on in
 * the Tablet block, never in the Phone block.
 */
function iconLoading(variant: CardVariant, index: number): "lazy" | undefined {
  if (variant === "desktop") return "lazy";
  if (variant === "tablet" && index >= 2) return "lazy";
  return undefined;
}

export interface WhatWeBelieveProps {
  beliefs: IconFeature[];
}

/**
 * "What We Believe Section" of /our-mission (hash 280229d3ab, section.framer-1he59cf):
 * grid of six icon cards (`framer-yPyLl` component). Each card is rendered in the Desktop,
 * Tablet and Phone variant, each in its own `ssr-variant hidden-*` wrapper.
 */
export function WhatWeBelieve({ beliefs }: WhatWeBelieveProps) {
  return (
    <section className="framer-1he59cf" data-framer-name="What We Believe Section">
      <div className="framer-5m1zqq" data-framer-name="Base Container">
        <div className="framer-k4leen" data-framer-name="Our Mission Cards Wrapper">
          {beliefs.map((belief, i) => {
            const container = CARD_CONTAINERS[i] ?? CARD_CONTAINERS[0];
            return (
              <Fragment key={belief.title ?? i}>
                {BLOCKS.map(({ variant, wrapper }) => {
                  const delay = (i % COLUMNS[variant]) * CARD_STAGGER_MS;
                  return (
                    <div key={variant} className={wrapper}>
                      <div
                        className={container}
                        data-reveal-delay={delay}
                        style={revealStyle("translateY(50px)")}
                      >
                        <BeliefCard
                          belief={belief}
                          variant={variant}
                          loading={iconLoading(variant, i)}
                          delay={delay}
                        />
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Framer's "Our Mission Card" component root (`framer-yPyLl`). */
function BeliefCard({
  belief,
  variant,
  loading,
  delay,
}: {
  belief: IconFeature;
  variant: CardVariant;
  loading: "lazy" | undefined;
  /** Delay (ms) of the card's own reveal; the icon follows it. */
  delay: number;
}) {
  const v = CARD_VARIANT[variant];
  return (
    <div
      className={`framer-yPyLl framer-VFjXM framer-cYxwf framer-1m4fd2l ${v.className}`}
      data-framer-name={v.name}
      style={{ backgroundColor: TOKENS.surface, width: "100%", ...ROUNDED_10 }}
    >
      <div
        className="framer-13edn2x"
        data-framer-name="Icon Wrapper"
        data-reveal-delay={delay + ICON_DELAY_MS}
        style={{
          ...revealStyle("rotate(-90deg) scale(0.5)"),
          backgroundColor: TOKENS.yellow,
          ...ROUNDED_10,
        }}
      >
        <div className="framer-nemrnw">
          <FramerBackgroundImage image={belief.icon} loading={loading} />
        </div>
      </div>
      <div className="framer-w3848s" data-framer-name="Text Content">
        <div
          className="framer-4vpfzl"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={TEXT_CONTAINER_STYLE}
        >
          <h6
            className="framer-text framer-styles-preset-2tpdrg"
            data-styles-preset="jqwsbizxz"
            dir="auto"
          >
            {belief.title}
          </h6>
        </div>
        <div
          className="framer-g0izl4"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={TEXT_CONTAINER_STYLE}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            {belief.text}
          </p>
        </div>
      </div>
    </div>
  );
}
