import type { Project } from "@/lib/types";
import { ProjectListCard, type ProjectListCardVariant } from "@/components/cards/ProjectCard";
import { REVEAL_STYLE } from "@/components/sections/framer-shared";
import { withPositionedImage } from "./projectImage";

/** Breakpoint classes of the projects template (`hidden-*` hides that breakpoint). */
const BP = {
  desktop: "hidden-ljz9sa",
  tablet: "hidden-9ij01m",
  phone: "hidden-16ox5fh",
} as const;

/**
 * Per-position classes Framer generated for the six card slots: the row wrapper (with the
 * reveal style) and the card's instance wrapper. The export has six projects; further
 * projects reuse the slots cyclically (Left/Right alternation is preserved because the slot
 * count is even).
 */
const SLOTS = [
  { row: "framer-um3ooi", container: "framer-1iv1pe-container" },
  { row: "framer-1some8w", container: "framer-gbfxws-container" },
  { row: "framer-1fclp03", container: "framer-sa0owl-container" },
  { row: "framer-1qkuflm", container: "framer-c5igbo-container" },
  { row: "framer-1m0wilp", container: "framer-1akw7wb-container" },
  { row: "framer-140f4k", container: "framer-3rmwai-container" },
] as const;

export interface ProjectsGridProps {
  projects: Project[];
}

/**
 * /projects list: one row per project, alternating "Left" (even positions) and "Right" (odd
 * positions) card variants on desktop and tablet, with the single phone variant. Each row
 * renders the Desktop, Phone and Tablet variants in that order (as exported); every
 * thumbnail after the first is lazy-loaded.
 * Framer "Projects Section" (section.framer-2iguyn, hash bf2d270595).
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="framer-2iguyn" data-framer-name="Projects Section">
      <div className="framer-4gwfu0" data-framer-name="Base Container">
        <div className="framer-1krfcni" data-framer-name="Project Cards Wrapper">
          {projects.map((item, i) => {
            const project = withPositionedImage(item);
            const slot = SLOTS[i % SLOTS.length]!;
            const side = i % 2 === 0 ? "left" : "right";
            const desktop: ProjectListCardVariant = `desktop-${side}`;
            const tablet: ProjectListCardVariant = `tablet-${side}`;
            const loading = i > 0 ? "lazy" : undefined;
            return (
              <div key={project.slug} className={slot.row} style={REVEAL_STYLE}>
                <div className={`ssr-variant ${BP.phone} ${BP.tablet}`}>
                  <div className={slot.container}>
                    <ProjectListCard project={project} variant={desktop} loading={loading} />
                  </div>
                </div>
                <div className={`ssr-variant ${BP.tablet} ${BP.desktop}`}>
                  <div className={slot.container}>
                    <ProjectListCard project={project} variant="phone" loading={loading} />
                  </div>
                </div>
                <div className={`ssr-variant ${BP.phone} ${BP.desktop}`}>
                  <div className={slot.container}>
                    <ProjectListCard project={project} variant={tablet} loading={loading} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
