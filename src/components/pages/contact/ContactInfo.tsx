import type { CSSProperties } from "react";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  SlashLabel,
  TOKENS,
} from "@/components/sections/framer-shared";
import type { FramerImage, SocialLink } from "@/lib/types";

const CONTACT_IMAGE: FramerImage = {
  src: "/images/D2VQEpC500ZM0eJS6RWOO16iME.jpg",
  srcSet:
    "/images/D2VQEpC500ZM0eJS6RWOO16iME-1.jpg 512w, /images/D2VQEpC500ZM0eJS6RWOO16iME-2.jpg 1024w, /images/D2VQEpC500ZM0eJS6RWOO16iME-3.jpg 2048w, /images/D2VQEpC500ZM0eJS6RWOO16iME-4.jpg 4096w, /images/D2VQEpC500ZM0eJS6RWOO16iME.jpg 6000w",
  alt: "Contact Us Image",
  width: 6000,
  height: 4000,
};
const CONTACT_IMAGE_SIZES =
  "(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 120px) / 2, 1px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 80px) / 2, 1px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px)";

/** Google Maps link of the address, as in the export. */
const DEFAULT_MAP_URL = "https://maps.app.goo.gl/sDRGCdX5PnYbKszW8";

/** Breakpoint wrappers of the /contact-us template (desktop+tablet vs phone). */
const NOT_PHONE = "ssr-variant hidden-ce8ap0";
const PHONE_ONLY = "ssr-variant hidden-1izvhu1 hidden-175saz8";

/**
 * Social buttons of this section, in the export's order. The instance wrapper classes are
 * positional, the icon class identifies the network.
 */
const SOCIAL_SLOTS: { name: SocialLink["name"]; container: string; icon: string }[] = [
  { name: "facebook", container: "framer-19ujepi-container", icon: "framer-H03vJ framer-nbf0pr" },
  { name: "youtube", container: "framer-1q6gem4-container", icon: "framer-jWDNt framer-nbf0pr" },
  { name: "instagram", container: "framer-1cucdi1-container", icon: "framer-a6Ejj framer-nbf0pr" },
];

const SOCIAL_STYLE: CSSProperties = {
  backgroundColor: TOKENS.blue,
  height: "100%",
  width: "100%",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
};

const NONE: CSSProperties = { transform: "none" };

interface InfoItemProps {
  className: string;
  name: string;
  labelClassName: string;
  valueClassName: string;
  label: string;
  value: string;
  href: string;
}

/** One "Label / linked value" block (Address, Phone, Email) with its two breakpoint variants. */
function InfoItem({
  className,
  name,
  labelClassName,
  valueClassName,
  label,
  value,
  href,
}: InfoItemProps) {
  return (
    <div className={className} data-framer-name={name} style={REVEAL_STYLE}>
      <div className={NOT_PHONE}>
        <div
          className={labelClassName}
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={NONE}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
            style={{ "--framer-text-color": TOKENS.blue }}
          >
            {label}
          </p>
        </div>
      </div>
      <div className={PHONE_ONLY}>
        <div
          className={labelClassName}
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={NONE}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
            style={{ "--framer-text-alignment": "center", "--framer-text-color": TOKENS.blue }}
          >
            {label}
          </p>
        </div>
      </div>
      <div className={NOT_PHONE}>
        <div
          className={valueClassName}
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={NONE}
        >
          <h6
            className="framer-text framer-styles-preset-1l7r60j"
            data-styles-preset="lckHI9y0z"
            dir="auto"
          >
            <a
              className="framer-text framer-styles-preset-9530i4"
              data-styles-preset="CkJaGi78s"
              href={href}
              target="_blank"
              rel="noopener"
            >
              {value}
            </a>
          </h6>
        </div>
      </div>
      <div className={PHONE_ONLY}>
        <div
          className={valueClassName}
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={NONE}
        >
          <h6
            className="framer-text framer-styles-preset-1l7r60j"
            data-styles-preset="lckHI9y0z"
            dir="auto"
            style={{ "--framer-text-alignment": "center" }}
          >
            <a
              className="framer-text framer-styles-preset-egj4q0"
              data-styles-preset="d_z7D8QCz"
              href={href}
              target="_blank"
              rel="noopener"
            >
              {value}
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export interface ContactInfoProps {
  /** Address, phone and email (site.contact). */
  contact: { address: string; phone: string; email: string };
  /** Social profiles (site.socials); rendered in the export's order: Facebook, YouTube, Instagram. */
  socials: readonly SocialLink[];
  /** Map link of the address. */
  mapUrl?: string;
  label?: string;
  heading?: string;
  text?: string;
  image?: FramerImage;
}

/**
 * Framer's "Contact Us Section" (hash 7e75212f7c, section.framer-1nb511x) of /contact-us:
 * image, "/ Get in touch /" label, heading and text, address / phone / email and social buttons.
 */
export function ContactInfo({
  contact,
  socials,
  mapUrl = DEFAULT_MAP_URL,
  label = "Get in touch",
  heading = "We're here for you and happy to help",
  text = "At YouthLink, we believe in the power of togetherness and strive to make every person feel supported, hopeful, and embraced.",
  image = CONTACT_IMAGE,
}: ContactInfoProps) {
  const socialSlots = SOCIAL_SLOTS.flatMap((slot) => {
    const social = socials.find((s) => s.name === slot.name);
    return social ? [{ ...slot, href: social.href }] : [];
  });

  return (
    <section className="framer-1nb511x" data-framer-name="Contact Us Section">
      <div className="framer-18vqo0r" data-framer-name="Base Container">
        <div className="ssr-variant">
          <div className="framer-1uido5g" style={REVEAL_STYLE}>
            <FramerBackgroundImage image={image} sizes={CONTACT_IMAGE_SIZES} />
          </div>
        </div>
        <div className="framer-1i0dnwn" data-framer-name="Content Block Wrapper">
          <div className="framer-yxhvon" data-framer-name="Text Content Wrapper">
            <div className="framer-3wmbj1-container" style={REVEAL_STYLE}>
              <SlashLabel text={label} />
            </div>
            <div className="framer-1nadgse" data-framer-name="Text Content">
              <div className={NOT_PHONE}>
                <div
                  className="framer-f78neo"
                  data-framer-name="Heading"
                  data-framer-component-type="RichTextContainer"
                  style={REVEAL_STYLE}
                >
                  <h2
                    className="framer-text framer-styles-preset-dghseo"
                    data-styles-preset="ZIAYgZ0hD"
                    dir="auto"
                  >
                    {heading}
                  </h2>
                </div>
              </div>
              <div className={PHONE_ONLY}>
                <div
                  className="framer-f78neo"
                  data-framer-name="Heading"
                  data-framer-component-type="RichTextContainer"
                  style={REVEAL_STYLE}
                >
                  <h2
                    className="framer-text framer-styles-preset-dghseo"
                    data-styles-preset="ZIAYgZ0hD"
                    dir="auto"
                    style={{ "--framer-text-alignment": "center" }}
                  >
                    {heading}
                  </h2>
                </div>
              </div>
              <div className={NOT_PHONE}>
                <div
                  className="framer-ul0ra4"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={REVEAL_STYLE}
                >
                  <p
                    className="framer-text framer-styles-preset-1dpgexf"
                    data-styles-preset="wUYf66_Db"
                    dir="auto"
                  >
                    {text}
                  </p>
                </div>
              </div>
              <div className={PHONE_ONLY}>
                <div
                  className="framer-ul0ra4"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={REVEAL_STYLE}
                >
                  <p
                    className="framer-text framer-styles-preset-1dpgexf"
                    data-styles-preset="wUYf66_Db"
                    dir="auto"
                    style={{ "--framer-text-alignment": "center" }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-jihgme" data-framer-name="Contact Info Wrapper">
              <InfoItem
                className="framer-1wkzhz7"
                name="Address Info"
                labelClassName="framer-1g2swym"
                valueClassName="framer-1gujp1r"
                label="Address"
                value={contact.address}
                href={mapUrl}
              />
              <InfoItem
                className="framer-pbn54d"
                name="Phone Info"
                labelClassName="framer-2fg5uc"
                valueClassName="framer-sukrz3"
                label="Phone"
                value={contact.phone}
                href={`tel: ${contact.phone}`}
              />
              <InfoItem
                className="framer-x0w180"
                name="Email Info"
                labelClassName="framer-qj465k"
                valueClassName="framer-1udsqdd"
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
            </div>
          </div>
          <div className="framer-1qc5ls8" data-framer-name="Socials Wrapper" style={REVEAL_STYLE}>
            {socialSlots.map((slot) => (
              <div key={slot.name} className={slot.container}>
                <div className={NOT_PHONE}>
                  <a
                    className="framer-2KV6z framer-111uymw framer-v-111uymw framer-4sk85k"
                    data-framer-name="Default"
                    href={slot.href}
                    target="_blank"
                    rel="noopener"
                    style={SOCIAL_STYLE}
                  >
                    <div
                      data-framer-name="Icon"
                      className={slot.icon}
                      style={{ "--1afajen": TOKENS.white }}
                    ></div>
                  </a>
                </div>
                <div className={PHONE_ONLY}>
                  <a
                    className="framer-2KV6z framer-111uymw framer-v-15g8yid framer-4sk85k"
                    data-framer-name="Phone"
                    href={slot.href}
                    target="_blank"
                    rel="noopener"
                    style={SOCIAL_STYLE}
                  >
                    <div
                      data-framer-name="Icon"
                      className={slot.icon}
                      style={{ "--1afajen": TOKENS.white }}
                    ></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
