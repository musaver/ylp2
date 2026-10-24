import "@/styles/templates/resource-detail.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ResourceBanner } from "@/components/pages/resources/ResourceBanner";
import { ResourceBody } from "@/components/pages/resources/ResourceBody";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { achievements } from "@/content/achievements";
import { getRelatedResources, getResourceBySlug, getResources } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getResources().map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return buildMetadata({
    title: resource.title,
    description: resource.excerpt,
    path: `/resources/${resource.slug}`,
    image: resource.image.src,
  });
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <PageShell
      cta="image"
      contentClassName="framer-lMR1Q framer-dVXc9 framer-Cm7Xc framer-CXUbw framer-ECcTs framer-NqGwh framer-sPkdn framer-u6hTP framer-VFjXM framer-aZLxC framer-k7set framer-5EAfC framer-nvs3ka"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <ResourceBanner resource={resource} />
      <ResourceBody resource={resource} />
      <AchievementsSection className="framer-acz89m" items={achievements} variant="resource" />
      <ResourcesSection
        className="framer-5hn1vg"
        resources={getRelatedResources(slug)}
        variant="resource-detail"
      />
    </PageShell>
  );
}
