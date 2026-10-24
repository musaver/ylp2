import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { CauseBanner } from "@/components/pages/causes/CauseBanner";
import { CauseBody } from "@/components/pages/causes/CauseBody";
import { CauseImage } from "@/components/pages/causes/CauseImage";
import { CausesSection } from "@/components/sections/CausesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { faq } from "@/content/faq";
import { getCauseBySlug, getCauses, getRelatedCauses } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import "@/styles/templates/cause-detail.css";

interface CausePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return getCauses().map((cause) => ({ slug: cause.slug }));
}

export async function generateMetadata({ params }: CausePageProps): Promise<Metadata> {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  if (!cause) return {};
  return buildMetadata({
    title: cause.title,
    description: cause.excerpt,
    path: `/causes/${cause.slug}`,
    image: cause.image.src,
  });
}

export default async function CausePage({ params }: CausePageProps) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  if (!cause) notFound();

  return (
    <PageShell
      cta="image-right"
      contentClassName="framer-gKz2d framer-98djk framer-CXUbw framer-ECcTs framer-NqGwh framer-sPkdn framer-u6hTP framer-VFjXM framer-aZLxC framer-k7set framer-5EAfC framer-HUYtL framer-cYxwf framer-dVXc9 framer-9ymi93"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-1gjrmxu"
    >
      <CauseBanner cause={cause} />
      <CauseImage cause={cause} />
      <CauseBody cause={cause} />
      <CausesSection
        className="framer-ac59iq"
        causes={getRelatedCauses(cause.slug)}
        variant="cause-detail"
      />
      <FaqSection className="framer-rzdwas" items={faq} variant="cause" />
    </PageShell>
  );
}
