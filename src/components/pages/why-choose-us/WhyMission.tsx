import type { FramerImage, MissionPoint } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SlashLabel,
  SectionHeading,
} from "@/components/sections/framer-shared";
import { MissionAccordion } from "./MissionAccordion";

/** Copy and photo of the section as exported. */
export const WHY_MISSION = {
  label: "Our mission",
  heading: "To foster a culture of care, support, and service that uplifts every person",
  image: {
    src: "/images/iFyDTJXYFRHxHu5NHysACVcVVHY.jpg",
    alt: "Our Mission Image",
    width: 2957,
    height: 4435,
    srcSet:
      "/images/iFyDTJXYFRHxHu5NHysACVcVVHY-1.jpg 682w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY-2.jpg 1365w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY-3.jpg 2730w, /images/iFyDTJXYFRHxHu5NHysACVcVVHY.jpg 2957w",
  } satisfies FramerImage,
  /** `object-position` of the photo on desktop/tablet and on phone. */
  imagePosition: { desktop: "50% 30%", phone: "50% 15%" },
} as const;

const IMAGE_SIZES =
  "(min-width: 1280px) min(max((min(max(100vw, 1px), 1340px) - 160px) / 2, 1px), (min(max(100vw, 1px), 1340px) - 40px) * 0.35), (min-width: 992px) and (max-width: 1279.98px) min(max((min(max(100vw, 1px), 1340px) - 90px) / 2, 1px), 440px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

export interface WhyMissionProps {
  points: MissionPoint[];
  label?: string;
  heading?: string;
  image?: FramerImage;
  imagePosition?: { desktop: string; phone: string };
}

/**
 * "Our Mission Section" of /why-choose-us (hash 5e7a45b374, section.framer-w6mi76).
 *
 * Same markup as the home page's mission section (hash 18a6d574b9) except for every instance
 * class (base container, content wrapper, text content, label, heading, accordion container,
 * photo) and the breakpoint classes, so this page has its own component. The accordion is
 * the client component `MissionAccordion`.
 */
export function WhyMission({
  points,
  label = WHY_MISSION.label,
  heading = WHY_MISSION.heading,
  image = WHY_MISSION.image,
  imagePosition = WHY_MISSION.imagePosition,
}: WhyMissionProps) {
  return (
    <section className="framer-w6mi76" data-framer-name="Our Mission Section">
      <div className="framer-2r5sav" data-framer-name="Base Container">
        <div className="framer-xpibti" data-framer-name="Content Wrapper">
          <div className="framer-4vd2jg" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-4tmzn8-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <SectionHeading className="framer-v0kj5x" text={heading} />
          </div>
          <MissionAccordion points={points} />
        </div>
        <div className="ssr-variant hidden-e3ad3z">
          <div className="framer-7qqjo" style={REVEAL_STYLE}>
            <FramerBackgroundImage
              image={image}
              sizes={IMAGE_SIZES}
              objectPosition={imagePosition.desktop}
            />
          </div>
        </div>
        <div className="ssr-variant hidden-1ksiir2 hidden-7xpbrn">
          <div className="framer-7qqjo" style={REVEAL_STYLE}>
            <FramerBackgroundImage
              image={image}
              sizes={IMAGE_SIZES}
              objectPosition={imagePosition.phone}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
