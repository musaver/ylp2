/**
 * Shared content types. All site content lives in `src/content/*` as typed data;
 * components render it with the original Framer markup so the design stays identical.
 */

/** An image exported from Framer. `srcSet` holds the responsive variants Framer generated. */
export interface FramerImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  /**
   * The `object-position` Framer wrote inline on the `<img>` (e.g. "50% 30%", "center top").
   * Only set when it differs from the centre; components fall back to the placement's default.
   */
  objectPosition?: string;
}

export type RichBlock =
  | { type: "heading"; level: 2 | 3 | 4 | 5 | 6; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "image"; image: FramerImage };

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: "instagram" | "youtube" | "facebook";
  href: string;
}

export interface Cause {
  slug: string;
  title: string;
  /** Short text shown on cards and in the detail banner. */
  excerpt: string;
  /** Category label shown on cards (e.g. "Community Support"). */
  category: string;
  image: FramerImage;
  body: RichBlock[];
  /** Sticky side block on the detail page. */
  aside: {
    image: FramerImage;
    title: string;
    description: string;
    label: string;
  };
}

export interface EventItem {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** Display time, e.g. "12:00 AM". */
  time: string;
  location: string;
  image: FramerImage;
  body: RichBlock[];
}

export interface Project {
  slug: string;
  title: string;
  /** Short text shown on cards. */
  excerpt: string;
  /** Longer text shown in the detail banner. */
  description: string;
  /** Core objective shown on the home page cards (e.g. "Influencer development"). */
  category: string;
  /** Theme icon from public/images shown next to the category on the home page cards. */
  icon: string;
  image: FramerImage;
  body: RichBlock[];
  gallery: FramerImage[];
}

export interface Job {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  employmentType: string;
  hours: string;
  body: RichBlock[];
}

export type ResourceTag =
  "help" | "business" | "families" | "partners" | "volunteer" | "community" | "education";

export interface Resource {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: FramerImage;
  tags: ResourceTag[];
  body: RichBlock[];
}

export interface ResourceCategory {
  slug: ResourceTag;
  title: string;
}

export interface TeamMember {
  name: string;
  bio: string;
  image: FramerImage;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Achievement {
  value: string;
  label: string;
  description: string;
}

export interface MissionPoint {
  number: string;
  title: string;
  description: string;
}

export interface IconFeature {
  icon: FramerImage;
  title?: string;
  text: string;
}
