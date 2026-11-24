import type { FramerImage, NavLink, SocialLink } from "@/lib/types";

export const site = {
  name: "YouthLink",
  title: "YouthLink — Building an active community, not a crowd",
  description:
    "YouthLink brings young Muslims together to grow through learning, projects and responsibility, building knowledge, voice and community.",
  // On Vercel, fall back to the production domain so share-preview image URLs aren't localhost.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  ogImage: "/og-image.png",
  tagline: "Together, we have the power to change lives.",
  copyright: "© YouthLink. All Rights Reserved.",
  contact: {
    email: "contact@youthlinkpakistan.com",
  },
  socials: [
    { name: "instagram", href: "https://www.instagram.com" },
    { name: "youtube", href: "https://www.youtube.com" },
    { name: "facebook", href: "https://www.facebook.com" },
  ] satisfies SocialLink[],
  cta: {
    text: "Your support can change lives. Whether you’re donating, volunteering, or partnering with us, every action counts.",
    primary: { label: "Make an impact", href: "/events" } satisfies NavLink,
    secondary: { label: "Donate", href: "/contact-us" } satisfies NavLink,
  },
  /** Home page copy for the "image" CTA above the footer. */
  initiativeCta: {
    label: "New initiatives",
    heading: "Bring a new initiative",
    text: "Have an initiative that can serve the Ummah and society? Bring your idea into the YouthLink network and explore how it can be developed with the right people, skills and support.",
    primary: {
      label: "Bring an Initiative",
      href: "mailto:contact@youthlinkpakistan.com?subject=New%20initiative",
    } satisfies NavLink,
    secondary: null,
    image: {
      src: "/images/youthlink/initiative-banner-1024.jpg",
      srcSet:
        "/images/youthlink/initiative-banner-512.jpg 512w, /images/youthlink/initiative-banner-1024.jpg 1024w",
      alt: "Young people raising their hands beneath Pakistan's crescent and star",
      width: 1024,
      height: 1024,
      // Square picture in a wide block: this keeps the raised hands in view on desktop,
      // while the tall phone block shows the whole picture.
      objectPosition: "50% 43%",
    } satisfies FramerImage,
  },
} as const;

/**
 * Main site navigation (desktop bar and phone menu). Sections that only exist on the home page
 * are linked by anchor (`/#…`, ids set on the home sections); the rest link to their pages.
 */
export const headerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Vision and Community", href: "/#vision" },
  { label: "Projects", href: "/projects" },
  { label: "Member Journey", href: "/#member-journey" },
  { label: "Feedback and Complaint", href: "/feedback" },
];

/** The header's call-to-action button (right of the nav links). */
export const joinLink: NavLink = { label: "Join YouthLink", href: "/join-youthlink" };

/** Links in the phone menu overlay ("Join YouthLink" is its CTA button). */
export const mobileNav: NavLink[] = headerNav;

/** Links in the footer. */
export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Feedback and Complaint", href: "/feedback" },
  { label: "Join YouthLink", href: "/join-youthlink" },
];
