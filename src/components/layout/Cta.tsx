import Link from "next/link";
import type { CSSProperties } from "react";
import { SlashLabel } from "@/components/sections/framer-shared";
import { site } from "@/content/site";
import type { NavLink } from "@/lib/types";

// The three call-to-action blocks Framer places above the footer:
//   image       = div.framer-6ztox7-container  (hash 14fb8d6f3f): photo + dark overlay
//   gallery     = div.framer-136km55-container (hash 50a8260079): yellow card with 4 photos
//   image-right = div.framer-lj8en1-container  (hash 60c036d287): yellow card + photo
// Each renders Framer's desktop / phone / tablet variants inside `ssr-variant` wrappers.

export type CtaVariant = "image" | "gallery" | "image-right";

/** Page-specific copy for the "image" CTA; omitted fields fall back to `site.cta`. */
export interface CtaContent {
  label?: string;
  heading?: string;
  text?: string;
  primary?: NavLink;
  /** `null` hides the secondary button. */
  secondary?: NavLink | null;
}

type Breakpoint = "desktop" | "tablet" | "phone";

const BREAKPOINTS: { bp: Breakpoint; wrapper: string }[] = [
  { bp: "desktop", wrapper: "ssr-variant hidden-1acfgmg hidden-79m19w" },
  { bp: "phone", wrapper: "ssr-variant hidden-1i7muly hidden-79m19w" },
  { bp: "tablet", wrapper: "ssr-variant hidden-1i7muly hidden-1acfgmg" },
];

const FRAMER_NAME: Record<Breakpoint, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

const WHITE = "var(--token-d5bfb7b6-6c2f-4f3c-9e32-8e71026f45bc, rgb(255, 255, 255))";
const DARK = "var(--token-c7e8e6d2-1a37-471a-9498-bf74cbe24d87, rgb(7, 35, 47))";
const YELLOW = "var(--token-fd75245f-a555-4530-b2a1-29733fdba6cb, rgb(255, 236, 158))";
const OFF_WHITE = "var(--token-2805af98-3fc7-4c31-802c-353dd58802c4, rgb(250, 250, 250))";

/** Framer's scroll-reveal start state (see ScrollReveal). */
const REVEAL: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateY(30px)",
};

const BACKGROUND_IMAGE_WRAPPER: CSSProperties = {
  position: "absolute",
  borderRadius: "inherit",
  cornerShape: "inherit",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
};

const CTA_COMPONENTS: Record<
  CtaVariant,
  (props: { bp: Breakpoint; content?: CtaContent }) => React.JSX.Element
> = {
  image: CtaImage,
  gallery: CtaGallery,
  "image-right": CtaImageRight,
};

const CTA_CONTAINER: Record<CtaVariant, string> = {
  image: "framer-6ztox7-container",
  gallery: "framer-136km55-container",
  "image-right": "framer-lj8en1-container",
};

export function Cta({
  variant,
  content,
  style,
}: {
  variant: CtaVariant;
  content?: CtaContent;
  /** Extra container style, e.g. `{ order: 0 }` to place the block mid-page instead of above the footer. */
  style?: CSSProperties;
}) {
  const Section = CTA_COMPONENTS[variant];
  return (
    <div className={CTA_CONTAINER[variant]} style={style}>
      {BREAKPOINTS.map(({ bp, wrapper }) => (
        <div key={bp} className={wrapper}>
          <Section bp={bp} content={content} />
        </div>
      ))}
    </div>
  );
}

// ---- Buttons ---------------------------------------------------------------------------------

interface PrimaryColors {
  border: string;
  background: string;
  /** `--variable-reference-u2DVngPhu-fffJ5YP8D`: the label colour. */
  text: string;
  /** `--variable-reference-Oqx4iaqOk-fffJ5YP8D`: the label's hover colour. */
  textHover: string;
  iconWrapper: string;
  icon: string;
}

/** "Make an impact" (`framer-u1OFg` component instance). */
function PrimaryButton({
  phone,
  link,
  colors,
}: {
  phone: boolean;
  link: NavLink;
  colors: PrimaryColors;
}) {
  return (
    <Link
      className={`framer-u1OFg framer-5BI2U framer-gqm115 ${phone ? "framer-v-hry1d3" : "framer-v-gqm115"} framer-dall63`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      href={link.href}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": colors.border,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: colors.background,
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
          "--variable-reference-Oqx4iaqOk-fffJ5YP8D": colors.textHover,
          "--variable-reference-u2DVngPhu-fffJ5YP8D": colors.text,
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
          backgroundColor: colors.iconWrapper,
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
          style={{ "--1afajen": colors.icon }}
        ></div>
      </div>
    </Link>
  );
}

interface SecondaryColors {
  border: string;
  background: string;
  /** `--variable-reference-tCAxAvg0r-QlNMqDH3I`: the label colour. */
  text: string;
  /** `--variable-reference-ytYBNYwN5-QlNMqDH3I`: the label's hover colour. */
  textHover: string;
  icon: string;
}

/** "Donate" (`framer-f1FWS` component instance). */
function SecondaryButton({
  phone,
  link,
  colors,
}: {
  phone: boolean;
  link: NavLink;
  colors: SecondaryColors;
}) {
  return (
    <Link
      className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-highlight="true"
      data-reset="button"
      href={link.href}
      tabIndex={0}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": colors.border,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: colors.background,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div
        className="framer-1yej3r1"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-tCAxAvg0r-QlNMqDH3I)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-tCAxAvg0r-QlNMqDH3I": colors.text,
          "--variable-reference-ytYBNYwN5-QlNMqDH3I": colors.textHover,
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-o266m6"
          data-styles-preset="XE418oX5i"
          dir="auto"
          style={{
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--variable-reference-tCAxAvg0r-QlNMqDH3I))",
          }}
        >
          {link.label}
        </p>
      </div>
      <div
        data-framer-name="Icon"
        className="framer-vCDm1 framer-1k0yxb8"
        style={{ "--1afajen": colors.icon }}
      ></div>
    </Link>
  );
}

// ---- "image": photo with dark overlay ---------------------------------------------------------

const IMAGE_VARIANT: Record<Breakpoint, string> = {
  desktop: "framer-v-8oanqw",
  tablet: "framer-v-1kc6pwr",
  phone: "framer-v-5yhp5e",
};

const IMAGE_PRIMARY: PrimaryColors = {
  border: "var(--token-93edd8e7-92a3-4f50-a54c-d078b79ccce6, rgba(255, 236, 158, 0))",
  background: YELLOW,
  text: DARK,
  textHover: WHITE,
  iconWrapper: DARK,
  icon: WHITE,
};

const IMAGE_SECONDARY: SecondaryColors = {
  border: "var(--token-c42e4405-7003-4877-add3-139459a6462f, rgba(219, 226, 234, 0.2))",
  background: "var(--token-888a365e-211c-4a86-998f-3690b9077dab, rgba(7, 35, 47, 0))",
  text: WHITE,
  textHover: YELLOW,
  icon: YELLOW,
};

function CtaImage({ bp, content = {} }: { bp: Breakpoint; content?: CtaContent }) {
  const phone = bp === "phone";
  const {
    label,
    heading = "Act today and help us save lives!",
    text = site.cta.text,
    primary = site.cta.primary,
    secondary = site.cta.secondary,
  } = content;
  const centred = phone ? { "--framer-text-alignment": "center" } : undefined;
  return (
    <section
      className={`framer-liJ2n framer-IT0zP framer-CXUbw framer-8oanqw ${IMAGE_VARIANT[bp]}`}
      data-framer-name={FRAMER_NAME[bp]}
      style={{ width: "100%" }}
    >
      <div className="framer-1cn76sq" data-framer-name="Base Container">
        <div className="framer-1wmg4ls" data-framer-name="CTA Content">
          <div
            className="framer-iu3drh"
            data-framer-name="Image Wrapper"
            style={{
              willChange: "transform",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              opacity: "0",
              transform: "translateY(30px)",
            }}
          >
            <div
              className="framer-1o4w13w"
              data-framer-name="Overlay"
              style={{
                background: phone
                  ? "linear-gradient(180deg, var(--token-f6ce2c03-f877-4ebf-b404-354ae1e46aaf, rgba(0, 0, 0, 0.6)) -30.000000000000004%, var(--token-214d5d8e-77f3-47cd-9484-45ed534ea6d7, rgba(0, 0, 0, 0.6)) 100%)"
                  : "linear-gradient(180deg, var(--token-962b08ec-1191-4463-bda2-ee2e93c272db, rgb(0, 0, 0)) -30.000000000000004%, var(--token-214d5d8e-77f3-47cd-9484-45ed534ea6d7, rgba(0, 0, 0, 0.8)) 100%)",
              }}
            ></div>
            <div className="framer-bw1cn9">
              <div style={BACKGROUND_IMAGE_WRAPPER} data-framer-background-image-wrapper="true">
                <img
                  decoding="async"
                  width="5281"
                  height="3521"
                  sizes="(min-width: 1280px) max(min(max(100vw, 1px), 1340px) - 40px, 1px), (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px)"
                  srcSet="/images/XuxsIBAT7TablKKH8Ch5Wva9uLY-1.jpg 512w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-2.jpg 1024w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-3.jpg 2048w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY-4.jpg 4096w, /images/XuxsIBAT7TablKKH8Ch5Wva9uLY.jpg 5281w"
                  src="/images/XuxsIBAT7TablKKH8Ch5Wva9uLY.jpg"
                  alt="CTA Image"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    cornerShape: "inherit",
                    objectPosition: phone ? "center 40%" : "center top",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="framer-899lzw" data-framer-name="Text Container Wrapper">
            <div className="framer-133ire" data-framer-name="Text Container">
              {label ? (
                <div className="framer-dVXc9" style={REVEAL}>
                  <SlashLabel text={label} color={YELLOW} />
                </div>
              ) : null}
              <div
                className="framer-14lr9wv"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={{
                  "--extracted-tcooor": WHITE,
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  willChange: "transform",
                  opacity: "0",
                  transform: "translateY(30px)",
                }}
              >
                <div
                  className="framer-text framer-styles-preset-tmdcsn"
                  data-styles-preset="lK1wlh3lp"
                  dir="auto"
                  style={{ ...centred, "--framer-text-color": `var(--extracted-tcooor, ${WHITE})` }}
                >
                  {heading}
                </div>
              </div>
              <div
                className="framer-11o37jf"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{
                  "--extracted-r6o4lv": WHITE,
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  willChange: "transform",
                  opacity: "0",
                  transform: "translateY(30px)",
                }}
              >
                <p
                  className="framer-text framer-styles-preset-184kbjj"
                  data-styles-preset="jo34BIwbe"
                  dir="auto"
                  style={{ ...centred, "--framer-text-color": `var(--extracted-r6o4lv, ${WHITE})` }}
                >
                  {text}
                </p>
              </div>
            </div>
            <div className="framer-1q2218y" data-framer-name="Button Wrapper">
              <div className="framer-z4238k-container" style={REVEAL}>
                <PrimaryButton phone={phone} link={primary} colors={IMAGE_PRIMARY} />
              </div>
              {secondary ? (
                <div className="framer-k6x8wr-container" style={REVEAL}>
                  <SecondaryButton phone={phone} link={secondary} colors={IMAGE_SECONDARY} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- "gallery": yellow card with four photos ---------------------------------------------------

const GALLERY_VARIANT: Record<Breakpoint, string> = {
  desktop: "framer-v-10azu27",
  tablet: "framer-v-1qtv5mo",
  phone: "framer-v-3joust",
};

const GALLERY_SIZES =
  "(min-width: 1280px) max(min(max((min(max((max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 90px) / 2, 1px), 610px) - 10px) / 2, 50px), 300px), 1px), (max-width: 991.98px) max(max((max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 50px) / 2, 50px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(max((min(max((max(min(max(100vw, 1px), 1340px) - 40px, 1px) - 80px) / 2, 1px), 610px) - 10px) / 2, 50px), 300px), 1px)";

const GALLERY_IMAGES = [
  {
    container: "framer-n5ytcb-container",
    width: "3162",
    height: "3110",
    src: "/images/EmoSOOpPR6UtuZ1qNv44M3lYYk.jpg",
    srcSet:
      "/images/EmoSOOpPR6UtuZ1qNv44M3lYYk-1.jpg 512w, /images/EmoSOOpPR6UtuZ1qNv44M3lYYk-2.jpg 1024w, /images/EmoSOOpPR6UtuZ1qNv44M3lYYk-3.jpg 2048w, /images/EmoSOOpPR6UtuZ1qNv44M3lYYk.jpg 3162w",
  },
  {
    container: "framer-1o441ji-container",
    width: "4898",
    height: "3265",
    src: "/images/Kc0CObnCY9n1Eew7ZQoEALrNCo.jpg",
    srcSet:
      "/images/Kc0CObnCY9n1Eew7ZQoEALrNCo-1.jpg 512w, /images/Kc0CObnCY9n1Eew7ZQoEALrNCo-2.jpg 1024w, /images/Kc0CObnCY9n1Eew7ZQoEALrNCo-3.jpg 2048w, /images/Kc0CObnCY9n1Eew7ZQoEALrNCo-4.jpg 4096w, /images/Kc0CObnCY9n1Eew7ZQoEALrNCo.jpg 4898w",
  },
  {
    container: "framer-1ithlqc-container",
    width: "4091",
    height: "4000",
    src: "/images/hv1dFUDcJzB486H6xAYvUmtIoJE.jpg",
    srcSet:
      "/images/hv1dFUDcJzB486H6xAYvUmtIoJE-1.jpg 512w, /images/hv1dFUDcJzB486H6xAYvUmtIoJE-2.jpg 1024w, /images/hv1dFUDcJzB486H6xAYvUmtIoJE-3.jpg 2048w, /images/hv1dFUDcJzB486H6xAYvUmtIoJE.jpg 4091w",
  },
  {
    container: "framer-t57jnr-container",
    width: "5260",
    height: "3507",
    src: "/images/buCII11T8CdVzaaJ3XP8HDWGEgs.jpg",
    srcSet:
      "/images/buCII11T8CdVzaaJ3XP8HDWGEgs-1.jpg 512w, /images/buCII11T8CdVzaaJ3XP8HDWGEgs-2.jpg 1024w, /images/buCII11T8CdVzaaJ3XP8HDWGEgs-3.jpg 2048w, /images/buCII11T8CdVzaaJ3XP8HDWGEgs-4.jpg 4096w, /images/buCII11T8CdVzaaJ3XP8HDWGEgs.jpg 5260w",
  },
];

const CARD_PRIMARY: PrimaryColors = {
  border: "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgba(255, 255, 255, 0))",
  background: DARK,
  text: OFF_WHITE,
  textHover: DARK,
  iconWrapper: YELLOW,
  icon: DARK,
};

function CtaGallery({ bp }: { bp: Breakpoint }) {
  const phone = bp === "phone";
  const centred = phone ? { "--framer-text-alignment": "center" } : undefined;
  return (
    <section
      className={`framer-3UwWL framer-IT0zP framer-CXUbw framer-10azu27 ${GALLERY_VARIANT[bp]}`}
      data-framer-name={FRAMER_NAME[bp]}
      style={{ width: "100%" }}
    >
      <div className="framer-housgy" data-framer-name="Base Container">
        <div
          className="framer-18inlch"
          data-framer-name="Content Block"
          style={{
            backgroundColor: YELLOW,
            willChange: "transform",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            opacity: "0",
            transform: "translateY(30px)",
          }}
        >
          <div className="framer-1cvcvaj" data-framer-name="Images Wrapper" style={REVEAL}>
            {GALLERY_IMAGES.map((image) => (
              <div key={image.container} className={image.container}>
                <div
                  className="framer-yITgI framer-ch8jkl framer-v-ch8jkl"
                  data-framer-name="Desktop"
                  data-highlight="true"
                  tabIndex={0}
                  style={
                    phone
                      ? {
                          height: "100%",
                          width: "100%",
                          borderBottomLeftRadius: "4px",
                          borderBottomRightRadius: "4px",
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                        }
                      : {
                          height: "100%",
                          maxWidth: "100%",
                          width: "100%",
                          borderBottomLeftRadius: "4px",
                          borderBottomRightRadius: "4px",
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                        }
                  }
                >
                  <div className="framer-yxhk2c" style={{ transform: "none" }}>
                    <div
                      style={BACKGROUND_IMAGE_WRAPPER}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        width={image.width}
                        height={image.height}
                        sizes={GALLERY_SIZES}
                        srcSet={image.srcSet}
                        src={image.src}
                        alt="Gallery Image"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="framer-a2hb0t" data-framer-name="Text Container Wrapper">
            <div className="framer-ohohm2" data-framer-name="Text Container">
              <div
                className="framer-stor5t"
                data-framer-name="Heading"
                data-framer-component-type="RichTextContainer"
                style={{
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  willChange: "transform",
                  opacity: "0",
                  transform: "translateY(30px)",
                }}
              >
                <div
                  className="framer-text framer-styles-preset-tmdcsn"
                  data-styles-preset="lK1wlh3lp"
                  dir="auto"
                  style={centred}
                >
                  The time to act is now!
                </div>
              </div>
              <div
                className="framer-7ylq3k"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{
                  "--extracted-r6o4lv": DARK,
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  willChange: "transform",
                  opacity: "0",
                  transform: "translateY(30px)",
                }}
              >
                <p
                  className="framer-text framer-styles-preset-184kbjj"
                  data-styles-preset="jo34BIwbe"
                  dir="auto"
                  style={{ ...centred, "--framer-text-color": `var(--extracted-r6o4lv, ${DARK})` }}
                >
                  {site.cta.text}
                </p>
              </div>
            </div>
            <div className="framer-1b2fnq1-container" style={REVEAL}>
              <PrimaryButton phone={phone} link={site.cta.primary} colors={CARD_PRIMARY} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- "image-right": yellow card beside a photo --------------------------------------------------

const IMAGE_RIGHT_VARIANT: Record<Breakpoint, string> = {
  desktop: "framer-v-j8d6zw",
  tablet: "framer-v-19d6ofv",
  phone: "framer-v-1fgqhdw",
};

const CARD_SECONDARY: SecondaryColors = {
  border: "var(--token-ce053d63-88d7-46b8-bdff-054dbd8d5eec, rgba(0, 0, 0, 0.1))",
  background: "var(--token-93edd8e7-92a3-4f50-a54c-d078b79ccce6, rgba(255, 236, 158, 0))",
  text: DARK,
  textHover: DARK,
  icon: DARK,
};

function CtaImageRight({ bp }: { bp: Breakpoint }) {
  const phone = bp === "phone";
  const centred = phone ? { "--framer-text-alignment": "center" } : undefined;
  return (
    <section
      className={`framer-4s1N8 framer-IT0zP framer-CXUbw framer-j8d6zw ${IMAGE_RIGHT_VARIANT[bp]}`}
      data-framer-name={FRAMER_NAME[bp]}
      style={{ width: "100%" }}
    >
      <div className="framer-13gbuw8" data-framer-name="Base Container">
        <div
          className="framer-1f0diku"
          data-framer-name="Text Container Wrapper"
          style={{
            backgroundColor: YELLOW,
            willChange: "transform",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            opacity: "0",
            transform: "translateY(30px)",
          }}
        >
          <div className="framer-1ou9lna" data-framer-name="Text Container">
            <div
              className="framer-cx5dg7"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{
                "--extracted-tcooor": DARK,
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                willChange: "transform",
                opacity: "0",
                transform: "translateY(30px)",
              }}
            >
              <div
                className="framer-text framer-styles-preset-tmdcsn"
                data-styles-preset="lK1wlh3lp"
                dir="auto"
                style={{ ...centred, "--framer-text-color": `var(--extracted-tcooor, ${DARK})` }}
              >
                Act today and help us save lives!
              </div>
            </div>
            <div
              className="framer-fejoqk"
              data-framer-name="Body"
              data-framer-component-type="RichTextContainer"
              style={{
                "--extracted-r6o4lv": DARK,
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                willChange: "transform",
                opacity: "0",
                transform: "translateY(30px)",
              }}
            >
              <p
                className="framer-text framer-styles-preset-184kbjj"
                data-styles-preset="jo34BIwbe"
                dir="auto"
                style={{ ...centred, "--framer-text-color": `var(--extracted-r6o4lv, ${DARK})` }}
              >
                {site.cta.text}
              </p>
            </div>
          </div>
          <div className="framer-kz7vxs" data-framer-name="Button Wrapper">
            <div className="framer-i4rnoe-container" style={REVEAL}>
              <PrimaryButton phone={phone} link={site.cta.primary} colors={CARD_PRIMARY} />
            </div>
            <div className="framer-1sros0u-container" style={REVEAL}>
              <SecondaryButton phone={phone} link={site.cta.secondary} colors={CARD_SECONDARY} />
            </div>
          </div>
        </div>
        <div
          className="framer-1s2f51v"
          style={{
            willChange: "transform",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            opacity: "0",
            transform: "translateY(30px)",
          }}
        >
          <div style={BACKGROUND_IMAGE_WRAPPER} data-framer-background-image-wrapper="true">
            <img
              decoding="async"
              width="4000"
              height="4129"
              sizes="(min-width: 1280px) max((min(max(100vw, 1px), 1340px) - 50px) / 2, 1px), (max-width: 991.98px) calc(min(max(100vw, 1px), 1340px) - 40px), (min-width: 992px) and (max-width: 1279.98px) max((min(max(100vw, 1px), 1340px) - 50px) / 2, 1px)"
              srcSet="/images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg 992w, /images/tOPVXeix46Mpk5oKPPsOzWUT1v0-1.jpg 1984w, /images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg https://framerusercontent.com/images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg?scale-down-to=4096&width=4000&height=4129, /images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg https://framerusercontent.com/images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg?width=4000&height=4129"
              src="/images/tOPVXeix46Mpk5oKPPsOzWUT1v0.jpg"
              alt="CTA Image"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                cornerShape: "inherit",
                objectPosition: "center top",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
