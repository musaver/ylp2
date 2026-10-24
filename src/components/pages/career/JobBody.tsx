import { RichText } from "@/components/sections/RichText";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import type { Job } from "@/lib/types";

/** `hidden-*` classes of the career detail template (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
const BP = { desktop: "hidden-6z3la4", tablet: "hidden-pi8rq8", phone: "hidden-vs04g8" } as const;

export interface JobBodyProps {
  job: Job;
}

/**
 * Career detail body: the job description (shared `RichText`, variant "career"), rendered once
 * in the desktop/tablet block and once in the phone block.
 * Framer "Rich Text Section" (section.framer-6ztvbe, e.g. hash 586b44d0a9).
 */
export function JobBody({ job }: JobBodyProps) {
  return (
    <section className="framer-6ztvbe" data-framer-name="Rich Text Section">
      <div className="framer-1oq44sq" data-framer-name="Base Container">
        <div className={`ssr-variant ${BP.phone}`}>
          <div
            className="framer-2hhx3a"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={job.body} variant="career" breakpoint="desktop" />
          </div>
        </div>
        <div className={`ssr-variant ${BP.desktop} ${BP.tablet}`}>
          <div
            className="framer-2hhx3a"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={job.body} variant="career" breakpoint="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
