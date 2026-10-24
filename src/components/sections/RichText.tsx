import type { CSSProperties } from "react";
import type { RichBlock } from "@/lib/types";
import { TOKENS, FramerBackgroundImage, type BreakpointClasses } from "./framer-shared";

/**
 * Framer's rich-text body of the detail page templates, converted from the "Rich Text
 * Section" of each template:
 * - cause detail (hash 99d25cdc68, section.framer-yxj8ce) – /causes/[slug]
 * - career detail (hash 586b44d0a9, section.framer-6ztvbe) – /career/[slug]
 * - project detail (hash 178f7f7c53 / a24dab56c1, section.framer-1xjrq4c) – /projects/[slug]
 * - resource detail (hash 5ed927f29e / f29c8cfeb9, section.framer-1catemq) – /resources/[slug]
 *
 * `RichText` renders ONLY the inner sequence (h2/h4/h5/p, bullet lists, images). The
 * caller (the detail page template) must provide the wrappers that Framer puts around it,
 * once per breakpoint block, e.g. for the cause template:
 *
 * ```tsx
 * <section className="framer-yxj8ce" data-framer-name="Rich Text Section">
 *   <div className="framer-1ejhn7j" data-framer-name="Base Container">
 *     <div className="ssr-variant hidden-29zmi8">                       // desktop + tablet
 *       <div className="framer-1t6srgd" data-framer-name="Content"
 *            data-framer-component-type="RichTextContainer" style={REVEAL_STYLE}>
 *         <RichText blocks={body} variant="cause" breakpoint="desktop" />
 *       </div>
 *     </div>
 *     <div className="ssr-variant hidden-1qvxql2 hidden-9ymi93">        // phone
 *       <div className="framer-1t6srgd" … style={REVEAL_STYLE}>
 *         <RichText blocks={body} variant="cause" breakpoint="phone" />
 *       </div>
 *     </div>
 *     …sticky block / gallery…
 *   </div>
 * </section>
 * ```
 *
 * The two breakpoint blocks differ inside the rich text as well (hence `breakpoint`):
 * list modules are wrapped in a bare `div.ssr-variant` in the desktop/tablet block only,
 * and image modules render the Desktop + Tablet image variants (each in its own
 * `ssr-variant hidden-*` wrapper) in the desktop/tablet block but the bare Phone variant
 * in the phone block.
 *
 * Differences between the four templates are limited to the list gap (`--tc8rtq`: 10px on
 * projects, 15px elsewhere) and the template's `hidden-*` breakpoint classes, selected by
 * `variant`. Text presets (`framer-styles-preset-*`) are identical in all four exports.
 */
export type RichTextVariant = "cause" | "career" | "project" | "resource";

export interface RichTextProps {
  blocks: RichBlock[];
  /** Which detail template the rich text sits in (list gap + breakpoint classes). */
  variant: RichTextVariant;
  /** Which breakpoint block of the template this instance is rendered in. */
  breakpoint: "desktop" | "phone";
}

const VARIANTS: Record<RichTextVariant, { listGap: string; bp: BreakpointClasses }> = {
  cause: {
    listGap: "15px",
    bp: { desktop: "hidden-9ymi93", tablet: "hidden-1qvxql2", phone: "hidden-29zmi8" },
  },
  career: {
    listGap: "15px",
    bp: { desktop: "hidden-6z3la4", tablet: "hidden-pi8rq8", phone: "hidden-vs04g8" },
  },
  project: {
    listGap: "10px",
    bp: { desktop: "hidden-1pil0kk", tablet: "hidden-1aqwwul", phone: "hidden-1ezqwpy" },
  },
  resource: {
    listGap: "15px",
    bp: { desktop: "hidden-nvs3ka", tablet: "hidden-18zn3uu", phone: "hidden-1ghes7e" },
  },
};

/**
 * Text style presets per heading level as exported. Only h2/h4/h5 occur in the Framer
 * content; h3 and h6 fall back to the presets Framer uses for those levels in cards
 * (`16qewnh` = project card h3, `2tpdrg` = card h6).
 */
const HEADING_PRESETS: Record<2 | 3 | 4 | 5 | 6, string> = {
  2: "framer-styles-preset-dghseo",
  3: "framer-styles-preset-16qewnh",
  4: "framer-styles-preset-1y6kb77",
  5: "framer-styles-preset-90lki2",
  6: "framer-styles-preset-2tpdrg",
};

/**
 * Instance classes of the bullet items inside Framer's list component (`framer-tY280`).
 * The export has at most eight bullets per list; longer lists reuse the classes (every
 * container shares the same CSS: `flex:none;width:100%`).
 */
const LIST_ITEM_CONTAINERS = [
  "framer-fzl3s7-container",
  "framer-kke6ki-container",
  "framer-ap3166-container",
  "framer-1f7emri-container",
  "framer-bb7php-container",
  "framer-pkgzm4-container",
  "framer-1ifmj8s-container",
  "framer-v2qcqk-container",
];

const TEXT_MODULE_STYLE: CSSProperties = { width: "100%", height: "auto" };

const RICH_TEXT_IMAGE_SIZES =
  "(min-width: 1280px) max(100vw, 1px), (min-width: 992px) and (max-width: 1279.98px) max(100vw, 1px), (max-width: 991.98px) max(100vw, 1px)";

/** One icon bullet of the list component (`framer-dFyhh framer-cx2jtr`). */
function ListItem({ text, containerClass }: { text: string; containerClass: string }) {
  return (
    <div className={containerClass}>
      <div
        className="framer-dFyhh framer-aZLxC framer-cx2jtr framer-v-cx2jtr"
        data-framer-name="Default"
        style={{ width: "100%" }}
      >
        <div className="framer-npy7z1" data-framer-name="Icon Wrapper">
          <div
            className="framer-1k41lqg"
            data-framer-name="Icon"
            style={{
              backgroundColor: TOKENS.grey,
              borderBottomLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              borderTopLeftRadius: "100px",
              borderTopRightRadius: "100px",
            }}
          ></div>
        </div>
        <div
          className="framer-1a5gpd7"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
          }}
        >
          <p
            className="framer-text framer-styles-preset-1yjqzcs"
            data-styles-preset="qbnnr1pdm"
            dir="auto"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Framer's list component (`framer-tY280 framer-1m6k99i`). Framer has no ordered variant;
 * `ordered` lists render with the same icon bullets.
 */
function List({ items, gap }: { items: string[]; gap: string }) {
  return (
    <div
      className="framer-tY280 framer-1m6k99i framer-v-1m6k99i"
      data-framer-name="Default"
      style={{ "--tc8rtq": gap }}
    >
      {items.map((text, i) => (
        <ListItem
          key={i}
          text={text}
          containerClass={LIST_ITEM_CONTAINERS[i % LIST_ITEM_CONTAINERS.length]!}
        />
      ))}
    </div>
  );
}

/** Framer's rich-text image component (`framer-5RwZO framer-1hllryi`), one breakpoint variant. */
function RichImage({
  image,
  variant,
}: {
  image: Extract<RichBlock, { type: "image" }>["image"];
  variant: "desktop" | "tablet" | "phone";
}) {
  const variantClass =
    variant === "desktop"
      ? "framer-v-1hllryi"
      : variant === "tablet"
        ? "framer-v-8i3znt"
        : "framer-v-ab9aji";
  const name = variant === "desktop" ? "Desktop" : variant === "tablet" ? "Tablet" : "Phone";
  return (
    <div className={`framer-5RwZO framer-1hllryi ${variantClass}`} data-framer-name={name}>
      <div
        className="framer-1xhx5l"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <FramerBackgroundImage
          image={image}
          sizes={RICH_TEXT_IMAGE_SIZES}
          objectPosition="center top"
        />
      </div>
    </div>
  );
}

export function RichText({ blocks, variant, breakpoint }: RichTextProps) {
  const { listGap, bp } = VARIANTS[variant];
  const desktop = breakpoint === "desktop";

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = `h${block.level}` as const;
            return (
              <Tag key={i} dir="auto" className={`framer-text ${HEADING_PRESETS[block.level]}`}>
                {block.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={i} dir="auto" className="framer-text framer-styles-preset-1yjqzcs">
                {block.text}
              </p>
            );
          case "list":
            return (
              <div
                key={i}
                className="framer-text framer-text-module"
                style={TEXT_MODULE_STYLE}
                data-width="fill"
              >
                {desktop ? (
                  <div className="ssr-variant">
                    <List items={block.items} gap={listGap} />
                  </div>
                ) : (
                  <List items={block.items} gap={listGap} />
                )}
              </div>
            );
          case "image":
            return (
              <div
                key={i}
                className="framer-text framer-text-module"
                style={TEXT_MODULE_STYLE}
                data-width="fill"
              >
                {desktop ? (
                  <>
                    <div className={`ssr-variant ${bp.tablet}`}>
                      <RichImage image={block.image} variant="desktop" />
                    </div>
                    <div className={`ssr-variant ${bp.desktop}`}>
                      <RichImage image={block.image} variant="tablet" />
                    </div>
                  </>
                ) : (
                  <RichImage image={block.image} variant="phone" />
                )}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
