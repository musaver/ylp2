import Link from "next/link";
import type { CSSProperties, MouseEventHandler } from "react";
import type { HeaderVariant } from "@/components/layout/Header";
import { joinLink } from "@/content/site";

// Everything that differs between the two header designs Framer exports
// (`framer-1xm12q0-container` = transparent/dark, `framer-bgizbu-container` = solid/white)
// lives in HEADER_THEMES; the markup itself is shared by Header and MobileMenu.

export type HeaderBreakpoint = "desktop" | "tablet" | "phone";

const WHITE = "var(--token-d5bfb7b6-6c2f-4f3c-9e32-8e71026f45bc, rgb(255, 255, 255))";
const DARK = "var(--token-c7e8e6d2-1a37-471a-9498-bf74cbe24d87, rgb(7, 35, 47))";
const YELLOW = "var(--token-fd75245f-a555-4530-b2a1-29733fdba6cb, rgb(255, 236, 158))";

/** Inline style Framer leaves on every element of the "Phone Opened" state after its animation. */
export const OPENED_TRANSFORM = {
  transform: "none",
  transformOrigin: "50% 50% 0px",
} satisfies CSSProperties;

export interface HeaderTheme {
  /** Framer instance wrapper (`div.framer-xxx-container`). */
  container: string;
  /** Classes shared by every breakpoint variant of the `<nav>`. */
  navBase: string;
  /** Per-breakpoint variant class (`framer-v-*`) of the nav in its default state. */
  navVariant: Record<HeaderBreakpoint, string>;
  /** Variant classes once the page is scrolled (Framer's "BG" variants). */
  navVariantSolid: Record<HeaderBreakpoint, string>;
  /** Variant class of the "Phone Opened" state. */
  navVariantPhoneOpened: string;
  /** Nav background in the default / scrolled state. */
  bg: string;
  bgSolid: string;
  /** Full inline style of the nav in the "Phone Opened" state. */
  phoneOpenedNavStyle: CSSProperties;
  baseContainer: string;
  phoneMenu: string;
  logoContainer: string;
  logo: {
    className: string;
    name: string;
    src: string;
    width: string;
    height: string;
    objectFit: "contain" | "cover";
    /** Tints the white YouthLink logo for light backgrounds. */
    filter?: string;
  };
  navLinks: string;
  navLinkWrappers: string[];
  navLinkClassName: string;
  navLinkPreset: string;
  donateContainer: string;
  divider: string;
  dividerBg: string;
  iconWrapper: string;
  menuIcon: string;
  closeIcon: string;
  iconColor: string;
  overlay: string;
  overlayBg: string;
  phoneNavLinks: string;
  phoneNavLinkWrappers: string[];
  phoneNavLinkClassName: string;
  phoneNavLinkPreset: string;
  /** Framer's scroll-lock component instance (its inline `<style>` is replaced by JS). */
  scrollLock: string;
}

export const HEADER_THEMES: Record<HeaderVariant, HeaderTheme> = {
  transparent: {
    container: "framer-1xm12q0-container",
    navBase: "framer-FPi9S framer-SgJls framer-s26el framer-q1vhx framer-16wc47w",
    navVariant: {
      desktop: "framer-v-16wc47w",
      tablet: "framer-v-1moz2an",
      phone: "framer-v-ix446u",
    },
    navVariantSolid: {
      desktop: "framer-v-18zgsf7",
      tablet: "framer-v-1ngupck",
      phone: "framer-v-1ki37o9",
    },
    navVariantPhoneOpened: "framer-v-t5eoul",
    bg: "var(--token-888a365e-211c-4a86-998f-3690b9077dab, rgb(7, 35, 47))",
    bgSolid: DARK,
    phoneOpenedNavStyle: {
      backgroundColor: DARK,
      width: "100%",
      willChange: "auto",
      ...OPENED_TRANSFORM,
    },
    baseContainer: "framer-glrosk",
    phoneMenu: "framer-7vnb2d",
    logoContainer: "framer-1fcegul-container",
    logo: {
      className: "framer-drAj8 framer-1i1qkw1 framer-v-1i1qkw1 framer-10v3kq4",
      name: "Default",
      src: "/logo.png",
      width: "716",
      height: "352",
      objectFit: "contain",
    },
    navLinks: "framer-peuckq",
    navLinkWrappers: ["framer-6tsdrq", "framer-1dfvbcd", "framer-hyxfb1", "framer-1capfr8"],
    navLinkClassName: "framer-text framer-styles-preset-c97ufc",
    navLinkPreset: "pxsIdl8oj",
    donateContainer: "framer-sv92eb-container",
    divider: "framer-2h6jc7",
    dividerBg: "var(--token-a9d019e1-f0b4-4922-bfad-ef52ccfa28f9, rgba(255, 255, 255, 0.1))",
    iconWrapper: "framer-8jasun",
    menuIcon: "framer-V5zRM framer-1ca4rp9",
    closeIcon: "framer-lZXAL framer-1ca4rp9",
    iconColor: WHITE,
    overlay: "framer-dizm90",
    overlayBg: "var(--token-962b08ec-1191-4463-bda2-ee2e93c272db, rgba(0, 0, 0, 0))",
    phoneNavLinks: "framer-1feffd2",
    phoneNavLinkWrappers: [
      "framer-g2wjjs",
      "framer-ttqwaw",
      "framer-sbrcuy",
      "framer-15i5h9w",
      "framer-7fedgl",
      "framer-m78vjt",
      "framer-1y4qyk9",
      "framer-sf0wdn",
      "framer-6s23oe",
    ],
    phoneNavLinkClassName: "framer-text framer-styles-preset-gv8hu1",
    phoneNavLinkPreset: "Cc4_Mftcv",
    scrollLock: "framer-1lm0vx7-container",
  },
  solid: {
    container: "framer-bgizbu-container",
    navBase: "framer-rRvYB framer-SgJls framer-k7set framer-5EAfC framer-4hbqv9",
    navVariant: {
      desktop: "framer-v-4hbqv9",
      tablet: "framer-v-1dpptnl",
      phone: "framer-v-e6r06b",
    },
    // The solid header has no scroll behaviour: same classes in both states.
    navVariantSolid: {
      desktop: "framer-v-4hbqv9",
      tablet: "framer-v-1dpptnl",
      phone: "framer-v-e6r06b",
    },
    navVariantPhoneOpened: "framer-v-12so2pz",
    bg: WHITE,
    bgSolid: WHITE,
    phoneOpenedNavStyle: { backgroundColor: WHITE, width: "100%", ...OPENED_TRANSFORM },
    baseContainer: "framer-39stcz",
    phoneMenu: "framer-1sc9ngk",
    logoContainer: "framer-2p9d0v-container",
    logo: {
      className: "framer-drAj8 framer-1i1qkw1 framer-v-14fqu9x framer-10v3kq4",
      name: "Dark",
      src: "/logo.png",
      width: "716",
      height: "352",
      objectFit: "contain",
      // White -> the site's dark navy (rgb(7, 35, 47)).
      filter:
        "brightness(0) saturate(100%) invert(10%) sepia(28%) saturate(2400%) hue-rotate(166deg) brightness(92%)",
    },
    navLinks: "framer-1y67kiw",
    navLinkWrappers: ["framer-pjw77i", "framer-zlhvgj", "framer-749339", "framer-g0xm82"],
    navLinkClassName: "framer-text framer-styles-preset-9530i4",
    navLinkPreset: "CkJaGi78s",
    donateContainer: "framer-1w7bynz-container",
    divider: "framer-aeo7ef",
    dividerBg: "var(--token-ce053d63-88d7-46b8-bdff-054dbd8d5eec, rgba(0, 0, 0, 0.1))",
    iconWrapper: "framer-1p4hqtr",
    menuIcon: "framer-V5zRM framer-d13j41",
    closeIcon: "framer-lZXAL framer-d13j41",
    iconColor: DARK,
    overlay: "framer-vebefs",
    overlayBg: "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgba(255, 255, 255, 0))",
    phoneNavLinks: "framer-nvk7ng",
    phoneNavLinkWrappers: [
      "framer-16mt02z",
      "framer-mkb1i6",
      "framer-25qh96",
      "framer-rf6kz4",
      "framer-45ffma",
      "framer-lwupmu",
      "framer-10ltg9l",
      "framer-1uu0o80",
      "framer-lmgwwg",
    ],
    phoneNavLinkClassName: "framer-text framer-styles-preset-egj4q0",
    phoneNavLinkPreset: "d_z7D8QCz",
    scrollLock: "framer-1g4wzcp-container",
  },
};

interface HeaderLogoProps {
  theme: HeaderTheme;
  /** Whether "/" is the current route (`data-framer-page-link-current`). */
  current: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** The logo link (`framer-drAj8` component instance) used by every header state. */
export function HeaderLogo({ theme, current, style, onClick }: HeaderLogoProps) {
  const { logo } = theme;
  return (
    <Link
      className={logo.className}
      data-framer-name={logo.name}
      data-highlight="true"
      href="/"
      data-framer-page-link-current={current ? "true" : undefined}
      tabIndex={0}
      style={style}
      onClick={onClick}
    >
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
          width={logo.width}
          height={logo.height}
          src={logo.src}
          alt="Company Logo"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            cornerShape: "inherit",
            objectPosition: "center",
            objectFit: logo.objectFit,
            filter: logo.filter,
          }}
        />
      </div>
    </Link>
  );
}

interface HeaderDonateProps {
  /** `true` renders the button's "Phone" variant used inside the opened phone menu. */
  phone?: boolean;
  current: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** The yellow "Join YouthLink" CTA button (`framer-f1FWS` component instance) in the header. */
export function HeaderDonate({ phone = false, current, onClick }: HeaderDonateProps) {
  return (
    <Link
      className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
      data-border="true"
      data-framer-name={phone ? "Phone" : "Default"}
      data-highlight="true"
      data-reset="button"
      href={joinLink.href}
      data-framer-page-link-current={current ? "true" : undefined}
      tabIndex={0}
      style={
        phone
          ? {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgb(255, 255, 255))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: YELLOW,
              borderRadius: "8px",
              ...OPENED_TRANSFORM,
            }
          : {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-39bc6933-f382-4309-8189-7436daaaa832, rgb(255, 255, 255))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: YELLOW,
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }
      }
      onClick={onClick}
    >
      <div
        className="framer-1yej3r1"
        data-framer-name="CTA Text"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": "var(--variable-reference-tCAxAvg0r-QlNMqDH3I)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-tCAxAvg0r-QlNMqDH3I": DARK,
          "--variable-reference-ytYBNYwN5-QlNMqDH3I": WHITE,
          transform: "none",
          ...(phone ? { transformOrigin: OPENED_TRANSFORM.transformOrigin } : undefined),
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
          {joinLink.label}
        </p>
      </div>
      <div
        data-framer-name="Icon"
        className="framer-vCDm1 framer-1k0yxb8"
        style={{ "--1afajen": DARK, ...(phone ? OPENED_TRANSFORM : undefined) }}
      ></div>
    </Link>
  );
}
