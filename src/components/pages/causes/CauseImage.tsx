import type { Cause } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE } from "@/components/sections/framer-shared";

const IMAGE_SIZES =
  "(min-width: 1280px) max(100vw - 40px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(100vw - 40px, 1px), (max-width: 991.98px) max(100vw - 40px, 1px)";

export interface CauseImageProps {
  cause: Cause;
}

/**
 * Full-width cause image below the banner (the cause thumbnail).
 * Framer "Image Section" (section.framer-147tjyv, e.g. hash 1fa544d124).
 */
export function CauseImage({ cause }: CauseImageProps) {
  return (
    <section className="framer-147tjyv" data-framer-name="Image Section">
      <div className="framer-16r0d89" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div className="framer-64ccu5" style={REVEAL_STYLE}>
            <FramerBackgroundImage
              image={cause.image}
              sizes={IMAGE_SIZES}
              objectPosition="50% 50%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
