import type { NavLink, SocialLink } from "@/lib/types";

export const site = {
  name: "YouthLink",
  title: "YouthLink — Building an active community, not a crowd",
  description:
    "YouthLink brings young Muslims together to grow through learning, projects and responsibility, building knowledge, voice and community.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "https://framerusercontent.com/assets/iDVDTfA9thFamyycHknPcHtoEks.png",
  tagline: "Together, we have the power to change lives.",
  copyright: "© YouthLink. All Rights Reserved.",
  contact: {
    address: "14 Tottenham Road, London, England",
    phone: "+1 000 33 44 564",
    email: "youthlink@example.com",
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
    primary: { label: "Bring an Initiative", href: "/contact-us" } satisfies NavLink,
    secondary: null,
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
  { label: "About us", href: "/about-us" },
  { label: "Leadership", href: "/leadership" },
  { label: "Our mission", href: "/our-mission" },
  { label: "Why choose us", href: "/why-choose-us" },
  { label: "Causes", href: "/causes" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/career" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Join YouthLink", href: "/join-youthlink" },
  { label: "Feedback", href: "/feedback" },
];
