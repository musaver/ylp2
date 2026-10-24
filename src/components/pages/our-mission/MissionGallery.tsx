import { Fragment, type CSSProperties } from "react";
import type { FramerImage } from "@/lib/types";
import {
  FramerBackgroundImage,
  REVEAL_STYLE,
  type CardVariant,
} from "@/components/sections/framer-shared";

/** One photo of the gallery with the Framer instance id of its container. */
export interface MissionGalleryItem {
  /** Framer node id, used as the container's `id` and in its `framer-<id>-container` class. */
  id: string;
  image: FramerImage;
}

const GALLERY_ITEMS: MissionGalleryItem[] = [
  {
    id: "22j20x",
    image: {
      src: "/images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg",
      alt: "Gallery Image",
      width: 4000,
      height: 6000,
      srcSet:
        "/images/d2Ta00IrAO1lr0SXmjl5xPo58-1.jpg 682w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-2.jpg 1365w, /images/d2Ta00IrAO1lr0SXmjl5xPo58-3.jpg 2730w, /images/d2Ta00IrAO1lr0SXmjl5xPo58.jpg 4000w",
    },
  },
  {
    id: "1274wgo",
    image: {
      src: "/images/D2VQEpC500ZM0eJS6RWOO16iME.jpg",
      alt: "Gallery Image",
      width: 6000,
      height: 4000,
      srcSet:
        "/images/D2VQEpC500ZM0eJS6RWOO16iME-1.jpg 512w, /images/D2VQEpC500ZM0eJS6RWOO16iME-2.jpg 1024w, /images/D2VQEpC500ZM0eJS6RWOO16iME-3.jpg 2048w, /images/D2VQEpC500ZM0eJS6RWOO16iME-4.jpg 4096w, /images/D2VQEpC500ZM0eJS6RWOO16iME.jpg 6000w",
    },
  },
  {
    id: "1emnfty",
    image: {
      src: "/images/XK7v4rgpFnyLHZ6XxvVWwlnACwg.jpg",
      alt: "Gallery Image",
      width: 6000,
      height: 4000,
      srcSet:
        "/images/XK7v4rgpFnyLHZ6XxvVWwlnACwg-1.jpg 512w, /images/XK7v4rgpFnyLHZ6XxvVWwlnACwg-2.jpg 1024w, /images/XK7v4rgpFnyLHZ6XxvVWwlnACwg-3.jpg 2048w, /images/XK7v4rgpFnyLHZ6XxvVWwlnACwg-4.jpg 4096w, /images/XK7v4rgpFnyLHZ6XxvVWwlnACwg.jpg 6000w",
    },
  },
  {
    id: "xhzgdx",
    image: {
      src: "/images/r0V0XtGq5tf8s3CDPisly8VM.jpg",
      alt: "Gallery Image",
      width: 6000,
      height: 4000,
      srcSet:
        "/images/r0V0XtGq5tf8s3CDPisly8VM-1.jpg 512w, /images/r0V0XtGq5tf8s3CDPisly8VM-2.jpg 1024w, /images/r0V0XtGq5tf8s3CDPisly8VM-3.jpg 2048w, /images/r0V0XtGq5tf8s3CDPisly8VM-4.jpg 4096w, /images/r0V0XtGq5tf8s3CDPisly8VM.jpg 6000w",
    },
  },
];

const GALLERY_SIZES =
  "(min-width: 1280px) max(max((max(max(100vw, 1px) - 40px, 1px) - 90px) / 4, 1px), 1px), (min-width: 992px) and (max-width: 1279.98px) max(max((max(max(100vw, 1px) - 40px, 1px) - 60px) / 4, 1px), 1px), (max-width: 991.98px) max(max(max(max(100vw, 1px) - 40px, 1px), 280px), 1px)";

/** Breakpoint blocks in export order: wrapper classes and image component variant. */
const BLOCKS: { variant: CardVariant; wrapper: string }[] = [
  { variant: "desktop", wrapper: "ssr-variant hidden-1kvngrp hidden-b2obmz" },
  { variant: "tablet", wrapper: "ssr-variant hidden-19wkpj4 hidden-b2obmz" },
  { variant: "phone", wrapper: "ssr-variant hidden-1kvngrp hidden-19wkpj4" },
];

const ROUNDED_10: CSSProperties = {
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

/** Root class, name and inline style of each variant of the image component (`framer-yITgI`). */
const IMAGE_VARIANT: Record<
  CardVariant,
  { className: string; name: string; style: CSSProperties }
> = {
  desktop: {
    className: "framer-v-ch8jkl",
    name: "Desktop",
    style: { height: "100%", maxHeight: "100%", width: "100%", ...ROUNDED_10 },
  },
  tablet: { className: "framer-v-m6ppcj", name: "Tablet", style: { width: "100%", ...ROUNDED_10 } },
  phone: { className: "framer-v-or3eah", name: "Phone", style: { width: "100%", ...ROUNDED_10 } },
};

export interface MissionGalleryProps {
  items?: MissionGalleryItem[];
}

/**
 * "Images Section" of /our-mission (hash 433d39d593, section.framer-qsc7wp): row of four
 * photos (`framer-yITgI` component, zooms on hover via interactions.css), each rendered in the
 * Desktop, Tablet and Phone variant inside its `ssr-variant hidden-*` wrapper.
 */
export function MissionGallery({ items = GALLERY_ITEMS }: MissionGalleryProps) {
  return (
    <section className="framer-qsc7wp" data-framer-name="Images Section">
      <div className="framer-10iiwmr" data-framer-name="Base Container">
        <div className="framer-5x3z57" data-framer-name="Images Wrapper">
          {items.map((item) => (
            <Fragment key={item.id}>
              {BLOCKS.map(({ variant, wrapper }) => {
                const v = IMAGE_VARIANT[variant];
                return (
                  <div key={variant} className={wrapper}>
                    <div
                      className={`framer-${item.id}-container`}
                      id={item.id}
                      style={REVEAL_STYLE}
                    >
                      <div
                        className={`framer-yITgI framer-ch8jkl ${v.className}`}
                        data-framer-name={v.name}
                        data-highlight="true"
                        tabIndex={0}
                        style={v.style}
                      >
                        <div className="framer-yxhk2c" style={{ transform: "none" }}>
                          <FramerBackgroundImage image={item.image} sizes={GALLERY_SIZES} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
