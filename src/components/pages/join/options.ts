/**
 * Choice lists of the /join-youthlink registration form (mirrors the "Youthlink Registration
 * Form" on Google Forms). Shared by the form (to render the options) and the server action (to
 * validate the submission), so there is one source of truth. Labels double as submitted values.
 */

/** Choice value that reveals a free-text "Other" input. */
export const OTHER = "Other";

export const GENDER_OPTIONS = ["Male", "Female"] as const;

export const EMPLOYMENT_OPTIONS = [
  "Student",
  "Business Owner",
  "Job holder/Employed",
  "Freelancer",
  OTHER,
] as const;

export const HEARD_FROM_OPTIONS = [
  "Social media (Instagram, YouTube)",
  "WhatsApp Groups",
  "Friends/Family",
  "Public Session",
  OTHER,
] as const;

export const LEADERSHIP_OPTIONS = ["1", "2", "3", "4", "5"] as const;

export const SKILL_OPTIONS = [
  "Teaching Quran, Arabic, or Islamic studies",
  "Urdu Content Writing",
  "English Content Writing",
  "Research",
  "Editing/Proofreading",
  "Journalism/Investigation",
  "Public Speaking",
  "Graphic Design",
  "Social media Management",
  "Business Development/Entrepreneurship",
  "Project Management",
  "Website Development",
  "Finance/Accounting",
  "Legal/Law Knowledge",
  "Community Management",
  "Video Editor",
  OTHER,
] as const;

/** Both statements must be agreed to (the "Applicant Declaration" question). */
export const DECLARATIONS = [
  "I have answered this questionnaire honestly & I understand that joining YouthLink involves learning, responsibility, teamwork, and service, not only receiving benefits.",
  "I understand that submitting this form does not guarantee membership or a particular project placement.",
] as const;

/**
 * Portfolio upload. Vercel rejects request bodies over 4.5 MB, so files are capped at 4 MB
 * (the server action body limit in next.config.ts leaves room for the other fields).
 */
export const PORTFOLIO_MAX_BYTES = 4 * 1024 * 1024;
/** Extensions Brevo accepts as email attachments. */
export const PORTFOLIO_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".ppt",
  ".pptx",
  ".jpg",
  ".jpeg",
  ".png",
  ".zip",
] as const;
