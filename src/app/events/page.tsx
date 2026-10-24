import "@/styles/templates/events.css";
import { PageShell } from "@/components/layout/PageShell";
import { EVENTS_BANNER, EventsBanner } from "@/components/pages/events/EventsBanner";
import { EventsGrid } from "@/components/pages/events/EventsGrid";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { getEvents, getFeaturedResources } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: EVENTS_BANNER.heading,
  description: EVENTS_BANNER.description,
  path: "/events",
});

export default function EventsPage() {
  return (
    <PageShell
      cta="gallery"
      contentClassName="framer-VR2Gm framer-2ueW3 framer-CXUbw framer-ECcTs framer-mnx0x7"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-1dt2cd1"
    >
      <EventsBanner />
      <EventsGrid events={getEvents()} />
      <ResourcesSection
        className="framer-1k2qnon"
        resources={getFeaturedResources()}
        variant="events"
      />
    </PageShell>
  );
}
