"use server";

/** Field the validation error refers to, so the form can point the browser at it. */
export type ContactField = "firstName" | "email" | "message";

export type ContactState = { ok: true } | { ok: false; error: string; field?: ContactField } | null;

/**
 * Honeypot inputs of the Framer form. They are visually hidden (scale(0), tabIndex -1) so only
 * bots fill them in.
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

function text(value: FormDataEntryValue | null | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Handles the /contact-us form. Field names are Framer's: "First name", "Last name", "Email",
 * "Phone number". The message textarea is also named "Email" in the export, so the two "Email"
 * entries are read in document order: the email input first, then the message.
 */
export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Bots fill the hidden honeypot inputs: pretend success and drop the submission.
  if (HONEYPOT_FIELDS.some((name) => text(formData.get(name)) !== "")) {
    return { ok: true };
  }

  const [emailEntry, messageEntry] = formData.getAll("Email");
  const submission = {
    firstName: text(formData.get("First name")),
    lastName: text(formData.get("Last name")),
    email: text(emailEntry),
    phone: text(formData.get("Phone number")),
    message: text(messageEntry),
  };

  if (!submission.firstName) {
    return { ok: false, error: "Please enter your first name.", field: "firstName" };
  }
  if (!submission.email) {
    return { ok: false, error: "Please enter your email.", field: "email" };
  }
  if (!EMAIL_PATTERN.test(submission.email)) {
    return { ok: false, error: "Please enter a valid email address.", field: "email" };
  }
  if (!submission.message) {
    return { ok: false, error: "Please enter your message.", field: "message" };
  }

  // TODO: deliver to an email/CRM provider
  return { ok: true };
}
