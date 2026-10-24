import type { CSSProperties } from "react";
import type { FramerImage, NavLink } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SectionHeading,
  TOKENS,
} from "@/components/sections/framer-shared";
import { PrimaryButtonLink } from "./PrimaryButtonLink";

/** Breakpoint classes of the home template. */
const HIDE_DESKTOP = "hidden-72rtr7";
const HIDE_TABLET = "hidden-12w2mq9";
const HIDE_PHONE = "hidden-1au1vxw";

const CTA_IMAGE: FramerImage = {
  src: "/images/chqZxiAob5ktjgtJPe7w0Rok6k.jpg",
  srcSet:
    "/images/chqZxiAob5ktjgtJPe7w0Rok6k-1.jpg 512w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-2.jpg 1024w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-3.jpg 2048w, /images/chqZxiAob5ktjgtJPe7w0Rok6k-4.jpg 4096w, /images/chqZxiAob5ktjgtJPe7w0Rok6k.jpg 5281w",
  alt: "CTA Image",
  width: 5281,
  height: 3521,
};
const CTA_IMAGE_SIZES =
  "(min-width: 1280px) max(min(max(100vw, 1px), 1340px) - 40px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px), (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px)";

/** `--border-color` of the "Get involved" button (transparent yellow token). */
const BUTTON_BORDER = TOKENS.yellowTransparent;

const SLIDE_FROM_LEFT: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateX(-60px)",
};
const SLIDE_FROM_RIGHT: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateX(60px)",
};

export interface HomeEventsCtaProps {
  heading?: string;
  button?: NavLink;
  image?: FramerImage;
}

/**
 * Home "Events Section" (hash cf9075a2f6, section.framer-z9avqu): full-width photo with
 * overlay, heading and the yellow "Get involved" button linking to /events. On desktop the
 * heading slides in from the left and the button from the right; tablet/phone use the
 * default upward reveal.
 */
export function HomeEventsCta({
  heading = "We hold ourselves to the highest ethical standards, always prioritizing the well-being of those we serve.",
  button = { label: "Get involved", href: "/events" },
  image = CTA_IMAGE,
}: HomeEventsCtaProps) {
  return (
    <section className="framer-z9avqu" data-framer-name="Events Section">
      <div className="framer-1bkpjak" data-framer-name="Base Container">
        <div className="framer-xykc6z" data-framer-name="Content Block">
          <div className="framer-c8ubjl" data-framer-name="Image Wrapper" style={REVEAL_STYLE}>
            <div className="framer-gbwnzk" data-framer-name="Overlay"></div>
            <div className="ssr-variant">
              <div className="framer-kt0jtz">
                <FramerBackgroundImage
                  image={image}
                  sizes={CTA_IMAGE_SIZES}
                  objectPosition="50% 40%"
                />
              </div>
            </div>
          </div>
          <div className="framer-1u6qsrc" data-framer-name="Text Container Wrapper">
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_PHONE}`}>
              <div
                className="framer-ejzzqm"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={SLIDE_FROM_LEFT}
              >
                <h2
                  className="framer-text framer-styles-preset-dghseo"
                  data-styles-preset="ZIAYgZ0hD"
                  dir="auto"
                  style={{ "--framer-text-color": TOKENS.white }}
                >
                  {heading}
                </h2>
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_DESKTOP}`}>
              <SectionHeading className="framer-ejzzqm" text={heading} color={TOKENS.white} />
            </div>
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_PHONE}`}>
              <div className="framer-pfavjd-container" style={SLIDE_FROM_RIGHT}>
                <PrimaryButtonLink
                  href={button.href}
                  label={button.label}
                  variant="desktop"
                  borderColor={BUTTON_BORDER}
                />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_DESKTOP} ${HIDE_PHONE}`}>
              <div className="framer-pfavjd-container" style={REVEAL_STYLE}>
                <PrimaryButtonLink
                  href={button.href}
                  label={button.label}
                  variant="desktop"
                  borderColor={BUTTON_BORDER}
                />
              </div>
            </div>
            <div className={`ssr-variant ${HIDE_TABLET} ${HIDE_DESKTOP}`}>
              <div className="framer-pfavjd-container" style={REVEAL_STYLE}>
                <PrimaryButtonLink
                  href={button.href}
                  label={button.label}
                  variant="phone"
                  borderColor={BUTTON_BORDER}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
