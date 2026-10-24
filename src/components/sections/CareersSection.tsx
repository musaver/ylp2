import { Fragment } from "react";
import type { Job } from "@/lib/types";
import { JobCard } from "@/components/cards/JobCard";
import { REVEAL_STYLE, SlashLabel, OutlineButtonLink, SectionHeading } from "./framer-shared";

/**
 * Framer's "More opportunities / Join our mission" block of the career detail template
 * ("Career Section", hash 8933cb7fb2, section.framer-hy0niv), used on /career/[slug]:
 * label, heading (no breakpoint split in this export), "All job positions" outline button
 * and job cards, each rendered as Desktop, Phone and Tablet variant (in that order) in its
 * own `ssr-variant` block.
 */
export interface CareersSectionProps {
  /** Framer's section class ("framer-hy0niv"). */
  className: string;
  jobs: Job[];
  heading?: string;
  /** Text of the "/ … /" label. */
  label?: string;
  buttonLabel?: string;
}

const BP = { desktop: "hidden-6z3la4", tablet: "hidden-pi8rq8", phone: "hidden-vs04g8" } as const;

export function CareersSection({
  className,
  jobs,
  heading = "Join our mission",
  label = "More opportunities",
  buttonLabel = "All job positions",
}: CareersSectionProps) {
  return (
    <section className={className} data-framer-name="Career Section">
      <div className="framer-7kwe3v" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div
            className={`framer-1vcdrqr-container ${BP.desktop} ${BP.tablet}`}
            style={REVEAL_STYLE}
          >
            <OutlineButtonLink href="/career" label={buttonLabel} variant="phone" />
          </div>
        </div>
        <div className="framer-p86ai6" data-framer-name="Text Content Wrapper">
          <div className="framer-nofc1v" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-1of6c2c-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <SectionHeading className="framer-12c2swq" text={heading} />
          </div>
          <div className="ssr-variant">
            <div className={`framer-13t3soi-container ${BP.phone}`} style={REVEAL_STYLE}>
              <OutlineButtonLink href="/career" label={buttonLabel} variant="desktop" />
            </div>
          </div>
        </div>
        <div className="framer-1oyehe3">
          {jobs.map((job) => (
            <Fragment key={job.slug}>
              <div className={`ssr-variant ${BP.phone} ${BP.tablet}`}>
                <div className="framer-unfftz-container" style={REVEAL_STYLE}>
                  <JobCard job={job} variant="desktop" />
                </div>
              </div>
              <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
                <div className="framer-unfftz-container" style={REVEAL_STYLE}>
                  <JobCard job={job} variant="phone" />
                </div>
              </div>
              <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
                <div className="framer-unfftz-container" style={REVEAL_STYLE}>
                  <JobCard job={job} variant="tablet" />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
