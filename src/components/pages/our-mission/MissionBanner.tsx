import Link from "next/link";
import type { FramerImage, NavLink } from "@/lib/types";
import { FramerBackgroundImage, REVEAL_STYLE, TOKENS } from "@/components/sections/framer-shared";

/** Banner photo of the /our-mission page as exported. */
const BANNER_IMAGE: FramerImage = {
  src: "/images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk.jpg",
  alt: "Our Mission Banner Image",
  width: 6000,
  height: 4000,
  srcSet:
    "/images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk-1.jpg 512w, /images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk-2.jpg 1024w, /images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk-3.jpg 2048w, /images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk-4.jpg 4096w, /images/IA7WIZ1KYrSm5rwTzpDIlUwcDqk.jpg 6000w",
};

const BANNER_SIZES =
  "(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279.98px) 100vw, (max-width: 991.98px) 100vw";

/** Banner copy as exported (also used for the page metadata). */
export const MISSION_BANNER = {
  heading: "Our mission",
  body: "We are committed to making a real difference by providing support where it’s needed most. Every contribution directly impacts lives, creating hope and opportunity.",
  cta: { label: "Contribute", href: "/contact-us" } satisfies NavLink,
} as const;

export interface MissionBannerProps {
  heading?: string;
  body?: string;
  image?: FramerImage;
  cta?: NavLink;
}

/**
 * "Our Mission Banner Section" of /our-mission (hash 399e6d1a87, section.framer-fhhtep):
 * full-bleed photo with overlay, centred H1 + intro and the yellow "Contribute" button
 * (`framer-u1OFg`, Default variant on desktop/tablet, Phone variant on phone).
 */
export function MissionBanner({
  heading = MISSION_BANNER.heading,
  body = MISSION_BANNER.body,
  image = BANNER_IMAGE,
  cta = MISSION_BANNER.cta,
}: MissionBannerProps) {
  return (
    <section className="framer-fhhtep" data-framer-name="Our Mission Banner Section">
      <div className="framer-5n6u42" data-framer-name="BG Wrapper">
        <div className="framer-1o8sa5y" data-framer-name="Overlay"></div>
        <div className="ssr-variant">
          <div className="framer-1xj6rql">
            <FramerBackgroundImage image={image} sizes={BANNER_SIZES} />
          </div>
        </div>
      </div>
      <div className="framer-1emausr" data-framer-name="Base Container">
        <div className="framer-568pyw" data-framer-name="Text Container Wrapper">
          <div className="framer-1sftkj7" data-framer-name="Text Container">
            <div
              className="framer-y7dnb4"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <h1
                className="framer-text framer-styles-preset-lo4ujp"
                data-styles-preset="aeh2bjTr3"
                dir="auto"
                style={{
                  "--framer-text-alignment": "center",
                  "--framer-text-color": TOKENS.white,
                }}
              >
                {heading}
              </h1>
            </div>
            <div
              className="framer-1n8eo26"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={REVEAL_STYLE}
            >
              <p
                className="framer-text framer-styles-preset-184kbjj"
                data-styles-preset="jo34BIwbe"
                dir="auto"
                style={{ "--framer-text-alignment": "center" }}
              >
                {body}
              </p>
            </div>
          </div>
          <div className="ssr-variant hidden-b2obmz">
            <div className="framer-z6qvag-container" style={REVEAL_STYLE}>
              <ContributeButton link={cta} phone={false} />
            </div>
          </div>
          <div className="ssr-variant hidden-1kvngrp hidden-19wkpj4">
            <div className="framer-z6qvag-container" style={REVEAL_STYLE}>
              <ContributeButton link={cta} phone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Framer's yellow primary button (`framer-u1OFg`) with the dark icon square. */
function ContributeButton({ link, phone }: { link: NavLink; phone: boolean }) {
  return (
    <Link
      className={`framer-u1OFg framer-5BI2U framer-gqm115 ${phone ? "framer-v-hry1d3" : "framer-v-gqm115"} framer-dall63`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      href={link.href}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": TOKENS.yellowTransparent,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: TOKENS.yellow,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div
        className="framer-1uyh8kc"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-u2DVngPhu-fffJ5YP8D)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-Oqx4iaqOk-fffJ5YP8D": TOKENS.white,
          "--variable-reference-u2DVngPhu-fffJ5YP8D": TOKENS.dark,
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--variable-reference-u2DVngPhu-fffJ5YP8D))",
          }}
        >
          {link.label}
        </p>
      </div>
      <div
        className="framer-mkgslb"
        data-framer-name="Icon Wrapper"
        style={{
          backgroundColor: TOKENS.dark,
          borderBottomLeftRadius: "2px",
          borderBottomRightRadius: "2px",
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
          transform: "none",
        }}
      >
        <div
          data-framer-name="Icon"
          className="framer-vCDm1 framer-7hc1b8"
          style={{ "--1afajen": TOKENS.white }}
        ></div>
      </div>
    </Link>
  );
}
