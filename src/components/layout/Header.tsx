"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HEADER_THEMES,
  HeaderDonate,
  HeaderLogo,
  type HeaderTheme,
} from "@/components/layout/HeaderParts";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useBreakpoint, type Breakpoint } from "@/components/runtime/useBreakpoint";
import { headerNav, joinLink } from "@/content/site";
import { headerVariantFor } from "@/lib/routes";

/**
 * `"transparent"` = Framer's dark header (`framer-1xm12q0-container`) that turns solid once the
 * page's `#header-trigger` scrolls out of view. `"solid"` = the white header
 * (`framer-bgizbu-container`).
 */
export type HeaderVariant = "transparent" | "solid";

/** Breakpoints that render the full navigation bar. */
type NavBreakpoint = "desktop" | "tablet";

/**
 * The site header, rendered once in the root layout. The design (transparent or solid) follows
 * the current route; pass `variant` to override it.
 */
export function Header({ variant: variantProp }: { variant?: HeaderVariant } = {}) {
  const pathname = usePathname();
  const variant = variantProp ?? headerVariantFor(pathname);
  const theme = HEADER_THEMES[variant];
  const breakpoint = useBreakpoint();

  // ---- Solid on scroll (transparent header only) ----------------------------------------
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    if (variant !== "transparent") return;
    const trigger = document.getElementById("header-trigger");
    if (!trigger) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setSolid(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(trigger);
    return () => observer.disconnect();
  }, [variant, pathname]);

  // ---- Phone menu -----------------------------------------------------------------------
  const [phoneOpen, setPhoneOpen] = useState(false);
  useEffect(() => {
    if (!phoneOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phoneOpen]);

  // ---- Reset transient UI on navigation / breakpoint change -----------------------------
  // Done during render (React's "adjust state when a prop changes" pattern) so the stale menu
  // never reaches the screen.
  const [seen, setSeen] = useState<{ pathname: string; breakpoint: Breakpoint }>({
    pathname,
    breakpoint,
  });
  if (seen.pathname !== pathname || seen.breakpoint !== breakpoint) {
    setSeen({ pathname, breakpoint });
    if (seen.pathname !== pathname || breakpoint !== "phone") setPhoneOpen(false);
  }

  return (
    <div className={theme.container}>
      <div className="ssr-variant hidden-1acfgmg hidden-79m19w">
        <NavBar theme={theme} bp="desktop" solid={solid} pathname={pathname} />
      </div>
      <div className="ssr-variant hidden-1i7muly hidden-79m19w">
        {phoneOpen ? (
          <MobileMenu theme={theme} pathname={pathname} onClose={() => setPhoneOpen(false)} />
        ) : (
          <PhoneBar
            theme={theme}
            solid={solid}
            pathname={pathname}
            onOpen={() => setPhoneOpen(true)}
          />
        )}
      </div>
      <div className="ssr-variant hidden-1i7muly hidden-1acfgmg">
        <NavBar theme={theme} bp="tablet" solid={solid} pathname={pathname} />
      </div>
    </div>
  );
}

interface NavBarProps {
  theme: HeaderTheme;
  bp: NavBreakpoint;
  solid: boolean;
  pathname: string;
}

/** The desktop / tablet navigation bar. */
function NavBar({ theme, bp, solid, pathname }: NavBarProps) {
  const variants = solid ? theme.navVariantSolid : theme.navVariant;
  return (
    <nav
      className={`${theme.navBase} ${variants[bp]}`}
      data-framer-name={bp === "desktop" ? "Desktop" : "Tablet"}
      style={{ backgroundColor: solid ? theme.bgSolid : theme.bg, width: "100%" }}
    >
      <div className={theme.baseContainer} data-framer-name="Base Container">
        <div className={theme.phoneMenu} data-framer-name="Phone Menu">
          <div className={theme.logoContainer}>
            <HeaderLogo theme={theme} current={pathname === "/"} />
          </div>
        </div>
        <nav className={theme.navLinks} data-framer-name="Nav Links">
          {headerNav.map((link, i) => (
            <div
              key={link.href}
              className={theme.navLinkWrappers[i] ?? theme.navLinkWrappers[0]}
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
                  className={theme.navLinkClassName}
                  data-styles-preset={theme.navLinkPreset}
                  href={link.href}
                  data-framer-page-link-current={pathname === link.href ? "true" : undefined}
                >
                  {link.label}
                </Link>
              </p>
            </div>
          ))}
        </nav>
        <div className={theme.donateContainer} style={{ opacity: "1", transform: "none" }}>
          <HeaderDonate current={pathname === joinLink.href} />
        </div>
        <div
          className={theme.divider}
          data-framer-name="Divider"
          style={{ backgroundColor: theme.dividerBg }}
        ></div>
      </div>
    </nav>
  );
}

interface PhoneBarProps {
  theme: HeaderTheme;
  solid: boolean;
  pathname: string;
  onOpen: () => void;
}

/** The phone header in its closed state (logo + hamburger). */
function PhoneBar({ theme, solid, pathname, onOpen }: PhoneBarProps) {
  const variants = solid ? theme.navVariantSolid : theme.navVariant;
  return (
    <nav
      className={`${theme.navBase} ${variants.phone}`}
      data-framer-name="Phone"
      style={{ backgroundColor: solid ? theme.bgSolid : theme.bg, width: "100%" }}
    >
      <div className={theme.baseContainer} data-framer-name="Base Container">
        <div className={theme.phoneMenu} data-framer-name="Phone Menu">
          <div className={theme.logoContainer}>
            <HeaderLogo theme={theme} current={pathname === "/"} />
          </div>
          <div
            className={theme.iconWrapper}
            data-framer-name="Icon Wrapper"
            data-highlight="true"
            tabIndex={0}
            onClick={onOpen}
          >
            <div
              data-framer-name="Icon"
              className={theme.menuIcon}
              style={{ "--1afajen": theme.iconColor }}
            ></div>
          </div>
        </div>
        <div
          className={theme.divider}
          data-framer-name="Divider"
          style={{ backgroundColor: theme.dividerBg }}
        ></div>
      </div>
    </nav>
  );
}
