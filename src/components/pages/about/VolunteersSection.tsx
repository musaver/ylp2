import type { NavLink, TeamMember } from "@/lib/types";
import {
  REVEAL_STYLE,
  OutlineButtonLink,
  SectionHeading,
  SlashLabel,
} from "@/components/sections/framer-shared";
import {
  TeamMemberCard,
  TEAM_MEMBER_CARD_SIZES_ABOUT,
  TEAM_MEMBER_CARD_SIZES_ABOUT_NO_PHONE,
} from "@/components/cards/TeamMemberCard";

/**
 * "People who care": Framer "Volunteers Section" (hash 87112bb412, section.framer-mla7o5) of
 * /about-us. "/ Our volunteers /" label, heading, "Join us" button and three team member
 * cards. The third card is hidden on phone (no phone variant, lazy photo, "no phone" sizes).
 */
export interface VolunteersSectionProps {
  /** The three members shown (Framer shows the first three of the team). */
  members: TeamMember[];
  label?: string;
  heading?: string;
  button?: NavLink;
}

/** Instance wrapper classes of the three cards, in order. */
const CARD_CONTAINERS = [
  "framer-1b6xs9x-container",
  "framer-clfo7b-container",
  "framer-qbbh7l-container",
] as const;

function MemberCards({ member, index }: { member: TeamMember; index: number }) {
  const container = CARD_CONTAINERS[index % CARD_CONTAINERS.length];
  if (index === 2) {
    // Third card: desktop + tablet only.
    return (
      <>
        <div className="ssr-variant hidden-1v22ssx">
          <div className={`${container} hidden-tenz1j`} style={REVEAL_STYLE}>
            <TeamMemberCard
              member={member}
              variant="desktop"
              sizes={TEAM_MEMBER_CARD_SIZES_ABOUT_NO_PHONE}
              loading="lazy"
            />
          </div>
        </div>
        <div className="ssr-variant hidden-1ys3drf hidden-tenz1j">
          <div className={`${container} hidden-tenz1j`} style={REVEAL_STYLE}>
            <TeamMemberCard
              member={member}
              variant="tablet"
              sizes={TEAM_MEMBER_CARD_SIZES_ABOUT_NO_PHONE}
              loading="lazy"
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="ssr-variant hidden-1v22ssx hidden-tenz1j">
        <div className={container} style={REVEAL_STYLE}>
          <TeamMemberCard member={member} variant="desktop" sizes={TEAM_MEMBER_CARD_SIZES_ABOUT} />
        </div>
      </div>
      <div className="ssr-variant hidden-1ys3drf hidden-tenz1j">
        <div className={container} style={REVEAL_STYLE}>
          <TeamMemberCard member={member} variant="tablet" sizes={TEAM_MEMBER_CARD_SIZES_ABOUT} />
        </div>
      </div>
      <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
        <div className={container} style={REVEAL_STYLE}>
          <TeamMemberCard member={member} variant="phone" sizes={TEAM_MEMBER_CARD_SIZES_ABOUT} />
        </div>
      </div>
    </>
  );
}

export function VolunteersSection({
  members,
  label = "Our volunteers",
  heading = "People who care",
  button = { label: "Join us", href: "/career" },
}: VolunteersSectionProps) {
  return (
    <section className="framer-mla7o5" data-framer-name="Volunteers Section">
      <div className="framer-qy83r2" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div
            className="framer-ji6q5i-container hidden-1ys3drf hidden-1v22ssx"
            style={REVEAL_STYLE}
          >
            <OutlineButtonLink
              href={button.href}
              label={button.label}
              variant="phone"
              theme="white"
            />
          </div>
        </div>
        <div className="framer-ojcoe" data-framer-name="Text Container Wrapper">
          <div className="framer-1233hco" data-framer-name="Text Container Wrapper">
            <div className="ssr-variant">
              <div className="framer-zp41rh-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <div className="ssr-variant hidden-tenz1j">
              <SectionHeading className="framer-1wesr52" text={heading} />
            </div>
            <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
              <SectionHeading className="framer-1wesr52" text={heading} centered />
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-14xyi23-container hidden-tenz1j" style={REVEAL_STYLE}>
              <OutlineButtonLink
                href={button.href}
                label={button.label}
                variant="desktop"
                theme="white"
              />
            </div>
          </div>
        </div>
        <div className="framer-imsl09" data-framer-name="Team Members Cards Wrapper">
          {members.slice(0, 3).map((member, i) => (
            <MemberCards key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
