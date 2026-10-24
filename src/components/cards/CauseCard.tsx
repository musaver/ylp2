import Link from "next/link";
import type { Cause } from "@/lib/types";
import {
  TOKENS,
  FramerBackgroundImage,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's cause card (`framer-SvcnD framer-67ubvk`), converted from the "Causes Section"
 * of the cause detail template (hash 8fc3c9f09e); the same component is placed on the home
 * page (c0dfaae115) and /our-mission (ae388f0a2e). Renders the component root (`<a>`) only;
 * the instance wrapper (`div.framer-xxx-container` with the reveal style) and the
 * `ssr-variant` breakpoint wrappers belong to `CausesSection`.
 */
/** What the card renders; projects reuse it on the home page with their own icon. */
export type CauseCardItem = Pick<Cause, "slug" | "title" | "excerpt" | "category" | "image"> & {
  /** Theme icon (public/images) that replaces the default heart next to the category. */
  icon?: string;
};

export interface CauseCardProps {
  cause: CauseCardItem;
  /** Detail page base path the card links into. */
  basePath?: string;
  /** Label of the yellow pill. */
  ctaLabel?: string;
  variant: CardVariant;
  /** Literal `sizes` attribute of the thumbnail for this placement (differs per page). */
  sizes: string;
  /** Framer lazy-loads thumbnails below the fold (third card on desktop/tablet). */
  loading?: "lazy";
}

const VARIANT_CLASS: Record<CardVariant, string> = {
  desktop: "framer-v-67ubvk",
  tablet: "framer-v-qodcb9",
  phone: "framer-v-bstjmj",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

export function CauseCard({
  cause,
  variant,
  sizes,
  loading,
  basePath = "/causes",
  ctaLabel = "Support",
}: CauseCardProps) {
  const iconMask = cause.icon ? `url(${cause.icon}) no-repeat center / contain` : undefined;
  return (
    <Link
      className={`framer-SvcnD framer-VFjXM framer-cYxwf framer-dVXc9 framer-67ubvk ${VARIANT_CLASS[variant]} framer-bivipz`}
      data-framer-name={VARIANT_NAME[variant]}
      href={`${basePath}/${cause.slug}`}
      style={{ width: "100%" }}
    >
      <div
        className="framer-19g5ho6"
        data-framer-name="Image Wrapper"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-1cjl8rd" style={{ transform: "none" }}>
          <FramerBackgroundImage
            image={cause.image}
            sizes={sizes}
            loading={loading}
            objectPosition="50% 50%"
          />
        </div>
      </div>
      <div className="framer-18chef2" data-framer-name="Content Block">
        <div className="framer-40gn6r" data-framer-name="Text Container">
          <div
            className="framer-treuji"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
            style={{ "--extracted-1w1cjl5": TOKENS.dark, transform: "none" }}
          >
            <h6
              className="framer-text framer-styles-preset-2tpdrg"
              data-styles-preset="jqwsbizxz"
              dir="auto"
              style={{ "--framer-text-color": `var(--extracted-1w1cjl5, ${TOKENS.dark})` }}
            >
              {cause.title}
            </h6>
          </div>
          <div
            className="framer-1xcp8c4"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <p
              className="framer-text framer-styles-preset-1dpgexf"
              data-styles-preset="wUYf66_Db"
              dir="auto"
            >
              {cause.excerpt}
            </p>
          </div>
        </div>
        <div className="framer-gee0zu" data-framer-name="Bottom Content">
          <div className="framer-1ivy3np" data-framer-name="Text Content">
            <div
              data-framer-name="Icon"
              className="framer-QGNNV framer-11s814p"
              style={{
                "--1afajen": TOKENS.blue,
                ...(iconMask && { WebkitMask: iconMask, mask: iconMask }),
              }}
            ></div>
            <div
              className="framer-1830b8p"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{ "--extracted-r6o4lv": TOKENS.dark, transform: "none" }}
            >
              <p
                className="framer-text framer-styles-preset-1u0xujd"
                data-styles-preset="QZ8HlqCwU"
                dir="auto"
                style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
              >
                {cause.category}
              </p>
            </div>
          </div>
          <div className="framer-176vxut-container">
            <div
              className="framer-Rtd2g framer-5BI2U framer-ntjttk framer-v-ntjttk"
              data-framer-name="Default"
              style={{
                backgroundColor: TOKENS.yellow,
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              <div
                className="framer-15ffebv"
                data-framer-name="CTA Text"
                data-framer-component-type="RichTextContainer"
                style={{
                  "--extracted-r6o4lv": TOKENS.dark,
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  transform: "none",
                }}
              >
                <p
                  className="framer-text framer-styles-preset-o266m6"
                  data-styles-preset="XE418oX5i"
                  dir="auto"
                  style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.dark})` }}
                >
                  {ctaLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
