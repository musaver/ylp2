import type { TeamMember } from "@/lib/types";
import {
  TOKENS,
  FramerBackgroundImage,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's team member card (`framer-LEsyU framer-1pr8c47`), converted from the "Team
 * Members Cards Wrapper" of the leadership "Our Team Section" (hash 7d5d853d07); the same
 * component is used in the about-us "Volunteers Section" (87112bb412). Photo, name with a
 * decorative round icon, and bio. Renders the component root (`<div>`) only; the page
 * section places the instance wrapper (`div.framer-1lf2uak-container` …) and the
 * `ssr-variant` breakpoint wrappers.
 *
 * Page differences are exposed as props: the leadership page uses `sizes` with a 50px
 * minimum (default), about-us the 1px variant (`TEAM_MEMBER_CARD_SIZES_ABOUT`), and
 * about-us' third card (hidden on phone) has `loading="lazy"` and the "no phone" sizes
 * (`TEAM_MEMBER_CARD_SIZES_ABOUT_NO_PHONE`).
 */
export interface TeamMemberCardProps {
  member: TeamMember;
  variant: CardVariant;
  /** Literal `sizes` attribute of the photo for this placement. */
  sizes?: string;
  loading?: "lazy";
}

export const TEAM_MEMBER_CARD_SIZES =
  "(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 100px) / 3, 50px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 80px) / 3, 50px), (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 280px)";

export const TEAM_MEMBER_CARD_SIZES_ABOUT =
  "(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 100px) / 3, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 80px) / 3, 1px), (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 280px)";

export const TEAM_MEMBER_CARD_SIZES_ABOUT_NO_PHONE =
  "(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 100px) / 3, 1px), (max-width: 991.98px) max((min(max(100vw, 1px), 1340px) - 100px) / 3, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 80px) / 3, 1px)";

const VARIANT_CLASS: Record<CardVariant, string> = {
  desktop: "framer-v-1pr8c47",
  tablet: "framer-v-oiu2ti",
  phone: "framer-v-wln5pp",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

/** Decorative round icon next to the name (remote SVG from the export, same on every card). */
const NAME_ICON = {
  src: "/images/remote/DkwFWSfxOGrjeGDrGCLmAU3v7g.svg",
  alt: "",
  width: 80,
  height: 80,
};

export function TeamMemberCard({
  member,
  variant,
  sizes = TEAM_MEMBER_CARD_SIZES,
  loading,
}: TeamMemberCardProps) {
  return (
    <div
      className={`framer-LEsyU framer-sPkdn framer-cYxwf framer-1pr8c47 ${VARIANT_CLASS[variant]}`}
      data-framer-name={VARIANT_NAME[variant]}
      style={{ width: "100%" }}
    >
      <div
        className="framer-1wzywxs"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <FramerBackgroundImage
          image={member.image}
          sizes={sizes}
          loading={loading}
          objectPosition="center top"
        />
      </div>
      <div
        className="framer-19z4udl"
        data-framer-name="Text Content"
        style={{
          backgroundColor: TOKENS.surface,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-1riurrq" data-framer-name="Title Wrapper">
          <div
            className="framer-ks4ggr"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              transform: "none",
            }}
          >
            <h4
              className="framer-text framer-styles-preset-1y6kb77"
              data-styles-preset="nFmr2fOsK"
              dir="auto"
            >
              {member.name}
            </h4>
          </div>
          <div
            className="framer-18umww6"
            data-framer-name="Icon"
            style={{
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
            }}
          >
            <FramerBackgroundImage
              image={NAME_ICON}
              loading={variant === "phone" ? undefined : "lazy"}
            />
          </div>
        </div>
        <div
          className="framer-ihq4bi"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
          }}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
          >
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
