import Link from "next/link";
import { TOKENS } from "@/components/sections/framer-shared";

export interface PrimaryButtonLinkProps {
  href: string;
  label: string;
  /** "Default" (desktop/tablet) or "Phone" variant of the button component. */
  variant: "desktop" | "phone";
  /**
   * `--border-color` as exported. The banner's "About organization" button uses the white
   * border token with a transparent fallback, the "Get involved" button the transparent
   * yellow token.
   */
  borderColor: string;
}

/**
 * Framer's yellow primary button with the boxed arrow (`framer-u1OFg framer-gqm115`), as
 * placed in the home banner ("About organization", Home Banner Section b1802124ae) and the
 * home "Get involved" block (Events Section cf9075a2f6). The caller renders the instance
 * wrapper (`div.framer-xxx-container`) and its `ssr-variant` wrappers.
 */
export function PrimaryButtonLink({ href, label, variant, borderColor }: PrimaryButtonLinkProps) {
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
        "--border-color": borderColor,
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
          {label}
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
