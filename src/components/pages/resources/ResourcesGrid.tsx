import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { Resource } from "@/lib/types";
import { ResourceListCard } from "./ResourceListCard";

/** `hidden-*` classes of the resources template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-1owuaeu", tablet: "hidden-d3s7u0", phone: "hidden-24zs8m" } as const;

/** Literal `sizes` of the card thumbnails on /resources (identical for every card and variant). */
const CARD_SIZES =
  "(min-width: 1280px) max(max((max(min(100vw - 40px, 1340px) - 40px, 1px) - 60px) / 3, 50px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((max(min(100vw - 40px, 1340px) - 40px, 1px) - 30px) / 2, 50px), 1px), (max-width: 991.98px) max(max(max(min(100vw - 40px, 1340px) - 40px, 1px), 280px), 1px)";

/** Card breakpoint variants in export order, with the classes that hide the other two. */
const CARD_VARIANTS = [
  { variant: "desktop", hidden: `${BP.tablet} ${BP.phone}` },
  { variant: "tablet", hidden: `${BP.desktop} ${BP.phone}` },
  { variant: "phone", hidden: `${BP.desktop} ${BP.tablet}` },
] as const;

export interface ResourcesGridProps {
  resources: Resource[];
}

/**
 * Framer's "Resources Section" of /resources (hash b06a15d3cb, section.framer-hmkfxy): every
 * resource as a list card (Desktop, Tablet and Phone variant per resource, each in its own
 * `ssr-variant` wrapper), followed by Framer's empty "Button Wrapper".
 */
export function ResourcesGrid({ resources }: ResourcesGridProps) {
  return (
    <section className="framer-hmkfxy" data-framer-name="Resources Section">
      <div className="framer-qdlnm6" data-framer-name="Base Container">
        <div className="framer-d4gg2h">
          {resources.flatMap((resource) =>
            CARD_VARIANTS.map(({ variant, hidden }) => (
              <div key={`${resource.slug}-${variant}`} className={`ssr-variant ${hidden}`}>
                <div className="framer-9tppej-container" style={REVEAL_STYLE}>
                  <ResourceListCard resource={resource} variant={variant} sizes={CARD_SIZES} />
                </div>
              </div>
            )),
          )}
          <div className="framer-1lxwuy3" data-framer-name="Button Wrapper">
            <div className="ssr-variant">
              <div className="framer-12z9re8-container" style={REVEAL_STYLE}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
