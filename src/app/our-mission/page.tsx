import "@/styles/templates/our-mission.css";
import { PageShell } from "@/components/layout/PageShell";
import { CausesSection } from "@/components/sections/CausesSection";
import { MISSION_BANNER, MissionBanner } from "@/components/pages/our-mission/MissionBanner";
import { MissionGallery } from "@/components/pages/our-mission/MissionGallery";
import { getFeaturedCauses } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: MISSION_BANNER.heading,
  description: MISSION_BANNER.body,
  path: "/our-mission",
});

export default function OurMissionPage() {
  return (
    <PageShell
      cta="image"
      contentClassName="framer-ay5xh framer-2ueW3 framer-CXUbw framer-ECcTs framer-19wkpj4"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-qvc184"
    >
      <MissionBanner />
      <MissionGallery />
      <CausesSection
        className="framer-1py284h"
        variant="our-mission"
        causes={getFeaturedCauses()}
      />
    </PageShell>
  );
}
