import Link from "next/link";
import { TOKENS } from "@/components/sections/framer-shared";

/**
 * Framer's filled button with arrow icon (`framer-u1OFg framer-gqm115`) as placed on the
 * about-us page: "Our mission" in the About Us Banner Section (5e92083b94), "Contribute" in the
 * About Us Section (0c1edf0439) and "Get involved" in the Events Section (271ee64f0f).
 * Renders the component root only; the section places the instance wrapper.
 *
 * Themes as exported:
 * - `yellow`: yellow background, dark text (white on hover), dark icon box with white arrow
 * - `dark`: dark background, white text (dark on hover), yellow icon box with dark arrow
 */
export type PrimaryButtonTheme = "yellow" | "dark";

const THEMES: Record<
  PrimaryButtonTheme,
  {
    border: string;
    background: string;
    text: string;
    hoverText: string;
    iconWrapper: string;
    icon: string;
  }
> = {
  yellow: {
    border: TOKENS.yellowTransparent,
    background: TOKENS.yellow,
    text: TOKENS.dark,
    hoverText: TOKENS.white,
    iconWrapper: TOKENS.dark,
    icon: TOKENS.white,
  },
  dark: {
    border: "var(--token-888a365e-211c-4a86-998f-3690b9077dab, rgba(7, 35, 47, 0))",
    background: TOKENS.dark,
    text: TOKENS.white,
    hoverText: TOKENS.dark,
    iconWrapper: TOKENS.yellow,
    icon: TOKENS.dark,
  },
};

export interface PrimaryButtonLinkProps {
  href: string;
  label: string;
  /** "Default" (desktop/tablet) or "Phone" variant of the button component. */
  variant: "desktop" | "phone";
  theme?: PrimaryButtonTheme;
}

export function PrimaryButtonLink({
  href,
  label,
  variant,
  theme = "yellow",
}: PrimaryButtonLinkProps) {
  const t = THEMES[theme];
  const phone = variant === "phone";
  return (
    <Link
      className={`framer-u1OFg framer-5BI2U framer-gqm115 ${phone ? "framer-v-hry1d3" : "framer-v-gqm115"} framer-dall63`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-reset="button"
      href={href}
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
        className="framer-1uyh8kc"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-u2DVngPhu-fffJ5YP8D)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-Oqx4iaqOk-fffJ5YP8D": t.hoverText,
          "--variable-reference-u2DVngPhu-fffJ5YP8D": t.text,
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
          {label}
        </p>
      </div>
      <div
        className="framer-mkgslb"
        data-framer-name="Icon Wrapper"
        style={{
          backgroundColor: t.iconWrapper,
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
          style={{ "--1afajen": t.icon }}
        ></div>
      </div>
    </Link>
  );
}
