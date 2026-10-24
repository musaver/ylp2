import "@/styles/templates/project-detail.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectBanner } from "@/components/pages/projects/ProjectBanner";
import { ProjectBody } from "@/components/pages/projects/ProjectBody";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getProjectBySlug, getProjects, getRelatedProjects } from "@/lib/content";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageShell
      cta="image"
      ctaContent={site.initiativeCta}
      contentClassName="framer-QzbAg framer-Q9HF8 framer-CXUbw framer-ECcTs framer-NqGwh framer-sPkdn framer-u6hTP framer-VFjXM framer-aZLxC framer-k7set framer-5EAfC framer-1pil0kk"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <ProjectBanner project={project} />
      <ProjectBody project={project} />
      <ProjectsSection
        className="framer-6rnewy"
        projects={getRelatedProjects(slug)}
        label="Other projects"
        heading="Explore more YouthLink projects"
      />
    </PageShell>
  );
}
