import { Fragment, type CSSProperties } from "react";
import type { Achievement } from "@/lib/types";
import { TOKENS, REVEAL_STYLE, SlashLabel, type BreakpointClasses } from "./framer-shared";

/**
 * Framer's achievements block (four numbers separated by dividers), converted from the
 * "Our Achievements Section" of:
 * - the resource detail template (hash d7a719f88c, section.framer-acz89m) – /resources/[slug],
 *   light text on the dark section background
 * - the home page (hash 53497dd9b4, section.framer-2gu5qk) – /, with the "/ Our achievements /"
 *   label above the cards
 * - /why-choose-us (hash 22a97264a1, section.framer-mcfwih)
 * and, for `AchievementCards` only, the "Achievement Card Wrapper" embedded in the
 * /causes banner (hash 1104a356c5).
 *
 * The card component (`framer-OPWDX framer-crp8ev`) is identical everywhere; the pages
 * differ in instance classes, breakpoint classes and the colour tokens (yellow/white/grey
 * on the resource page, dark everywhere else), selected by `variant`.
 */
export type AchievementsVariant = "resource" | "home" | "why-choose-us";
export type AchievementCardsVariant = AchievementsVariant | "causes";

interface AchievementsLayout {
  /** "Base Container" class (null for the causes banner, which has its own base). */
  base: string | null;
  /** Instance class of the "/ … /" label (home page only). */
  label: string | null;
  /** "Achievement Card Wrapper" class. */
  wrapper: string;
  /** Instance classes of the four cards. */
  containers: readonly string[];
  /** Classes of the three dividers (hidden on phone). */
  dividers: readonly string[];
  bp: BreakpointClasses;
  theme: "light" | "dark";
}

const LAYOUTS: Record<AchievementCardsVariant, AchievementsLayout> = {
  resource: {
    base: "framer-agq1fd",
    label: null,
    wrapper: "framer-1vuem9",
    containers: [
      "framer-h6ax9d-container",
      "framer-1qljl19-container",
      "framer-1sfl9ia-container",
      "framer-1nhijzr-container",
    ],
    dividers: ["framer-it1djx", "framer-1ksf413", "framer-1ygeudh"],
    bp: { desktop: "hidden-nvs3ka", tablet: "hidden-18zn3uu", phone: "hidden-1ghes7e" },
    theme: "light",
  },
  home: {
    base: "framer-1ow2dz6",
    label: "framer-12dmrhh-container",
    wrapper: "framer-6qge6f",
    containers: [
      "framer-1bwl5tn-container",
      "framer-180bz4h-container",
      "framer-1m7h1b2-container",
      "framer-1u2fy9m-container",
    ],
    dividers: ["framer-17uvumu", "framer-hdamv7", "framer-1fhes2d"],
    bp: { desktop: "hidden-72rtr7", tablet: "hidden-12w2mq9", phone: "hidden-1au1vxw" },
    theme: "dark",
  },
  "why-choose-us": {
    base: "framer-1f02ymn",
    label: null,
    wrapper: "framer-fisa9k",
    containers: [
      "framer-13yvg6o-container",
      "framer-m1nyme-container",
      "framer-1sadnql-container",
      "framer-11t8r3q-container",
    ],
    dividers: ["framer-1n8qixc", "framer-1fb6af3", "framer-t3voq8"],
    bp: { desktop: "hidden-7xpbrn", tablet: "hidden-1ksiir2", phone: "hidden-e3ad3z" },
    theme: "dark",
  },
  causes: {
    base: null,
    label: null,
    wrapper: "framer-1diemyj",
    containers: [
      "framer-t9m0vm-container",
      "framer-115j21w-container",
      "framer-1g6fk6k-container",
      "framer-15laye4-container",
    ],
    dividers: ["framer-1sbfo5x", "framer-mn5s2s", "framer-1m1rbcf"],
    bp: { desktop: "hidden-1v1u7jl", tablet: "hidden-vnme09", phone: "hidden-vgkzoy" },
    theme: "dark",
  },
};

const THEMES = {
  light: { value: TOKENS.yellow, label: TOKENS.white, description: TOKENS.lightGrey },
  dark: { value: TOKENS.dark, label: TOKENS.dark, description: TOKENS.dark },
} as const;

export interface AchievementCardProps {
  item: Achievement;
  /** "Default" (desktop/tablet) or "Phone" (centred text) variant. */
  variant: "desktop" | "phone";
  theme: "light" | "dark";
}

/** One achievement card (`framer-OPWDX framer-crp8ev`): number, label and description. */
export function AchievementCard({ item, variant, theme }: AchievementCardProps) {
  const c = THEMES[theme];
  const phone = variant === "phone";
  const center: CSSProperties = phone ? { "--framer-text-alignment": "center" } : {};
  return (
    <div
      className={`framer-OPWDX framer-oqHiM framer-VFjXM framer-cYxwf framer-crp8ev ${phone ? "framer-v-1o6eqq7" : "framer-v-crp8ev"}`}
      data-framer-name={phone ? "Phone" : "Default"}
      style={{ width: "100%" }}
    >
      <div
        className="framer-1r6f8kj"
        data-framer-name="Heading"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-tcooor": "var(--variable-reference-OA_38tXuT-Xe8qAbBai)",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          "--variable-reference-OA_38tXuT-Xe8qAbBai": c.value,
          transform: "none",
        }}
      >
        <div
          className="framer-text framer-styles-preset-2rcq4e"
          data-styles-preset="RKj2MuImn"
          dir="auto"
          style={{
            ...center,
            "--framer-text-color":
              "var(--extracted-tcooor, var(--variable-reference-OA_38tXuT-Xe8qAbBai))",
          }}
        >
          {item.value}
        </div>
      </div>
      <div className="framer-bgver3" data-framer-name="Text Container">
        <div
          className="framer-yc654j"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
          style={{
            "--extracted-1w1cjl5": "var(--variable-reference-Qhgf5UzEt-Xe8qAbBai)",
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            "--variable-reference-Qhgf5UzEt-Xe8qAbBai": c.label,
            transform: "none",
          }}
        >
          <h6
            className="framer-text framer-styles-preset-2tpdrg"
            data-styles-preset="jqwsbizxz"
            dir="auto"
            style={{
              ...center,
              "--framer-text-color":
                "var(--extracted-1w1cjl5, var(--variable-reference-Qhgf5UzEt-Xe8qAbBai))",
            }}
          >
            {item.label}
          </h6>
        </div>
        <div
          className="framer-13jnxjp"
          data-framer-name="Body"
          data-framer-component-type="RichTextContainer"
          style={{
            "--extracted-r6o4lv": "var(--variable-reference-Wru6a3Xee-Xe8qAbBai)",
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            "--variable-reference-Wru6a3Xee-Xe8qAbBai": c.description,
            transform: "none",
          }}
        >
          <p
            className="framer-text framer-styles-preset-1dpgexf"
            data-styles-preset="wUYf66_Db"
            dir="auto"
            style={{
              ...center,
              "--framer-text-color":
                "var(--extracted-r6o4lv, var(--variable-reference-Wru6a3Xee-Xe8qAbBai))",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export interface AchievementCardsProps {
  items: Achievement[];
  variant: AchievementCardsVariant;
}

/**
 * The "Achievement Card Wrapper" block (reveal-animated): every card rendered in its
 * Default variant (hidden on phone) and its Phone variant (hidden on desktop/tablet), with
 * a divider before each card but the first. Used by `AchievementsSection` and embedded
 * directly in the /causes banner (`variant="causes"`).
 */
export function AchievementCards({ items, variant }: AchievementCardsProps) {
  const v = LAYOUTS[variant];
  return (
    <div className={v.wrapper} data-framer-name="Achievement Card Wrapper" style={REVEAL_STYLE}>
      {items.map((item, i) => {
        const container = v.containers[i % v.containers.length];
        return (
          <Fragment key={i}>
            {i > 0 ? (
              <div
                className={`${v.dividers[(i - 1) % v.dividers.length]} ${v.bp.phone}`}
                data-framer-name="Divider"
              ></div>
            ) : null}
            <div className={`ssr-variant ${v.bp.phone}`}>
              <div className={container}>
                <AchievementCard item={item} variant="desktop" theme={v.theme} />
              </div>
            </div>
            <div className={`ssr-variant ${v.bp.desktop} ${v.bp.tablet}`}>
              <div className={container}>
                <AchievementCard item={item} variant="phone" theme={v.theme} />
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export interface AchievementsSectionProps {
  /** Framer's section class, e.g. "framer-acz89m". */
  className: string;
  items: Achievement[];
  variant: AchievementsVariant;
  /** Render the "/ Our achievements /" label (only the home export has one). */
  showLabel?: boolean;
  label?: string;
}

export function AchievementsSection({
  className,
  items,
  variant,
  showLabel = variant === "home",
  label = "Our achievements",
}: AchievementsSectionProps) {
  const v = LAYOUTS[variant];
  return (
    <section className={className} data-framer-name="Our Achievements Section">
      <div className={v.base ?? undefined} data-framer-name="Base Container">
        {showLabel && v.label ? (
          <div className="ssr-variant">
            <div className={v.label} style={REVEAL_STYLE}>
              <SlashLabel text={label} />
            </div>
          </div>
        ) : null}
        <AchievementCards items={items} variant={variant} />
      </div>
    </section>
  );
}
