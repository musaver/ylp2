/**
 * Choice lists of the /feedback form. Shared by the form (to render the options) and the server
 * action (to validate the submission), so there is one source of truth. Labels double as
 * submitted values.
 */

export const CATEGORIES = [
  {
    value: "Feedback",
    title: "Feedback",
    description:
      "Suggestions for improving the website, public experience, activities, projects or community journey.",
    topics: [
      "The website",
      "Public experience",
      "Activities",
      "Projects",
      "Community journey",
      "Something else",
    ],
  },
  {
    value: "Complaint or concern",
    title: "Complaint or concern",
    description:
      "A structured way to report a concern related to public communication, access, behaviour or an experience with a YouthLink group, project or activity.",
    topics: [
      "Public communication",
      "Access",
      "Behaviour",
      "An experience with a YouthLink group",
      "An experience with a YouthLink project or activity",
      "Something else",
    ],
  },
] as const;

export type Category = (typeof CATEGORIES)[number];

export function findCategory(value: string): Category | undefined {
  return CATEGORIES.find((category) => category.value === value);
}
