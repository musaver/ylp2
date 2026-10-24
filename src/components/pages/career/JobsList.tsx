import { JobCard } from "@/components/cards/JobCard";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { Job } from "@/lib/types";

/** `hidden-*` classes of the careers template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-8u761u", tablet: "hidden-1qj1naa", phone: "hidden-9qtchr" } as const;

/** Card breakpoint variants in export order, with the classes that hide the other two. */
const CARD_VARIANTS = [
  { variant: "desktop", hidden: `${BP.tablet} ${BP.phone}` },
  { variant: "tablet", hidden: `${BP.desktop} ${BP.phone}` },
  { variant: "phone", hidden: `${BP.tablet} ${BP.desktop}` },
] as const;

export interface JobsListProps {
  jobs: Job[];
}

/**
 * Framer's "Career Section" of /career (hash 1281c0b734, section.framer-12vrcit): every open
 * position as a job card (Desktop, Tablet and Phone variant per job, each in its own
 * `ssr-variant` wrapper), followed by Framer's empty "Button Wrapper".
 */
export function JobsList({ jobs }: JobsListProps) {
  return (
    <section className="framer-12vrcit" data-framer-name="Career Section">
      <div className="framer-ob6fj6" data-framer-name="Base Container">
        <div className="framer-17dtwoe">
          {jobs.flatMap((job) =>
            CARD_VARIANTS.map(({ variant, hidden }) => (
              <div key={`${job.slug}-${variant}`} className={`ssr-variant ${hidden}`}>
                <div className="framer-eau3or-container" style={REVEAL_STYLE}>
                  <JobCard job={job} variant={variant} />
                </div>
              </div>
            )),
          )}
          <div className="framer-1s16flh" data-framer-name="Button Wrapper">
            <div className="ssr-variant">
              <div className="framer-kvgd7k-container" style={REVEAL_STYLE}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
