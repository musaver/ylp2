import "@/styles/templates/contact-us.css";
import { PageShell } from "@/components/layout/PageShell";
import { ContactBanner } from "@/components/pages/contact/ContactBanner";
import { ContactForm } from "@/components/pages/contact/ContactForm";
import { ContactInfo } from "@/components/pages/contact/ContactInfo";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { site } from "@/content/site";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Contact us", path: "/contact-us" });

export default function ContactUsPage() {
  return (
    <PageShell
      cta="image"
      contentClassName="framer-ZYNLF framer-2ueW3 framer-ECcTs framer-cYxwf framer-G6pBk framer-k7set framer-5EAfC framer-1izvhu1"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <ContactBanner />
      <ContactInfo contact={site.contact} socials={site.socials} />
      <ContactForm />
      <ResourcesSection
        className="framer-17ut7hm"
        variant="contact-us"
        projects={getProjects().slice(0, 2)}
      />
    </PageShell>
  );
}
