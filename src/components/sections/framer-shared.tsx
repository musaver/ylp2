import type { CSSProperties } from "react";
import Link from "next/link";
import type { FramerImage } from "@/lib/types";

/**
 * Building blocks shared by the converted Framer sections and cards: colour tokens, the
 * scroll-reveal start style, the background-image wrapper, the "/ Label /" component
 * (`framer-ftU4f`) and the outline button (`framer-f1FWS`). Everything here is Framer's
 * markup verbatim, only parametrised with content.
 */

/** Framer colour tokens as they appear inline in the export (`var(--token-…, fallback)`). */
export const TOKENS = {
  dark: "var(--token-c7e8e6d2-1a37-471a-9498-bf74cbe24d87, rgb(7, 35, 47))",
  blue: "var(--token-45458457-5b59-4f05-bd13-d1a25b990195, rgb(19, 116, 219))",
  yellow: "var(--token-fd75245f-a555-4530-b2a1-29733fdba6cb, rgb(255, 236, 158))",
  white: "var(--token-d5bfb7b6-6c2f-4f3c-9e32-8e71026f45bc, rgb(255, 255, 255))",
  lightGrey: "var(--token-f5a9957c-6cef-4fb6-aa9e-60783be2bfa6, rgb(219, 226, 234))",
  grey: "var(--token-5e57f2c7-1a51-4916-a826-383f429d50c1, rgb(105, 111, 119))",
  surface: "var(--token-2805af98-3fc7-4c31-802c-353dd58802c4, rgb(250, 250, 250))",
  yellowTransparent: "var(--token-93edd8e7-92a3-4f50-a54c-d078b79ccce6, rgba(255, 236, 158, 0))",
  borderLight: "var(--token-ce053d63-88d7-46b8-bdff-054dbd8d5eec, rgba(0, 0, 0, 0.1))",
  borderDark: "var(--token-c42e4405-7003-4877-add3-139459a6462f, rgba(219, 226, 234, 0.2))",
  borderWhite: "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgb(255, 255, 255))",
} as const;

/** Breakpoint variant of a Framer component (desktop ≥ 1280px, tablet ≥ 992px, phone below). */
export type CardVariant = "desktop" | "tablet" | "phone";

/** The `hidden-*` classes Framer generates per page template to hide a breakpoint variant. */
export interface BreakpointClasses {
  desktop: string;
  tablet: string;
  phone: string;
}

/**
 * Framer's scroll-reveal start state: kept inline on animated wrappers so `ScrollReveal`
 * can animate them into place (see components/runtime/ScrollReveal.tsx).
 */
export const REVEAL_STYLE: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateY(30px)",
};

/**
 * Scroll-reveal start style with a custom entry transform (slide, spin, scale…). Pair it with
 * a `data-reveal-delay` attribute (ms) to stagger siblings.
 */
export function revealStyle(transform: string): CSSProperties {
  return { willChange: "transform", opacity: "0", transform };
}

/**
 * @deprecated `FramerImage` now carries `objectPosition` itself; use `FramerImage`.
 * Kept as an alias for existing imports.
 */
export type PositionedImage = FramerImage;

export interface FramerBackgroundImageProps {
  /** The image; its `objectPosition` (Framer's inline `object-position`) wins when set. */
  image: FramerImage;
  /** Literal `sizes` attribute from the Framer markup for this placement. */
  sizes?: string;
  loading?: "lazy" | "eager";
  /** Fallback `object-position` when the image data does not carry one. */
  objectPosition?: string;
}

/** Framer's absolutely positioned background-image wrapper with its plain `<img>`. */
export function FramerBackgroundImage({
  image,
  sizes,
  loading,
  objectPosition = "center",
}: FramerBackgroundImageProps) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "inherit",
        cornerShape: "inherit",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}
      data-framer-background-image-wrapper="true"
    >
      <img
        decoding="async"
        loading={loading}
        width={image.width > 0 ? image.width : undefined}
        height={image.height > 0 ? image.height : undefined}
        sizes={sizes}
        srcSet={image.srcSet}
        src={image.src}
        alt={image.alt}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          cornerShape: "inherit",
          objectPosition: image.objectPosition ?? objectPosition,
          objectFit: "cover",
        }}
      />
    </div>
  );
}

const LABEL_TEXT_STYLE: CSSProperties = {
  "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-iijXLso40-i7QMmW9sc))",
};

function labelStyle(color: string): CSSProperties {
  return {
    "--extracted-r6o4lv": "var(--variable-reference-iijXLso40-i7QMmW9sc)",
    "--framer-link-text-color": "rgb(0, 153, 255)",
    "--framer-link-text-decoration": "underline",
    "--variable-reference-iijXLso40-i7QMmW9sc": color,
    transform: "none",
  };
}

export interface SlashLabelProps {
  /** Text between the slashes, e.g. "Other ways to help". */
  text: string;
  /** Colour token; blue everywhere except the dark event section (yellow). */
  color?: string;
}

/**
 * Framer's "/ Label /" component (`framer-ftU4f framer-1f9xhjy`), used above section
 * headings on every page. The caller renders its instance wrapper (`div.framer-xxx-container`).
 */
export function SlashLabel({ text, color = TOKENS.blue }: SlashLabelProps) {
  return (
    <div
      className="framer-ftU4f framer-dVXc9 framer-1f9xhjy framer-v-1f9xhjy"
      data-framer-name="Default"
    >
      <div
        className="framer-e9rumw"
        data-framer-name="Label"
        data-framer-component-type="RichTextContainer"
        style={labelStyle(color)}
      >
        <p
          className="framer-text framer-styles-preset-1u0xujd"
          data-styles-preset="QZ8HlqCwU"
          dir="auto"
          style={LABEL_TEXT_STYLE}
        >
          /
        </p>
      </div>
      <div
        className="framer-1eka3fh"
        data-framer-name="Label"
        data-framer-component-type="RichTextContainer"
        style={labelStyle(color)}
      >
        <p
          className="framer-text framer-styles-preset-1u0xujd"
          data-styles-preset="QZ8HlqCwU"
          dir="auto"
          style={LABEL_TEXT_STYLE}
        >
          {text}
        </p>
      </div>
      <div
        className="framer-1hwfhsj"
        data-framer-name="Label"
        data-framer-component-type="RichTextContainer"
        style={labelStyle(color)}
      >
        <p
          className="framer-text framer-styles-preset-1u0xujd"
          data-styles-preset="QZ8HlqCwU"
          dir="auto"
          style={LABEL_TEXT_STYLE}
        >
          /
        </p>
      </div>
    </div>
  );
}

/**
 * Colour themes of the outline button as exported:
 * - `outline`: transparent on light sections (dark text, blue icon)
 * - `white`: white background (home / our-mission causes, resources sections)
 * - `dark`: on the dark event section (white text, yellow hover text, white icon)
 */
export type OutlineButtonTheme = "outline" | "white" | "dark";

const BUTTON_THEMES: Record<
  OutlineButtonTheme,
  { border: string; background: string; text: string; hoverText: string; icon: string }
> = {
  outline: {
    border: TOKENS.borderLight,
    background: TOKENS.yellowTransparent,
    text: TOKENS.dark,
    hoverText: TOKENS.dark,
    icon: TOKENS.blue,
  },
  white: {
    border: TOKENS.borderLight,
    background: TOKENS.white,
    text: TOKENS.dark,
    hoverText: TOKENS.dark,
    icon: TOKENS.blue,
  },
  dark: {
    border: TOKENS.borderDark,
    background: TOKENS.yellowTransparent,
    text: TOKENS.white,
    hoverText: TOKENS.yellow,
    icon: TOKENS.white,
  },
};

export interface OutlineButtonLinkProps {
  href: string;
  label: string;
  /** "Default" (desktop/tablet) or "Phone" variant of the button component. */
  variant: "desktop" | "phone";
  theme?: OutlineButtonTheme;
  /** Overrides the arrow icon colour (the project list "Read more" button uses the dark token). */
  iconColor?: string;
}

/**
 * Framer's outline button with arrow (`framer-f1FWS framer-13ee4dt`): "View all …",
 * "All projects", "Read more", … The caller renders its instance wrapper.
 */
export function OutlineButtonLink({
  href,
  label,
  variant,
  theme = "outline",
  iconColor,
}: OutlineButtonLinkProps) {
  const t = BUTTON_THEMES[theme];
  const phone = variant === "phone";
  return (
    <Link
      className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-highlight="true"
      data-reset="button"
      href={href}
      tabIndex={0}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": t.border,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        backgroundColor: t.background,
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
          "--variable-reference-tCAxAvg0r-QlNMqDH3I": t.text,
          "--variable-reference-ytYBNYwN5-QlNMqDH3I": t.hoverText,
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
          {label}
        </p>
      </div>
      <div
        data-framer-name="Icon"
        className="framer-vCDm1 framer-1k0yxb8"
        style={{ "--1afajen": iconColor ?? t.icon }}
      ></div>
    </Link>
  );
}

/** Framer's section heading container (`h2` preset) with the reveal style. */
export interface SectionHeadingProps {
  className: string;
  text: string;
  /** Phone variants centre the heading via `--framer-text-alignment`. */
  centered?: boolean;
  /** Text colour token (only the dark event section sets one). */
  color?: string;
  /** Reveal delay (ms), to follow the section label in. */
  delay?: number;
}

export function SectionHeading({ className, text, centered, color, delay }: SectionHeadingProps) {
  const style: CSSProperties = {};
  if (centered) style["--framer-text-alignment"] = "center";
  if (color) style["--framer-text-color"] = color;
  return (
    <div
      className={className}
      data-framer-name="Heading"
      data-framer-component-type="RichTextContainer"
      data-reveal-delay={delay}
      style={REVEAL_STYLE}
    >
      <h2
        className="framer-text framer-styles-preset-dghseo"
        data-styles-preset="ZIAYgZ0hD"
        dir="auto"
        style={centered || color ? style : undefined}
      >
        {text}
      </h2>
    </div>
  );
}
