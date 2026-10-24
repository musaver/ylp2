"use server";

import { findCategory } from "@/components/pages/feedback/options";

/** Field the validation error refers to, so the form can point the browser at it. */
export type FeedbackField = "category" | "topic" | "fullName" | "email" | "body";

export type FeedbackState =
  { ok: true } | { ok: false; error: string; field?: FeedbackField } | null;

/**
 * Honeypot inputs of the form. They are visually hidden (scale(0), tabIndex -1) so only bots
 * fill them in. Same list as the /contact-us form, which is why the message field is "body".
 */
const HONEYPOT_FIELDS = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Upper bound on the message, so the form cannot be used to push arbitrary amounts of data. */
const MAX_BODY_LENGTH = 5000;

function text(value: FormDataEntryValue | null | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Handles the /feedback form. Submissions are never displayed publicly. */
export async function submitFeedback(
  _prevState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  // Bots fill the hidden honeypot inputs: pretend success and drop the submission.
  if (HONEYPOT_FIELDS.some((name) => text(formData.get(name)) !== "")) {
    return { ok: true };
  }

  const submission = {
    category: text(formData.get("category")),
    topic: text(formData.get("topic")),
    fullName: text(formData.get("fullName")),
    email: text(formData.get("email")),
    phone: text(formData.get("phone")),
    body: text(formData.get("body")),
  };

  const category = findCategory(submission.category);
  if (!category) {
    return {
      ok: false,
      error: "Please choose Feedback or Complaint or concern.",
      field: "category",
    };
  }
  if (!(category.topics as readonly string[]).includes(submission.topic)) {
    return { ok: false, error: "Please select what this is about.", field: "topic" };
  }
  if (!submission.fullName) {
    return { ok: false, error: "Please enter your full name.", field: "fullName" };
  }
  if (!submission.email) {
    return { ok: false, error: "Please enter your email address.", field: "email" };
  }
  if (!EMAIL_PATTERN.test(submission.email)) {
    return { ok: false, error: "Please enter a valid email address.", field: "email" };
  }
  if (!submission.body) {
    return { ok: false, error: "Please enter your message.", field: "body" };
  }
  if (submission.body.length > MAX_BODY_LENGTH) {
    return {
      ok: false,
      error: `Please keep your message under ${MAX_BODY_LENGTH} characters.`,
      field: "body",
    };
  }

  // TODO: store securely and notify the authorised YouthLink review team (email/CRM provider)
  return { ok: true };
}
