import { PageShell } from "@/components/layout/PageShell";
import { CausesBanner } from "@/components/pages/causes/CausesBanner";
import { CausesGrid } from "@/components/pages/causes/CausesGrid";
import { achievements } from "@/content/achievements";
import { getCauses } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import "@/styles/templates/causes.css";

const TITLE = "Causes";
const DESCRIPTION =
  "Every cause we champion is an opportunity to create meaningful change. Join us in making a positive impact on lives and communities around the world.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/causes" });

export default function CausesPage() {
  return (
    <PageShell
      cta="image"
      contentClassName="framer-xoj4C framer-2ueW3 framer-CXUbw framer-1v1u7jl"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-nnsamc"
    >
      <CausesBanner title={TITLE} description={DESCRIPTION} achievements={achievements} />
      <CausesGrid causes={getCauses()} />
    </PageShell>
  );
}
