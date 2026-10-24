import "@/styles/templates/careers.css";
import { PageShell } from "@/components/layout/PageShell";
import { CAREER_BANNER, CareerBanner } from "@/components/pages/career/CareerBanner";
import { JobsList } from "@/components/pages/career/JobsList";
import { getJobs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: CAREER_BANNER.heading, path: "/career" });

export default function CareerPage() {
  return (
    <PageShell
      cta="image-right"
      contentClassName="framer-s29EG framer-2ueW3 framer-8u761u"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-ufc2ao"
    >
      <CareerBanner />
      <JobsList jobs={getJobs()} />
    </PageShell>
  );
}
