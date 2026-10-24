import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { Resource, ResourceTag } from "@/lib/types";
import { ResourceListCard } from "./ResourceListCard";

/** Literal `sizes` of the card thumbnails on /resource-category/<tag>. */
const CARD_SIZES =
  "(min-width: 1280px) max(max((max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px) - 40px) / 3, 50px), 1px), (max-width: 991.98px) max(max(max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px), 280px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px) - 20px) / 2, 50px), 1px)";

export interface CategoryGridProps {
  /** The category being shown; it is hidden from each card's tag list (as exported). */
  tag: ResourceTag;
  resources: Resource[];
}

/**
 * Framer's "Resource Category Section" of /resource-category/<tag> (section.framer-vvmmot,
 * e.g. hash 5f91d43863 for community, d36d9f3b0e for business): one card per resource,
 * followed by Framer's empty "Button Wrapper".
 *
 * Unlike /resources, the export renders only the Desktop card variant, each in a bare
 * `ssr-variant` wrapper (no `hidden-*` classes); the markup is the same for any number of
 * items (verified for 1, 3, 4 and 5 cards), only the card block repeats.
 */
export function CategoryGrid({ tag, resources }: CategoryGridProps) {
  return (
    <section className="framer-vvmmot" data-framer-name="Resource Category Section">
      <div className="framer-dkmc7p" data-framer-name="Base Container">
        <div className="framer-1lfgmxp">
          {resources.map((resource) => (
            <div key={resource.slug} className="ssr-variant">
              <div className="framer-soer92-container" style={REVEAL_STYLE}>
                <ResourceListCard
                  resource={resource}
                  variant="desktop"
                  sizes={CARD_SIZES}
                  tags={resource.tags.filter((t) => t !== tag)}
                />
              </div>
            </div>
          ))}
          <div className="framer-1vtn5qk" data-framer-name="Button Wrapper">
            <div className="ssr-variant">
              <div className="framer-2ez8yy-container" style={REVEAL_STYLE}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
