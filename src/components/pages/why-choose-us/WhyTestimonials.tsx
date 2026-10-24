"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { FramerImage, Testimonial } from "@/lib/types";
import { FramerBackgroundImage, SlashLabel, TOKENS } from "@/components/sections/framer-shared";

/** Label and photo of the section as exported. */
export const WHY_TESTIMONIALS = {
  label: "Testimonials",
  image: {
    src: "/images/jqUF0FfpGj7tTLSjUKaXKmQ.jpg",
    alt: "Testimonial Image",
    width: 2374,
    height: 3364,
    srcSet:
      "/images/jqUF0FfpGj7tTLSjUKaXKmQ-1.jpg 722w, /images/jqUF0FfpGj7tTLSjUKaXKmQ-2.jpg 1445w, /images/jqUF0FfpGj7tTLSjUKaXKmQ.jpg 2374w",
  } satisfies FramerImage,
} as const;

const IMAGE_SIZES =
  "(min-width: 1280px) 420px, (min-width: 992px) and (max-width: 1279.98px) 340px, (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px)";

/** Autoplay interval of the carousel (same as the other testimonial carousels of the site). */
const AUTOPLAY_MS = 6000;

type Breakpoint = "desktop" | "tablet" | "phone";

/** `ssr-variant` wrapper classes and carousel variants ([class, name] per slide) per breakpoint. */
const BREAKPOINTS: ReadonlyArray<{
  key: Breakpoint;
  wrapper: string;
  slides: ReadonlyArray<readonly [string, string]>;
}> = [
  {
    key: "desktop",
    wrapper: "ssr-variant hidden-1ksiir2 hidden-e3ad3z",
    slides: [
      ["framer-v-mz5l9u", "Desktop"],
      ["framer-v-1rwmizi", "Desktop Slide 2"],
      ["framer-v-1pp6opr", "Desktop Slide 3"],
    ],
  },
  {
    key: "tablet",
    wrapper: "ssr-variant hidden-7xpbrn hidden-e3ad3z",
    slides: [
      ["framer-v-n7b6jy", "Tablet"],
      ["framer-v-1hge0jm", "Tablet Slide 2"],
      ["framer-v-1qg153c", "Tablet Slide 3"],
    ],
  },
  {
    key: "phone",
    wrapper: "ssr-variant hidden-1ksiir2 hidden-7xpbrn",
    slides: [
      ["framer-v-rpn0ox", "Phone"],
      ["framer-v-1ywxnmq", "Phone Slide 2"],
      ["framer-v-ecrs76", "Phone Slide 3"],
    ],
  },
];

/**
 * Classes of the three slides ("Text Content" + its "Heading" and "Body"). The template CSS
 * positions the slides by these classes, so the carousel shows at most three testimonials.
 */
const SLIDE_CLASSES = [
  { content: "framer-k00y25", heading: "framer-14g8ov5", body: "framer-a8wev1" },
  { content: "framer-100d0ag", heading: "framer-11wr8an", body: "framer-18kss9l" },
  { content: "framer-pybsi1", heading: "framer-ia9uc9", body: "framer-crncyt" },
] as const;

const ACTIVE_SLIDE: CSSProperties = { opacity: "1" };
const HIDDEN_SLIDE: CSSProperties = { opacity: "0", transform: "translateY(-50%)" };

const IMAGE_STYLE: CSSProperties = {
  willChange: "transform",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  opacity: "0",
  transform: "translateY(30px)",
};
const CONTENT_REVEAL: CSSProperties = {
  willChange: "transform",
  opacity: "0",
  transform: "translateY(30px)",
};

const RICH_TEXT_STYLE: CSSProperties = {
  "--framer-link-text-color": "rgb(0, 153, 255)",
  "--framer-link-text-decoration": "underline",
  transform: "none",
};
const AUTHOR_CONTAINER_STYLE: CSSProperties = {
  "--extracted-tcooor": TOKENS.blue,
  ...RICH_TEXT_STYLE,
};
const AUTHOR_TEXT_STYLE: CSSProperties = {
  "--framer-text-color": `var(--extracted-tcooor, ${TOKENS.blue})`,
};

interface ArrowButtonProps {
  disabled: boolean;
  phone: boolean;
  label: string;
  onClick: () => void;
}

/** Framer's round arrow button (`framer-8AbWb framer-17uj36u`): Default / Phone / Disabled. */
function ArrowButton({ disabled, phone, label, onClick }: ArrowButtonProps) {
  const enabledVariant = phone ? "framer-v-154bucn" : "framer-v-17uj36u";
  return (
    <button
      className={`framer-8AbWb framer-17uj36u ${disabled ? "framer-v-1kgh617" : enabledVariant}`}
      data-border="true"
      data-framer-name={disabled ? "Disabled" : phone ? "Phone" : "Default"}
      data-highlight={disabled ? undefined : "true"}
      data-reset="button"
      tabIndex={disabled ? undefined : 0}
      aria-label={label}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      style={{
        "--border-bottom-width": "1px",
        "--border-color": TOKENS.borderLight,
        "--border-left-width": "1px",
        "--border-right-width": "1px",
        "--border-style": "solid",
        "--border-top-width": "1px",
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
        opacity: disabled ? "0.4" : "1",
      }}
    >
      <div
        data-framer-name="Icon"
        className="framer-NFs5e framer-oh5gx9"
        style={{ "--1afajen": TOKENS.blue, transform: "translate(-50%, -50%)" }}
      ></div>
    </button>
  );
}

export interface WhyTestimonialsProps {
  items: Testimonial[];
  label?: string;
  image?: FramerImage;
}

/**
 * "Testimonials Section" of /why-choose-us (hash 80f1f5f45e, section.framer-19mea4w): the
 * testimonial carousel component (`framer-xjnPC framer-mz5l9u`) rendered once per breakpoint
 * (Desktop / Tablet / Phone variants), photo on the left, "/ Testimonials /" label, three
 * slides and the prev / next arrows.
 *
 * State (snapshots jsx-states/why-choose-us/*\/4-0, 4-1 and phone 5-0, 5-1): the carousel
 * switches to the "<Breakpoint> Slide 2/3" variant, the active slide gets `opacity: 1` and the
 * others `opacity: 0; transform: translateY(-50%)`. The previous arrow is "Disabled" on the
 * first slide and the next arrow on the last one. The carousel advances every 6 s (wrapping to
 * the first slide); the timer restarts after every change. All breakpoints share the state.
 */
export function WhyTestimonials({
  items,
  label = WHY_TESTIMONIALS.label,
  image = WHY_TESTIMONIALS.image,
}: WhyTestimonialsProps) {
  const slides = items.slice(0, SLIDE_CLASSES.length);
  const count = slides.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    // Restarted on every slide change (manual or automatic); skipped while the tab is hidden.
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [index, count]);

  const prev = () => setIndex((current) => Math.max(0, current - 1));
  const next = () => setIndex((current) => Math.min(count - 1, current + 1));

  return (
    <section className="framer-19mea4w" data-framer-name="Testimonials Section">
      <div className="framer-108npz" data-framer-name="Base Container">
        {BREAKPOINTS.map((bp) => {
          const variant = bp.slides[index] ?? bp.slides[0];
          const phone = bp.key === "phone";
          return (
            <div key={bp.key} className={bp.wrapper}>
              <div className="framer-12pw74-container">
                <div
                  className={`framer-xjnPC framer-KTw9X framer-Z80CQ framer-mz5l9u ${variant?.[0] ?? ""}`}
                  data-framer-name={variant?.[1]}
                  style={{ width: "100%" }}
                >
                  <div className="framer-12dm6ud" style={IMAGE_STYLE}>
                    <FramerBackgroundImage
                      image={image}
                      sizes={IMAGE_SIZES}
                      objectPosition="center top"
                    />
                  </div>
                  <div
                    className="framer-1dez9fv"
                    data-framer-name="Content Block Wrapper"
                    style={CONTENT_REVEAL}
                  >
                    <div className="framer-linw0r" data-framer-name="Text Container Wrapper">
                      <div className="framer-q8lszj-container">
                        <SlashLabel text={label} />
                      </div>
                      <div className="framer-1wh1ysr" data-framer-name="Text Content Wrapper">
                        {slides.map((item, i) => {
                          const c = SLIDE_CLASSES[i];
                          if (!c) return null;
                          return (
                            <div
                              key={i}
                              className={c.content}
                              data-framer-name="Text Content"
                              style={i === index ? ACTIVE_SLIDE : HIDDEN_SLIDE}
                            >
                              <div
                                className={c.heading}
                                data-framer-name="Heading"
                                data-framer-component-type="RichTextContainer"
                                style={RICH_TEXT_STYLE}
                              >
                                <h3
                                  className="framer-text framer-styles-preset-lejfwi"
                                  data-styles-preset="g9Z8SKRYJ"
                                  dir="auto"
                                >
                                  {item.quote}
                                </h3>
                              </div>
                              <div
                                className={c.body}
                                data-framer-name="Body"
                                data-framer-component-type="RichTextContainer"
                                style={AUTHOR_CONTAINER_STYLE}
                              >
                                <div
                                  className="framer-text framer-styles-preset-vsrti2"
                                  data-styles-preset="gh2gjU4L2"
                                  dir="auto"
                                  style={AUTHOR_TEXT_STYLE}
                                >
                                  {item.author}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="framer-g11ipv" data-framer-name="Arrows Wrapper">
                      <div className="framer-cg08co-container">
                        <ArrowButton
                          disabled={index === 0}
                          phone={phone}
                          label="Previous testimonial"
                          onClick={prev}
                        />
                      </div>
                      <div
                        className="framer-qw1z0d-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <ArrowButton
                          disabled={index >= count - 1}
                          phone={phone}
                          label="Next testimonial"
                          onClick={next}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1ffdlyq-container"
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
