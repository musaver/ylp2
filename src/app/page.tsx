import { Cta } from "@/components/layout/Cta";
import { PageShell } from "@/components/layout/PageShell";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ProjectsHighlight } from "@/components/sections/ProjectsHighlight";
import { CommitmentsSection } from "@/components/pages/home/CommitmentsSection";
import { HomeAbout } from "@/components/pages/home/HomeAbout";
import { HomeBanner } from "@/components/pages/home/HomeBanner";
import { MissionSection } from "@/components/pages/home/MissionSection";
import { WhatWeBelieve } from "@/components/pages/our-mission/WhatWeBelieve";
import { WhatWeStandFor } from "@/components/pages/our-mission/WhatWeStandFor";
import { achievements } from "@/content/achievements";
import { beliefs, memberJourney, memberJourneyImage } from "@/content/mission";
import { site } from "@/content/site";
import { vision } from "@/content/vision";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import "@/styles/templates/home.css";
import "@/styles/templates/our-mission.css";

export const metadata = buildMetadata({
  title: "Together we can make a huge impact.",
  path: "/",
});

/** Home page (Framer page "index", template home). */
export default function HomePage() {
  return (
    <PageShell
      cta={null}
      contentClassName="framer-9aa0D framer-2ueW3 framer-CXUbw framer-dVXc9 framer-ECcTs framer-72rtr7"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-h0h9ty"
    >
      <HomeBanner />
      <CommitmentsSection
        label={vision.label}
        heading={vision.heading}
        intro={vision.intro}
        pillars={vision.pillars}
      />
      {/* "Why join YouthLink?" benefits, styled by the our-mission template scope. */}
      <div className="framer-ay5xh" style={{ display: "contents" }}>
        <WhatWeStandFor />
        <WhatWeBelieve beliefs={beliefs} />
      </div>
      <HomeAbout />
      {/* Projects rendered in the Causes section design. */}
      <ProjectsHighlight projects={getProjects()} />
      {/* "Bring a new initiative" CTA. Its layout CSS orders it above the footer, so reset it. */}
      <Cta variant="image" content={site.initiativeCta} style={{ order: 0 }} />
      <AchievementsSection className="framer-2gu5qk" items={achievements} variant="home" />
      <MissionSection
        items={memberJourney}
        label="Member journey"
        heading="The member journey"
        image={memberJourneyImage}
      />
    </PageShell>
  );
}
