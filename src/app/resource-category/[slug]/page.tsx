import "@/styles/templates/resource-category.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { CategoryBanner } from "@/components/pages/resources/CategoryBanner";
import { CategoryGrid } from "@/components/pages/resources/CategoryGrid";
import {
  getResourceCategories,
  getResourceCategoryBySlug,
  getResourcesByTag,
  isResourceTag,
} from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

interface ResourceCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getResourceCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: ResourceCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = isResourceTag(slug) ? getResourceCategoryBySlug(slug) : undefined;
  if (!category) return {};
  return buildMetadata({ title: category.title, path: `/resource-category/${category.slug}` });
}

export default async function ResourceCategoryPage({ params }: ResourceCategoryPageProps) {
  const { slug } = await params;
  if (!isResourceTag(slug)) notFound();
  const category = getResourceCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <PageShell
      cta="image"
      contentClassName="framer-CQ0FP framer-2ueW3 framer-qf426o"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-1vtstu"
    >
      <CategoryBanner title={category.title} />
      <CategoryGrid tag={category.slug} resources={getResourcesByTag(category.slug)} />
    </PageShell>
  );
}
