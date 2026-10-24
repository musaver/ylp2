import "@/styles/templates/projects.css";
import { PageShell } from "@/components/layout/PageShell";
import { PROJECTS_BANNER, ProjectsBanner } from "@/components/pages/projects/ProjectsBanner";
import { ProjectsGrid } from "@/components/pages/projects/ProjectsGrid";
import { getProjects } from "@/lib/content";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: PROJECTS_BANNER.title,
  description: PROJECTS_BANNER.description,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell
      cta="image"
      ctaContent={site.initiativeCta}
      contentClassName="framer-wNkH3 framer-2ueW3 framer-CXUbw framer-ljz9sa"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-dvhx17"
    >
      <ProjectsBanner title={PROJECTS_BANNER.title} description={PROJECTS_BANNER.description} />
      <ProjectsGrid projects={getProjects()} />
    </PageShell>
  );
}
