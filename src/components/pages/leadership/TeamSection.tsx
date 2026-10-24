import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import {
  REVEAL_STYLE,
  SectionHeading,
  SlashLabel,
  type CardVariant,
} from "@/components/sections/framer-shared";
import type { FramerImage, TeamMember } from "@/lib/types";

/** Instance wrapper class of each card slot, in order (the export has 6 members). */
const CARD_CONTAINER_CLASSES = [
  "framer-1lf2uak-container",
  "framer-1gbpuoa-container",
  "framer-1lnn7mz-container",
  "framer-3wzdq-container",
  "framer-1lbl3gl-container",
  "framer-1k2cdsj-container",
] as const;

/** `ssr-variant` wrapper classes per breakpoint variant of a card. */
const VARIANT_WRAPPERS: { variant: CardVariant; className: string }[] = [
  { variant: "desktop", className: "ssr-variant hidden-qkqqii hidden-1t6nr2y" },
  { variant: "tablet", className: "ssr-variant hidden-1t6nr2y hidden-ccefmb" },
  { variant: "phone", className: "ssr-variant hidden-qkqqii hidden-ccefmb" },
];

/**
 * Responsive variants Framer exported for the team photos. `content/team.ts` stores the
 * photos without `width`/`height`/`srcSet`; they are filled in from here so every `<img>`
 * stays identical to the export (data values win when present).
 */
const EXPORT_IMAGE_VARIANTS: Record<string, Pick<FramerImage, "width" | "height" | "srcSet">> = {
  "/images/UuMeFpWU2BM8d2yKfxI9AaeDL8.jpg": {
    width: 2957,
    height: 4258,
    srcSet:
      "/images/UuMeFpWU2BM8d2yKfxI9AaeDL8.jpg 711w, /images/UuMeFpWU2BM8d2yKfxI9AaeDL8-1.jpg 1422w, /images/UuMeFpWU2BM8d2yKfxI9AaeDL8-2.jpg 2844w, /images/UuMeFpWU2BM8d2yKfxI9AaeDL8.jpg https://framerusercontent.com/images/UuMeFpWU2BM8d2yKfxI9AaeDL8.jpg?width=2957&height=4258",
  },
  "/images/Txdcj1Kbc3FGHMXMi2olu8n0w4.jpg": {
    width: 2510,
    height: 3702,
    srcSet:
      "/images/Txdcj1Kbc3FGHMXMi2olu8n0w4-1.jpg 694w, /images/Txdcj1Kbc3FGHMXMi2olu8n0w4-2.jpg 1388w, /images/Txdcj1Kbc3FGHMXMi2olu8n0w4.jpg 2510w",
  },
  "/images/AEDIcdRbuUg2GGdTb04cfBsRD68.jpg": {
    width: 2422,
    height: 5486,
    srcSet:
      "/images/AEDIcdRbuUg2GGdTb04cfBsRD68-1.jpg 904w, /images/AEDIcdRbuUg2GGdTb04cfBsRD68-2.jpg 1808w, /images/AEDIcdRbuUg2GGdTb04cfBsRD68.jpg 2422w",
  },
  "/images/5LqLyR5NN8Hg3LV9goxn6dqoksU.jpg": {
    width: 3346,
    height: 5315,
    srcSet:
      "/images/5LqLyR5NN8Hg3LV9goxn6dqoksU-1.jpg 644w, /images/5LqLyR5NN8Hg3LV9goxn6dqoksU-2.jpg 1289w, /images/5LqLyR5NN8Hg3LV9goxn6dqoksU-3.jpg 2578w, /images/5LqLyR5NN8Hg3LV9goxn6dqoksU.jpg 3346w",
  },
  "/images/EHOhhaCyEbeLJOl5qLUIuuvU8.jpg": {
    width: 2396,
    height: 3534,
    srcSet:
      "/images/EHOhhaCyEbeLJOl5qLUIuuvU8-1.jpg 694w, /images/EHOhhaCyEbeLJOl5qLUIuuvU8-2.jpg 1388w, /images/EHOhhaCyEbeLJOl5qLUIuuvU8.jpg 2396w",
  },
  "/images/lZHZ1LueUokV2lazvWI0w4GEE.jpg": {
    width: 2291,
    height: 3446,
    srcSet:
      "/images/lZHZ1LueUokV2lazvWI0w4GEE-1.jpg 680w, /images/lZHZ1LueUokV2lazvWI0w4GEE-2.jpg 1361w, /images/lZHZ1LueUokV2lazvWI0w4GEE.jpg 2291w",
  },
};

function withExportVariants(member: TeamMember): TeamMember {
  const { image } = member;
  const exported = EXPORT_IMAGE_VARIANTS[image.src];
  if (!exported || image.srcSet) return member;
  return {
    ...member,
    image: {
      ...image,
      width: image.width > 0 ? image.width : exported.width,
      height: image.height > 0 ? image.height : exported.height,
      srcSet: exported.srcSet,
    },
  };
}

export interface TeamSectionProps {
  members: TeamMember[];
  label?: string;
  heading?: string;
}

/**
 * Framer "Our Team Section" (`section.framer-1xvb0j6`, hash 7d5d853d07): "/ Our team /"
 * label, "People who care" heading and the grid of `TeamMemberCard`s. Each member is rendered
 * as desktop, tablet and phone card variants inside its own instance wrapper.
 */
export function TeamSection({
  members,
  label = "Our team",
  heading = "People who care",
}: TeamSectionProps) {
  return (
    <section className="framer-1xvb0j6" data-framer-name="Our Team Section">
      <div className="framer-1t58z7u" data-framer-name="Base Container">
        <div className="framer-1e9l8x5" data-framer-name="Text Container">
          <div className="ssr-variant">
            <div className="framer-167z60j-container" style={REVEAL_STYLE}>
              <SlashLabel text={label} />
            </div>
          </div>
          <SectionHeading className="framer-cyada2" text={heading} centered />
        </div>
        <div className="framer-1mw3fst" data-framer-name="Team Members Cards Wrapper">
          {members.map((member, index) => {
            const containerClass = CARD_CONTAINER_CLASSES[index % CARD_CONTAINER_CLASSES.length];
            const data = withExportVariants(member);
            return VARIANT_WRAPPERS.map(({ variant, className }) => (
              <div key={`${member.name}-${variant}`} className={className}>
                <div className={containerClass} style={REVEAL_STYLE}>
                  <TeamMemberCard member={data} variant={variant} />
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
}
