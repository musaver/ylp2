import "@/styles/templates/about-us.css";
import { PageShell } from "@/components/layout/PageShell";
import { AboutBanner } from "@/components/pages/about/AboutBanner";
import { AboutPurpose } from "@/components/pages/about/AboutPurpose";
import { VolunteersSection } from "@/components/pages/about/VolunteersSection";
import { TransformingLives } from "@/components/pages/about/TransformingLives";
import { AboutTestimonials } from "@/components/pages/about/AboutTestimonials";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { team } from "@/content/team";
import { aboutTestimonials } from "@/content/testimonials";

export const metadata = buildMetadata({
  title: "About us",
  description:
    "Founded on the principles of compassion and inclusivity, we bring together partners, donors, and volunteers to collectively make a lasting and meaningful impact.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <PageShell
      cta="image"
      contentClassName="framer-HZNR3 framer-2ueW3 framer-CXUbw framer-cYxwf framer-ECcTs framer-1ys3drf"
      contentStyle={{ minHeight: "100vh", width: "auto", display: "contents" }}
      headerTriggerClassName="framer-9w1rhi"
    >
      <AboutBanner />
      <AboutPurpose />
      <VolunteersSection members={team.slice(0, 3)} />
      <TransformingLives />
      <AboutTestimonials testimonials={aboutTestimonials} />
      <ResourcesSection
        className="framer-tejbyj"
        variant="about-us"
        projects={getProjects().slice(0, 2)}
      />
    </PageShell>
  );
}
