import "@/styles/templates/contact-us.css";
import "@/styles/templates/join-youthlink.css";
import { PageShell } from "@/components/layout/PageShell";
import { ContactBanner } from "@/components/pages/contact/ContactBanner";
import { ContactInfo } from "@/components/pages/contact/ContactInfo";
import { JoinForm } from "@/components/pages/join/JoinForm";
import { JoinPrivacy } from "@/components/pages/join/JoinPrivacy";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { site } from "@/content/site";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import type { FramerImage } from "@/lib/types";

export const metadata = buildMetadata({ title: "Join YouthLink", path: "/join-youthlink" });

const JOIN_IMAGE: FramerImage = {
  src: "/images/youthlink/join-banner-1024.jpg",
  srcSet:
    "/images/youthlink/join-banner-512.jpg 512w, /images/youthlink/join-banner-1024.jpg 1024w, /images/youthlink/join-banner-1536.jpg 1536w",
  alt: "Lantern in front of a mosque at sunset with a Joining button",
  width: 1536,
  height: 1024,
  // The frame is near-square: anchor left so the lantern stays in view with the whole button.
  objectPosition: "10% 50%",
};

/** Membership / initiative application page. Reuses the /contact-us template and styles. */
export default function JoinYouthLinkPage() {
  return (
    <PageShell
      cta="image"
      ctaContent={site.initiativeCta}
      contentClassName="framer-ZYNLF framer-2ueW3 framer-ECcTs framer-cYxwf framer-G6pBk framer-k7set framer-5EAfC framer-1izvhu1"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <ContactBanner title="Join YouthLink" />
      <ContactInfo contact={site.contact} socials={site.socials} image={JOIN_IMAGE} />
      <JoinForm note={<JoinPrivacy />} />
      <ResourcesSection
        className="framer-17ut7hm"
        variant="contact-us"
        projects={getProjects().slice(0, 2)}
      />
    </PageShell>
  );
}
