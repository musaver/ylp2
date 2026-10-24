import Link from "next/link";
import { joinLink, footerNav, site } from "@/content/site";
import type { SocialLink } from "@/lib/types";

// Framer's footer (`div.framer-1dlvffb-container`, hash 5b7406e20b). The three breakpoint
// variants only differ in a handful of variant classes and text presets, so one render
// function covers all of them.

type Breakpoint = "desktop" | "tablet" | "phone";

const BREAKPOINTS: { bp: Breakpoint; wrapper: string }[] = [
  { bp: "desktop", wrapper: "ssr-variant hidden-1acfgmg hidden-79m19w" },
  { bp: "phone", wrapper: "ssr-variant hidden-1i7muly hidden-79m19w" },
  { bp: "tablet", wrapper: "ssr-variant hidden-1i7muly hidden-1acfgmg" },
];

const FOOTER_VARIANT: Record<Breakpoint, string> = {
  desktop: "framer-v-15sg028",
  tablet: "framer-v-t8gkg9",
  phone: "framer-v-kvai36",
};

const FRAMER_NAME: Record<Breakpoint, string> = {
  desktop: "Desktop",
  tablet: "Tablet",
  phone: "Phone",
};

const SOCIALS: Record<SocialLink["name"], { container: string; icon: string }> = {
  instagram: { container: "framer-s47w6i-container", icon: "framer-a6Ejj framer-nbf0pr" },
  youtube: { container: "framer-qdmj6x-container", icon: "framer-jWDNt framer-nbf0pr" },
  facebook: { container: "framer-2lphzd-container", icon: "framer-H03vJ framer-nbf0pr" },
};

/**
 * Three columns of links; the per-link wrapper classes come from the export (they all share one
 * rule set, so a fourth link in a column reuses the last one).
 */
const NAV_COLUMNS = [
  { className: "framer-1d8vejf", links: ["framer-1l1ku9e", "framer-ssqp33", "framer-gdm51i"] },
  { className: "framer-170364", links: ["framer-1yy8ikz", "framer-s90sbs", "framer-1ptmxoj"] },
  { className: "framer-glq5ge", links: ["framer-qq6vy1", "framer-1g8gw7x", "framer-1yuty43"] },
];

const WHITE = "var(--token-d5bfb7b6-6c2f-4f3c-9e32-8e71026f45bc, rgb(255, 255, 255))";
const DARK = "var(--token-c7e8e6d2-1a37-471a-9498-bf74cbe24d87, rgb(7, 35, 47))";
const YELLOW = "var(--token-fd75245f-a555-4530-b2a1-29733fdba6cb, rgb(255, 236, 158))";
const LINE = "var(--token-c42e4405-7003-4877-add3-139459a6462f, rgba(219, 226, 234, 0.2))";

/** Splits the links over the columns, the first columns taking the extra ones (e.g. 4/3/3). */
function splitEvenly<T>(items: readonly T[], columns: number): T[][] {
  const base = Math.floor(items.length / columns);
  const extra = items.length % columns;
  const result: T[][] = [];
  let start = 0;
  for (let c = 0; c < columns; c++) {
    const size = base + (c < extra ? 1 : 0);
    result.push(items.slice(start, start + size));
    start += size;
  }
  return result;
}

export function Footer() {
  return (
    <div className="framer-1dlvffb-container">
      {BREAKPOINTS.map(({ bp, wrapper }) => (
        <div key={bp} className={wrapper}>
          <FooterVariant bp={bp} />
        </div>
      ))}
    </div>
  );
}

function FooterVariant({ bp }: { bp: Breakpoint }) {
  const phone = bp === "phone";
  const centred = phone ? { "--framer-text-alignment": "center" } : undefined;
  const columnLinks = splitEvenly(footerNav, NAV_COLUMNS.length);

  return (
    <footer
      className={`framer-hPbBS framer-VFjXM framer-SgJls framer-3jpSc framer-w9DEK framer-hquHk framer-s26el framer-q1vhx framer-15sg028 ${FOOTER_VARIANT[bp]}`}
      data-framer-name={FRAMER_NAME[bp]}
      style={{
        width: "100%",
        willChange: "transform",
        opacity: "0",
        transform: "translateY(30px)",
      }}
    >
      <div className="framer-1py0ysn" data-framer-name="Base Container">
        <div
          className="framer-1hrkjoj"
          data-framer-name="Footer Content"
          style={{
            backgroundColor: DARK,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <div className="framer-j78sgc" data-framer-name="Top Content">
            <div className="framer-19m785j" data-framer-name="Brand Content Wrapper">
              <div className="framer-mgmomw" data-framer-name="Text Content Wrapper">
                <div className="framer-ig62af-container">
                  <Link
                    className="framer-drAj8 framer-1i1qkw1 framer-v-1i1qkw1 framer-10v3kq4"
                    data-framer-name="Default"
                    data-highlight="true"
                    href="/"
                    tabIndex={0}
                    style={{ height: "100%", width: "100%" }}
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
                        width="716"
                        height="352"
                        src="/logo.png"
                        alt="Company Logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "left center",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className="framer-sqaspo"
                  data-framer-name="Body"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    "--extracted-1w1cjl5": WHITE,
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    transform: "none",
                  }}
                >
                  <h6
                    className="framer-text framer-styles-preset-2tpdrg"
                    data-styles-preset="jqwsbizxz"
                    dir="auto"
                    style={{
                      ...centred,
                      "--framer-text-color": `var(--extracted-1w1cjl5, ${WHITE})`,
                    }}
                  >
                    {site.tagline}
                  </h6>
                </div>
              </div>
              <div className="framer-4vf5bc" data-framer-name="Socials Wrapper">
                {site.socials.map((social) => (
                  <div key={social.name} className={SOCIALS[social.name].container}>
                    <a
                      className={`framer-2KV6z framer-111uymw ${phone ? "framer-v-15g8yid" : "framer-v-111uymw"} framer-4sk85k`}
                      data-framer-name={phone ? "Phone" : "Default"}
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                      style={{
                        backgroundColor: YELLOW,
                        height: "100%",
                        width: "100%",
                        borderBottomLeftRadius: "4px",
                        borderBottomRightRadius: "4px",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                      }}
                    >
                      <div
                        data-framer-name="Icon"
                        className={SOCIALS[social.name].icon}
                        style={{ "--1afajen": DARK }}
                      ></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="framer-phpz7w" data-framer-name="Nav Links Wrapper">
              {NAV_COLUMNS.map((column, c) => (
                <nav
                  key={column.className}
                  className={column.className}
                  data-framer-name="Nav Links"
                >
                  {(columnLinks[c] ?? []).map((link, i) => (
                    <div
                      key={link.href}
                      className={column.links[Math.min(i, column.links.length - 1)]}
                      data-framer-name="Nav Link"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-8z5t4e"
                        data-styles-preset="ZZLVG0Ijr"
                        dir="auto"
                      >
                        <Link
                          className={`framer-text ${phone ? "framer-styles-preset-kr0qal" : "framer-styles-preset-1llrkok"}`}
                          data-styles-preset={phone ? "UFqshRFBG" : "wWiTzYm8r"}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </p>
                    </div>
                  ))}
                </nav>
              ))}
            </div>
          </div>
          <div className="framer-xnkl6u" data-framer-name="Bottom Content">
            <div
              className="framer-1e8ygy2"
              data-framer-name="Divider"
              style={{ backgroundColor: LINE }}
            ></div>
            <div className="framer-18anuf7" data-framer-name="Bottom Content Wrapper">
              <div className="framer-mgfy3i" data-framer-name="Copyrights">
                <div
                  className="framer-1tybc1w"
                  data-framer-name="Copyrights"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    "--extracted-r6o4lv": WHITE,
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    transform: "none",
                  }}
                >
                  <p
                    className="framer-text framer-styles-preset-ovze24"
                    data-styles-preset="Ing5tGR1P"
                    dir="auto"
                    style={{
                      ...centred,
                      "--framer-text-color": `var(--extracted-r6o4lv, ${WHITE})`,
                    }}
                  >
                    {site.copyright}
                  </p>
                </div>
              </div>
              <div className="framer-rt6d18-container">
                <Link
                  className={`framer-f1FWS framer-5BI2U framer-13ee4dt ${phone ? "framer-v-2aoje4" : "framer-v-13ee4dt"} framer-1lzozse`}
                  data-border="true"
                  data-framer-name={phone ? "Phone" : "Default"}
                  data-highlight="true"
                  data-reset="button"
                  href={joinLink.href}
                  tabIndex={0}
                  style={{
                    "--border-bottom-width": "1px",
                    "--border-color": LINE,
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backgroundColor: DARK,
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
                      "--variable-reference-tCAxAvg0r-QlNMqDH3I": WHITE,
                      "--variable-reference-ytYBNYwN5-QlNMqDH3I": YELLOW,
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
                      {joinLink.label}
                    </p>
                  </div>
                  <div
                    data-framer-name="Icon"
                    className="framer-vCDm1 framer-1k0yxb8"
                    style={{ "--1afajen": YELLOW }}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
