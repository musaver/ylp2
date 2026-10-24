import { Fragment } from "react";
import type { Cause } from "@/lib/types";
import { CauseCard } from "@/components/cards/CauseCard";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";

/** Thumbnail `sizes` of the cards on /causes (three-column grid, full width on phone). */
const CARD_SIZES =
  "(min-width: 1280px) max(max((max(min(100vw - 40px, 1340px) - 40px, 1px) - 40px) / 3, 50px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((max(min(100vw - 40px, 1340px) - 40px, 1px) - 40px) / 3, 50px), 1px), (max-width: 991.98px) max(max(max(min(100vw - 40px, 1340px) - 40px, 1px), 280px), 1px)";

/** `ssr-variant` wrapper per card variant (desktop / tablet / phone of the causes template). */
const VARIANT_WRAPPERS = [
  ["desktop", "ssr-variant hidden-vnme09 hidden-vgkzoy"],
  ["tablet", "ssr-variant hidden-vgkzoy hidden-1v1u7jl"],
  ["phone", "ssr-variant hidden-vnme09 hidden-1v1u7jl"],
] as const;

export interface CausesGridProps {
  causes: Cause[];
}

/**
 * /causes grid of every cause: each card is rendered in its Desktop, Tablet and Phone variant
 * (one `ssr-variant` wrapper each), followed by the (empty) "Button Wrapper" of the export.
 * Framer "Causes Section" (section.framer-1hafz7y, hash 67742a520b).
 */
export function CausesGrid({ causes }: CausesGridProps) {
  return (
    <section className="framer-1hafz7y" data-framer-name="Causes Section">
      <div className="framer-1vyur4y" data-framer-name="Base Container">
        <div className="framer-128pwjy">
          {causes.map((cause) => (
            <Fragment key={cause.slug}>
              {VARIANT_WRAPPERS.map(([variant, wrapper]) => (
                <div key={variant} className={wrapper}>
                  <div className="framer-j6glvl-container" style={REVEAL_STYLE}>
                    <CauseCard cause={cause} variant={variant} sizes={CARD_SIZES} />
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
          <div className="framer-15ts5m9" data-framer-name="Button Wrapper">
            <div className="ssr-variant">
              <div className="framer-19agik3-container" style={REVEAL_STYLE}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
