import type { Project } from "@/lib/types";
import { RichText } from "@/components/sections/RichText";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";

/** Breakpoint classes of the project detail template (`hidden-*` hides that breakpoint). */
const BP = {
  desktop: "hidden-1pil0kk",
  tablet: "hidden-1aqwwul",
  phone: "hidden-1ezqwpy",
} as const;

export interface ProjectBodyProps {
  project: Project;
}

/**
 * Project detail body: the rich text (desktop/tablet block and phone block).
 * Framer "Project Rich Text Section" (section.framer-1xjrq4c, e.g. hash 178f7f7c53).
 */
export function ProjectBody({ project }: ProjectBodyProps) {
  return (
    <section className="framer-1xjrq4c" data-framer-name="Project Rich Text Section">
      <div className="framer-pamlvc" data-framer-name="Base Container">
        <div className={`ssr-variant ${BP.phone}`}>
          <div
            className="framer-1hbl3wk"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={project.body} variant="project" breakpoint="desktop" />
          </div>
        </div>
        <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
          <div
            className="framer-1hbl3wk"
            data-framer-name="Content"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <RichText blocks={project.body} variant="project" breakpoint="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
