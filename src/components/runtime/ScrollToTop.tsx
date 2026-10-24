"use client";

// Jumps to the top of the page, instantly, whenever a link navigates to a new route.
//
// Next.js normally scrolls to the new page itself, but here each page's wrapper uses
// `display: contents` (Framer's layout), which has no box to scroll to, so the old scroll
// position was kept and the new page opened at its bottom. Back/forward navigation is left
// alone so the browser can restore the previous position, and URLs with a #hash keep their
// anchor jump.

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isHistoryNavigation = useRef(false);

  useLayoutEffect(() => {
    const onPopState = () => {
      isHistoryNavigation.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
