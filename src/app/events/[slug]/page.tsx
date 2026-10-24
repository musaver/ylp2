import "@/styles/templates/event-detail.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { EventBanner } from "@/components/pages/events/EventBanner";
import { EventsSection } from "@/components/sections/EventsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { faq } from "@/content/faq";
import { getEventBySlug, getEvents, getRelatedEvents } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  return buildMetadata({
    title: event.title,
    description: event.excerpt,
    path: `/events/${event.slug}`,
    image: event.image.src,
  });
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <PageShell
      cta="gallery"
      contentClassName="framer-BXnnh framer-2ueW3 framer-CXUbw framer-ECcTs framer-NqGwh framer-sPkdn framer-u6hTP framer-VFjXM framer-aZLxC framer-k7set framer-5EAfC framer-HUYtL framer-be5r6 framer-1Gqee framer-eCHC7 framer-1dxg8n1"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <EventBanner event={event} />
      <EventsSection className="framer-u83prw" events={getRelatedEvents(event.slug)} />
      <FaqSection className="framer-1buqy30" items={faq} variant="event" />
    </PageShell>
  );
}
