import "server-only";

import { site } from "@/content/site";

/** One "Label: value" line of the notification email. Empty values are still listed. */
export interface EmailField {
  label: string;
  value: string;
}

export interface FormEmail {
  /** Email subject, e.g. "YouthLink joining form". */
  subject: string;
  /** The visitor who submitted the form; replies go to them. */
  from: { name: string; email: string };
  fields: EmailField[];
}

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Comma-separated list in FORM_TO_EMAIL → Brevo recipients. */
function recipients(): { email: string }[] {
  return (process.env.FORM_TO_EMAIL ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ email }));
}

function buildBodies({ subject, from, fields }: FormEmail) {
  const footer = `This is a notification that a form was submitted on your website (${site.name} ${site.url}).`;

  const text = [
    `From: ${from.name} <${from.email}>`,
    `Subject: ${subject}`,
    "",
    "Message Body:",
    ...fields.map((field) => `${field.label}: ${field.value}`),
    "",
    "--",
    footer,
  ].join("\n");

  const line = (label: string, value: string) =>
    `<div><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</div>`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#111">
${line("From", `${from.name} <${from.email}>`)}
${line("Subject", subject)}
<br>
<div><strong>Message Body:</strong></div>
${fields.map((field) => line(field.label, field.value)).join("\n")}
<br>
<div style="color:#777">--<br>${escapeHtml(footer)}</div>
</div>`;

  return { text, html };
}

/**
 * Sends a form submission to the YouthLink inbox through Brevo's transactional email API.
 * Configured by BREVO_API_KEY, FORM_TO_EMAIL, FORM_FROM_EMAIL and FORM_FROM_NAME (see
 * .env.example). Returns false (and logs why) when it is not configured or Brevo rejects it.
 */
export async function sendFormEmail(email: FormEmail): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const to = recipients();
  const senderEmail = process.env.FORM_FROM_EMAIL;
  if (!apiKey || to.length === 0 || !senderEmail) {
    console.error(
      "[email] Not sent: set BREVO_API_KEY, FORM_TO_EMAIL and FORM_FROM_EMAIL in the environment.",
    );
    return false;
  }

  const { text, html } = buildBodies(email);
  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: process.env.FORM_FROM_NAME || "YouthlinkPakistan", email: senderEmail },
        to,
        replyTo: { name: email.from.name, email: email.from.email },
        subject: email.subject,
        textContent: text,
        htmlContent: html,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      console.error(`[email] Brevo responded ${response.status}: ${await response.text()}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[email] Brevo request failed:", error);
    return false;
  }
}

/** Shown to the visitor when the email could not be sent. */
export const SEND_FAILED_MESSAGE = `Sorry, we couldn't send your submission. Please try again, or email us at ${site.contact.email}.`;
