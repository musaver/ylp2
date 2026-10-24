import Link from "next/link";
import type { Resource } from "@/lib/types";
import {
  TOKENS,
  FramerBackgroundImage,
  type CardVariant,
} from "@/components/sections/framer-shared";

/**
 * Framer's resource card (`framer-j9JEk framer-zx90wj`), converted from the "Resourses
 * Section" ("Recent updates from our team") of the resource detail template (hash
 * 8169fbd248); the same component is placed on /about-us (c396664853), /contact-us
 * (67b109ea3b), /events (bd3a951347) and the home page (bf4b36bb37). Thumbnail and title
 * are links to the resource; each tag is a link to `/resource-category/<tag>` (as in the
 * export). Renders the component root (`<div>`) only; `ResourcesSection` places the
 * instance wrapper and the `ssr-variant` breakpoint wrappers.
 */
export interface ResourceCardProps {
  resource: Resource;
  variant: CardVariant;
  /** Literal `sizes` attribute of the thumbnail for this placement (differs per page). */
  sizes: string;
}

const ROOT_VARIANT: Record<CardVariant, string> = {
  desktop: "framer-v-zx90wj",
  tablet: "framer-v-zcjrlf",
  phone: "framer-v-gyixkv",
};

const TITLE_VARIANT: Record<CardVariant, string> = {
  desktop: "framer-v-1ofz83i",
  tablet: "framer-v-1wyv5ft",
  phone: "framer-v-1pkzff5",
};

const VARIANT_NAME: Record<CardVariant, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

export function ResourceCard({ resource, variant, sizes }: ResourceCardProps) {
  const href = `/resources/${resource.slug}`;
  const phone = variant === "phone";
  return (
    <div
      className={`framer-j9JEk framer-cYxwf framer-zx90wj ${ROOT_VARIANT[variant]}`}
      data-framer-name={VARIANT_NAME[variant]}
      style={{ width: "100%" }}
    >
      <Link
        className="framer-123xwuq framer-51g7k2"
        data-framer-name="Image Wrapper"
        href={href}
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="framer-e2aeli">
          <FramerBackgroundImage image={resource.image} sizes={sizes} />
        </div>
      </Link>
      <div className="framer-purupd" data-framer-name="Text Container Wrapper">
        <div className="framer-135l7ig" data-framer-name="Text Container">
          <div className="framer-1nifje4-container">
            <Link
              className={`framer-fxKdo framer-oI7lE framer-1ofz83i ${TITLE_VARIANT[variant]} framer-15knko8`}
              data-framer-name={VARIANT_NAME[variant]}
              href={href}
              style={{ width: "100%" }}
            >
              <div
                className="framer-35dbdz"
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
              <div className="framer-fnuykj" data-framer-name="Icon Wrapper">
                <div
                  data-framer-name="Icon"
                  className="framer-vCDm1 framer-1cb701b"
                  style={{ "--1afajen": TOKENS.blue, transform: "none" }}
                ></div>
              </div>
            </Link>
          </div>
          <div
            className="framer-i20u8e"
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
        <div className="framer-157gicu">
          {resource.tags.map((tag) => (
            <div key={tag} className="framer-4xd4la-container">
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
