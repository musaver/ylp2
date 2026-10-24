import "@/styles/templates/why-choose-us.css";
import { PageShell } from "@/components/layout/PageShell";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { WHY_BANNER, WhyBanner } from "@/components/pages/why-choose-us/WhyBanner";
import { VideoSection } from "@/components/pages/why-choose-us/VideoSection";
import { WhyMission } from "@/components/pages/why-choose-us/WhyMission";
import { HelpedNumbers } from "@/components/pages/why-choose-us/HelpedNumbers";
import { WhyTestimonials } from "@/components/pages/why-choose-us/WhyTestimonials";
import { achievements } from "@/content/achievements";
import { missionPoints } from "@/content/mission";
import { whyChooseUsTestimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: WHY_BANNER.heading,
  description: WHY_BANNER.body,
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <PageShell
      cta="image-right"
      contentClassName="framer-CQYPG framer-2ueW3 framer-CXUbw framer-ECcTs framer-4DipG framer-7xpbrn"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <WhyBanner />
      <VideoSection />
      <AchievementsSection className="framer-mcfwih" variant="why-choose-us" items={achievements} />
      <WhyMission points={missionPoints} />
      <HelpedNumbers />
      <WhyTestimonials items={whyChooseUsTestimonials} />
    </PageShell>
  );
}
