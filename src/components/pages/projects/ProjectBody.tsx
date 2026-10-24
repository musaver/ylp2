import { Fragment } from "react";
import type { FramerImage, Project } from "@/lib/types";
import { RichText } from "@/components/sections/RichText";
import { FramerBackgroundImage, REVEAL_STYLE } from "@/components/sections/framer-shared";

/** Breakpoint classes of the project detail template (`hidden-*` hides that breakpoint). */
const BP = {
  desktop: "hidden-1pil0kk",
  tablet: "hidden-1aqwwul",
  phone: "hidden-1ezqwpy",
} as const;

/**
 * Instance wrappers of the two gallery images (Framer also writes the hash as `id`). The
 * export always has two; further images reuse the slots cyclically.
 */
const GALLERY_SLOTS = [
  { className: "framer-qijspm-container", id: "qijspm" },
  { className: "framer-1u48ghk-container", id: "1u48ghk" },
] as const;

const GALLERY_IMAGE_SIZES =
  "(min-width: 1280px) max(max((min(100vw - 40px, 1340px) - 70px) / 2, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((min(100vw - 40px, 1340px) - 70px) / 2, 1px), 1px), (max-width: 991.98px) max(max(min(100vw - 40px, 1340px) - 40px, 280px), 1px)";

type GalleryVariant = "desktop" | "tablet" | "phone";

const GALLERY_VARIANTS: Record<
  GalleryVariant,
  { wrapper: string; className: string; name: string }
> = {
  desktop: {
    wrapper: `ssr-variant ${BP.tablet} ${BP.phone}`,
    className: "framer-v-ch8jkl",
    name: "Desktop",
  },
  tablet: {
    wrapper: `ssr-variant ${BP.desktop} ${BP.phone}`,
    className: "framer-v-m6ppcj",
    name: "Tablet",
  },
  phone: {
    wrapper: `ssr-variant ${BP.tablet} ${BP.desktop}`,
    className: "framer-v-or3eah",
    name: "Phone",
  },
};

/** Framer's gallery image component (`framer-yITgI framer-ch8jkl`, zooms on hover via CSS). */
function GalleryImage({ image, variant }: { image: FramerImage; variant: GalleryVariant }) {
  const v = GALLERY_VARIANTS[variant];
  return (
    <div
      className={`framer-yITgI framer-ch8jkl ${v.className}`}
      data-framer-name={v.name}
      data-highlight="true"
      tabIndex={0}
      style={{
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="framer-yxhk2c" style={{ transform: "none" }}>
        <FramerBackgroundImage image={image} sizes={GALLERY_IMAGE_SIZES} />
      </div>
    </div>
  );
}

export interface ProjectBodyProps {
  project: Project;
}

/**
 * Project detail body: the rich text (desktop/tablet block and phone block) followed by the
 * "Image Gallery Block" with the project's gallery images.
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
        <div className="framer-1li95sp" data-framer-name="Image Gallery Block" style={REVEAL_STYLE}>
          {project.gallery.map((image, i) => {
            const slot = GALLERY_SLOTS[i % GALLERY_SLOTS.length]!;
            return (
              <Fragment key={`${i}-${image.src}`}>
                {(["desktop", "tablet", "phone"] as const).map((variant) => (
                  <div key={variant} className={GALLERY_VARIANTS[variant].wrapper}>
                    <div className={slot.className} id={slot.id}>
                      <GalleryImage image={image} variant={variant} />
                    </div>
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
