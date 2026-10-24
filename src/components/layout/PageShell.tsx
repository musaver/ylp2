import type { CSSProperties, ReactNode } from "react";
import { Cta, type CtaContent, type CtaVariant } from "@/components/layout/Cta";

export interface PageShellProps {
  /** Which call-to-action block precedes the footer; `null` when the page renders its own. */
  cta: CtaVariant | null;
  /** Page-specific copy for the CTA block (only the "image" variant reads it). */
  ctaContent?: CtaContent;
  /** Framer's per-template class on the page content wrapper (e.g. "framer-HZNR3"). */
  contentClassName: string;
  contentStyle?: CSSProperties;
  /**
   * Class of the invisible "Header Trigger" element Framer places at the top of pages with the
   * transparent header. When present, the header turns solid once it scrolls out of view.
   */
  headerTriggerClassName?: string;
  children: ReactNode;
}

/**
 * The page-specific part of Framer's layout template: page content, overlay target and the CTA
 * block. The header and footer around it are rendered once by the root layout.
 */
export function PageShell({
  cta,
  ctaContent,
  contentClassName,
  contentStyle,
  headerTriggerClassName,
  children,
}: PageShellProps) {
  return (
    <>
      <div data-framer-root="" className={contentClassName} style={contentStyle}>
        {headerTriggerClassName ? (
          <div
            className={headerTriggerClassName}
            data-framer-name="Header Trigger"
            id="header-trigger"
          />
        ) : null}
        {children}
      </div>
      <div id="overlay" />
      <div className="framer-13fzmr9" />
      {cta ? <Cta variant={cta} content={ctaContent} /> : null}
    </>
  );
}
