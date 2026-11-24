"use server";

import {
  DECLARATIONS,
  EMPLOYMENT_OPTIONS,
  GENDER_OPTIONS,
  HEARD_FROM_OPTIONS,
  LEADERSHIP_OPTIONS,
  OTHER,
  PORTFOLIO_EXTENSIONS,
  PORTFOLIO_MAX_BYTES,
  SKILL_OPTIONS,
} from "@/components/pages/join/options";
import { markEmailSent, saveJoinRegistration } from "@/lib/db";
import { SEND_FAILED_MESSAGE, sendFormEmail, type EmailAttachment } from "@/lib/email";

/** Name of the input the validation error refers to, so the form can point the browser at it. */
export type JoinField =
  | "fullName"
  | "age"
  | "gender"
  | "city"
  | "whatsapp"
  | "email"
  | "employment"
  | "employmentOther"
  | "studies"
  | "institution"
  | "heardFrom"
  | "heardFromOther"
  | "expectations"
  | "motivation"
  | "leadership"
  | "skills"
  | "skillsOther"
  | "portfolio"
  | "anyComments"
  | "declaration1"
  | "declaration2";

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
/** Digits with an optional leading +, spaces and dashes; 7 to 15 digits. */
const PHONE_PATTERN = /^\+?[\d\s-]{7,20}$/;

function text(value: FormDataEntryValue | null | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function texts(values: FormDataEntryValue[]): string[] {
  return values.map(text).filter((value) => value !== "");
}

function isOneOf(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

type Invalid = { ok: false; error: string; field: JoinField };
const invalid = (field: JoinField, error: string): Invalid => ({ ok: false, error, field });

/** Handles the /join-youthlink registration form. */
export async function submitJoinApplication(
  _prevState: JoinState,
  formData: FormData,
): Promise<JoinState> {
  // Bots fill the hidden honeypot inputs: pretend success and drop the submission.
  const trapped = HONEYPOT_FIELDS.filter((name) => text(formData.get(name)) !== "");
  if (trapped.length > 0) {
    console.warn(`[join] Dropped as spam: hidden field(s) filled: ${trapped.join(", ")}`);
    return { ok: true };
  }

  const form = {
    fullName: text(formData.get("fullName")),
    age: text(formData.get("age")),
    gender: text(formData.get("gender")),
    city: text(formData.get("city")),
    whatsapp: text(formData.get("whatsapp")),
    email: text(formData.get("email")),
    employment: text(formData.get("employment")),
    employmentOther: text(formData.get("employmentOther")),
    studies: text(formData.get("studies")),
    institution: text(formData.get("institution")),
    heardFrom: text(formData.get("heardFrom")),
    heardFromOther: text(formData.get("heardFromOther")),
    expectations: text(formData.get("expectations")),
    motivation: text(formData.get("motivation")),
    leadership: text(formData.get("leadership")),
    skills: texts(formData.getAll("skills")),
    skillsOther: text(formData.get("skillsOther")),
    portfolioNote: text(formData.get("portfolioNote")),
    neverBecome: text(formData.get("neverBecome")),
    youthInfluence: text(formData.get("youthInfluence")),
    comments: text(formData.get("anyComments")),
    declaration1: text(formData.get("declaration1")) === "on",
    declaration2: text(formData.get("declaration2")) === "on",
  };
  const upload = formData.get("portfolio");
  const portfolio = upload instanceof File && upload.size > 0 ? upload : null;

  const error = validate(form, portfolio);
  if (error) {
    console.warn(`[join] Rejected: invalid ${error.field}`);
    return error;
  }

  // "Other" answers are stored as the visitor's own text.
  const employment = form.employment === OTHER ? form.employmentOther : form.employment;
  const heardFrom = form.heardFrom === OTHER ? form.heardFromOther : form.heardFrom;
  const skills = form.skills.map((skill) => (skill === OTHER ? `Other: ${form.skillsOther}` : skill));

  let attachment: EmailAttachment | null = null;
  if (portfolio) {
    attachment = {
      name: portfolio.name,
      content: Buffer.from(await portfolio.arrayBuffer()).toString("base64"),
    };
  }

  // Save first so nothing is lost if the email fails; the email goes out either way.
  const savedId = await saveJoinRegistration({
    fullName: form.fullName,
    age: Number(form.age),
    gender: form.gender,
    city: form.city,
    whatsapp: form.whatsapp,
    email: form.email,
    employment,
    studies: form.studies,
    institution: form.institution,
    heardFrom,
    expectations: form.expectations,
    motivation: form.motivation,
    leadership: Number(form.leadership),
    skills,
    portfolioNote: form.portfolioNote,
    portfolioFileName: portfolio?.name ?? "",
    portfolioFileSize: portfolio?.size ?? null,
    neverBecome: form.neverBecome,
    youthInfluence: form.youthInfluence,
    comments: form.comments,
  });

  const sent = await sendFormEmail({
    subject: "YouthLink joining form",
    from: { name: form.fullName, email: form.email },
    fields: [
      { label: "Name", value: form.fullName },
      { label: "Age", value: form.age },
      { label: "Gender", value: form.gender },
      { label: "Country/City", value: form.city },
      { label: "WhatsApp", value: form.whatsapp },
      { label: "Email", value: form.email },
      { label: "Current Employment Status", value: employment },
      { label: "Area of studies (Degree)", value: form.studies },
      { label: "Institution Name", value: form.institution },
      { label: "Where did you hear about Youthlink?", value: heardFrom },
      { label: "Expectations & how they will contribute", value: form.expectations },
      { label: "Why join Youthlink?", value: form.motivation },
      { label: "Leadership skills (1-5)", value: form.leadership },
      { label: "Skills they can contribute", value: skills.join(", ") },
      { label: "Skill level & portfolio", value: form.portfolioNote },
      {
        label: "Portfolio file",
        value: portfolio ? `${portfolio.name} (attached)` : "",
      },
      { label: "What should Youthlink never become?", value: form.neverBecome },
      { label: "How can Muslim youth gain power and create right influence?", value: form.youthInfluence },
      { label: "Comments", value: form.comments },
      { label: "Applicant Declaration", value: "Agreed to both statements" },
    ],
    attachments: attachment ? [attachment] : [],
  });

  if (savedId !== null && sent) {
    await markEmailSent("join_registrations", savedId);
  }
  // Only a submission that was neither saved nor emailed is lost.
  if (savedId === null && !sent) {
    return { ok: false, error: SEND_FAILED_MESSAGE };
  }
  return { ok: true };
}

type Form = {
  fullName: string;
  age: string;
  gender: string;
  city: string;
  whatsapp: string;
  email: string;
  employment: string;
  employmentOther: string;
  studies: string;
  institution: string;
  heardFrom: string;
  heardFromOther: string;
  expectations: string;
  motivation: string;
  leadership: string;
  skills: string[];
  skillsOther: string;
  comments: string;
  declaration1: boolean;
  declaration2: boolean;
};

function validate(form: Form, portfolio: File | null): Invalid | null {
  if (!form.fullName) return invalid("fullName", "Please enter your name.");
  const age = Number(form.age);
  if (!/^\d{1,3}$/.test(form.age) || age < 10 || age > 100) {
    return invalid("age", "Please enter your age as a number.");
  }
  if (!isOneOf(form.gender, GENDER_OPTIONS)) return invalid("gender", "Please select your gender.");
  if (!form.city) return invalid("city", "Please enter your country/city.");
  if (!PHONE_PATTERN.test(form.whatsapp)) {
    return invalid("whatsapp", "Please enter your WhatsApp number with country code.");
  }
  if (form.email && !EMAIL_PATTERN.test(form.email)) {
    return invalid("email", "Please enter a valid email address.");
  }
  if (!isOneOf(form.employment, EMPLOYMENT_OPTIONS)) {
    return invalid("employment", "Please select your current employment status.");
  }
  if (form.employment === OTHER && !form.employmentOther) {
    return invalid("employmentOther", "Please describe your employment status.");
  }
  if (!form.studies) return invalid("studies", "Please enter your area of studies and degree.");
  if (!form.institution) return invalid("institution", "Please enter your institution name.");
  if (!isOneOf(form.heardFrom, HEARD_FROM_OPTIONS)) {
    return invalid("heardFrom", "Please tell us where you heard about Youthlink.");
  }
  if (form.heardFrom === OTHER && !form.heardFromOther) {
    return invalid("heardFromOther", "Please tell us where you heard about Youthlink.");
  }
  if (!form.expectations) {
    return invalid("expectations", "Please tell us what you expect from Youthlink.");
  }
  if (!form.motivation) return invalid("motivation", "Please tell us why you want to join.");
  if (!isOneOf(form.leadership, LEADERSHIP_OPTIONS)) {
    return invalid("leadership", "Please rate your leadership skills from 1 to 5.");
  }
  if (form.skills.length === 0 || !form.skills.every((skill) => isOneOf(skill, SKILL_OPTIONS))) {
    return invalid("skills", "Please select at least one skill.");
  }
  if (form.skills.includes(OTHER) && !form.skillsOther) {
    return invalid("skillsOther", "Please describe your other skill.");
  }
  if (portfolio) {
    const extension = portfolio.name.slice(portfolio.name.lastIndexOf(".")).toLowerCase();
    if (!isOneOf(extension, PORTFOLIO_EXTENSIONS)) {
      return invalid("portfolio", "Please upload a PDF, Word, PowerPoint, JPG, PNG or ZIP file.");
    }
    if (portfolio.size > PORTFOLIO_MAX_BYTES) {
      return invalid("portfolio", "Please choose a file smaller than 4 MB.");
    }
  }
  if (!form.comments) return invalid("anyComments", "Please add a comment.");
  if (!form.declaration1) {
    return invalid("declaration1", `Please agree to: ${DECLARATIONS[0]}`);
  }
  if (!form.declaration2) {
    return invalid("declaration2", `Please agree to: ${DECLARATIONS[1]}`);
  }
  return null;
}
