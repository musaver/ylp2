import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMeta {
  title: string;
  description?: string;
  path: string;
  image?: string;
}

/** Builds consistent metadata (title, description, canonical, Open Graph, Twitter) for a page. */
export function buildMetadata({
  title,
  description = site.description,
  path,
  image,
}: PageMeta): Metadata {
  const images = [image ?? site.ogImage];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url: path, siteName: site.name, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
