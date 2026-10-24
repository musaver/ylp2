import "@/styles/templates/resources.css";
import { PageShell } from "@/components/layout/PageShell";
import { RESOURCES_BANNER, ResourcesBanner } from "@/components/pages/resources/ResourcesBanner";
import { ResourcesGrid } from "@/components/pages/resources/ResourcesGrid";
import { getResources } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: RESOURCES_BANNER.title,
  description: RESOURCES_BANNER.description,
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <PageShell
      cta="image"
      contentClassName="framer-ZzVlp framer-2ueW3 framer-CXUbw framer-1owuaeu"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-obdyao"
    >
      <ResourcesBanner title={RESOURCES_BANNER.title} description={RESOURCES_BANNER.description} />
      <ResourcesGrid resources={getResources()} />
    </PageShell>
  );
}
