import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import {
  getCauses,
  getEvents,
  getJobs,
  getProjects,
  getResourceCategories,
  getResources,
} from "@/lib/content";

const staticRoutes = [
  "/",
  "/about-us",
  "/our-mission",
  "/leadership",
  "/why-choose-us",
  "/contact-us",
  "/join-youthlink",
  "/feedback",
  "/causes",
  "/events",
  "/projects",
  "/career",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...getCauses().map((c) => `/causes/${c.slug}`),
    ...getEvents().map((e) => `/events/${e.slug}`),
    ...getProjects().map((p) => `/projects/${p.slug}`),
    ...getJobs().map((j) => `/career/${j.slug}`),
    ...getResources().map((r) => `/resources/${r.slug}`),
    ...getResourceCategories().map((c) => `/resource-category/${c.slug}`),
  ];
  return routes.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly" }));
}
