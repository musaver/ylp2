import { Fragment } from "react";
import { CauseCard, type CauseCardItem } from "@/components/cards/CauseCard";
import {
  REVEAL_STYLE,
  SlashLabel,
  OutlineButtonLink,
  SectionHeading,
  revealStyle,
  type BreakpointClasses,
  type OutlineButtonTheme,
} from "./framer-shared";

/**
 * Framer's causes grid ("/ Other ways to help /", heading, "View all …" button and three
 * cause cards), converted from the "Causes Section" of:
 * - the cause detail template (hash 8fc3c9f09e, section.framer-ac59iq) – /causes/[slug]
 * - the home page (hash c0dfaae115, section.framer-h6g2zt) – /
 * - /our-mission (hash ae388f0a2e, section.framer-1py284h)
 *
 * The three exports share the card component; they differ in instance/breakpoint classes,
 * the button background (transparent on the cause detail, white on home/our-mission), the
 * desktop button label ("View all initiatives" on the cause detail, "View all fundraisers"
 * elsewhere) and the thumbnails' `sizes` attribute (full-width grid on the detail page vs.
 * a thirds grid on home/our-mission). `variant` selects those.
 *
 * Layout as exported: desktop and tablet render every cause (each as Desktop + Tablet card
 * variant); the phone block renders only the first two. The third card's thumbnail is
 * lazy-loaded and its `sizes` has no phone media query, as in the export.
 */
export type CausesVariant = "cause-detail" | "home" | "our-mission";

export interface CausesSectionProps {
  /** Framer's section class, e.g. "framer-ac59iq". */
  className: string;
  causes: CauseCardItem[];
  variant: CausesVariant;
  /** Listing path of the buttons; cards link to `${basePath}/${slug}`. */
  basePath?: string;
  /** Label of the cards' yellow pill. */
  ctaLabel?: string;
  /** Cards rendered in the phone block (Framer renders the first two). */
  phoneCardCount?: number;
  heading?: string;
  /** Text of the "/ … /" label. */
  label?: string;
  /** Label of the desktop/tablet button (defaults per variant). */
  buttonLabel?: string;
  /** Label of the phone button (defaults per variant). */
  phoneButtonLabel?: string;
}

interface CausesLayout {
  base: string;
  bp: BreakpointClasses;
  phoneButton: string;
  textWrapper: string;
  textWrapperName: string;
  textInner: string;
  textInnerName: string;
  labelContainer: string;
  heading: string;
  button: string;
  grid: string;
  card: string;
  buttonTheme: OutlineButtonTheme;
  buttonLabel: string;
  phoneButtonLabel: string;
  sizes: string;
  sizesNoPhone: string;
}

const DETAIL_SIZES =
  "(min-width: 1280px) max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px), 1px)";
const THIRDS_SIZES =
  "(min-width: 1280px) max(max((min(max(100vw, 1px), 1340px) - 80px) / 3, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((min(max(100vw, 1px), 1340px) - 80px) / 3, 1px), 1px)";

const VARIANTS: Record<CausesVariant, CausesLayout> = {
  "cause-detail": {
    base: "framer-4zj7zm",
    bp: { desktop: "hidden-9ymi93", tablet: "hidden-1qvxql2", phone: "hidden-29zmi8" },
    phoneButton: "framer-1xrrwl6-container",
    textWrapper: "framer-3baypn",
    textWrapperName: "Text Content Wrapper",
    textInner: "framer-5vzots",
    textInnerName: "Text Content",
    labelContainer: "framer-y5kzi9-container",
    heading: "framer-18c5gbp",
    button: "framer-1uf4113-container",
    grid: "framer-efq6yv",
    card: "framer-1uwvhsx-container",
    buttonTheme: "outline",
    buttonLabel: "View all initiatives",
    phoneButtonLabel: "View all fundraisers",
    sizes: `${DETAIL_SIZES}, (max-width: 991.98px) max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 280px), 1px)`,
    sizesNoPhone: DETAIL_SIZES,
  },
  home: {
    base: "framer-i2z6le",
    bp: { desktop: "hidden-72rtr7", tablet: "hidden-12w2mq9", phone: "hidden-1au1vxw" },
    phoneButton: "framer-xzra11-container",
    textWrapper: "framer-l4as40",
    textWrapperName: "Text Container Wrapper",
    textInner: "framer-ze64b2",
    textInnerName: "Text Container Wrapper",
    labelContainer: "framer-1dwdtz3-container",
    heading: "framer-1nfbf2m",
    button: "framer-102t3iq-container",
    grid: "framer-1r61ao1",
    card: "framer-jqkacx-container",
    buttonTheme: "white",
    buttonLabel: "View all fundraisers",
    phoneButtonLabel: "View all fundraisers",
    sizes: `${THIRDS_SIZES}, (max-width: 991.98px) max(max(min(max(100vw, 1px), 1340px) - 40px, 280px), 1px)`,
    sizesNoPhone: THIRDS_SIZES,
  },
  "our-mission": {
    base: "framer-jpq7io",
    bp: { desktop: "hidden-19wkpj4", tablet: "hidden-1kvngrp", phone: "hidden-b2obmz" },
    phoneButton: "framer-1dii1yp-container",
    textWrapper: "framer-1vj85df",
    textWrapperName: "Text Container Wrapper",
    textInner: "framer-1r111eu",
    textInnerName: "Text Container Wrapper",
    labelContainer: "framer-maqbbb-container",
    heading: "framer-17fnh9o",
    button: "framer-14awrno-container",
    grid: "framer-c2bnyq",
    card: "framer-1e8kwhm-container",
    buttonTheme: "white",
    buttonLabel: "View all fundraisers",
    phoneButtonLabel: "View all fundraisers",
    sizes: `${THIRDS_SIZES}, (max-width: 991.98px) max(max(min(max(100vw, 1px), 1340px) - 40px, 280px), 1px)`,
    sizesNoPhone: THIRDS_SIZES,
  },
};

/** Framer renders only the first two cards in the phone block. */
const PHONE_CARD_COUNT = 2;

/*
 * Scroll-reveal choreography: label, heading and button follow each other in; in a
 * three-column grid the cards slide in from the left, bottom and right in turn (a full-width
 * grid and the phone stack simply rise card by card).
 */
const CARD_TRANSFORMS = [
  "translateX(-80px) translateY(40px)",
  "translateY(80px)",
  "translateX(80px) translateY(40px)",
];
const CARD_STAGGER_MS = 140;

function cardReveal(index: number, columns: number) {
  return {
    "data-reveal-delay": (index % columns) * CARD_STAGGER_MS,
    style: revealStyle(columns === 3 ? CARD_TRANSFORMS[index % 3]! : "translateY(50px)"),
  };
}

export function CausesSection({
  className,
  causes,
  variant,
  heading = "Fundraisers facing critical needs",
  label = "Other ways to help",
  buttonLabel,
  phoneButtonLabel,
  basePath = "/causes",
  ctaLabel,
  phoneCardCount = PHONE_CARD_COUNT,
}: CausesSectionProps) {
  const v = VARIANTS[variant];
  const desktopLabel = buttonLabel ?? v.buttonLabel;
  const phoneLabel = phoneButtonLabel ?? v.phoneButtonLabel;
  const columns = variant === "cause-detail" ? 1 : 3;

  return (
    <section className={className} data-framer-name="Causes Section">
      <div className={v.base} data-framer-name="Base Container">
        <div className="ssr-variant">
          <div className={`${v.phoneButton} ${v.bp.desktop} ${v.bp.tablet}`} style={REVEAL_STYLE}>
            <OutlineButtonLink
              href={basePath}
              label={phoneLabel}
              variant="phone"
              theme={v.buttonTheme}
            />
          </div>
        </div>
        <div className={v.textWrapper} data-framer-name={v.textWrapperName}>
          <div className={v.textInner} data-framer-name={v.textInnerName}>
            <div className="ssr-variant">
              <div className={v.labelContainer} style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <div className={`ssr-variant ${v.bp.phone}`}>
              <SectionHeading className={v.heading} text={heading} delay={80} />
            </div>
            <div className={`ssr-variant ${v.bp.tablet} ${v.bp.desktop}`}>
              <SectionHeading className={v.heading} text={heading} centered delay={80} />
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className={`${v.button} ${v.bp.phone}`}
              data-reveal-delay={160}
              style={REVEAL_STYLE}
            >
              <OutlineButtonLink
                href={basePath}
                label={desktopLabel}
                variant="desktop"
                theme={v.buttonTheme}
              />
            </div>
          </div>
        </div>
        <div className={v.grid}>
          <div className={`ssr-variant ${v.bp.phone}`}>
            {causes.map((cause, i) => {
              const belowPhone = i >= phoneCardCount;
              const sizes = belowPhone ? v.sizesNoPhone : v.sizes;
              const loading = belowPhone ? "lazy" : undefined;
              return (
                <Fragment key={cause.slug}>
                  <div className={`ssr-variant ${v.bp.tablet}`}>
                    <div className={v.card} {...cardReveal(i, columns)}>
                      <CauseCard
                        cause={cause}
                        variant="desktop"
                        sizes={sizes}
                        loading={loading}
                        basePath={basePath}
                        ctaLabel={ctaLabel}
                      />
                    </div>
                  </div>
                  <div className={`ssr-variant ${v.bp.desktop}`}>
                    <div className={v.card} {...cardReveal(i, columns)}>
                      <CauseCard
                        cause={cause}
                        variant="tablet"
                        sizes={sizes}
                        loading={loading}
                        basePath={basePath}
                        ctaLabel={ctaLabel}
                      />
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={`ssr-variant ${v.bp.tablet} ${v.bp.desktop}`}>
            {causes.slice(0, phoneCardCount).map((cause) => (
              <div key={cause.slug} className={v.card} {...cardReveal(0, 1)}>
                <CauseCard
                  cause={cause}
                  variant="phone"
                  sizes={v.sizes}
                  basePath={basePath}
                  ctaLabel={ctaLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
