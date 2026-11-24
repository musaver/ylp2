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
import type { FramerImage } from "@/lib/types";

export const metadata = buildMetadata({ title: "Feedback and Complaint", path: "/feedback" });

const FEEDBACK_IMAGE: FramerImage = {
  src: "/images/youthlink/feedback-banner-1024.jpg",
  srcSet:
    "/images/youthlink/feedback-banner-512.jpg 512w, /images/youthlink/feedback-banner-1024.jpg 1024w, /images/youthlink/feedback-banner-1536.jpg 1536w",
  alt: "Lantern in front of a mosque at sunset with a Complaint button",
  width: 1536,
  height: 1024,
  // The frame is near-square: anchor left so the lantern stays in view with the whole button.
  objectPosition: "10% 50%",
};

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
      <ContactInfo contact={site.contact} socials={site.socials} image={FEEDBACK_IMAGE} />
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
