import "@/styles/templates/career-detail.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { JobBanner } from "@/components/pages/career/JobBanner";
import { JobBody } from "@/components/pages/career/JobBody";
import { CareersSection } from "@/components/sections/CareersSection";
import { getJobBySlug, getJobs, getRelatedJobs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return getJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return buildMetadata({
    title: job.title,
    description: job.excerpt,
    path: `/career/${job.slug}`,
  });
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <PageShell
      cta="gallery"
      contentClassName="framer-Ptb8J framer-dVXc9 framer-Q9HF8 framer-CXUbw framer-ECcTs framer-NqGwh framer-sPkdn framer-u6hTP framer-VFjXM framer-aZLxC framer-k7set framer-5EAfC framer-6z3la4"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <JobBanner job={job} />
      <JobBody job={job} />
      <CareersSection className="framer-hy0niv" jobs={getRelatedJobs(job.slug)} />
    </PageShell>
  );
}
