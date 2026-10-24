import type { FramerImage, NavLink } from "@/lib/types";
import {
  TOKENS,
  REVEAL_STYLE,
  FramerBackgroundImage,
  SectionHeading,
  SlashLabel,
  type PositionedImage,
} from "@/components/sections/framer-shared";
import { PrimaryButtonLink } from "./PrimaryButtonLink";

/**
 * "Our purpose" block: Framer "About Us Section" (hash 0c1edf0439, section.framer-1k63z9n) of
 * /about-us. Images grid with a quote card, "/ Our purpose /" label, heading, body, three
 * check-list items (`framer-H6ffU` component) and the "Contribute" button.
 */
export interface AboutPurposeProps {
  label?: string;
  heading?: string;
  body?: string;
  /** Text on the card over the first image. */
  quote?: string;
  images?: readonly [PositionedImage, FramerImage];
  items?: readonly string[];
  button?: NavLink;
}

const IMAGES: readonly [PositionedImage, FramerImage] = [
  {
    src: "/images/BNCzuo8DaI6NGedfWYKOJKAxaY.jpg",
    alt: "About Us Image",
    width: 6000,
    height: 4000,
    srcSet:
      "/images/BNCzuo8DaI6NGedfWYKOJKAxaY-1.jpg 512w, /images/BNCzuo8DaI6NGedfWYKOJKAxaY-2.jpg 1024w, /images/BNCzuo8DaI6NGedfWYKOJKAxaY-3.jpg 2048w, /images/BNCzuo8DaI6NGedfWYKOJKAxaY-4.jpg 4096w, /images/BNCzuo8DaI6NGedfWYKOJKAxaY.jpg 6000w",
    objectPosition: "65% 50%",
  },
  {
    src: "/images/U0qhVVNFNwZCGsszcyrYWtMZzc.jpg",
    alt: "About Us Image",
    width: 3319,
    height: 5707,
    srcSet:
      "/images/U0qhVVNFNwZCGsszcyrYWtMZzc.jpg 595w, /images/U0qhVVNFNwZCGsszcyrYWtMZzc-1.jpg 1191w, /images/U0qhVVNFNwZCGsszcyrYWtMZzc-2.jpg 2382w, /images/U0qhVVNFNwZCGsszcyrYWtMZzc.jpg https://framerusercontent.com/images/U0qhVVNFNwZCGsszcyrYWtMZzc.jpg?width=3319&height=5707",
  },
];

const FIRST_IMAGE_SIZES =
  "(min-width: 1280px) max((max((min(max(100vw, 1px), 1340px) - 120px) / 2, 1px) - 10px) / 2, 1px), (min-width: 992px) and (max-width: 1279.98px) max((max((min(max(100vw, 1px), 1340px) - 80px) / 2, 1px) - 10px) / 2, 1px), (max-width: 991.98px) max(min(max(100vw, 1px), 1340px) - 40px, 1px)";
const SECOND_IMAGE_SIZES =
  "(min-width: 1280px) max((max((min(max(100vw, 1px), 1340px) - 120px) / 2, 1px) - 10px) / 2, 1px), (max-width: 991.98px) max((max((min(max(100vw, 1px), 1340px) - 120px) / 2, 1px) - 10px) / 2, 1px), (min-width: 992px) and (max-width: 1279.98px) max((max((min(max(100vw, 1px), 1340px) - 80px) / 2, 1px) - 10px) / 2, 1px)";

/** Instance wrapper classes of the three list items, in order. */
const ITEM_CONTAINERS = [
  "framer-10c4hw5-container",
  "framer-1vj8p86-container",
  "framer-1kbuf74-container",
] as const;

/** Framer's check-list item component (`framer-H6ffU framer-1tfgzwa`). */
function ListItem({ text }: { text: string }) {
  return (
    <div
      className="framer-H6ffU framer-CXUbw framer-1tfgzwa framer-v-1tfgzwa"
      data-framer-name="Default"
      style={{ width: "100%" }}
    >
      <div className="framer-1gv2vok" data-framer-name="Icon Wrapper">
        <div
          data-framer-name="Icon"
          className="framer-EDCwa framer-p0v4f0"
          style={{ "--1afajen": TOKENS.dark }}
        ></div>
      </div>
      <div
        className="framer-4uxkua"
        data-framer-name="Body"
        data-framer-component-type="RichTextContainer"
        style={{
          "--extracted-r6o4lv": TOKENS.grey,
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          transform: "none",
        }}
      >
        <p
          className="framer-text framer-styles-preset-184kbjj"
          data-styles-preset="jo34BIwbe"
          dir="auto"
          style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${TOKENS.grey})` }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function AboutPurpose({
  label = "Our purpose",
  heading = "Helping others moves the world forward",
  body = "Whether you're looking to volunteer, donate resources, or support local initiatives, your involvement is key to creating positive change.",
  quote = "We believe in the power of community and the difference we can make when we come together to help those in need.",
  images = IMAGES,
  items = [
    "Provided with essential medical treatment",
    "Nourished with healthy and nutritious food",
    "Sheltered in a safe and stable environment",
  ],
  button = { label: "Contribute", href: "/contact-us" },
}: AboutPurposeProps) {
  const [firstImage, secondImage] = images;

  const bodyText = (centered: boolean) => (
    <div
      className="framer-1a65blp"
      data-framer-name="Body"
      data-framer-component-type="RichTextContainer"
      style={REVEAL_STYLE}
    >
      <p
        className="framer-text framer-styles-preset-1dpgexf"
        data-styles-preset="wUYf66_Db"
        dir="auto"
        style={centered ? { "--framer-text-alignment": "center" } : undefined}
      >
        {body}
      </p>
    </div>
  );

  return (
    <section className="framer-1k63z9n" data-framer-name="About Us Section">
      <div className="framer-1gpg9lk" data-framer-name="Base Container">
        <div className="framer-i8jq0w" data-framer-name="Images Grid" style={REVEAL_STYLE}>
          <div className="framer-10xt57p" data-framer-name="Image Wrapper">
            <div className="ssr-variant">
              <div className="framer-1ax8cwk">
                <FramerBackgroundImage image={firstImage} sizes={FIRST_IMAGE_SIZES} />
              </div>
            </div>
            <div className="framer-1u03bj6" data-framer-name="Text Content">
              <div
                className="framer-2tn1g3"
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-1dpgexf"
                  data-styles-preset="wUYf66_Db"
                  dir="auto"
                  style={{ "--framer-text-color": TOKENS.dark }}
                >
                  {quote}
                </p>
              </div>
            </div>
            <div
              className="framer-qjp17u hidden-1ys3drf hidden-1v22ssx"
              data-framer-name="Overlay"
            ></div>
          </div>
          <div className="ssr-variant">
            <div className="framer-caqrni hidden-tenz1j">
              <FramerBackgroundImage image={secondImage} sizes={SECOND_IMAGE_SIZES} />
            </div>
          </div>
        </div>
        <div className="framer-rsvnet" data-framer-name="Right Content Block">
          <div className="framer-1efnsei" data-framer-name="Text Content Wrapper">
            <div className="ssr-variant">
              <div className="framer-7sgdvj-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <div className="framer-jguprl" data-framer-name="Text Content">
              <div className="ssr-variant hidden-tenz1j">
                <SectionHeading className="framer-13niq5" text={heading} />
              </div>
              <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
                <SectionHeading className="framer-13niq5" text={heading} centered />
              </div>
              <div className="ssr-variant hidden-tenz1j">{bodyText(false)}</div>
              <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">{bodyText(true)}</div>
            </div>
          </div>
          <div className="framer-1uyul9q" data-framer-name="Button Wrapper">
            <div
              className="framer-19wbnrc"
              data-framer-name="About Us List Wrapper"
              style={REVEAL_STYLE}
            >
              {items.map((item, i) => (
                <div key={item} className="ssr-variant">
                  <div className={ITEM_CONTAINERS[i % ITEM_CONTAINERS.length]}>
                    <ListItem text={item} />
                  </div>
                </div>
              ))}
            </div>
            <div className="ssr-variant hidden-tenz1j">
              <div className="framer-pd9erm-container" style={REVEAL_STYLE}>
                <PrimaryButtonLink href={button.href} label={button.label} variant="desktop" />
              </div>
            </div>
            <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
              <div className="framer-pd9erm-container" style={REVEAL_STYLE}>
                <PrimaryButtonLink href={button.href} label={button.label} variant="phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
