import Link from "next/link";
import {
  HeaderDonate,
  HeaderLogo,
  OPENED_TRANSFORM,
  type HeaderTheme,
} from "@/components/layout/HeaderParts";
import { joinLink, mobileNav } from "@/content/site";

// The header's "Phone Opened" state (snapshots `jsx-states/index/phone/0-0.tsx` and
// `jsx-states/contact-us/phone/0-0.tsx`): the whole phone <nav> is replaced by this markup.
// The snapshot's inline <style> that locked page scroll is replaced by Header toggling
// `document.body.style.overflow`.

/** Inline style of the opened state's reveal-animated items (already in their final position). */
const REVEALED = { willChange: "transform", opacity: "1", ...OPENED_TRANSFORM };

export interface MobileMenuProps {
  theme: HeaderTheme;
  pathname: string;
  onClose: () => void;
}

export function MobileMenu({ theme, pathname, onClose }: MobileMenuProps) {
  return (
    <nav
      className={`${theme.navBase} ${theme.navVariantPhoneOpened}`}
      data-framer-name="Phone Opened"
      style={theme.phoneOpenedNavStyle}
    >
      <div
        className={theme.baseContainer}
        data-framer-name="Base Container"
        style={OPENED_TRANSFORM}
      >
        <div
          className={theme.overlay}
          data-framer-name="Overlay"
          data-highlight="true"
          tabIndex={0}
          style={{ backgroundColor: theme.overlayBg, ...OPENED_TRANSFORM }}
          onClick={onClose}
        ></div>
        <div className={theme.phoneMenu} data-framer-name="Phone Menu" style={OPENED_TRANSFORM}>
          <div className={theme.logoContainer} style={OPENED_TRANSFORM}>
            <HeaderLogo
              theme={theme}
              current={pathname === "/"}
              style={OPENED_TRANSFORM}
              onClick={onClose}
            />
          </div>
          <div
            className={theme.iconWrapper}
            data-framer-name="Icon Wrapper"
            data-highlight="true"
            tabIndex={0}
            style={OPENED_TRANSFORM}
            onClick={onClose}
          >
            <div
              data-framer-name="Icon"
              className={theme.closeIcon}
              style={{ "--1afajen": theme.iconColor, ...OPENED_TRANSFORM }}
            ></div>
          </div>
        </div>
        <nav
          className={theme.phoneNavLinks}
          data-framer-name="Phone Nav Links Wrapper"
          style={OPENED_TRANSFORM}
        >
          {mobileNav.map((link, i) => (
            <div
              key={link.href}
              className={theme.phoneNavLinkWrappers[i] ?? ""}
              data-framer-name="Nav Link"
              data-highlight="true"
              data-framer-component-type="RichTextContainer"
              tabIndex={0}
              style={REVEALED}
              onClick={onClose}
            >
              <p
                className="framer-text framer-styles-preset-8z5t4e"
                data-styles-preset="ZZLVG0Ijr"
                dir="auto"
              >
                <Link
                  className={theme.phoneNavLinkClassName}
                  data-styles-preset={theme.phoneNavLinkPreset}
                  href={link.href}
                  data-framer-page-link-current={pathname === link.href ? "true" : undefined}
                >
                  {link.label}
                </Link>
              </p>
            </div>
          ))}
        </nav>
        <div className={theme.donateContainer} style={REVEALED}>
          <HeaderDonate phone current={pathname === joinLink.href} onClick={onClose} />
        </div>
        <div
          className={theme.divider}
          data-framer-name="Divider"
          style={{ backgroundColor: theme.dividerBg, ...OPENED_TRANSFORM }}
        ></div>
      </div>
      <div
        className={theme.scrollLock}
        style={{ transform: "translateY(-50%)", transformOrigin: "50% 50% 0px" }}
      ></div>
    </nav>
  );
}
