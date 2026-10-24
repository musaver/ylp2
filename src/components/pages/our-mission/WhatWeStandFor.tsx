import type { CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SectionHeading,
  SlashLabel,
  TOKENS,
  revealStyle,
} from "@/components/sections/framer-shared";

/** Decorative logo mark behind the statement, as exported. */
const LOGO_IMAGE: FramerImage = {
  src: "/images/Od2skloa7zqvI6TKjYILXTmySs.svg",
  alt: "Logo Image",
  width: 200,
  height: 200,
};

/** Desktop/tablet wrapper style (the phone variant has no inline style). */
const SQUARE_STYLE: CSSProperties = { width: "auto", aspectRatio: "1" };

/**
 * The logo mark spins into place (like the About section's logo). The reveal sits on an inner
 * layer because the mark's own wrapper keeps the theme's 40% opacity.
 */
const LOGO_REVEAL_STYLE: CSSProperties = {
  ...revealStyle("rotate(-180deg) scale(0.7)"),
  position: "absolute",
  inset: 0,
};

export interface WhatWeStandForProps {
  label?: string;
  statement?: string;
  description?: string;
  logo?: FramerImage;
}

/**
 * "What we stand for Section" of /our-mission (hash 99113a4cf4, section.framer-bfayaw):
 * "/ What we stand for /" label and the mission statement over the decorative logo mark.
 */
export function WhatWeStandFor({
  label = "Benefits",
  statement = "Why join YouthLink?",
  description = "Joining is a conscious decision. Here is what members gain in return for their commitment.",
  logo = LOGO_IMAGE,
}: WhatWeStandForProps) {
  return (
    <section className="framer-bfayaw" data-framer-name="What we stand for Section">
      <div className="framer-d5wyof" data-framer-name="Base Container">
        <div className="framer-82e7kb" data-framer-name="BG Wrapper">
          <div className="ssr-variant hidden-b2obmz">
            <div className="framer-z3ona6" style={SQUARE_STYLE}>
              <div data-reveal-delay={200} style={LOGO_REVEAL_STYLE}>
                <FramerBackgroundImage image={logo} />
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1kvngrp hidden-19wkpj4">
            <div className="framer-z3ona6">
              <div data-reveal-delay={200} style={LOGO_REVEAL_STYLE}>
                <FramerBackgroundImage image={logo} />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1poaqht" data-framer-name="Text Block Wrapper">
          <div className="ssr-variant">
            <div className="framer-du9f26-container" style={REVEAL_STYLE}>
              <SlashLabel text={label} />
            </div>
          </div>
          <SectionHeading className="framer-171swyu" text={statement} delay={80} />
          {description && (
            <div
              className="framer-171swyu"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              data-reveal-delay={160}
              style={REVEAL_STYLE}
            >
              <p
                className="framer-text framer-styles-preset-184kbjj"
                data-styles-preset="jo34BIwbe"
                dir="auto"
                style={{ "--framer-text-color": TOKENS.grey }}
              >
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
