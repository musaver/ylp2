import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SlashLabel,
  TOKENS,
  revealStyle,
} from "@/components/sections/framer-shared";
import type { VisionPillar } from "@/content/vision";
import styles from "./CommitmentsSection.module.css";

/** Breakpoint classes of the home template. */
const HIDE_DESKTOP = "hidden-72rtr7";
const HIDE_TABLET = "hidden-12w2mq9";
const HIDE_PHONE = "hidden-1au1vxw";

/** Instance classes of the commitment cards in the export (reused for any number of cards). */
const CARD_CONTAINERS = [
  "framer-mmxufd-container",
  "framer-1an6c6b-container",
  "framer-ijnk4k-container",
  "framer-xt6k97-container",
];

/*
 * Scroll-reveal choreography (same mechanism as the About section's floating tags: a start
 * transform per element, animated into place by `ScrollReveal`). The three cards slide in
 * from the left, bottom and right in turn; inside each card the icon tile spins into place
 * and the bullet points follow one after another.
 */
const CARD_TRANSFORMS = [
  "translateX(-80px) translateY(40px)",
  "translateY(80px)",
  "translateX(80px) translateY(40px)",
];
const CARD_STAGGER_MS = 140;
const ICON_DELAY_MS = 220;
const POINT_DELAY_MS = 320;
const POINT_STAGGER_MS = 90;

interface CommitmentCardProps {
  pillar: VisionPillar;
  variant: "desktop" | "phone";
  /** Delay (ms) of the card's own reveal; the inner elements stagger after it. */
  delay: number;
}

/**
 * One card (`framer-cT7C4 framer-1hbabbe`), "Default" or "Phone" variant: the theme's yellow
 * icon tile, a card heading and a bullet list in the theme's body style.
 */
function CommitmentCard({ pillar, variant, delay }: CommitmentCardProps) {
  const phone = variant === "phone";
  return (
    <div
      className={`framer-cT7C4 framer-NrWMR framer-cYxwf framer-VFjXM framer-1hbabbe ${phone ? "framer-v-dnilyo" : "framer-v-1hbabbe"} ${styles.card}`}
      data-framer-name={phone ? "Phone" : "Default"}
      style={{ width: "100%" }}
    >
      <div
        className="framer-bzy8yo"
        data-framer-name="Icon Wrapper"
        data-reveal-delay={delay + ICON_DELAY_MS}
        style={{
          ...revealStyle("rotate(-90deg) scale(0.5)"),
          backgroundColor: TOKENS.yellow,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-1aphry9">
          <FramerBackgroundImage image={pillar.icon} loading={phone ? undefined : "lazy"} />
        </div>
      </div>
      <div className="framer-17caiv8" data-framer-name="Text Container">
        <div
          className="framer-1rok1cl"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={{ "--extracted-1w1cjl5": TOKENS.white, transform: "none" }}
        >
          <h3
            className="framer-text framer-styles-preset-2tpdrg"
            data-styles-preset="jqwsbizxz"
            dir="auto"
            style={{ "--framer-text-color": `var(--extracted-1w1cjl5, ${TOKENS.white})` }}
          >
            {pillar.title}
          </h3>
        </div>
        <div
          className="framer-16oaiy"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{ "--extracted-r6o4lv": TOKENS.lightGrey, transform: "none" }}
        >
          <ul className={styles.list}>
            {pillar.points.map((point, i) => (
              <li
                key={point}
                className={styles.item}
                data-reveal-delay={delay + POINT_DELAY_MS + i * POINT_STAGGER_MS}
                style={revealStyle("translateY(16px)")}
              >
                <span className={styles.bullet} aria-hidden="true" />
                <p
                  className="framer-text framer-styles-preset-1dpgexf"
                  data-styles-preset="wUYf66_Db"
                  dir="auto"
                  style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.lightGrey})` }}
                >
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export interface CommitmentsSectionProps {
  /** Text of the "/ … /" label. */
  label: string;
  heading: string;
  intro: string;
  pillars: VisionPillar[];
}

/**
 * Home "Our Commitment Section" (Framer section.framer-19l5y9k), now carrying the Vision and
 * Community content: yellow "/ … /" label, heading and intro, then one card per pillar in a
 * 3-column grid. Each card renders its Default variant (hidden on phone) and its Phone variant
 * (hidden on desktop/tablet), with the theme's scroll-reveal animation.
 */
export function CommitmentsSection({ label, heading, intro, pillars }: CommitmentsSectionProps) {
  return (
    <section id="vision" className="framer-19l5y9k" data-framer-name="Our Commitment Section">
      <div className="framer-186ce1s" data-framer-name="Base Container">
        <div className={`framer-1rwippu ${styles.content}`} data-framer-name="Content Wrapper">
          <div className="ssr-variant">
            <div className="framer-1i40pi5-container" style={REVEAL_STYLE}>
              <SlashLabel text={label} color={TOKENS.yellow} />
            </div>
          </div>
          <div className={`framer-cYxwf ${styles.intro}`}>
            <div
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              data-reveal-delay={80}
              style={REVEAL_STYLE}
            >
              <h2
                className="framer-text framer-styles-preset-dghseo"
                data-styles-preset="ZIAYgZ0hD"
                dir="auto"
                style={{ "--framer-text-color": TOKENS.white }}
              >
                {heading}
              </h2>
            </div>
            <div
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              data-reveal-delay={160}
              style={REVEAL_STYLE}
            >
              <p
                className="framer-text framer-styles-preset-1dpgexf"
                data-styles-preset="wUYf66_Db"
                dir="auto"
                style={{ "--framer-text-color": TOKENS.lightGrey }}
              >
                {intro}
              </p>
            </div>
          </div>
          <div
            className={`framer-1myapk ${styles.grid}`}
            data-framer-name="Commitment Cards Wrapper"
          >
            {pillars.map((pillar, i) => {
              const container = CARD_CONTAINERS[i % CARD_CONTAINERS.length];
              const delay = i * CARD_STAGGER_MS;
              return [
                <div key={`${i}-default`} className={`ssr-variant ${HIDE_PHONE}`}>
                  <div
                    className={container}
                    data-reveal-delay={delay}
                    style={revealStyle(CARD_TRANSFORMS[i % CARD_TRANSFORMS.length]!)}
                  >
                    <CommitmentCard pillar={pillar} variant="desktop" delay={delay} />
                  </div>
                </div>,
                // Phone: the cards stack, so each one rises as it scrolls into view.
                <div key={`${i}-phone`} className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
                  <div className={container} style={revealStyle("translateY(50px)")}>
                    <CommitmentCard pillar={pillar} variant="phone" delay={0} />
                  </div>
                </div>,
              ];
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
