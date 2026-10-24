import type { PositionedImage } from "@/components/sections/framer-shared";
import type { Project } from "@/lib/types";

/**
 * Per-project `object-position` of the project thumbnail. Every thumbnail is centred except
 * the portrait "YouthLink Media" photo, which is anchored near the top so the face stays in
 * frame on both the /projects list card and the detail banner. `Project.image` has no
 * position field, so the value is kept here, keyed by slug.
 */
const IMAGE_POSITION: Partial<Record<string, string>> = {
  "youthlink-media": "50% 20%",
};

/** The project thumbnail with its exported `object-position` (when it is not "center"). */
export function projectImage(project: Project): PositionedImage {
  const objectPosition = IMAGE_POSITION[project.slug];
  return objectPosition ? { ...project.image, objectPosition } : project.image;
}

/** `project` with its thumbnail carrying the exported `object-position`. */
export function withPositionedImage(project: Project): Project {
  return { ...project, image: projectImage(project) };
}
