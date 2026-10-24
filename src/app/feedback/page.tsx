import "@/styles/templates/contact-us.css";
import "@/styles/templates/join-youthlink.css";
import "@/styles/templates/feedback.css";
import { PageShell } from "@/components/layout/PageShell";
import { ContactBanner } from "@/components/pages/contact/ContactBanner";
import { ContactInfo } from "@/components/pages/contact/ContactInfo";
import { FeedbackForm } from "@/components/pages/feedback/FeedbackForm";
import { JoinPrivacy } from "@/components/pages/join/JoinPrivacy";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { site } from "@/content/site";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Feedback and Complaint", path: "/feedback" });

/** Feedback and complaint page. Reuses the /join-youthlink template and styles. */
export default function FeedbackPage() {
  return (
    <PageShell
      cta="image"
      ctaContent={site.initiativeCta}
      contentClassName="framer-ZYNLF framer-2ueW3 framer-ECcTs framer-cYxwf framer-G6pBk framer-k7set framer-5EAfC framer-1izvhu1"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <ContactBanner title="Feedback and Complaint" />
      <ContactInfo contact={site.contact} socials={site.socials} />
      <FeedbackForm
        note={
          <JoinPrivacy>
            Your submission is stored securely and reviewed only by authorised YouthLink personnel.
            Submissions are never displayed publicly or shared outside the review team. We will only
            use your contact details to follow up on what you have shared.
          </JoinPrivacy>
        }
      />
      <ResourcesSection
        className="framer-17ut7hm"
        variant="contact-us"
        projects={getProjects().slice(0, 2)}
      />
    </PageShell>
  );
}
