import "@/styles/templates/leadership.css";
import { PageShell } from "@/components/layout/PageShell";
import { DirectorSection } from "@/components/pages/leadership/DirectorSection";
import {
  LEADERSHIP_BANNER,
  LeadershipBanner,
} from "@/components/pages/leadership/LeadershipBanner";
import { TeamSection } from "@/components/pages/leadership/TeamSection";
import { director, team } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";

const { heading } = LEADERSHIP_BANNER;

export const metadata = buildMetadata({
  title: `${heading.before}${heading.highlight}${heading.after}`,
  description: LEADERSHIP_BANNER.description,
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <PageShell
      cta="gallery"
      contentClassName="framer-riAot framer-2ueW3 framer-CXUbw framer-cYxwf framer-sPkdn framer-ATSAH framer-ECcTs framer-ccefmb"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <LeadershipBanner />
      <DirectorSection director={director} />
      <TeamSection members={team} />
    </PageShell>
  );
}
