import Link from "next/link";
import type { Project } from "@/lib/types";
import {
  TOKENS,
  FramerBackgroundImage,
  OutlineButtonLink,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's project card of the "Project Section" ("Similar projects") on the project detail
 * template (hash 4ec924f6da), used on /projects/[slug]. Renders the component root
 * (`div.framer-dKMmv`) only; `ProjectsSection` places the instance wrapper and the
 * `ssr-variant` breakpoint wrappers. The dark text block is hidden (`opacity: 0; scale(.8)`)
 * on desktop/tablet and revealed on hover by the captured CSS; on phone it is always shown.
 */
export interface ProjectCardProps {
  project: Project;
  variant: CardVariant;
}

export const PROJECT_CARD_SIZES =
  "(min-width: 1280px) max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max(100vw - 40px, 1px), 1340px) - 40px, 1px), (max-width: 991.98px) max(min(max(100vw - 40px, 1px), 1340px) - 40px, 280px)";

const VARIANT_CLASS: Record<CardVariant, string> = {
  desktop: "framer-v-1otm5xy",
  tablet: "framer-v-dxitym",
  phone: "framer-v-1iddyhx",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  return (
    <div
      className={`framer-dKMmv framer-NqGwh framer-s26el framer-CXUbw framer-1otm5xy ${VARIANT_CLASS[variant]}`}
      data-framer-name={VARIANT_NAME[variant]}
      style={{
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <Link
        className="framer-1v3u9c8 framer-14oq41g"
        href={href}
        style={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          transform: "none",
        }}
      >
        <FramerBackgroundImage image={project.image} sizes={PROJECT_CARD_SIZES} />
      </Link>
      <div
        className="framer-1w4lijh"
        data-framer-name="Text Container"
        style={{
          backgroundColor: TOKENS.dark,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          opacity: variant === "phone" ? "1" : "0",
          transform: variant === "phone" ? "none" : "scale(0.8)",
        }}
      >
        <div
          className="framer-1sxiowe"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={{ "--extracted-a0htzi": TOKENS.white, transform: "none" }}
        >
          <h3
            className="framer-text framer-styles-preset-16qewnh"
            data-styles-preset="GQy8hYI5T"
            dir="auto"
            style={{ "--framer-text-color": `var(--extracted-a0htzi, ${TOKENS.white})` }}
          >
            <Link
              className="framer-text framer-styles-preset-c97ufc"
              data-styles-preset="pxsIdl8oj"
              href={href}
            >
              {project.title}
            </Link>
          </h3>
        </div>
        <div
          className="framer-18f66qh"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{ transform: "none" }}
        >
          <p
            className="framer-text framer-styles-preset-184kbjj"
            data-styles-preset="jo34BIwbe"
            dir="auto"
          >
            {project.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Variants of the project list card: the /projects grid alternates "Left"/"Right" columns
 * on desktop and tablet and has a single phone variant.
 */
export type ProjectListCardVariant =
  "desktop-left" | "desktop-right" | "tablet-left" | "tablet-right" | "phone";

export interface ProjectListCardProps {
  project: Project;
  variant: ProjectListCardVariant;
  /** Framer lazy-loads every thumbnail after the first card. */
  loading?: "lazy";
}

export const PROJECT_LIST_CARD_SIZES =
  "(min-width: 1280px) max(min(max((calc(min(100vw - 40px, 1340px) - 40px) - 80px) / 2, 1px), 640px), 1px), (max-width: 991.98px) max(max(min(calc(min(100vw - 40px, 1340px) - 40px), 640px), 280px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((calc(min(100vw - 40px, 1340px) - 40px) - 60px) / 2, 1px), 640px), 1px)";

const LIST_VARIANT: Record<ProjectListCardVariant, { className: string; name: string }> = {
  "desktop-left": { className: "framer-v-k56tuq", name: "Desktop Left" },
  "desktop-right": { className: "framer-v-1enih2c", name: "Desktop Right" },
  "tablet-left": { className: "framer-v-1d0lly9", name: "Tablet Left" },
  "tablet-right": { className: "framer-v-1qap1qa", name: "Tablet Right" },
  phone: { className: "framer-v-1v6gvf0", name: "Phone" },
};

/**
 * Framer's project card of the /projects list page ("Projects Section", hash bf2d270595,
 * `framer-UzfxU framer-k56tuq`): thumbnail link, title link, grey excerpt and a "Read more"
 * outline button. Renders the component root only; the list page places the per-row
 * wrappers (`div.framer-um3ooi` …), the instance wrappers (`div.framer-1iv1pe-container` …)
 * and the `ssr-variant` breakpoint wrappers.
 */
export function ProjectListCard({ project, variant, loading }: ProjectListCardProps) {
  const href = `/projects/${project.slug}`;
  const phone = variant === "phone";
  const v = LIST_VARIANT[variant];
  return (
    <div
      className={`framer-UzfxU framer-NqGwh framer-k7set framer-5EAfC framer-CXUbw framer-k56tuq ${v.className}`}
      data-framer-name={v.name}
      style={{ width: "100%" }}
    >
      <Link
        className="framer-1a5yxyu framer-it9u73"
        data-framer-name="Image Wrapper"
        href={href}
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-1vms35v">
          <FramerBackgroundImage
            image={project.image}
            sizes={PROJECT_LIST_CARD_SIZES}
            loading={loading}
          />
        </div>
      </Link>
      <div className="framer-1opx9hn" data-framer-name="Text Container Wrapper">
        <div className="framer-1jt0i0l" data-framer-name="Text Container">
          <div
            className="framer-1oqeqay"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <h3
              className="framer-text framer-styles-preset-16qewnh"
              data-styles-preset="GQy8hYI5T"
              dir="auto"
            >
              <Link
                className={`framer-text ${phone ? "framer-styles-preset-egj4q0" : "framer-styles-preset-9530i4"}`}
                data-styles-preset={phone ? "d_z7D8QCz" : "CkJaGi78s"}
                href={href}
              >
                {project.title}
              </Link>
            </h3>
          </div>
          <div
            className="framer-1vpo722"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{ "--extracted-r6o4lv": TOKENS.grey, transform: "none" }}
          >
            <p
              className="framer-text framer-styles-preset-184kbjj"
              data-styles-preset="jo34BIwbe"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.grey})` }}
            >
              {project.excerpt}
            </p>
          </div>
        </div>
        <div className="framer-19a7hsq-container">
          <OutlineButtonLink
            href={href}
            label="Read more"
            variant={phone ? "phone" : "desktop"}
            iconColor={TOKENS.dark}
          />
        </div>
      </div>
    </div>
  );
}
