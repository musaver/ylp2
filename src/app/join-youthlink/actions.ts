"use server";

import {
  AGE_OPTIONS,
  INTEREST_OPTIONS,
  INVOLVEMENT_OPTIONS,
  STATUS_OPTIONS,
  TIME_OPTIONS,
} from "@/components/pages/join/options";

/** Field the validation error refers to, so the form can point the browser at it. */
export type JoinField =
  | "fullName"
  | "email"
  | "city"
  | "age"
  | "status"
  | "interests"
  | "motivation"
  | "time"
  | "involvement"
  | "consent";

export type JoinState = { ok: true } | { ok: false; error: string; field?: JoinField } | null;

/**
 * Honeypot inputs of the form. They are visually hidden (scale(0), tabIndex -1) so only bots
 * fill them in. Same list as the /contact-us form.
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

function texts(values: FormDataEntryValue[]): string[] {
  return values.map(text).filter((value) => value !== "");
}

function isOneOf(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

/** Handles the /join-youthlink application form. */
export async function submitJoinApplication(
  _prevState: JoinState,
  formData: FormData,
): Promise<JoinState> {
  // Bots fill the hidden honeypot inputs: pretend success and drop the submission.
  if (HONEYPOT_FIELDS.some((name) => text(formData.get(name)) !== "")) {
    return { ok: true };
  }

  const application = {
    fullName: text(formData.get("fullName")),
    email: text(formData.get("email")),
    phone: text(formData.get("phone")),
    city: text(formData.get("city")),
    age: text(formData.get("age")),
    status: text(formData.get("status")),
    organisation: text(formData.get("organisation")),
    interests: texts(formData.getAll("interests")),
    skills: text(formData.get("skills")),
    motivation: text(formData.get("motivation")),
    time: text(formData.get("time")),
    involvement: texts(formData.getAll("involvement")),
    consent: text(formData.get("consent")) === "on",
  };

  if (!application.fullName) {
    return { ok: false, error: "Please enter your full name.", field: "fullName" };
  }
  if (!application.email) {
    return { ok: false, error: "Please enter your email address.", field: "email" };
  }
  if (!EMAIL_PATTERN.test(application.email)) {
    return { ok: false, error: "Please enter a valid email address.", field: "email" };
  }
  if (!application.city) {
    return { ok: false, error: "Please enter your city or area.", field: "city" };
  }
  if (!isOneOf(application.age, AGE_OPTIONS)) {
    return { ok: false, error: "Please select your age.", field: "age" };
  }
  if (!isOneOf(application.status, STATUS_OPTIONS)) {
    return { ok: false, error: "Please tell us what you are currently doing.", field: "status" };
  }
  if (
    application.interests.length === 0 ||
    !application.interests.every((value) => isOneOf(value, INTEREST_OPTIONS))
  ) {
    return { ok: false, error: "Please select at least one area of interest.", field: "interests" };
  }
  if (!application.motivation) {
    return {
      ok: false,
      error: "Please tell us why you want to join YouthLink.",
      field: "motivation",
    };
  }
  if (!isOneOf(application.time, TIME_OPTIONS)) {
    return { ok: false, error: "Please select how much time you can commit.", field: "time" };
  }
  if (
    application.involvement.length === 0 ||
    !application.involvement.every((value) => isOneOf(value, INVOLVEMENT_OPTIONS))
  ) {
    return {
      ok: false,
      error: "Please select how you would like to get involved.",
      field: "involvement",
    };
  }
  if (!application.consent) {
    return {
      ok: false,
      error: "Please confirm that your information is accurate and that we may contact you.",
      field: "consent",
    };
  }

  // TODO: deliver to an email/CRM provider
  return { ok: true };
}
