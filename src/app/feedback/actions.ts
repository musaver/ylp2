"use server";

import { findCategory } from "@/components/pages/feedback/options";
import { markEmailSent, saveFeedback } from "@/lib/db";
import { SEND_FAILED_MESSAGE, sendFormEmail } from "@/lib/email";

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
  prevState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  const result = await handleFeedback(prevState, formData);
  if (result && !result.ok && result.field) {
    // Field name only: never log what the visitor typed.
    console.warn(`[feedback] Rejected: invalid ${result.field}`);
  }
  return result;
}

async function handleFeedback(
  _prevState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  // Bots fill the hidden honeypot inputs: pretend success and drop the submission.
  const trapped = HONEYPOT_FIELDS.filter((name) => text(formData.get(name)) !== "");
  if (trapped.length > 0) {
    console.warn(`[feedback] Dropped as spam: hidden field(s) filled: ${trapped.join(", ")}`);
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

  // Save first so nothing is lost if the email fails; the email goes out either way.
  const savedId = await saveFeedback({ ...submission, category: category.value });
  const sent = await sendFormEmail({
    subject: `YouthLink ${category.value === "Feedback" ? "feedback" : "complaint"} form`,
    from: { name: submission.fullName, email: submission.email },
    fields: [
      { label: "Type", value: category.value },
      { label: "About", value: submission.topic },
      { label: "Full name", value: submission.fullName },
      { label: "Email", value: submission.email },
      { label: "Phone", value: submission.phone },
      { label: "Message", value: submission.body },
    ],
  });
  if (savedId !== null && sent) {
    await markEmailSent("feedback_submissions", savedId);
  }
  // Only a submission that was neither saved nor emailed is lost.
  if (savedId === null && !sent) {
    return { ok: false, error: SEND_FAILED_MESSAGE };
  }
  return { ok: true };
}
