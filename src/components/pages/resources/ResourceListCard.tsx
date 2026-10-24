import Link from "next/link";
import {
  FramerBackgroundImage,
  TOKENS,
  type CardVariant,
} from "@/components/sections/framer-shared";
import type { Resource, ResourceTag } from "@/lib/types";

const ROOT_VARIANT: Record<CardVariant, string> = {
  desktop: "framer-v-1kbvmxh",
  tablet: "framer-v-h5th30",
  phone: "framer-v-14okmjw",
};

const TITLE_VARIANT: Record<CardVariant, string> = {
  desktop: "framer-v-4gwcj0",
  tablet: "framer-v-nongxy",
  phone: "framer-v-14rx9np",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

export interface ResourceListCardProps {
  resource: Resource;
  variant: CardVariant;
  /** Literal `sizes` attribute of the thumbnail for this placement. */
  sizes: string;
  /** Tags to show (defaults to `resource.tags`; category pages hide the current tag). */
  tags?: readonly ResourceTag[];
}

/**
 * Framer's resource list card (`framer-xNvqJ framer-1kbvmxh`), converted from the
 * "Resources Section" of /resources (hash b06a15d3cb) and the "Resource Category Section"
 * of /resource-category/<tag> (e.g. hash 5f91d43863). This is a different Framer component
 * from `ResourceCard` (`framer-j9JEk`, whose styles are not in the resources templates).
 * Thumbnail and title link to the resource; each tag links to `/resource-category/<tag>`.
 * Renders the component root only; the grid places the instance wrapper and the
 * `ssr-variant` breakpoint wrappers.
 */
export function ResourceListCard({ resource, variant, sizes, tags }: ResourceListCardProps) {
  const href = `/resources/${resource.slug}`;
  const phone = variant === "phone";
  return (
    <div
      className={`framer-xNvqJ framer-cYxwf framer-1kbvmxh ${ROOT_VARIANT[variant]}`}
      data-framer-name={VARIANT_NAME[variant]}
      style={{ width: "100%" }}
    >
      <Link
        className="framer-t75n7t framer-63hqfw"
        data-framer-name="Image Wrapper"
        href={href}
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-4yao0t">
          <FramerBackgroundImage image={resource.image} sizes={sizes} />
        </div>
      </Link>
      <div className="framer-awqhbf" data-framer-name="Text Container Wrapper">
        <div className="framer-11gsqrn" data-framer-name="Text Container">
          <div className="framer-k5yx28-container">
            <Link
              className={`framer-ZTMUb framer-oI7lE framer-4gwcj0 ${TITLE_VARIANT[variant]} framer-1buqmms`}
              data-framer-name={VARIANT_NAME[variant]}
              href={href}
              style={{ width: "100%" }}
            >
              <div
                className="framer-13qty6h"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={{ "--extracted-1w1cjl5": TOKENS.dark, transform: "none" }}
              >
                <h6
                  className="framer-text framer-styles-preset-1273gnv"
                  data-styles-preset="FFcWza3wF"
                  dir="auto"
                  style={{ "--framer-text-color": `var(--extracted-1w1cjl5, ${TOKENS.dark})` }}
                >
                  {resource.title}
                </h6>
              </div>
              <div className="framer-14r8zg4" data-framer-name="Icon Wrapper">
                <div
                  data-framer-name="Icon"
                  className="framer-vCDm1 framer-3rav6x"
                  style={{ "--1afajen": TOKENS.blue, transform: "none" }}
                ></div>
              </div>
            </Link>
          </div>
          <div
            className="framer-1ch7m55"
            data-framer-name="Body"
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <p
              className="framer-text framer-styles-preset-1dpgexf"
              data-styles-preset="wUYf66_Db"
              dir="auto"
            >
              {resource.excerpt}
            </p>
          </div>
        </div>
        <div className="framer-pxqhmj">
          {(tags ?? resource.tags).map((tag) => (
            <div key={tag} className="framer-161ql7u-container">
              <div
                className={`framer-CzyKI framer-J3LiD framer-0Nu0n framer-CfJhc framer-yu1vke ${phone ? "framer-v-1wn74mr" : "framer-v-yu1vke"}`}
                data-framer-name={phone ? "Phone" : "Default"}
              >
                <div
                  className="framer-g8dxdq"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    className="framer-text framer-styles-preset-14ucoyx"
                    data-styles-preset="WmLxwg5C0"
                    dir="auto"
                  >
                    <Link
                      className={`framer-text ${phone ? "framer-styles-preset-uygkgz" : "framer-styles-preset-1bbsbfa"}`}
                      data-styles-preset={phone ? "UpF3h1PnZ" : "K2C4mHG1A"}
                      href={`/resource-category/${tag}`}
                    >
                      {`#${tag}`}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
