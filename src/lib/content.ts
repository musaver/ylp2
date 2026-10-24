/**
 * Content accessors. Routes and components read site content only through these functions so
 * that swapping the typed data files for a CMS later only touches this module.
 *
 * Listing order is the order of the original Framer collection pages; it is preserved as-is.
 */
import { jobs } from "@/content/careers";
import { causes } from "@/content/causes";
import { events } from "@/content/events";
import { projects } from "@/content/projects";
import { resourceCategories, resources } from "@/content/resources";
import type {
  Cause,
  EventItem,
  Job,
  Project,
  Resource,
  ResourceCategory,
  ResourceTag,
} from "@/lib/types";

/**
 * "Related" rule shared by every detail page of the original site.
 *
 * The "Other ways to help" / "Latest happenings" / "Similar projects" / "More opportunities" /
 * "Recent updates from our team" blocks are not driven by tags, categories or dates: each detail
 * page simply shows the first `count` items of the listing order, skipping the item itself.
 * Verified against every detail page of the export, e.g. /causes/poverty-relief-fund-… shows
 * health-and-wellness-support, education-access and disaster-relief-fund, while every other
 * cause page shows poverty-relief-fund first.
 */
function firstOthers<T extends { slug: string }>(
  items: readonly T[],
  slug: string,
  count: number,
): T[] {
  return items.filter((item) => item.slug !== slug).slice(0, count);
}

function bySlug<T extends { slug: string }>(items: readonly T[], slug: string): T | undefined {
  return items.find((item) => item.slug === slug);
}

/* ------------------------------------------------------------------ causes */

export function getCauses(): Cause[] {
  return causes;
}

export function getCauseBySlug(slug: string): Cause | undefined {
  return bySlug(causes, slug);
}

/** The 3 causes shown in the "Causes" section of the home page (first 3 of the listing). */
export function getFeaturedCauses(): Cause[] {
  return causes.slice(0, 3);
}

/** Causes shown in "Fundraisers facing critical needs" on a cause detail page (3). */
export function getRelatedCauses(slug: string, count = 3): Cause[] {
  return firstOthers(causes, slug, count);
}

/* ------------------------------------------------------------------ events */

/**
 * Events in the order of the original /events page. Note that the original listing is not
 * sorted by date (Mar 28, Mar 9, Mar 2, Apr 21, Jan 23, Jan 7); that order is kept on purpose.
 */
export function getEvents(): EventItem[] {
  return events;
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return bySlug(events, slug);
}

/** Events shown in "Latest happenings" on an event detail page (3). */
export function getRelatedEvents(slug: string, count = 3): EventItem[] {
  return firstOthers(events, slug, count);
}

/* ---------------------------------------------------------------- projects */

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return bySlug(projects, slug);
}

/** Projects shown in "Similar projects" on a project detail page (2). */
export function getRelatedProjects(slug: string, count = 2): Project[] {
  return firstOthers(projects, slug, count);
}

/* -------------------------------------------------------------------- jobs */

export function getJobs(): Job[] {
  return jobs;
}

export function getJobBySlug(slug: string): Job | undefined {
  return bySlug(jobs, slug);
}

/** Jobs shown in "More opportunities" on a job detail page (2). */
export function getRelatedJobs(slug: string, count = 2): Job[] {
  return firstOthers(jobs, slug, count);
}

/* --------------------------------------------------------------- resources */

export function getResources(): Resource[] {
  return resources;
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return bySlug(resources, slug);
}

/**
 * The 2 resources shown in "Recent updates from our team" on the home, about-us and events
 * pages (first 2 of the listing).
 */
export function getFeaturedResources(): Resource[] {
  return resources.slice(0, 2);
}

/** Resources shown in "Recent updates from our team" on a resource detail page (2). */
export function getRelatedResources(slug: string, count = 2): Resource[] {
  return firstOthers(resources, slug, count);
}

export function getResourceCategories(): ResourceCategory[] {
  return resourceCategories;
}

export function isResourceTag(value: string): value is ResourceTag {
  return resourceCategories.some((category) => category.slug === value);
}

export function getResourceCategoryBySlug(slug: string): ResourceCategory | undefined {
  return bySlug(resourceCategories, slug);
}

/**
 * Resources carrying `tag`, in listing order (the /resource-category/<tag> page). Note that the
 * original category page hides the current tag from each card's tag list; cards there render
 * `resource.tags.filter((t) => t !== tag)`.
 */
export function getResourcesByTag(tag: ResourceTag): Resource[] {
  return resources.filter((resource) => resource.tags.includes(tag));
}
