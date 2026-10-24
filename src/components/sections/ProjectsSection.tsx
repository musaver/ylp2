import { Fragment } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { REVEAL_STYLE, SlashLabel, OutlineButtonLink, SectionHeading } from "./framer-shared";

/**
 * Framer's "Similar projects" block of the project detail template ("Project Section",
 * hash 4ec924f6da, section.framer-6rnewy), used on /projects/[slug]: label, heading,
 * "All projects" outline button and two project cards, each rendered as Desktop, Tablet
 * and Phone variant in its own `ssr-variant` block.
 */
export interface ProjectsSectionProps {
  /** Framer's section class ("framer-6rnewy"). */
  className: string;
  projects: Project[];
  heading?: string;
  /** Text of the "/ … /" label. */
  label?: string;
  buttonLabel?: string;
}

const BP = {
  desktop: "hidden-1pil0kk",
  tablet: "hidden-1aqwwul",
  phone: "hidden-1ezqwpy",
} as const;

export function ProjectsSection({
  className,
  projects,
  heading = "Creating change, uplifting lives",
  label = "Similar projects",
  buttonLabel = "All projects",
}: ProjectsSectionProps) {
  return (
    <section className={className} data-framer-name="Project Section">
      <div className="framer-144ye80" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div
            className={`framer-1nxt5ga-container ${BP.desktop} ${BP.tablet}`}
            style={REVEAL_STYLE}
          >
            <OutlineButtonLink href="/projects" label={buttonLabel} variant="phone" />
          </div>
        </div>
        <div className="framer-18bhjvz" data-framer-name="Text Content Wrapper">
          <div className="framer-ta3el3" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-wypjec-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <div className={`ssr-variant ${BP.phone}`}>
              <SectionHeading className="framer-bp7t3k" text={heading} />
            </div>
            <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
              <SectionHeading className="framer-bp7t3k" text={heading} centered />
            </div>
          </div>
          <div className="ssr-variant">
            <div className={`framer-6mphec-container ${BP.phone}`} style={REVEAL_STYLE}>
              <OutlineButtonLink href="/projects" label={buttonLabel} variant="desktop" />
            </div>
          </div>
        </div>
        <div className="framer-42cdas">
          {projects.map((project) => (
            <Fragment key={project.slug}>
              <div className={`ssr-variant ${BP.tablet} ${BP.phone}`}>
                <div className="framer-y5rlox-container" style={REVEAL_STYLE}>
                  <ProjectCard project={project} variant="desktop" />
                </div>
              </div>
              <div className={`ssr-variant ${BP.desktop} ${BP.phone}`}>
                <div className="framer-y5rlox-container" style={REVEAL_STYLE}>
                  <ProjectCard project={project} variant="tablet" />
                </div>
              </div>
              <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
                <div className="framer-y5rlox-container" style={REVEAL_STYLE}>
                  <ProjectCard project={project} variant="phone" />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
