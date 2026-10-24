import type { Resource } from "@/lib/types";
import { CauseCard, type CauseCardItem } from "@/components/cards/CauseCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
// Styles of the project card (`framer-SvcnD`), which the per-page templates don't all include.
import "@/styles/templates/home.css";
import {
  REVEAL_STYLE,
  OutlineButtonLink,
  SectionHeading,
  type BreakpointClasses,
  type CardVariant,
} from "./framer-shared";

/**
 * Framer's "Recent updates from our team" block (heading, "View all resources" button and
 * two resource cards), converted from the "Resourses Section" (sic) of:
 * - the resource detail template (hash 8169fbd248, section.framer-5hn1vg) – /resources/[slug]
 * - /about-us (hash c396664853, section.framer-tejbyj)
 * - /contact-us (hash 67b109ea3b, section.framer-17ut7hm)
 * - /events (hash bd3a951347, section.framer-1k2qnon)
 * - the home page (hash bf4b36bb37, section.framer-1fwdmt3) – /
 *
 * Differences between the exports (selected by `variant`): instance/breakpoint classes,
 * the order of the per-card breakpoint blocks (Desktop, Phone, Tablet on the resource
 * detail; Desktop, Tablet, Phone elsewhere), the thumbnails' `sizes` attribute, and on
 * /contact-us the desktop button's instance wrapper is not wrapped in a `ssr-variant` div.
 *
 * Pass `projects` instead of `resources` to fill the same layout with the home page's project
 * cards (the buttons then link to /projects).
 */
export type ResourcesVariant = "resource-detail" | "about-us" | "contact-us" | "events" | "home";

export interface ResourcesSectionProps {
  /** Framer's section class, e.g. "framer-5hn1vg". */
  className: string;
  resources?: Resource[];
  /** Renders project cards instead of resource cards. */
  projects?: CauseCardItem[];
  variant: ResourcesVariant;
  heading?: string;
  buttonLabel?: string;
}

interface ResourcesLayout {
  base: string;
  bp: BreakpointClasses;
  phoneButton: string;
  textContainer: string;
  heading: string;
  button: string;
  buttonInSsrVariant: boolean;
  grid: string;
  card: string;
  /** Order of the breakpoint blocks rendered for each card. */
  order: readonly CardVariant[];
  sizes: string;
}

const DETAIL_SIZES =
  "(min-width: 1280px) max(max((min(max(100vw - 40px, 1px), 1340px) - 140px) / 2, 1px), 1px), (max-width: 991.98px) max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 280px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 2, 1px) - 20px) / 2, 1px), 260px), 1px)";
const FULL_WIDTH_SIZES =
  "(min-width: 1280px) max(max((max((min(max(100vw, 1px), 1340px) - 140px) / 2, 1px) - 20px) / 2, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((max((min(max(100vw, 1px), 1340px) - 80px) / 2, 1px) - 20px) / 2, 1px), 260px), 1px), (max-width: 991.98px) max(max(min(max(100vw, 1px), 1340px) - 40px, 280px), 1px)";
const EVENTS_SIZES =
  "(min-width: 1280px) max(max((max((min(max(100vw - 40px, 1px), 1340px) - 140px) / 2, 1px) - 20px) / 2, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((max((min(max(100vw - 40px, 1px), 1340px) - 80px) / 2, 1px) - 20px) / 2, 1px), 260px), 1px), (max-width: 991.98px) max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 280px), 1px)";

const DESKTOP_TABLET_PHONE: readonly CardVariant[] = ["desktop", "tablet", "phone"];

const VARIANTS: Record<ResourcesVariant, ResourcesLayout> = {
  "resource-detail": {
    base: "framer-tfnnhz",
    bp: { desktop: "hidden-nvs3ka", tablet: "hidden-18zn3uu", phone: "hidden-1ghes7e" },
    phoneButton: "framer-101grwo-container",
    textContainer: "framer-1fgszrq",
    heading: "framer-1j1o7qy",
    button: "framer-1oj9gqe-container",
    buttonInSsrVariant: true,
    grid: "framer-1j2e4pl",
    card: "framer-1tba3pl-container",
    order: ["desktop", "phone", "tablet"],
    sizes: DETAIL_SIZES,
  },
  "about-us": {
    base: "framer-1yewyhf",
    bp: { desktop: "hidden-1ys3drf", tablet: "hidden-1v22ssx", phone: "hidden-tenz1j" },
    phoneButton: "framer-1237avi-container",
    textContainer: "framer-4o32cu",
    heading: "framer-zraugm",
    button: "framer-cbhph2-container",
    buttonInSsrVariant: true,
    grid: "framer-7k94bc",
    card: "framer-ri22ql-container",
    order: DESKTOP_TABLET_PHONE,
    sizes: FULL_WIDTH_SIZES,
  },
  "contact-us": {
    base: "framer-rqlykx",
    bp: { desktop: "hidden-1izvhu1", tablet: "hidden-175saz8", phone: "hidden-ce8ap0" },
    phoneButton: "framer-ttkezr-container",
    textContainer: "framer-15fcoio",
    heading: "framer-zki68i",
    button: "framer-jej2w9-container",
    buttonInSsrVariant: false,
    grid: "framer-1onu0kz",
    card: "framer-vwhwqs-container",
    order: DESKTOP_TABLET_PHONE,
    sizes: FULL_WIDTH_SIZES,
  },
  events: {
    base: "framer-1y4mgb3",
    bp: { desktop: "hidden-mnx0x7", tablet: "hidden-1ijr1ci", phone: "hidden-14562o0" },
    phoneButton: "framer-62a4nt-container",
    textContainer: "framer-1464e2y",
    heading: "framer-ossa28",
    button: "framer-1tqzww4-container",
    buttonInSsrVariant: true,
    grid: "framer-1puj7qh",
    card: "framer-1gbb7ev-container",
    order: DESKTOP_TABLET_PHONE,
    sizes: EVENTS_SIZES,
  },
  home: {
    base: "framer-1c8k64a",
    bp: { desktop: "hidden-72rtr7", tablet: "hidden-12w2mq9", phone: "hidden-1au1vxw" },
    phoneButton: "framer-1iw6iho-container",
    textContainer: "framer-1ywkt6s",
    heading: "framer-qws9z9",
    button: "framer-11vf7fx-container",
    buttonInSsrVariant: true,
    grid: "framer-ttuytr",
    card: "framer-16vhkmf-container",
    order: DESKTOP_TABLET_PHONE,
    sizes: FULL_WIDTH_SIZES,
  },
};

/** `hidden-*` classes that leave only the given breakpoint variant visible. */
function hiddenExcept(bp: BreakpointClasses, variant: CardVariant): string {
  switch (variant) {
    case "desktop":
      return `${bp.phone} ${bp.tablet}`;
    case "tablet":
      return `${bp.desktop} ${bp.phone}`;
    case "phone":
      return `${bp.desktop} ${bp.tablet}`;
  }
}

export function ResourcesSection({
  className,
  resources = [],
  projects,
  variant,
  heading = "Recent projects from our team",
  buttonLabel = projects ? "View all projects" : "View all resources",
}: ResourcesSectionProps) {
  const v = VARIANTS[variant];
  const buttonHref = projects ? "/projects" : "/resources";
  const desktopButton = (
    <div className={`${v.button} ${v.bp.phone}`} style={REVEAL_STYLE}>
      <OutlineButtonLink href={buttonHref} label={buttonLabel} variant="desktop" theme="white" />
    </div>
  );
  const cards = projects
    ? projects.map((project) => ({
        key: project.slug,
        render: (cardVariant: CardVariant) => (
          <CauseCard
            cause={project}
            variant={cardVariant}
            sizes={v.sizes}
            basePath="/projects"
            ctaLabel="Learn more"
          />
        ),
      }))
    : resources.map((resource) => ({
        key: resource.slug,
        render: (cardVariant: CardVariant) => (
          <ResourceCard resource={resource} variant={cardVariant} sizes={v.sizes} />
        ),
      }));

  return (
    <section className={className} data-framer-name="Resourses Section">
      <div className={v.base} data-framer-name="Base Container">
        <div className="ssr-variant">
          <div className={`${v.phoneButton} ${v.bp.desktop} ${v.bp.tablet}`} style={REVEAL_STYLE}>
            <OutlineButtonLink
              href={buttonHref}
              label={buttonLabel}
              variant="phone"
              theme="white"
            />
          </div>
        </div>
        <div className={v.textContainer} data-framer-name="Text Container">
          <div className={`ssr-variant ${v.bp.phone}`}>
            <SectionHeading className={v.heading} text={heading} />
          </div>
          <div className={`ssr-variant ${v.bp.desktop} ${v.bp.tablet}`}>
            <SectionHeading className={v.heading} text={heading} centered />
          </div>
          {v.buttonInSsrVariant ? (
            <div className="ssr-variant">{desktopButton}</div>
          ) : (
            desktopButton
          )}
        </div>
        <div className={v.grid}>
          {cards.map((card) =>
            v.order.map((cardVariant) => (
              <div
                key={`${card.key}-${cardVariant}`}
                className={`ssr-variant ${hiddenExcept(v.bp, cardVariant)}`}
              >
                <div className={v.card} style={REVEAL_STYLE}>
                  {card.render(cardVariant)}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
