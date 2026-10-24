/**
 * Choice lists of the /join-youthlink application form. Shared by the form (to render the
 * options) and the server action (to validate the submission), so there is one source of truth.
 * Labels double as submitted values.
 */

export const AGE_OPTIONS = ["Under 18", "18 to 24", "25 to 30", "31 or over"] as const;

export const STATUS_OPTIONS = [
  "A university student",
  "A school or college student",
  "Working",
  "Something else",
] as const;

export const INTEREST_OPTIONS = [
  "Islamic learning and Tarbiyah",
  "Writing and research",
  "Media and content",
  "Technology",
  "Business and entrepreneurship",
  "Community service",
  "Leadership and organising",
] as const;

export const TIME_OPTIONS = [
  "1 to 2 hours",
  "3 to 5 hours",
  "6 to 10 hours",
  "More than 10 hours",
] as const;

export const INVOLVEMENT_OPTIONS = [
  "Join as a member and grow through the YouthLink journey",
  "I want to bring an initiative, project or idea",
] as const;
