import type { CSSProperties } from "react";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";
import type { FramerImage } from "@/lib/types";

export interface Director {
  role: string;
  name: string;
  quote: string;
  text: string;
  image: FramerImage;
}

const DIRECTOR_IMAGE_SIZES =
  "(min-width: 1280px) min(max((max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 100px) / 2, 1px), 400px), (min-width: 992px) and (max-width: 1279.98px) min(max((max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 100px) / 2, 1px), 400px), (max-width: 991.98px) calc(max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 40px)";

/**
 * Responsive variants Framer exported for the director photo. `content/team.ts` stores the
 * photo without `width`/`height`/`srcSet`; they are filled in from here so the `<img>` stays
 * identical to the export (data values win when present).
 */
const EXPORT_IMAGE_VARIANTS: Record<string, Pick<FramerImage, "width" | "height" | "srcSet">> = {
  "/images/XAIefoVHcTy1J8jPN2fhtuIr5BM.jpg": {
    width: 2535,
    height: 3641,
    srcSet:
      "/images/XAIefoVHcTy1J8jPN2fhtuIr5BM-1.jpg 712w, /images/XAIefoVHcTy1J8jPN2fhtuIr5BM-2.jpg 1425w, /images/XAIefoVHcTy1J8jPN2fhtuIr5BM.jpg 2535w",
  },
};

function withExportVariants(image: FramerImage): FramerImage {
  const exported = EXPORT_IMAGE_VARIANTS[image.src];
  if (!exported || image.srcSet) return image;
  return {
    ...image,
    width: image.width > 0 ? image.width : exported.width,
    height: image.height > 0 ? image.height : exported.height,
    srcSet: exported.srcSet,
  };
}

const CENTER: CSSProperties = { "--framer-text-alignment": "center" };

/** The text elements of one breakpoint variant (role, name, quote, body). */
function directorParts({ director, centered }: { director: Director; centered: boolean }) {
  return {
    role: (
      <div
        className="framer-1j72ut8"
        data-framer-name="Body"
        data-framer-component-type="RichTextContainer"
        style={REVEAL_STYLE}
      >
        <p
          className="framer-text framer-styles-preset-1dpgexf"
          data-styles-preset="wUYf66_Db"
          dir="auto"
          style={
            centered
              ? { "--framer-text-alignment": "center", "--framer-text-color": TOKENS.blue }
              : { "--framer-text-color": TOKENS.blue }
          }
        >
          {director.role}
        </p>
      </div>
    ),
    name: (
      <div
        className="framer-5m6gc7"
        data-framer-name="Heading"
        data-framer-component-type="RichTextContainer"
        style={REVEAL_STYLE}
      >
        <h4
          className="framer-text framer-styles-preset-1y6kb77"
          data-styles-preset="nFmr2fOsK"
          dir="auto"
          style={centered ? CENTER : undefined}
        >
          {director.name}
        </h4>
      </div>
    ),
    quote: (
      <div
        className="framer-sv2783"
        data-framer-name="Body"
        data-framer-component-type="RichTextContainer"
        style={REVEAL_STYLE}
      >
        <p
          className="framer-text framer-styles-preset-1tti3hz"
          data-styles-preset="cr_P7grw1"
          dir="auto"
          style={centered ? CENTER : undefined}
        >
          {director.quote}
        </p>
      </div>
    ),
    text: (
      <div
        className="framer-1j125dz"
        data-framer-name="Body"
        data-framer-component-type="RichTextContainer"
        style={REVEAL_STYLE}
      >
        <p
          className="framer-text framer-styles-preset-1dpgexf"
          data-styles-preset="wUYf66_Db"
          dir="auto"
          style={centered ? CENTER : undefined}
        >
          {director.text}
        </p>
      </div>
    ),
  };
}

/**
 * Framer "Director Section" (`section.framer-4pga0b`, hash 30850b30eb): director photo, role,
 * name, quote and text. Desktop/tablet and phone (centred) variants are rendered side by side
 * in `ssr-variant` wrappers as in the export.
 */
export function DirectorSection({ director }: { director: Director }) {
  const wide = directorParts({ director, centered: false });
  const phone = directorParts({ director, centered: true });
  return (
    <section className="framer-4pga0b" data-framer-name="Director Section">
      <div className="framer-1v2qply" data-framer-name="Base Container">
        <div className="framer-1wptyhc" data-framer-name="Content Block">
          <div className="ssr-variant">
            <div className="framer-1coxg64" style={REVEAL_STYLE}>
              <FramerBackgroundImage
                image={withExportVariants(director.image)}
                sizes={DIRECTOR_IMAGE_SIZES}
                objectPosition="center top"
              />
            </div>
          </div>
          <div className="framer-crsdz4" data-framer-name="Text Content Wrapper">
            <div className="framer-dpcjhc" data-framer-name="Text Content">
              <div className="ssr-variant hidden-1t6nr2y">{wide.role}</div>
              <div className="ssr-variant hidden-qkqqii hidden-ccefmb">{phone.role}</div>
              <div className="ssr-variant hidden-1t6nr2y">{wide.name}</div>
              <div className="ssr-variant hidden-qkqqii hidden-ccefmb">{phone.name}</div>
            </div>
            <div className="ssr-variant hidden-1t6nr2y">{wide.quote}</div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">{phone.quote}</div>
            <div className="ssr-variant hidden-1t6nr2y">{wide.text}</div>
            <div className="ssr-variant hidden-qkqqii hidden-ccefmb">{phone.text}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
