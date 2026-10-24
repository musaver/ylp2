import type { FramerImage, NavLink } from "@/lib/types";
import {
  REVEAL_STYLE,
  FramerBackgroundImage,
  SectionHeading,
  SlashLabel,
} from "@/components/sections/framer-shared";
import { PrimaryButtonLink } from "./PrimaryButtonLink";

/**
 * "Transforming lives" block: Framer "Events Section" (hash 271ee64f0f, section.framer-wsqaaq)
 * of /about-us. Logo watermark, "/ Transforming lives /" label, heading, two paragraphs and
 * the dark "Get involved" button.
 */
export interface TransformingLivesProps {
  label?: string;
  heading?: string;
  /** Exactly two paragraphs (Framer has two separately classed text blocks). */
  paragraphs?: readonly [string, string];
  button?: NavLink;
}

const LOGO_IMAGE: FramerImage = {
  src: "/images/Od2skloa7zqvI6TKjYILXTmySs.svg",
  alt: "Logo Image",
  width: 200,
  height: 200,
};

const PARAGRAPH_CLASSES = ["framer-mvkkjq", "framer-hp0emp"] as const;

export function TransformingLives({
  label = "Transforming lives",
  heading = "Charities thrive on donations, volunteer efforts, and partnerships, striving to make a positive impact on individuals and communities.",
  paragraphs = [
    "Charities play a vital role in bridging the gap between those who have resources and those who need them most. They focus on creating sustainable solutions to real-world problems, from providing food, shelter, and medical care to advocating for human rights and environmental conservation.",
    // The leading space is in the export.
    " Driven by empathy and a shared vision of a better world, charities encourage everyone to contribute in meaningful ways — through donations, volunteering, or simply spreading awareness. Together, they help turn compassion into action, transforming lives and building stronger, more resilient communities.",
  ],
  button = { label: "Get involved", href: "/events" },
}: TransformingLivesProps) {
  return (
    <section className="framer-wsqaaq" data-framer-name="Events Section">
      <div className="framer-1uiv0p" data-framer-name="Base Container">
        <div className="framer-bz7r1s" data-framer-name="BG Wrapper">
          <div className="ssr-variant hidden-tenz1j">
            <div className="framer-wekz5z" style={{ width: "auto", aspectRatio: "1" }}>
              <FramerBackgroundImage image={LOGO_IMAGE} loading="lazy" />
            </div>
          </div>
          <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
            <div className="framer-wekz5z">
              <FramerBackgroundImage image={LOGO_IMAGE} />
            </div>
          </div>
        </div>
        <div className="framer-r4wglq" data-framer-name="Text Block Wrapper">
          <div className="framer-1gyfh2v" data-framer-name="Text Content">
            <div className="ssr-variant">
              <div className="framer-jphe47-container" style={REVEAL_STYLE}>
                <SlashLabel text={label} />
              </div>
            </div>
            <SectionHeading className="framer-1qsmjix" text={heading} />
          </div>
          <div
            className="framer-an6z7e"
            data-framer-name="Text Content Wrapper"
            style={REVEAL_STYLE}
          >
            {paragraphs.map((text, i) => (
              <div
                key={PARAGRAPH_CLASSES[i]}
                className={PARAGRAPH_CLASSES[i]}
                data-framer-name="Body"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-1dpgexf"
                  data-styles-preset="wUYf66_Db"
                  dir="auto"
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="ssr-variant hidden-tenz1j">
          <div className="framer-1azeqw6-container" style={REVEAL_STYLE}>
            <PrimaryButtonLink
              href={button.href}
              label={button.label}
              variant="desktop"
              theme="dark"
            />
          </div>
        </div>
        <div className="ssr-variant hidden-1v22ssx hidden-1ys3drf">
          <div className="framer-1azeqw6-container" style={REVEAL_STYLE}>
            <PrimaryButtonLink
              href={button.href}
              label={button.label}
              variant="phone"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
