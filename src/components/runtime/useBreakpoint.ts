"use client";

import { useEffect, useState } from "react";

/** Framer's breakpoints for this site: desktop ≥ 1280px, tablet ≥ 992px, phone below. */
export type Breakpoint = "desktop" | "tablet" | "phone";

export function getBreakpoint(): Breakpoint {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth >= 1280 ? "desktop" : window.innerWidth >= 992 ? "tablet" : "phone";
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    const update = () => setBp(getBreakpoint());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}
