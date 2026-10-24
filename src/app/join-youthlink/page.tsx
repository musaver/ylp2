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

export const metadata = buildMetadata({ title: "Join YouthLink", path: "/join-youthlink" });

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
      <ContactInfo contact={site.contact} socials={site.socials} />
      <JoinForm note={<JoinPrivacy />} />
      <ResourcesSection
        className="framer-17ut7hm"
        variant="contact-us"
        projects={getProjects().slice(0, 2)}
      />
    </PageShell>
  );
}
