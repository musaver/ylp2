import type { Project } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import { projectImage } from "./projectImage";

const BANNER_IMAGE_SIZES =
  "(min-width: 1280px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px), (min-width: 992px) and (max-width: 1279.98px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px), (max-width: 991.98px) calc(min(max(100vw - 40px, 1px), 1340px) - 40px)";

export interface ProjectBannerProps {
  project: Project;
}

/**
 * Project detail banner: centred title and description above the full-width project image.
 * Framer "Project Details Banner Section" (section.framer-1b1p9ox, e.g. hash da4451c998).
 */
export function ProjectBanner({ project }: ProjectBannerProps) {
  return (
    <section className="framer-1b1p9ox" data-framer-name="Project Details Banner Section">
      <div className="framer-1q6udzf" data-framer-name="Base Container">
        <div className="framer-1fh7flh" data-framer-name="Text Container">
          <div
            className="framer-1rdnpu6"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <h1
              className="framer-text framer-styles-preset-1iwg8n2"
              data-styles-preset="fFbEgCrjK"
              dir="auto"
              style={{ "--framer-text-alignment": "center" }}
            >
              {project.title}
            </h1>
          </div>
          <div
            className="framer-10tgx3r"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={REVEAL_STYLE}
          >
            <p
              className="framer-text framer-styles-preset-184kbjj"
              data-styles-preset="jo34BIwbe"
              dir="auto"
              style={{
                "--framer-text-alignment": "center",
                "--framer-text-color": TOKENS.grey,
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-1uiofjs" style={REVEAL_STYLE}>
            <FramerBackgroundImage image={projectImage(project)} sizes={BANNER_IMAGE_SIZES} />
          </div>
        </div>
      </div>
    </section>
  );
}
