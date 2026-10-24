"use client";

import { useCallback, useEffect, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Testimonial } from "@/lib/types";
import { TOKENS, REVEAL_STYLE, SlashLabel } from "@/components/sections/framer-shared";

/**
 * Testimonial carousel: Framer "Testimonials Section" (hash 34574c0ef8, section.framer-1oge8d1)
 * of /about-us. The carousel component (`framer-HrO5j framer-dejmvq`) has one Framer variant
 * per slide and breakpoint ("Desktop", "Desktop Slide 2", …); switching slides swaps the
 * variant class, the "Text Content N" block and the active bullet, as captured in the
 * interaction snapshots. Bullets switch slides; the carousel advances every 6 s while the
 * document is visible.
 */
export interface AboutTestimonialsProps {
  /** Up to three testimonials (the Framer component has three slide variants). */
  testimonials: Testimonial[];
  label?: string;
}

const AUTOPLAY_MS = 6000;

type Breakpoint = "desktop" | "tablet" | "phone";

interface SlideVariant {
  className: string;
  name: string;
}

/** `ssr-variant` wrapper classes and the per-slide variant class/name of each breakpoint. */
const BREAKPOINTS: Record<
  Breakpoint,
  { wrapper: string; variants: readonly [SlideVariant, SlideVariant, SlideVariant] }
> = {
  desktop: {
    wrapper: "ssr-variant hidden-1v22ssx hidden-tenz1j",
    variants: [
      { className: "framer-v-dejmvq", name: "Desktop" },
      { className: "framer-v-jrzq1j", name: "Desktop Slide 2" },
      { className: "framer-v-6o7ipw", name: "Desktop Slide 3" },
    ],
  },
  tablet: {
    wrapper: "ssr-variant hidden-1ys3drf hidden-tenz1j",
    variants: [
      { className: "framer-v-cile38", name: "Tablet" },
      { className: "framer-v-14ej4w7", name: "Tablet Slide 2" },
      { className: "framer-v-n2d0eo", name: "Tablet Slide 3" },
    ],
  },
  phone: {
    wrapper: "ssr-variant hidden-1v22ssx hidden-1ys3drf",
    variants: [
      { className: "framer-v-vosl1b", name: "Phone" },
      { className: "framer-v-1mh5pi", name: "Phone Slide 2" },
      { className: "framer-v-1yqk2x3", name: "Phone Slide 3" },
    ],
  },
};

const BREAKPOINT_ORDER: readonly Breakpoint[] = ["desktop", "tablet", "phone"];

/** Classes of the "Text Content N" block shown for each slide. */
const SLIDES = [
  {
    content: "framer-1p3aoc5",
    name: "Text Content 1",
    heading: "framer-1s3dt7z",
    body: "framer-1btpw5g",
  },
  {
    content: "framer-uq0l2k",
    name: "Text Content 2",
    heading: "framer-153a44r",
    body: "framer-qqjssx",
  },
  {
    content: "framer-1htusxz",
    name: "Text Content 3",
    heading: "framer-136tw2a",
    body: "framer-1snzl30",
  },
] as const;

/** Instance wrapper classes of the three bullets. */
const BULLET_CONTAINERS = [
  "framer-100wryj-container",
  "framer-14pjfrs-container",
  "framer-be37tv-container",
] as const;

/** Server-rendered start state of the first slide's text (revealed by ScrollReveal). */
const TEXT_INITIAL_STYLE: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "none",
};

/** State of the text after a slide change (as in the interaction snapshots). */
const TEXT_SHOWN_STYLE: CSSProperties = {
  willChange: "transform",
  opacity: "1",
  transform: "none",
};

/** Fades in the text block of a newly selected slide. */
function fadeIn(el: HTMLDivElement | null) {
  el?.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 450, easing: "ease-out" });
}

function bulletStyle(active: boolean): CSSProperties {
  return {
    backgroundColor: active
      ? TOKENS.yellow
      : "var(--token-3ec474ca-4216-4146-9d7f-eb4472c33377, rgb(135, 143, 153))",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
  };
}

export function AboutTestimonials({
  testimonials,
  label = "Testimonials",
}: AboutTestimonialsProps) {
  const slides = testimonials.slice(0, SLIDES.length);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  /** False until the first slide change, so the first render matches the server markup. */
  const [changed, setChanged] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(next);
    setChanged(true);
  }, []);

  // Autoplay: next slide every 6 s while the page is visible; restarts after each change.
  useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % count);
      setChanged(true);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [index, count]);

  const onBulletKeyDown = (event: KeyboardEvent<HTMLDivElement>, i: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goTo(i);
    }
  };

  const current = slides[index];
  const slide = SLIDES[index];
  if (!current || !slide) return null;

  return (
    <section className="framer-1oge8d1" data-framer-name="Testimonials Section">
      <div className="framer-5thjca" data-framer-name="Base Container">
        {BREAKPOINT_ORDER.map((bp) => {
          const { wrapper, variants } = BREAKPOINTS[bp];
          const variant = variants[index] ?? variants[0];
          return (
            <div key={bp} className={wrapper}>
              <div className="framer-pgh246-container" style={REVEAL_STYLE}>
                <div
                  className={`framer-HrO5j framer-qyUdF framer-cYxwf framer-dejmvq ${variant.className}`}
                  data-framer-name={variant.name}
                  style={{
                    backgroundColor: TOKENS.dark,
                    width: "100%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <div className="framer-t7evtk" data-framer-name="Text Content Wrapper">
                    <div className="framer-1uximjn-container" style={REVEAL_STYLE}>
                      <SlashLabel text={label} color={TOKENS.yellow} />
                    </div>
                    <div
                      className="framer-1vtfl82"
                      data-framer-name="Title Content Wrapper"
                      style={REVEAL_STYLE}
                    >
                      <div
                        key={slide.content}
                        ref={changed ? fadeIn : undefined}
                        className={slide.content}
                        data-framer-name={slide.name}
                        style={changed ? TEXT_SHOWN_STYLE : TEXT_INITIAL_STYLE}
                      >
                        <div
                          className={slide.heading}
                          data-framer-name="Heading"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            "--extracted-1of0zx5": TOKENS.white,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                        >
                          <h2
                            className="framer-text framer-styles-preset-by3bye"
                            data-styles-preset="D4IjNa1lR"
                            dir="auto"
                            style={{
                              "--framer-text-alignment": "center",
                              "--framer-text-color": `var(--extracted-1of0zx5, ${TOKENS.white})`,
                            }}
                          >
                            {current.quote}
                          </h2>
                        </div>
                        <div
                          className={slide.body}
                          data-framer-name="Body"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            "--extracted-r6o4lv": TOKENS.lightGrey,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                        >
                          <p
                            className="framer-text framer-styles-preset-1dpgexf"
                            data-styles-preset="wUYf66_Db"
                            dir="auto"
                            style={{
                              "--framer-text-alignment": "center",
                              "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.lightGrey})`,
                            }}
                          >
                            {current.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-3mp17k"
                    data-framer-name="Bullet Navigation"
                    style={REVEAL_STYLE}
                  >
                    {slides.map((_, i) => {
                      const active = i === index;
                      return (
                        <div key={BULLET_CONTAINERS[i]} className={BULLET_CONTAINERS[i]}>
                          <div
                            className={`framer-Qvmqb framer-3xll7d ${active ? "framer-v-15f3o5s" : "framer-v-3xll7d"}`}
                            data-framer-name={active ? "Active" : "Default"}
                            data-highlight="true"
                            tabIndex={0}
                            style={bulletStyle(active)}
                            onClick={() => goTo(i)}
                            onKeyDown={(event) => onBulletKeyDown(event, i)}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="framer-1gm55kd-container"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
