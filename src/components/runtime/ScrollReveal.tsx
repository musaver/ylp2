"use client";

// Replays Framer's scroll-reveal animation. Framer server-renders animated elements with
// `will-change: transform; opacity: 0; transform: translateY(30px)` (or scale/rotate) and
// animates them into place once they enter the viewport. The initial transform is the
// resting position (percentage centring translates) plus an entry offset; only the former
// is kept when the element is revealed. An optional `data-reveal-delay` (milliseconds) holds
// the element back so siblings can be staggered.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function finalTransform(transform: string): string {
  const kept = (transform.match(/[a-zA-Z0-9]+\([^)]*\)/g) ?? []).filter(
    (fn) => /^translate/.test(fn) && fn.includes("%"),
  );
  return kept.length ? kept.join(" ") : "none";
}

export function revealElements(root: ParentNode): () => void {
  const items = [...root.querySelectorAll<HTMLElement>('[style*="will-change"]')].filter((el) => {
    const opacity = parseFloat(el.style.opacity);
    return !Number.isNaN(opacity) && opacity < 0.01;
  });
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        const delay = Math.max(0, parseInt(el.dataset.revealDelay ?? "0", 10) || 0);
        // Spring-like: fast start, long soft landing (close to Framer's default spring).
        el.style.transition = `opacity 0.45s ease-out ${delay}ms, transform 1.1s ${EASE} ${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = finalTransform(el.style.transform);
        el.addEventListener("transitionend", () => (el.style.willChange = "auto"), { once: true });
      }
    },
    { rootMargin: "0px 0px -6% 0px" },
  );
  items.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

/** Mount once in the root layout; re-scans the document after every navigation. */
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => revealElements(document), [pathname]);
  return null;
}
