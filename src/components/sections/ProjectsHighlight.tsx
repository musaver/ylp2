import { CausesSection } from "@/components/sections/CausesSection";
import type { CauseCardItem } from "@/components/cards/CauseCard";
import "@/styles/templates/home.css";

export interface ProjectsHighlightProps {
  projects: CauseCardItem[];
  label?: string;
  heading?: string;
}

/**
 * The home page's projects block (Causes Section design, `variant="home"`). Its styles are
 * scoped under the home template class, so the `framer-9aa0D` wrapper lets other pages render
 * it with the same design.
 */
export function ProjectsHighlight({
  projects,
  label = "Our projects",
  heading = "Projects building knowledge, voice and community",
}: ProjectsHighlightProps) {
  return (
    <div className="framer-9aa0D" style={{ display: "contents" }}>
      <CausesSection
        className="framer-h6g2zt"
        causes={projects}
        variant="home"
        label={label}
        heading={heading}
        buttonLabel="View all projects"
        phoneButtonLabel="View all projects"
        basePath="/projects"
        ctaLabel="Learn more"
        phoneCardCount={projects.length}
      />
    </div>
  );
}
